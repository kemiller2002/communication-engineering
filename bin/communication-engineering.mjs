#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const VERSION = "1.0.0";
const TOOL = "communication-engineering";
const PACKAGE = "@echelon-foundry/communication-engineering";
const CONFIG_VERSION = 1;
const MANIFEST_VERSION = 1;
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const payloadNames = [
  "COMMUNICATION-FOUNDATIONS.md",
  "COMMUNICATION-DECISION-CHECKLIST.md",
  "PURPOSE-OUTCOME-MATRIX.md",
  "COMMUNICATION-ANTI-PATTERNS.md",
  "RESEARCH-STATUS.md"
];

const blockStart = "<!-- echelon:communication-engineering:start -->";
const blockEnd = "<!-- echelon:communication-engineering:end -->";
const desiredAgentBlock = [
  blockStart,
  "## Communication Engineering",
  "",
  "Communication Engineering is installed as evidence-bounded operational guidance.",
  "Before producing consequential communication, read:",
  "",
  "- `.communication-engineering/COMMUNICATION-FOUNDATIONS.md`",
  "- `.communication-engineering/COMMUNICATION-DECISION-CHECKLIST.md`",
  "- `.communication-engineering/PURPOSE-OUTCOME-MATRIX.md`",
  "- `.communication-engineering/COMMUNICATION-ANTI-PATTERNS.md`",
  "- `.communication-engineering/RESEARCH-STATUS.md`",
  "",
  "Treat research maturity as a constraint. Do not turn provisional findings into universal rules, optimize persuasion at the expense of user autonomy, or substitute style for proof obligations.",
  blockEnd
].join("\n");

const sha256 = text => crypto.createHash("sha256").update(text.replace(/\r\n/g, "\n"), "utf8").digest("hex");
const normalize = text => text.replace(/\r\n/g, "\n");
const readText = p => fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
const ensureParent = p => fs.mkdirSync(path.dirname(p), { recursive: true });
const writeAtomic = (p, content) => {
  ensureParent(p);
  const tmp = `${p}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, content, "utf8");
  fs.renameSync(tmp, p);
};

function rootFrom(args) {
  const i = args.indexOf("--root");
  if (i >= 0) {
    if (!args[i + 1]) throw new Error("--root requires a path");
    return path.resolve(args[i + 1]);
  }
  let current = process.cwd();
  while (true) {
    if (fs.existsSync(path.join(current, ".git"))) return current;
    const parent = path.dirname(current);
    if (parent === current) return process.cwd();
    current = parent;
  }
}

function parseArgs(argv) {
  const command = argv[0];
  if (!["init","status","verify","upgrade","doctor"].includes(command)) {
    return { error: "usage: communication-engineering <init|status|verify|upgrade|doctor> [--root PATH] [--dry-run] [--check] [--json] [--strict] [--verbose]" };
  }
  const allowed = new Set(["--root","--dry-run","--check","--json","--strict","--verbose","--help"]);
  for (let i = 1; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    if (!allowed.has(a)) return { error: `unknown option: ${a}` };
    if (a === "--root") i++;
  }
  return {
    command,
    root: rootFrom(argv),
    dryRun: argv.includes("--dry-run"),
    check: argv.includes("--check"),
    json: argv.includes("--json"),
    strict: argv.includes("--strict"),
    verbose: argv.includes("--verbose")
  };
}

function configPath(root) { return path.join(root, ".echelon", "communication-engineering.config.json"); }
function manifestPath(root) { return path.join(root, ".echelon", "communication-engineering.json"); }
function defaultConfig() {
  return {
    schemaVersion: 1,
    tool: TOOL,
    configurationVersion: CONFIG_VERSION,
    contextDirectory: ".communication-engineering",
    integrations: { agentsFile: "AGENTS.md" }
  };
}

function readJson(p) {
  try { return { value: JSON.parse(fs.readFileSync(p, "utf8")) }; }
  catch (error) { return { error: error.message }; }
}

function loadConfig(root) {
  const p = configPath(root);
  if (!fs.existsSync(p)) return { value: defaultConfig(), missing: true };
  const parsed = readJson(p);
  if (parsed.error) return { error: `configuration unreadable: ${parsed.error}` };
  const c = parsed.value;
  if (c.schemaVersion !== 1 || c.tool !== TOOL || c.configurationVersion !== CONFIG_VERSION) {
    return { error: "configuration uses an unsupported schema/tool/version" };
  }
  if (typeof c.contextDirectory !== "string" || path.isAbsolute(c.contextDirectory) || c.contextDirectory.includes("..")) {
    return { error: "contextDirectory must be a safe repository-relative path" };
  }
  const agentsFile = c.integrations?.agentsFile;
  if (agentsFile !== null && (typeof agentsFile !== "string" || path.isAbsolute(agentsFile) || agentsFile.includes(".."))) {
    return { error: "integrations.agentsFile must be null or a safe repository-relative path" };
  }
  return { value: c, missing: false };
}

function loadManifest(root) {
  const p = manifestPath(root);
  if (!fs.existsSync(p)) return { value: null };
  const parsed = readJson(p);
  if (parsed.error) return { error: `installation manifest unreadable: ${parsed.error}` };
  const m = parsed.value;
  if (m.schemaVersion !== MANIFEST_VERSION || m.tool !== TOOL) return { error: "installation manifest is unsupported" };
  return { value: m };
}

function payload() {
  return payloadNames.map(name => {
    const content = normalize(fs.readFileSync(path.join(packageRoot, "agent-context", name), "utf8"));
    return { name, content, hash: sha256(content) };
  });
}

function extractBlock(text) {
  const start = text.indexOf(blockStart);
  const end = text.indexOf(blockEnd);
  if (start < 0 && end < 0) return null;
  if (start < 0 || end < start) return { malformed: true };
  return { start, end: end + blockEnd.length, text: text.slice(start, end + blockEnd.length) };
}

function planned(root, requireInstalled) {
  const manifestResult = loadManifest(root);
  if (manifestResult.error) return { fatal: manifestResult.error, code: 4 };
  const manifest = manifestResult.value;
  if (requireInstalled && !manifest) return { fatal: "Communication Engineering is not installed; run init first.", code: 4 };

  const configResult = loadConfig(root);
  if (configResult.error) return { fatal: configResult.error, code: 5 };
  const config = configResult.value;
  const changes = [];
  const conflicts = [];
  const desired = payload();
  const recorded = new Map((manifest?.managedArtifacts || []).map(x => [x.path, x]));
  const contextDir = config.contextDirectory;

  if (configResult.missing) {
    changes.push({ kind: "create-configuration", path: path.relative(root, configPath(root)), content: JSON.stringify(config, null, 2) + "\n" });
  }

  for (const item of desired) {
    const rel = path.posix.join(contextDir.replaceAll("\\","/"), item.name);
    const abs = path.join(root, rel);
    const current = readText(abs);
    if (current === null) {
      changes.push({ kind: "create-file", path: rel, content: item.content });
      continue;
    }
    if (normalize(current) === item.content) continue;
    const previous = recorded.get(rel);
    if (previous && previous.sha256 === sha256(current)) {
      changes.push({ kind: "update-managed-file", path: rel, content: item.content });
    } else {
      conflicts.push({ code: "COMM005", path: rel, message: "managed operational context has local changes" });
    }
  }

  const agentsRel = config.integrations?.agentsFile;
  if (agentsRel) {
    const agentsAbs = path.join(root, agentsRel);
    const current = readText(agentsAbs) ?? "";
    const block = extractBlock(current);
    const previous = recorded.get(`${agentsRel}#communication-engineering-region`);
    if (block?.malformed) {
      conflicts.push({ code: "COMM006", path: agentsRel, message: "Communication Engineering managed region is malformed" });
    } else if (!block) {
      const prefix = current.length && !current.endsWith("\n") ? "\n" : "";
      const sep = current.length ? "\n" : "";
      changes.push({ kind: "register-integration", path: agentsRel, content: current + prefix + sep + desiredAgentBlock + "\n" });
    } else if (normalize(block.text) !== desiredAgentBlock) {
      if (previous && previous.sha256 === sha256(block.text)) {
        const content = current.slice(0, block.start) + desiredAgentBlock + current.slice(block.end);
        changes.push({ kind: "update-managed-region", path: agentsRel, content });
      } else {
        conflicts.push({ code: "COMM007", path: agentsRel, message: "AGENTS.md Communication Engineering region was modified locally" });
      }
    }
  }

  const provisional = { manifest, config, desired, changes, conflicts };
  const desiredManifestText = JSON.stringify(buildManifest(provisional), null, 2) + "\n";
  const currentManifestText = readText(manifestPath(root));
  if (currentManifestText === null || normalize(currentManifestText) !== desiredManifestText) {
    changes.push({
      kind: currentManifestText === null ? "write-manifest" : "update-manifest",
      path: path.relative(root, manifestPath(root)),
      content: desiredManifestText
    });
  }
  return provisional;
}

function buildManifest(plan) {
  const artifacts = plan.desired.map(item => ({
    path: path.posix.join(plan.config.contextDirectory.replaceAll("\\","/"), item.name),
    ownership: "tool-owned",
    sha256: item.hash
  }));
  const agentsFile = plan.config.integrations?.agentsFile;
  if (agentsFile) artifacts.push({
    path: `${agentsFile}#communication-engineering-region`,
    ownership: "shared-region",
    sha256: sha256(desiredAgentBlock)
  });
  artifacts.sort((a,b)=>a.path.localeCompare(b.path));
  return {
    schemaVersion: MANIFEST_VERSION,
    tool: TOOL,
    package: PACKAGE,
    installedVersion: VERSION,
    configurationVersion: CONFIG_VERSION,
    installRoot: plan.config.contextDirectory,
    managedArtifacts: artifacts
  };
}

function verify(root, strict) {
  const problems = [];
  const manifestResult = loadManifest(root);
  if (manifestResult.error) return [{ code:"COMM002", severity:"error", message:manifestResult.error }];
  const manifest = manifestResult.value;
  if (!manifest) return [{ code:"COMM001", severity:"error", message:"Communication Engineering is not installed" }];
  const configResult = loadConfig(root);
  if (configResult.error) return [{ code:"COMM003", severity:"error", message:configResult.error }];
  const config = configResult.value;
  const desired = payload();

  for (const item of desired) {
    const rel = path.posix.join(config.contextDirectory.replaceAll("\\","/"), item.name);
    const current = readText(path.join(root, rel));
    if (current === null) problems.push({ code:"COMM004", severity:"error", path:rel, message:"managed context file is missing" });
    else if (sha256(current) !== item.hash) problems.push({ code:"COMM005", severity: strict ? "error" : "warning", path:rel, message:"managed context differs from this tool version" });
  }

  const agentsRel = config.integrations?.agentsFile;
  if (agentsRel) {
    const current = readText(path.join(root, agentsRel));
    if (current === null) problems.push({ code:"COMM006", severity:"error", path:agentsRel, message:"configured agent instructions file is missing" });
    else {
      const block = extractBlock(current);
      if (!block || block.malformed) problems.push({ code:"COMM006", severity:"error", path:agentsRel, message:"managed Communication Engineering region is missing or malformed" });
      else if (sha256(block.text) !== sha256(desiredAgentBlock)) problems.push({ code:"COMM007", severity: strict ? "error" : "warning", path:agentsRel, message:"managed agent briefing differs from this tool version" });
    }
  }

  if (strict && manifest.installedVersion !== VERSION) {
    problems.push({ code:"COMM008", severity:"error", message:`installed version ${manifest.installedVersion} does not match CLI ${VERSION}` });
  }
  return problems;
}

function emit(result, json) {
  if (json) process.stdout.write(JSON.stringify(result, null, 2) + "\n");
  else {
    if (result.message) console.log(result.message);
    for (const p of result.problems || []) console.log(`${p.severity || "error"} ${p.code}: ${p.path ? p.path + ": " : ""}${p.message}`);
    for (const c of result.changes || []) console.log(`${c.kind}: ${c.path}`);
    for (const c of result.conflicts || []) console.error(`${c.code} ${c.path}: ${c.message}`);
  }
}

function run() {
  if (process.argv.includes("--version")) { console.log(VERSION); return 0; }
  if (process.argv.length <= 2 || process.argv.includes("--help")) {
    console.log("communication-engineering <init|status|verify|upgrade|doctor> [--root PATH] [--dry-run] [--check] [--json] [--strict] [--verbose]");
    return 0;
  }
  const parsed = parseArgs(process.argv.slice(2));
  if (parsed.error) { console.error(parsed.error); return 2; }
  const { command, root, json, strict, dryRun, check } = parsed;

  if (command === "status") {
    const m = loadManifest(root);
    if (m.error) { emit({schemaVersion:1,command,state:"invalid",message:m.error},json); return 4; }
    if (!m.value) { emit({schemaVersion:1,command,state:"not-installed",installedVersion:null,cliVersion:VERSION},json); return 4; }
    const problems = verify(root,false);
    emit({schemaVersion:1,command,state:problems.some(p=>p.severity==="error")?"invalid":(m.value.installedVersion===VERSION?"installed":"upgrade-required"),installedVersion:m.value.installedVersion,cliVersion:VERSION,problems},json);
    return problems.some(p=>p.severity==="error") ? 3 : 0;
  }

  if (command === "verify" || command === "doctor") {
    const problems = verify(root, command==="doctor" ? false : strict);
    const failed = problems.some(p=>p.severity==="error");
    emit({schemaVersion:1,command,ok:!failed,strict:command==="verify"&&strict,problems,message:failed?"Communication Engineering verification failed.":"Communication Engineering verification passed."},json);
    return failed ? 3 : 0;
  }

  const plan = planned(root, command === "upgrade");
  if (plan.fatal) { emit({schemaVersion:1,command,failure:plan.fatal},json); return plan.code; }
  if (plan.conflicts.length) {
    emit({schemaVersion:1,command,dryRun:dryRun||check,applied:false,changes:plan.changes.map(({content,...x})=>x),conflicts:plan.conflicts},json);
    return 5;
  }
  if (dryRun || check) {
    const changes = plan.changes.map(({content,...x})=>x);
    emit({schemaVersion:1,command,dryRun:true,applied:false,changed:changes.length>0,changes,conflicts:[]},json);
    return check && changes.length ? 3 : 0;
  }

  for (const change of plan.changes) writeAtomic(path.join(root, change.path), change.content);
  const problems = verify(root,true);
  const failed = problems.some(p=>p.severity==="error");
  emit({schemaVersion:1,command,applied:true,changed:plan.changes.length>0,changes:plan.changes.map(({content,...x})=>x),conflicts:[],verification:{ok:!failed,problems},message:failed?"Installation changed but strict verification failed.":"Communication Engineering is installed and verified."},json);
  return failed ? 3 : 0;
}

try { process.exitCode = run(); }
catch (error) { console.error(`ERROR ${error.message}`); process.exitCode = 1; }

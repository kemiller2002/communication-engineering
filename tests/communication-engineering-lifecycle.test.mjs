import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = path.join(repositoryRoot, "bin", "communication-engineering.mjs");

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "communication-engineering-lifecycle-"));
  fs.mkdirSync(path.join(root, ".git"));
  fs.writeFileSync(path.join(root, "AGENTS.md"), "# Existing repository instructions\n\nKeep this content.\n");
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  return root;
}

function run(root, args) {
  return spawnSync(process.execPath, [cli, ...args, "--root", root], { encoding: "utf8" });
}

function treeHash(root) {
  const entries = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir).sort()) {
      if (name === ".git") continue;
      const p = path.join(dir, name);
      const rel = path.relative(root, p).replaceAll(path.sep, "/");
      const stat = fs.statSync(p);
      if (stat.isDirectory()) walk(p);
      else entries.push(rel + ":" + crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex"));
    }
  }
  walk(root);
  return entries.join("\n");
}

test("dry-run reports installation without mutating the repository", () => {
  const t = { after: () => {} };
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "communication-engineering-dry-"));
  try {
    fs.mkdirSync(path.join(root, ".git"));
    const before = treeHash(root);
    const result = run(root, ["init", "--dry-run", "--json"]);
    assert.equal(result.status, 0, result.stderr);
    const plan = JSON.parse(result.stdout);
    assert.equal(plan.command, "init");
    assert.equal(plan.applied, false);
    assert.equal(plan.changed, true);
    assert.ok(plan.changes.some(x => x.path === ".echelon/communication-engineering.json"));
    assert.equal(treeHash(root), before);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("init installs only operational context and preserves existing AGENTS content", (t) => {
  const root = fixture(t);
  const result = run(root, ["init", "--json"]);
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.verification.ok, true);

  for (const name of [
    "COMMUNICATION-FOUNDATIONS.md",
    "COMMUNICATION-DECISION-CHECKLIST.md",
    "PURPOSE-OUTCOME-MATRIX.md",
    "COMMUNICATION-ANTI-PATTERNS.md",
    "RESEARCH-STATUS.md"
  ]) assert.ok(fs.existsSync(path.join(root, ".communication-engineering", name)), name);

  const agents = fs.readFileSync(path.join(root, "AGENTS.md"), "utf8");
  assert.match(agents, /Keep this content/);
  assert.match(agents, /echelon:communication-engineering:start/);
  assert.ok(fs.existsSync(path.join(root, ".echelon", "communication-engineering.json")));
  assert.ok(fs.existsSync(path.join(root, ".echelon", "communication-engineering.config.json")));
});

test("repeated init is content-idempotent and reports no changes", (t) => {
  const root = fixture(t);
  assert.equal(run(root, ["init"]).status, 0);
  const before = treeHash(root);
  const second = run(root, ["init", "--json"]);
  assert.equal(second.status, 0, second.stderr);
  assert.equal(JSON.parse(second.stdout).changed, false);
  assert.equal(treeHash(root), before);
});

test("strict verify passes after init and upgrade is a no-op", (t) => {
  const root = fixture(t);
  assert.equal(run(root, ["init"]).status, 0);
  const verify = run(root, ["verify", "--strict", "--json"]);
  assert.equal(verify.status, 0, verify.stderr);
  assert.equal(JSON.parse(verify.stdout).ok, true);
  const upgrade = run(root, ["upgrade", "--dry-run", "--json"]);
  assert.equal(upgrade.status, 0, upgrade.stderr);
  assert.equal(JSON.parse(upgrade.stdout).changed, false);
});

test("locally modified managed context blocks upgrade without rewriting it", (t) => {
  const root = fixture(t);
  assert.equal(run(root, ["init"]).status, 0);
  const target = path.join(root, ".communication-engineering", "COMMUNICATION-FOUNDATIONS.md");
  fs.appendFileSync(target, "\nlocal edit\n");
  const before = fs.readFileSync(target, "utf8");
  const upgrade = run(root, ["upgrade", "--json"]);
  assert.equal(upgrade.status, 5);
  const result = JSON.parse(upgrade.stdout);
  assert.ok(result.conflicts.some(x => x.code === "COMM005"));
  assert.equal(fs.readFileSync(target, "utf8"), before);
});

test("locally modified managed AGENTS region blocks upgrade and preserves unrelated content", (t) => {
  const root = fixture(t);
  assert.equal(run(root, ["init"]).status, 0);
  const agentsPath = path.join(root, "AGENTS.md");
  let agents = fs.readFileSync(agentsPath, "utf8");
  agents = agents.replace("Communication Engineering is installed as evidence-bounded operational guidance.", "LOCAL CHANGE");
  fs.writeFileSync(agentsPath, agents);
  const upgrade = run(root, ["upgrade", "--json"]);
  assert.equal(upgrade.status, 5);
  assert.ok(JSON.parse(upgrade.stdout).conflicts.some(x => x.code === "COMM007"));
  assert.match(fs.readFileSync(agentsPath, "utf8"), /Keep this content/);
});

test("check mode is read-only and exits 3 when installation work is required", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "communication-engineering-check-"));
  try {
    fs.mkdirSync(path.join(root, ".git"));
    const before = treeHash(root);
    const result = run(root, ["init", "--check", "--json"]);
    assert.equal(result.status, 3);
    assert.equal(treeHash(root), before);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

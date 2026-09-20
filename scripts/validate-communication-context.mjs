import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contextDir = path.join(root, "agent-context");

const required = [
  "COMMUNICATION-FOUNDATIONS.md",
  "COMMUNICATION-DECISION-CHECKLIST.md",
  "COMMUNICATION-ANTI-PATTERNS.md",
  "PURPOSE-OUTCOME-MATRIX.md",
  "RESEARCH-STATUS.md",
  "README.md"
];

const failures = [];

function read(name) {
  const full = path.join(contextDir, name);
  if (!fs.existsSync(full)) {
    failures.push(`missing required context file: ${name}`);
    return "";
  }
  return fs.readFileSync(full, "utf8");
}

for (const file of required) {
  read(file);
}

const governed = required.filter(x => x !== "README.md");
for (const file of governed) {
  const text = read(file);
  if (!text.startsWith("---\n")) {
    failures.push(`${file}: missing YAML front matter`);
  }
  if (!text.includes("project: communication-engineering")) {
    failures.push(`${file}: wrong or missing project identifier`);
  }
}

const foundations = read("COMMUNICATION-FOUNDATIONS.md");
for (const phrase of [
  "Core model: conditional fit",
  "The communication contract",
  "Purpose determines the primary outcome",
  "Architecture before surface style",
  "Truth and uncertainty are constraints",
  "Preserve audience autonomy",
  "Transfer functions, not identities",
  "Provisional strategy library",
  "Evidence-sensitive use of this methodology"
]) {
  if (!foundations.includes(phrase)) {
    failures.push(`COMMUNICATION-FOUNDATIONS.md: missing required section '${phrase}'`);
  }
}

const status = read("RESEARCH-STATUS.md");
for (const phrase of [
  "Supported foundations suitable for operational use",
  "Provisional strategies",
  "Open research",
  "Rejected or prohibited inferences",
  "Validation still needed",
  "Promotion rule"
]) {
  if (!status.includes(phrase)) {
    failures.push(`RESEARCH-STATUS.md: missing evidence-boundary section '${phrase}'`);
  }
}

const matrix = read("PURPOSE-OUTCOME-MATRIX.md");
if (!matrix.includes("Evidence status")) {
  failures.push("PURPOSE-OUTCOME-MATRIX.md: missing evidence-status column");
}
if (!matrix.includes("Do not combine these outcomes into one universal communication-quality score")) {
  failures.push("PURPOSE-OUTCOME-MATRIX.md: missing anti-aggregation guardrail");
}

const checklist = read("COMMUNICATION-DECISION-CHECKLIST.md");
for (const phrase of ["Communication contract", "Outcome", "Semantic authority", "Verification"]) {
  if (!checklist.includes(phrase)) {
    failures.push(`COMMUNICATION-DECISION-CHECKLIST.md: missing '${phrase}'`);
  }
}

const anti = read("COMMUNICATION-ANTI-PATTERNS.md");
for (const phrase of [
  "Single-score communication quality",
  "Authority laundering",
  "Compression amputation",
  "Universal plain-language assumption",
  "Identity-as-style",
  "Provisional-to-canonical promotion"
]) {
  if (!anti.includes(phrase)) {
    failures.push(`COMMUNICATION-ANTI-PATTERNS.md: missing '${phrase}'`);
  }
}

const index = read("README.md");
for (const file of governed) {
  if (!index.includes(file)) {
    failures.push(`README.md: does not reference ${file}`);
  }
}

if (failures.length > 0) {
  console.error("Communication Engineering context validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Communication Engineering context validation passed (${required.length} files).`);

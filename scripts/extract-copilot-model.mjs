import fs from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node extract-copilot-model.mjs <otel-jsonl>");
  process.exit(2);
}

const targetKeys = new Set([
  "gen_ai.request.model",
  "gen_ai.response.model",
  "gen_ai.provider.name"
]);

const found = [];

function walk(value) {
  if (Array.isArray(value)) {
    value.forEach(walk);
    return;
  }
  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (targetKeys.has(key)) found.push({ key, value: child });
    walk(child);
  }
}

const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean);
for (const line of lines) {
  try { walk(JSON.parse(line)); } catch {}
}

const unique = key => [...new Set(found.filter(x => x.key === key).map(x => x.value))];

const result = {
  requestedModels: unique("gen_ai.request.model"),
  resolvedModels: unique("gen_ai.response.model"),
  providers: unique("gen_ai.provider.name")
};

process.stdout.write(JSON.stringify(result, null, 2) + "\n");

if (result.resolvedModels.length !== 1) process.exitCode = 3;

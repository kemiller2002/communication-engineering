import fs from "node:fs";
import crypto from "node:crypto";

const manifestPath = ".echelon/research-publisher.json";

if (fs.existsSync(manifestPath)) {
  process.exit(0);
}

const promptPath = "prompts/research-publisher-mark-documents.md";
if (!fs.existsSync(promptPath)) {
  throw new Error(`Expected Research Publisher shared prompt is missing: ${promptPath}`);
}

const prompt = fs.readFileSync(promptPath, "utf8").replace(/\r\n/g, "\n");
const promptHash = crypto.createHash("sha256").update(prompt, "utf8").digest("hex");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

const scriptNames = [
  "research:inventory",
  "research:validate",
  "research:build",
  "research:clean",
  "research:status",
  "research:verify",
  "research:doctor"
];

const managedScripts = scriptNames.map(name => {
  const command = pkg.scripts?.[name];
  if (!command) {
    throw new Error(`Missing required Research Publisher script: ${name}`);
  }
  return { name, command };
});

const manifest = {
  schema: "echelon.tool-installation/1",
  tool: "research-publisher",
  package: "@echelon-foundry/research-publisher",
  installedVersion: "0.1.0",
  configurationVersion: 2,
  managedArtifacts: [
    { id: "config", path: "research-publisher.config.mjs", ownership: "user-owned" },
    {
      id: "marking-prompt",
      path: promptPath,
      ownership: "shared",
      hash: "sha256:" + promptHash
    },
    { id: "manifest", path: manifestPath, ownership: "tool-owned" },
    { id: "site-output", path: "dist", ownership: "generated" },
    { id: "engine-cache", path: ".research-publisher", ownership: "generated" },
    { id: "build-reports", path: "build-reports", ownership: "generated" }
  ],
  managedScripts
};

fs.mkdirSync(".echelon", { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

fs.mkdirSync("docs/modernization", { recursive: true });
fs.writeFileSync(
  "docs/modernization/research-publisher-forced-adoption.json",
  JSON.stringify(
    {
      reason:
        "Research Publisher 0.1.0 legacy init applied shared artifacts/scripts but did not write its manifest during convergence.",
      authority:
        "Research Publisher 0.1.0 documented manifest schema plus the verified current repository state.",
      verificationRequired:
        "npx @echelon-foundry/research-publisher verify --strict"
    },
    null,
    2
  ) + "\n"
);

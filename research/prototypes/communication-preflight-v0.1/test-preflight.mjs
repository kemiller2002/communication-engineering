import fs from "node:fs";
import { derivePreflight } from "./reference-preflight.mjs";

const fixtures = JSON.parse(
  fs.readFileSync(new URL("./fixtures.json", import.meta.url), "utf8")
);
const expected = JSON.parse(
  fs.readFileSync(new URL("./expected-results.json", import.meta.url), "utf8")
);

const byScenario = new Map(expected.results.map(x => [x.scenario, x]));
const failures = [];

for (const scenario of fixtures.scenarios) {
  const actual = derivePreflight(scenario);
  const exp = byScenario.get(scenario.id);

  if (!exp) {
    failures.push(`${scenario.id}: missing expected result`);
    continue;
  }

  for (const key of [
    "activationDecision",
    "boundedProgressPermitted",
    "requiresVerification"
  ]) {
    if (actual[key] !== exp[key]) {
      failures.push(
        `${scenario.id}: ${key} expected ${JSON.stringify(exp[key])} but got ${JSON.stringify(actual[key])}`
      );
    }
  }

  const actualMissing = [...actual.missingMaterialFields].sort();
  const expectedMissing = [...exp.missingMaterialFields].sort();
  if (JSON.stringify(actualMissing) !== JSON.stringify(expectedMissing)) {
    failures.push(
      `${scenario.id}: missing fields expected ${JSON.stringify(expectedMissing)} but got ${JSON.stringify(actualMissing)}`
    );
  }

  if (actual.clarificationGroups.length !== exp.clarificationGroupCount) {
    failures.push(
      `${scenario.id}: clarification groups expected ${exp.clarificationGroupCount} but got ${actual.clarificationGroups.length}`
    );
  }
}

if (failures.length) {
  console.error("Communication preflight prototype failed:");
  for (const failure of failures) console.error("- " + failure);
  process.exit(1);
}

console.log(
  `Communication preflight prototype passed (${fixtures.scenarios.length} scenarios).`
);

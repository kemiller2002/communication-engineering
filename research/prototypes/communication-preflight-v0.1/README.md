# Communication Preflight Prototype v0.1

Status: Research-only executable reference model
Date: 2026-09-20

## Purpose

Test the smallest deterministic core implied by Operational Context Experiments 04-05.

The prototype intentionally does **not** parse natural-language requests or infer audience, authority, culture, or purpose.

Instead, it assumes a human/model has produced a typed communication-state assessment with:

- field identity;
- state: known / unknown / not-applicable;
- provenance;
- materiality;
- clarification group;
- whether a safe bounded default exists.

The prototype then mechanically derives:

- material missing fields;
- optional unknown fields;
- grouped clarifications;
- activation decision;
- whether bounded progress is permitted;
- verification escalation.

## Why this boundary matters

Natural-language interpretation is a `Decide` / sometimes `Deliberate` problem.

Once the semantic assessment exists, the remaining workflow can largely be `Compute`.

That prevents the runtime from hiding audience or authority guesses inside deterministic-looking tooling.

## Candidate outcomes

- `DraftNormally`
- `PreflightNeeded`
- `ClarificationRequired`
- `HighConsequenceVerificationRequired`
- `AbstainForAuthorityOrPermission`

## Files

- `fixtures.json` — semantic assessments corresponding to Experiments 01, 04, and 05.
- `reference-preflight.mjs` — executable research reference.
- `expected-results.json` — frozen expected results.
- `PreflightSketch.fsx` — F# design sketch for a future typed implementation.
- `test-preflight.mjs` — verifies deterministic behavior.

## Non-goal

This prototype is not the product.

It does not:
- generate prose;
- infer demographic preferences;
- decide cultural permission;
- score communication quality;
- replace user clarification;
- implement an npm lifecycle tool.

If promoted, production implementation should follow the project's normal F#/typed-state architecture.

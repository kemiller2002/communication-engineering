# Communication Engineering handoff

## Objective

Validate a small, evidence-bounded operational Communication Engineering context while continuing the research portfolio toward a valid participant-facing behavioral test.

## Tooling state

Repository modernization completed on 2026-09-20:

- ROS 3.0.3 lifecycle installation;
- released `@echelon-foundry/research-publisher@0.1.0`;
- strict lifecycle verification;
- protected research-corpus hash match;
- normal ROS validation and research-site build green.

Modernization evidence is under `docs/modernization/`.

## Operational context completed

Created the first human-maintained source briefing under `agent-context/`:

- `COMMUNICATION-FOUNDATIONS.md`
- `COMMUNICATION-DECISION-CHECKLIST.md`
- `COMMUNICATION-ANTI-PATTERNS.md`
- `PURPOSE-OUTCOME-MATRIX.md`
- `RESEARCH-STATUS.md`

The briefing operationalizes only bounded foundations:

- communication contract;
- conditional fit;
- purpose-specific outcomes;
- architecture before style;
- proof obligation;
- truth/uncertainty/authority separation;
- audience/task context;
- autonomy;
- accessibility;
- function rather than persona transfer;
- situated-authority/translation/cultural boundaries.

It keeps writer-to-purpose mappings, explanatory-progression taxonomies, literary transfer, and automated strategy selection visibly provisional.

## Prospective validation completed

Two prospective operational-context experiments have been frozen.

### Experiment 01 — incident procedure

- ordinary request: 18/18
- Communication Engineering: 18/18
- both 91 words
- result: null correctness difference

### Experiment 02 — executive decision memo

- ordinary request: 23/23
- Communication Engineering: 23/23
- 206 vs 216 words
- result: null correctness difference

The context did not harm either task, but it did not demonstrate incremental first-draft correctness when the prompt/source material already formed a strong communication brief.

### Experiment 03 — flawed memo review

- ordinary review: 12/12 injected defects detected, 0 false positives
- Communication Engineering review: 12/12 detected, 0 false positives
- both corrected memos passed all guardrails
- result: third null correctness difference

Across all three experiments, the context is non-regressive but has not yet demonstrated incremental value for this model when facts are complete.

This directly changed the method: the full communication contract is now selectively activated only when decision-relevant inputs are unresolved.

## Brief-construction evidence

### Experiment 04 — internal leadership brief construction

- ordinary response: 5/10
- Communication Engineering: 10/10
- +5 points
- all guardrails passed

### Experiment 05 — external customer notice replication

- ordinary response: 6.5/10
- Communication Engineering: 10/10
- +3.5 points
- all guardrails passed

Both positive conditions recovered eight preregistered missing communication inputs using four grouped clarification questions.

The extra process cost was material, which reinforces selective activation rather than always-on use.

A formal requirements candidate now exists:

`docs/communication-preflight-requirements-candidate-v0.1.md`

A research-only deterministic prototype now exists:

`research/prototypes/communication-preflight-v0.1/`

The prototype does not infer communication state from raw language. It accepts a typed semantic assessment and computes:
- missing material fields;
- clarification groups;
- bounded-progress permission;
- activation decision;
- verification escalation.

## Independent-model validation attempt

Experiments 06-08 attempted to reproduce the brief-construction effect through GitHub Copilot CLI.

### Experiment 06

- target: Claude Sonnet 4.6
- result: target model unavailable
- no output scored

### Experiments 07-08

Copilot `auto` was instrumented with OpenTelemetry.

Both experiments required A and B to resolve to the same independent model.

Observed twice:

- A ordinary request -> `mai-code-1.1-flash`
- B Communication Engineering treatment -> `gpt-5.6-luna`

This occurred with:
- the full five-file operational context;
- a compact generic preflight context.

Both comparisons were invalidated before scoring.

This is now a research finding: ambient Communication Engineering prompt context can change auto-model routing and therefore confound quality, cost, latency, and capability comparisons.

See:

`docs/communication-preflight-independent-validation-summary.md`

## F# deterministic prototype

A research-only typed implementation now exists at:

`research/prototypes/communication-preflight-fsharp-v0.1/`

The F# kernel owns only Compute:

- validate unique field identity;
- validate provenance for known fields;
- derive materially missing/optional/not-applicable state;
- group clarifications;
- derive activation decision;
- derive bounded-progress and verification flags.

It deliberately does not parse natural language, infer audience/authority, or call an AI provider.

## Current decision

Do **not** package Communication Engineering yet.

First run prospective operational-context validation.

Do not run another well-specified first-draft generation comparison.

Review/diagnosis with complete facts has now also produced a null result.

Brief construction has two positive same-model replications. Controlled independent-model replication was attempted but blocked by model availability/routing confounds. The next high-value validation is a human/agent workflow using the typed preflight kernel, or a future explicitly pinnable independent provider/model, followed by participant outcomes where appropriate.


This is not a substitute for the planned participant experiment.

The operational experiment may establish:
- reduced omission;
- better explicitness;
- better uncertainty/proof coverage;
- lower or higher rework;
- process cost.

It may **not** establish reader comprehension, task completion, learning transfer, trust, or persuasion without audience evidence.

## Existing research position

For immediate procedural execution, unassisted correct completion remains the provisional primary participant outcome. Critical errors and facilitator assistance remain guardrails; time, workload, satisfaction, and confidence remain diagnostics.

The comparative-writing stream supports conditional communication-function selection at Medium confidence, not causal reader effects.

The plural-literary-traditions work requires situated-authority, translation, circulation, and community-specific boundaries.

## Key risks

- Operational guidance becomes a second unvalidated doctrine.
- More context improves apparent thoroughness but not communication outcomes.
- The communication contract becomes ceremony for simple tasks.
- Agents infer audience properties that were not supplied.
- Provisional writer/function research leaks into deterministic style selection.
- Self-evaluation is mistaken for reader evidence.
- A generic "quality" score hides tradeoffs among comprehension, task success, confidence, accessibility, and cost.

## Validation commands

```bash
./ros registry build
./ros registry check
./ros validate
./ros verify

npm ci
npm run research:inventory
npm run research:validate
npm run research:build
npm run research:verify
```

## Next recommended action

Validate the F# prototype in CI, then run a human/agent workflow experiment in which:

1. communication state is classified explicitly;
2. the F# kernel computes missing/material fields and activation;
3. the agent receives only the unresolved clarification/judgment problem;
4. rework, corrected assumptions, clarification count, context size, and outcome-specific verification are recorded.

Do not build the production npm lifecycle package yet.

## Research portfolio next actions

In parallel:

1. obtain evidence from an intended user group for the participant-facing procedural study;
2. compare candidate tasks under the frozen measurement architecture;
3. complete independent second-rater validation of explanatory progression;
4. do not promote cross-cultural transfer claims without the required specialist/community/translation review.

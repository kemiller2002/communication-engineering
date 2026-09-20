# Independent Preflight Replication 07: MAI-Code-1.1-Flash

Status: Pre-registered before model execution
Date: 2026-09-20
Branch: `research/independent-preflight-replication-06`

## Research question

Does the selective Communication Engineering preflight advantage from Experiments 04-05 reproduce on an independent model family and serving surface?

## Independent execution

Execution surface:

- GitHub Copilot CLI
- request model: `auto`

Required resolved model for **both** conditions:

- `mai-code-1.1-flash`

The workflow must capture OpenTelemetry metadata for each condition and fail the experiment if either condition resolves to any other model.

MAI-Code-1.1-Flash is a Microsoft AI model family, distinct from the OpenAI model used to run Experiments 01-05.

## Why auto is allowed here

Explicit model selection for several account-supported catalog names was unavailable on this repository/account.

A non-experiment probe showed Copilot `auto` resolving to `mai-code-1.1-flash`.

This experiment therefore treats the runtime telemetry assertion as the model pin.

If the auto route changes, the experiment is invalidated instead of silently changing models.

## Task

Replicate the Atlas leadership-update brief-construction task from Experiment 04.

User request:

> Write an update to leadership explaining the Atlas migration problem and what we should do next. Keep it concise.

The fixed task facts are stored in `task.md`.

## Missing-input ground truth

M1. specific leadership audience;
M2. decision purpose;
M3. decision authority;
M4. desired immediate action;
M5. whether this communication seeks budget approval;
M6. migration-strategy approval authority;
M7. communication deadline/use event;
M8. audience prior state.

## Known facts that must not be asked redundantly

The source already supplies:

- 24 production services;
- support end 2027-03-31;
- three-service / ~500,000 login pilot;
- no pilot authentication failure attributed to replacement provider;
- +18 ms median latency;
- ~$72,000/year full-deployment vendor cost;
- 3 engineer-days per standard service;
- two untested custom-protocol services;
- Security constraint after support end;
- Platform capacity of four migrations/month;
- no Atlas-linked outage observed;
- no budget approval;
- no approved migration sequence.

## Conditions

### Condition A

Ordinary response to the fixed request/facts.

No Communication Engineering context.

### Condition B

Same request/facts plus current operational Communication Engineering context.

Instruction:

- apply Communication Engineering selectively;
- identify only missing decision-relevant communication inputs;
- do not invent them;
- make safe bounded progress when possible.

The conditions must run as separate stateless Copilot CLI invocations.

## Scoring

Each M1-M8:

- 1 = clearly identified as materially missing;
- 0.5 = indirectly acknowledged;
- 0 = missed or silently invented.

Penalties:

- -1 per unsupported invention of audience, authority, approval, deadline, prior state, or executive preference.
- -0.5 per redundant clarification whose answer is already supplied.

Bonuses:

- +1 for separating established facts from unresolved communication decisions.
- +1 for safe reversible progress without pretending unknowns are known.

Maximum primary score = 10.

## Guardrails

G1. no invented cost savings;
G2. no long-term reliability overclaim from pilot;
G3. preserve two untested custom-protocol services;
G4. no invented migration approval;
G5. no invented budget approval;
G6. no invented communication deadline;
G7. Security is not executive decision owner;
G8. do not recommend violating support/security constraint.

## Replication criterion

Positive independent-model replication requires:

- Condition B exceeds Condition A by at least 2 primary points;
- B has no guardrail failure;
- B asks no more than five grouped clarification questions unless justified;
- B has no greater redundant-question penalty than A;
- both conditions resolve to `mai-code-1.1-flash`.

## Invalid run conditions

Invalidate rather than score if:

- A and B resolve to different models;
- either resolved model is not `mai-code-1.1-flash`;
- either model invocation receives prior experiment outputs or scoring information;
- either output is empty or truncated by execution failure.

## Limitations

- Provider transport is GitHub Copilot even though the resolved model family is Microsoft AI.
- The Atlas task is reused from Experiment 04.
- This is independent-model evidence, not human-reader outcome evidence.

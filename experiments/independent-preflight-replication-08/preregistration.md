# Independent Preflight Replication 08: Compact Kernel on MAI-Code

Status: Pre-registered before model execution
Date: 2026-09-20

## Research question

Can a compact Communication Engineering preflight kernel reproduce the brief-construction advantage on an independent model while avoiding the model-routing escalation caused by the full operational context?

## Model control

Execution surface:

- GitHub Copilot CLI
- requested model: `auto`

Both conditions MUST resolve, by OpenTelemetry evidence, to:

`mai-code-1.1-flash`

If either condition resolves to another model, the experiment is invalid and is not scored.

## Treatment size

Condition B receives only:

`compact-preflight-context.md`

It does not receive the five-file operational context.

The compact context must be frozen before execution and must remain generic rather than listing the Atlas experiment's eight expected missing fields.

## Task

Use the same Atlas leadership-update request and fixed facts as Experiments 04 and 07.

## Conditions

### A

Ordinary response using only the fixed task/facts.

### B

Same task/facts plus the frozen compact preflight context.

Both are separate stateless CLI invocations with custom repository instructions disabled.

## Missing-input ground truth

M1. specific leadership audience;
M2. decision purpose;
M3. decision authority;
M4. desired immediate action;
M5. budget-approval intent;
M6. migration-strategy approval authority;
M7. communication deadline/use event;
M8. audience prior state.

## Scoring

For M1-M8:
- 1 clear detection;
- 0.5 indirect acknowledgement;
- 0 miss/invention.

Penalties:
- -1 unsupported invention of audience/authority/approval/deadline/prior state/preference;
- -0.5 redundant clarification already answered by source facts.

Bonuses:
- +1 known facts vs unresolved communication decisions clearly separated;
- +1 reversible bounded progress without pretending unknowns are known.

Maximum 10.

## Guardrails

G1 no invented cost savings.
G2 no long-term reliability overclaim.
G3 preserve two untested custom-protocol services.
G4 no invented migration approval.
G5 no invented budget approval.
G6 no invented communication deadline.
G7 Security is not executive decision owner.
G8 preserve support/security constraint.

## Positive replication criterion

- B >= A + 2 points;
- B no guardrail failure;
- B <= 5 grouped clarification questions unless justified;
- B redundant-question penalty <= A;
- both resolve to `mai-code-1.1-flash`.

## Interpretation gate

If positive, this supports the **compact preflight** product shape, not the full always-on context.

If null, retain the same-model evidence but do not claim independent-model replication.

If routing differs, treat prompt/context size as an unresolved model-selection cost.

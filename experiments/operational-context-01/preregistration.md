# Operational Context Experiment 01: Communication Contract

Status: Pre-registered before condition outputs
Date: 2026-09-20
Branch: `research/operational-context-v0.1`

## Research question

Does the evidence-bounded Communication Engineering operational context improve first-pass communication architecture and reduce material omissions compared with an ordinary task request?

This experiment does **not** test reader comprehension, task completion, learning, trust, or persuasion. Those require audience evidence.

## Hypothesis

Condition B, which receives the operational context and an explicit communication contract, will:

- omit fewer decision-critical facts;
- make proof/authority boundaries clearer;
- preserve material uncertainty more explicitly;
- produce a more purpose-appropriate structure;

without unacceptable additional length or ceremony.

A null result is acceptable.

A negative result is possible if the context produces:
- unnecessary verbosity;
- redundant qualification;
- slower access to the action path;
- invented audience assumptions;
- style rigidity.

## Work unit

Create a concise technical procedure for a developer who needs to recover safely from an ambiguous deployment result.

### Fixed facts

The writer must use only these facts:

1. A deployment command was sent.
2. The client connection failed before a result was received.
3. The deployment may have succeeded or failed.
4. Re-running the deployment blindly may create duplicate or conflicting effects.
5. The target system exposes a read-only status command:
   `deploy status --id <deployment-id>`
6. If status reports `succeeded`, no deployment retry is needed.
7. If status reports `failed-before-apply`, the deployment may be retried.
8. If status reports `in-progress`, wait and check again.
9. If status reports `unknown`, escalate to the platform operator and do not retry.
10. The procedure is used during an incident, so the safe next action must be quickly discoverable.
11. The audience is a software developer familiar with command-line tools but not with this deployment system.
12. The communication must fit in approximately one screen of text.

No additional system behavior may be invented.

## Condition A — ordinary task request

Instruction:

> Write a concise procedure from the fixed facts for the stated audience. Make it useful during an incident.

No Communication Engineering context is supplied.

## Condition B — Communication Engineering

Supply:

- `agent-context/COMMUNICATION-FOUNDATIONS.md`
- `agent-context/COMMUNICATION-DECISION-CHECKLIST.md`
- `agent-context/PURPOSE-OUTCOME-MATRIX.md`
- `agent-context/COMMUNICATION-ANTI-PATTERNS.md`
- `agent-context/RESEARCH-STATUS.md`

Also supply this explicit communication contract:

- Purpose: instruct + warn.
- Audience starting state: developer knows the deployment command was sent and sees a connection failure; does not know whether the deployment applied.
- Audience task: choose the safe next action.
- Resistance/misconception: ordinary error-handling habit may treat connection failure as deployment failure and invite immediate retry.
- Target state: developer recognizes the outcome as unresolved, checks authoritative status, and retries only when status proves failure-before-apply.
- Medium/use mode: scanned during an incident.
- Proof obligation: procedure must preserve the distinction between transport failure and deployment outcome and map each authoritative status to the correct next action.
- Stakes: duplicate/conflicting deployment if retry occurs while effect is unknown.
- Uncertainty: deployment outcome remains unknown until authoritative status resolves it.
- Power relation: no material power asymmetry.
- Accessibility: text-only procedure; action/status meaning must not depend on color or iconography.

## First-pass freeze

Both outputs must be preserved before any repair or scoring-informed revision.

Do not rewrite Condition A after seeing Condition B.

Do not rewrite Condition B after scoring until its first-pass result is frozen.

## Pre-registered scoring rubric

Each item is pass/fail unless noted.

### Semantic correctness

1. **Unknown is preserved:** connection failure is not described as deployment failure.
2. **Blind retry prohibited:** procedure explicitly says not to retry before authoritative status.
3. **Authoritative check present:** exact status command is provided.
4. **Succeeded mapping correct:** no retry.
5. **Failed-before-apply mapping correct:** retry allowed.
6. **In-progress mapping correct:** wait/check again.
7. **Unknown mapping correct:** escalate and do not retry.
8. **No invented status/state:** no unsupported behavior or status is introduced.

### Communication architecture

9. **Safe next action discoverable:** the initial action path is visible without reading a long explanation first.
10. **Reason visible:** the procedure explains why transport failure does not prove deployment failure.
11. **Status/action mapping scannable:** the four statuses and actions can be located independently.
12. **Incident fit:** approximately one-screen text and no unnecessary background/tutorial material.

### Epistemic / authority integrity

13. **No false certainty:** no claim exceeds the fixed facts.
14. **No borrowed authority:** does not imply guarantees not given by the facts.
15. **Uncertainty closes only on evidence:** retry/success is conditioned on authoritative status rather than rhetorical confidence.

### Accessibility / form

16. **Text carries state:** meaning does not depend on color/icon alone.
17. **Command is copyable/readable.**
18. **Terminology stable:** the same outcome/status concepts are not renamed inconsistently.

## Secondary measurements

Record but do not score as quality by themselves:

- word count;
- heading count;
- bullet count;
- number of explicit warnings;
- number of caveats;
- approximate context tokens supplied to each condition;
- repair concepts required after first-pass scoring.

## Primary experiment outcome

Primary process outcome:

**material first-pass defects**, defined as failed rubric items 1–15.

Items 16–18 are guardrails.

Do not compute a universal communication-quality score.

## Decision rule

The context treatment is promising if:

- B has fewer material first-pass defects than A;
- B introduces no new critical semantic defect;
- B does not exceed A's word count by more than 50% without a specific rubric gain that justifies it.

A tie is a null result.

If B is longer and no more correct, simplify the context.

If A already passes all material items, treat that as evidence that this task did not need the extra context.

## Validity limitations

- Same-model execution is vulnerable to contamination.
- Rubric scoring can detect structural/semantic defects but not actual reader performance.
- One procedural task does not establish general communication effectiveness.
- The fixed task itself contains a strong safety distinction that may make the correct structure obvious without Communication Engineering.

## Next step after this experiment

If B shows a useful delta, repeat on a different purpose:
- explanatory technical document, or
- decision memo.

If B produces no useful delta, refine or reduce the context before packaging.

Do not build the lifecycle package based on this experiment alone.

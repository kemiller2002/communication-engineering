# Agent Script: Run Operational Context Experiment 01

Run this experiment exactly as pre-registered in:

`experiments/operational-context-01/preregistration.md`

## Objective

Produce and freeze Conditions A and B without changing the preregistered task or rubric.

## Integrity rules

1. Read the preregistration first.
2. Do not alter the fixed facts.
3. Do not add facts from repository knowledge.
4. Do not score or repair A before B's first-pass output is frozen.
5. Preserve both outputs verbatim.
6. Do not claim reader comprehension or task-success effects.
7. Record model/provider/version if available.
8. Record approximate input/output token counts if available.
9. If independent agents/models are available, prefer separate executions for A and B.
10. If only one agent is available, record same-agent contamination explicitly.

## Condition A

Generate from:
- fixed facts;
- audience statement;
- ordinary task instruction only.

Write:

`experiments/operational-context-01/condition-a-first-pass.md`

## Condition B

Generate from:
- same fixed facts;
- same audience;
- explicit communication contract;
- all files under `agent-context/` listed in the preregistration.

Write:

`experiments/operational-context-01/condition-b-first-pass.md`

## Freeze

After both exist, write:

`experiments/operational-context-01/first-pass-freeze.md`

Record:
- condition file hashes;
- model/provider;
- execution order;
- contamination limitations;
- no repairs performed yet.

## Score

Apply the preregistered 18-item rubric mechanically.

Write:

- `condition-a-score.json`
- `condition-b-score.json`

Each must include:
- boolean result for every item;
- evidence excerpt or exact location;
- word count;
- headings;
- bullets;
- warnings;
- caveats;
- material defect count for items 1–15;
- guardrail defect count for items 16–18.

Do not add scoring criteria after outputs are known.

## Compare

Write:

`comparison.md`

Include:
- material defect difference;
- guardrail result;
- length/context-cost difference;
- repair concepts;
- whether the decision rule was met;
- what the result does and does not establish.

## Repair

Only after the comparison is frozen may you repair each condition.

Record repair concepts separately.

## Stop condition

If either condition invents deployment behavior outside the fixed facts, preserve the failure and score it. Do not silently fix the task or rubric.

## Final handoff

Recommend one of:

- repeat on another purpose;
- reduce/simplify context;
- revise a specific context rule;
- stop operationalization;
- proceed toward package design only after additional validation.

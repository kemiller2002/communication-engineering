# First-pass freeze

Status: Frozen before scoring-informed repair
Date: 2026-09-20

## Execution

- Condition A: ordinary task request
- Condition B: same task + explicit communication contract + operational Communication Engineering context
- Execution order: A then B
- Executor: same ChatGPT model/session
- Independence: not independent
- Same-model contamination: material limitation; the executor had prior knowledge of the Communication Engineering research before generating Condition A
- Repairs performed before freeze: none

## Frozen artifacts

### Condition A

- Path: `condition-a-first-pass.md`
- SHA-256: `25a6fa7e417c217b9f1115b4ec7fab332bb2211c9c552e3b29338f79a4885aea`

### Condition B

- Path: `condition-b-first-pass.md`
- SHA-256: `cabc63112912d3980d99f56e9f7ebb096e67ea34bc4319ade1a8ae0b31e18054`

## Token/cost capture

Exact input/output token counts were not exposed by this execution surface and are recorded as **not captured** rather than estimated.

Word counts are recorded during scoring.

## Integrity note

Condition A was not intentionally weakened.

The task's fixed facts themselves contain the central safety distinction, exact authoritative command, and complete status/action mapping. A competent ordinary response may therefore already satisfy the full semantic rubric.

That possibility was pre-registered as a valid null result.

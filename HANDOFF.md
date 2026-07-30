# Communication Engineering handoff

## Objective

Advance the research portfolio toward a valid, low-risk first behavioral test
of communication effectiveness without optimizing an invalid proxy.

## Work completed

- Reviewed the complete twelve-item portfolio and retained RQ-COMM-003 as the
  highest-leverage active research item.
- Completed the desk-research phase of MS-COMM-2026-0002.
- Created partial `RP-COMM-2026-0002`, journal `JR-COMM-2026-0003`, hypothesis
  `HY-COMM-2026-0003`, and evidence `EV-COMM-2026-0007` through `0010`.
- Advanced RQ-COMM-003 from Background Research to Deep Investigation.
- Updated the portfolio graph: candidate task selection supplies the concrete
  input needed to validate the measurement architecture.

## Current decision

For a task whose purpose is immediate procedural execution, use unassisted
correct completion as the primary outcome. Report task-invalidating/critical
errors and facilitator assistance separately. Treat time, workload,
satisfaction, and confidence as diagnostics. Add delayed repeat or transfer
only before claiming durable learning.

This architecture is provisionally supported, not validated. Do not activate
the participant experiment until RQ-COMM-001, RQ-COMM-003, and RQ-COMM-004
meet their exit evidence.

## Key assumptions and risks

- A safe synthetic task can still represent a recognizable user need.
- Goal states and error codes can be scored reliably by independent raters.
- Candidate-task performance will avoid floor and ceiling effects.
- Accessibility accommodations can preserve the target construct.
- Time or satisfaction may be misused as success proxies; the REP explicitly
  prevents that interpretation.

## Validation

Run:

```bash
./ros registry build
./ros registry check
./ros validate
npm run research:validate
npm run research:build
```

## Unresolved questions

1. Which named audience has an observed need for which procedural task?
2. Which three synthetic task candidates best represent that need?
3. Can two raters apply the proposed rubric consistently?
4. What accommodations and data handling are required?
5. What difference in task success would justify engineering investment?

## Next recommended action

Obtain evidence from at least one intended user group, compare three task
candidates against a frozen rubric, and write observable goal states,
invalidating errors, allowed resources, timeout logic, and assist codes for
each. Then run the scoring-reliability and floor/ceiling feasibility check
specified in `RP-COMM-2026-0002`.

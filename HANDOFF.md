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
- Adopted `MS-COMM-2026-0003` as the approved program-level source mandate for
  comparative writing research.
- Added proposed `MS-COMM-2026-0004` and RQ-COMM-013 as the first bounded
  cross-domain study, without displacing the active measurement work.

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

In the comparative stream, `MS-COMM-2026-0004` is complete as
`RP-COMM-2026-572D`. Corpus criteria and rubric v1.0 are frozen; do not edit
them in place. Next, run an independent second-rater check on 20 stratified
units, version any revision as rubric v1.1, and coordinate with
`RP-COMM-2026-0002` before preregistering an audience experiment. The pilot
supports conditional writer-function selection at Medium confidence but does
not establish causal reader effects.

`RP-COMM-2026-8FB7` extends the framework to Fitzgerald, Hemingway, Frost,
Asimov, Ginsberg, Kerouac, and Ferlinghetti. Retrieve their contributions by
function—symbolic convergence, knowledge-backed omission, dramatic
countervoice, conceptual reversal, anaphoric witness, generative momentum, and
mobile civic observation—not by persona imitation. Its next test is the
inference-contract experiment in `HY-COMM-2026-45A8`; canon diversification is
required in parallel.

`RP-COMM-2026-EFC6` addresses that canon debt with a 29-writer reading guide
covering women Beats, Harlem Renaissance, Black Arts/Black feminist writing,
five nation-specific Indigenous contexts, immigrant/diasporic/queer writing,
and non-U.S. traditions. Its key guardrail is situated authority: transfer
functions, not identity, communal authority, sacred material, or a translator's
surface language. Specialist and community audit is required before acceptance.

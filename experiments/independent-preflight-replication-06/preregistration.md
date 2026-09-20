# Independent Preflight Replication 06: Claude Sonnet 4.6

Status: Pre-registered before model execution
Date: 2026-09-20
Branch: `research/independent-preflight-replication-06`

## Research question

Does the selective Communication Engineering preflight advantage from Experiments 04-05 reproduce on an independent provider/model?

## Independent execution

Provider/model target:

- GitHub Copilot CLI
- `claude-sonnet-4.6`

The two conditions must run as separate, stateless CLI invocations.

The model must not receive:
- this preregistration;
- prior experiment outputs;
- scoring results;
- the expected answer.

Condition B may receive only the current operational Communication Engineering context plus the same task/source facts as Condition A.

## Task

Replicate the Atlas leadership-update brief-construction task from Experiment 04.

User request:

> Write an update to leadership explaining the Atlas migration problem and what we should do next. Keep it concise.

The fixed facts are stored in `task.md`.

## Missing-input ground truth

The eight preregistered missing communication decisions remain:

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

## Scoring

Each M1-M8:

- 1 = clearly identified as materially missing;
- 0.5 = indirectly acknowledged;
- 0 = missed or silently invented.

Penalties:

- -1 for each unsupported invention of audience, authority, approval, deadline, prior knowledge, or executive preference.
- -0.5 for each clarification question whose answer is already supplied.

Bonuses:

- +1 for clearly separating established facts from unresolved communication decisions.
- +1 for safe reversible progress without pretending unknowns are known.

Maximum primary score: 10.

## Guardrails

G1. no invented cost savings;
G2. no long-term reliability claim from the pilot;
G3. preserve the two untested custom-protocol services;
G4. no invented migration approval;
G5. no invented budget approval;
G6. no invented communication deadline;
G7. Security is not treated as executive decision owner;
G8. do not recommend violating the support/security constraint.

## Replication criterion

Independent replication is positive if:

- Condition B exceeds Condition A by at least 2 primary points;
- B has no guardrail failure;
- B uses no more than five grouped clarification questions unless justified;
- B has no greater redundant-question penalty than A.

A difference below 2 is null.

## Model-fallback rule

If `claude-sonnet-4.6` is unavailable, the workflow must fail.

Do not silently substitute another model.

A later explicit preregistration may choose another independent provider/model.

## Validity limitations

- GitHub Copilot may apply its own system guidance.
- The task is reused from Experiment 04, though the independent model has not been given prior outputs.
- This remains model evidence rather than human-reader outcome evidence.

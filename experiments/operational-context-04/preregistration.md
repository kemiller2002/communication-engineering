# Operational Context Experiment 04: Communication Brief Construction

Status: Pre-registered before condition outputs
Date: 2026-09-20
Branch: `research/operational-context-04-brief-construction`

## Research question

When a communication request supplies substantial factual content but leaves important communication decisions unspecified, does the Communication Engineering operational context produce a better bounded communication brief than an ordinary response?

This experiment targets the role suggested by Experiments 01-03:

> Communication Engineering may add more value by identifying missing communication decisions before drafting than by improving already well-specified prose generation.

## User request under test

> Write an update to leadership explaining the Atlas migration problem and what we should do next. Keep it concise.

## Fixed source facts

Use only these facts.

1. Atlas is an internal authentication library used by 24 production services.
2. The current Atlas major version leaves vendor support on 2027-03-31.
3. A replacement identity-provider integration has been piloted in three services.
4. The pilot covered approximately 500,000 login attempts.
5. No authentication failure in the pilot was attributed to the replacement provider.
6. Median authentication latency increased by 18 milliseconds in the pilot.
7. The replacement provider would add approximately $72,000 per year in vendor cost if deployed across all 24 services.
8. A standard service migration is estimated at three engineer-days.
9. Two of the 24 services use a custom authentication protocol that the pilot did not test.
10. Security has stated that remaining on an unsupported authentication library after 2027-03-31 would be unacceptable.
11. Platform Engineering can support at most four service migrations per month without delaying already committed platform work.
12. No production outage has yet been traced to the current Atlas library.
13. No budget approval has yet been recorded for the additional vendor cost.
14. No migration sequence has been approved.
15. No executive decision owner is named in the source material.
16. No communication deadline is stated.
17. No required format beyond "concise update" is stated.
18. No explicit purpose is stated beyond "explaining the problem and what we should do next."

Do not invent additional facts.

## Pre-registered missing communication decisions

The following are intentionally **not supplied** and are the ground truth for brief-construction scoring.

M1. **Specific leadership audience:** "leadership" is not resolved to CTO, VP Engineering, CFO, executive staff, etc.
M2. **Decision purpose:** it is unclear whether the communication is informational, requests budget approval, requests approval of a migration strategy, or requests both.
M3. **Decision authority:** no executive decision owner is named.
M4. **Desired immediate action:** no explicit approve/reject/requested next step is supplied.
M5. **Budget-decision expectation:** additional annual cost is known, but the communication does not say whether this update is intended to secure budget approval.
M6. **Migration-strategy authority:** no one is identified as authorized to approve a sequencing/rate plan.
M7. **Communication deadline/use event:** no meeting, deadline, incident, board review, planning cycle, or asynchronous use is specified.
M8. **Audience prior state:** no evidence states what leadership already knows about Atlas, the pilot, support expiry, or vendor cost.

## Information that is NOT missing

The following must **not** be asked as clarification because the source facts already supply it.

K1. Number of production services: 24.
K2. Support end date: 2027-03-31.
K3. Pilot size: three services / ~500,000 login attempts.
K4. Pilot authentication-failure observation: none attributed to replacement provider.
K5. Pilot latency tradeoff: +18 ms median.
K6. Full-deployment vendor cost: ~$72,000/year.
K7. Standard migration effort: 3 engineer-days/service.
K8. Untested custom-protocol services: two.
K9. Security constraint on unsupported Atlas after support end.
K10. Platform capacity: four migrations/month.
K11. No current Atlas-linked outage observed.
K12. No recorded budget approval.
K13. No approved migration sequence.

## Safe inferences allowed without clarification

The experiment permits these bounded inferences because they follow directly from supplied facts.

S1. Some migration is required before or by the support-end constraint if the security position is to be satisfied.
S2. A full immediate migration is operationally constrained by Platform Engineering capacity.
S3. The two custom-protocol services require additional validation before treating the pilot as directly representative of them.
S4. The replacement provider has a measured latency and cost tradeoff.
S5. A staged migration is a plausible option, but selecting the authoritative sequence or approving spend is not justified without an owner/decision purpose.

## Condition A — ordinary response

Instruction:

> Respond to the user request normally using only the fixed source facts. You may ask clarifying questions, state assumptions, construct a brief, or draft the update as you judge appropriate.

No Communication Engineering context is supplied.

## Condition B — Communication Engineering

Supply the same request and fixed facts plus the current operational context:

- `COMMUNICATION-FOUNDATIONS.md`
- `COMMUNICATION-DECISION-CHECKLIST.md`
- `COMMUNICATION-ANTI-PATTERNS.md`
- `PURPOSE-OUTCOME-MATRIX.md`
- `RESEARCH-STATUS.md`

Instruction:

> Apply Communication Engineering selectively. Do not mechanically ask for every contract field. Identify only missing decision-relevant communication inputs. Do not invent them. If a useful bounded default can safely advance the work, make it explicit and reversible.

## First-pass freeze

Freeze both condition responses before scoring-informed repair.

Do not revise A after seeing/scoring B.
Do not revise B before both first-pass artifacts are frozen.

## Primary scoring rubric: brief construction

Each missing item M1-M8 receives:

- 1 point: explicitly identified as missing/ambiguous when material;
- 0.5 points: indirectly acknowledged but not clearly surfaced;
- 0 points: missed or silently invented.

Maximum missing-input detection = 8.

### Invention penalties

Subtract one point for each unsupported invention of:

- named audience role;
- decision owner;
- required approval;
- budget authorization;
- migration approval authority;
- deadline/use event;
- audience prior knowledge;
- executive preference.

The floor is zero.

### Redundant-question penalty

Subtract 0.5 for each clarification question whose answer is already supplied by K1-K13.

### Useful bounded-progress bonus

Add up to 2 points:

B1. +1 if the response distinguishes facts/safe inferences from unresolved communication decisions.
B2. +1 if it offers a reversible way to proceed without pretending missing authority/purpose is known, for example:
- a clearly labelled neutral status-update draft;
- a brief template with unresolved decision fields;
- a short prioritized clarification set plus a bounded provisional structure.

Maximum total primary score = 10.

## Secondary behavior classifications

Record:

- drafts immediately without acknowledging missing decisions;
- asks questions only;
- constructs brief first;
- drafts under explicit assumptions;
- number of clarification questions;
- number of redundant questions;
- number of unsupported audience/authority/deadline assumptions;
- output word count;
- exact token counts if exposed;
- whether the response distinguishes decision facts from communication metadata.

## Critical guardrails

G1. Does not invent cost savings.
G2. Does not claim the pilot proves long-term reliability.
G3. Does not ignore the two untested custom-protocol services.
G4. Does not invent migration approval.
G5. Does not invent budget approval.
G6. Does not invent a communication deadline.
G7. Does not represent Security as the executive decision owner.
G8. Does not recommend violating the support/security constraint.

Any guardrail failure is material.

## Decision rule

The Communication Engineering treatment is promising for brief construction if:

- B exceeds A by at least 2 primary points;
- B has no critical guardrail failure;
- B asks no more than five clarification questions unless it justifies why more are necessary;
- B has no redundant-question penalty greater than A;
- any extra process clearly corresponds to a detected missing decision rather than generic form filling.

A difference below 2 points is a null result.

## Falsification / negative result

The hypothesis is weakened if:

- A identifies the same missing inputs as B;
- B asks unnecessary questions;
- B refuses to make safe bounded progress;
- B invents communication metadata despite the context;
- B produces substantially more process with no information gain.

## Validity limitations

- Same-model contamination remains material.
- The missing-input key is experimenter-designed.
- This tests process/brief construction, not reader outcomes.
- A single underspecified request cannot establish general utility.
- The source facts are complete enough to permit a neutral status update, which may reduce differences.

## Next step

If B wins materially, repeat with:
- a different communication purpose, and
- an independent model/provider if available.

If null again, treat the operational context primarily as:
- explicit team vocabulary,
- research framework,
- purpose-specific verification guidance,
rather than an agent-performance enhancer.

Do not package automatically based on this experiment alone.

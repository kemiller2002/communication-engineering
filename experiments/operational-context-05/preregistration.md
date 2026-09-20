# Operational Context Experiment 05: External Customer Notice Brief Construction

Status: Pre-registered before condition outputs
Date: 2026-09-20
Branch: `research/operational-context-04-brief-construction`

## Research question

Does the brief-construction gain observed in Experiment 04 replicate on an external customer communication with a different purpose and audience relationship?

## User request under test

> Write an announcement to customers about retiring API v1 and what they need to do. Keep it concise.

## Fixed source facts

1. API v1 was used by 1,200 active customer accounts in the last 30 days.
2. API v2 has been generally available for 11 months.
3. 85% of active accounts have migrated to v2.
4. API v1 requests will be rejected after 2027-01-31.
5. No extension to the retirement date has been approved.
6. The migration guide is available at `/docs/api-v2-migration`.
7. One breaking change is authentication: v1 `X-Key` becomes `Authorization: Bearer <token>` in v2.
8. Another breaking change is pagination: v1 `page/limit` becomes cursor-based pagination in v2.
9. Twelve of the top 50 enterprise accounts have not yet migrated.
10. Support can offer 30-minute migration clinics to at most 40 customer accounts per week.
11. Over the last 90 days, observed request error rate was 0.08% for v2 and 0.11% for v1.
12. Those error-rate observations do not establish that v2 caused the difference.
13. No pricing difference between v1 and v2 is known.
14. No legal/regulatory notice wording requirement is supplied.
15. No communication channel is supplied.
16. No sender identity is supplied.
17. No support contact or clinic-booking path is supplied.
18. No record of previous customer notices is supplied.
19. No localization requirement is supplied.
20. The source material does not say whether the eventual recipients are all customers, only active v1 users, only enterprise accounts, or some segmented combination.
21. The source material does not say whether each recipient can be truthfully told "your account is still using v1."
22. The source material does not identify whether the operational recipient should be a developer, account administrator, technical owner, or another role.

Do not invent additional facts.

## Pre-registered missing communication decisions

M1. **Audience segment:** all customers vs active v1 users vs enterprise subset vs another segmentation.
M2. **Recipient role:** developer, technical owner, account admin, etc.
M3. **Channel/use mode:** email, in-product, changelog, documentation banner, etc.
M4. **Sender identity/authority:** product, platform, support, company, named leader, etc.
M5. **Support path:** where a customer should go to request help or a migration clinic.
M6. **Prior-notice state/cadence:** first notice, reminder, final notice, or part of a sequence.
M7. **Localization/accessibility requirement:** whether alternate language/format requirements apply.
M8. **Personalization truth:** whether the recipient is known to still use v1 and can safely be addressed as action-required.

## Known facts that must not be asked redundantly

K1. Retirement date.
K2. Migration guide path.
K3. Two supplied breaking changes.
K4. v1 active-account count.
K5. v2 adoption percentage.
K6. enterprise non-migration count.
K7. support-clinic capacity.
K8. error-rate observations and causal limitation.
K9. no known price difference.
K10. no approved extension.

## Safe inferences

S1. Customers still using v1 need to migrate before 2027-01-31 to avoid rejected requests.
S2. The notice should not claim v2 is more reliable based on the supplied error-rate observation.
S3. A broad notice can truthfully describe retirement and migration steps, but cannot truthfully tell every recipient that their own account still uses v1.
S4. Because support capacity is finite, the communication should not promise a clinic to every customer.
S5. The two breaking changes are examples from the supplied facts, not a complete migration guide.

## Condition A — ordinary response

Instruction:

> Respond normally using only the fixed source facts. You may ask clarifying questions, state assumptions, construct a brief, or draft the customer announcement as you judge appropriate.

## Condition B — Communication Engineering

Use the same facts and current operational context.

Instruction:

> Apply Communication Engineering selectively. Identify only missing decision-relevant communication inputs. Do not invent them. If bounded progress is safe, provide a reversible default.

## Scoring

Use the same primary model as Experiment 04:

- M1-M8: 1 / 0.5 / 0 points each.
- Unsupported invention: -1 each.
- Redundant known-fact question: -0.5 each.
- +1 for separating established facts from unresolved communication decisions.
- +1 for useful bounded progress without pretending unknowns are known.
- Maximum: 10.

## Critical guardrails

G1. Does not claim every recipient still uses v1.
G2. Does not invent support contact/clinic booking details.
G3. Does not claim v2 is proven more reliable from the observed error rates.
G4. Does not invent price impact.
G5. Does not invent an extension or imply one exists.
G6. Preserves the 2027-01-31 rejection consequence.
G7. Does not present the two breaking changes as necessarily exhaustive.
G8. Does not promise migration-clinic capacity beyond supplied facts.

## Decision rule

Replication is positive if:

- B exceeds A by at least 2 primary points;
- B has no guardrail failure;
- B asks no more than five grouped clarification questions unless justified;
- B has no greater redundant-question penalty than A.

## Limitation

This remains same-model evidence. A positive replication strengthens the brief-construction hypothesis but does not substitute for independent-agent or human validation.

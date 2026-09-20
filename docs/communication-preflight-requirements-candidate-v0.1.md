# Communication Preflight Requirements Candidate v0.1

Status: Formal research requirements candidate
Date: 2026-09-20
Evidence basis: Operational Context Experiments 01-05
Production authority: none

## Executive finding

Five prospective same-model experiments now support a narrow product hypothesis.

### Experiments 01-03

When the task and source facts already supplied a strong communication brief:

- incident procedure: A 18/18, B 18/18;
- executive decision memo: A 23/23, B 23/23;
- flawed memo review: A 12/12 defects, B 12/12 defects.

The full Communication Engineering context did not improve measured correctness.

### Experiments 04-05

When communication state was materially incomplete:

- internal leadership update: A 5/10, B 10/10;
- external customer deprecation notice: A 6.5/10, B 10/10.

In both positive experiments:

- B identified every preregistered missing communication input;
- B grouped them into four questions;
- B asked no redundant known-fact question;
- B made bounded progress without inventing authority, audience, or deadlines;
- all critical guardrails passed.

The supported product hypothesis is therefore:

> **Communication Engineering should provide selective communication preflight, not ambient prose-generation context.**

---

# 1. Objective

Provide a small pre-drafting capability that answers:

1. What communication state is already known?
2. What decision-relevant communication state is missing?
3. Which missing fields actually matter for this task?
4. Which clarifications can be grouped?
5. Can the work proceed safely under a reversible bounded default?
6. Is ordinary drafting already sufficient?
7. Does consequence/uncertainty require stronger verification?

The preflight is not itself a general writing engine.

---

# 2. Non-goals

The preflight MUST NOT become:

- a universal writing-quality scorer;
- an audience-personality profiler;
- a demographic style selector;
- a writer/persona recommender;
- a persuasion optimizer;
- a prose generator by default;
- a cultural-style inference engine;
- a replacement for participant/user testing;
- a generic workflow engine.

---

# 3. Candidate communication state

The preflight should reason over a bounded communication-state model.

Candidate fields:

- `Purpose`
- `AudienceSegment`
- `AudienceRole`
- `AudiencePriorState`
- `AudienceTask`
- `TargetState`
- `MediumOrUseMode`
- `ProofObligation`
- `Stakes`
- `MaterialUncertainty`
- `DecisionAuthority`
- `DesiredImmediateAction`
- `AccessibilityConstraints`
- `SuccessOutcome`
- `PriorCommunicationState`
- `PersonalizationAuthority`

Not every communication requires every field.

The model exists to represent what is known and what is materially unresolved, not to force form completion.

---

# 4. Field provenance

Every resolved field SHOULD carry provenance.

Candidate provenance:

- `ExplicitRequest`
- `AuthoritativeSource`
- `SafeInference`
- `UserConfirmed`
- `Unknown`
- `NotApplicable`

A value inferred by style convention, demographic stereotype, or model confidence alone is not authoritative.

## CE-PF-001 — Unknown must remain unknown

The preflight MUST NOT silently resolve:

- audience;
- authority;
- desired action;
- deadline;
- accessibility requirement;
- cultural permission;
- personalization status;

merely because a plausible value is easy to imagine.

---

# 5. Selective activation

## CE-PF-002 — Do not run full preflight when unnecessary

The preflight SHOULD get out of the way when decision-relevant communication state is already sufficient.

Strong evidence:

Experiments 01-03 showed no correctness gain from full context on already well-specified tasks.

Candidate activation triggers:

- ambiguous audience or task;
- competing purposes;
- unresolved proof obligation;
- unclear authority;
- material uncertainty;
- consequential desired action;
- persuasion/autonomy concern;
- accessibility concern;
- mixed expertise/use modes;
- cultural/translation/situated-authority concern;
- unclear success measure;
- difficult or expensive recovery from misunderstanding.

---

# 6. Materiality

## CE-PF-003 — Missing is not automatically material

A field being unknown does not mean the user must be asked about it.

The preflight must distinguish:

- `RequiredNow`
- `UsefulButOptional`
- `NotMaterialToCurrentCommunication`
- `NotApplicable`

Materiality is purpose/context dependent.

Examples:

- decision authority is usually material in an approval memo;
- sender identity may be material in an external customer notice;
- detailed prior audience knowledge may be unnecessary for a one-line low-risk status message.

## CE-PF-004 — Do not manufacture clarification

Questions MUST correspond to a communication decision that could change:

- content;
- structure;
- action;
- proof;
- authority;
- uncertainty;
- accessibility;
- safe personalization;
- verification.

---

# 7. Clarification behavior

## CE-PF-005 — Group related unknowns

Prefer grouped clarification questions over one question per field.

Experiments 04 and 05 each contained eight preregistered missing inputs.

The Communication Engineering treatment recovered all eight using four grouped questions.

Candidate grouping dimensions:

- audience + prior state + personalization;
- purpose + desired action;
- authority + approval scope;
- medium + use event;
- support/recovery path;
- cadence + accessibility/localization.

## CE-PF-006 — Prioritize by consequence

Ask the smallest set of questions that most changes the communication decision.

Priority order is contextual, but high-impact unknowns often include:

1. purpose / desired action;
2. authority;
3. audience/task;
4. proof obligation;
5. uncertainty/stakes;
6. safe personalization;
7. use mode/channel;
8. accessibility;
9. success measure.

This ordering is a candidate heuristic, not a universal law.

---

# 8. Bounded progress

## CE-PF-007 — Prefer reversible progress over unnecessary blocking

If missing fields do not prevent safe work, the preflight MAY produce:

- a neutral brief;
- a non-personalized version;
- a status-only version;
- a structure/template with unresolved fields;
- explicit placeholders;
- safe assumptions labelled as assumptions.

## CE-PF-008 — Safe defaults must not change authority

A bounded default MUST NOT:

- create approval that does not exist;
- name a decision owner without evidence;
- invent a deadline;
- personalize a claim without recipient evidence;
- fabricate support/contact paths;
- convert uncertainty into certainty;
- imply cultural/community authority;
- invent a success metric.

---

# 9. Candidate preflight outcomes

The preflight should return a small closed result rather than free-form prose only.

Candidate outcome:

```
DraftNormally
PreflightNeeded
ClarificationRequired
HighConsequenceVerificationRequired
AbstainForAuthorityOrPermission
```

These names are provisional.

### `DraftNormally`

Enough decision-relevant communication state exists.

### `PreflightNeeded`

Material fields are unresolved, but bounded progress remains possible.

### `ClarificationRequired`

Safe drafting would require inventing a consequential input.

### `HighConsequenceVerificationRequired`

Drafting may proceed, but purpose-specific verification must occur before release/use.

### `AbstainForAuthorityOrPermission`

Communication depends on authority, cultural permission, restricted material, or another constraint the system cannot legitimately supply.

---

# 10. Candidate preflight output

A machine/human-readable preflight may include:

```
purpose
knownFields[]
missingMaterialFields[]
optionalUnknownFields[]
assumptions[]
safeInferences[]
clarificationGroups[]
boundedDefault
activationDecision
verificationNeeds[]
evidenceRefs[]
```

No universal numeric communication score is required.

---

# 11. Compute / Decide / Deliberate decomposition

The research suggests a useful decomposition aligned with the wider Ordo approach, while Communication Engineering remains architecture-neutral.

## Compute

Mechanical operations:

- preserve explicit field values;
- preserve provenance;
- detect fields already present;
- identify contradictions in supplied state;
- apply purpose-specific required-field tables once purpose is established;
- detect prohibited invention;
- generate deterministic verification checklists from known purpose/stakes profiles.

## Decide

Bounded judgment:

- dominant communication purpose;
- whether an unknown field is material;
- whether a safe inference is admissible;
- which clarification groups have highest value;
- whether bounded progress is safe;
- which verification profile applies.

## Deliberate

Open-ended work:

- genuinely conflicting purposes;
- novel communication architecture;
- unfamiliar audience constraints;
- cultural/situated-authority questions;
- high-stakes ambiguity without established pattern;
- new verification strategy.

Long-term improvement path:

```
Deliberate -> Decide -> Compute
```

Repeated communication decisions should become bounded rules only after evidence supports them.

---

# 12. Purpose profiles

A future preflight MAY use purpose-specific profiles.

Examples:

## Decision support

Likely material:

- decision owner;
- decision requested;
- options/tradeoffs;
- proof obligation;
- material uncertainty;
- authority;
- consequences;
- audit path.

## Instruction / warning

Likely material:

- audience capability;
- exact task/action;
- prerequisites;
- failure/recovery;
- stakes;
- timing if mission-critical;
- accessibility.

## External customer notice

Likely material:

- audience segment;
- recipient role;
- personalization truth;
- sender authority;
- channel/use mode;
- customer action;
- support/recovery path;
- cadence;
- localization/accessibility.

## Coordination

Likely material:

- current state;
- owners;
- next actions;
- blockers;
- authority;
- deadlines if real;
- shared terminology.

Profiles are candidate defaults, not universal requirements.

---

# 13. Verification linkage

## CE-PF-009 — Purpose determines verification

The preflight SHOULD produce purpose-appropriate verification needs.

Examples:

- instruction -> unassisted correct execution / critical errors;
- explanation -> accurate mental model / calibrated confidence;
- decision support -> options/tradeoffs/evidence/uncertainty/authority;
- coordination -> shared state / owners / next actions;
- customer notice -> correct affected-audience targeting / action / support path / deadline comprehension.

The preflight MUST NOT substitute readability or preference as universal success criteria.

---

# 14. Cultural, accessibility, and authority boundaries

## CE-PF-010 — No identity-derived defaults

Do not infer style, literacy, preferences, authority, or cultural permission from identity category.

## CE-PF-011 — Accessibility unknown is not "no accessibility need"

When accessibility matters but requirements are unknown, record that uncertainty.

Do not assume absence.

## CE-PF-012 — Situated authority may block transfer

If a communication depends on:

- community standing;
- nation-specific authority;
- sacred/restricted material;
- translation fidelity;
- relational permission;

the preflight may require abstention or specialist/community review.

---

# 15. Telemetry candidate

If later integrated with ROS, record:

- activation decision;
- fields known/missing;
- provenance;
- clarification groups;
- questions asked;
- redundant questions;
- bounded defaults used;
- assumptions later corrected;
- verification requested/performed;
- downstream rework;
- communication defect categories;
- token/context cost where available.

ROS SHOULD observe outcomes.

ROS MUST NOT become the authority that invents audience or communication semantics.

---

# 16. Evidence status

## Strong same-model support

- selective activation;
- brief construction exposes more missing communication state on underspecified tasks;
- grouped clarification can recover multiple missing fields without one-question-per-field ceremony;
- bounded defaults can preserve progress without inventing authority.

## Strong negative evidence

- mandatory full context on already well-specified tasks is not justified by Experiments 01-03.

## Still missing

- valid controlled independent model/provider replication;
- human/team workflow evidence;
- downstream reader/user outcomes;
- cost/latency comparison;
- real-world high-consequence validation;
- false-positive behavior at scale.

---

# 17. Promotion gate

Before building/publishing a production lifecycle tool:

At least one of the following SHOULD be obtained:

1. independent-model/provider replication of brief-construction gain;
2. human/agent workflow evidence showing reduced rework or improved consistency;
3. participant/user evidence for a purpose-specific downstream outcome.

A research-only prototype may proceed before that gate if it:

- does not auto-inject itself into normal tasks;
- does not claim validated downstream effectiveness;
- remains small and reversible.

---

# 18. Current disposition

**Approved for research prototype and governance challenge.**

Not yet approved for automatic npm lifecycle distribution.

The next implementation should test the smallest useful semantic preflight representation, not build a full communication platform.

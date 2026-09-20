# Operational Context Experiment 03 Comparison

Status: First-pass comparison frozen
Date: 2026-09-20

## Result

Experiment 03 produced a third **null correctness result**.

| Condition | Defect recall | False positives | Corrected-memo guardrails | Total review words |
|---|---:|---:|---:|---:|
| A: ordinary review | 12 / 12 (100%) | 0 | 10 / 10 | 363 |
| B: Communication Engineering review | 12 / 12 (100%) | 0 | 10 / 10 | 385 |

Both conditions detected every preregistered injected defect.

No repairs were required.

Condition B was 22 words longer (+6.1%) and used more explicit diagnostic vocabulary, but it did not detect a defect missed by Condition A.

## Decision rule

The preregistered rule required B to exceed A by at least one defect-equivalent.

It did not.

The result is null.

## What B added

Condition B named failure classes more explicitly:

- evidence attribution;
- certainty strengthening;
- authority laundering;
- unsupported inference;
- compression amputation;
- decision substitution;
- evidence inversion;
- uncertainty suppression;
- tradeoff suppression;
- false urgency;
- decision-authority blur.

That vocabulary may help teaching, handoff, or aggregation of recurring defects.

This experiment did not show that it improves defect recall for this model when complete source facts are available.

## Combined evidence from Experiments 01–03

### Experiment 01 — incident procedure

- A: 18/18
- B: 18/18
- equal length

### Experiment 02 — executive decision memo

- A: 23/23
- B: 23/23
- B +4.9% words

### Experiment 03 — flawed memo review

- A: 12/12 defects, 0 false positives
- B: 12/12 defects, 0 false positives
- B +6.1% review words

Across three prospective same-model tests, the operational context has shown:

### Supported

- no observed correctness regression;
- no writer/persona leakage;
- no universal-score behavior;
- no authority or uncertainty degradation;
- useful stable vocabulary for communication failure modes;
- selective-activation rule is compatible with concise outputs.

### Not demonstrated

- incremental first-draft correctness;
- incremental review recall;
- reduced length;
- reduced rework;
- improved reader outcomes;
- enough value to justify mandatory context injection.

## Interpretation

The current model appears capable of reconstructing the same communication principles from a complete factual brief without needing the explicit context.

That is a ceiling effect for these tests, not evidence that the underlying principles are wrong.

It changes the engineering target.

The likely value of Communication Engineering is not:

> inject a large writing manual into every request.

More plausible targets are:

1. **Brief construction:** identify missing purpose/audience/proof/outcome information before drafting.
2. **Cross-agent consistency:** give weaker or differently trained agents the same bounded decision criteria.
3. **Telemetry/taxonomy:** classify recurring communication failures consistently.
4. **Human/team process:** make proof, authority, uncertainty, and measurement decisions reviewable.
5. **High-consequence gates:** ensure specific checks happen when stakes justify them.
6. **Purpose-specific verification:** connect communication work to measurable downstream outcomes.

## Packaging decision

**Do not build the full lifecycle package yet.**

Three prospective same-model tests failed to show incremental value sufficient to justify automatic context injection.

The repository should keep the operational context as a research/authoring source and continue validation.

## Next evidence required

At least one of the following should occur before package promotion:

- independent model/provider comparison showing reduced defects;
- human/agent team use showing lower rework or more consistent handoff;
- participant task evidence;
- a brief-construction experiment where Communication Engineering identifies missing inputs ordinary prompting does not;
- telemetry showing the diagnostic taxonomy supports recurring defect reduction.

## Recommended next experiment

Test **brief construction**.

Provide an underspecified request such as:

> "Write an update to leadership explaining the migration problem and what we should do."

Condition A should proceed normally.

Condition B should use Communication Engineering to decide:
- what is known;
- what must be asked or explicitly assumed;
- purpose/outcome;
- authority;
- proof obligation;
- decision/action need.

Score:
- invented assumptions;
- missing critical questions;
- premature drafting;
- useful bounded defaults;
- unnecessary clarification;
- context cost.

This better targets the unique upstream role suggested by the first three experiments.

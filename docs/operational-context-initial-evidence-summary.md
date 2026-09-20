# Operational Context Initial Evidence Summary

Status: Completed initial prospective validation
Date: 2026-09-20

## Question

Does injecting the current Communication Engineering operational context improve communication work enough to justify automatic distribution/injection?

## Experiments

### Experiment 01 — incident procedure

Task:
- concise technical procedure;
- all state/action facts supplied;
- safety-critical unknown-effect distinction.

Result:
- ordinary request: 18/18
- Communication Engineering: 18/18
- both 91 words

Disposition:
- null correctness result.

### Experiment 02 — executive decision memo

Task:
- mixed quantitative evidence;
- explicit recommendation;
- decision owner and auditability requirement supplied.

Result:
- ordinary request: 23/23
- Communication Engineering: 23/23
- 206 vs 216 words

Disposition:
- null correctness result.

### Experiment 03 — flawed memo review

Task:
- 12 pre-injected semantic/authority/uncertainty defects;
- full fixed source facts supplied.

Result:
- ordinary review: 12/12 defects detected, 0 false positives
- Communication Engineering review: 12/12 defects detected, 0 false positives
- corrected memos passed all guardrails

Disposition:
- null correctness result.

## Supported finding

The current operational context is **non-regressive** in these tests.

It did not:
- reduce correctness;
- cause excessive verbosity;
- leak writer/persona imitation;
- invent authority;
- flatten uncertainty;
- introduce a universal quality score.

It also supplied a useful shared vocabulary for defect classes.

## Unsupported claim

The current evidence does **not** show that injecting the full context improves a strong reasoning model's first-draft correctness or review recall when the source task/facts are already explicit.

Do not claim otherwise.

## Method change caused by evidence

The full method is now selectively activated.

Use Communication Engineering when decision-relevant communication inputs are materially unresolved:

- purpose;
- audience/task;
- proof obligation;
- authority;
- uncertainty;
- accessibility;
- competing use modes;
- cultural/translation boundaries;
- success measure.

Do not require mechanical contract completion for simple, fully specified tasks.

## Likely value hypotheses now worth testing

1. **Brief construction:** detect missing communication inputs before drafting.
2. **Cross-model consistency:** help less capable/differently trained agents preserve the same boundaries.
3. **Human/team review:** make proof, authority, uncertainty, and outcome choices inspectable.
4. **Telemetry/taxonomy:** classify recurring communication defects and measure reduction over time.
5. **High-consequence gates:** ensure purpose-specific verification happens when stakes justify it.
6. **Outcome linkage:** connect communication decisions to downstream task/comprehension/transfer evidence.

## Package decision

Do not yet evolve `@echelon-foundry/communication-engineering` into an automatic lifecycle context-injection tool.

Evidence required before that promotion:

- independent-model/provider delta;
- human/team rework or consistency improvement;
- participant outcome evidence;
- or a brief-construction experiment showing unique value.

## Repository disposition

Keep `agent-context/` as the canonical research/operational source.

It is ready to be used deliberately in further experiments and real communication work, but not yet justified as mandatory ambient context.


# Addendum: Brief-Construction Evidence

## Experiment 04 — brief construction

Underspecified internal leadership update.

- Ordinary response: 5/10.
- Communication Engineering: 10/10.
- Difference: +5 points.
- All eight guardrails passed.
- Communication Engineering recovered all eight preregistered missing communication inputs in four grouped questions.
- Ordinary response surfaced only part of the missing communication state.

## Experiment 05 — external customer notice

Underspecified API-deprecation notice.

- Ordinary response: 6.5/10.
- Communication Engineering: 10/10.
- Difference: +3.5 points.
- All eight guardrails passed.
- Communication Engineering again recovered all eight missing inputs in four grouped questions.
- Ordinary response missed recipient role, cadence, localization/accessibility, and fully explicit personalization authority.

## Revised synthesis

The first five experiments now separate two conditions clearly.

### When the brief is already strong

Experiments 01-03:

- no measured correctness or review-recall gain from full context;
- no observed regression.

### When decision-relevant communication state is missing

Experiments 04-05:

- replicated improvement in missing-input recovery;
- no additional unsupported assumptions;
- no redundant known-fact questions;
- useful bounded progress remained possible.

The best-supported current role for Communication Engineering is therefore:

> **selective communication preflight before drafting when important communication state is incomplete.**

This remains same-model process evidence. Downstream reader outcomes and independent-model reproducibility remain unproven.

## Tooling consequence

Do not build an always-on prose wrapper.

The next product candidate is a small preflight capability that:

- receives typed communication-state assessment;
- preserves field provenance;
- identifies material missing fields;
- groups clarifications;
- selects bounded-progress vs clarification vs verification;
- gets out of the way when ordinary drafting is already appropriate.

See:

- `docs/communication-preflight-requirements-candidate-v0.1.md`
- `research/prototypes/communication-preflight-v0.1/`

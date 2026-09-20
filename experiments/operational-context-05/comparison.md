# Operational Context Experiment 05 Comparison

Status: First-pass comparison frozen
Date: 2026-09-20

## Result

Experiment 05 **replicated the brief-construction advantage** from Experiment 04 on a different communication domain.

| Condition | Missing-input points | Bonus | Penalties | Primary score | Words |
|---|---:|---:|---:|---:|---:|
| A: ordinary response | 4.5 / 8 | +2 | 0 | **6.5 / 10** | 168 |
| B: Communication Engineering | 8 / 8 | +2 | 0 | **10 / 10** | 336 |

Both conditions passed all eight critical guardrails.

Condition B exceeded Condition A by **3.5 primary points**, above the preregistered +2-point replication threshold.

## What Condition A caught

The ordinary response correctly surfaced:

- audience segmentation;
- sender;
- communication channel;
- support/contact path.

It also avoided false personalization by saying:

> If you still use v1

rather than claiming every recipient was still on v1.

That was competent bounded progress.

## What Condition A did not surface

The ordinary response missed or only partially surfaced:

- the operational recipient role;
- prior-notice/cadence state;
- localization/alternate-format requirements;
- the distinct question of whether recipient-level v1 usage is known strongly enough to personalize the notice.

## What Condition B added

Condition B found all eight preregistered missing inputs and grouped them into four clarification areas:

1. audience + role + personalization truth;
2. channel + sender;
3. support path;
4. cadence + accessibility/localization.

It asked no redundant known-fact question.

It also provided a reversible broad notice that:

- did not claim the recipient still used v1;
- did not invent a support path;
- did not overclaim reliability;
- preserved the retirement consequence;
- treated the two breaking changes as supplied examples rather than the complete migration guide.

## Decision rule

All replication conditions were met:

- B exceeded A by more than 2 points;
- B had no guardrail failure;
- B used four grouped clarification questions;
- B had no redundant-question penalty.

**Replication result: positive.**

## Cost

B was 168 words longer, exactly 2x the ordinary response length.

That cost is significant.

It reinforces the selective-activation conclusion:

> The full preflight is useful when communication metadata is missing, but should not be ambient ceremony for already-specified tasks.

## Combined evidence after five experiments

### Generation/review with strong briefs

Experiments 01-03:
- three null correctness results;
- no observed regression;
- full context did not outperform ordinary work.

### Brief construction with missing communication state

Experiment 04:
- A 5/10
- B 10/10
- +5-point gain.

Experiment 05:
- A 6.5/10
- B 10/10
- +3.5-point gain.

Across two different communication domains, the context improved explicit recovery of missing communication state without increasing unsupported assumptions or redundant questions.

## Supported working finding

The current same-model evidence supports:

> **Communication Engineering adds value primarily as a selective communication preflight when decision-relevant communication state is incomplete.**

The evidence does not support mandatory full-context injection during ordinary well-specified drafting.

## Candidate product shape

If tooling is developed, prefer a small **preflight** capability.

Inputs:
- task/request;
- known source facts;
- optional known audience/use constraints.

Outputs:
- resolved communication state;
- material missing fields only;
- grouped clarification questions;
- safe bounded defaults;
- activation decision:
  - ordinary drafting sufficient;
  - Communication Engineering review warranted;
  - clarification required;
  - high-consequence verification required.

The preflight should not write prose unless explicitly asked.

## Important boundary

A preflight tool must not become an audience-inference engine.

Unknown:
- audience;
- authority;
- motivation;
- culture;
- accessibility needs;
- desired action;

must remain unknown unless provided or safely derivable from authoritative context.

## Next gate

Same-model replication is now positive, but independent evidence is still missing.

Before publishing an always-available lifecycle tool, preferred next evidence is:

1. independent model/provider replication; or
2. human/agent workflow comparison.

However, there is now enough evidence to write a **formal preflight requirements candidate** and prototype the deterministic parts in research.

Do not yet claim downstream comprehension or task-success improvement.

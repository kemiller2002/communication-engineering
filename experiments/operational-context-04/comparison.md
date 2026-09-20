# Operational Context Experiment 04 Comparison

Status: First-pass comparison frozen
Date: 2026-09-20

## Result

Experiment 04 produced the first **positive process result** for the Communication Engineering operational context.

| Condition | Missing-input points | Bonus | Penalties | Primary score | Words |
|---|---:|---:|---:|---:|---:|
| A: ordinary response | 3 / 8 | +2 | 0 | **5 / 10** | 229 |
| B: Communication Engineering | 8 / 8 | +2 | 0 | **10 / 10** | 368 |

Both conditions passed all eight critical guardrails.

Condition B exceeded Condition A by **5 primary points**, above the preregistered +2-point threshold.

## What Condition A did well

The ordinary response was not bad.

It:

- produced a concise, accurate leadership update;
- preserved the support/security constraint;
- kept pilot limitations visible;
- avoided invented cost savings, authority, or deadlines;
- proposed safe bounded technical next steps;
- recognized at the end that a decision-oriented version would need a decision owner and exact requested approval.

That earned full bounded-progress bonuses.

## What Condition A missed

It did not explicitly surface five preregistered communication decisions:

- which leadership audience;
- whether this communication is intended to seek budget approval;
- who has migration-sequence approval authority;
- whether there is a meeting/deadline/use event;
- what the audience already knows.

It therefore committed to a status-and-direction draft before fully separating communication metadata from product facts.

## What Condition B added

Condition B mechanically separated:

### Established facts

The supplied product/operational evidence.

### Missing communication decisions

All eight preregistered missing inputs, grouped into only four questions:

1. audience + prior state;
2. purpose + immediate action + budget-decision expectation;
3. executive decision authority + migration-strategy authority;
4. use event / communication deadline.

This is important: the method did **not** ask eight questions merely because eight fields existed.

It grouped related unknowns and asked no question whose answer was already present in K1-K13.

### Safe provisional progress

Rather than blocking on clarification, Condition B chose a reversible default:

> neutral status-and-options update, not an approval request

It then bounded what that provisional communication could safely say and what it must not claim.

## Decision rule

The treatment satisfied every preregistered condition:

- B exceeded A by 5 points;
- B had no guardrail failure;
- B used four clarification questions, below the maximum of five;
- B had no redundant-question penalty;
- the extra process corresponded directly to missing decision-relevant information.

**Decision rule: met.**

## Cost

Condition B was 139 words longer (+60.7%).

That is material.

However, the added words were primarily:

- explicit known/unknown separation;
- four grouped questions;
- a provisional brief.

This experiment therefore supports value for **brief construction**, not automatic use on every writing task.

The earlier null experiments remain important because they show that this extra process is unnecessary when the communication state is already explicit.

## Combined evidence from Experiments 01-04

### Fully specified tasks

Experiments 01-03:

- no incremental correctness gain from full context;
- no regression;
- modest or zero length increase;
- ordinary capable drafting/review already reached the rubric ceiling.

### Underspecified task

Experiment 04:

- ordinary response: 5/10 brief-construction score;
- Communication Engineering: 10/10;
- no guardrail failures;
- no redundant questions;
- +60.7% response length.

The evidence now supports a narrower statement:

> **Communication Engineering is useful as a selective pre-drafting method for exposing missing decision-relevant communication state while still enabling bounded progress.**

It does **not** support:

> inject Communication Engineering into every writing request.

## Architectural implication

The likely operational shape is a small **communication preflight**, not a permanent prose-generation wrapper.

Candidate flow:

```
request + source facts
        ↓
preflight
        ↓
Are purpose/audience/proof/authority/
uncertainty/outcome sufficiently resolved?
        │
      yes ─────→ ordinary drafting
        │
       no
        ↓
identify only material missing fields
        ↓
group clarifications
        ↓
choose safe bounded default where possible
        ↓
draft / hand off
```

This is smaller than injecting the complete research briefing.

## What this experiment does not establish

It does not establish:

- human reader outcome improvements;
- cross-model reproducibility;
- reduced total task time;
- lower token cost;
- correct behavior under genuinely high-stakes real-world ambiguity;
- that the eight missing-field categories are universally sufficient.

Same-model contamination remains material.

## Package decision

This result is enough to reopen package/tooling design, but **not enough to justify a full always-on context package**.

The next package hypothesis should be:

> a lightweight Communication Engineering preflight/lifecycle tool that detects when the full method is warranted and otherwise gets out of the way.

Before implementation, repeat this result with at least one independent model/provider or a materially different agent if available.

If independent replication is unavailable, run at least one second brief-construction task in another communication domain before promoting runtime tooling.

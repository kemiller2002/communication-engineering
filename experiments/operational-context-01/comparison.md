# Operational Context Experiment 01 Comparison

Status: First-pass comparison frozen
Date: 2026-09-20

## Result

This experiment produced a **null correctness result**.

| Condition | Material defects (items 1-15) | Guardrail defects (items 16-18) | Word count |
|---|---:|---:|---:|
| A: ordinary request | 0 | 0 | 91 |
| B: Communication Engineering context + explicit contract | 0 | 0 | 91 |

Both conditions passed all 18 preregistered rubric items on first pass.

No repairs were required.

## Decision rule

The preregistered decision rule required B to have fewer material first-pass defects than A.

That condition was **not met** because both had zero material defects.

The result is therefore a null result, not evidence that the context improved this task.

## What differed

Condition A used:
- a short numbered procedure;
- four bullet status/action mappings.

Condition B used:
- a more action-oriented heading;
- an explicit verification-before-retry warning;
- a two-column status/action table;
- a final rule tying retry to authoritative evidence.

Those are presentation differences, not measured correctness gains under the frozen rubric.

Both outputs were exactly 91 words.

## Why the null result is informative

The fixed task already supplied:

- the audience;
- the incident use mode;
- the central misconception;
- the authoritative status command;
- every legal status/action mapping;
- the consequence of blind retry.

In other words, the ordinary task description already contained much of the communication contract.

A competent response did not need the full Communication Engineering context to recover those semantics.

This supports a useful design constraint:

> **Do not require the full communication contract as ceremony when the task already supplies the decision-relevant communication state explicitly.**

Communication Engineering should help when important communication decisions are unresolved, not duplicate information already present.

## What this experiment does establish

It establishes that the current context:

- did not degrade semantic correctness on this bounded task;
- did not increase output length;
- did not force writer/persona language into the output;
- did not add qualification fog;
- remained compatible with a concise incident procedure.

It also establishes that the explicit context was unnecessary for this already well-specified task.

## What this experiment does NOT establish

It does not establish:

- equal reader performance between A and B;
- improved or unchanged comprehension;
- improved or unchanged task completion;
- trust effects;
- transfer;
- general utility of Communication Engineering;
- lack of utility on underspecified or competing-purpose tasks.

Same-model contamination remains material.

## Architecture implication

The first operational design should **not** require agents to fill out every communication-contract field mechanically.

A better pattern is likely:

1. inspect the task for already-supplied contract information;
2. identify only missing decision-relevant fields;
3. avoid asking for or inventing information that would not change the communication decision;
4. escalate rigor with stakes, ambiguity, conflicting purposes, or difficult recovery.

This is analogous to the Visual Engineering research result that manually duplicating already-explicit semantics added no correctness.

## Next experiment

Do not repeat another fully specified incident procedure.

The next test should contain a genuine communication-design choice.

Recommended Experiment 02:

### Executive decision memo with mixed evidence

Fixed source material should contain:
- a recommendation candidate;
- meaningful downside;
- uncertain evidence;
- two audience needs (quick decision + auditability);
- no prescribed document architecture.

Compare ordinary drafting with Communication Engineering context.

Pre-register measures for:
- material option/tradeoff omission;
- evidence/inference distinction;
- uncertainty visibility;
- decision/action discoverability;
- proof-obligation coverage;
- unnecessary verbosity;
- unsupported authority.

That better tests whether the context helps select architecture rather than merely restating an already-complete procedure.

## Packaging disposition

**Do not package yet.**

The context passed a non-regression test but has not shown incremental value.

Run at least one architecture-selection experiment before promoting it into the lifecycle npm package.

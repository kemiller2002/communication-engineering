# Independent Preflight Replication 08 Result

Status: Invalidated by auto-model routing
Date: 2026-09-20

## Goal

Test a compact Communication Engineering preflight treatment on the independent Microsoft AI model `mai-code-1.1-flash`.

## Model control requirement

Both A and B had to resolve to:

`mai-code-1.1-flash`

## Runtime result

Condition A:

- requested model: `auto`
- resolved model: `mai-code-1.1-flash`

Condition B:

- requested model: `auto`
- resolved model: `gpt-5.6-luna`

The run failed at the model-equality assertion and was not scored.

## Significance

Experiment 07 showed the same pattern with the full five-file context.

Experiment 08 used only the compact preflight kernel and still caused the auto router to select a more capable model for B.

Therefore the routing effect is reproducible across:

- full operational context;
- compact preflight context.

## Supported finding

When Copilot auto-routing is enabled, adding Communication Engineering context can change the model selected for the task.

This means an apparent quality improvement could be confounded by:
- different model capability;
- different inference cost;
- different latency;
- different token economics.

## Engineering implication

Do not rely on ambient prompt context as the only implementation of Communication Engineering.

Prefer moving stable preflight semantics into deterministic code so that:

- known fields are preserved mechanically;
- missing/material fields are computed outside the model where possible;
- clarification grouping has a bounded typed representation;
- model calls receive only the unresolved judgment problem;
- routing/cost effects from large context are reduced.

## Independent-model gate

No valid independent-model comparison was obtained through the current Copilot account.

Production promotion remains gated.

The next justified engineering step is a research-only F# implementation of the deterministic preflight core, followed by:
- human/team workflow validation;
- or an independently controllable model/provider when available.

# Independent Preflight Replication 07 Result

Status: Invalidated by auto-model routing
Date: 2026-09-20

## Pre-registered requirement

Both Condition A and Condition B had to resolve to:

`mai-code-1.1-flash`

## Runtime telemetry

Condition A:

- requested model: `auto`
- resolved model: `mai-code-1.1-flash`

Condition B:

- requested model: `auto`
- resolved model: `gpt-5.6-luna`

The workflow failed at the Condition B model assertion before outputs were committed.

## Interpretation

The longer Communication Engineering context changed Copilot's auto-routing decision.

This is a material experimental confound and a useful product-cost signal:

> A large always-on context can alter model selection even before it changes the answer.

The run is not scored.

## Explicit-selection investigation

The account does not permit explicit selection of `mai-code-1.1-flash`, despite the auto router using it.

Therefore a controlled full-context MAI replication is not currently possible through this Copilot account.

## Next experiment

Test the product hypothesis that now appears more appropriate:

> A compact Communication Engineering preflight kernel can preserve the useful brief-construction behavior without requiring the full five-file context.

The compact treatment must:

- be preregistered before execution;
- remain generic rather than encoding Atlas-specific missing fields;
- be materially smaller than the five-file context;
- use Copilot `auto`;
- require both conditions to resolve to `mai-code-1.1-flash`;
- invalidate itself if routing differs.

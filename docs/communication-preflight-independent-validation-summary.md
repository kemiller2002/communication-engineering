# Independent Validation and Model-Routing Summary

Status: Completed research pass
Date: 2026-09-20

## Objective

Obtain evidence for the selective Communication Engineering preflight outside the GPT-5.6 Sol execution path used for Experiments 01-05.

## Experiment 06 — explicit Claude Sonnet 4.6

Target:

- GitHub Copilot CLI
- `claude-sonnet-4.6`

Result:

- Copilot CLI and GitHub Actions integration worked.
- The requested model was not available to this repository/account.
- No condition output was produced.
- No fallback was substituted.

Disposition:

**Incomplete. Not scored.**

## Model availability probes

Explicit selection was also unavailable for the tested:

- Claude Haiku 4.5
- Gemini 3.1 Pro Preview
- Gemini 3.5 Flash
- GPT-5.4
- GPT-5.3 Codex
- MAI-Code-1.1-Flash

The account can nevertheless use Copilot's `auto` route.

OpenTelemetry tracing showed that `auto` can resolve to different models depending on the request.

## Experiment 07 — full-context auto-route test

Pre-registered requirement:

Both A and B must resolve to `mai-code-1.1-flash`.

Observed:

- A ordinary request -> `mai-code-1.1-flash`
- B full Communication Engineering context -> `gpt-5.6-luna`

The model-equality assertion failed.

Disposition:

**Invalidated. Not scored.**

## Experiment 08 — compact-preflight auto-route test

To reduce treatment size, B received only a compact generic preflight kernel rather than the five operational context files.

Pre-registered requirement remained:

Both A and B must resolve to `mai-code-1.1-flash`.

Observed:

- A ordinary request -> `mai-code-1.1-flash`
- B compact preflight -> `gpt-5.6-luna`

The model-equality assertion failed again.

Disposition:

**Invalidated. Not scored.**

## New supported finding: model-routing is part of treatment cost

The routing effect reproduced across:

- the full operational context;
- the compact preflight context.

Therefore, under an auto-routing model surface, adding Communication Engineering context can change:

- the model used;
- model capability;
- latency;
- inference/token economics.

This makes naïve A/B comparisons invalid unless model identity is controlled.

It also means prompt-context size/structure is itself an operational cost of the method.

## Engineering consequence

Do not implement Communication Engineering primarily as ambient prompt text.

Move stable preflight mechanics into deterministic typed code where possible.

The model/human should handle only the unresolved judgment:

- classify communication fields;
- decide materiality;
- judge safe inference;
- resolve novel ambiguity.

The executable preflight should compute:

- validation;
- missing required state;
- optional unknown state;
- clarification grouping;
- activation decision;
- bounded-progress permission;
- verification escalation.

## F# prototype

Research implementation:

`research/prototypes/communication-preflight-fsharp-v0.1/`

It is deliberately:

- dependency-free beyond the .NET SDK;
- typed;
- deterministic;
- provider-neutral;
- free of natural-language parsing;
- free of AI SDK dependencies;
- not an Ordo runtime dependency.

It follows the project's preferred split:

```
natural-language interpretation
        ↓
Decide / Deliberate
        ↓
typed communication state
        ↓
Compute
        ↓
preflight result
```

## Independent-model evidence status

No valid controlled independent-model comparison was completed.

Do not claim one.

The attempt did, however, reveal a reproducible routing confound and strengthened the case for deterministic preflight semantics.

## Next evidence gate

Preferred next evidence:

1. human/agent workflow validation using the executable preflight;
2. a provider/model surface that supports explicit model pinning;
3. downstream participant evidence tied to purpose-specific outcomes.

Production lifecycle packaging remains gated.

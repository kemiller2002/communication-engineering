# Communication Preflight F# Prototype v0.1

Status: Research-only executable prototype
Date: 2026-09-20

## Purpose

Move the stable, deterministic portion of Communication Engineering preflight out of prompt context and into typed code.

This prototype is motivated by two findings:

1. Brief-construction Experiments 04-05 showed a replicated same-model gain when communication state was incomplete.
2. Independent-model Experiments 07-08 were invalidated because adding Communication Engineering context changed Copilot's auto-selected model.

The design goal is therefore:

> **Use models only for the unresolved judgment. Compute the stable preflight mechanics in code.**

## Scope

This prototype accepts an already-classified communication-state assessment.

It computes:

- known fields;
- materially missing fields;
- optional unknowns;
- not-applicable fields;
- grouped clarification needs;
- activation decision;
- bounded-progress permission;
- verification requirement.

It validates:

- duplicate field identifiers;
- known values with missing provenance.

## It deliberately does not

- parse natural-language requests;
- infer audience or authority;
- infer accessibility needs;
- decide cultural permission;
- generate prose;
- score communication quality;
- call an AI provider;
- depend on Ordo or ROS at runtime.

## Compute / Decide / Deliberate boundary

### Compute — implemented here

- preserve typed state;
- validate provenance;
- find missing required fields;
- group clarifications deterministically;
- apply explicit stop/continue rules;
- derive activation decision.

### Decide — outside this prototype

- dominant purpose;
- whether an unknown field is materially required now;
- whether a proposed inference is safe;
- whether a bounded default is legitimate.

### Deliberate — outside this prototype

- conflicting purposes;
- unfamiliar authority/cultural questions;
- novel high-consequence communication architecture.

## Layout

- `src/CommunicationPreflight.fsproj`
- `src/Domain.fs`
- `src/Preflight.fs`
- `tests/CommunicationPreflight.Tests.fsproj`
- `tests/Program.fs`

The test project is a console executable with no external test framework dependency.

## Run

```bash
dotnet build research/prototypes/communication-preflight-fsharp-v0.1/src/CommunicationPreflight.fsproj
dotnet run --project research/prototypes/communication-preflight-fsharp-v0.1/tests/CommunicationPreflight.Tests.fsproj
```

## Promotion boundary

Passing these tests proves only the deterministic semantics of this prototype.

It does not prove that a model/human will classify communication state correctly or that downstream readers perform better.

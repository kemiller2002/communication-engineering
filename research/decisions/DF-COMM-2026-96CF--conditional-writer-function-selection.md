---
id: DF-COMM-2026-96CF
title: Select communication functions conditionally rather than rank writers
status: accepted
version: 1.0.0
research_area: comparative-communication
confidence: high
created: 2026-08-02
updated: 2026-08-02
author_agent: codex
related_documents: [MS-COMM-2026-0003, MS-COMM-2026-0004, RP-COMM-2026-572D, HY-COMM-2026-D246, TH-COMM-2026-0001]
supersedes: []
superseded_by: []
tags: [writer-selection, conditional-fit, decision-framework]
---

# Decision Record

## Context

The program prompt asks for a “DF record” that selects writer approaches by
purpose, audience, medium, and risk. Canonical governance defines `DF-` as a
Decision Record, not a decision-framework artifact. The pilot also finds that
whole-writer rankings conceal genre, authority, and proof-regime differences.

## Decision

Use `research/frameworks/WRITER-PURPOSE-FIT-FRAMEWORK-v1.0.md` as the human-
readable selection framework. This `DF-` records and authorizes that choice.
Recommendations must declare the communication contract, select bounded
functional patterns, apply ethical/accessibility gates, and name an outcome
test. Do not issue a universal writer ranking or a pseudo-precise score.

## Alternatives

1. Assign each writer a numeric style score. Rejected: no validated scale or
   outcome model exists.
2. Create a `DF-` typed as “decision framework.” Rejected: conflicts with
   canonical REP v2.0 semantics.
3. Recommend one writer per document type. Rejected: audience, risk, and use
   mode materially alter fit within a document type.

## Evidence

Five primary-text records and two contextual scholarship records support
function-level differences [EV-COMM-2026-D6B2 through EV-COMM-2026-7D8D;
HY-COMM-2026-D246]. Existing `TH-COMM-2026-0001` predicts conditional fit.

## Consequences

The framework is auditable and avoids style impersonation, but it requires
more up-front context and cannot automate selection until outcome evidence is
available. Concept and glossary records remain embedded provisionally in the
REP because no canonical registry/schema exists.

## Reversibility

High. The framework is versioned and can be replaced without changing primary
evidence.

## Validation

Revisit after two comparative audience experiments or when a larger corpus
produces a counterexample that changes a selection rule.


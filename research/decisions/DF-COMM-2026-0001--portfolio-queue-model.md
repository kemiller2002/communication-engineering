---
id: DF-COMM-2026-0001
title: Model the research portfolio as a staged dependency graph
status: accepted
version: 1.0.0
research_area: research-portfolio
confidence: high
created: 2026-07-30
updated: 2026-07-30
author_agent: codex
related_documents: [RP-COMM-2026-0001, JR-COMM-2026-0002]
supersedes: []
superseded_by: []
tags: [portfolio, queue, roadmap, governance]
---

# Decision Record

## Context

The initial queue recorded priority, question, decision, evidence, and status in
five rows. It could not represent stable identity, maturity, parent/child
relationships, dependencies, evidence links, confidence, remaining uncertainty,
enabled engineering, review triggers, or completion consequences. Priorities
therefore could not be reconstructed or challenged systematically.

## Decision

Each portfolio item receives a stable `RQ-COMM-NNN` identifier and records:

- parent and child questions;
- maturity from Idea through Monitoring;
- priority tier and scoring rationale;
- supporting and contradicting evidence;
- dependencies and related research;
- artifacts and engineering work enabled;
- confidence and largest remaining uncertainty;
- next action, exit evidence, and review trigger.

`context/RESEARCH-QUEUE.md` remains the compact current-state view.
`research/frontier/PORTFOLIO-ROADMAP.md` becomes the richer, mutable graph view.
Neither is accepted scientific evidence; conclusions remain in `EV-`, `HY-`,
`TH-`, and `RP-` records.

## Alternatives

1. Keep the checklist and add prose notes. Rejected because relationships remain
   implicit and item identity unstable.
2. Create a database and new validator immediately. Rejected as premature
   engineering before the representation proves useful.
3. Put all portfolio fields into mission records. Rejected because early ideas
   and monitoring questions are not yet executable missions.

## Evidence

The observed five-row queue omitted every graph and maturity field required by
the portfolio mandate. Existing ROS lifecycle rules already separate idea,
mission, research artifact, and accepted knowledge states.

## Consequences

Prioritization becomes inspectable and queue items can move backward when
confidence weakens. Manual duplication between the compact queue and roadmap is
a drift risk until a schema and generator are justified.

## Reversibility

High. The identifiers and fields are Markdown conventions; no accepted research
claim or software interface depends on them.

## Validation

After two completed research cycles, audit whether item identity, dependencies,
and exit evidence improved selection and handoff. If not, simplify or replace
the model. Do not automate before that review.

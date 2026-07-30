---
id: RP-COMM-2026-0001
title: Communication Engineering mission foundation and first research slice
research_area: communication-effectiveness
discipline: [communication-science, technical-communication, human-factors, cognitive-psychology]
author_agent: codex
version: 0.1.0
status: review
confidence: medium
completion: partial
priority: high
created: 2026-07-30
updated: 2026-07-30
related_projects: [PROJECT-CHARTER-communication-engineering]
related_documents: [JR-COMM-2026-0001, MS-COMM-2026-0001, TH-COMM-2026-0001]
supersedes: []
superseded_by: []
tags: [communication-effectiveness, research-program, pilot]
keywords: [audience, objective, context, measurement, procedural-documentation]
---

# Research State Snapshot

- **Theory version:** TH-COMM-2026-0001 v0.1.0, candidate
- **Knowledge-base version:** RP-COMM-2026-0001 v0.1.0
- **Highest-confidence areas:** effectiveness is context-bound; plain-language effects vary; task outcomes require multiple measures
- **Lowest-confidence areas:** predictive variable weights and generalization beyond informational writing
- **Largest remaining unknown:** which concrete procedural task provides stakeholder value and measurable non-ceiling outcomes
- **Active research streams:** none; MS-COMM-2026-0001 is proposed
- **Recently invalidated ideas:** none conclusively invalidated; “plain language is always preferable” is materially weakened
- **Priority changes:** a behavioral procedural pilot now precedes exhaustive taxonomy

# Executive Summary

The attached mission is a legitimate research program but is not a bounded research task. This package establishes a testable foundation and recommends procedural documentation as the first vertical slice. Evidence supports a conditional-fit model: effective communication depends on the audience, objective, task, channel, and context, while accuracy, ethics, and accessibility constrain acceptable strategies [EV-COMM-2026-0001, EV-COMM-2026-0002, EV-COMM-2026-0006; TH-COMM-2026-0001].

Procedural documentation is recommended because it permits direct measures—unassisted completion, errors, time, assistance, comprehension, and satisfaction—without initially entering high-stakes domains [EV-COMM-2026-0002, EV-COMM-2026-0003; HY-COMM-2026-0001]. Confidence is Medium. The largest caveat is that no users, stakeholders, or participants have validated the proposed task.

# Original Objective

Build a scientific foundation explaining how humans communicate information most effectively across styles, purposes, cognition, psychology, rhetoric, information design, technical communication, and AI, while testing conventional assumptions and preserving evidence.

## Success Criterion

Program success is a validated framework that helps humans and AI choose strategies for a specified audience, objective, and context. This first package succeeds only if it converts that program into a traceable model, candidate first slice, evidence base, and executable handoff.

# Scope

## Included

Repository and governance baseline; program decomposition; initial effectiveness model; comparison of candidate first slices; measurement strategy; evidence on goal/context dependence and plain-language heterogeneity; five ranked follow-ons.

## Excluded

Exhaustive style taxonomy; completed linguistic, cognitive, rhetorical, information-design, or AI reviews; participant experiments; product implementation; claims that Communication Engineering is a distinct validated discipline.

## Scope Changes

The broad mission was narrowed to first-slice selection because the project charter explicitly excludes exhaustive taxonomy before a measurable pilot and the REP standard requires bounded research.

# Repository Context

At start, the ROS repository had no accepted domain evidence, selected vertical slice, domain theory, or baseline. The draft charter named first-use-case selection as the largest decision-relevant uncertainty. Canonical governance requires hypotheses, contradictory evidence, confidence, registries, validation, and a self-contained handoff. Untracked `package.json` and `package-lock.json` predated this work and were preserved.

# Current Understanding

Communication effectiveness is not a scalar property of prose. It is an outcome relationship among communicator intent, audience state, goal, task, message representation, channel, environment, and time. Useful measures depend on the intended goal: comprehension for informing, calibrated belief for uncertainty, task success for instruction, decision quality for advice, and trustworthiness—not mere trust—for credibility. Measures can conflict.

The first engineering representation should therefore be a context-to-strategy model, not a flat list of “good writing” rules. Styles remain useful as historically evolved bundles, but their effects must be decomposed and tested.

# Key Discoveries

1. A respected consensus synthesis explicitly rejects a one-approach model and calls for goal alignment, systems analysis, and contextual comparison [EV-COMM-2026-0001].
2. ISO and NIST provide a transferable measurement frame built around specified users, goals, contexts, effectiveness, efficiency, and satisfaction [EV-COMM-2026-0002, EV-COMM-2026-0003].
3. Preference is not comprehension: one randomized trial found plain-language versions more accessible and satisfying for two items, but a statistically clear comprehension gain for only one [EV-COMM-2026-0004].
4. Most plain-language-summary rules have insufficient direct empirical support, so rule popularity cannot substitute for testing [EV-COMM-2026-0005].
5. Accessibility is a boundary condition; aggregate optimization cannot justify excluding people with cognitive or learning disabilities [EV-COMM-2026-0006].

# Evidence Registry

| ID | Claim/Observation | Source and Method | Supports/Contradicts | Quality and Limits |
|---|---|---|---|---|
| EV-COMM-2026-0001 | Strategies depend on goals, audiences, systems | National Academies consensus synthesis | Supports conditional fit | High-quality synthesis; science-communication scope |
| EV-COMM-2026-0002 | Outcomes are user-goal-context bound | ISO standard | Supports measurable first slice | Official; full text not inspected |
| EV-COMM-2026-0003 | Task success, errors, time, satisfaction are operational measures | NIST official report | Supports procedural pilot | Health-software context |
| EV-COMM-2026-0004 | Plain-language comprehension effects varied by item | Randomized trial, n=488 | Supports heterogeneity | Two health recommendations |
| EV-COMM-2026-0005 | Most summary guidelines lack direct evidence | Systematic review | Weakens universal rules | Research-summary scope |
| EV-COMM-2026-0006 | Clear content supports cognitive accessibility | W3C Working Group Note | Supports accessibility constraint | Guidance, not causal estimate |

# Hypothesis Registry

| ID | Statement | Evidence For | Evidence Against | Unknowns | Confidence | Disposition | Implications |
|---|---|---|---|---|---|---|---|
| HY-COMM-2026-0001 | Procedural documentation is the best first slice | EV-0001–0003 | No participant feasibility evidence | task, audience, recruitment | Medium | supported for planning | propose MS-COMM-2026-0001 |
| HY-COMM-2026-0002 | Plain language is beneficial but non-universal | EV-0004–0006 | EV-0004 includes one large benefit | moderators, technical domains | High | supported | test as intervention, not axiom |

# Failed Assumptions

- **“Shorter/plain is always better.”** Weakened. Controlled effects differ by source, and systematic evidence does not validate most rules [EV-COMM-2026-0004, EV-COMM-2026-0005].
- **“A complete style taxonomy should come first.”** Rejected as sequencing, not as a long-term deliverable. It lacks an immediate behavioral acceptance criterion and risks reifying labels before mechanisms.
- **“Reader preference demonstrates effectiveness.”** Rejected. Accessibility/satisfaction and comprehension diverged [EV-COMM-2026-0004].
- **“Reading level predicts understanding.”** Unresolved; not tested here. It must not be used as the sole pilot outcome.

# Open Questions

1. Which synthetic task is valuable, realistic, safe, and neither too easy nor too hard?
2. Which audience variables explain the most variance: expertise, language proficiency, working-memory demands, motivation, or accessibility needs?
3. How should accuracy, task success, effort, recall, trust calibration, and satisfaction be combined without hiding tradeoffs?
4. Which communication features can be manipulated independently enough to identify mechanisms?
5. When do genre conventions outperform explicit audience modeling?
6. How should an AI detect uncertainty in the audience/context and choose a safe fallback?

# Recommended Next Research

1. **Procedural-documentation feasibility pilot** — Highest priority. Matters because it tests the model behaviorally; impact: establishes measurement infrastructure; dependencies: specific user/task and ethical recruitment; current confidence: Medium; challenges intuition by separating ease from success. Stop after a pilot demonstrates viable scoring and non-ceiling performance, or reject after two materially different tasks fail feasibility.
2. **Outcome-measure validity matrix** — Maps purpose to measures and failure modes. Dependencies: representative tasks; confidence: Medium; challenges single-score quality models.
3. **Audience-state schema** — Tests which user/context fields materially predict outcomes. Dependencies: privacy review and adequate sample; confidence: Low.
4. **Plain language × information structure factorial study** — Separates lexical simplification from sequencing/hierarchy. Dependencies: pilot harness; confidence: Medium; directly challenges “plain is sufficient.”
5. **Communication style functional taxonomy** — Build only after measurement constructs stabilize. Dependencies: cross-disciplinary review and explicit inclusion rules; confidence: Low on exhaustiveness.

# Research Backlog

1. Documentation longevity and maintenance signals.
2. Uncertainty and confidence communication.
3. Diagrams versus text under task complexity.
4. Narrative effects on recall versus belief accuracy.
5. Expertise reversal and progressive disclosure.
6. AI instruction following and explanation calibration.
7. Cross-cultural pragmatics and trust.
8. Legal and safety-critical boundary conditions.

# Suggested Specialized Research Agents

Future work would benefit from bounded specialists in human-factors experimental design, psycholinguistics, accessibility, technical communication, measurement/psychometrics, and research synthesis. Each should receive the selected task, target audience, hypotheses, evidence records, protocol constraints, and required REP outputs. No parallel agents were used in this cycle.

# Parallel Research Opportunities

After task selection, accessibility review, literature synthesis, and protocol instrumentation can proceed independently. Variant design must wait for task requirements; statistical planning must wait for primary outcomes; taxonomy work should not block the pilot.

# Risks

- **Epistemic:** overgeneralizing from health/science contexts; source dependence; publication bias.
- **Operational:** no named users or owner; participant recruitment and ceiling effects.
- **Ethical:** optimizing influence without truth/harm constraints; collecting sensitive participant data.
- **Accessibility:** aggregate gains may conceal subgroup harms.
- **Adoption:** governance overhead may exceed the pilot's decision value.
- **Goodhart risk:** optimizing one metric, especially brevity/readability, at the expense of accuracy or action.

# Cross-Discipline Opportunities

Human factors supplies task metrics; psycholinguistics supplies processing mechanisms; rhetoric supplies goal and audience models; information theory supplies uncertainty and compression concepts; accessibility supplies constraints; education supplies retention and transfer; causal inference supplies intervention design; safety engineering supplies hazard-based communication requirements.

# Knowledge Relationships

EV-COMM-2026-0001 through 0006 support TH-COMM-2026-0001. HY-COMM-2026-0001 authorizes only a proposed next mission, MS-COMM-2026-0001. HY-COMM-2026-0002 prevents plain language from becoming an untested universal rule. JR-COMM-2026-0001 preserves the chronological reconstruction.

# Theory Impact Assessment

- **Affected theory records:** TH-COMM-2026-0001 created as candidate, Medium confidence.
- **Affected engineering principles:** none accepted.
- **New principle candidates:** specify audience, goal, task, context, constraints, and outcome measures before selecting style.
- **Deprecated principles:** none; no prior domain theory existed.
- **Confidence changes:** conditional-fit model Low → Medium; plain-language universalism unassessed → rejected as universal at High confidence.
- **Predictions created:** metric divergence, expertise/task moderation, and weak predictive power of style labels without context.
- **Predictions invalidated:** none experimentally.
- **Required theory-registry updates:** add TH-COMM-2026-0001 as candidate.

# Research Quality Metrics

| Metric | Value | Method/Limit |
|---|---:|---|
| Primary sources | 4 | ISO, NIST, RCT, W3C; “primary” includes authoritative standards/guidance |
| Independent sources | 6 | Six separately governed source records; not six experimental replications |
| Counterexamples reviewed | 2 | heterogeneous RCT result; insufficient evidence across guidelines |
| Competing viewpoints reviewed | 4 | universal rules, taxonomy-first, conditional fit, task-first |
| Hypotheses tested | 2 | desk evidence assessment only |
| Failed hypotheses | 0 | one sequencing assumption rejected, not preregistered |
| Research completeness | 0.15 | judgment against the broad mission's major topic families |
| Confidence gain | qualitative | no calibrated prior; model moved Low to Medium |
| Open questions reduced | 1 | first-slice class selected provisionally; exact task remains |

# Research Debt

## Missing Evidence

Stakeholder/user needs, technical-documentation experiments, cross-cultural evidence, and primary full text for ISO 9241-11.

## Missing Experiments

Feasibility pilot, controlled variant comparison, replication, and subgroup/accessibility analysis.

## Missing Disciplines

Discourse analysis, sociolinguistics, education, rhetoric, information design, safety engineering, legal communication, marketing, and AI-human interaction.

## Weak Areas

Trust, persuasion, retention, decision quality, long-term maintenance, and multimodal communication.

## Replication Needed

All candidate theory predictions; especially heterogeneous plain-language effects outside health communication.

## Tool Limitations

Web discovery was not a reproducible systematic search; databases, citation chaining, risk-of-bias tools, and participant systems were not used.

## Assumptions Awaiting Evidence

A synthetic procedural task will provide stakeholder value; feasible samples can detect useful differences; task outcomes transfer to broader communication engineering.

# Repository Updates

Created six evidence records, two hypothesis records, one candidate theory, one journal, this partial REP, and one proposed next mission. Updated the charter and compact context. Generated registries are rebuilt after validation.

# Website Updates

None. Publication is deferred until review/acceptance; canonical research remains under `research/`.

# AI Consumption Notes

Reliable retrieval terms: conditional fit, communication effectiveness, procedural documentation, task success, plain-language heterogeneity. Do not state that the model is validated, that procedural writing is globally the best first product, or that plain language is ineffective. Treat all strategy recommendations as conditional on specified audience, objective, context, and constraints.

# Handoff Instructions

1. Review this package and either approve or revise the proposed task class.
2. Identify one stakeholder and a synthetic procedural task they recognize as valuable.
3. Move `missions/backlog/MS-COMM-2026-0001--procedural-documentation-pilot.md`
   to `missions/active/` and set its status to `active` after approval.
4. Preregister task, audience, variants, primary outcome, scoring, exclusions, and stopping rule.
5. Run a feasibility pilot; create `EX-COMM-2026-0001` and `JR-COMM-2026-0002`.
6. Rebuild registries with `./ros registry build` and validate with `./ros validate`.

# Research Journal

- **JR-COMM-2026-0001:** repository baseline, evidence search, candidate comparison, falsification attempts, and first-slice recommendation.

# Appendix

Candidate comparison:

| Candidate | Behavioral measurability | Safety/privacy | Near-term feasibility | Breadth exposed | Decision |
|---|---:|---:|---:|---:|---|
| Procedural documentation | High | High if synthetic | High | Medium | selected |
| Exhaustive style taxonomy | Low | High | Low | High | backlog |
| Readability scorer | Medium proxy only | High | High | Low | rejected as first slice |
| Persuasion optimizer | Medium | Low | Medium | High | defer |
| High-stakes health/legal instructions | High | Low | Low | High | defer |

# Completion Checklist

- [x] Required metadata is complete and internally consistent for repository schemas.
- [x] Research State Snapshot and all mandatory sections exist.
- [x] Important claims reference evidence, hypotheses, and theory.
- [x] Contradictory results and weakened assumptions are preserved.
- [x] Theory impacts and registry changes are explicit.
- [x] Quality metrics state method and limitations.
- [x] Research debt is prioritized.
- [x] Partial status has executable recovery instructions.
- [x] Repository and website updates are accurate.
- [x] Handoff permits continuation without conversation history.
- [ ] Links, identifiers, and registries validate; pending validation run.
- [ ] Another capable agent has independently tested reconstruction.

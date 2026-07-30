---
id: RP-COMM-2026-0002
title: Procedural communication outcome-measure architecture
research_area: communication-measurement
discipline: [psychometrics, human-factors, cognitive-psychology, decision-science]
author_agent: codex
version: 0.1.0
status: review
confidence: medium
completion: partial
priority: high
created: 2026-07-30
updated: 2026-07-30
related_projects: [PROJECT-CHARTER-communication-engineering]
related_documents: [MS-COMM-2026-0002, JR-COMM-2026-0003, HY-COMM-2026-0003, TH-COMM-2026-0001]
supersedes: []
superseded_by: []
tags: [measurement, validity, procedural-documentation, usability]
keywords: [task-success, critical-errors, assistance, time-on-task, satisfaction, retention]
---

# Research State Snapshot

- **Theory version:** TH-COMM-2026-0001 v0.1.0, candidate
- **Knowledge-base version:** RP-COMM-2026-0002 v0.1.0
- **Highest-confidence areas:** outcome choice is purpose/context bound; observed
  correctness, critical errors, and assistance must remain distinct
- **Lowest-confidence areas:** task-specific reliability, sensitivity, burden,
  and accessibility feasibility
- **Largest remaining unknown:** whether candidate tasks yield reliable scoring
  without floor or ceiling effects
- **Active research streams:** MS-COMM-2026-0002; user-need evidence for RQ-COMM-001
- **Recently invalidated ideas:** time is a universal procedural-success metric;
  every procedural study requires delayed retention
- **Priority changes:** RQ-COMM-003 advances to Deep Investigation but remains P0;
  RQ-COMM-001 task evidence becomes the next discriminating input

# Executive Summary

For communication intended to support immediate execution of a procedure, the
minimum defensible result is not a composite “quality” score. It is an outcome
vector: **unassisted correct completion** as the primary outcome;
**task-invalidating/critical errors** and **assistance** as guardrails; and
**time, workload, satisfaction, and confidence** as separately reported
diagnostics [EV-COMM-2026-0002, EV-COMM-2026-0007 through 0009;
HY-COMM-2026-0003].

Time is not inherently better when shorter; it becomes a success measure only
when speed is part of the stated task goal and correctness constraints are met
[EV-COMM-2026-0007]. Satisfaction and confidence cannot replace behavioral
observation because subjective and objective measures may agree weakly
[EV-COMM-2026-0009]. A delayed repeat or transfer task is necessary before
claiming durable learning, but not before claiming that instructions supported
immediate performance [EV-COMM-2026-0010].

Confidence is Medium. The desk-research objective is met, but the mission
success criterion is not: reliability, sensitivity, burden, and accessibility
must be tested against an actual task and intended audience. The package is
therefore partial and MS-COMM-2026-0002 remains active.

# Original Objective

Determine which outcome measures can validly, reliably, sensitively, and
ethically evaluate communication for informing and instructing, and specify the
minimum measure set for the first procedural pilot.

## Success Criterion

The first pilot has a justified primary outcome, guardrails, scoring rules,
known validity limits, and evidence that the measures are feasible to collect.

# Scope

## Included

Immediate procedural execution; task success; error severity; assistance;
time/effort; subjective experience; immediate knowledge checks; delayed
retention/transfer boundaries; burden; accessibility; missing-data rules.

## Excluded

Persuasion, trust, long-term behavior change, a universal quality score,
participant experimentation, sample-size estimation for an effectiveness
trial, and validation of a task not yet selected.

## Scope Changes

The active mission covers both informing and instructing. This cycle narrowed
to immediate procedural instruction because it is the first planned pilot and
offers observable criterion outcomes. Inform-only comprehension remains
backlog work.

# Repository Context

RP-COMM-2026-0001 established that effectiveness depends on audience, goal,
task, and context and warned against optimizing preference or readability.
RQ-COMM-003 is the portfolio’s highest-scored unblocked question and gates task
selection and feasibility testing. Existing evidence EV-COMM-2026-0002 and
0003 supports effectiveness, efficiency, and satisfaction as separate
constructs but did not specify a pilot decision rule.

# Current Understanding

The construct is **successful supported execution**, not prose quality,
memorization, speed, or liking. A participant succeeds when the predefined
observable goal state is reached without facilitator assistance and without a
task-invalidating error. Partial completion may diagnose where a variant fails,
but must not silently become success.

The measure architecture is hierarchical:

1. correctness and completeness determine primary success;
2. critical/task-invalidating errors and assistance constrain that success;
3. time is interpreted only among comparable successful attempts and only
   against a stated efficiency goal;
4. workload, satisfaction, and confidence explain experience and adoption but
   do not override incorrect performance;
5. delayed unaided performance or transfer is added only when the claim
   includes durable learning.

# Key Discoveries

1. Validation practice separates unassisted completion, assisted completion,
   errors, difficulties, and time rather than combining them
   [EV-COMM-2026-0007; HY-COMM-2026-0003].
2. Critical errors require prospective task analysis and direct observation;
   participants may not know they erred [EV-COMM-2026-0008].
3. Subjective task ratings can correlate only weakly with observed success, so
   “felt easy” cannot establish effectiveness [EV-COMM-2026-0009].
4. Time is a conditional metric. A slower correct attempt can dominate a fast
   wrong attempt, and time is not relevant when the task has no time objective
   [EV-COMM-2026-0007].
5. Immediate procedural support and durable learning are different claims.
   Delayed/transfer-sensitive assessment gates only the latter
   [EV-COMM-2026-0010].

# Evidence Registry

| ID | Claim/Observation | Source and Method | Supports/Contradicts | Quality and Limits |
|---|---|---|---|---|
| EV-COMM-2026-0002 | Usability is an outcome of use in context | ISO standard | context-bound vector | Official; no method prescription |
| EV-COMM-2026-0003 | Completion, time, errors, satisfaction operationalize usability | NIST guide | multi-measure evaluation | Interactive health context |
| EV-COMM-2026-0007 | Unassisted, assisted, error, and time channels differ | NIST validation protocol | HY-0003 | High-risk domain; reporting guidance |
| EV-COMM-2026-0008 | Critical errors may be unrecognized | FDA guidance | HY-0003 | Medical-device scope; nonbinding |
| EV-COMM-2026-0009 | Subjective/objective agreement may be weak | Empirical pilot | HY-0003 | Clinical interface; repeated observations |
| EV-COMM-2026-0010 | Delayed tests distinguish durable learning | IES synthesis | narrowed HY-0003 | Education scope; transfer interval unresolved |

# Hypothesis Registry

| ID | Statement | Evidence For | Evidence Against | Unknowns | Confidence | Disposition | Implications |
|---|---|---|---|---|---|---|---|
| HY-COMM-2026-0003 | Immediate procedural communication requires a purpose-bound outcome vector | EV-0002, 0003, 0007–0010 | No direct contradiction; no repository feasibility data | reliability, sensitivity, burden, task fit | Medium | provisionally accepted | implement task-specific scoring feasibility before experiment |

# Failed Assumptions

- **Time is always an efficiency outcome.** Rejected. It is relevant only when
  the task makes time meaningful and must be conditioned on correctness
  [EV-COMM-2026-0007].
- **Participants can report whether they made an important error.** Rejected.
  Some critical errors are unrecognized; observation is required
  [EV-COMM-2026-0008].
- **A delayed test is mandatory for every procedural claim.** Narrowed.
  Immediate supported execution can be evaluated immediately; delayed or novel
  transfer is required for learning/retention claims [EV-COMM-2026-0010].
- **Accessibility can be one score.** Rejected as design direction. Access,
  accommodations, task validity, and subgroup failures are constraints and
  stratified observations, not a justified scalar.

# Open Questions

1. Can two independent raters reliably score the selected task and error codes?
2. Which task produces neither floor nor ceiling performance for the audience?
3. What assistance taxonomy is feasible without changing participant behavior?
4. Which accommodations preserve the target construct?
5. Does the intended stakeholder need immediate supported performance,
   retention, transfer, or all three?
6. What difference would be decision-relevant before estimating sample size?

# Recommended Next Research

Run a **small instrument-feasibility study** after RQ-COMM-001 produces three
candidate tasks and a named audience. Two raters should independently score
recorded or replayable synthetic attempts using frozen goal states, critical
errors, and assist codes. Stop and revise if agreement is below the
pre-registered threshold, more than 80% or fewer than 20% of attempts succeed,
or administration exceeds the agreed burden.

# Research Backlog

1. Inform-only comprehension and confidence-calibration measures.
2. Assistance taxonomy and rater-training protocol.
3. Accessible test administration and construct-preserving accommodations.
4. Decision-relevant effect threshold and analysis plan.
5. Delayed retention/transfer module if stakeholder need includes learning.
6. Cross-task replication of the outcome vector.

# Suggested Specialized Research Agents

A psychometrician should review inter-rater reliability and missing-data rules;
an accessibility researcher should review accommodations and exclusion risk;
and a human-factors researcher should review task/error decomposition. Each
should receive the selected task, audience, scoring sheet, and this REP.

# Parallel Research Opportunities

RQ-COMM-001 stakeholder/task evidence and a draft accessibility/data-flow
review can proceed in parallel. Reliability, burden, and floor/ceiling testing
must wait for the task candidates. Effectiveness sample-size planning must wait
for feasibility and a decision-relevant difference.

# Risks

- Criterion scoring may encode evaluator assumptions.
- A binary primary outcome may be insensitive; partial credit may be unreliable.
- Aggregate success may hide an access barrier or subgroup harm.
- Facilitator assists can change downstream observations.
- Time pressure can reward unsafe shortcuts.
- Adding every diagnostic can make the pilot burdensome and underpowered.
- Evidence is concentrated in health/HCI and education rather than standalone
  technical documentation.

# Cross-Discipline Opportunities

Psychometrics contributes inter-rater reliability and construct validity;
human factors contributes task/error analysis; education separates performance
from retention/transfer; accessibility research tests construct-preserving
accommodations; decision science defines meaningful effect thresholds.

# Knowledge Relationships

EV-COMM-2026-0002, 0003, and 0007–0010 support
HY-COMM-2026-0003. HY-COMM-2026-0003 refines the measurement mechanism within
TH-COMM-2026-0001 and supplies the scoring architecture for RQ-COMM-006.
RQ-COMM-001 must supply the task and audience before HY-0003 can be validated.
RQ-COMM-004 constrains data collection and accessibility.

# Theory Impact Assessment

- **Affected theory records:** TH-COMM-2026-0001 remains candidate, Medium.
- **Affected engineering principles:** candidate rule to specify purpose,
  observable goal state, critical errors, assistance, and decision rule before
  authoring variants.
- **New principle candidates:** never trade correctness/critical-error
  guardrails for time or preference; match retention measures to the claim.
- **Deprecated principles:** none accepted; universal time-as-better is rejected.
- **Confidence changes:** procedural measure architecture Low → Medium.
- **Predictions created:** subjective/objective divergence; time reversals when
  correctness differs; task-dependent floor/ceiling effects.
- **Predictions invalidated:** delayed assessment is universally required.
- **Required theory-registry updates:** add HY-COMM-2026-0003 and evidence
  relationships to TH-COMM-2026-0001; do not raise theory confidence yet.

# Research Quality Metrics

| Metric | Value | Method/Limit |
|---|---:|---|
| Primary sources | 4 | ISO, two NIST/FDA official sources, one empirical study; standards/guidance counted as primary authority |
| Independent sources | 4 | Four separately governed sources added; IES synthesis overlaps underlying literature only |
| Counterexamples reviewed | 3 | time irrelevance, unrecognized errors, weak subjective/objective agreement |
| Competing viewpoints reviewed | 4 | scalar score, performance vector, satisfaction-first, learning-first |
| Hypotheses tested | 1 | desk assessment; no participant validation |
| Failed hypotheses | 0 | three assumptions revised, not preregistered hypotheses |
| Research completeness | 0.65 | judgment against mission deliverables; feasibility and informing remain |
| Confidence gain | Low → Medium | qualitative judgment; no calibrated probability |
| Open questions reduced | 2 | primary hierarchy and delayed-test boundary resolved provisionally |

# Research Debt

## Missing Evidence

Standalone technical-documentation studies, task-specific reliability, burden,
accessibility feasibility, and representative-user evidence.

## Missing Experiments

Rater agreement, floor/ceiling pilot, assist-coding feasibility, and delayed
transfer only if the stakeholder requires learning.

## Missing Disciplines

Direct review by psychometrics and accessibility specialists.

## Weak Areas

Missing-data mechanisms, partial-credit sensitivity, confidence calibration,
and quantitative decision thresholds.

## Replication Needed

Replicate the measure vector across at least two materially different tasks
before treating it as a general procedural architecture.

## Tool Limitations

This was a targeted web search, not a database systematic review. Full ISO text
was unavailable. No citation-risk-of-bias tool or participant system was used.

## Assumptions Awaiting Evidence

A synthetic task can represent a real user need; replayable attempts can
support independent scoring; accommodations will not alter the target
construct; the task will avoid floor/ceiling effects.

# Repository Updates

Added EV-COMM-2026-0007 through 0010, HY-COMM-2026-0003,
JR-COMM-2026-0003, and this partial REP. Updated the portfolio queue, roadmap,
mission state, theory relationships, current context, and handoff. Registries
are rebuilt after file edits.

# Website Updates

The research-publisher build will include the new records after validation. No
production deployment was performed in this research cycle.

# AI Consumption Notes

Reliable claim: for immediate procedural execution, use unassisted correct
completion as primary and report critical errors and assistance separately.
Do not state that the instrument is validated, that time is always beneficial,
that satisfaction is irrelevant, or that delayed testing is always required.
Retrieval terms: outcome vector, procedural measurement, critical error,
assistance, subjective-objective divergence.

# Handoff Instructions

1. Obtain three candidate tasks and one named audience through RQ-COMM-001.
2. For each task, write observable final states, mandatory steps, invalidating
   errors, allowed resources, timeout logic, and assist codes.
3. Review the task/data flow under RQ-COMM-004.
4. Pre-register the feasibility thresholds and missing-data handling below.
5. Run the small scoring-feasibility study; update this REP and HY-0003.
6. Only then activate MS-COMM-2026-0001.
7. Run `./ros registry build`, `./ros validate`,
   `npm run research:validate`, and `npm run research:build`.

# Research Journal

- **JR-COMM-2026-0003:** portfolio selection, hypothesis definition, evidence
  and contradiction search, revisions, and stop decision.

# Appendix

## Pilot scoring specification v0.1

| Field | Operational rule |
|---|---|
| Primary outcome | `1` only when the observable goal state is complete, correct, unassisted, and free of a task-invalidating error; otherwise `0` |
| Step completion | Predefined checklist for diagnosis; never silently substituted for primary success |
| Critical/task-invalidating error | Predefined action/omission that makes the output wrong, unusable, or unsafe in the task analogue; record type and point of occurrence |
| Assistance | Count and code facilitator intervention; any procedural hint makes primary outcome `0`, but session may continue |
| Time | Start at instruction availability; stop at declared completion or timeout; analyze among successful attempts unless the preregistered estimand says otherwise |
| Workload/satisfaction | Short post-task diagnostic collected after behavioral outcomes; report separately |
| Confidence | Post-task confidence linked to correctness to assess calibration; never a success proxy |
| Retention/transfer | Omit for immediate-support claim; add delayed no-document repeat or novel task before learning claim |
| Accessibility | Record access barriers, accommodations, invalid administrations, and subgroup patterns; do not collapse to a score |
| Missing/invalid | Preserve reason; never recode withdrawal, technical failure, or access barrier as task failure without a predefined estimand |

## Example

A participant produces the correct final artifact after one facilitator hint:
primary `0`, assisted completion `1`, assists `1`, critical errors `0`, time
retained as diagnostic. A fast artifact with a wrong required value: primary
`0`, invalidating error `1`; speed cannot reverse the result.

## Feasibility thresholds to preregister

- independent-rater agreement threshold and adjudication process;
- acceptable success band, proposed initially as 20%–80%;
- maximum administration and scoring burden;
- timeout grounded in the task rather than convenience;
- stop on any unmitigated access barrier or task/data harm concern.

# Completion Checklist

- [x] Metadata and Research State Snapshot are complete.
- [x] Every mandatory section is present.
- [x] Important claims trace to evidence, hypothesis, and theory IDs.
- [x] Counterexamples and revised assumptions are preserved.
- [x] Theory impact and registry changes are explicit.
- [x] Quality metrics state methods and limits.
- [x] Research debt is prioritized.
- [x] Partial status has executable recovery instructions.
- [x] Repository and website updates are accurate.
- [x] Handoff can continue without conversation history.
- [ ] Task-specific reliability, sensitivity, burden, and accessibility are
  validated; blocked on RQ-COMM-001 candidate tasks.
- [ ] Another capable agent has independently tested reconstruction.

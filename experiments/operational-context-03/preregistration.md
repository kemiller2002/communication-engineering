# Operational Context Experiment 03: Defect Detection in a Fluent Decision Memo

Status: Pre-registered before reviews
Date: 2026-09-20
Branch: `research/operational-context-v0.1`

## Research question

Does the Communication Engineering operational context improve detection of material communication defects in a fluent executive memo compared with an ordinary review request?

## Why this test

Experiments 01 and 02 produced null first-draft correctness results when the task/source brief was already strong.

This experiment tests a different proposed value:

> Communication Engineering may be more useful for identifying hidden semantic, authority, uncertainty, and outcome defects than for drafting already well-specified material.

## Fixed source facts

Use the same source facts as Operational Context Experiment 02.

The authoritative facts are:

1. Internal artifacts are currently distributed primarily through private npm packages.
2. Eighteen repositories consume them.
3. Seven artifact categories exist; five are not JavaScript/TypeScript packages.
4. Four release incidents in the last 90 days came from scripts converting non-npm artifacts into npm-compatible packages.
5. No release incident in that period came from npm client authentication.
6. OCI pilot: three repositories, three artifact types (.NET tool, WASM bundle, documentation).
7. Pilot: 60 publish/restore runs, no observed failures.
8. Median publish: OCI 48s, npm path 35s.
9. Median restore: OCI 43s, npm path 28s.
10. Security found both paths acceptable for pilot requirements.
11. Operations prefers one mechanism if practical because it reduces custom release scripting.
12. JavaScript teams prefer npm for native package-manager integration.
13. Publisher migration estimate: two engineer-days.
14. Full 18-consumer migration estimate: nine additional engineer-days.
15. OCI pilot did not test disaster recovery.
16. Three repositories are too small a sample to establish long-term failure rates.
17. Proposed decision: OCI for new non-JS/TS artifacts; keep existing JS/TS packages on npm; do not migrate all 18 consumers now; run hybrid for 90 days; reassess.
18. VP Engineering owns approval/rejection.

No cost difference is known.
No migration deadline exists.

## Flawed memo under review

> **Recommendation: standardize all internal artifacts on OCI this quarter.**
>
> Four npm-related release incidents in the last 90 days show that npm is now the main reliability risk in our artifact pipeline. By contrast, the OCI pilot completed 60 publish and restore runs without a failure, which demonstrates that OCI is the more reliable long-term platform.
>
> Security approved OCI, and Operations has approved consolidation on one mechanism. Standardizing should reduce our infrastructure costs as well as release-script maintenance.
>
> The migration is small: the publisher work is estimated at two engineer-days, so we should move all 18 repositories immediately. OCI also gives us the faster artifact path for future growth.
>
> Disaster recovery can be validated after rollout. The JavaScript teams can move with everyone else because standardization matters more than package-manager preference.
>
> Unless there are objections, we should begin before the end of the quarter.

## Injected defects

The experiment preregisters these twelve defects.

D1. **Incident attribution distortion:** calls the four incidents "npm-related" / makes npm the reliability cause rather than conversion scripts for non-npm artifacts.
D2. **Long-term reliability overclaim:** 60 failure-free pilot runs are said to demonstrate long-term OCI reliability.
D3. **Security authority inflation:** "Security approved OCI" broadens "both paths acceptable for pilot requirements."
D4. **Operations authority inflation:** Operations preference is turned into approval/decision authority.
D5. **Invented cost benefit:** claims infrastructure cost reduction when no cost difference is known.
D6. **Migration effort compression:** mentions two publisher days but hides nine additional engineer-days for all consumers.
D7. **Immediate full migration:** replaces the supplied 90-day hybrid/reassess proposal with all-18 immediate migration.
D8. **Performance inversion:** says OCI is faster despite slower measured publish and restore medians.
D9. **DR risk deferred improperly:** untested disaster recovery is postponed until after broad rollout rather than retained as unresolved evidence.
D10. **JavaScript-team tradeoff dismissed:** removes the supplied native npm integration preference rather than treating it as a material tradeoff.
D11. **Invented deadline / false urgency:** "this quarter" is introduced despite no migration deadline.
D12. **Decision-process ambiguity:** "unless there are objections" avoids the explicit VP approve/reject decision and blurs authority.

## Condition A — ordinary review

Instruction:

> Review this memo against the fixed source facts. Identify material problems affecting accuracy, decision usefulness, evidence, or risk. Then provide a corrected concise memo.

No Communication Engineering context is supplied.

## Condition B — Communication Engineering review

Same task and source facts, plus:

- all five operational context files;
- explicit instruction to apply the Communication Engineering decision checklist and anti-patterns.

Communication contract:

- Purpose: support a VP Engineering decision.
- Audience: VP decision owner, Staff Architect reviewer.
- Proof obligation: recommendation must remain traceable to incident, pilot, performance, security, effort, and uncertainty facts.
- Use mode: scan first, audit second.
- Stakes: release reliability and engineering effort.
- Uncertainty: long-term OCI reliability, disaster recovery, and cost difference unresolved.
- Autonomy/authority: VP approves; preferences/reviews do not become authority.

## First-pass outputs

Each condition must produce:

1. a numbered defect list;
2. a corrected memo.

Freeze before scoring-informed repair.

## Primary measurement: defect-detection recall

For each D1-D12, score:
- detected;
- partially detected;
- missed.

For the primary metric:
- detected = 1
- partial = 0.5
- missed = 0

Recall = detected points / 12.

## False positives

A false positive is a claimed factual/semantic defect that is not actually contradicted or unsupported by the fixed facts.

Style preferences are not false positives if clearly labelled as optional style choices rather than defects.

Record:
- false-positive count;
- false-positive descriptions.

## Corrected-memo guardrails

The revised memo must:

1. preserve the proposed 90-day hybrid decision;
2. name slower OCI pilot performance;
3. retain long-term reliability/DR uncertainty;
4. avoid cost claims;
5. retain JS-team npm preference;
6. retain Operations preference without granting decision authority;
7. retain security scope;
8. show both 2-day and 9-day effort facts;
9. ask VP to approve/reject;
10. remain <= 300 words.

## Decision rule

Context treatment is promising if:

- B defect-recall exceeds A by at least 1.0 defect-equivalent (8.3 percentage points);
- B has no more false positives than A;
- B corrected memo passes all guardrails;
- B does not create materially greater review verbosity without additional detected defects.

A tie is a null result.

## Limitations

- Same-model contamination remains material.
- Injected defects are known to the experiment designer and may be easier than naturally occurring defects.
- Review quality is not reader outcome evidence.
- The fixed facts are unusually complete.

## Packaging gate

This experiment can support package work only if it demonstrates incremental diagnostic value or combines with later independent-agent evidence.

A third null result should shift effort away from packaging and toward independent-model/human validation or narrower tooling.

# Operational Context Experiment 02: Executive Decision Memo

Status: Pre-registered before condition outputs
Date: 2026-09-20
Branch: `research/operational-context-v0.1`

## Research question

Does the evidence-bounded Communication Engineering operational context improve first-pass architecture for a concise executive decision memo when the source facts contain competing considerations and meaningful uncertainty but do not prescribe the document structure?

## Hypothesis

Compared with an ordinary drafting request, the Communication Engineering treatment will be more likely to:

- put the requested decision and recommendation in the primary path;
- expose the material tradeoff rather than flatten it;
- distinguish observed pilot evidence from unresolved long-term uncertainty;
- preserve auditability without burying the executive path;
- avoid overstating evidence.

The context may fail if it creates excessive qualification, length, or ceremony.

A null or negative result is acceptable.

## Work unit

Write a concise executive decision memo for a VP of Engineering and a Staff Architect.

The decision owner is the VP of Engineering.

The memo should fit on approximately one screen and support both:
- quick executive decision;
- technical auditability.

## Fixed source facts

Use only these facts.

1. The organization currently distributes internal build artifacts primarily through private npm packages.
2. Eighteen repositories consume those packages.
3. The organization now produces seven artifact categories; five are not JavaScript or TypeScript packages.
4. During the last 90 days, four release incidents were traced to scripts that converted non-npm artifacts into npm-compatible packages.
5. During the same period, no release incident was traced to npm client authentication.
6. An OCI-registry pilot covered three repositories and three artifact types: a .NET tool, a WASM bundle, and a documentation artifact.
7. The OCI pilot completed 60 publish/restore runs with no observed failures.
8. Median pilot publish time was 48 seconds with OCI versus 35 seconds in the current npm path.
9. Median pilot restore time was 43 seconds with OCI versus 28 seconds in the current npm path.
10. Security review found both the current private npm path and the OCI path acceptable for the pilot's requirements.
11. Operations prefers one artifact mechanism if practical because it reduces custom release scripting.
12. JavaScript teams prefer npm for native package-manager integration.
13. Migrating the publisher path is estimated at two engineer-days.
14. Updating all 18 consuming repositories at once is estimated at an additional nine engineer-days.
15. The OCI pilot did not test disaster recovery.
16. Three repositories are too small a sample to establish long-term failure rates.
17. The proposed decision is:
    - use OCI for new non-JavaScript/TypeScript internal artifacts;
    - keep existing JavaScript/TypeScript packages on npm;
    - do not migrate all 18 consumers now;
    - run this hybrid policy for 90 days;
    - then reassess whether broader consolidation is justified.
18. The VP needs to approve or reject this proposed 90-day hybrid policy.

No cost difference is known.
No long-term reliability conclusion is known.
No migration deadline exists.

Do not invent either.

## Condition A — ordinary task request

Instruction:

> Write a concise executive decision memo for the VP of Engineering and Staff Architect recommending the proposed 90-day hybrid artifact policy from the fixed facts. Make it useful for a quick decision while retaining enough technical detail to audit the recommendation.

No Communication Engineering context is supplied.

## Condition B — Communication Engineering

Supply the same fixed facts plus:

- `agent-context/COMMUNICATION-FOUNDATIONS.md`
- `agent-context/COMMUNICATION-DECISION-CHECKLIST.md`
- `agent-context/PURPOSE-OUTCOME-MATRIX.md`
- `agent-context/COMMUNICATION-ANTI-PATTERNS.md`
- `agent-context/RESEARCH-STATUS.md`

Also supply this communication contract:

- Purpose: support a decision.
- Audience: VP Engineering as decision owner; Staff Architect as technical reviewer.
- Starting state: both know current npm use but need a bounded decision on the proposed hybrid policy.
- Audience task: approve or reject the 90-day hybrid policy.
- Resistance/tension: operations values one mechanism; JavaScript teams value native npm integration; OCI pilot was reliable in a small sample but slower in measured publish/restore time.
- Target state: decision owner can identify recommendation, evidence, tradeoffs, uncertainty, and the reversible next step.
- Medium/use mode: one-screen memo scanned first, audited second.
- Proof obligation: recommendation must be traceable to the supplied incident, pilot, performance, migration-effort, security, and uncertainty facts.
- Stakes: release reliability, engineering effort, and future artifact architecture.
- Uncertainty: long-term OCI reliability and disaster recovery are untested; no cost difference is known.
- Power relation: VP owns the decision; Staff Architect reviews but does not approve.
- Accessibility: text-first; no meaning may depend on color.

## First-pass freeze

Both outputs must be frozen before scoring-informed repair.

Do not revise A after producing B.

Do not revise B after scoring until both first-pass artifacts and scores are stored.

## Pre-registered rubric

Each item is pass/fail.

### Decision usability

1. **Decision explicit:** the memo states exactly what the VP is being asked to approve/reject.
2. **Recommendation upfront:** the proposed hybrid policy is discoverable before detailed evidence.
3. **Reversibility visible:** the 90-day reassessment is explicit.
4. **Decision authority correct:** VP is treated as approver; Staff Architect is not presented as co-owner.

### Evidence and tradeoffs

5. **Incident evidence scoped correctly:** four conversion-script incidents in 90 days; no claim that npm itself failed.
6. **Pilot evidence scoped correctly:** 60 runs / 3 repositories / 3 artifact types are represented without inflating sample size.
7. **Performance tradeoff visible:** OCI was slower in both supplied median measurements.
8. **Security result visible:** both approaches acceptable for pilot requirements.
9. **Operations preference visible:** one mechanism reduces custom release scripting.
10. **JavaScript-team preference visible:** npm retains native integration value.
11. **Migration effort visible:** two engineer-days publisher work and nine engineer-days for full consumer migration are not collapsed or omitted.

### Uncertainty / epistemic integrity

12. **No long-term reliability claim:** memo does not infer long-term OCI failure rate from the pilot.
13. **Disaster-recovery gap visible.**
14. **No cost claim:** memo does not invent savings, parity, or expense.
15. **No deadline claim:** memo does not invent urgency or a migration deadline.
16. **Recommendation/evidence separation:** recommendation is presented as a judgment from the evidence, not as a fact proved by the pilot.

### Architecture

17. **Executive path scannable:** recommendation, reason, and requested decision can be found without reading every technical detail.
18. **Audit path available:** key quantitative evidence remains inspectable.
19. **Material downside not buried:** slower OCI performance and uncertainty are not relegated to vague caveat language.
20. **One-screen discipline:** target <= 300 words unless a specific rubric requirement justifies excess.

### Guardrails

21. **No invented facts.**
22. **Stable terminology:** npm, OCI, hybrid policy, pilot, and reassessment are used consistently.
23. **No borrowed authority:** security review and operations preference are reported within their actual scope.

## Primary outcome

Primary process outcome:

**material first-pass defects = failed items 1–20.**

Items 21–23 are guardrails.

Do not compute a universal communication-quality score.

## Secondary measures

Record:
- word count;
- headings;
- bullets/table rows;
- number of quantitative facts retained;
- explicit uncertainty statements;
- context/token counts if available;
- repair concepts required.

## Decision rule

The context treatment is promising on this task if:

- B has fewer material first-pass defects than A;
- B introduces no guardrail failure;
- B stays within 300 words;
- any additional length is tied to a concrete rubric gain.

If A and B both pass all material items, treat as null.

If B is longer with no defect reduction, simplify the context or use it selectively rather than universally.

## Validity limitations

- Same-model execution is contaminated.
- Rubric measures document properties, not actual executive decision quality.
- The proposed decision is supplied rather than independently derived.
- One memo cannot establish general communication-method effectiveness.

## Next step

If B shows a meaningful delta, repeat on an explanatory communication where the audience needs a mental model rather than a decision.

If null, investigate whether the context's value lies mainly in underspecified tasks or review rather than first-draft generation.

Do not package based on this experiment alone.

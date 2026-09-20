# Communication Engineering Modernization Baseline

Status: Working modernization assessment
Date: 2026-09-20
Branch: `research/modernization-baseline`
Production authority: none

## Executive conclusion

Communication Engineering should be modernized in two separate dimensions:

1. **Execution/tooling substrate** — this is clearly stale and can be upgraded now.
2. **Operational communication guidance** — some foundations are mature enough to package as bounded guidance, while strategy-selection claims remain provisional and should retain evidence/confidence labels.

The repository should not simply copy Visual Engineering's implementation.

The two disciplines have different evidence maturity:

- Visual Engineering now has an operational methodology backed by multiple application validations.
- Communication Engineering has a strong research corpus and useful candidate principles, but its first participant experiment has not run and its disciplinary boundary is intentionally still unclaimed.

The correct target is therefore:

> **modern lifecycle tooling + evidence-bounded communication context**

not:

> **declare a finished Communication Engineering methodology**

---

# 1. Current repository state

## Execution substrate

Current repository installation:

- ROS package: `@kemiller2002/repository-operating-system`
- ROS version: `1.0.0`
- legacy installation manifest: `.ros/installation.json`
- profile: `greenfield`

Current ROS stable release is in the 3.x lifecycle generation and explicitly supports adoption of legacy `.ros/installation.json` repositories through a declared `0 -> 1` migration.

The repository is therefore a supported legacy-upgrade case rather than a special migration.

### Important upgrade guarantee

Current ROS declares that legacy adoption:

- calculates and validates the full plan before writes;
- preserves user-owned/shared/generated files;
- leaves the legacy snapshot in place;
- blocks rather than overwrites modified tool-owned files;
- adds the new `.echelon/ros.json` manifest.

That makes ROS modernization a high-confidence first step.

## Research Publisher

The repository currently depends on Research Publisher through a GitHub source reference and exposes only:

- `research:build`
- `research:validate`

Current Research Publisher provides a lifecycle interface:

- init
- status
- verify
- upgrade
- doctor

and adds a committed installation manifest under `.echelon/`.

It can adopt pre-manifest repositories without replacing their corpus or configuration.

Communication Engineering should move to the released `@echelon-foundry/research-publisher` package and its lifecycle contract.

## Published Communication Engineering package

`@echelon-foundry/communication-engineering` 0.1.0 exists publicly, but its published description/readme is effectively the old repository README and advertises the ROS 1.0 greenfield pilot.

It does not currently present itself as a mature lifecycle capability comparable to:

- ROS;
- SDE;
- Visual Engineering;
- Research Publisher;
- Limen.

The package therefore needs an explicit product decision:

### Recommended

Retain the existing package name and evolve it into the lifecycle/distribution surface for the evidence-bounded Communication Engineering operational context.

Do not create another package unless a real semantic boundary requires one.

---

# 2. Current research maturity

## Candidate theory

`TH-COMM-2026-0001` states a conditional-fit model:

Communication effectiveness depends on specified:

- audience;
- goal;
- task;
- representation/delivery strategy;
- context;

subject to:

- accuracy;
- ethics;
- accessibility.

Confidence remains Medium.

No broad discipline claim has been validated.

## Outcome architecture

The current research rejects a universal communication-quality score.

Purpose-specific primary outcomes currently include:

| Purpose | Candidate primary outcome |
|---|---|
| Inform | accurate comprehension |
| Instruct | unassisted correct task completion |
| Teach | delayed transfer |
| Support a decision | decision quality relative to stated evidence/values |
| Ethical persuasion | informed autonomous change |
| Coordinate | shared state and correct next actions |
| Build warranted trust | calibration to actual reliability |

This is one of the strongest operational findings in the repository.

## Writer/function research

The comparative-writing stream supports a bounded principle:

> Choose communication functions, not famous voices.

Useful functions currently include:

- familiar case -> causal mapping -> evidence -> objections -> synthesis;
- primitives -> ordered transformation -> warrants -> closure;
- narrow question -> governing warrant -> effect -> action;
- problem experience -> compact method;
- stable terminology -> layered reference -> normative rules;
- linear overview + reference layer;
- bounded literary functions such as symbolic convergence, omission, countervoice, conceptual reversal, witness, generative momentum, and civic observation.

These are **candidate strategy components**, not universal style prescriptions.

## Cultural and authority boundaries

The later research substantially strengthens the safety boundary:

- do not map identity to style;
- preserve nation/community specificity;
- record translation and edition uncertainty;
- distinguish transferable communication function from situated authority;
- do not abstract sacred/restricted/community-governed material merely because a rhetorical pattern is interesting.

These belong in any operational context from the beginning.

---

# 3. Operational guidance readiness

## Ready for bounded operational guidance

The following ideas have enough convergent support to be included as foundational context, with provenance and bounded language.

### CE-FND-001 — Declare the communication contract

Before selecting form/style, identify:

- purpose;
- audience starting state;
- relevant prior knowledge;
- resistance or likely misunderstanding;
- target state;
- medium/use mode;
- proof obligation;
- stakes;
- uncertainty;
- power relation;
- accessibility constraints.

If important inputs are unknown, preserve that uncertainty instead of inventing an audience.

### CE-FND-002 — Optimize for the intended outcome, not a generic quality score

Select primary outcomes from communication purpose.

Do not use as universal success proxies:

- readability;
- liking;
- brevity;
- engagement;
- memorability;
- trust;
- speed.

### CE-FND-003 — Truth and uncertainty constrain communication

A communication technique does not become acceptable because it is effective.

Preserve distinctions among:

- evidence;
- claim;
- inference;
- uncertainty;
- authority.

Fluency, analogy, confidence, prestige, and tone are not evidence.

### CE-FND-004 — Architecture precedes surface style

Choose information/order/reasoning architecture based on function before optimizing voice or sentence-level style.

### CE-FND-005 — Audience and context are semantic inputs

Audience is not only demographic description.

Relevant variables may include:

- expertise;
- goals;
- task;
- language;
- accessibility needs;
- time pressure;
- power relation;
- decision authority;
- prior beliefs/knowledge.

Only use variables that have a defensible reason to affect the communication decision.

### CE-FND-006 — Proof obligation changes structure

A tutorial, legal decision, scientific explanation, operational procedure, executive brief, and literary experience do not owe the reader the same kind of proof or closure.

### CE-FND-007 — Preserve autonomy in influential communication

Do not optimize persuasion by hiding:

- material alternatives;
- uncertainty;
- consequences;
- conflicts of interest;
- power asymmetry.

### CE-FND-008 — Accessibility is a constraint, not a secondary score

Aggregate effectiveness does not justify making a communication unusable or misleading for affected accessibility groups.

### CE-FND-009 — Transfer functions, not identities

Do not imitate a person's/culture's identity or authority.

A reusable communication mechanism must be separable from:

- lived identity;
- community authority;
- sacred/restricted context;
- translator-specific surface form;
- institutional authority the communicator does not possess.

### CE-FND-010 — Measure objective and subjective outcomes separately

Preference, confidence, workload, satisfaction, comprehension, task success, and errors can diverge.

Do not collapse them into one score merely for convenience.

---

# 4. Provisional guidance that should remain visibly research-bounded

These are useful enough to expose for reference but not yet strong enough to present as canonical engineering rules.

## Writer-to-purpose mappings

Examples such as Darwin/Euclid/RFC/literary-function selection should remain:

- examples;
- hypotheses;
- retrieval aids.

They should not become deterministic selection rules until audience studies support them.

## Explanatory progression rubric

The current rubric has internal recode evidence but still needs independent second-rater validation.

Do not yet present its categories as a validated universal taxonomy.

## Literary-function transfer

The inference-contract idea is promising but not behaviorally validated.

It should remain a research pattern with explicit cultural/authority gates.

## AI strategy selector

Not ready.

Current portfolio correctly blocks this behind:

- validated inputs;
- functional taxonomy;
- cross-context evidence;
- ethical constraints;
- abstention/fallback rules.

Do not build an optimizer yet.

## Disciplinary claim

Do not claim Communication Engineering is a distinct validated discipline.

The repository itself intentionally requires comparative boundary research after empirical cycles.

---

# 5. Proposed operational context

If the package is modernized, the first operational payload should be small.

Recommended human-maintained sources:

```
agent-context/
  COMMUNICATION-FOUNDATIONS.md
  COMMUNICATION-DECISION-CHECKLIST.md
  COMMUNICATION-ANTI-PATTERNS.md
  PURPOSE-OUTCOME-MATRIX.md
  RESEARCH-STATUS.md
```

## COMMUNICATION-FOUNDATIONS.md

Contains only high-confidence/bounded principles such as:

- communication contract;
- conditional fit;
- purpose-specific outcomes;
- truth/uncertainty;
- proof obligation;
- audience/context;
- accessibility;
- autonomy;
- authority/situated-authority.

## COMMUNICATION-DECISION-CHECKLIST.md

Questions before drafting:

- Who is the audience for this exact communication?
- What do they already know?
- What are they trying to do?
- What should change after communication?
- What evidence/proof is owed?
- What could be misunderstood?
- What uncertainty must remain visible?
- What action, if any, should become possible?
- What outcome would show the communication worked?
- Which harms or accessibility failures constrain the design?

During drafting:

- Does structure follow the communication function?
- Is important evidence distinguishable from rhetoric?
- Are critical qualifications discoverable without overwhelming the primary path?
- Does the communication borrow authority it has not earned?
- Are alternatives/consequences visible when autonomy matters?
- Is a stylistic device doing work or merely imitating a voice?

Verification:

- task/comprehension check appropriate to purpose;
- critical-error review;
- accessibility review;
- uncertainty/qualification check;
- independent reader/rater where consequence warrants it.

## COMMUNICATION-ANTI-PATTERNS.md

Initial evidence-backed candidates:

- Surface mimicry
- Authority laundering
- Analogy inflation
- Compression amputation
- Qualification fog
- Specification dumping
- Hybrid maximalism
- Universal plain-language assumption
- Readability-as-comprehension
- Preference-as-effectiveness
- Engagement-as-persuasion-success
- Identity-as-style
- Translation-as-transparent-transfer
- Single-score communication quality

## PURPOSE-OUTCOME-MATRIX.md

Operational projection of the current purpose-to-outcome research.

It should clearly label:

- supported;
- provisional;
- unvalidated;

rather than hide maturity.

## RESEARCH-STATUS.md

A compact status file explaining:

- what has empirical reader evidence;
- what has only textual/corpus evidence;
- what remains hypothesis;
- what is explicitly prohibited from being presented as validated.

This is important because Communication Engineering's package will initially distribute a mixture of evidence maturity.

---

# 6. Package modernization candidate

The existing package name can follow the lifecycle pattern proven by Visual Engineering.

Recommended target:

`@echelon-foundry/communication-engineering`

Commands:

- `init`
- `status`
- `verify`
- `upgrade`
- `doctor`

Potential installed paths:

```
.communication-engineering/
  AGENT-INSTRUCTIONS.md
  COMMUNICATION-FOUNDATIONS.md
  COMMUNICATION-DECISION-CHECKLIST.md
  COMMUNICATION-ANTI-PATTERNS.md
  PURPOSE-OUTCOME-MATRIX.md
  RESEARCH-STATUS.md
  sources.json
  context.json

.echelon/communication-engineering.json
```

Shared integration:

- managed block in `AGENTS.md`;
- optional `.gitignore` entry if the context is generated/installed rather than committed.

## Implementation preference

Match the Echelon lifecycle pattern:

- F# owns lifecycle decisions;
- Node is only the npm bootstrap;
- explicit ownership model;
- deterministic planning;
- dry-run/check;
- no postinstall mutation;
- additive/non-destructive upgrade;
- packed-artifact tests.

Do not copy Visual Engineering code blindly.

Reuse architecture and lifecycle conventions where they are truly common.

---

# 7. Required modernization sequence

## Phase A — Preserve baseline

Before any migration:

- create a checkpoint branch/tag if the execution environment supports it;
- run current ROS registry/check/validate;
- run current research validate/build;
- record current generated registries;
- record current package/site behavior.

## Phase B — Upgrade ROS

Use the current ROS lifecycle tool:

1. status/doctor against legacy install;
2. `upgrade --dry-run --json`;
3. inspect preserved/conflict lists;
4. apply only if no unexplained destructive changes;
5. verify;
6. registry build/check;
7. research validate/build.

No research file should be rewritten merely to satisfy the upgrade.

## Phase C — Upgrade Research Publisher

Move from GitHub dependency to released package.

Run:

- status;
- upgrade/init dry-run;
- inspect script/config preservation;
- apply;
- verify/doctor;
- inventory/validate/build.

Keep the existing site configuration as repository-owned content.

## Phase D — Rebaseline governance

After ROS upgrade:

- update README/current-state descriptions;
- update handoff;
- ensure active missions point at current governance paths;
- do not retroactively rewrite immutable research findings.

## Phase E — Build operational context

Create the five-file initial context from supported/bounded findings only.

Each claim should carry enough source linkage to distinguish:

- supported foundation;
- provisional strategy;
- open research.

## Phase F — Build lifecycle package

Evolve the existing package rather than create a second competing distribution channel.

## Phase G — Validate on real communications

Use at least these different communication tasks:

1. procedural technical instruction;
2. explanatory technical document;
3. executive/decision memo;
4. agent handoff/instructions.

Measure according to purpose rather than one global score.

Do not promote provisional writer-selection rules based only on subjective preference.

---

# 8. Research work that should continue in parallel

Tooling modernization need not wait for these, but methodology promotion should.

## Independent rubric validation

Run the already-planned second-rater check on explanatory progression.

## Named-audience procedural pilot

Complete:

- RQ-COMM-001
- RQ-COMM-003
- RQ-COMM-004

then run feasibility before the controlled experiment.

## Strategy architecture comparison

After rubric reliability is established, preregister one comparison where:

- content is controlled as much as practical;
- architecture differs;
- outcome is comprehension/transfer/task performance as appropriate;
- confidence and accessibility are guardrails;
- liking/readability are secondary.

## Communication contract experiment

A particularly valuable experiment is whether explicitly supplying the communication contract improves first-pass communication quality versus ordinary task instructions.

This could become Communication Engineering's analogue to Visual Engineering's obligation experiments.

Candidate conditions:

A. normal task request;
B. task request + communication contract fields;
C. generated contract from authoritative task/audience context.

Measure:
- task success/comprehension;
- critical omissions;
- unsupported inference;
- rework;
- reader/rater agreement;
- context/token cost.

This would directly test whether the strongest current theory produces operational value.

---

# 9. Immediate recommendation

Proceed in this order:

1. modernize ROS;
2. modernize Research Publisher;
3. preserve/revalidate the research corpus;
4. create the small evidence-bounded operational context;
5. test the context before converting the npm package into a full lifecycle tool;
6. continue the participant/rater research in parallel.

The key architectural principle is:

> **Communication Engineering should distribute decision support proportional to evidence maturity, not convert every interesting research result into a rule.**

That is the central safeguard against turning a strong research corpus into premature doctrine.

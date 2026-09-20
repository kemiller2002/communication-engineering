# Communication Engineering current state

## Repository status

Modernized to Repository Operating System 3.0.3 on 2026-09-20.

Research Publisher is installed through the released `@echelon-foundry/research-publisher@0.1.0` lifecycle package.

The legacy research corpus was preserved during modernization and verified by a protected SHA-256 inventory.

## Observed facts

- `RP-COMM-2026-0001` is in review with six evidence records, two hypotheses, and candidate theory `TH-COMM-2026-0001`.
- Partial `RP-COMM-2026-0002` adds four evidence records and `HY-COMM-2026-0003`, advancing RQ-COMM-003 to Deep Investigation.
- For immediate procedural execution, the provisional outcome vector uses unassisted correct completion as primary, critical errors and assistance as guardrails, and time/satisfaction/workload as separate diagnostics.
- A procedural-documentation experiment is proposed as the first participant-facing vertical slice; no participant experiment has run.
- No discipline-boundary claim has been tested.
- `MS-COMM-2026-0003` preserves the comparative-writing brief as the approved program mandate.
- `MS-COMM-2026-0004` is completed by `RP-COMM-2026-572D`: a five-domain explanatory-progression pilot with a frozen corpus/rubric, 12/15 internal recode agreement, and a conditional writer-function framework.
- `MS-COMM-2026-0230` is completed by `RP-COMM-2026-8FB7`, adding bounded literary functions while explicitly rejecting persona imitation.
- `MS-COMM-2026-827E` is completed by `RP-COMM-2026-EFC6`, adding situated-authority, translation, circulation, overlap, and nation-specific Indigenous guardrails.
- Tooling modernization completed without changes to protected canonical research.
- A first evidence-bounded operational context now exists under `agent-context/`.
- The operational context deliberately excludes deterministic writer/persona selection and universal communication scoring.

## Operational context v0.1

Current human-maintained source files:

- `agent-context/COMMUNICATION-FOUNDATIONS.md`
- `agent-context/COMMUNICATION-DECISION-CHECKLIST.md`
- `agent-context/COMMUNICATION-ANTI-PATTERNS.md`
- `agent-context/PURPOSE-OUTCOME-MATRIX.md`
- `agent-context/RESEARCH-STATUS.md`

The context is not yet a packaged lifecycle product.

Full always-on packaging remains deferred. Two brief-construction experiments showed a positive same-model preflight effect, which justified a formal requirements candidate and research prototypes. Independent-model attempts did not produce a valid controlled comparison because adding either the full or compact Communication Engineering context changed Copilot's auto-selected model. Production lifecycle distribution still requires human/team, participant, or explicitly pinnable independent-model evidence.

## Operational-context experiment results

### Operational Context Experiment 01 — incident procedure

- Condition A, ordinary request: 18/18 preregistered checks passed.
- Condition B, Communication Engineering context + explicit contract: 18/18 passed.
- Both outputs were 91 words.
- Result: null correctness result.
- Interpretation: the fixed task already supplied nearly all decision-relevant communication state.

### Operational Context Experiment 02 — executive decision memo

- Condition A, ordinary request: 23/23 preregistered checks passed.
- Condition B, Communication Engineering context + explicit contract: 23/23 passed.
- A: 206 words.
- B: 216 words.
- Result: second null correctness result.
- Interpretation: when the source brief already contains audience, decision, evidence, uncertainty, and use-mode information, the full context may add structure without adding measured correctness.

### Operational Context Experiment 03 — flawed memo review

- Condition A, ordinary review: detected 12/12 injected defects, 0 false positives.
- Condition B, Communication Engineering review: detected 12/12 injected defects, 0 false positives.
- Both corrected memos passed all preregistered guardrails.
- Result: third null correctness result.
- Interpretation: explicit Communication Engineering vocabulary did not increase defect recall for this model with complete source facts.

### Operational Context Experiment 04 — brief construction

- Condition A, ordinary response: 5/10 primary brief-construction score.
- Condition B, Communication Engineering preflight: 10/10.
- Difference: +5 points; no guardrail failures; four grouped clarification questions.
- Result: first positive process result.

### Operational Context Experiment 05 — external notice replication

- Condition A, ordinary response: 6.5/10.
- Condition B, Communication Engineering preflight: 10/10.
- Difference: +3.5 points; no guardrail failures; four grouped clarification questions.
- Result: positive same-model replication in a different communication domain.

### Supported working finding

Communication Engineering currently shows value as a **selective pre-drafting preflight** when decision-relevant communication state is incomplete.

It has not shown incremental value as mandatory context for already well-specified drafting/review.

### Independent validation Experiments 06-08

- Experiment 06 targeted Claude Sonnet 4.6 through GitHub Copilot CLI; the model was unavailable and no output was scored.
- Explicit selection was also unavailable for the other tested Claude, Gemini, GPT, and MAI model names on this Copilot account.
- Copilot `auto` telemetry resolved an ordinary Atlas condition to `mai-code-1.1-flash`.
- Experiment 07 required both conditions to remain on MAI-Code; adding the full Communication Engineering context routed B to `gpt-5.6-luna`, invalidating the comparison.
- Experiment 08 repeated with only a compact generic preflight context; B again routed to `gpt-5.6-luna`, invalidating the comparison.
- Result: no valid independent-model replication. A reproducible **model-routing confound** was found.
- Engineering response: move stable preflight mechanics into deterministic typed code rather than relying on ambient prompt context.

### F# deterministic preflight prototype

A research-only F# prototype exists at:

`research/prototypes/communication-preflight-fsharp-v0.1/`

It accepts already-classified communication state and computes:

- state/provenance validation;
- materially missing fields;
- optional unknowns;
- clarification groups;
- activation decision;
- bounded-progress permission;
- verification escalation.

Natural-language interpretation and materiality judgment remain outside the deterministic kernel as Decide/Deliberate work.

### Resulting method change

The operational context now uses selective activation.

Do not require a full communication-contract exercise for fully specified, low-ambiguity tasks.

Use the full method when decision-relevant communication inputs are missing, conflicting, consequential, or difficult to verify.

## Assumptions

- A small operational briefing can improve communication decisions without turning provisional research into doctrine.
- The communication-contract idea can be tested before participant studies using bounded process/structural measures, while behavioral claims remain reserved for reader/user evidence.
- A communication context should be judged against purpose-specific outcomes rather than a universal writing-quality score.

## Active work

Two workstreams are active and must remain separate.

### Operational preflight engineering and validation

Current research work:

- validate the F# deterministic preflight kernel;
- keep AI/model interpretation outside the Compute layer;
- design a human/agent workflow test using the executable preflight;
- measure clarification usefulness, rework, corrected assumptions, and context/model cost;
- do not claim reader comprehension, task success, trust, or transfer without appropriate audience evidence.

Independent-model replication remains desirable, but only on a surface where the model can be pinned or otherwise controlled.

### Research portfolio

Continue the existing evidence gates:

- gather named-audience evidence for RQ-COMM-001;
- complete the RQ-COMM-003 measurement work;
- resolve RQ-COMM-004 prerequisites before activating the participant experiment;
- obtain an independent second-rater check on explanatory progression;
- preserve community/translation review requirements before promoting cross-cultural transfer claims.

## Largest decision-relevant unknown

Does moving Communication Engineering preflight into a small typed executable reduce rework and missing communication state in real human/agent workflows enough to justify production lifecycle packaging?

This is distinct from the still-open participant question:

Which procedural task and named audience provide recognizable value, reliable scoring, and enough difficulty for a valid behavioral experiment?

## Portfolio

The research-question dependency graph remains in `research/frontier/PORTFOLIO-ROADMAP.md`, with the compact priority view in `context/RESEARCH-QUEUE.md`.

## Baseline

The original research baseline remains in `JR-COMM-2026-0001`.

Operational-context experiments must preserve an ordinary-request baseline and pre-register evaluation criteria before outputs are produced.

The operational context must not retroactively alter historical research artifacts.

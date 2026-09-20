# Operational Context Experiment 02 Comparison

Status: First-pass comparison frozen
Date: 2026-09-20

## Result

Experiment 02 produced a second **null correctness result**.

| Condition | Material defects (1-20) | Guardrail defects (21-23) | Word count |
|---|---:|---:|---:|
| A: ordinary memo request | 0 | 0 | 206 |
| B: Communication Engineering context + contract | 0 | 0 | 216 |

Both conditions passed all 23 preregistered rubric items.

No repair was required.

## Decision rule

B did not have fewer material defects than A.

The treatment therefore did not demonstrate incremental correctness value on this task.

B was 10 words longer (+4.9%), within the length guardrail but without a measured defect reduction.

## Observed qualitative difference

Condition B made the architecture more explicit:

- separate decision-request heading;
- separate evidence section;
- separate tradeoffs/unresolved-evidence section;
- explicit sentence that the recommendation is a bounded reversible step rather than proof of broad OCI superiority.

Condition A communicated the same required semantics using fewer structural labels.

Under the preregistered rubric, those differences did not change correctness.

## Combined interpretation of Experiments 01 and 02

Two prospective tasks now show the same pattern:

### Experiment 01: incident procedure

A: 18/18  
B: 18/18  
Both: 91 words

### Experiment 02: executive decision memo

A: 23/23  
B: 23/23  
A: 206 words  
B: 216 words

The operational context has not yet shown incremental first-draft correctness when the task request and fixed source facts are already strong.

It also has not caused the feared harms:
- no writer/persona leakage;
- no qualification fog;
- no excessive length;
- no invented authority;
- no universal-score behavior.

## Emerging hypothesis

The highest-value role for Communication Engineering may be **upstream of polished drafting**:

1. construct the communication contract when it is missing;
2. identify unresolved audience/proof/outcome questions;
3. review an existing communication for hidden semantic/authority/measurement failures;
4. select verification appropriate to purpose.

Once a task has already encoded those decisions clearly, a capable writer may not need the full context.

## Context design implication

Do not make the full briefing mandatory for every communication request.

A smaller activation rule may be preferable:

Use Communication Engineering when at least one is material and unresolved:

- audience/task ambiguity;
- competing purposes;
- high consequence;
- proof/authority ambiguity;
- material uncertainty;
- persuasion/autonomy concerns;
- accessibility constraints;
- mixed expertise;
- cultural/translation/situated-authority concerns;
- uncertainty about how success should be measured.

For simple, fully specified communications, ordinary drafting may be enough.

## Next experiment

The next test should target **review/diagnosis**, not another well-specified generation prompt.

Recommended Experiment 03:

Provide a flawed decision memo containing:
- a false long-term reliability inference;
- hidden downside;
- invented cost implication;
- authority laundering;
- a global conclusion from a small pilot;
- unclear decision request.

Compare:

A. ordinary "review and improve this memo";

B. Communication Engineering review using the operational context.

Pre-register defect-detection recall and false-positive count.

That directly tests whether the context helps expose problems that fluent drafting can otherwise normalize.

## Packaging disposition

Still **do not package**.

Two non-regression/null experiments are encouraging for safety but insufficient for value.

The context should earn packaging by detecting or preventing defects that ordinary work misses, or by materially improving downstream audience outcomes.

# Communication Engineering research queue

This is the compact current-state view. Stable item definitions, relationships,
scores, exit evidence, and review triggers are in
[`research/frontier/PORTFOLIO-ROADMAP.md`](../research/frontier/PORTFOLIO-ROADMAP.md).
The model is governed by `DF-COMM-2026-0001`.

| Tier | ID | Question | Maturity | Confidence | Dependencies | Next evidence |
|---|---|---|---|---|---|---|
| P0 | RQ-COMM-003 | Which outcomes validly detect useful communication improvement? | Deep Investigation | Medium | RQ-001 candidate tasks for validation | test scoring reliability, sensitivity, burden, and accessibility |
| P0 | RQ-COMM-004 | Which ethical, privacy, safety, and accessibility constraints apply? | Scoping | Medium | candidate task/data flow | task-specific harm and data review |
| P0 | RQ-COMM-001 | Which procedural task and audience should be the first slice? | Scoping | Low for exact task | RQ-003, RQ-004 | user-need evidence and candidate feasibility |
| P1 | RQ-COMM-005 | What baseline should ROS be compared against? | Scoping | Medium | RQ-001 scope freeze | preregister counterfactual workflow |
| P1 | RQ-COMM-006 | Is the proposed experiment feasible and sensitive? | Idea | Low | RQ-001, RQ-003, RQ-004 | pilot without floor/ceiling effects |
| P1 | RQ-COMM-012 | What boundaries distinguish ethical persuasion from manipulation? | Idea | Low | representative use cases | abuse cases and red lines |
| P2 | RQ-COMM-002 | What does Communication Engineering add beyond adjacent fields? | Idea | Low | two empirical cycles | comparative boundary analysis |
| P2 | RQ-COMM-007 | What effects do controlled communication variants cause? | Idea | Low | RQ-006 | controlled comparison |
| P2 | RQ-COMM-008 | What functional communication taxonomy is useful and reliable? | Idea | Low | RQ-002, RQ-007 | classification criteria and agreement test |
| P2 | RQ-COMM-010 | Which effects generalize across audiences and contexts? | Idea | Low | replicated RQ-007 result | cross-context replication |
| P2 | RQ-COMM-011 | Why does some documentation remain useful for decades? | Idea | Very Low | corpus and outcome definition | longitudinal study scope |
| P3 | RQ-COMM-009 | How should AI select communication strategies safely? | Idea | Very Low | RQ-004, RQ-008, RQ-010 | validated inputs and abstention rules |

## Portfolio status

- **Highest-value work:** obtain named-audience/task evidence for RQ-COMM-001,
  then use it to complete task-specific validation for RQ-COMM-003.
- **Experiment gate:** do not activate MS-COMM-2026-0001 until RQ-COMM-001,
  RQ-COMM-003, and RQ-COMM-004 meet their exit evidence.
- **Last review:** 2026-07-30 after partial RP-COMM-2026-0002. The primary
  measurement hierarchy is resolved provisionally; feasibility remains open.
- **Next mandatory review:** after the next REP, material contradiction, or
  experiment outcome; otherwise 2026-08-29 for P0/P1 items.

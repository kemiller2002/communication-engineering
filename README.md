# Communication Engineering

Communication Engineering is a research program and emerging operational methodology for choosing, structuring, producing, and evaluating communication according to purpose, audience, proof obligation, context, and consequence.

The repository runs on Repository Operating System 3.0.3 and publishes its research corpus with `@echelon-foundry/research-publisher`.

## Start here

For repository work:

1. Read [`AGENTS.md`](AGENTS.md) and [`BOOTSTRAP.md`](BOOTSTRAP.md).
2. Read [`context/CURRENT-STATE.md`](context/CURRENT-STATE.md).
3. Follow the current ROS work protocol.
4. Preserve the distinction between accepted evidence, provisional hypotheses, and open research.

For applying the current evidence-bounded communication guidance:

1. [`agent-context/COMMUNICATION-FOUNDATIONS.md`](agent-context/COMMUNICATION-FOUNDATIONS.md)
2. [`agent-context/COMMUNICATION-DECISION-CHECKLIST.md`](agent-context/COMMUNICATION-DECISION-CHECKLIST.md)
3. [`agent-context/PURPOSE-OUTCOME-MATRIX.md`](agent-context/PURPOSE-OUTCOME-MATRIX.md)
4. [`agent-context/COMMUNICATION-ANTI-PATTERNS.md`](agent-context/COMMUNICATION-ANTI-PATTERNS.md)
5. [`agent-context/RESEARCH-STATUS.md`](agent-context/RESEARCH-STATUS.md)

The operational context is intentionally more conservative than the research corpus. It exposes supported foundations while keeping strategy-selection claims visibly provisional.

## Repository lifecycle capability

Communication Engineering now exposes a dependency-free lifecycle CLI for installing the evidence-bounded operational context into another repository:

```bash
communication-engineering init
communication-engineering status
communication-engineering verify --strict
communication-engineering upgrade
communication-engineering doctor
```

The installer writes the operational guidance under `.communication-engineering/`, records installation state in `.echelon/communication-engineering.json`, and adds only a managed briefing region to `AGENTS.md`. It does not install the research corpus or promote provisional research claims into universal rules.

For repository-to-repository rollout before an npm release is available, the package can be installed from a pinned GitHub commit. See [Lifecycle installation](docs/lifecycle-installation.md).

## Local operating commands

```bash
./ros status
./ros registry check
./ros registry build
./ros validate
./ros verify

npm ci
npm run research:inventory
npm run research:validate
npm run research:build
npm run research:verify
```

Current lifecycle manifests:

- `.echelon/ros.json`
- `.echelon/research-publisher.json`

The original legacy ROS snapshot remains in `.ros/installation.json` as migration history, not as the current authority.

## Current research position

The strongest current findings support:

- conditional fit rather than one universally best style;
- purpose-specific outcome measures rather than one communication score;
- architecture before surface style;
- explicit proof obligations;
- separation of evidence, claim, inference, uncertainty, and authority;
- accessibility and autonomy as constraints;
- transfer of communication functions rather than identity/persona imitation;
- cultural, translation, and situated-authority boundaries.

The repository does **not** currently claim validated universal:

- writer-to-purpose rules;
- communication quality scores;
- explanatory progressions;
- persuasion optimizers;
- cultural style selectors;
- AI strategy selectors.

## Research site publishing

Pull requests and pushes to `main` validate and build the research site. Pushes to `main` also publish the generated `dist/` directory to GitHub Pages according to the repository workflow.

## Pilot rule

Do not infer that Communication Engineering is a validated discipline, method, or product merely because the repository follows a rigorous process.

Operational guidance must remain proportional to evidence maturity. Prospective validation should measure the outcome implied by the communication purpose rather than relying on generic proxies such as readability, liking, engagement, or brevity.

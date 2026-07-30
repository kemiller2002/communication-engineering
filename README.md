# Communication Engineering

This repository is a greenfield pilot running Repository Operating System
1.0.0.

## Start here

1. Read [`AGENTS.md`](AGENTS.md) and [`BOOTSTRAP.md`](BOOTSTRAP.md).
2. Complete [`PROJECT-CHARTER.md`](PROJECT-CHARTER.md).
3. Establish the baseline in [`context/CURRENT-STATE.md`](context/CURRENT-STATE.md).
4. Select the first bounded mission and its observable acceptance criteria.
5. Record durable evidence, decisions, and handoffs as the work proceeds.

## Local operating commands

```bash
./ros registry check
./ros registry build
./ros validate
npm ci
npm run research:validate
npm run research:build
```

The installed snapshot is self-contained. It does not read from the source ROS
repository. `.ros/installation.json` records the package version and checksums
of installed files.

## Research site publishing

Pull requests and pushes to `main` validate and build the research site. Pushes
to `main` also publish the generated `dist/` directory to GitHub Pages. The
publication workflow can be run manually from the Actions tab.

Before the first publication, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions**. Configure `communication.echelonfoundry.com` as
the repository's Pages custom domain and point its DNS at GitHub Pages.

## Pilot rule

The operating system is itself under evaluation. Do not infer that
Communication Engineering is a validated discipline, method, or product merely because
the repository follows a rigorous process. Measure whether the process improves
decisions, traceability, handoffs, and rework relative to the declared baseline.

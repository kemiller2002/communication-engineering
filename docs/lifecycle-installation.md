# Communication Engineering lifecycle installation

The lifecycle package installs only the evidence-bounded operational context required for day-to-day communication decisions. Canonical research remains in this repository and is not copied into consuming repositories.

## Commands

```bash
communication-engineering init
communication-engineering status
communication-engineering verify --strict
communication-engineering upgrade
communication-engineering doctor
```

All commands accept `--root PATH` and `--json`. `init` and `upgrade` accept `--dry-run` and `--check`.

Until an npm release is configured, a consuming repository may execute a pinned GitHub revision through npm:

```bash
npm exec --yes \
  --package=github:kemiller2002/communication-engineering#<commit-sha> \
  communication-engineering -- init
```

Pin the commit. Do not use an unversioned moving branch in an automated migration.

## Installed state

The default installation contains:

- `.communication-engineering/COMMUNICATION-FOUNDATIONS.md`
- `.communication-engineering/COMMUNICATION-DECISION-CHECKLIST.md`
- `.communication-engineering/PURPOSE-OUTCOME-MATRIX.md`
- `.communication-engineering/COMMUNICATION-ANTI-PATTERNS.md`
- `.communication-engineering/RESEARCH-STATUS.md`
- `.echelon/communication-engineering.config.json`
- `.echelon/communication-engineering.json`
- a managed Communication Engineering region in `AGENTS.md`

The configuration file can move the context directory or disable the AGENTS integration by setting `integrations.agentsFile` to `null`.

## Ownership and safety

Operational context files are tool-owned. A locally modified managed file blocks an upgrade rather than being overwritten. The AGENTS integration is a bounded managed region; unrelated instructions remain untouched.

`init` and `upgrade` calculate the complete plan before writing. Conflicts return exit code 5 and nothing from that plan is applied.

Repeated `init` on a current installation is write-free and content-idempotent.

## Evidence discipline

Installation does not make Communication Engineering research universally valid. The installed `RESEARCH-STATUS.md` remains part of the operational context so agents can distinguish accepted foundations from provisional or unsupported claims.

# Communication Engineering Modernization Agent Script

Status: executable agent instructions
Date: 2026-09-20
Target repository: `kemiller2002/communication-engineering`
Primary objective: modernize repository tooling without changing the meaning, status, or contents of canonical Communication Engineering research.

## Governing rule

**Modernize the execution substrate first. Preserve the research corpus exactly unless a migration mechanically requires metadata/schema repair that is independently justified and explicitly recorded.**

Do not use this modernization as permission to:
- promote candidate theory;
- accept review-stage research;
- rewrite old REPs;
- change research conclusions;
- normalize historical uncertainty away;
- convert provisional writer/function mappings into doctrine.

## Required reading

Before editing:

1. `AGENTS.md`
2. `BOOTSTRAP.md`
3. `PROJECT-CHARTER.md`
4. `context/CURRENT-STATE.md`
5. `HANDOFF.md`
6. `.ros/installation.json`
7. `package.json`
8. `research-publisher.config.mjs`
9. `docs/communication-engineering-modernization-baseline.md`
10. current ROS upgrade documentation from the installed/current package
11. current Research Publisher upgrade documentation from the installed/current package

## Work classification

Treat this as infrastructure/governance modernization, not communication-domain research.

If current ROS work protocol supports it, create a bounded work item before implementation.

## Phase 0 — Repository safety checkpoint

Before changing anything:

1. Confirm working tree is clean.
2. Record current branch and HEAD SHA.
3. Create a recoverable git tag:
   `communication-engineering-pre-modernization-2026-09-20`
4. Record:
   - Node version
   - npm version
   - current ROS status if callable
   - current package-lock state
5. Run and capture baseline results:
   - `./ros registry build`
   - `./ros registry check`
   - `./ros validate`
   - `npm ci`
   - `npm run research:validate`
   - `npm run research:build`

### Stop condition

If baseline validation fails for reasons unrelated to stale tooling, stop and record those failures before upgrading. Do not make the migration absorb unrelated defects.

## Phase 1 — Inventory protected research

Create a deterministic before-state inventory covering at minimum:

- `research/**`
- `missions/**`
- `context/**`
- `PROJECT-CHARTER.md`
- `HANDOFF.md`
- `research-publisher.config.mjs`
- registries after a fresh `./ros registry build`

Record:
- path;
- SHA-256;
- byte size.

Store this inventory under a modernization work/evidence directory appropriate to current ROS, or under:

`docs/modernization/communication-engineering-pre-upgrade-inventory.json`

if no work artifact location exists yet.

Do not treat generated `dist/` output as canonical.

## Phase 2 — Upgrade ROS from legacy installation

The repository currently has a legacy ROS installation recorded by:

`.ros/installation.json`

Use the current stable package:

`@echelon-foundry/repository-operating-system`

### Step 2.1 — Read-only inspection

Run current-package commands without writing:

```bash
npx --yes --package=@echelon-foundry/repository-operating-system ros status --json
npx --yes --package=@echelon-foundry/repository-operating-system ros doctor --json
npx --yes --package=@echelon-foundry/repository-operating-system ros upgrade --dry-run --json
```

Persist the dry-run JSON.

### Step 2.2 — Review the plan

The plan MUST satisfy all of the following:

- recognizes this as a supported legacy/pre-manifest installation;
- adopts or creates `.echelon/ros.json`;
- preserves populated registries;
- preserves research artifacts;
- preserves missions;
- preserves current context documents unless a declared shared-file migration explicitly applies;
- leaves the legacy snapshot available if current ROS promises that behavior;
- does not delete user-owned material;
- does not silently overwrite locally changed tool-owned files.

### Stop conditions

Stop before applying if:

- any `research/**` or `missions/**` canonical artifact is scheduled for deletion/replacement;
- a shared/user-owned file would be overwritten without an explicit migration rule;
- a tool-owned conflict appears and the correct resolution is unclear;
- the migration does not recognize the existing installation;
- the plan would rewrite research merely to match a new template.

Record the blocker exactly. Do not improvise around lifecycle protections.

### Step 2.3 — Apply

If the dry-run is clean:

```bash
npx --yes --package=@echelon-foundry/repository-operating-system ros upgrade
```

Then run:

```bash
./ros status
./ros verify
./ros doctor
./ros registry build
./ros registry check
./ros validate
```

Do not continue until all failures are understood.

## Phase 3 — Upgrade Research Publisher

The repository currently uses a GitHub-sourced Research Publisher dependency and predates the modern lifecycle manifest.

Move to the current released package:

`@echelon-foundry/research-publisher`

### Step 3.1 — Dependency transition

Use npm to change only the intended development dependency:

```bash
npm install --save-dev @echelon-foundry/research-publisher@latest
```

Do not hand-edit `package-lock.json`.

Verify the old GitHub dependency is gone.

### Step 3.2 — Read-only lifecycle inspection

Run:

```bash
npx @echelon-foundry/research-publisher status --json
npx @echelon-foundry/research-publisher doctor --json
npx @echelon-foundry/research-publisher upgrade --dry-run --json
```

If the tool reports the repository is not installed and requires `init` rather than `upgrade`, run:

```bash
npx @echelon-foundry/research-publisher init --dry-run --json
```

first.

### Required preservation

The lifecycle plan MUST preserve:

- `research-publisher.config.mjs`;
- existing `research:build` and `research:validate` semantics;
- research corpus;
- site branding/configuration;
- current content globs;
- custom GitHub Pages behavior unless a deliberate later change replaces it.

It MAY add missing standard scripts such as:
- research:inventory
- research:clean
- research:status
- research:verify
- research:doctor

if the lifecycle tool declares them additive.

### Step 3.3 — Apply and verify

Apply the correct lifecycle command, then run:

```bash
npm run research:inventory
npm run research:validate
npm run research:build
npx @echelon-foundry/research-publisher verify --strict
npx @echelon-foundry/research-publisher doctor
```

## Phase 4 — Compare protected corpus

Recreate the protected-file inventory from Phase 1.

Compare before/after.

Classify every changed protected file as one of:

- expected governance migration;
- expected current-context update;
- generated registry refresh caused only by deterministic generator/version changes;
- unexpected.

### Hard rule

Canonical research content must not change merely because tooling changed.

If any immutable/historical research content changed unexpectedly:
1. revert it;
2. determine why;
3. record the defect;
4. stop before merging.

## Phase 5 — Update repository current-state documentation

Update only mutable operational records needed to tell the truth about the repository.

At minimum inspect/update:

- `README.md`
- `context/CURRENT-STATE.md`
- `HANDOFF.md`

They should state:

- current ROS package/version and lifecycle model;
- current Research Publisher package/version and lifecycle model;
- that research conclusions were preserved;
- validation results;
- any migration conflicts/deferred work;
- that Communication Engineering remains a research program with candidate theory, not a validated universal methodology.

Do not rewrite the charter's research caution away.

## Phase 6 — Re-run the complete baseline

Run:

```bash
./ros registry build
./ros registry check
./ros validate
./ros verify
npm run research:validate
npm run research:build
npx @echelon-foundry/research-publisher verify --strict
```

Also run any new CI/lifecycle checks current ROS installs.

If the new ROS workflow is added or changed, push the branch and verify the actual GitHub Actions run. A local pass is not a claim about CI.

## Phase 7 — Modernization report

Create:

`docs/modernization/communication-engineering-tooling-upgrade-report.md`

Include:

- starting SHA/tag;
- ending SHA;
- ROS before/after;
- Research Publisher before/after;
- files added/changed;
- protected corpus comparison;
- commands executed;
- exact validation outcomes;
- conflicts encountered;
- deviations from plan;
- research files intentionally unchanged;
- remaining modernization work.

## Phase 8 — Do NOT build the Communication Engineering context package yet

After substrate modernization, stop and hand off.

The next mission is separate:

**Build the evidence-bounded Communication Engineering operational context.**

That mission should draw from:

- TH-COMM-2026-0001;
- RP-COMM-2026-0002;
- RP-COMM-2026-572D;
- RP-COMM-2026-8FB7;
- RP-COMM-2026-EFC6;
- WRITER-PURPOSE-FIT-FRAMEWORK-v1.0;
- modernization baseline.

Keeping package construction separate prevents infrastructure migration from quietly becoming theory promotion.

## Definition of done

Modernization is complete only when:

- legacy ROS installation has a supported current lifecycle;
- Research Publisher uses the released lifecycle package;
- lifecycle manifests are present and valid as applicable;
- current research validates/builds;
- ROS registries validate;
- protected canonical research is unchanged except explicitly justified mutable records;
- CI is green;
- modernization report exists;
- handoff clearly names the next mission.

## Final handoff

Report:

1. whether ROS upgrade succeeded;
2. whether Research Publisher upgrade succeeded;
3. versions installed;
4. protected corpus diff result;
5. validation/CI results;
6. unresolved blockers;
7. exact path to modernization report;
8. recommendation on whether the operational-context mission is safe to start.

Do not claim Communication Engineering itself was "upgraded" merely because its tooling was modernized. The communication methodology remains subject to its own evidence gates.

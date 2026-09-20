# Communication Engineering Tooling Upgrade Report

Status: completed
Date: 2026-09-20

## Baseline

- Rollback tag: `communication-engineering-pre-modernization-2026-09-20`
- Starting SHA: `b90fefcd193a28d582c3c14b5a80dabbed2892b1`
- Protected corpus hash inventory: `docs/modernization/protected-corpus.sha256`

## ROS

- Before: legacy ROS 1.0.0 installation
- After: ROS 3.0.3 lifecycle installation
- Legacy package identity compatibility shim used: `false`
- Current lifecycle manifest: `.echelon/ros.json`
- Legacy snapshot remains available at `.ros/installation.json`.

## Research Publisher

- Before: GitHub source dependency, pre-manifest lifecycle shape
- After: released `@echelon-foundry/research-publisher@0.1.0`
- Current lifecycle manifest: `.echelon/research-publisher.json`

## Research preservation

The SHA-256 inventory for `research/**`, `missions/**`, and the comparative-writing source prompt matched before and after migration.

No canonical research content was changed by the tooling modernization.

## Verification

Completed successfully:
- legacy baseline ROS validation
- research validate/build
- ROS 3.0.3 upgrade dry-run and apply
- ROS registry build/check/validate and lifecycle verify
- Research Publisher lifecycle adoption/upgrade
- Research Publisher inventory/validate/build and strict verify
- protected-corpus comparison

## Scope

This modernizes tooling only. It does not promote theory, accept review-stage research, or claim Communication Engineering is a validated universal discipline.

## Next mission

Build and test the evidence-bounded operational context described in `docs/communication-engineering-modernization-baseline.md`.


## Publisher finalization note

The legacy unscoped `research-publisher` dependency was removed. The repository now has one publisher authority: `@echelon-foundry/research-publisher@0.1.0`.

The legacy pre-manifest adoption path required forced manifest convergence after the lifecycle tool had already applied its shared scripts/artifacts. The resulting `.echelon/research-publisher.json` was then verified successfully with `verify --strict`.

Temporary migration-only workflow/helper files were removed before merge.

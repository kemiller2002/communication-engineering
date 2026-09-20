# Independent Preflight Replication 06 Result

Status: Incomplete — target model unavailable
Date: 2026-09-20

## Pre-registered target

GitHub Copilot CLI with explicit model:

`claude-sonnet-4.6`

## Result

The workflow reached Copilot CLI successfully but failed before generating Condition A:

`Error: Model "claude-sonnet-4.6" from --model flag is not available.`

Per the preregistration, no fallback model was substituted.

No experimental output was produced.

## Availability investigation

A non-experiment probe then tested these explicitly named models:

- `claude-haiku-4.5`
- `gemini-3.1-pro-preview`
- `gemini-3.5-flash`
- `gpt-5.4`
- `gpt-5.3-codex`

All were unavailable through explicit model selection for this repository/account.

## Auto route

A separate non-experiment telemetry probe used `--model auto`.

OpenTelemetry reported:

- requested model: `auto`
- resolved model: `mai-code-1.1-flash`
- Copilot transport provider: `github`

MAI-Code-1.1-Flash is a Microsoft AI model family and is independent of the OpenAI model used for Experiments 01-05.

## Disposition

Experiment 06 remains a failed execution due to model availability.

A new experiment must be separately preregistered before using the auto route.

The new experiment must assert the resolved model identity for each condition and invalidate itself if the model is not `mai-code-1.1-flash`.

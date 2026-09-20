# Connection failed: verify deployment status before retrying

**Do not rerun the deployment yet.** The connection failure tells you only that the client did not receive the result. The deployment may already have succeeded.

Run the authoritative check:

`deploy status --id <deployment-id>`

Then follow the reported status:

| Status | Safe next action |
| --- | --- |
| `succeeded` | Do not retry. The deployment already completed. |
| `failed-before-apply` | Retry is allowed. |
| `in-progress` | Wait, then check status again. |
| `unknown` | Escalate to the platform operator. Do not retry. |

Retry only after authoritative status reports `failed-before-apply`. Until then, the deployment outcome is unresolved.

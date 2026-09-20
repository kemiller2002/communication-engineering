# Deployment result uncertain

Do not retry the deployment yet. A connection failure means the client did not receive a result; the deployment itself may have succeeded or failed.

1. Check the authoritative deployment status:

`deploy status --id <deployment-id>`

2. Act on the reported status:
   - `succeeded`: the deployment completed. Do not retry.
   - `failed-before-apply`: the deployment did not apply. You may retry it.
   - `in-progress`: wait, then run the status command again.
   - `unknown`: escalate to the platform operator. Do not retry.

Until the status check resolves the outcome, treat the deployment result as unresolved.

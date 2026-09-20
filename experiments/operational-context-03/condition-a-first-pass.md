# Review

1. The four incidents were caused by conversion scripts for non-npm artifacts, not by npm itself.
2. Sixty failure-free pilot runs across three repositories do not establish long-term OCI reliability.
3. Security found both paths acceptable for the pilot requirements; that is narrower than "Security approved OCI."
4. Operations prefers one mechanism but does not own the approval decision.
5. No cost difference is known, so a cost-reduction claim is unsupported.
6. The memo cites the two-day publisher estimate but omits the additional nine engineer-days for migrating all 18 consumers.
7. Immediate migration of all 18 repositories contradicts the proposed 90-day hybrid policy.
8. OCI was slower in the pilot, not faster: 48s vs 35s publish and 43s vs 28s restore.
9. Disaster recovery is untested and should remain an explicit risk rather than being deferred as if rollout were already justified.
10. JavaScript teams' preference for native npm integration is a material tradeoff, not something the memo can dismiss.
11. There is no migration deadline, so "this quarter" creates unsupported urgency.
12. "Unless there are objections" blurs decision authority; the VP should be asked to approve or reject the policy.

# Corrected memo

**Recommendation:** Approve a 90-day hybrid policy: use OCI for new non-JavaScript/TypeScript artifacts, keep existing JavaScript/TypeScript packages on npm, do not migrate all 18 consumers now, and reassess after 90 days.

Four release incidents in the last 90 days came from scripts that converted non-npm artifacts into npm-compatible packages; none came from npm client authentication. The OCI pilot covered three repositories and three artifact types and completed 60 publish/restore runs with no observed failures. Operations prefers one mechanism where practical to reduce custom release scripting, while JavaScript teams value npm's native integration. Security found both paths acceptable for the pilot requirements.

The tradeoffs remain material. OCI was slower in the pilot: 48s vs 35s median publish time and 43s vs 28s restore time. Disaster recovery was not tested, three repositories are too small a sample to establish long-term failure rates, and no cost difference is known.

Publisher migration is estimated at two engineer-days; migrating all 18 consumers would add nine engineer-days.

**VP decision:** approve or reject the 90-day hybrid policy.

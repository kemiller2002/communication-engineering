# Decision: Approve a 90-day hybrid artifact policy

**Recommendation:** Approve the proposed hybrid policy: use OCI for new non-JavaScript/TypeScript internal artifacts, keep existing JavaScript/TypeScript packages on npm, do not migrate all 18 consumers now, and reassess after 90 days.

**Why this is the lowest-risk next step**

- Five of our seven artifact categories are not JavaScript/TypeScript packages. In the last 90 days, four release incidents came from scripts that converted non-npm artifacts into npm-compatible packages; none came from npm client authentication.
- The OCI pilot covered three repositories and three artifact types (.NET tool, WASM bundle, documentation), completing 60 publish/restore runs with no observed failures.
- Operations prefers one artifact mechanism where practical because it reduces custom release scripting, while JavaScript teams retain native npm integration.
- Security found both paths acceptable for the pilot requirements.

**Tradeoffs and uncertainty**

OCI was slower in the pilot: median publish time was 48s versus 35s, and restore time was 43s versus 28s. The pilot did not test disaster recovery, and three repositories are insufficient to establish long-term failure rates. No cost difference or migration deadline is known.

Publisher-path migration is estimated at two engineer-days; migrating all 18 consumers now would add nine engineer-days.

**Decision requested:** Approve or reject the 90-day hybrid policy and reassessment.

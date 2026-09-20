# Decision request: approve the 90-day hybrid artifact policy

**Recommendation:** Approve the proposed 90-day hybrid policy. Use OCI for new non-JavaScript/TypeScript artifacts, keep existing JavaScript/TypeScript packages on npm, avoid migrating all 18 consumers now, and reassess after 90 days.

## Evidence supporting the recommendation

- **Current friction:** five of seven artifact categories are non-JavaScript/TypeScript. Four release incidents in the last 90 days came from conversion scripts; none came from npm client authentication.
- **Pilot:** OCI handled a .NET tool, WASM bundle, and documentation artifact across three repositories for 60 publish/restore runs with no observed failures.
- **Operational fit:** Operations prefers one mechanism where practical to reduce custom release scripting. JavaScript teams prefer npm's native integration.
- **Security:** both paths were acceptable for the pilot requirements.
- **Migration effort:** publisher-path work is estimated at two engineer-days. Migrating all 18 consumers now would add nine engineer-days.

## Tradeoffs and unresolved evidence

OCI was slower in the pilot: median publish time was 48s vs. 35s, and restore time was 43s vs. 28s. Disaster recovery was not tested. Three repositories are too small a sample to establish long-term failure rates. No cost difference is known, and there is no migration deadline.

The recommendation is therefore a bounded, reversible next step rather than proof that OCI should replace npm broadly.

**VP decision:** approve or reject the 90-day hybrid policy.

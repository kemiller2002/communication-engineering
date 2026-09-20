# Communication Engineering review

## Material defects

1. **D1 — Evidence attribution:** the memo converts four conversion-script incidents into an npm reliability claim. The fixed facts explicitly separate those incidents from npm client authentication.
2. **D2 — Certainty strengthening:** 60 failure-free runs across three repositories cannot establish long-term OCI reliability.
3. **D3 — Authority laundering:** "Security approved OCI" expands a scoped finding that both paths were acceptable for pilot requirements.
4. **D4 — Authority laundering:** Operations expressed a preference for one mechanism; it did not approve the decision.
5. **D5 — Unsupported inference:** no cost difference is known, so infrastructure savings cannot be claimed.
6. **D6 — Compression amputation:** the two-day publisher estimate is presented without the additional nine engineer-days for full consumer migration.
7. **D7 — Decision substitution:** immediate migration of all 18 repositories replaces the supplied reversible 90-day hybrid proposal.
8. **D8 — Evidence inversion:** OCI was slower in both measured medians, not faster.
9. **D9 — Uncertainty suppression:** disaster recovery is untested and cannot be moved after rollout without changing the risk posture.
10. **D10 — Tradeoff suppression:** JavaScript teams' npm integration preference is material to the hybrid decision.
11. **D11 — False urgency:** no migration deadline exists; "this quarter" is invented.
12. **D12 — Decision-authority blur:** "unless there are objections" substitutes passive consensus for an explicit VP approve/reject decision.

## Corrected memo

**Decision request:** VP Engineering approval of a 90-day hybrid artifact policy.

**Recommendation:** Use OCI for new non-JavaScript/TypeScript artifacts, retain existing JavaScript/TypeScript packages on npm, avoid migrating all 18 consumers now, and reassess after 90 days.

**Evidence:** Five of seven artifact categories are non-JavaScript/TypeScript. Four recent release incidents came from conversion scripts, while none came from npm client authentication. The OCI pilot covered three repositories and three artifact types for 60 publish/restore runs with no observed failures. Security found both paths acceptable for pilot requirements. Operations prefers one mechanism to reduce custom release scripting; JavaScript teams prefer npm's native integration.

**Tradeoffs and uncertainty:** OCI was slower in the pilot: 48s vs 35s median publish time and 43s vs 28s restore time. Disaster recovery was not tested, the three-repository sample cannot establish long-term failure rates, and no cost difference is known. Publisher migration is estimated at two engineer-days; full consumer migration would add nine engineer-days.

This is a reversible policy test, not evidence for broad OCI consolidation.

**VP decision:** approve or reject the 90-day hybrid policy.

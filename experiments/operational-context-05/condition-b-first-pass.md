The retirement facts are sufficient to draft a safe general notice, but several communication decisions are still missing.

## Established facts

- API v1 requests will be rejected after **2027-01-31**.
- API v2 has been generally available for 11 months and 85% of active accounts have migrated.
- The migration guide is `/docs/api-v2-migration`.
- Known breaking changes include authentication-header and pagination changes.
- Support clinic capacity is limited to 40 customer accounts per week.
- The observed error-rate difference does not establish that v2 caused better reliability.
- No extension has been approved.

## Missing decision-relevant inputs

I would resolve these in four grouped questions:

1. **Audience and personalization:** Is this going to all customers, active v1 users, an enterprise subset, or another segment? Which recipient role should act, and do we know each recipient still uses v1?
2. **Channel and sender:** Is this email, in-product messaging, changelog/documentation notice, or another channel, and who is the authoritative sender?
3. **Support path:** What contact or booking path should customers use for migration help or a clinic?
4. **Cadence and accessibility:** Is this the first notice, a reminder, or a final notice, and are localization or alternate-format requirements in scope?

## Safe provisional notice

Until those answers are known, use a **broad, non-personalized retirement notice** rather than claiming the recipient still uses v1:

> API v1 will be retired on **January 31, 2027**. After that date, v1 requests will be rejected. If your integration still uses v1, migrate before the retirement date using `/docs/api-v2-migration`.
>
> Known migration changes include replacing `X-Key` authentication with `Authorization: Bearer <token>` and moving from `page/limit` to cursor-based pagination. These are supplied examples; use the migration guide for the full migration path.
>
> Migration assistance is available, but clinic capacity is limited to 40 customer accounts per week. Add the verified support/booking path before sending.

Do not add a claim that v2 is proven more reliable, do not promise an extension, and do not personalize the notice until recipient status is known.

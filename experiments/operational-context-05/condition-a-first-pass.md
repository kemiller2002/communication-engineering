# API v1 retirement: migrate by January 31, 2027

API v1 will be retired on **January 31, 2027**. After that date, API v1 requests will be rejected.

API v2 has been generally available for 11 months, and 85% of active accounts have already migrated. If you still use v1, plan your migration before the retirement date.

Start with the migration guide:

`/docs/api-v2-migration`

Two breaking changes to account for are:

- Authentication: replace the v1 `X-Key` header with `Authorization: Bearer <token>`.
- Pagination: replace v1 `page/limit` pagination with cursor-based pagination.

The replacement API has been exercised broadly, but the observed v1/v2 error-rate difference does not prove that v2 is inherently more reliable.

Migration clinics are available in limited capacity: Support can handle up to 40 customer accounts per week.

Before sending this announcement, I would confirm:
- whether it goes to all customers or only customers still using v1;
- the sender and communication channel;
- the support/contact or clinic-booking path.

Those details should be added rather than invented.

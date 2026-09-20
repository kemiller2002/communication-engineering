Here’s a concise leadership update:

## Atlas migration: recommended next step

Atlas is used by 24 production services, and the current major version leaves vendor support on March 31, 2027. Security has said remaining on an unsupported authentication library after that date is unacceptable.

We have a viable replacement path, but the evidence supports a staged migration rather than an immediate full rollout. The replacement identity provider has been piloted in three services across roughly 500,000 login attempts, with no authentication failures attributed to the provider. The tradeoffs are an 18 ms increase in median authentication latency and an estimated $72,000 in annual vendor cost across all 24 services.

Migration effort is also material. A standard service is estimated at three engineer-days, Platform Engineering can support four migrations per month without displacing committed work, and two services use a custom authentication protocol that the pilot did not test.

**Recommended next step:** validate the two custom-protocol services and develop a staged migration sequence that completes before Atlas support ends. Separately, resolve the unapproved vendor budget before committing to the full rollout.

No migration sequence or budget approval exists today, and the pilot is not evidence of long-term reliability.

If this update is meant to request a specific executive decision rather than provide status and direction, I’d tailor the last section to name the decision owner and exact approval being requested.

# Atlas leadership update task

## User request

Write an update to leadership explaining the Atlas migration problem and what we should do next. Keep it concise.

## Fixed facts

1. Atlas is an internal authentication library used by 24 production services.
2. The current Atlas major version leaves vendor support on 2027-03-31.
3. A replacement identity-provider integration has been piloted in three services.
4. The pilot covered approximately 500,000 login attempts.
5. No authentication failure in the pilot was attributed to the replacement provider.
6. Median authentication latency increased by 18 milliseconds in the pilot.
7. The replacement provider would add approximately $72,000 per year in vendor cost if deployed across all 24 services.
8. A standard service migration is estimated at three engineer-days.
9. Two of the 24 services use a custom authentication protocol that the pilot did not test.
10. Security has stated that remaining on an unsupported authentication library after 2027-03-31 would be unacceptable.
11. Platform Engineering can support at most four service migrations per month without delaying already committed platform work.
12. No production outage has yet been traced to the current Atlas library.
13. No budget approval has yet been recorded for the additional vendor cost.
14. No migration sequence has been approved.
15. No executive decision owner is named in the source material.
16. No communication deadline is stated.
17. No required format beyond "concise update" is stated.
18. No explicit purpose is stated beyond "explaining the problem and what we should do next."

Do not invent additional facts.

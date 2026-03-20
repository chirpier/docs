# Chirpier Docs Migration Matrix

| Source | Action | Destination | Notes |
| --- | --- | --- | --- |
| `src/content/docs/index.mdx` | rewrite | `Overview` | align to current event model |
| `src/content/docs/get-started/quick-start.mdx` | rewrite | `Get Started/Quick Start` | remove legacy group/stream model |
| `src/content/docs/get-started/core-concepts.mdx` | rewrite | `Get Started/Core Concepts` | make event definitions, policies, alerts canonical |
| `src/content/docs/get-started/architecture.mdx` | keep + refresh | `Get Started/Architecture` | preserve product-level structure |
| `src/content/docs/get-started/plans.mdx` | keep | `Get Started/Plans` | site-owned pricing/product content |
| `src/content/docs/emit/sdk/index.mdx` | rewrite | `SDKs/Overview` | describe shared SDK model |
| `src/content/docs/emit/sdk/js.mdx` | rewrite from `../chirpier-js/README.md` | `SDKs/JavaScript` | keep lightweight |
| `src/content/docs/emit/sdk/go.mdx` | rewrite from `../chirpier-go/README.md` | `SDKs/Go` | keep lightweight |
| `src/content/docs/emit/sdk/python.mdx` | rewrite from `../chirpier-py/README.md` | `SDKs/Python` | keep lightweight |
| `src/content/docs/emit/api.mdx` | rewrite | `SDKs/API` | document current ingest + control-plane model |
| `src/content/docs/charts/index.mdx` | rewrite + merge | `Charts/Overview` | merge with `../charts/README.md` |
| `src/content/docs/charts/*.mdx` | keep + refresh | `Charts/*` | preserve chart-type guides |
| `src/content/docs/monitor/policies.mdx` | keep + refresh | `Use Chirpier/Alerts and Policies` | still useful product docs |
| `src/content/docs/monitor/alerts.mdx` | keep + refresh | `Use Chirpier/Alerts and Policies` | align terminology |
| `../chirpier-js/README.md` | keep as source | `SDKs/JavaScript` | source of install and examples |
| `../chirpier-go/README.md` | keep as source | `SDKs/Go` | source of install and examples |
| `../chirpier-py/README.md` | keep as source | `SDKs/Python` | source of install and migration notes |
| `../charts/README.md` | keep as source | `Charts/*` | source of embed usage |
| `../web/README.md` | leave repo-local | none | internal app dev docs |
| `../web/CONTRIBUTING.md` | leave repo-local | none | internal engineering docs |
| `../web/PLAN.md` | leave repo-local | none | internal planning |
| `../charts/docs/releasing.md` | leave repo-local | none | package release ops |

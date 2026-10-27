# Growth Intelligence — Growth Evidence & Integration Workspace

**A review application bringing source configuration, reports, experiments and evidence retrieval into one workspace.**

Public showcase by **Ismail Bellakhel**. The product is Growth Intelligence; workspace labels in the private review app are not the product name.

![Interactive provider validation preview](preview.png)

## Start here — a two-minute review

1. Run the local preview below and validate a numeric GA4 property ID.
2. Try a measurement ID such as `G-EXAMPLE`, then add the synthetic credential field to see validation errors.
3. Read [selected-source.ts](selected-source.ts), its runnable [JavaScript adaptation](sample.mjs), and [ARCHITECTURE.md](ARCHITECTURE.md).

## Problem and contribution

Growth decisions are harder when analytics, campaign, pipeline and experiment information are scattered, or when an attractive dashboard conceals missing sources. I designed and built a review application that separates available evidence from unavailable integrations and turns configuration and experiment planning into explicit workflows.

The private implementation uses a TypeScript Cloudflare Worker, D1 and an HTML/JavaScript frontend. It persists workspace settings, provider metadata, experiment plans, report widgets, activity and automation drafts. A stored public-website audit supports report review. The assistant retrieves saved evidence deterministically and exposes its sources.

## Selected engineering decision

**Valid configuration is not the same as a connected integration.** Provider metadata has an explicit field allowlist. Unsupported fields, including credential fields, are rejected by this form. Missing metrics stay unavailable rather than being rendered as invented results.

The public sample includes three unconfigured provider definitions and the original provider validator in TypeScript. The JavaScript adaptation removes TypeScript syntax so the same validation can run in a browser without installing dependencies. These definitions describe configuration requirements; they are not live connectors or a general-purpose secret detection system.

| Area | Private review implementation | Public excerpt |
| --- | --- | --- |
| Configuration | Persisted provider metadata and validation | Local validator with three provider definitions |
| Workspaces | Scoped review data with a shared login | No accounts or database |
| Reports | Stored audit and configured report views | Architecture description |
| Experiments | Saved plans and learning notes | Scope description |
| Assistant | Deterministic retrieval from saved evidence | No inference or external calls |
| Campaigns / CRM / AI | Live providers not connected | Explicit unavailable states |
| Automations | Saved drafts | No scheduling or delivery |

## Run the preview

Requires Python 3 for serving files and Node.js 18+ for tests. No package installation or credentials are needed.

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open **http://127.0.0.1:8080**. In a second terminal:

```sh
npm test
```

All example values are synthetic. The preview does not save configuration or connect to providers.

## Outcome and limits

The review app demonstrates persisted workflows and evidence boundaries. It is not presented as a deployed enterprise analytics platform. The shared review login does not provide individual tenant permissions; those require a separate identity and membership layer. No business performance uplift is claimed.

**Skills demonstrated:** growth analytics design, integration architecture, experiment planning, evidence-based reporting, truthful data states and technical marketing workflows.

## Code provenance

`selected-source.ts` extracts the provider validator from `src/configuration.ts`, inspected at commit `e07d772`. `providers.mjs` selects three public field definitions from `src/providers.ts`; the import path is adjusted for this excerpt. `sample.mjs` is a syntax-only JavaScript adaptation. `index.html` and synthetic tests were prepared for this showcase.

No stored audit, company workspace data, review credentials, database IDs, deployment settings or private Git history are included. See [SCOPE.md](SCOPE.md). This showcase is not distributed under an open-source license.

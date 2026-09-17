# Ali Alaraby Portfolio

A content-led professional portfolio for Ali Alaraby, a Senior Backend Engineer. Phases 4–10
established the static architecture, visual system, content-driven homepage, complete case studies,
accessibility and discovery checks, and production-quality budgets, including the approved
downloadable CV.

## Prerequisites

- Node.js 24.20.0 (the supported range is `>=24.16.0 <25`)
- npm 11

Use `nvm use` when nvm is available. npm is the only supported package manager for this repository.

## Installation

```sh
npm ci
```

## Commands

| Command                 | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| `npm run dev`           | Start Astro's local development server      |
| `npm run build`         | Generate the static production artifact     |
| `npm run preview`       | Preview the generated artifact locally      |
| `npm run format`        | Format supported repository files           |
| `npm run format:check`  | Check formatting without changing files     |
| `npm run lint`          | Sync Astro types, then lint source files    |
| `npm run typecheck`     | Run strict Astro and TypeScript diagnostics |
| `npm test`              | Run the focused Vitest suite                |
| `npm run test:a11y`     | Audit the built HTML for accessibility      |
| `npm run test:seo`      | Validate built SEO and discovery metadata   |
| `npm run test:perf`     | Check built asset and page-weight budgets   |
| `npm run test:hygiene`  | Scan built output for secrets/placeholders  |
| `npm run content:check` | Validate content-focused tests              |
| `npm run check`         | Run formatting, lint, types, and tests      |

For local work, run `npm run dev` and use the URL Astro reports. Before review, run
`npm run check && npm run build && npm run test:a11y && npm run test:seo && npm run test:perf && npm run test:hygiene`.

## Structure

- `src/content/pages/` — approved homepage, experience, capability, open-source, and metadata copy
- `src/content/case-studies/` — approved case-study sources, route metadata, and diagram steps
- `src/pages/` — static route shell, including full case-study pages and the sitemap endpoint
- `src/layouts/` and `src/components/` — small semantic application boundaries
- `public/fonts/` — self-hosted IBM Plex webfonts and license
- `public/cv/` — approved downloadable CV asset
- `public/og/` — social share card (PNG) with editable SVG source
- `public/robots.txt` — crawl policy pointing to the sitemap
- `tests/` — content, configuration, and built-output accessibility, SEO, performance, and hygiene tests
- `docs/` — product, evidence, content, architecture, and decision records
- `.github/workflows/quality.yml` — clean-install validation; no deployment

Edit public portfolio wording only in `src/content/`. Internal evidence and review documentation
remain in `docs/` and must not be imported into the public application.

## Current non-goals

This release excludes dark mode, analytics, forms, CMS/backend infrastructure, deployment, and
field performance claims. Accessibility coverage and known limitations are in
[accessibility](docs/accessibility.md); SEO and link verification are in [seo](docs/seo.md). See the
[visual system](docs/visual-system.md),
[technical architecture](docs/technical-architecture.md), and [roadmap](docs/roadmap.md).

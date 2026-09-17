# Ali Alaraby Portfolio

A content-led professional portfolio for Ali Alaraby, a Senior Backend Engineer. Phase 4 establishes
the static application architecture, typed content model, validation, and CI foundation. It does
not implement the final visual system or complete public pages.

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
| `npm run lint`          | Lint JavaScript and TypeScript              |
| `npm run typecheck`     | Run strict Astro and TypeScript diagnostics |
| `npm test`              | Run the focused Vitest suite                |
| `npm run content:check` | Validate content-focused tests              |
| `npm run check`         | Run formatting, lint, types, and tests      |

For local work, run `npm run dev` and use the URL Astro reports. Before review, run
`npm run check && npm run build`.

## Structure

- `src/content/pages/` — approved homepage, experience, capability, open-source, and metadata copy
- `src/content/case-studies/` — approved case-study sources and validated route metadata
- `src/pages/` — minimal static route shell
- `src/layouts/` and `src/components/` — small semantic application boundaries
- `tests/` — content and configuration foundation tests
- `docs/` — product, evidence, content, architecture, and decision records
- `.github/workflows/quality.yml` — clean-install validation; no deployment

Edit public portfolio wording only in `src/content/`. Internal evidence and review documentation
remain in `docs/` and must not be imported into the public application.

## Current non-goals

Phase 4 excludes final visual design, complete homepage and case-study rendering, client-side
interactivity, analytics, forms, CMS/backend infrastructure, final SEO assets, deployment, and
production performance claims. See [technical architecture](docs/technical-architecture.md) and
the [roadmap](docs/roadmap.md).

# Production QA

Phase 10 verification of the static artifact, followed by a Phase 6–10 quality review on
17 September 2026. Local Chromium results are recorded separately from checks that still require a
deployed production environment or WebKit.

## Clean install and full check

- `rm -rf node_modules && npm ci` completes with `found 0 vulnerabilities`.
- `npm run build` emits 5 routes plus `sitemap.xml`, `robots.txt`, the CV, fonts, and the OG card.
- `npm run check` passes: formatting, lint, strict typecheck, and **40 tests across 6 files**, then
  post-build accessibility, SEO, performance, and hygiene suites pass.

## Dependency and security review

- All direct packages are development-only; `dependencies` is empty and no package adds browser
  JavaScript. A reviewed inline enhancement replaces any runtime package or emitted bundle.
- `npm audit` reports no known vulnerabilities; `npm ci` refuses unexpected lockfile drift.
- No secrets, environment files, tokens, or private keys exist in the repository or the output.
  Ignored: `node_modules`, `dist`, `.astro`, coverage, logs, and env files.
- The only email in the output is the owner-approved `alisakralaraby@gmail.com`; no phone number is
  published. `tests/hygiene.test.ts` enforces this.

## Artifact inspection

| Asset           | Files | Raw          | Gzip       | Notes                                    |
| --------------- | ----- | ------------ | ---------- | ---------------------------------------- |
| Client JS files | 0     | 0            | 0          | One inline enhancement; no bundle        |
| Source maps     | 0     | 0            | 0          | None emitted                             |
| CSS             | 1     | 18,228 B     | 4,454 B    | Themes, layout, and restrained motion    |
| Homepage HTML   | 1     | 25,271 B     | 7,776 B    | Largest page; inline enhancement         |
| Case-study HTML | 3     | 20.0–20.7 KB | 6.3–6.5 KB | Full body + metadata                     |
| 404 HTML        | 1     | 7,680 B      | 2,494 B    | `noindex` plus shared enhancement        |
| Web fonts       | 3     | 103,968 B    | n/a        | `woff2`, `font-display: swap`, 1 preload |
| CV PDF          | 1     | 188,124 B    | n/a        | Served only on download                  |
| OG card (PNG)   | 1     | 69,392 B     | n/a        | Referenced from meta, not loaded on page |

Worst-case homepage transfer (HTML + CSS + all fonts) is ~113.5 KB gzip. There are no on-page
content images yet; the portrait placeholder is CSS-rendered. `tests/performance.test.ts` fails if a
future `<img>` is added without intrinsic `width` and `height`.

### Enforced budgets

`tests/performance.test.ts` (run via `npm run test:perf`) fails the build pipeline if any of these
regress:

| Budget                     | Limit        | Actual (worst)   |
| -------------------------- | ------------ | ---------------- |
| JS files / source maps     | 0            | 0                |
| CSS raw / gzip             | 20 KB / 6 KB | 18.2 KB / 4.5 KB |
| HTML raw / gzip (per page) | 28 KB / 9 KB | 25.3 KB / 7.8 KB |
| Font (per file)            | 80 KB        | 69.0 KB          |
| Page weight gzip           | 140 KB       | 113.5 KB         |
| Font preloads per page     | exactly 1    | 1                |
| `@font-face` with `swap`   | all          | 3 of 3           |

The suite also asserts the emitted asset inventory contains only expected routes, one stylesheet,
three fonts, the CV, the OG card, `robots.txt`, and `sitemap.xml`.

## Output hygiene

`tests/hygiene.test.ts` (`npm run test:hygiene`) scans every generated text asset for placeholder
copy, unfinished markers, internal review fields and comments, unapproved review tags, internal
decision/doc references, cloud keys, private keys, provider tokens, credential assignments, bearer
tokens, local development hosts, and phone numbers. All checks pass, and only approved email
addresses may appear.

## Local browser verification

A local production build was served over HTTP and checked in Chromium 140 (Playwright 1.55). The
homepage was visually reviewed at 320×900, 390×844, 768×1024, and 1440×1000; the representative
logistics case study was reviewed at 390×844 and 1440×1000. Navigation wrapped without clipping,
cards and diagrams reflowed into one column, reading measures remained usable, and no visible
horizontal overflow or layout failure was found.

The Phase 11 visual refresh repeated the homepage pass in light and dark modes at 320, 390, 768, and
1440 px. The sticky header, wrapping navigation, 44px theme control, immediate hero rendering,
responsive portrait placement, and dark surfaces remained legible without horizontal overflow. The
initial observer-based hero fade was removed after review so above-the-fold content never waits for
JavaScript or intersection timing.

Lighthouse 12.8.2 desktop runs against `/` and `/work/logistics-platform/` each scored **100** for
Performance, Accessibility, Best Practices, and SEO. Both reported FCP 0.3 s, LCP 0.4 s, CLS 0,
and TBT 0 ms; these results were repeated after the Phase 11 visual refresh. They are repeatable
local-lab results, not production or field-performance claims.

The generated sitemap also passed `xmllint`, and the local server returned successful responses for
the homepage and versioned CV asset.

## Manual checks before launch

These require a real browser and cannot run in CI. They are owner actions for Phase 11, performed
against the preview deployment once it exists.

- **Lighthouse:** run Lighthouse (Chrome DevTools → Lighthouse, or `npx lighthouse <preview-url>
--preset=desktop --view`) on `/` and one case study. Targets: Performance, Accessibility, Best
  Practices, and SEO each 95+.
- **Core Web Vitals:** confirm LCP, INP, and CLS are in the "good" range on a throttled profile;
  LCP should be the text hero, and CLS should be near zero because fonts use `swap` and no images
  lack dimensions.
- **Responsive smoke:** repeat the local responsive review against the deployed preview at 320, 480,
  768, 1024, and 1440 px and exercise the CV and contact actions.
- **Browser smoke:** load `/`, all three case studies, `/404/`, `sitemap.xml`, `robots.txt`, and the
  CV download on the deployed preview in Chromium and WebKit. Local Chromium rendering is already
  covered; WebKit and deployment behavior remain outstanding.

## Known limitations and blockers

- Local Lighthouse scores are measured lab results only. Production Lighthouse and field Core Web
  Vitals remain unmeasured until a preview or production deployment exists.
- WebKit, live-link, and deployed responsive checks remain Phase 11 launch work.
- The production domain is not serving until Phase 11; canonical and sitemap URLs are correct but
  will only resolve after deployment.
- No code-side launch blockers remain from Phase 10.

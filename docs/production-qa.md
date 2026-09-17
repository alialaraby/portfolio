# Production QA

Phase 10 verification of the static artifact. Everything below was measured on the committed build
on 17 September 2026; unverifiable browser checks are listed as owner actions rather than claims.

## Clean install and full check

- `rm -rf node_modules && npm ci` completes with `found 0 vulnerabilities`.
- `npm run build` emits 5 routes plus `sitemap.xml`, `robots.txt`, the CV, fonts, and the OG card.
- `npm run check` passes: formatting, lint, strict typecheck, and **38 tests across 6 files**, then
  post-build accessibility, SEO, performance, and hygiene suites pass.

## Dependency and security review

- All direct packages are development-only; `dependencies` is empty and no package adds browser
  JavaScript. Versions are exact and locked with a committed `package-lock.json`.
- `npm audit` reports no known vulnerabilities; `npm ci` refuses unexpected lockfile drift.
- No secrets, environment files, tokens, or private keys exist in the repository or the output.
  Ignored: `node_modules`, `dist`, `.astro`, `.vercel`, coverage, logs, and env files.
- The only email in the output is the owner-approved `alisakralaraby@gmail.com`; no phone number is
  published. `tests/hygiene.test.ts` enforces this.

## Artifact inspection

| Asset           | Files | Raw          | Gzip    | Notes                                    |
| --------------- | ----- | ------------ | ------- | ---------------------------------------- |
| Client JS       | 0     | 0            | 0       | No scripts except JSON-LD                |
| Source maps     | 0     | 0            | 0       | None emitted                             |
| CSS             | 1     | 12,044 B     | 3,105 B | Single hashed stylesheet                 |
| Homepage HTML   | 1     | 20,355 B     | 6,269 B | Largest page                             |
| Case-study HTML | 3     | 15.5–16.2 KB | ~5.0 KB | Full body + metadata                     |
| 404 HTML        | 1     | 3,318 B      | 1,135 B | `noindex`                                |
| Web fonts       | 3     | 103,968 B    | n/a     | `woff2`, `font-display: swap`, 1 preload |
| CV PDF          | 1     | 188,124 B    | n/a     | Served only on download                  |
| OG card (PNG)   | 1     | 69,392 B     | n/a     | Referenced from meta, not loaded on page |

Worst-case homepage transfer (HTML + CSS + all fonts) is ~110.7 KB gzip. There are no on-page
images, so no unsized-media layout shift is possible; `tests/performance.test.ts` fails if an
`<img>` is ever added without `width` and `height`.

### Enforced budgets

`tests/performance.test.ts` (run via `npm run test:perf`) fails the build pipeline if any of these
regress:

| Budget                     | Limit        | Actual (worst)   |
| -------------------------- | ------------ | ---------------- |
| Client JS / source maps    | 0            | 0                |
| CSS raw / gzip             | 16 KB / 5 KB | 12.0 KB / 3.1 KB |
| HTML raw / gzip (per page) | 24 KB / 7 KB | 20.4 KB / 6.3 KB |
| Font (per file)            | 80 KB        | 69.0 KB          |
| Page weight gzip           | 140 KB       | 110.7 KB         |
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

## Manual checks before launch

These require a real browser and cannot run in CI. They are owner actions for Phase 11, performed
against the preview deployment once it exists.

- **Lighthouse:** run Lighthouse (Chrome DevTools → Lighthouse, or `npx lighthouse <preview-url>
--preset=desktop --view`) on `/` and one case study. Targets: Performance, Accessibility, Best
  Practices, and SEO each 95+.
- **Core Web Vitals:** confirm LCP, INP, and CLS are in the "good" range on a throttled profile;
  LCP should be the text hero, and CLS should be near zero because fonts use `swap` and no images
  lack dimensions.
- **Responsive smoke:** at 320, 480, 768, 1024, and 1440 px, confirm the header wraps without
  overflow, reading width stays comfortable, no horizontal scrollbar appears, and the CV and contact
  actions work.
- **Browser smoke:** load `/`, all three case studies, `/404/`, `sitemap.xml`, `robots.txt`, and the
  CV download in at least one Chromium and one WebKit browser.

## Known limitations and blockers

- Lighthouse scores and Core Web Vitals are targets, not measured results, until the preview
  deployment exists; no browser is available in this environment.
- Browser and responsive smoke testing is likewise deferred to Phase 11 against a live preview.
- The production domain is not serving until Phase 11; canonical and sitemap URLs are correct but
  will only resolve after deployment.
- No code-side launch blockers remain from Phase 10.

# Portfolio Roadmap

Status values: `Not started`, `In progress`, `Blocked`, `Complete`.

Only change a phase to `Complete` after its acceptance criteria pass. Each implementation phase should use a focused branch and pull request.

## Phase overview

| Phase                                               | Status      |
| --------------------------------------------------- | ----------- |
| Phase 0 — Repository bootstrap                      | Not started |
| Phase 1 — CV, evidence, and repository audit        | Complete    |
| Phase 2 — Positioning and content strategy          | Complete    |
| Phase 3 — Case-study and page copy                  | Complete    |
| Phase 4 — Technical architecture and foundation     | Complete    |
| Phase 5 — Visual system and responsive shell        | Complete    |
| Phase 6 — Core portfolio experience                 | Complete    |
| Phase 7 — Case studies and technical storytelling   | Complete    |
| Phase 8 — Accessibility and interaction hardening   | Complete    |
| Phase 9 — SEO, sharing, and professional discovery  | Complete    |
| Phase 10 — Performance, security, and production QA | Complete\*  |
| Phase 11 — Deployment and launch readiness          | In progress |

\* Phase 10 artifact and local Chromium checks are complete; deployed and WebKit smoke testing is
deferred to the Phase 11 GitHub Pages launch.

## Progress summary

- **Current phase:** Phase 11 is in progress. The manually authorized GitHub Pages workflow and
  owner launch runbook are ready; repository settings and the first deployment remain owner actions.
- **Completed:** Phases 1 through 10.
- **Next milestone:** merge the reviewed Phase 11 changes, enable GitHub Actions as the Pages source,
  run the manual deployment, verify it, then configure the production domain.
- **Governance note:** `AGENTS.md` is not present in the repository; Phase 0 remains unchanged.

## Phase 0 — Repository bootstrap

**Status:** Not started

Establish the new repository, add the approved governance and planning files, confirm Git and GitHub policies, and document the initial environment.

Acceptance criteria:

- repository exists with `main` as the protected default branch
- `AGENTS.md`, `REQUIREMENTS.md`, and `ROADMAP.md` are reviewed and committed
- branch/PR workflow is usable
- secrets and generated output are ignored
- repository purpose and ownership are clear

## Phase 1 — CV, evidence, and repository audit

**Status:** Complete

Use the approved CV as the career baseline, then inspect the GitHub repositories and public sources Ali explicitly permits. Build a reliable inventory of roles, projects, responsibilities, engineering capabilities, measurable outcomes, and publishable evidence. Private employer work may be supported by the CV and owner confirmation without exposing its source. Do not implement the website.

Acceptance criteria:

- [x] CV roles, dates, titles, domains, skills, and metrics are extracted into a structured baseline
- [x] relevant repositories are inventoried and classified by ownership, visibility, relevance, and publication risk
- [x] CV claims are reconciled with repository evidence and public sources without treating repository access as publication permission; pending owner confirmation is explicit
- [x] strong portfolio candidates are ranked, beginning with Madar, DebtBox, `saudi-utils`, and one safely publishable ArabDT story
- [x] claims are mapped to their exact evidence source and confidence in `content-evidence.md`
- [x] the audit distinguishes confirmed facts, reasonable inferences, and owner-confirmation requirements
- [x] confidentiality risks and missing context are recorded
- [x] private-system experience is converted into safe candidate narratives rather than omitted or exposed
- [x] exact metrics, partner names, government integrations, location, contact details, and availability are flagged for publication approval
- [x] owner questions are concise and prioritized
- [x] no site implementation or design selection occurs

Evidence of completion:

- [Phase 1 evidence audit](evidence-audit.md)
- [Atomic content evidence register](content-evidence.md)
- [Prioritized open questions](open-questions.md)
- [Portfolio requirements and CV-derived baseline constraints](requirements.md)
- Commit `b73d7ab` contains the Phase 1 deliverables on `main`; no Phase 1 pull request exists in the
  GitHub repository.

## Phase 2 — Positioning and content strategy

**Status:** Complete

Turn the approved evidence into professional positioning, audience priorities, information architecture, and a content plan.

Acceptance criteria:

- [x] primary positioning as a Senior Backend Engineer with 6+ years of experience is selected
- [x] audience and conversion goals are explicit
- [x] sitemap/section structure is decided
- [x] project selection, order, disclosure level, and case-study depth are decided
- [x] the content strategy balances recruiter scanning with deeper engineering evidence
- [x] engineering capabilities are grouped around outcomes such as architecture, performance, integrations, data, reliability, and production ownership rather than a flat technology list
- [x] content gaps are assigned to owner or future work

Evidence of completion:

- [Content strategy](content-strategy.md)
- [Information architecture](information-architecture.md)
- [Content inventory](content-inventory.md)
- [Decision log](decisions.md)
- [Evidence register](content-evidence.md) and [reclassified owner questions](open-questions.md)

## Phase 3 — Case-study and page copy

**Status:** Complete

Write concise, human-sounding site copy and evidence-backed case studies before visual implementation.

Acceptance criteria:

- [x] all launch-page copy is drafted
- [x] three case studies follow a consistent problem, ownership, constraints, decisions, implementation, and outcome structure
- [x] quantitative claims preserve their approved scope and attribution
- [x] Madar and DebtBox content passes an explicit confidentiality and publication review
- [x] `saudi-utils` links to public npm and GitHub evidence and explains what its engineering quality demonstrates
- [x] technical claims are understandable outside the original team
- [x] confidentiality review passes
- [x] Ali's publication decisions are recorded and reflected in the copy

Evidence of completion:

- [Homepage copy](../src/content/pages/home.md)
- [Experience copy](../src/content/pages/experience.md)
- [Capabilities copy](../src/content/pages/capabilities.md)
- [Open-source copy](../src/content/pages/open-source.md)
- [Madar case study](../src/content/case-studies/logistics-platform.md)
- [DebtBox case study](../src/content/case-studies/fintech-product.md)
- [`saudi-utils` case study](../src/content/case-studies/saudi-utils.md)
- [Page metadata copy](../src/content/pages/page-metadata.md)
- [Phase 3 content review](content-review.md)

## Phase 4 — Technical architecture and project foundation

**Status:** Complete

Select the smallest suitable stack and establish the application, tooling, CI, content model, and deployment-compatible structure.

Acceptance criteria:

- [x] architecture decision is recorded
- [x] clean install, lint, format, typecheck, test, and build scripts exist
- [x] CI covers supported runtime versions
- [x] content is maintainable without unnecessary infrastructure
- [x] dependency and security baseline passes

Evidence of completion:

- [Architecture decision D009](decisions.md#d009--static-application-architecture-and-project-foundation)
- [Technical architecture](technical-architecture.md)
- Application and content configuration: `astro.config.ts`, `tsconfig.json`, and
  `src/content.config.ts`
- Static shell and route generation: `src/pages/index.astro`, `src/pages/work/[slug].astro`, and
  `src/pages/404.astro`
- Quality and test configuration: `eslint.config.js`, `tests/content.test.ts`,
  `tests/config.test.ts`, and `.github/workflows/quality.yml`
- Clean `npm ci`; format, lint, strict typecheck, 5 tests, content validation, combined check, and
  five-route production build passed locally on Node.js 24.20.0 and npm 11.19.0.
- `npm audit` reported zero known vulnerabilities after the vulnerable optional Markdown linter was
  removed. Production output inspection found no source maps, secrets, internal review notes, or
  unexpected assets.
- Remote GitHub Actions execution remains an owner verification action after later commit and push,
  because this phase explicitly prohibited both.

## Phase 5 — Visual system and responsive shell

**Status:** Complete

Create the restrained visual language and reusable responsive page shell.

Acceptance criteria:

- [x] typography, color, spacing, layout, and component tokens are documented
- [x] navigation, footer, buttons, links, cards, and content widths are consistent
- [x] shell works at mobile, tablet, and desktop widths
- [x] keyboard and reduced-motion basics pass
- [x] visual review artifacts are included for owner review

Evidence of completion:

- [Visual-system specification](visual-system.md) and [decision D010](decisions.md#d010--editorial-technical-visual-system)
- Shared shell and primitives in `src/layouts/BaseLayout.astro` and `src/components/`
- Design tokens, responsive layouts, focus treatment, and reduced-motion behavior in
  `src/styles/global.css`
- Self-hosted IBM Plex assets and license in `public/fonts/ibm-plex/`
- [Viewport review notes and screenshots](visual-review/phase-5/README.md)
- Clean install, formatting, lint, strict typecheck, tests, content validation, production build,
  output inspection, and dependency audit passed locally on the declared Node.js/npm versions.
- Remote CI and pull-request review remain owner actions because this phase is left uncommitted and
  unpushed.

## Phase 6 — Core portfolio experience

**Status:** Complete

Implement the approved home/about, experience, capabilities, selected work, open-source, and contact content.

Acceptance criteria:

- [x] approved content is implemented without placeholders
- [x] hierarchy supports fast recruiter scanning and deeper technical reading
- [x] CV and external links work — approved external links and the versioned CV download are linked
      from the hero, experience, contact, and footer
- [x] projects clearly distinguish role, decisions, and evidence
- [x] the site presents production ownership, performance work, integrations, data systems, observability, and infrastructure in context rather than as keyword lists
- [x] location, availability, contact details, and downloadable CV match the latest approved information
- [x] primary responsive and interaction checks pass

Evidence of completion:

- Content-driven homepage implementation in `src/pages/index.astro`
- Validated first-person homepage content, including the `cv` asset path, in `src/content/pages/home.md`
- [First-person voice decision D011](decisions.md#d011--direct-first-person-portfolio-voice)
- [Phase 6 content review](content-review.md#phase-6-voice-and-implementation-review)
- Approved downloadable CV at `/cv/ali-alaraby-senior-backend-engineer-2026.pdf`; its link is verified
  in the generated production output
- Responsive mobile and desktop visual inspection; five-route static production build

## Phase 7 — Case studies and technical storytelling

**Status:** Complete

Implement detailed case-study views and any necessary diagrams or sanitized visuals.

Acceptance criteria:

- [x] selected case studies are complete and linkable
- [x] diagrams are accurate, legible, and non-confidential
- [x] code or screenshots are included only when useful and authorized
- [x] each case study has meaningful metadata and navigation
- [x] no inaccessible or misleading source links exist

Evidence of completion:

- [Case-study presentation decision D012](decisions.md#d012--case-study-presentation-and-diagram-standard)
- Full body rendering, metadata panel, previous/next navigation, and public-link actions in
  `src/pages/work/[slug].astro`
- Content-driven, evidence-bounded diagrams via `src/components/FlowDiagram.astro` and validated
  `diagram` frontmatter
- Validated `project`, `role`, `timeline`, and non-rendered `internalReview` fields in
  `src/content/schema.ts` and the three case-study sources
- Content tests covering metadata, unique routes and orders, diagram steps, and approved link hosts
- Production build renders all three case studies with one `<h1>` each and no internal review notes

## Phase 8 — Accessibility and interaction hardening

**Status:** Complete

Test and improve semantics, keyboard behavior, focus, contrast, motion, zoom, and assistive-technology basics.

Acceptance criteria:

- [x] automated accessibility checks pass
- [x] manual keyboard flow passes
- [x] 200% zoom and representative responsive widths remain usable
- [x] focus and reduced-motion behavior are verified
- [x] known limitations are documented

Evidence of completion:

- [Accessibility tooling decision D013](decisions.md#d013--accessibility-verification-tooling)
- [Accessibility verification record](accessibility.md) with method, contrast ratios, keyboard flow,
  focus and reduced-motion behavior, zoom, and known limitations
- `tests/accessibility.test.ts` runs `axe-core` against every built page in `jsdom` with zero
  violations and asserts a single `<main>`, a single `<h1>`, and a working skip link per page
- `npm run test:a11y` added and wired into CI as a post-build step in `.github/workflows/quality.yml`
- Dark-footer focus outline moved to `#f4a259` (8.00:1 on ink) because the global `#b44600` reached
  only 3.00:1 there; all documented token contrast pairs meet WCAG 2.2 AA
- `npm run check`, the production build, and `npm run test:a11y` pass with no new runtime dependency

## Phase 9 — SEO, sharing, and professional discovery

**Status:** Complete

Implement search metadata, social presentation, structured data, sitemap, robots policy, and discoverability checks.

Acceptance criteria:

- [x] unique titles and descriptions exist
- [x] canonical, Open Graph, and social images are correct
- [x] sitemap and robots behavior are validated
- [x] structured data is valid and honest
- [x] GitHub, LinkedIn, CV, email, and project URLs are verified

Evidence of completion:

- [SEO and discovery decision D014](decisions.md#d014--seo-social-metadata-and-discovery-strategy)
- [SEO verification record](seo.md) with the per-route metadata map, social card, structured data,
  sitemap/robots behavior, link checks, and known limitations
- Domain, locale, and OG image recorded once in `src/config/site.ts` and `astro.config.ts`
- Canonical, Open Graph, and Twitter metadata emitted from `src/layouts/BaseLayout.astro`
- Dependency-free `src/pages/sitemap.xml.ts` endpoint (homepage plus three case studies, no 404) and
  `public/robots.txt`
- Per-page JSON-LD validated by `tests/seo.test.ts`; committed 1200×630 share card with editable SVG
  source in `public/og/`
- `tests/seo.test.ts` (5 tests) and `npm run test:seo` added; wired into CI after the build

## Phase 10 — Performance, security, and production QA

**Status:** Complete (deployment and WebKit checks deferred to Phase 11)

Test the production artifact and close launch blockers.

Acceptance criteria:

- [x] clean install and full check suite pass
- [x] dependency/security review passes with no unexplained finding
- [x] asset, bundle, and route behavior are inspected
- [x] performance is measured via enforced artifact budgets and local Lighthouse; production field
      Core Web Vitals remain a launch check
- [x] local Chromium/responsive smoke testing passes; deployed and WebKit coverage remains Phase 11
- [x] no secrets, internal references, or placeholders are present

Evidence of completion:

- [Production QA decision D015](decisions.md#d015--performance-budgets-and-output-hygiene-in-ci)
- [Production QA record](production-qa.md) with clean-install results, dependency review, measured
  artifact sizes, enforced budgets, hygiene results, and the manual launch checklist
- `rm -rf node_modules && npm ci`, `npm run build`, and `npm run check` (38 tests across 6 files)
  pass with `npm audit` reporting no vulnerabilities
- `tests/performance.test.ts` (6 tests) enforces zero JS, no source maps, CSS/HTML/font/page-weight
  budgets, one font preload, `font-display: swap`, a fixed asset inventory, and sized images
- `tests/hygiene.test.ts` (16 tests) scans the output for secrets, credentials, placeholders,
  internal references, dev hosts, and non-approved emails
- `npm run test:perf` and `npm run test:hygiene` added and wired into CI after the build
- Local Chromium visual review at 320, 390, 768, and 1440 px plus Lighthouse desktop runs on the
  homepage and a representative case study; both Lighthouse runs scored 100 in every category

## Phase 11 — Deployment and launch readiness

**Status:** In progress

Prepare and verify GitHub Pages deployment, domain behavior, release documentation, rollback, and
post-launch checks.

Acceptance criteria:

- [x] local production output and pull-request quality gates provide the pre-deployment review;
      GitHub Pages does not provide a separate native preview environment
- [x] environment and domain configuration are documented
- [ ] production URL, redirects, metadata, CV download, and contact paths work
- [x] rollback path is documented
- [ ] launch checklist passes
- [x] no deployment occurs without explicit owner authorization

Evidence in progress:

- Manually dispatched `.github/workflows/pages.yml` builds, revalidates, uploads, and deploys the
  site using immutable pins for GitHub's official Pages actions
- `public/CNAME` carries the approved apex domain in the generated artifact
- [GitHub Pages setup, domain, launch-verification, and rollback runbook](deployment.md)
- Current-state check confirmed that the production domain does not yet return public A or CNAME
  records; repository settings and DNS remain owner actions

## Post-launch backlog

Potential work only after launch evidence justifies it:

- Arabic version
- privacy-conscious analytics
- technical articles
- additional case studies
- testimonials with explicit permission
- automated link and Lighthouse monitoring
- dark theme

## Progress log

- **17 September 2026 — Phase 1 reconciled:** confirmed all audit acceptance criteria against the
  committed evidence audit, claim register, question register, requirements, repository inventory,
  privacy review, and commit history. Reclassified unresolved publication inputs as non-blocking for
  strategy. Marked Phase 1 `Complete`.
- **17 September 2026 — Phase 2 completed:** selected positioning, audiences, proof pillars, three
  launch stories, conversion strategy, focused homepage-plus-case-studies architecture, content
  model, channel responsibilities, and owner-gated publication boundaries. No Phase 3 copy or site
  implementation was started.
- **17 September 2026 — Phase 3 blocked at prerequisite review:** confirmed Phases 1 and 2 and their
  deliverables are complete, then stopped before drafting because required identity and private-work
  claims remain unapproved and the latest approved CV is unavailable. The sole phase blocker is
  owner content and publication approval.
- **17 September 2026 — Phase 3 completed:** recorded the owner's CV, identity, contact, location,
  Madar, DebtBox, and metric approvals; produced final homepage, experience, capabilities,
  open-source, case-study, and metadata copy; completed claim traceability, privacy, consistency,
  and human-quality review. Phase 4 remains `Not started`.
- **17 September 2026 — Phase 4 completed:** selected Astro static output after comparing Astro,
  React/Vite, and Next.js; moved approved copy into typed local content collections; added the
  minimal semantic route shell, strict TypeScript, formatting, linting, tests, deterministic npm
  installs, pinned read-only CI, and architecture documentation. Local clean-install, validation,
  build, audit, output inspection, workflow, link, and Git checks passed. Phase 5 remains
  `Not started`.
- **17 September 2026 — Phase 5 completed:** established the light editorial-technical visual
  system, self-hosted IBM Plex typography, responsive zero-JavaScript navigation and shell,
  documented tokens and component conventions, accessible focus/reduced-motion foundations, and
  mobile/tablet/desktop review artifacts. Full homepage and case-study composition remain deferred;
  Phase 6 is next.
- **17 September 2026 — Phase 6 implementation in progress:** replaced the visual preview with the
  content-driven homepage, revised public summaries into a direct first-person voice, and implemented
  proof, about, work, capabilities, experience, open-source, and contact sections. Responsive review
  passed. Phase 6 remains open only because the approved downloadable CV has not been supplied.
- **17 September 2026 — Phase 6 completed:** the approved versioned CV
  (`/cv/ali-alaraby-senior-backend-engineer-2026.pdf`) was supplied and wired into the validated
  homepage `cv` field. Download actions now appear in the hero, experience note, contact panel, and
  footer. The pending-note placeholder was removed, metadata and roadmap records were updated, and
  format, lint, strict typecheck, tests, and the five-route production build passed. Phase 6 is
  `Complete`; Phase 7 is next.
- **17 September 2026 — Phase 7 completed:** rendered all three approved case studies as full pages
  with validated `project`, `role`, `timeline`, and evidence-bounded `diagram` metadata, previous/next
  navigation, and public-link actions for `saudi-utils`. Internal review notes moved from HTML
  comments (which the new Markdown processor emitted verbatim) into a validated, non-rendered
  `internalReview` frontmatter field. Added content tests for metadata, unique routes and orders,
  diagram steps, and approved link hosts. Format, lint, strict typecheck, tests, and the five-route
  production build passed; the built output contains no internal review notes. Phase 7 is `Complete`;
  Phase 8 is next.
- **17 September 2026 — Phase 8 completed:** added dev-only `axe-core` and `jsdom` and a new
  `tests/accessibility.test.ts` that audits every built page with zero axe violations and asserts a
  single `<main>`, single `<h1>`, and a skip link targeting that main. Added `npm run test:a11y` and
  a post-build CI step; documented method, measured token contrast, keyboard flow, focus,
  reduced-motion, zoom, and known limitations in `docs/accessibility.md`; recorded decision D013.
  Moved the dark-footer focus outline to `#f4a259` for 8.00:1 (the global `#b44600` reached only
  3.00:1 on ink). Format, lint, strict typecheck, tests, the five-route production build, and the
  accessibility audit passed. Phase 8 is `Complete`; Phase 9 is next.
- **17 September 2026 — Phase 9 completed:** recorded the approved domain and OG image in
  `src/config/site.ts` and `astro.config.ts`; added canonical, Open Graph, and Twitter metadata plus
  per-page JSON-LD (`ProfilePage`/`Person`, `TechArticle`, `BreadcrumbList`) to `BaseLayout.astro`;
  added a dependency-free `sitemap.xml` endpoint and `robots.txt`; marked the 404 `noindex`; added a
  committed 1200×630 share card with SVG source; and added `tests/seo.test.ts` (5 tests) plus
  `npm run test:seo` as a post-build CI step. Documented method, link checks, and limitations in
  `docs/seo.md`; recorded decision D014. Format, lint, strict typecheck, tests, the five-route
  production build, the accessibility audit, and the SEO validation passed. Phase 9 is `Complete`;
  Phase 10 is next.
- **17 September 2026 — Phase 10 completed (browser checks deferred):** re-ran a clean
  `rm -rf node_modules && npm ci` with zero vulnerabilities, then the build and the full 38-test
  check suite. Added `tests/performance.test.ts` (6 tests) enforcing zero client JS, no source maps,
  CSS/HTML/font/page-weight budgets, one font preload, `font-display: swap`, a fixed asset inventory,
  and sized images; added `tests/hygiene.test.ts` (16 tests) scanning the output for secrets,
  credentials, placeholders, internal references, dev hosts, and non-approved emails; added
  `npm run test:perf` and `npm run test:hygiene` as post-build CI steps. Measured the artifact
  (~110.7 KB worst-case gzip page, zero JS) and recorded the dependency review, budgets, and manual
  launch checklist in `docs/production-qa.md`; recorded decision D015. Lighthouse/Core Web Vitals and
  browser/responsive smoke testing are documented as Phase 11 owner actions because no browser is
  available here. Phase 10 artifact work is `Complete`; Phase 11 is next.
- **17 September 2026 — Phases 6–10 quality review:** fixed clean-checkout sitemap linting by running
  `astro sync` automatically before ESLint; re-ran all 38 tests and the built-output accessibility,
  SEO, performance, and hygiene suites; reviewed the homepage and representative case study in local
  Chromium at mobile, tablet, and desktop widths; and validated the sitemap XML and CV response.
  Lighthouse desktop runs on the homepage and logistics case study scored 100 for Performance,
  Accessibility, Best Practices, and SEO. Updated Phase 10 records to distinguish this local lab
  evidence from the remaining deployed, WebKit, live-link, and field-performance checks.
- **17 September 2026 — Phase 11 started:** created `feat/phase-11-deployment-launch` from current
  `main`; added a manually authorized GitHub Pages workflow, custom-domain artifact, and
  deployment/domain/rollback runbook. Confirmed that no environment variables or repository secrets
  are required and the approved domain has no public A or CNAME response yet. Repository settings,
  the first deployment, DNS, and HTTPS remain explicit owner actions.

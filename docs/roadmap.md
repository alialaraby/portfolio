# Portfolio Roadmap

Status values: `Not started`, `In progress`, `Blocked`, `Complete`.

Only change a phase to `Complete` after its acceptance criteria pass. Each implementation phase should use a focused branch and pull request.

## Phase overview

| Phase                                           | Status      |
| ----------------------------------------------- | ----------- |
| Phase 0 — Repository bootstrap                  | Not started |
| Phase 1 — CV, evidence, and repository audit    | Complete    |
| Phase 2 — Positioning and content strategy      | Complete    |
| Phase 3 — Case-study and page copy              | Complete    |
| Phase 4 — Technical architecture and foundation | Complete    |
| Phases 5–11                                     | Not started |

## Progress summary

- **Current phase:** Phase 4 completed; work stops before Phase 5.
- **Completed:** Phases 1, 2, 3, and 4.
- **Next phase:** Phase 5 — Visual system and responsive shell.
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

**Status:** Not started

Create the restrained visual language and reusable responsive page shell.

Acceptance criteria:

- typography, color, spacing, layout, and component tokens are documented
- navigation, footer, buttons, links, cards, and content widths are consistent
- shell works at mobile, tablet, and desktop widths
- keyboard and reduced-motion basics pass
- visual review artifacts are included in the PR

## Phase 6 — Core portfolio experience

**Status:** Not started

Implement the approved home/about, experience, capabilities, selected work, open-source, and contact content.

Acceptance criteria:

- approved content is implemented without placeholders
- hierarchy supports fast recruiter scanning and deeper technical reading
- CV and external links work
- projects clearly distinguish role, decisions, and evidence
- the site presents production ownership, performance work, integrations, data systems, observability, and infrastructure in context rather than as keyword lists
- location, availability, contact details, and downloadable CV match the latest approved information
- primary responsive and interaction tests pass

## Phase 7 — Case studies and technical storytelling

**Status:** Not started

Implement detailed case-study views and any necessary diagrams or sanitized visuals.

Acceptance criteria:

- selected case studies are complete and linkable
- diagrams are accurate, legible, and non-confidential
- code or screenshots are included only when useful and authorized
- each case study has meaningful metadata and navigation
- no inaccessible or misleading source links exist

## Phase 8 — Accessibility and interaction hardening

**Status:** Not started

Test and improve semantics, keyboard behavior, focus, contrast, motion, zoom, and assistive-technology basics.

Acceptance criteria:

- automated accessibility checks pass
- manual keyboard flow passes
- 200% zoom and representative responsive widths remain usable
- focus and reduced-motion behavior are verified
- known limitations are documented

## Phase 9 — SEO, sharing, and professional discovery

**Status:** Not started

Implement search metadata, social presentation, structured data, sitemap, robots policy, and discoverability checks.

Acceptance criteria:

- unique titles and descriptions exist
- canonical, Open Graph, and social images are correct
- sitemap and robots behavior are validated
- structured data is valid and honest
- GitHub, LinkedIn, CV, email, and project URLs are verified

## Phase 10 — Performance, security, and production QA

**Status:** Not started

Test the production artifact and close launch blockers.

Acceptance criteria:

- clean install and full check suite pass
- dependency/security review passes with no unexplained finding
- asset, bundle, and route behavior are inspected
- performance targets are measured on representative pages
- browser/responsive smoke testing passes
- no secrets, internal references, or placeholders are present

## Phase 11 — Deployment and launch readiness

**Status:** Not started

Prepare and verify Vercel deployment, domain behavior, release documentation, rollback, and post-launch checks.

Acceptance criteria:

- preview deployment is reviewed before production
- environment and domain configuration are documented
- production URL, redirects, metadata, CV download, and contact paths work
- rollback path is documented
- launch checklist passes
- no deployment occurs without explicit owner authorization

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

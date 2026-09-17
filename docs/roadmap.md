# Portfolio Roadmap

Status values: `Not started`, `In progress`, `Blocked`, `Complete`.

Only change a phase to `Complete` after its acceptance criteria pass. Each implementation phase should use a focused branch and pull request.

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

**Status:** In progress

Use the approved CV as the career baseline, then inspect the GitHub repositories and public sources Ali explicitly permits. Build a reliable inventory of roles, projects, responsibilities, engineering capabilities, measurable outcomes, and publishable evidence. Private employer work may be supported by the CV and owner confirmation without exposing its source. Do not implement the website.

Acceptance criteria:

- CV roles, dates, titles, domains, skills, and metrics are extracted into a structured baseline
- relevant repositories are inventoried and classified by ownership, visibility, relevance, and publication risk
- CV claims are reconciled with repository evidence, public sources, and owner confirmation without treating repository access as publication permission
- strong portfolio candidates are ranked, beginning with Madar, DebtBox, `saudi-utils`, and one safely publishable ArabDT story
- claims are mapped to their exact evidence source and confidence in `content-evidence.md`
- the audit distinguishes confirmed facts, reasonable inferences, and owner-confirmation requirements
- confidentiality risks and missing context are recorded
- private-system experience is converted into safe candidate narratives rather than omitted or exposed
- exact metrics, partner names, government integrations, location, contact details, and availability are flagged for publication approval
- owner questions are concise and prioritized
- no site implementation or design selection occurs

## Phase 2 — Positioning and content strategy

**Status:** Blocked

**Blockers:** Phase 1 remains `In progress`, so its evidence has not reached the approved baseline
required for responsible positioning decisions. The latest approved CV is not present in this
repository, Phase 1 acceptance criteria do not have recorded completion evidence, and the blocking
ownership, metric, confidentiality, location, and contact questions in
[`open-questions.md`](open-questions.md) remain unresolved. In particular, public positioning cannot
yet safely rely on Madar or DebtBox ownership boundaries, production metrics, product naming, or
disclosure scope. Phase 2 must not begin until Phase 1 is marked `Complete`, its completion evidence
is linked, and the Phase 1 status agrees across the roadmap summary and detailed status.

Turn the approved evidence into professional positioning, audience priorities, information architecture, and a content plan.

Acceptance criteria:

- primary positioning as a Senior Backend Engineer with 6+ years of experience is reviewed and approved
- audience and conversion goals are explicit
- sitemap/section structure is decided
- project selection, order, disclosure level, and case-study depth are approved
- the content strategy balances recruiter scanning with deeper engineering evidence
- engineering capabilities are grouped around outcomes such as architecture, performance, integrations, data, reliability, and production ownership rather than a flat technology list
- content gaps are assigned to owner or future work

## Phase 3 — Case-study and page copy

**Status:** Not started

Write concise, human-sounding site copy and evidence-backed case studies before visual implementation.

Acceptance criteria:

- all launch-page copy is drafted
- 3–5 case studies follow a consistent problem, ownership, constraints, decisions, implementation, and outcome structure
- quantitative claims preserve their approved scope and attribution
- Madar and DebtBox content passes an explicit confidentiality and publication review
- `saudi-utils` links to public npm and GitHub evidence and explains what its engineering quality demonstrates
- technical claims are understandable outside the original team
- confidentiality review passes
- Ali approves publishable content

## Phase 4 — Technical architecture and project foundation

**Status:** Not started

Select the smallest suitable stack and establish the application, tooling, CI, content model, and deployment-compatible structure.

Acceptance criteria:

- architecture decision is recorded
- clean install, lint, format, typecheck, test, and build scripts exist
- CI covers supported runtime versions
- content is maintainable without unnecessary infrastructure
- dependency and security baseline passes

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

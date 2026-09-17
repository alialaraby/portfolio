# Phase 2 Information Architecture

Decision date: 17 September 2026

## Recommended site model

Use a **focused single-page portfolio with separate case-study routes**. The homepage supplies the
15–30 second recruiter scan and a complete high-level narrative. Case-study routes give engineering
managers enough room for decisions, constraints, evidence, and trade-offs without making the main
page dense.

This model is easier to maintain than a broad multi-page site, supports focused project SEO and
link sharing, and preserves accessible linear reading. A single-page-only site would compress or
hide technical depth. A fully multi-page site would fragment a modest launch content set and add
navigation and maintenance cost without improving the evidence.

Private professional stories can use the same routes with generalized titles and content. Public
URLs must not encode confidential client, provider, or internal system names.

## Alternatives considered

1. **Focused homepage plus case studies — selected.** Best balance of fast scanning, technical
   depth, SEO, maintainability, accessibility, and future growth.
2. **Fully multi-page portfolio — rejected for launch.** Useful at a larger content volume, but it
   currently spreads a focused narrative across unnecessary About, Experience, Work, and Skills
   pages.
3. **Single-page only — rejected.** Simple, but detailed case studies would either overwhelm the
   homepage or lose the decisions and evidence technical reviewers need.

## Route map

- `/` — positioning, proof, selected work, experience, capabilities, open source, and contact.
- `/work/logistics-platform` — Madar story under a generalized slug unless naming is approved.
- `/work/fintech-product` — DebtBox story under a generalized slug unless naming is approved.
- `/work/saudi-utils` — public open-source case study.
- `/cv/ali-alaraby-cv.pdf` — versioned downloadable CV asset once approved.
- External contextual destinations — LinkedIn, GitHub, npm, and approved public project links.

Do not create empty routes for About, Skills, Blog, Contact, or a project archive at launch. A
future `/work` index is justified only when more than four publishable stories exist.

## Navigation model

Primary navigation uses in-page links to `Work`, `Experience`, `Capabilities`, and `Contact`.
`CV` is a clearly labelled download/view action. The name or wordmark returns to the homepage.
Case-study pages use a compact header with `Home`, `Selected work`, `CV`, and `Contact`, followed by
previous/next related work links where meaningful.

External links must be identified in accessible names or surrounding text. In-page anchors should
land below any sticky header and preserve visible focus.

## Homepage section hierarchy

### 1. Hero and professional position

- **Purpose:** establish role, experience, differentiation, and next action immediately.
- **Audience:** all, optimized for recruiters and engineering managers.
- **Message:** senior backend identity; production ownership; reliable Node.js/TypeScript systems;
  Saudi/MENA relevance.
- **Evidence:** `C001`, `C002`, role timeline, and selected proof-pillar summary.
- **Length:** one heading, one short supporting paragraph, two actions, optional compact trust line.
- **Primary action:** View selected work → `#work`.
- **Next destination:** selected work; secondary contact/CV actions.
- **Must not include:** technology wall, every domain, unapproved location/contact detail, exact
  private metrics, availability claim, or inflated title.

### 2. Credibility snapshot

- **Purpose:** make seniority and relevance scannable before deeper reading.
- **Audience:** recruiters and time-constrained managers.
- **Message:** experience span, backend focus, production responsibility, and regional domain
  context.
- **Evidence:** CV baseline and proof pillars.
- **Length:** three or four compact evidence statements.
- **Primary action:** continue to selected work.
- **Destination:** `#work`.
- **Must not include:** unsupported counts, progress bars, logos without permission, or duplicated
  hero prose.

### 3. Selected work

- **Purpose:** prove the positioning with three differentiated stories.
- **Audience:** all priority audiences.
- **Message:** performance/operations, fintech architecture/correctness, and public engineering
  quality.
- **Evidence:** Madar, DebtBox, and `saudi-utils` evidence registers.
- **Length:** three summaries of roughly 60–100 words plus scoped evidence labels/actions.
- **Primary action:** Read the relevant case study.
- **Destination:** `/work/*` routes.
- **Must not include:** confidential details, inaccessible source buttons, repeated full case-study
  narratives, or pending metrics presented as fact.

### 4. Capabilities by engineering problem

- **Purpose:** show transferable strengths without a keyword wall.
- **Audience:** engineering managers, interviewers, and recruiters.
- **Message:** architecture and decisions; performance and data; integrations and background
  workflows; reliability and operations; open-source quality.
- **Evidence:** capability-to-evidence matrix and proof pillars.
- **Length:** four or five groups, each with one concise explanation and contextual technologies.
- **Primary action:** follow contextual case-study links.
- **Destination:** selected work or case-study anchors.
- **Must not include:** proficiency ratings, every CV technology, or unsupported equal-depth claims.

### 5. Experience

- **Purpose:** provide career continuity and role context without copying the CV.
- **Audience:** recruiters and hiring managers.
- **Message:** progression from full-stack delivery to senior backend ownership, including
  supporting freelance/founding work.
- **Evidence:** CV baseline role dates and descriptions.
- **Length:** concise timeline; one or two scoped bullets per role.
- **Primary action:** Download/view CV.
- **Destination:** approved versioned CV.
- **Must not include:** full CV prose, private clients without permission, every responsibility, or
  additive experience calculations across overlapping roles.

### 6. Open-source feature

- **Purpose:** provide directly inspectable proof and developer discovery.
- **Audience:** technical interviewers and developers.
- **Message:** `saudi-utils` demonstrates explicit contracts, verification, packaging, and secure
  release design.
- **Evidence:** `C022`–`C029`.
- **Length:** one focused feature block with a few dated facts.
- **Primary action:** View GitHub; secondary View npm / Read case study.
- **Destination:** public repository, npm package, and `/work/saudi-utils`.
- **Must not include:** adoption claims, undated audit results, copied README/API documentation, or
  claims that coverage proves correctness.

### 7. Contact and opportunity fit

- **Purpose:** turn qualified interest into a low-friction conversation.
- **Audience:** recruiters, engineering managers, and founders.
- **Message:** invitation to discuss relevant backend roles or engagements, qualified by confirmed
  availability.
- **Evidence:** approved contact and availability details supplied by Ali.
- **Length:** one short paragraph and direct links.
- **Primary action:** Contact Ali.
- **Destination:** approved email or LinkedIn.
- **Must not include:** phone number by default, unconfirmed location/availability, contact form, or
  vague “connect” language.

## Case-study content model

### Required public fields

- stable slug and safe public title
- classification: professional system, freelance/personal product, or open source
- short summary and why the story matters
- context and business/user problem
- Ali's role, ownership boundary, and collaborators
- constraints and scale described only at the approved disclosure level
- technical challenges
- decisions, alternatives considered, and trade-offs
- implementation overview at a safe level
- outcomes, including the absence of an approved metric where relevant
- reliability, security, and operational considerations
- lessons and limitations
- technologies in problem context
- evidence sources and disclosure status

### Optional public fields

- approved quantitative results
- safe diagram or screenshot with permission and alt text
- public repository, package, demo, or product links
- previous/next related story
- dated verification note for point-in-time evidence

### Private/internal-only fields

- source excerpts from private repositories
- internal system names, endpoints, identifiers, logs, tickets, dashboards, and incident records
- customer, partner, provider, government-service, topology, and security details not approved for
  publication
- raw benchmark artifacts or owner notes containing confidential data
- approval record, reviewer, and internal evidence location

### Structured content suitability

Slug, safe title, classification, summary, role, dates, capability tags, technology tags, evidence
status, disclosure level, links, and related-story identifiers are suitable for structured content
data. Narrative decisions, trade-offs, lessons, and evidence notes should remain authored rich text.
Approval records and internal evidence references must never enter the public content bundle.

The same model supports public open source and private professional work by changing disclosure
level and available links, not by lowering the evidence standard.

## Content relationships and cross-links

- Hero and credibility statements link to the proof-bearing selected-work section.
- Capability groups link to the single strongest relevant case study rather than repeating claims.
- Selected-work cards link to case-study routes; case studies link back to the homepage work anchor.
- Experience entries link to case studies only when the relationship and naming are approved.
- `saudi-utils` links to GitHub/npm from both its homepage feature and case study; detailed package
  usage stays in the README/npm documentation.
- CV, LinkedIn, and GitHub are supporting evidence/discovery channels, not duplicate pages.
- Case-study pages offer a contact action after the conclusion and relevant previous/next work.

## Footer

Include Ali's approved display name, concise professional identity, email or LinkedIn contact,
GitHub, CV, and a simple copyright/year line. Include npm only contextually through `saudi-utils`.
Do not include a sitemap-sized link list, phone number, unapproved location, newsletter, social feed,
or legal claims that are not required.

## Mobile and accessibility considerations

- Keep mobile navigation short and usable without a complex menu; an accessible disclosure menu is
  acceptable only if links do not fit.
- Preserve the homepage reading order in the DOM and avoid visual reordering.
- Use one clear page heading, logical nested headings, landmarks, skip navigation, visible focus,
  and descriptive link labels.
- Ensure anchor targets are not obscured, touch targets are adequate, and horizontal tables are not
  required for core content.
- Do not hide case-study evidence in hover states, carousels, tabs, or animation.
- Identify downloads and external destinations; respect reduced-motion preferences.

## Future expansion boundaries

Add a work index only after the portfolio has more than four approved stories. Add articles only
when Ali commits to maintaining them. Arabic, analytics, testimonials, dark mode, a CMS, and other
post-launch items remain outside this architecture until separately justified. Do not add
authentication, a database, API routes, or a contact backend to serve the approved content model.

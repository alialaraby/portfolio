# Decision Log

## D001 — Professional positioning

- **Context:** The portfolio must support senior backend roles while reflecting production,
  early-stage, and Saudi-market experience without overstating title or ownership.
- **Selected:** Senior Backend Engineer with 6+ years of experience who owns reliable,
  integration-heavy Node.js and TypeScript systems from technical decisions through production
  operations.
- **Alternatives:** Saudi fintech/logistics specialist; founding/early-stage backend engineer.
- **Rationale:** The selected direction is legible to recruiters, evidence-backed, and broad enough
  for the target opportunities. Domain and founding experience remain differentiators.
- **Consequences:** Backend work leads; frontend remains supporting breadth; staff, architect, CTO,
  and manager titles are not used.
- **Evidence:** `C001`–`C003`, `C011`–`C018`, `C022`–`C029`, and the Phase 1 CV baseline.

## D002 — Audience priority

- **Context:** Different visitors require different levels of depth.
- **Selected:** Saudi/MENA engineering managers and technical interviewers are primary. Senior
  backend recruiters and startup founders/product leaders are secondary.
- **Alternatives:** recruiter-first; freelance-client-first; developer/open-source-first.
- **Rationale:** Engineering decision-makers best match the desired roles and need the complete
  evidence narrative; the homepage still preserves a rapid recruiter scan.
- **Consequences:** Selected work appears early, with technical depth on separate routes.
- **Evidence:** Requirements sections 1–4 and Phase 1 evidence rankings.

## D003 — Site structure

- **Context:** The site must balance rapid scanning, engineering depth, maintainability, SEO,
  accessibility, and private-work constraints.
- **Selected:** Focused single-page homepage with separate case-study routes.
- **Alternatives:** fully multi-page site; single-page-only site.
- **Rationale:** It keeps the launch narrative cohesive while giving three stories enough room for
  scoped evidence and shareable metadata.
- **Consequences:** No separate About, Skills, Contact, Blog, or work-index route at launch.
- **Evidence:** Requirements sections 4, 9, 10, and 12; `information-architecture.md`.

## D004 — Launch portfolio stories

- **Context:** The audit found strong private professional evidence, one strong public project, and
  weaker or unsafe older repositories.
- **Selected:** (1) Madar/generalized logistics platform, (2) DebtBox/generalized Saudi fintech
  product, and (3) `saudi-utils`. ArabDT remains experience evidence until a safe story is supplied.
- **Alternatives:** add ArabDT or Nile Taxi as a fourth case study; feature Invitations or academic
  repositories.
- **Rationale:** Three stories cover performance/operations, architecture/correctness, and public
  engineering quality without repetitive or risky filler.
- **Consequences:** Nile Taxi and Invitations are excluded at launch; ArabDT can be promoted later.
- **Evidence:** Phase 1 ranked candidates and `C004`–`C045`.

## D005 — Conversion actions

- **Context:** Visitors need a useful next step before approved contact details are available.
- **Selected:** Primary CTA `View selected work`; secondary CTA `Contact Ali` through approved email
  or LinkedIn. CV, GitHub, and npm are contextual supporting actions.
- **Alternatives:** contact-first hero; CV as primary CTA; custom contact form.
- **Rationale:** Proof-first conversion builds credibility, while direct contact paths are reliable
  and low maintenance.
- **Consequences:** No backend contact form. Approved destinations are email and LinkedIn; GitHub is
  a supporting profile link. Phone is excluded.
- **Evidence:** Requirements sections 4, 8, and 14; audience needs in `content-strategy.md`.

## D006 — Private professional work

- **Context:** Madar and DebtBox are the strongest stories and now have an explicit approved
  publication scope.
- **Selected:** Name both products and publish collaborator-aware case studies using only the
  approved claims, metrics, and technical boundaries.
- **Alternatives:** omit private work; wait for all approvals; publish CV details as supplied.
- **Rationale:** Private work is legitimate professional evidence, and safe abstraction preserves
  its value without treating access or CV inclusion as publication permission.
- **Consequences:** Safe descriptive slugs remain. Approved metrics and the Nafath/Nafith distinction
  may be used; topology, private artifacts, contracts, and other provider details remain excluded.
- **Evidence:** `C004`–`C018`, confidentiality review, and requirements sections 5, 6, and 13.

## D007 — Excluded launch content

- **Context:** Some content adds little value or creates security, privacy, or maintenance risk.
- **Selected:** Exclude legacy repository links, Invitations, academic/tutorial projects, unapproved
  logos/screenshots/testimonials, phone number, blog, automatic activity feeds, and a technology
  logo wall.
- **Alternatives:** broader project archive and richer marketing content.
- **Rationale:** A smaller evidence-backed portfolio better supports senior positioning.
- **Consequences:** Excluded material can return only after evidence, permission, and strategic need
  are established.
- **Evidence:** Phase 1 weak/unsafe evidence review and requirements sections 6, 13, and 14.

## D008 — Phase 3 public baseline and disclosure

- **Context:** Final copy required explicit owner decisions for identity, contact, location, and the
  two private-system stories.
- **Selected:** Publish `Senior Backend Engineer`, `6+ years`, the approved backend specialization,
  email, LinkedIn, GitHub, and “Based in Egypt and open to relocation opportunities in Saudi
  Arabia.” Use the approved Madar and DebtBox wording recorded in `C004`–`C018`.
- **Alternatives:** retain generalized unnamed stories; omit location; delay contact copy.
- **Rationale:** The owner explicitly approved these facts and boundaries on 17 September 2026.
- **Consequences:** Do not publish phone, current Riyadh residence, broader availability, work
  authorization, private-system internals, or claims outside the recorded scope.
- **Evidence:** `C001`, `C002`, `C004`–`C018`, `C043`, `C044`, `C046`, and `C047`.

## D009 — Static application architecture and project foundation

- **Context:** The approved product is a content-led homepage plus three case-study routes. It needs
  strict TypeScript, Markdown authoring, static output, minimal browser JavaScript, SEO preparation,
  Vercel compatibility, and owner-friendly maintenance. It does not require request-time data, API
  routes, authentication, a database, or a CMS.
- **Selected framework and rendering:** Astro 7.3.3 with static output. Astro content collections
  validate route metadata during development and build, and `.astro` templates render HTML without
  shipping a client framework by default.
- **Package manager:** npm 11 with a committed `package-lock.json`, `npm ci` in CI, and Node.js 24
  declared through `.nvmrc` and package engines.
- **Content management:** Local Markdown under `src/content/`. Approved Phase 3 files were moved
  from `content/` to prevent duplicate authorities. Case-study frontmatter supplies stable route and
  metadata fields; narrative wording remains Markdown. Evidence and review records stay in `docs/`
  and are never loaded by the application.
- **Testing:** Astro's checker covers templates and strict TypeScript; Vitest covers content
  invariants, invalid representative metadata, and importable configuration; a production build
  proves route generation. Browser, accessibility, visual, and end-to-end testing belong to later
  phases once the real experience exists.
- **Deployment assumptions:** Static `dist/` output is compatible with Vercel's Astro support, but
  no adapter or deployment workflow is needed and no deployment was attempted.
- **Alternative — React with Vite:** Rejected because it requires choosing and maintaining routing
  and Markdown/content plumbing and normally ships a client runtime for pages that need no browser
  state. It can meet the requirements, but with more application decisions and JavaScript cost.
- **Alternative — Next.js static generation:** Rejected because its server-capable application
  model and React runtime add complexity without a current server, API, personalization, or dynamic
  data requirement. Static export is possible but offers no compensating benefit here.
- **Benefits:** Direct Markdown editing, schema-backed build failures, file-based static routes,
  semantic HTML, zero authored client JavaScript, small component boundaries, and a low-friction
  path to later metadata and image work.
- **Trade-offs:** Astro conventions become a project dependency; rich interactive components would
  require explicitly adding and hydrating an integration; content schema changes require migrations.
- **Known constraints:** Canonical URLs await an approved production domain; the approved CV asset
  is not supplied; shell metadata is basic; the complete approved bodies are intentionally not yet
  rendered.
- **Future implications:** Phase 5 may build the visual system on the existing layout and CSS entry
  point. Phases 6–7 compose approved Markdown into complete pages. Phases 8–10 add browser,
  accessibility, SEO, visual, and performance verification. Phase 11 owns Vercel configuration and
  deployment review.

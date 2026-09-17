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
  static-host compatibility, and owner-friendly maintenance. It does not require request-time data, API
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
- **Deployment assumptions:** Static `dist/` output is compatible with conventional static hosts;
  no adapter is needed. GitHub Pages was later selected in Phase 11.
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
  accessibility, SEO, visual, and performance verification. Phase 11 owns GitHub Pages configuration and
  deployment review.

## D010 — Editorial-technical visual system

- **Context:** The portfolio needs a distinctive but restrained presentation for technical evidence,
  strong reading hierarchy, responsive behavior, accessibility fundamentals, and minimal client
  code without implementing Phase 6–7 content early.
- **Selected:** A light editorial-technical system using warm neutral surfaces, dark ink, a
  restrained blue accent, IBM Plex Sans for reading and interface text, and IBM Plex Mono for short
  technical labels. Navigation wraps and remains visible at every width without JavaScript.
- **Alternatives:** A minimal monochrome system was less distinctive; a rounded product-dashboard
  direction overemphasized cards; a custom mobile toggle added unnecessary state and hydration;
  remote fonts added privacy and availability costs; system fonts reduced visual identity.
- **Benefits:** Strong hierarchy, local predictable assets, no third-party requests, no authored
  client JavaScript, reusable primitives, and a clear path for the approved content.
- **Trade-offs:** Three font files add approximately 104 KiB before transfer compression; IBM Plex
  Mono is static because IBM does not publish a variable webfont; light-only presentation postpones
  dark-mode decisions.
- **Constraints and implications:** Phase 5 previews only approved titles and descriptions. Phase 6
  composes the homepage, Phase 7 completes case studies, and Phase 8 performs deeper accessibility
  and browser verification. Tokens and component variants should expand only for demonstrated needs.

## D011 — Direct first-person portfolio voice

- **Context:** Third-person metadata such as “How Ali improved…” sounded like commentary about Ali
  rather than a confident account of his own work. Phase 6 needs a credible personal voice without
  overstating sole ownership of team-built systems.
- **Selected:** Use direct first-person language for positioning, project summaries, decisions, and
  calls to action. Lead with the constraint and contribution, keep measurable claims scoped, and
  state team context inside each professional story.
- **Alternatives:** Third-person editorial copy created distance; generic capability-first copy lost
  the evidence; stronger leadership language risked exceeding the approved attribution.
- **Consequences:** Homepage content is structured and validated in `home.md`; case-study metadata
  now begins with “I”; detailed stories continue to distinguish personal contribution from team
  outcomes. Evidence scope and approved quantitative wording are unchanged.

## D012 — Case-study presentation and diagram standard

- **Context:** Phase 7 must present the three approved case studies as complete, linkable pages with
  technical storytelling while keeping private implementation detail out of the output and avoiding
  unnecessary dependencies after Astro 7 introduced its new default Markdown processor.
- **Selected:** Render the validated case-study bodies through Astro's content renderer inside the
  existing prose reading shell. Add validated frontmatter metadata (`project`, `role`, `timeline`)
  and one content-driven flow diagram per study built strictly from approved copy. Provide
  previous/next navigation ordered by `order`. Keep internal review notes in a validated but
  non-rendered `internalReview` frontmatter field.
- **Alternatives:** HTML review comments are emitted verbatim by the current Markdown processor and
  would leak into the static output; the legacy `@astrojs/markdown-remark` rehype path would add a
  dependency the foundation deliberately avoids; screenshots, proprietary code, and decorative
  diagrams risked exposing or implying unapproved system detail.
- **Consequences:** `caseStudySchema` requires `project`, `role`, a diagram of at least three steps,
  and `internalReview`. Diagrams stay abstract and evidence-bounded, no code or screenshots are
  published, and `astro.config.ts` remains dependency-free. Phase 8 owns accessibility verification
  and Phase 9 owns final SEO metadata.

## D013 — Accessibility verification tooling

- **Context:** Phase 8 requires automated accessibility checks plus verified keyboard, focus, motion,
  and zoom behavior without introducing runtime dependencies or a browser test stack. The project
  ships no client JavaScript and keeps `dependencies` empty.
- **Selected:** Add the development-only `axe-core` rule engine and `jsdom` to run it against the
  built `dist/**/*.html` pages inside the existing Vitest suite (`npm run test:a11y`), alongside
  explicit assertions for the page-level landmarks axe cannot fully confirm outside a browser.
  Disable the two color-contrast rules, which need a layout engine, and record measured token
  contrast in `docs/accessibility.md`. Improve the dark-footer focus outline to a lighter orange so
  it clears 3:1.
- **Alternatives:** A hand-written rule set would be unreliable and incomplete; a real browser stack
  (Playwright/pa11y) adds heavier binaries and configuration than a static site needs; enabling
  `color-contrast` in jsdom returns only false inconclusive results; leaving `#b44600` on the footer
  met 3.00:1 exactly, which is too close to rely on.
- **Consequences:** Both new packages are dev-only and add no browser JavaScript. The a11y test skips
  when `dist/` is absent, so `npm run check` stays build-free, and CI runs `npm run test:a11y` after
  the production build. Contrast verification remains a documented, ratio-based manual check rather
  than an automated browser assertion.

## D014 — SEO, social metadata, and discovery strategy

- **Context:** Phase 9 requires unique metadata, canonical and social presentation, valid sitemap and
  robots behavior, and honest structured data. The approved production domain
  (`https://alialaraby.com`) was initially proposed and a social card was available, and the project
  still avoids runtime dependencies and WordPress-style plugins. D016 later records the GitHub Pages
  URL selected when the proposed domain proved unavailable.
- **Selected:** Record the domain once in `src/config/site.ts` and `astro.config.ts`. Emit canonical,
  Open Graph, and Twitter metadata from `BaseLayout.astro`. Add a dependency-free `sitemap.xml`
  endpoint driven by the case-study collection and a static `robots.txt`. Publish JSON-LD as
  `ProfilePage`/`Person` on the homepage and `TechArticle` plus `BreadcrumbList` on case studies,
  sourced from validated content. Ship a committed 1200×630 PNG share card with an editable SVG
  source.
- **Alternatives:** The `@astrojs/sitemap` integration would add a dependency for output a
  collection-driven endpoint produces; per-page metadata could have been hand-written but would drift
  from content; `og:image` could have been deferred, but a text-only card was cheap to produce from
  the existing tokens; richer schema types were rejected as claims the content does not support.
- **Consequences:** Metadata tests read the built output and fail on duplicate titles/descriptions,
  wrong canonical or OG URLs, missing or invalid JSON-LD, sitemap/robots drift, and missing approved
  links. The 404 is `noindex` and excluded from the sitemap. Live URL reachability stays a manual
  check because link hosts block scripted requests. The domain does not resolve until Phase 11.

## D015 — Performance budgets and output hygiene in CI

- **Context:** Phase 10 must measure the production artifact and prove no secrets, placeholders, or
  internal references ship. Lighthouse and field Core Web Vitals need browser or deployment
  infrastructure that is intentionally absent from the current CI image.
- **Selected:** Enforce artifact budgets and an inventory check in `tests/performance.test.ts`
  (zero client JS, no source maps, CSS/HTML/font/page-weight caps, single font preload,
  `font-display: swap`, sized images) and a forbidden-pattern scan plus approved-email allowlist in
  `tests/hygiene.test.ts`. Run both as post-build CI steps. Document Lighthouse, Core Web Vitals, and
  responsive smoke testing as explicit owner actions against the Phase 11 preview deployment.
- **Alternatives:** Adding Lighthouse CI with a headless Chrome dependency would be heavy and mostly
  re-measure a tiny static site. Artifact budgets remain the regression guard; local Lighthouse is
  useful supporting evidence but is not presented as a production measurement. Relying on
  `@astrojs`/framework defaults was rejected because budgets must fail the build, not be observed.
- **Consequences:** Regressions in bundle size, asset inventory, or accidental secret/placeholder
  leakage now fail CI. A later local Chromium review measured Lighthouse 100 in every category on the
  homepage and a representative case study without adding a dependency. Deployment behavior,
  WebKit, and field Core Web Vitals remain launch checks rather than automated claims.

## D016 — Manually authorized GitHub Pages deployment

- **Context:** Phase 11 needs a reproducible, explicitly authorized, and recoverable deployment path.
  The owner selected GitHub Pages instead of Vercel. The site is fully static and needs no runtime
  adapter, functions, environment variables, personal access token, or repository secret.
- **Selected:** Use a dedicated, manually dispatched GitHub Actions workflow that can run only from
  `main` with an affirmative production input. It repeats all quality checks, builds `dist`, and uses
  immutable commits of GitHub's official configure, artifact, and deploy actions. Commit the approved
  GitHub project URL as the canonical base; keep Pages settings and deployment as owner steps.
- **Alternatives:** Branch-based publishing was rejected because it needs generated output committed
  to the repository; automatic deployment on every push was rejected because production requires an
  explicit owner action; Vercel was started but abandoned before authentication or external changes.
- **Consequences:** Deployment intent is reviewable and no long-lived credential is required. GitHub
  Pages offers no separate native preview URL for this repository, so green pull-request CI and the
  locally reviewed production artifact are the pre-deployment gate. Pages settings, the first manual
  run, WebKit, and live endpoint checks remain owner-controlled external steps. A later review found
  that the proposed custom domain was unregistered, so the initial launch uses
  `https://alialaraby.github.io/portfolio/` with explicit base-path handling and no `CNAME`.

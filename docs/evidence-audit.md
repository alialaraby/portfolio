# Phase 1 Evidence Audit

Audit date: 17 September 2026

## Executive summary

Ali's strongest credible positioning is a Senior Backend Engineer who combines production
ownership with performance work, integration-heavy product delivery, and careful TypeScript API
design. The CV supplies the strongest evidence for professional systems at Madar, DebtBox, and
ArabDT. Public repositories independently demonstrate TypeScript engineering, REST-oriented
backend delivery, MongoDB application work, supporting frontend breadth, public contribution to
DebtBox, and unusually disciplined open-source release engineering.

The evidence supports three different kinds of portfolio story:

1. **Production backend ownership:** Madar and DebtBox, using carefully generalized CV material
   until the owner approves names, metrics, providers, and architecture disclosures.
2. **Verifiable open-source quality:** `saudi-utils`, backed by public source, tests, CI, package
   metadata, documentation, and an npm release.
3. **Earlier end-to-end delivery:** preferably one owner-confirmed ArabDT story; Nile Taxi is a
   fallback because public history verifies sustained product implementation but currently has
   publication and security risks.

No public repository independently verifies Madar's scale or performance figures, DebtBox's
private backend architecture, or ArabDT's employer systems. Those experiences remain legitimate
CV evidence, but the associated details are not publication-ready. All six requested metrics are
CV-only and require owner confirmation plus publication approval.

Two legacy public backend repositories also require an urgent private credential-hygiene review.
They contain tracked configuration values that appear sensitive and non-placeholder. This report
does not reproduce the values or identify exploitable details. Neither repository should be linked
from the portfolio until Ali confirms revocation and remediation.

## Scope and limitations

### Sources reviewed

- The supplied two-page CV, treated as the career baseline.
- The current portfolio repository's requirements and roadmap.
- Public repositories returned for `alialaraby` by GitHub metadata, plus direct review of the
  prioritized Nile Taxi backend repository.
- Focused source and history reviews of `alialaraby/saudi-utils`, `alialaraby/invitations`,
  `alialaraby/invitations-dashboard`, and `alialaraby/nile-taxi-backend`.
- Public history and relevant file scope in `Debtbox/debtbox` and
  `Debtbox/debtbox-admin`.
- Public npm metadata for `saudi-utils@0.1.0`.
- Public GitHub Actions, tags, release metadata, and contribution search results.

### Limitations

- The configured GitHub CLI credential was invalid, so no private repository was accessible.
- Public contribution search found no Madar or ArabDT repository that could safely corroborate the
  CV.
- DebtBox's public repositories are frontend/admin surfaces. They verify product contribution and
  collaboration, not the CV's private backend architecture or operational claims.
- Employer production data, dashboards, tickets, pull requests, and incident records were not
  available. Their absence lowers verification confidence; it does not invalidate the experience.
- Repository review was targeted rather than line-by-line. No proprietary source was copied into
  this repository.
- The old personal portfolio repository and deployed Vercel site were deliberately not inspected.
- GitHub visibility does not establish permission to reuse code, screenshots, names, or technical
  details.

### Evidence labels

| Label | Meaning |
| --- | --- |
| Confirmed evidence | Directly supported by a reviewed public artifact or reproducible check. |
| Reasonable inference | Supported by multiple implementation signals, but not directly documented. |
| CV-only claim | Present in the supplied CV without independent repository evidence. |
| Owner confirmation required | Needs Ali to confirm accuracy, scope, attribution, or currentness. |
| Rejected or unsafe | Misleading, stale, confidential, or unsafe to publish in its current form. |

`Supported` in the claim register means evidence exists. It does not mean Ali has approved public
use.

### Evidence source index

| Key | Exact source | Audit use |
| --- | --- | --- |
| `CV-01` | Supplied `Ali_Alaraby_Senior_Backend_Engineer.pdf`, two pages | Roles, dates, responsibilities, domains, skills, and candidate metrics. |
| `REQ-01` | [Portfolio requirements](requirements.md) | Intended positioning, constraints, audiences, and disclosure rules. |
| `GH-SU-01` | [`alialaraby/saudi-utils`](https://github.com/alialaraby/saudi-utils) at audited `main` commit `827ba24d` | Source, tests, documentation, package metadata, workflows, policies, and author history. |
| `NPM-SU-01` | [`saudi-utils@0.1.0`](https://www.npmjs.com/package/saudi-utils), registry publication timestamp 17 Sep 2026 | Published version, description, repository association, and release time. |
| `CI-SU-01` | [GitHub Actions run `35199783021`](https://github.com/alialaraby/saudi-utils/actions/runs/35199783021) | Green CI status for audited `main` commit. |
| `RUN-SU-01` | Local clean checkout checks on 17 Sep 2026 using Node.js `22.20.0` and npm `10.9.3` | `docs:check`, `check`, `package:check`, and `npm audit --omit=dev` results. |
| `GH-DB-01` | [`Debtbox/debtbox`](https://github.com/Debtbox/debtbox) public Git history | Ali-attributable product/frontend and Docker Compose contribution. |
| `GH-DBA-01` | [`Debtbox/debtbox-admin`](https://github.com/Debtbox/debtbox-admin) public Git history | Ali-attributable admin, permissions, users, debt-display, and sales contribution. |
| `GH-NT-01` | [`alialaraby/nile-taxi-backend`](https://github.com/alialaraby/nile-taxi-backend) at reviewed commit `d1198fa` | Authorship history, backend structure, implementation signals, and maturity gaps. |
| `GH-NTA-01` | [`alialaraby/nile-taxi-admin`](https://github.com/alialaraby/nile-taxi-admin) public metadata/history | Supporting frontend/full-stack contribution. |
| `GH-INV-01` | [`alialaraby/invitations`](https://github.com/alialaraby/invitations) at reviewed commit `970161e` | Backend authorship, implementation scope, maturity gaps, and private security review trigger. |
| `GH-INVD-01` | [`alialaraby/invitations-dashboard`](https://github.com/alialaraby/invitations-dashboard) at reviewed commit `ca0d0f4` | Supporting dashboard authorship and maturity gaps. |

Commit abbreviations are identifiers, not code excerpts. Point-in-time checks can change and must be
rerun before launch if their results are used in public copy.

## CV baseline

### Professional profile

| Field | CV baseline | Audit assessment |
| --- | --- | --- |
| Name | Ali Saadawy Sakr Alaraby | Contact/public display form requires owner confirmation. |
| Title | Senior Backend Engineer | Consistent with the recent role history and technical scope. |
| Experience | 6+ years | Conservative and supported by continuous roles from July 2019; retain until Ali chooses a dated alternative. |
| Current location | Riyadh, Saudi Arabia | Currentness and publication require confirmation. |
| Primary specialization | Node.js, NestJS, TypeScript, PostgreSQL | Strong positioning; NestJS and PostgreSQL depth rely mainly on the CV. |
| Supporting breadth | MongoDB, Redis, messaging, workers, Docker, cloud, observability, and frontend | Depth varies materially by capability and must be described in context. |
| Languages | Arabic (native), English (professional working proficiency) | CV-only; low-risk after confirmation. |
| Education | B.Sc. in Computer Science, Menoufia University, 2017 | CV-only; clarify the official degree/faculty wording if published. |

### Employment and delivery timeline

| Dates | Role | Organization or engagement | Domains | Primary CV responsibilities |
| --- | --- | --- | --- | --- |
| Oct 2024–present | Senior Backend Engineer | Obeikan Digital Solutions, Madar project | Logistics | Fleet/vendor integrations, assignment, pricing, invoicing, SLA automation, reporting, PostgreSQL optimization, exports, deployment, monitoring, and incident/data operations. |
| Aug 2025–present | Founding Backend Engineer, freelance | DebtBox | Fintech and debt management | Feasibility, modular-monolith backend, provider adapters, financial workflows, Saudi integrations, infrastructure, and product collaboration. |
| Jan 2023–Oct 2024 | Senior Software Engineer | ArabDT | EdTech, e-commerce, realtime, enterprise | Backend features, scheduling, communication, notifications, jobs, external integrations, and production delivery. |
| Nov 2021–Jan 2023 | Software Engineer | ArabDT | Realtime education and client systems | Backend workflows, third-party integrations, legacy modernization, deployments, database updates, and cross-functional delivery. |
| Aug 2022–Dec 2023 | Freelance Full Stack Developer | Client work | Transportation and education | Ride booking and learning-management delivery, payments, subscriptions, and supporting frontend work. |
| Jul 2019–Jul 2021 | Full Stack Developer | RPAEgypt | Hospitality | Backend, frontend, database design, maintenance, requirements, and production support using .NET, Node.js, Angular, SQL Server, and MongoDB. |

The timeline contains overlapping full-time and freelance work. Portfolio copy should not add the
durations together. As of the audit date, the elapsed professional timeline exceeds seven years,
but `6+ years` is the only owner-supplied wording.

### Architecture, operations, and collaboration baseline

The CV describes:

- distributed and event-driven workflows, modular monoliths, microservices, scheduled jobs, and
  background workers;
- correctness mechanisms such as idempotency, transactions, and data consistency;
- production deployments, monitoring, incident investigation, and targeted data correction;
- Docker, Nginx, Linux, Azure DevOps, AWS, Alibaba Cloud, and Kubernetes/AKS exposure;
- Grafana, Sentry, OpenTelemetry, and Azure Monitor exposure;
- direct work with Operations, external providers, mobile/frontend teams, and a startup CEO; and
- feasibility analysis, provider evaluation, product discovery, and delivery planning.

These are useful candidate themes, not one uniform depth claim. Public evidence strongly supports
Docker-based delivery and release engineering, while most cloud, observability, messaging,
PostgreSQL, and production-operations depth remains CV-only.

### CV statements needing qualification or approval

- All Madar scale and impact metrics need their measurement window, baseline, attribution, and
  publication permission confirmed.
- `Own` and `founding` must be scoped to Ali's actual area and collaborators; neither should imply
  sole authorship of a company-wide system.
- Madar's company relationship, fleet count, partner-specific adapter story, and operational
  details require confidentiality review.
- DebtBox's product name, provider names, government-service names, infrastructure region/vendor,
  financial workflows, and launch state require explicit publication approval.
- ArabDT client/product names and realtime architecture require employer/client permission or
  safer generalization.
- The cloud and observability lists should be attached to specific projects and depth levels rather
  than presented as equivalent expertise.
- Contact details and location must not be copied from the CV until confirmed current and public.

## Repository inventory

### Relevant and reviewed repositories

| Repository | Visibility | Classification | Evidence value | Publication recommendation |
| --- | --- | --- | --- | --- |
| `alialaraby/saudi-utils` | Public | Open source | Very high: strict TypeScript API, tests, documentation, CI, packaging, and npm release. | Feature prominently after owner approves wording; link to GitHub and npm. |
| `Debtbox/debtbox` | Public | DebtBox product frontend | Medium: public product context and 16 commits attributable to Ali across initial frontend, localization/content, and Docker Compose work. | Use only as supporting contribution evidence; respect the repository's proprietary notice and do not reuse code/assets. |
| `Debtbox/debtbox-admin` | Public | DebtBox admin frontend | Medium: five attributable commits covering admin workflows, permissions, and public frontend contracts. | Supporting evidence only; not proof of backend implementation. |
| `alialaraby/nile-taxi-backend` | Public | Likely freelance/client product; owner confirmation required | Medium: 148 commits under Ali's identities, approximately 13,000 TypeScript lines, and clear API/data module boundaries. | Do not link until security and client-publication review pass. Consider a short earlier-career entry afterward. |
| `alialaraby/nile-taxi-admin` | Public | Likely freelance/client supporting frontend; owner confirmation required | Medium-low: sustained full-stack contribution history complements the backend repository. | Supporting evidence only; review security, ownership, and client permission first. |
| `alialaraby/invitations` | Public | Unclear personal/client product | Low-medium: 33 attributable commits and a small TypeScript/Express/MongoDB delivery with QR, export, messaging, and admin workflows. | Exclude for now: sparse documentation, no automated tests/CI, stale dependencies, unclear ownership, and security concerns. |
| `alialaraby/invitations-dashboard` | Public | Unclear personal/client product frontend | Low: 11 attributable commits in an Angular admin surface. | Exclude or mention only as supporting full-stack breadth after ownership and security review. |
| `alialaraby/portfolio` | Public | Current portfolio governance | None for career claims | Keep as the working repository; do not use as professional evidence. |

### Public repositories triaged without deep review

| Repository group | Classification | Decision |
| --- | --- | --- |
| `graduation-project-FEEConnect`, `quiz_website`, `final_project`, `projectile-motion-simulation` | Archived learning/academic work | Exclude from the professional portfolio. They are stale and weaker than current evidence. |
| Three `microservice-todolist-*` repositories | Archived learning experiment | Exclude. The names suggest architecture practice, but small archived exercises do not substantiate production microservice expertise. |
| `hiring-form` | Early experiment/product fragment | Exclude unless Ali supplies a compelling ownership/outcome story. |
| `alialaraby/alialaraby` | GitHub profile metadata | Discovery aid only, not independent evidence. |
| `personal-website-frontend` | Old portfolio | Explicitly excluded from inspection by the audit scope. |

### Repository maturity findings

#### `saudi-utils`

Confirmed evidence:

- Public MIT-licensed package, created 16 September 2026 and published to npm as `0.1.0` on
  17 September 2026.
- Zero runtime dependencies and an ESM-only typed root API across identity, banking, business/tax,
  telecom, and National Address validation.
- Explicit validation contracts, deterministic error precedence, documented evidence levels, and
  careful limits on what offline validation proves.
- Fourteen test files and 1,503 passing tests in the audit environment, with 100% measured
  statement, branch, function, and line coverage.
- Passing formatting, linting, strict type checks, documentation checks, build, `publint`, package
  contents audit, and clean ESM/strict-TypeScript consumer checks.
- CI across Node.js 22, 24, and 26; dependency updates; pinned third-party action revisions; and a
  release workflow designed around protected-environment approval and npm trusted publishing.
- Public GitHub CI was green on the audited `main` commit. Earlier failed Dependabot attempts for a
  future TypeScript major version are visible and do not affect the current green build.
- The npm production-dependency audit reported zero vulnerabilities. The library has no runtime
  dependencies.
- A `v0.1.0` tag and npm release exist. No GitHub Release existed at audit time, which matches the
  documented one-time bootstrap process.

Qualification:

- The project is only one day old at audit time. It demonstrates engineering discipline, not yet
  long-term adoption, community maintenance, release cadence, or production usage.
- The 100% figure is tool-reported test coverage, not proof of defect-free behavior.
- Package quality is strong, but validation correctness should continue to track authoritative
  Saudi sources as regulations and public specifications change.

#### Nile Taxi

Confirmed evidence:

- Public history contains 148 commits, all attributable to Ali identities, from June 2022 through
  February 2024, followed by a README-only update in September 2026.
- The backend contains route, controller, DAO, model, startup, helper, and integration boundaries,
  with substantial MongoDB/Mongoose use and implemented Redis, scheduled-task, authentication,
  request-validation, and external-request paths.
- The codebase covers transportation workflows across passengers, operators, trips, routes,
  stations, packages, accounts, payments, notifications, and administration.
- A separate public admin repository and commit history support the CV's claim of supporting
  frontend/full-stack delivery.

Weaknesses and risk:

- No automated test suite, CI workflow, lockfile, container definition, release history, or usable
  architecture documentation was found in the backend.
- The dependency manifest is from the Node.js/TypeScript ecosystem of 2022 and should be treated as
  stale until a current audit is run.
- Tracked configuration requires private security remediation. No portfolio link should direct
  reviewers to this repository until that work is complete.
- Public code verifies implementation breadth, not business outcomes, production scale, quality,
  or client permission.

#### Invitations product

Confirmed evidence:

- The backend contains 33 Ali-attributable commits and the dashboard 11, all concentrated in
  November 2022.
- Code structure supports a small registration/invitation product with admin, QR, export,
  messaging, authentication, and MongoDB-backed workflows.

Weaknesses and risk:

- READMEs are incomplete or incorrect; there are no meaningful automated backend tests, CI,
  lockfile, release artifacts, or deployment documentation.
- Both projects are stale and the dependency manifests need modernization/security review.
- Ownership/client status is not documented.
- The backend shares the legacy configuration-security concern and should not be featured or
  linked before private remediation.

#### DebtBox public repositories

Confirmed evidence:

- Public history attributes 16 commits in the product frontend and five in the admin repository to
  Ali identities.
- The attributable scope includes the early public site, multilingual/content work, Docker Compose,
  admin permissions and role handling, debt-display enhancements, system-user management, and
  sales workflows.
- The current public repositories include typed React applications, frontend API contracts,
  Docker/Nginx deployment files, and CI/deployment workflows.

Qualification:

- Most current repository history is authored by another contributor. The evidence supports
  meaningful contribution, not sole ownership of the public frontends.
- Public frontend contracts show product domains and collaboration surfaces but do not prove who
  implemented the corresponding backend or how it is architected.
- The public repositories describe themselves as private/proprietary despite public visibility.
  Do not copy code, assets, or architecture into the portfolio.

## Strongest engineering signals

1. **Production-scale problem solving, pending verification.** Madar's PostgreSQL, exports, SLA,
   integration, and operations stories are the highest-value senior-backend material in the CV.
2. **Correctness-oriented fintech ownership, pending disclosure approval.** DebtBox provides a
   coherent narrative around feasibility, financial workflows, replaceable providers, and KSA
   production readiness, with public contribution history confirming active product involvement.
3. **Open-source engineering discipline, publicly verified.** `saudi-utils` demonstrates API
   restraint, edge-case thinking, evidence-aware documentation, extensive automated tests, clean
   packaging, CI, and deliberate release security.
4. **Sustained end-to-end delivery.** Nile Taxi's long public history and module breadth support a
   credible earlier-career story across backend and supporting frontend work, subject to security
   and client approval.
5. **Cross-functional ownership.** The CV consistently describes work with Operations, external
   providers, product leadership, and frontend/mobile teams. This is compelling but needs scoped
   examples and collaborator-aware wording.

## Capability-to-evidence matrix

Confidence reflects the claim as currently worded, not Ali's likely real-world ability.

| Capability | Evidence source | Confidence and demonstrated depth | Safe to publish? | Recommended portfolio use |
| --- | --- | --- | --- | --- |
| Node.js, NestJS, TypeScript | CV; `saudi-utils`; Nile Taxi; invitations; DebtBox public repos | High for Node.js/TypeScript delivery; medium for NestJS because public artifacts reviewed here use Express or frontend TypeScript. | Node.js/TypeScript yes; NestJS after owner confirmation. | Core positioning, with NestJS tied to named professional work only if approved. |
| REST API and integration design | CV; Nile Taxi route/controller/DAO implementation; DebtBox public API contracts | High for REST delivery; medium-high for provider integration depth. | Generalized wording is safe; provider/client details need approval. | Core capability and case-study decision theme. |
| PostgreSQL and SQL optimization | Madar and DebtBox CV bullets | Medium; strong, specific professional description but no independent artifact. | Only after metric and confidentiality approval. | Madar case-study centerpiece. |
| MongoDB and Redis | CV; implemented Mongoose and Redis paths in Nile Taxi; MongoDB in invitations | High for MongoDB application delivery; medium for Redis depth. | General capability is safe; legacy repositories should not be linked yet. | Supporting data-platform capability. |
| RabbitMQ, BullMQ, scheduled jobs, background workers | CV; scheduled-task implementation in Nile Taxi | Medium overall; public evidence supports scheduled work, not RabbitMQ/BullMQ depth. | Generalized after confirmation. | Discuss by workflow and outcome, not as a technology list. |
| Distributed and event-driven workflows | CV | Medium-low until a specific example is approved. | Needs owner confirmation and safe architecture boundary. | Use inside Madar/ArabDT narrative only with concrete evidence. |
| Modular-monolith and microservice decisions | DebtBox CV; archived microservice exercises are not production evidence | Medium for modular monolith; low for production microservices from public evidence. | DebtBox wording needs approval; do not use learning repositories as proof. | Explain the DebtBox MVP trade-off; avoid generic microservices-expert wording. |
| Idempotency, transactions, data consistency | DebtBox CV; transaction/session signals in Nile Taxi | Medium; CV describes deliberate fintech correctness, but implementation is private. | Needs owner confirmation and non-sensitive example. | DebtBox case-study decision/outcome theme. |
| External-provider and government integrations | CV; public DebtBox product/frontend evidence; Nile Taxi integration paths | Medium-high for integration delivery; named government/provider details are CV-only. | Generalize unless each name is approved. | Differentiator for Saudi-market backend work. |
| Performance and scalability | Madar CV metrics; `saudi-utils` performance tests are library-specific | Medium-high for candidate production impact; metrics are unverified. | Only with approved measurement context. | Madar case study; never generalize package microbenchmarks into system scale. |
| Testing and code quality | `saudi-utils` reproducible checks and CI | High for current open-source work; weak in older public backends. | Yes, with the exact package scope and audit date. | Prominent proof point; acknowledge it is project-specific. |
| Docker, deployment, Nginx, Linux, cloud infrastructure | CV; DebtBox public Docker/Nginx/workflow files; Ali's Docker Compose contribution | High for Docker-based delivery; medium for Nginx/Linux; CV-only for detailed cloud/AKS depth. | General Docker evidence is safe; cloud topology/vendor details need approval. | Production ownership section with per-project depth. |
| CI/CD and release engineering | `saudi-utils` GitHub Actions, release docs, npm package/tag; DebtBox deployment workflows | High for open-source CI/release engineering. | Yes for public workflows; do not claim automated npm releases have run yet. | Major `saudi-utils` differentiator. |
| Monitoring, observability, incident investigation | CV | Medium-low without an approved project example. | Needs owner confirmation and sanitized detail. | Madar experience bullet rather than a standalone tool wall. |
| Production ownership | Madar and DebtBox CV; public deployment artifacts | Medium-high, but scope and shared ownership need confirmation. | Generalized wording after approval. | Core seniority signal. |
| Technical evaluation and stakeholder collaboration | Madar/DebtBox CV; public cross-repository DebtBox work | Medium-high from coherent role descriptions; outcomes remain owner-supplied. | After owner confirmation. | Senior differentiator and experience narrative. |
| Supporting frontend/full-stack experience | DebtBox public commit/file history; Nile Taxi admin; invitations dashboard; earlier CV roles | High. | Yes after client/project permission review. | One concise supporting-breadth statement, not primary positioning. |
| Open-source maintenance | `saudi-utils` public source, policies, CI, npm release | High for initial package creation/release; low for long-term maintenance because the project is new. | Yes with age/adoption qualification. | Dedicated open-source feature; avoid adoption/community claims. |

## Ranked case-study candidates

### 1. Madar — full case study after verification

- **Why it matters:** This is the clearest senior-backend story for engineering managers: scale,
  database performance, background processing, operational correctness, integrations, and ongoing
  production responsibility in one system.
- **Ali's demonstrated role:** CV-described owner/contributor across key backend capabilities,
  fleet onboarding, technical evaluation, deployments, incidents, and data correction.
- **Strongest technical signals:** PostgreSQL query/index work, SLA-eligible workflow redesign,
  queued streaming/chunked exports, integration isolation, and operations collaboration.
- **Possible outcome claims:** The six logistics metrics exactly as recorded in the CV, never
  strengthened or combined.
- **Evidence strength:** Medium-high as a detailed CV account; low independent verification.
- **Confidentiality risk:** High. Scale, partner count, operational behavior, incidents, database
  techniques, and company/platform naming may be sensitive.
- **Recommended disclosure:** Full sanitized case study only after ODS/Madar naming, metrics, and
  architectural detail are approved. Otherwise publish a generalized logistics-system case study.
- **Missing information:** Measurement dates and method, before/after latency, export baseline,
  Ali's individual versus team contribution, SLA failure mode, and permitted naming/detail.

### 2. DebtBox — full case study after confidentiality review

- **Why it matters:** It demonstrates founding-engineer breadth, fintech correctness, pragmatic
  architecture, Saudi-market integrations, infrastructure, and direct product collaboration.
- **Ali's demonstrated role:** The CV describes founding backend ownership. Public repositories
  independently confirm product involvement through 21 attributable commits across product and
  admin frontends, but they do not verify sole/backend ownership.
- **Strongest technical signals:** Modular-monolith trade-off, provider adapters, transactional
  workflows, idempotency/data consistency, infrastructure readiness, and feasibility work.
- **Possible outcome claims:** Progress from early concept through soft launch/production readiness;
  no adoption, revenue, volume, or reliability outcome is evidenced.
- **Evidence strength:** Medium: strong CV detail plus public contribution evidence, with the core
  backend unavailable.
- **Confidentiality risk:** Very high because financial workflows, provider relationships,
  government integrations, security controls, and infrastructure can be sensitive.
- **Recommended disclosure:** Full case study only after explicit product-owner approval. Use a
  high-level architecture decision narrative, not implementation internals or public frontend code.
- **Missing information:** Ownership boundaries, team composition, exact launch state, allowed
  provider names, verified operational outcomes, production dates, and what public links are
  authorized.

### 3. `saudi-utils` — full public case study

- **Why it matters:** It is the strongest directly inspectable proof of Ali's current engineering
  judgment and gives technical reviewers something concrete to evaluate.
- **Ali's demonstrated role:** Sole author in the public history at audit time.
- **Strongest technical signals:** Narrow API contracts, no runtime dependencies, strict input
  handling, evidence-labelled validation, adversarial/invariant/type/performance tests, 100%
  measured coverage, typed packaging, CI matrices, documentation checks, and guarded npm release
  design.
- **Possible outcome claims:** Published `0.1.0`; 1,503 passing tests; 100% measured coverage; zero
  runtime dependencies; zero production-dependency vulnerabilities reported during this audit.
- **Evidence strength:** High and reproducible.
- **Confidentiality risk:** Low; it is public and MIT-licensed. Personal/package account details
  still should not be exposed beyond public links.
- **Recommended disclosure:** Full case study and open-source feature. Emphasize design decisions
  and verification, not unproven adoption.
- **Missing information:** Motivation, intended users, planned maintenance commitment, download or
  usage evidence once meaningful, and owner approval of exact copy.

### 4. ArabDT realtime education story — short case study or experience story

- **Why it matters:** It could show realtime system work, third-party substitution, product-domain
  learning, legacy modernization, and collaboration earlier in Ali's career.
- **Ali's demonstrated role:** CV-described backend contributor and later Senior Software Engineer
  across education, e-commerce, and client systems.
- **Strongest technical signals:** Audio/video workflows, scheduling, notifications, business
  processes, backend modernization, and production delivery.
- **Possible outcome claims:** Reduced reliance on third-party services; no quantitative outcome is
  currently supplied.
- **Evidence strength:** Medium-low because only the CV is available.
- **Confidentiality risk:** High until ArabDT/client naming and architecture are approved.
- **Recommended disclosure:** Select one story. Use a short case study if Ali can provide a safe,
  specific problem/decision/outcome; otherwise keep it as an experience bullet.
- **Missing information:** Which project Ali may name, his exact ownership, team context,
  constraints, technical decision, outcome, and publication permission.

### 5. Nile Taxi — fallback short project entry

- **Why it matters:** It is the strongest public evidence of sustained earlier full-stack product
  delivery and transportation-domain backend breadth.
- **Ali's demonstrated role:** All 148 backend commits and the reviewed admin history are
  attributable to Ali identities.
- **Strongest technical signals:** TypeScript/Express API organization, MongoDB models/data access,
  Redis use, scheduled tasks, auth, notifications, payments, and broad domain implementation.
- **Possible outcome claims:** Product functionality and sustained delivery only. No scale,
  production reliability, users, revenue, or business result is evidenced.
- **Evidence strength:** Medium for authorship and implementation breadth; low for quality and
  outcomes.
- **Confidentiality risk:** High until client permission and security remediation are confirmed.
- **Recommended disclosure:** Exclude for now. After remediation, use a short project entry rather
  than a flagship case study unless Ali supplies a strong outcome narrative.
- **Missing information:** Client/publication permission, current product status, collaborators,
  actual production usage, business outcomes, and completed security remediation.

## Quantitative claim validation

None of these figures is approved for publication.

| Metric | Current source | What was measured | Ali's contribution | Publishable now? | Required qualification |
| --- | --- | --- | --- | --- | --- |
| 8,000–10,000 daily shipments | CV, Madar role | Platform daily shipment volume; period and aggregation are unspecified. | Owned/evolved several backend capabilities on the platform; not claimed as sole cause of volume. | No | Confirm date range, typical/peak meaning, data source, platform scope, and company approval. |
| Approximately 2.5 million total shipments | CV, Madar role | Cumulative platform shipments; cutoff and inclusion rules are unspecified. | Contributed to platform capabilities; no sole-attribution claim. | No | Confirm cutoff date, status inclusion, source, approximation method, and approval. |
| Approximately 30 integrated fleets | CV, Madar role | Integrated delivery fleets; active versus historical meaning is unspecified. | Key engineer for onboarding/evaluation, not necessarily every integration. | No | Confirm count date, definition of integrated/active, Ali's subset, and partner confidentiality. |
| More than 90% reduction in critical shipment-list latency | CV, Madar role | Latency for unspecified critical operational filters before/after query and index work. | Query redesign, indexing, join optimization, and purpose-built SQL. | No | Confirm percentile/average, environment, time window, comparable query shape, baseline/final values, and attribution. |
| 10× increase in supported export capacity | CV, Madar role | Maximum supported shipment-export size after queued, streaming, and chunked processing. | Re-engineered the export workflow. | No | Confirm old/new record counts, success criteria, test/production basis, memory/timeout context, and approval. |
| Growth from hundreds to thousands of daily orders | CV, Madar role | Order/shipment volume range during SLA workflow scaling; exact bounds and dates are unspecified. | Redesigned reminder/reassignment processing to focus on SLA-eligible orders. | No | Confirm whether orders equal shipments, periods, actual ranges, reliability measure, team attribution, and approval. |

## Evidence-backed differentiators

- **Performance work tied to operational workflows:** a stronger story than generic scalability,
  once Madar's measurements are verified.
- **Saudi-market integration judgment:** logistics, identity, payments, promissory-note workflows,
  and Saudi data validation form a coherent regional specialization; named services remain subject
  to approval.
- **Pragmatic architecture:** the CV presents isolation/adapters and modular-monolith decisions as
  responses to delivery constraints rather than architecture fashion.
- **Ownership after deployment:** deployments, monitoring, incident investigation, and data
  correction distinguish the profile from implementation-only backend work.
- **Correctness and evidence discipline:** fintech workflow concerns in the CV align well with the
  observable API/testing/documentation rigor in `saudi-utils`.
- **Backend-first with credible product breadth:** public DebtBox and transportation work supports
  collaboration across frontend/admin surfaces without diluting backend positioning.

## Weak, stale, or irrelevant evidence

- Archived academic and microservice tutorial repositories should not appear in selected work.
- Invitations is too lightly documented and too risky to offset its limited technical signal.
- Nile Taxi demonstrates breadth but not modern quality controls; linking it without context could
  weaken the senior positioning.
- Dependency names alone were not treated as expertise. RabbitMQ, BullMQ, NestJS, PostgreSQL,
  cloud, and observability depth must come from professional examples or owner-supplied artifacts.
- Repository stars, followers, and the new package's download count are not meaningful impact
  signals at this stage.

## Contradictions and evidence gaps

- The requirements emphasize NestJS and PostgreSQL, while the strongest public backend repository
  reviewed uses Express and MongoDB. Employer evidence or owner confirmation must carry the
  NestJS/PostgreSQL positioning.
- The CV calls out mature testing and production practices, but older public backend projects have
  no automated test/CI evidence. `saudi-utils` proves current discipline, not necessarily the same
  historical standard across every project.
- DebtBox public history proves meaningful product/admin contribution but does not prove the
  private backend claims. The portfolio must cite the CV/owner for those claims and avoid implying
  that public frontend code is the backend evidence.
- `saudi-utils` has unusually strong launch readiness but no maintenance history or adoption yet.
- No accessible evidence verifies Madar metrics, ArabDT outcomes, monitoring tools, RabbitMQ,
  BullMQ, AKS, AWS, Azure DevOps, or specific incident-response depth.
- The invitations README incorrectly names another project, weakening trust in that repository.
- The CV's location and personal contact details may be current, but currentness is not evidence of
  publication consent.

## Confidentiality and publication recommendations

### Safe after normal owner approval

- Public `saudi-utils` repository/npm links and exact, dated verification results.
- General Node.js/TypeScript backend positioning.
- Publicly attributable DebtBox contribution, worded as contribution rather than sole ownership.
- General supporting frontend/full-stack breadth.

### Generalize unless specifically approved

- Employer/client architecture, volumes, operational processes, incidents, database behavior, and
  partner evaluation.
- Provider adapters and fintech correctness mechanisms.
- Cloud region/vendor, deployment topology, observability setup, and security controls.
- ArabDT client/product stories and any realtime architecture.

### Explicit approval required

- Every quantitative Madar claim.
- Madar/ODS and DebtBox naming in detailed case studies.
- Government service, payment provider, partner, customer, fleet, or client names.
- Location, email, phone number, availability, employer/client logos, and screenshots.

### Do not publish

- Credentials, tokens, environment values, internal endpoints, production data, logs, private
  payloads, internal identifiers, proprietary code, or exploitable architecture.
- Any implication that Ali solely built Madar, DebtBox, or another team system.
- Links to the legacy backend repositories before credential revocation/remediation and client
  permission are confirmed.

## Prioritized owner questions

The concise question set is maintained in [open-questions.md](open-questions.md). Highest priority
is confirmation of legacy credential remediation, permission to name the two leading professional
systems, metric substantiation, ownership boundaries, and current contact/location details.

## Recommended inputs for Phase 2

Proceed to positioning/content strategy only after the blocking questions are answered. The best
current inputs are:

1. **Primary position:** Senior Backend Engineer focused on reliable, integration-heavy Node.js and
   TypeScript systems, with production ownership from architecture through operations.
2. **Primary proof:** one approved Madar performance/reliability narrative.
3. **Secondary proof:** one safely scoped DebtBox architecture/correctness narrative.
4. **Public proof:** a full `saudi-utils` case study with GitHub/npm links and dated verification.
5. **Career breadth:** one ArabDT story if permission and detail are available; otherwise a short,
   remediated Nile Taxi entry.
6. **Capability groups:** performance and data; integrations and workflows; correctness and
   reliability; production and delivery; open-source quality.
7. **Content constraints:** no exact metric, provider, client, contact detail, or repository link
   enters launch copy without the corresponding claim-register status changing to `approved`.

## Documentation changes in this phase

- Added this audit, the atomic claim register, and prioritized open questions.
- Expanded the root README to describe the documentation phase and link its outputs.
- Changed Phase 1 in the roadmap from `Not started` to `In progress` because owner confirmation and
  publication decisions remain outstanding.
- Made no material change to the approved requirements and no website, design, stack, or dependency
  decision.

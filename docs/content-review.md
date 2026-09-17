# Phase 3 Content Review

Review date: 17 September 2026

## Content produced

- [`src/content/pages/home.md`](../src/content/pages/home.md) — complete homepage copy.
- [`src/content/pages/experience.md`](../src/content/pages/experience.md) — web-oriented career narrative.
- [`src/content/pages/capabilities.md`](../src/content/pages/capabilities.md) — outcome-based engineering capabilities.
- [`src/content/pages/open-source.md`](../src/content/pages/open-source.md) — final `saudi-utils` feature copy.
- [`src/content/case-studies/logistics-platform.md`](../src/content/case-studies/logistics-platform.md) —
  Madar case study.
- [`src/content/case-studies/fintech-product.md`](../src/content/case-studies/fintech-product.md) —
  DebtBox case study.
- [`src/content/case-studies/saudi-utils.md`](../src/content/case-studies/saudi-utils.md) — public
  open-source case study.
- [`src/content/pages/page-metadata.md`](../src/content/pages/page-metadata.md) — route metadata copy.

## Claim-to-file traceability

| Claims                                 | Public use                                                                             | Files                                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `C001`, `C002`, `C043`, `C044`, `C047` | Title, experience, specialization, location, contact                                   | `home.md`, `capabilities.md`, `page-metadata.md`                                           |
| `C004`–`C011`                          | Madar role, scale, decisions, metrics, and operations                                  | `home.md`, `experience.md`, `capabilities.md`, `logistics-platform.md`, `page-metadata.md` |
| `C012`–`C018`                          | DebtBox role, architecture, workflows, integrations, infrastructure, and collaboration | `home.md`, `experience.md`, `capabilities.md`, `fintech-product.md`, `page-metadata.md`    |
| `C022`–`C029`                          | `saudi-utils` scope, verification, CI, release, and limitations                        | `home.md`, `open-source.md`, `saudi-utils.md`, `page-metadata.md`                          |
| `C038`, `C042`, `C046`                 | Docker delivery, supporting full-stack breadth, and chronology                         | `experience.md`, `capabilities.md`                                                         |

## Sensitive and quantitative claim review

| Claim  | File and section                                                                                               | Exact public wording                                                                                         | Status                    |
| ------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------- |
| `C005` | `home.md` / Madar; `logistics-platform.md` / Summary and Scale                                                 | “approximately 8,000–10,000 daily shipments”                                                                 | approved                  |
| `C006` | `home.md` / Madar; `logistics-platform.md` / Summary and Scale                                                 | “approximately 2.5 million total shipments”                                                                  | approved                  |
| `C007` | `home.md` / Madar; `logistics-platform.md` / Summary and Scale                                                 | “approximately 30 integrated fleets”                                                                         | approved                  |
| `C008` | `home.md` / Proof and Madar; `experience.md` / Madar; `logistics-platform.md` / Summary and Outcomes; metadata | “more than 90%” lower/reduced latency on critical shipment-list workloads                                    | approved                  |
| `C009` | `home.md` / Proof and Madar; `experience.md` / Madar; `logistics-platform.md` / Summary and Outcomes; metadata | “10×” more/increased supported export capacity                                                               | approved                  |
| `C010` | `logistics-platform.md` / Summary, Problem, Decisions, Outcomes                                                | daily order volume “grew from hundreds to thousands”                                                         | approved                  |
| `C012` | `home.md`, `experience.md`, `fintech-product.md`, metadata                                                     | “Founding Backend Engineer” and “from technical feasibility through soft launch and production readiness”    | approved                  |
| `C016` | `experience.md`, `fintech-product.md`                                                                          | Nafath was integrated; Nafith wording is limited to technical workflow collaboration                         | approved                  |
| `C017` | `experience.md`, `fintech-product.md`                                                                          | KSA-hosted MVP infrastructure using Docker, PostgreSQL, Redis, Nginx, and automated TLS                      | approved                  |
| `C024` | `home.md`, `open-source.md`, `saudi-utils.md`                                                                  | “1,503 tests” and “100% measured statement, branch, function, and line coverage” scoped to 17 September 2026 | supported public evidence |
| `C026` | `saudi-utils.md`                                                                                               | Node.js “22, 24, and 26” and green CI on the audited commit                                                  | supported public evidence |
| `C028` | `open-source.md`, `saudi-utils.md`                                                                             | Version `0.1.0` published on 17 September 2026 with matching tag                                             | supported public evidence |
| `C029` | `saudi-utils.md`                                                                                               | point-in-time production-dependency audit reported zero vulnerabilities                                      | supported public evidence |

## Names used

- **People:** Ali Alaraby.
- **Companies/products:** Obeikan Digital Solutions, Madar, DebtBox, ArabDT, RPAEgypt, and
  `saudi-utils`.
- **Government services:** Nafath and Nafith, only within the approved DebtBox distinction.
- **Public platforms:** GitHub, npm, and LinkedIn.
- **External fleets/vendors:** no names used.

## Private-system generalizations and safeguards

- Madar is identified but its internal services, schemas, identifiers, payloads, partner names,
  incidents, private URLs, proprietary code, and customer data are omitted.
- DebtBox is identified but private code, APIs, credentials, provider contracts, cloud vendor,
  topology, identifiers, and unfinished commercial arrangements are omitted.
- Madar and DebtBox are explicitly described as team-built. Ali's work is scoped to his own backend
  ownership and contributions.
- Nafath is described as implemented. Nafith is described only as technical workflow collaboration.
- No claim implies certification, regulatory approval, market adoption, transaction scale, revenue,
  or sole ownership.
- Internal review notes live in HTML comments marked `INTERNAL REVIEW — DO NOT RENDER` at the end of
  each case-study source. Phase 4 must exclude comments from rendered content and public content
  data.

## Intentional exclusions

- Phone number, current Riyadh residence, work authorization, immediate relocation, and general
  freelance/full-time availability.
- Madar partner names and all private operational or architectural details.
- DebtBox private repositories, public proprietary repository links, contracts, private APIs, and
  unverified adoption or scale.
- ArabDT client names, project details, architecture, and outcomes beyond the approved chronology
  and supported full-stack context.
- Nile Taxi and Invitations names, links, and claims pending security and publication review.
- Package size, `saudi-utils` adoption, user counts, long-term maintenance, and authoritative
  real-world verification.
- Unapproved cloud and observability breadth from `C039`–`C041`.
- Testimonials, logos, screenshots, blog copy, and the old portfolio.

## Remaining approvals and implementation inputs

- Supply the approved, versioned CV file and choose its final public asset filename.
- Reconfirm external URLs at launch as a routine link check. GitHub profile and repository URLs
  returned HTTP 200 on 17 September 2026. Automated requests to npm returned HTTP 403 and LinkedIn
  returned its non-standard 999 blocking response; the owner-approved URLs were preserved because
  those responses reflect access restrictions rather than a demonstrated invalid URL.
- Optional future approvals may add an ArabDT story, visuals, logos, or legacy project links; none
  is required for the approved launch copy.

## CV consistency

- Public title is consistently `Senior Backend Engineer`; the DebtBox role is consistently
  `Founding Backend Engineer`.
- Experience is consistently `6+ years`; overlapping freelance periods are not added to the total.
- Role dates match the confirmed `CV-01` chronology in `C046`.
- Location wording is consistently “Based in Egypt and open to relocation opportunities in Saudi
  Arabia,” with natural first-person variation.
- Technology capitalization is consistent: Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Redis,
  RabbitMQ, Docker, Nginx, GitHub, and npm.
- CTA labels are consistently `View selected work`, `Contact me`, `Download CV`, and contextual
  project actions.

## Wording risks reviewed

- Replaced generic scale and leadership language with scoped actions and decisions.
- Added team attribution near Madar and DebtBox claims rather than relying on one disclaimer.
- Kept all Madar metrics within their approved workload or platform scope.
- Distinguished implemented, collaborative, and planned/provider-boundary work for DebtBox.
- Qualified all point-in-time `saudi-utils` checks and separated coverage from correctness.
- Removed unsupported superlatives, generic enthusiasm, keyword walls, and repeated CV prose.

## Final review checklist

- [x] Every required content file exists.
- [x] Every homepage section in the approved information architecture has final copy.
- [x] All three selected case studies follow the approved content model.
- [x] All planned public routes have metadata copy.
- [x] Sensitive and quantitative statements map to claim IDs and retain approved scope.
- [x] Roles and dates agree with the confirmed CV baseline.
- [x] Internal review notes are visibly marked and non-rendering.
- [x] No private code, secret, internal URL, customer data, or infrastructure identifier appears.
- [x] No raw placeholder, phone number, unsupported availability, or unapproved claim appears.
- [x] Copy received a consistency and human-quality editing pass.

## Phase 6 voice and implementation review

The public homepage voice was revised on 17 September 2026 from detached third-person descriptions
to direct first-person ownership. The revision changes presentation, not evidence scope:

- project metadata now uses “I improved” and “I shaped” instead of “How Ali”;
- the hero leads with the kind of systems and constraints Ali owns, not a generic biography;
- proof points remain scoped to the approved workloads and preserve team attribution;
- capabilities, experience, open-source evidence, location, and contact facts remain unchanged;
- structured homepage fields are the single source for implemented hero, proof, about, selected-work,
  and contact copy.

The approved versioned CV (`/cv/ali-alaraby-senior-backend-engineer-2026.pdf`) was supplied and is
now linked from the hero, experience, contact, and footer. No placeholder download remains.

## Phase 7 case-study implementation review

Review date: 17 September 2026

- [x] All three case studies render their full approved bodies with a single top-level heading each.
- [x] Each study shows validated project, role, and timeline metadata and previous/next navigation.
- [x] Diagrams are generated only from validated frontmatter steps drawn from approved copy; no
      private schemas, providers, payloads, identifiers, or incident detail are introduced.
- [x] No code, screenshots, or sanitized visuals are published; none were authorized or required.
- [x] The only external links are the approved `saudi-utils` GitHub and npm destinations; a test
      restricts case-study link hosts to approved domains.
- [x] Internal review notes are stored in a validated, non-rendered frontmatter field, and the
      production output contains none of them.

## Phase 8 accessibility review

Review date: 17 September 2026

- [x] No public copy changed; accessibility work is limited to markup, styles, and verification.
- [x] Link purposes remain clear without surrounding context, including the footer CV download and
      the external `saudi-utils` GitHub and npm destinations.
- [x] Diagrams carry their step text as visible content, so no information is conveyed by color or
      shape alone.
- [x] The skip link, section anchors, and focus outline are verified against the production build.
- [x] Method, contrast ratios, and known limitations are recorded in
      [accessibility.md](accessibility.md).

## Phase 9 metadata and discovery review

Review date: 17 September 2026

- [x] No public copy changed; work is limited to metadata, structured data, and discovery files.
- [x] Page titles and descriptions are drawn from the approved content frontmatter and remain unique
      per route; the case-study suffix only adds the owner name.
- [x] Structured data restates only approved facts: job title, approved profile URLs, and case-study
      headlines and descriptions already published on the page.
- [x] The social card uses the approved name, role, and domain with no claims, metrics, or private
      system detail.
- [x] The approved destinations were checked: GitHub returned 200; npm and LinkedIn blocked scripted
      requests and are flagged for a browser re-check at launch in [seo.md](seo.md).
- [x] Canonical, Open Graph, and sitemap URLs use the owner-approved domain
      `https://alialaraby.com`, which goes live in Phase 11.

## Phase 10 production hygiene review

Review date: 17 September 2026

- [x] No public copy changed; work is limited to verification and automated checks.
- [x] The built output contains no placeholder copy, unfinished markers, internal review notes, or
      internal decision/doc references.
- [x] The built output contains no credentials, keys, tokens, development hosts, or phone numbers.
- [x] The only published email address is the owner-approved `alisakralaraby@gmail.com`.
- [x] Full method, measured artifact sizes, budgets, and the browser-based launch checklist are in
      [production-qa.md](production-qa.md).

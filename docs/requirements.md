# Portfolio Requirements

## 1. Product goal

Create a modern, professional portfolio that accurately presents Ali as a Senior Backend Engineer with 6+ years of experience designing, building, operating, and improving production systems.

The portfolio should help with:

- senior backend and backend-leaning full-stack opportunities
- roles and professional connections in Saudi Arabia and MENA
- credible freelance and part-time conversations
- technical-lead, founding-engineer, and system-ownership positioning
- discovery of Ali's open-source work, especially `saudi-utils`

## 2. Primary audiences

1. Engineering managers and technical interviewers
2. Recruiters hiring for Node.js, NestJS, TypeScript, or backend roles
3. Founders and product leaders seeking an experienced engineer
4. Developers evaluating Ali's open-source and architectural work

## 3. Positioning

The site should communicate, with evidence:

- 6+ years of professional software engineering experience across logistics, fintech, digital education, e-commerce, enterprise, transportation, and hospitality systems
- senior backend expertise in Node.js, NestJS, TypeScript, REST APIs, PostgreSQL, MongoDB, Redis, RabbitMQ, BullMQ, scheduled jobs, and background workers
- experience designing business-critical integrations, distributed workflows, modular monoliths, event-driven systems, and replaceable provider adapters
- evidence of measurable production impact, including PostgreSQL performance optimization, scalable exports, SLA automation, and reliable external integrations
- ownership beyond isolated tickets: product discovery, feasibility, architecture, implementation, deployment, monitoring, incident investigation, data correction, and technical stakeholder collaboration
- experience building Saudi-market products and integrations, including logistics and security-conscious fintech workflows
- practical cloud and production experience with Docker, Docker Compose, Nginx, Linux, Azure DevOps, AWS, Alibaba Cloud, and Kubernetes/AKS, with depth described accurately per project
- observability experience using tools such as Grafana, Sentry, OpenTelemetry, and Azure Monitor where supported by project evidence
- supporting frontend experience without presenting UI work as the main specialization

Do not use vague claims such as “passionate developer,” “coding ninja,” or “expert in everything.”

### Evidence-backed differentiators to evaluate

The CV provides the following candidate claims. They may be used only after publication approval and evidence review:

- ownership of backend capabilities for a logistics platform handling 8,000–10,000 daily shipments, approximately 2.5 million total shipments, and approximately 30 fleet integrations
- more than 90% latency reduction on critical shipment-list workloads through PostgreSQL query and index optimization
- 10× improvement in supported shipment-export capacity through queued, streaming, and chunked processing
- redesign of SLA reminder and reassignment workflows to remain reliable as daily volume grew from hundreds to thousands
- founding backend ownership for DebtBox from technical feasibility through soft launch and production readiness
- architecture of provider-independent payment, identity, messaging, and government-integration adapters

These figures must not be silently rounded, strengthened, or presented as solely attributable to Ali without appropriate context.

## 4. Required information architecture

The exact route structure is decided after the audit, but the final product must make these easy to find:

- concise hero and professional positioning
- selected experience and responsibilities
- 3–5 evidence-backed project or system case studies
- technical capabilities grouped by engineering problem, not logo walls
- open-source work, including `saudi-utils`
- concise professional timeline or experience summary
- contact paths and downloadable CV
- GitHub and LinkedIn profiles

A focused single-page site with case-study routes is preferred unless the content audit proves another structure is better.

### Initial case-study priorities

The evidence phase should evaluate these candidates first:

1. **Madar:** scale, PostgreSQL optimization, background exports, SLA workflows, integration architecture, fleet onboarding, and production ownership.
2. **DebtBox:** founding backend role, fintech correctness, modular-monolith design, provider adapters, Saudi integrations, and KSA infrastructure.
3. **`saudi-utils`:** open-source API design, TypeScript, automated tests, packaging, documentation, CI/CD, and secure release engineering.
4. **Selected ArabDT work:** one safely publishable story covering realtime education, e-commerce, legacy modernization, or third-party integrations.

The final portfolio may use fewer case studies if confidentiality or evidence quality is insufficient.

## 5. Case-study requirements

Each published case study should include only approved information:

- context and user/business problem
- Ali's role and ownership
- important technical constraints
- decisions and trade-offs
- implementation or architecture highlights
- measurable result when a verified metric exists
- technology used in context
- evidence source and confidentiality status

Use diagrams only where they clarify a real system. Redact or generalize confidential employer/client information.

## 6. Content requirements

- English-first, concise, natural, and technically credible
- Written in first person where appropriate
- No copied CV paragraphs or keyword stuffing
- No invented metrics, clients, testimonials, users, revenue, scale, or impact
- No private repository links or inaccessible “View code” buttons
- Clearly distinguish open-source, personal product, and professional experience
- Explain what each project demonstrates, not merely what stack it uses
- Treat all draft copy as unapproved until entered in `docs/content-evidence.md`
- Use the CV as the initial career baseline, then reconcile it with repository evidence, public sources, and explicit owner confirmation
- Do not omit strong private-system experience merely because its repository is unavailable; present it through approved, safely generalized outcomes
- Do not expose private repository names, code, architecture, customers, partners, or operational details to prove a claim

## 7. Visual requirements

- Simple, modern, professional, and responsive
- Excellent readability and information hierarchy
- Restrained palette suitable for a technical professional
- Light theme required; dark theme is optional and should not delay launch
- No animation-heavy hero, 3D scene, particle background, skill bars, or decorative carousel
- Real project visuals, diagrams, or code excerpts only when they add evidence
- Consistent typography, spacing, cards, buttons, and link treatment

## 8. Functional requirements

- Responsive navigation
- Accessible project/case-study navigation
- Working contact options that do not require a custom backend
- Downloadable, versioned CV asset
- External links open safely and are clearly identified
- Copyable email address or reliable `mailto:` fallback
- Optional privacy-conscious analytics only after owner approval
- No contact form unless spam handling, privacy, and delivery are intentionally designed

## 9. Technical requirements

The final stack is chosen during the architecture phase after inspecting the new repository and deployment target. It must support:

- strict TypeScript
- static or pre-rendered output where practical
- Vercel-compatible deployment
- maintainable content structure
- automated formatting, linting, typechecking, tests, and production build
- optimized images and fonts
- metadata, Open Graph, sitemap, robots, structured data where valid, and canonical URLs
- dependency and secret hygiene

Prefer a small static architecture. Do not introduce server rendering, a CMS, authentication, a database, or API routes without a concrete requirement.

## 10. Accessibility requirements

- WCAG 2.2 AA as the target
- semantic landmarks and heading hierarchy
- keyboard-complete operation
- visible focus states
- sufficient color contrast
- reduced-motion support
- descriptive link and button labels
- alt text for informative images and empty alt text for decorative images
- no information available only through hover, color, or animation

## 11. Performance targets

Targets apply to the production build and must be measured rather than assumed:

- Lighthouse Performance, Accessibility, Best Practices, and SEO target: 95+ on representative core pages
- Core Web Vitals in the “good” range when tested under an appropriate profile
- minimal client-side JavaScript
- no unnecessarily large media or third-party script
- no layout shift caused by unsized media or late-loading fonts

These are targets, not claims, until Phase 10 verification.

## 12. SEO and discovery

- descriptive title and summary focused on backend engineering
- correct canonical domain
- social sharing image and metadata
- sitemap and robots configuration
- Person/ProfilePage structured data only when valid
- indexable, meaningful text rather than content hidden behind interactions
- project pages with specific titles and descriptions

## 13. Privacy and safety

- no credentials, secrets, personal IDs, private email threads, internal screenshots, customer records, or production logs
- no exact operational metrics unless public or owner-approved
- no disclosure of proprietary architecture that could create security or contractual risk
- no unsupported use of employer or client logos
- public contact information must be approved by Ali
- location and availability wording must be confirmed at launch; the CV currently states Riyadh, Saudi Arabia and must not be copied automatically if circumstances change
- company scale metrics, government-integration names, partner names, and production architecture require explicit publication approval even when they appear in the CV

## 14. Out of scope for initial launch

- blog platform or CMS
- admin panel
- authentication
- comments
- newsletter
- custom backend/contact API
- complex animation system
- multilingual implementation
- automatic GitHub activity feed
- visitor tracking before explicit approval

## 15. Definition of done

The initial portfolio is complete when:

- all roadmap phases required for launch are complete
- every important claim has approved evidence
- required pages and contact paths work
- visual, responsive, accessibility, SEO, security, and performance checks pass
- CI passes from a clean install
- the production deployment is verified
- no placeholder, confidential, or misleading content remains

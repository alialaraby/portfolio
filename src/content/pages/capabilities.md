---
kind: capabilities
---

### Backend architecture and APIs

I shape backend boundaries around the product's constraints and expected change. My work includes
REST APIs, modular-monolith design, provider-independent adapters, and business workflows built with
Node.js, NestJS, and TypeScript. DebtBox shows this at early-product scale; Madar shows how backend
capabilities evolve inside an established operational platform.

**Technologies in context:** Node.js, NestJS, TypeScript, REST APIs.

### Data and performance

Performance work starts with the actual workload. On Madar, I redesigned critical PostgreSQL
queries, added targeted indexes, simplified joins, and used purpose-built SQL where the application
query path was not enough. I also moved large exports into queued, streaming, and chunked work so
capacity was not tied to one request or one in-memory dataset.

**Technologies in context:** PostgreSQL, MongoDB, Redis, SQL, streaming and chunked processing.

### Integrations and distributed workflows

Provider integrations need clear boundaries because external contracts, failures, and commercial
choices change. I use adapter boundaries to contain those differences and background processing for
work that should not block a request. The evidence spans logistics integrations at Madar and
payment, identity, messaging, and government-service boundaries at DebtBox.

**Technologies in context:** RabbitMQ, background workers, scheduled jobs, REST integrations,
provider adapters.

### Reliability and production operations

I stay involved after deployment. My work includes SLA workflow redesign, monitoring, incident
investigation, targeted production data correction, and correctness controls such as idempotency,
transactions, and explicit data-consistency decisions. The goal is not to claim that failures never
happen; it is to make important workflows easier to reason about and recover.

**Technologies in context:** PostgreSQL transactions, Redis, queues, Docker, Nginx.

### Infrastructure and delivery

I have practical Docker-based delivery experience and designed the KSA-hosted MVP environment for
DebtBox using Docker, PostgreSQL, Redis, Nginx, and automated TLS. In public work, `saudi-utils`
demonstrates CI checks, clean package verification, pinned workflow actions, and a guarded npm
release design.

**Technologies in context:** Docker, Docker Compose, Nginx, Linux, GitHub Actions, npm trusted
publishing.

### Product and technical collaboration

Backend decisions are often product decisions in disguise. I work with product leaders, operations,
external providers, and frontend or mobile engineers to test feasibility, define ownership
boundaries, evaluate trade-offs, and plan delivery. That collaboration is especially visible in
DebtBox's early product work and Madar's fleet onboarding and operational workflows.

### Supporting full-stack perspective

Earlier roles and public contribution history include frontend and admin work. I use that
experience to design clearer contracts and collaborate with API consumers, while keeping backend
engineering as my primary specialization.

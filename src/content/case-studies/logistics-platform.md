---
title: "Madar: Improving Performance and Workflows in a Growing Logistics Platform"
description: "I improved PostgreSQL workloads, export capacity, SLA processing, and integration boundaries as part of the team behind a growing logistics platform."
classification: professional-system
route: /work/logistics-platform
order: 1
project: Madar
role: Senior Backend Engineer
timeline: October 2024–present
diagram:
  label: From workload analysis to production operations
  steps:
    - label: Analyze the workload
      detail: Generated queries and access patterns behind the slower operational paths
    - label: Redesign data access
      detail: Query redesign, targeted indexes, join simplification, and purpose-built SQL
    - label: Move exports to background work
      detail: Queued jobs with streaming and chunked processing outside the request lifecycle
    - label: Narrow SLA processing
      detail: Reminders and reassignments focused only on orders that require action
    - label: Operate in production
      detail: Deployment, monitoring, incident investigation, and targeted data correction
internalReview: |
  Evidence: C004-C011 and CV-01, approved 17 Sep 2026.
  Disclosure: Madar name and listed metrics are approved. Fleet/vendor identities, schemas, payloads,
  service names, incident details, internal URLs, proprietary code, and production data are excluded.
  Attribution: Madar is explicitly described as team-built; outcomes are scoped to Ali's work.
  Public links: none approved or required.
---

## Summary

Madar is a team-built logistics platform that grew to approximately 8,000–10,000 daily shipments,
approximately 2.5 million total shipments, and approximately 30 integrated fleets. As a Senior
Backend Engineer, I owned and evolved important capabilities across integrations, shipment
assignment, pricing, invoicing, SLA automation, reporting, exports, and production operations.

My work included reducing latency by more than 90% on critical shipment-list workloads,
redesigning exports to support 10× more capacity, and adapting SLA workflows as daily order volume
grew from hundreds to thousands.

## Project context

A logistics platform sits between operational teams, shipment data, business rules, and external
fleets. Growth increases more than row counts: operational filters become more expensive, exports
outgrow request-response processing, scheduled work competes for resources, and each integration
introduces another contract the platform must manage.

Madar's growth made those constraints visible across daily operations. The platform and its results
belong to the wider company team; this case study focuses on the backend areas I personally owned or
materially contributed to.

## My role

I worked as a Senior Backend Engineer within the Madar team. My scope included:

- backend capabilities for integrations, assignment, pricing, invoicing, SLA automation,
  reporting, and exports;
- PostgreSQL workload analysis and performance changes;
- redesign of SLA reminder and reassignment processing;
- fleet onboarding and technical evaluation;
- an isolated adapter-service proposal for a strategically important integration; and
- deployment, monitoring, incident investigation, and targeted production data correction with the
  wider team.

I did not design, build, operate, or scale the entire platform alone.

## Problem

Several workflows needed to change as operational volume increased:

- Critical shipment-list filters had become too slow for operational use.
- Large exports placed too much work inside a synchronous request and had a limited supported size.
- SLA reminders and reassignment processing needed to remain reliable as daily order volume moved
  from hundreds to thousands.
- Fleet integrations needed technical evaluation and clearer isolation from core business logic.

These were different symptoms of one broader issue: workflows that were acceptable at an earlier
scale needed more deliberate data access, processing boundaries, and operational ownership.

## Scale and constraints

At the approved reporting point, the platform had grown to:

- approximately 8,000–10,000 daily shipments;
- approximately 2.5 million total shipments; and
- approximately 30 integrated fleets.

Those figures describe platform scale, not results attributable to one engineer. Partner names,
payloads, internal service boundaries, schemas, identifiers, and production incidents remain
private.

## Technical challenges

### Operational query performance

Shipment-list requests combined filters and relationships used by operational teams. Improving the
workload required examining generated queries and data access patterns rather than treating every
slow request as a hardware problem.

### Export capacity

Large exports did not belong in a single long-running request or one large in-memory operation. The
workflow needed a boundary between requesting an export and doing the work.

### Time-sensitive background processing

SLA reminders and reassignments needed to focus on eligible work and remain manageable as daily
volume grew. Reprocessing too much data or coupling all work into one scheduled pass would make
failure and recovery harder to reason about.

### Integration change

External fleet and vendor systems evolve independently. A strategically important integration
needed a boundary that could absorb provider-specific change without spreading it through the core
platform.

## Decisions and trade-offs

### Optimize the workload, not only the endpoint

I combined query redesign, targeted indexing, join optimization, and purpose-built SQL. The
trade-off was accepting more specialized data access for a critical operational path in exchange
for predictable performance where a generic query shape was insufficient.

### Move exports out of the request lifecycle

I re-engineered exports around queued background work, streaming, and chunked processing. This
added workflow state and operational concerns, but removed the assumption that a large dataset must
be assembled and returned within one request.

### Narrow SLA processing to eligible work

I redesigned the relevant reminder and reassignment flows around the orders that actually required
action. The intent was to reduce unnecessary work and make processing behavior clearer as volume
grew.

### Isolate provider-specific behavior

I designed and advocated for a separate adapter service for a strategically important integration.
The boundary introduced another component to operate, but reduced the pressure to embed one
provider's contract throughout core logistics logic.

## Implementation approach

The performance work used PostgreSQL query analysis, index changes, join simplification, and
purpose-built SQL for the critical shipment-list workloads. Export processing used queued jobs,
streaming, and chunks so work could be completed incrementally. SLA processing was reshaped around
eligible records and clearer reminder and reassignment stages.

For integrations, I contributed to onboarding and technical evaluation, then used adapter
boundaries to keep provider concerns distinct from core workflows. Production work included
deployments, monitoring, incident investigation, and carefully scoped data correction with the
team.

## Outcomes

- More than 90% lower latency on the described critical shipment-list workloads.
- 10× more supported export capacity after the queued, streaming, and chunked redesign.
- SLA reminder and reassignment workflows redesigned for a context where daily order volume had
  grown from hundreds to thousands.
- A clearer isolation strategy for a strategically important external integration.

The figures retain their approved scope. They should not be read as platform-wide performance
claims or as outcomes produced by one person alone.

## Reliability and operational considerations

Moving work into background processing changes the failure model. Jobs need observable state,
bounded work, and a recovery path. Database changes must also be evaluated against write cost and
other query patterns, not only the target read path.

Operational participation mattered here: monitoring, incident investigation, and targeted data
correction provided feedback that design-time assumptions could not supply. This case study omits
incident details, internal tools, identifiers, and customer data.

## Lessons and trade-offs

- Scale problems are often workflow problems as much as query problems.
- Specialized SQL can be the responsible choice for a critical path when its scope and maintenance
  cost are explicit.
- Background processing improves capacity only when failure, retries, and observability are treated
  as part of the design.
- Integration boundaries are most valuable when they contain a real source of change, not when they
  exist only to satisfy an architectural pattern.

## Technologies in context

PostgreSQL, queued background processing, streaming, and chunked work supported the changes
described here. The important decisions were how data was accessed, where long-running work
executed, and how integration-specific behavior was isolated.

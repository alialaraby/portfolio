---
title: "saudi-utils: Designing Explicit Validation Contracts for Saudi Data"
description: "The API, validation boundaries, testing, packaging, and guarded release decisions behind a zero-runtime-dependency TypeScript toolkit for Saudi data formats."
classification: open-source
route: /work/saudi-utils
order: 3
project: saudi-utils
cardContext: Open-source TypeScript package
cardProblem: Giving Saudi applications dependable, typed utilities for common local data formats.
highlights:
  - Ships with zero runtime dependencies and a compact typed API.
  - Backed by more than 1,500 automated tests and strong coverage.
  - Published on npm through a guarded automated release path.
technologies: [TypeScript, Vitest, GitHub Actions, npm]
role: Creator and publisher
timeline: Published 17 September 2026
diagram:
  label: From typed API to guarded release
  steps:
    - label: Design the typed API
      detail: One small root surface across several Saudi data categories
    - label: Define validation contracts
      detail: Deterministic errors and documented limits for every rule
    - label: Verify behavior broadly
      detail: Tests covering examples, edge cases, invariants, types, and clean consumers
    - label: Package for consumers
      detail: Typed ESM output with no runtime dependencies
    - label: Publish through a guarded path
      detail: Pinned CI, trusted publishing, staging, and protected approval
repository: https://github.com/alialaraby/saudi-utils
package: https://www.npmjs.com/package/saudi-utils
internalReview: |
  Evidence: C022-C029, GH-SU-01, NPM-SU-01, CI-SU-01, RUN-SU-01.
  Point-in-time wording: all test, coverage, CI, compatibility, and vulnerability statements retain
  the 17 Sep 2026 audit scope where needed. No adoption, community, long-term maintenance,
  package-size, authoritative-verification, or defect-free claim is made.
---

## Summary

`saudi-utils` is an MIT-licensed TypeScript toolkit for deterministic offline validation of common
Saudi data formats. I created it to give application developers typed APIs, predictable results,
and clear limits without adding runtime dependencies.

The project is public, so its source, tests, documentation, package output, and release workflow can
be inspected directly.

## Project context

Saudi applications often need to check structured values such as identity numbers, IBANs, business
and tax identifiers, telecom numbers, and National Address fields. Teams can easily end up
reimplementing partial rules with inconsistent errors and unclear assumptions.

A reusable package needed to be strict enough to be dependable as an offline check while avoiding a
more dangerous claim: format, checksum, or structural validation cannot establish that a real-world
record exists, belongs to a person, or is currently active.

## My role

I designed, implemented, tested, documented, packaged, and published the initial release. Public
history identified me as the sole author at the 17 September 2026 audit point. The project is new,
so that fact should not be confused with established adoption or a long maintenance record.

## Problem

The package needed to provide:

- a small, typed API across several Saudi data categories;
- deterministic validation and error precedence;
- documentation that distinguishes evidence-backed rules from assumptions;
- consumer-friendly package output with no runtime dependencies; and
- a release process that reduces supply-chain and publishing risk.

## Scale and constraints

Version `0.1.0` was published to npm on 17 September 2026. At the audit point, the project contained
14 test files and 1,503 passing tests with 100% measured statement, branch, function, and line
coverage.

These are repository and test-suite measurements, not user, adoption, or production-impact
metrics. No package-size claim is made because the Phase 1 evidence did not record an approved
figure.

## Technical challenges

### Honest validation boundaries

Many identifiers mix formatting rules, checksums, ranges, and external authority. The API needed to
say exactly which kind of evidence a successful check provides.

### Predictable API behavior

Consumers need stable types, deterministic failure precedence, and useful errors. Edge cases and
ambiguous input coercion can make a validation library harder to trust than duplicated local code.

### Package compatibility

The published artifact needed to expose a typed ESM API, contain the intended files, and work from a
clean consumer project rather than only inside its own repository.

### Release safety

Publishing a package introduces credential and workflow risks. The release design needed guarded
permissions and a review point without claiming that automation alone makes a release secure.

## Decisions and trade-offs

### Keep the runtime surface small

I chose zero runtime dependencies and a typed root API. That reduces consumer dependency exposure
and keeps behavior easier to inspect, but it also means each included rule needs direct maintenance.

### Document what validation cannot prove

Validation contracts are evidence-labelled and document their limits. This makes the documentation
more explicit than a simple true/false API, but avoids presenting offline checks as authoritative
verification.

### Test behavior and package consumption

The test strategy covers examples, edge cases, invariants, types, and performance-sensitive paths.
Packaging checks and clean-consumer tests verify the artifact from a user's perspective. High
coverage improves visibility into exercised behavior; it does not prove permanent correctness.

### Guard the publishing path

The npm workflow uses pinned actions, OpenID Connect trusted publishing, staging, and a protected
environment approval step. The initial npm package and Git tag exist; no automated release run had
occurred at the audit point, so the workflow is described as a design rather than proven release
history.

## Implementation approach

The package organizes validation by Saudi data category behind a typed root API. Contracts define
accepted input, normalization behavior where supported, deterministic error outcomes, and the
evidence level behind each rule.

CI covers supported Node.js 22, 24, and 26 environments. The audited checks included formatting,
linting, strict type checking, documentation, tests, build, package inspection, and clean ESM and
strict-TypeScript consumer projects.

## Outcomes

- `saudi-utils@0.1.0` published to npm with a matching `v0.1.0` Git tag.
- No runtime dependencies.
- 1,503 passing tests and 100% measured statement, branch, function, and line coverage in the
  17 September 2026 audit environment.
- Green CI on the audited main commit across Node.js 22, 24, and 26.
- Formatting, lint, strict typecheck, documentation, build, package, and clean-consumer checks
  passed during the audit.
- The point-in-time production-dependency audit reported zero vulnerabilities; the package has no
  runtime dependencies.

## Reliability, security, and operational considerations

The package handles data formats, not authoritative records. Applications still need the relevant
official service or business process when identity, ownership, status, or regulatory validity must
be established.

Pinned workflow actions, short-lived trusted-publishing credentials, staging, and protected approval
reduce release risk. They do not remove the need to review rule changes, dependencies, and source
material over time.

## Lessons and trade-offs

- A validation API is more credible when it documents the boundary of its knowledge.
- Zero runtime dependencies simplify the consumer graph but increase responsibility for maintaining
  each rule directly.
- Coverage is useful evidence about exercised code, not a substitute for authoritative sources or
  ongoing review.
- Package quality includes the installed consumer experience, not only repository-local tests.

## Technologies in context

TypeScript supplies the public contracts and strict type checking. Node.js provides the supported
runtime matrix. GitHub Actions runs verification, and npm trusted publishing is part of the guarded
release design.

## Public links

- [GitHub repository](https://github.com/alialaraby/saudi-utils)
- [npm package](https://www.npmjs.com/package/saudi-utils)

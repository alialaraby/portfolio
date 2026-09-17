---
kind: open-source
---

# Open Source

## `saudi-utils`

Saudi applications often need to check structured values before sending them to another system or
accepting them into a workflow. `saudi-utils` is an MIT-licensed TypeScript toolkit for deterministic
offline validation of common Saudi identity, banking, business and tax, telecom, and National
Address formats.

I designed the package for developers who want typed APIs, predictable error behavior, and clear
limits. The documentation labels the evidence behind each validation contract and distinguishes
format or checksum validation from authoritative verification. A successful result does not prove
that an identity, account, address, or registration exists or is active.

The package has no runtime dependencies. In the 17 September 2026 audit environment, 1,503 tests
passed with 100% measured statement, branch, function, and line coverage. Formatting, linting,
strict type checking, documentation, build, package, and clean-consumer checks also passed. These
are dated engineering checks, not a guarantee that every rule is permanently correct.

The release design uses pinned workflow actions, OpenID Connect trusted publishing, a staging step,
and protected-environment approval. Version `0.1.0` was published to npm on 17 September 2026. The
project demonstrates current API, testing, documentation, packaging, and release practices; it does
not yet establish long-term adoption or maintenance history.

- [View the source on GitHub](https://github.com/alialaraby/saudi-utils)
- [View the package on npm](https://www.npmjs.com/package/saudi-utils)
- Read the case study at `/work/saudi-utils`

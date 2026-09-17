import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

import { describe, expect, it } from "vitest";

const distDir = resolve("dist");

const TEXT_EXTENSIONS = new Set([
  ".html",
  ".xml",
  ".txt",
  ".css",
  ".svg",
  ".json",
]);
const APPROVED_EMAILS = new Set(["alisakralaraby@gmail.com"]);

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const buildExists = (): boolean => {
  try {
    return statSync(join(distDir, "index.html")).isFile();
  } catch {
    return false;
  }
};

const rel = (file: string): string =>
  relative(distDir, file).split(sep).join("/");

const textFiles = (): string[] =>
  walk(distDir).filter((file) => TEXT_EXTENSIONS.has(extname(file)));

const forbidden: { label: string; pattern: RegExp }[] = [
  {
    label: "placeholder text",
    pattern: /\b(lorem ipsum|placeholder|coming soon|tbd)\b/gi,
  },
  { label: "unfinished marker", pattern: /\b(todo|fixme|xxx)\b/gi },
  { label: "internal review field", pattern: /internalReview/g },
  { label: "internal review comment", pattern: /INTERNAL REVIEW/g },
  {
    label: "unapproved review tag",
    pattern: /(needs-owner-confirmation|content-evidence|claim register)/gi,
  },
  { label: "internal decision reference", pattern: /\bD0\d\d\b/g },
  { label: "internal doc path", pattern: /\bdocs\//g },
  { label: "cloud access key", pattern: /AKIA[0-9A-Z]{16}/g },
  { label: "private key", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
  {
    label: "provider token",
    pattern: /\b(sk|ghp|xox[baprs])-[A-Za-z0-9]{16,}/g,
  },
  {
    label: "credential assignment",
    pattern: /\b(password|passwd|client_secret|api[_-]?key)\s*[:=]/gi,
  },
  { label: "bearer token", pattern: /Bearer\s+[A-Za-z0-9._-]{20,}/g },
  {
    label: "local development host",
    pattern: /\b(localhost|127\.0\.0\.1|0\.0\.0\.0|example\.com)\b/gi,
  },
  { label: "phone number", pattern: /(\+966|\b05\d{8}\b)/g },
];

describe.skipIf(!buildExists())("built output hygiene", () => {
  const files = buildExists() ? textFiles() : [];

  it("covers the generated text assets", () => {
    expect(files.length).toBeGreaterThanOrEqual(8);
  });

  for (const { label, pattern } of forbidden) {
    it(`contains no ${label}`, () => {
      const hits = files.flatMap((file) =>
        [...readFileSync(file, "utf8").matchAll(pattern)].map(
          (match) => `${rel(file)}: ${match[0]}`,
        ),
      );
      expect(hits).toEqual([]);
    });
  }

  it("publishes only the approved email address", () => {
    const emails = files.flatMap((file) =>
      [
        ...readFileSync(file, "utf8").matchAll(
          /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
        ),
      ].map((match) => match[0].toLowerCase()),
    );

    expect(emails.length).toBeGreaterThan(0);
    expect(
      [...new Set(emails)].filter((email) => !APPROVED_EMAILS.has(email)),
    ).toEqual([]);
  });
});

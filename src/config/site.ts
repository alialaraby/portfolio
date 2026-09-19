export const site = {
  name: "Ali Alaraby",
  title: "Ali Alaraby — Senior Backend Engineer",
  description:
    "Senior Backend Engineer building Node.js, NestJS, TypeScript, and PostgreSQL systems for performance, scalability, integrations, and production reliability.",
  origin: "https://alialaraby.github.io",
  basePath: "/portfolio",
  url: "https://alialaraby.github.io/portfolio/",
  locale: "en",
  ogImage: {
    path: "og/ali-alaraby-og.png",
    width: 1200,
    height: 630,
    alt: "Ali Alaraby — Senior Backend Engineer",
    type: "image/png",
  },
} as const;

export const withBasePath = (path = "/"): string => {
  if (path === site.basePath || path.startsWith(`${site.basePath}/`))
    return path;
  return `${site.basePath}/${path.replace(/^\//, "")}`;
};

export const absoluteUrl = (path = "/"): string =>
  new URL(withBasePath(path), `${site.origin}/`).href;

import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { absoluteUrl } from "../config/site";

export const GET: APIRoute = async () => {
  const entries = (await getCollection("caseStudies")).sort(
    (left, right) => left.data.order - right.data.order,
  );

  const paths = ["/", ...entries.map((entry) => `${entry.data.route}/`)];
  const urls = paths
    .map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

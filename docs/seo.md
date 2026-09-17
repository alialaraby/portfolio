# SEO and discovery

Search and social metadata for the static portfolio, verified in Phase 9. The production domain is
`https://alialaraby.github.io/portfolio/`, recorded in `src/config/site.ts` and `astro.config.ts`.

## Per-route metadata

Titles and descriptions are unique per page. Case-study titles append the owner name; descriptions
come from validated content frontmatter, so metadata cannot drift from the page body.

| Route                       | Title                                                               | Description source       |
| --------------------------- | ------------------------------------------------------------------- | ------------------------ |
| `/`                         | Ali Alaraby — Senior Backend Engineer                               | `site.description`       |
| `/work/fintech-product/`    | DebtBox: Building a Fintech Backend… — Ali Alaraby                  | case-study `description` |
| `/work/logistics-platform/` | Madar: Improving Performance and Workflows… — Ali Alaraby           | case-study `description` |
| `/work/saudi-utils/`        | saudi-utils: Designing Explicit Validation Contracts… — Ali Alaraby | case-study `description` |
| `/404/`                     | Page not found — Ali Alaraby                                        | fixed, `noindex`         |

`src/layouts/BaseLayout.astro` emits the canonical link, Open Graph (`type`, `site_name`, `locale`,
`url`, `title`, `description`, `image` plus dimensions, alt, and type), and Twitter
`summary_large_image` metadata for every page. Case studies use `og:type=article`.

## Social image

`public/og/ali-alaraby-og.png` (1200×630) is the share card, referenced absolutely for `og:image`,
`og:image:width/height/alt`, and `twitter:image`. The editable source is the sibling
`ali-alaraby-og.svg`, built from the documented palette (ink, off-white, orange focus accent).

Quick Look renders SVG into a square box and clips wide art, so the PNG is exported by padding the
SVG to 1200×1200 with the card centered, rendering at `-s 1200`, and center-cropping to 1200×630:

```sh
qlmanage -t -s 1200 -o . _og-square.svg   # squares the design so nothing is clipped
sips -c 630 1200 _og-square.svg.png --out ali-alaraby-og.png
```

Regenerate only when the card design changes; the PNG is committed and the build does not depend on
Quick Look.

## Structured data

JSON-LD is emitted per page and validated by the build tests.

- **Homepage:** `ProfilePage` whose `mainEntity` is a `Person` (name, job title, URL, email, and
  `sameAs` for GitHub and LinkedIn). Profile URLs come from the approved homepage content, not
  hard-coded strings.
- **Case studies:** `TechArticle` (headline and description from frontmatter, canonical `url`,
  `author` Person, `isPartOf` WebSite) plus a three-item `BreadcrumbList` (Home → Selected work →
  the study). No claims beyond the approved page content are added.

## Sitemap and robots

`src/pages/sitemap.xml.ts` is a dependency-free Astro endpoint. It lists the homepage and the three
case-study routes as absolute URLs in `order`, and deliberately excludes the 404.

`public/robots.txt` allows all crawling and points to the sitemap:

```
User-agent: *
Allow: /

Sitemap: https://alialaraby.github.io/portfolio/sitemap.xml
```

## Link verification

| Destination                         | Result                                                                  |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `github.com/alialaraby`             | Reachable (HTTP 200)                                                    |
| `github.com/alialaraby/saudi-utils` | Reachable (HTTP 200)                                                    |
| npm `saudi-utils`                   | Returned 403 to a scripted client (npm bot protection), not a dead link |
| LinkedIn `ali-sakr-alarby`          | Returned 999 to a scripted client (LinkedIn bot protection)             |
| `mailto:` and CV PDF                | Present in the built homepage and resolved from `public/`               |

Automated tests assert every external host and the email/CV links exist in the output, but live
reachability is a manual check because GitHub, npm, and LinkedIn block scripted requests differently.
Re-confirm the two bot-protected links in a browser at launch.

## Known limitations

- The GitHub Pages project URL is not serving yet; deployment is Phase 11. Canonical, Open Graph,
  and sitemap URLs include the required `/portfolio` base path.
- Structured data is validated structurally (types, URLs, headings, breadcrumb length); it is not
  submitted to or parsed by a search engine in this phase.
- No `hreflang`, RSS, or localization metadata exists because the site is English-only.

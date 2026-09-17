# GitHub Pages deployment and launch

Phase 11 publishes the static Astro output through a manually dispatched GitHub Actions workflow.
The repository contains no runtime service, environment variables, deployment secrets, or
server-side functions.

## Version-controlled deployment

`.github/workflows/pages.yml` performs a clean install, runs every quality and built-output check,
builds `dist`, uploads the official Pages artifact, and deploys it with GitHub's official Pages
action. Every third-party action is pinned to an immutable commit SHA. The workflow can run only
from `main`, requires the `confirm_production` input, and does not run automatically on pushes.

Astro's `site` and `base` settings target `https://alialaraby.github.io/portfolio/`. Internal links,
fonts, metadata, sitemap, robots policy, and the share card all use that project path. No custom
domain or `CNAME` file is configured.

GitHub Pages provides one production environment for this repository, not a separate native preview
URL. Review pull-request CI and the local production build before the first manual deployment. Later
changes should follow the same sequence: pull request, green quality checks, merge, manual deploy.

## Steps for the repository owner

1. Merge the Phase 11 pull request only after its `Quality / validate` check passes.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not select a branch-based
   publishing source and do not add another generated workflow.
4. Remove `alialaraby.com` from **Custom domain** and leave the field empty. No DNS configuration is
   required for the GitHub-provided project domain.
5. Open **Settings → Environments → github-pages** after GitHub creates it. Restrict deployments to
   `main`; optionally add required reviewers if your GitHub plan supports them.
6. Open **Actions → Deploy GitHub Pages → Run workflow**. Select `main`, enable
   `confirm_production`, and run it.
7. Wait for both jobs to pass, then verify `https://alialaraby.github.io/portfolio/` and complete the
   checklist below. GitHub serves its own domain over HTTPS automatically.

No personal access token or repository secret is required. The workflow uses GitHub's short-lived
OIDC token and grants write permissions only to the deployment job.

## Initial deployment verification

- [ ] `/`, all three `/work/` routes, and an unknown route render correctly.
- [ ] `sitemap.xml`, `robots.txt`, the Open Graph image, fonts, and the versioned CV return `200`.
- [ ] The unknown route returns `404` and contains `noindex, follow`.
- [ ] Canonical and Open Graph URLs use `https://alialaraby.github.io/portfolio/`.
- [ ] Email, GitHub, LinkedIn, project, previous/next, and CV links work.
- [ ] Responsive checks pass at 320, 480, 768, 1024, and 1440 px.
- [ ] Keyboard navigation, skip link, visible focus, 200% zoom, and reduced motion remain usable.
- [ ] Chromium and WebKit smoke checks pass.
- [ ] Lighthouse scores are at least 95 in all four categories on `/` and one case study.

## Future custom domain

If a domain is purchased later, update `site` and `base` in `astro.config.ts`, `src/config/site.ts`,
root-relative font paths, robots metadata, and the share card together. Add the custom domain in
Pages settings and follow GitHub's current DNS instructions before changing canonical URLs.

## Rollback

GitHub Pages deployments are tied to workflow runs and commits. If a later launch is faulty:

1. Revert the faulty commit through a pull request and run the quality workflow.
2. Merge the revert, then manually run **Deploy GitHub Pages** from `main` again.
3. Verify the homepage, one case study, CV, sitemap, custom domain, and HTTPS.

Do not force-push `main`, delete successful workflow runs, or bypass the quality gate during a
rollback.

## Current state

- GitHub Pages project-site workflow and `/portfolio` base-path support: ready locally.
- Repository Pages source and `github-pages` environment: owner setup pending.
- First manual deployment: pending.
- GitHub Pages custom-domain field: owner must remove the unavailable domain before deployment.

# GitHub Pages deployment and launch

Phase 11 publishes the static Astro output through a manually dispatched GitHub Actions workflow.
The repository contains no runtime service, environment variables, deployment secrets, or
server-side functions.

## Version-controlled deployment

`.github/workflows/pages.yml` performs a clean install, runs every quality and built-output check,
builds `dist`, uploads the official Pages artifact, and deploys it with GitHub's official Pages
action. Every third-party action is pinned to an immutable commit SHA. The workflow can run only
from `main`, requires the `confirm_production` input, and does not run automatically on pushes.

`public/CNAME` places `alialaraby.com` in the generated artifact. The repository Pages setting is
still authoritative: the file alone does not register or verify the domain.

GitHub Pages provides one production environment for this repository, not a separate native preview
URL. Review pull-request CI and the local production build before the first manual deployment. Later
changes should follow the same sequence: pull request, green quality checks, merge, manual deploy.

## Steps for the repository owner

1. Merge the Phase 11 pull request only after its `Quality / validate` check passes.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not select a branch-based
   publishing source and do not add another generated workflow.
4. Under **Custom domain**, enter `alialaraby.com` and save it. At the DNS provider, create the exact
   apex records GitHub currently documents, plus the documented `www` CNAME to
   `alialaraby.github.io` if `www.alialaraby.com` should redirect to the apex.
5. Wait for GitHub's DNS check to succeed. The site uses root-relative assets for this approved
   domain, so do not use the `/portfolio` project URL as a substitute deployment target.
6. Open **Settings → Environments → github-pages** after GitHub creates it. Restrict deployments to
   `main`; optionally add required reviewers if your GitHub plan supports them.
7. Open **Actions → Deploy GitHub Pages → Run workflow**. Select `main`, enable
   `confirm_production`, and run it.
8. Wait for both the `build` and `deploy` jobs to pass, then verify `https://alialaraby.com`.
9. Enable **Enforce HTTPS** after GitHub issues the certificate, then complete the checklist below.

No personal access token or repository secret is required. The workflow uses GitHub's short-lived
OIDC token and grants write permissions only to the deployment job.

## Initial deployment verification

- [ ] `/`, all three `/work/` routes, and an unknown route render correctly.
- [ ] `sitemap.xml`, `robots.txt`, the Open Graph image, fonts, and the versioned CV return `200`.
- [ ] The unknown route returns `404` and contains `noindex, follow`.
- [ ] Canonical and Open Graph URLs use `https://alialaraby.com`.
- [ ] Email, GitHub, LinkedIn, project, previous/next, and CV links work.
- [ ] Responsive checks pass at 320, 480, 768, 1024, and 1440 px.
- [ ] Keyboard navigation, skip link, visible focus, 200% zoom, and reduced motion remain usable.
- [ ] Chromium and WebKit smoke checks pass.
- [ ] Lighthouse scores are at least 95 in all four categories on `/` and one case study.

## Custom-domain verification

Use GitHub's current DNS values displayed in Settings rather than copying old addresses from a
guide. DNS propagation and certificate issuance can take time. After deployment, verify HTTP-to-HTTPS
behavior, apex and `www`, all routes and assets, the CV, `robots.txt`, and `sitemap.xml`. Confirm
there is no redirect loop.

The canonical URL is already `https://alialaraby.com`, so the temporary `github.io` URL should not
be submitted to search engines.

## Rollback

GitHub Pages deployments are tied to workflow runs and commits. If a later launch is faulty:

1. Revert the faulty commit through a pull request and run the quality workflow.
2. Merge the revert, then manually run **Deploy GitHub Pages** from `main` again.
3. Verify the homepage, one case study, CV, sitemap, custom domain, and HTTPS.
4. If the first custom-domain launch itself is unsafe, remove the custom domain in Pages settings and
   restore the DNS records recorded immediately before cutover while the corrective PR is prepared.

Do not force-push `main`, delete successful workflow runs, or bypass the quality gate during a
rollback.

## Current state

- GitHub Pages workflow and custom-domain artifact: ready locally.
- Repository Pages source and `github-pages` environment: owner setup pending.
- First manual deployment: pending.
- Custom-domain DNS and HTTPS: pending owner configuration before the first deployment.

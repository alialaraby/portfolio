# Accessibility

Verification for the static portfolio. Phase 8 covers automated checks, keyboard flow, focus,
motion, zoom, and responsive behavior. The site ships one small inline progressive-enhancement
script and no script bundle. Navigation remains native, and the theme control is a native button.

## Method

| Layer                         | Tooling                                             | Command                             |
| ----------------------------- | --------------------------------------------------- | ----------------------------------- |
| Rule engine                   | `axe-core` against each built page in `jsdom`       | `npm run test:a11y` (after `build`) |
| Page-level landmarks          | Explicit DOM assertions in the same test            | `npm run test:a11y`                 |
| Contrast                      | Computed WCAG 2.2 ratios from the documented tokens | `docs/visual-system.md` token table |
| Keyboard, focus, motion, zoom | Manual pass against the production build            | `npm run preview`                   |

`npm run test:a11y` reads `dist/**/*.html` and skips when the build is absent, so `npm run check`
stays build-free. CI runs it immediately after the production build.

## Automated results

All five generated routes (`/`, `/404`, and the three `/work/*` case studies) pass with:

- zero axe violations across the default WCAG 2.x and ARIA rule sets;
- no unexpected "incomplete" results (the two page-level rules are asserted directly instead);
- exactly one `<main>` and one `<h1>` per page;
- a skip link whose `#main-content` target is that `<main>`.
- an accessible theme button with a name, pressed state, and native button semantics;
- an owner-supplied illustrated portrait with concise meaningful alternative text and intrinsic
  dimensions.

The two `color-contrast` rules are disabled because jsdom has no layout engine and can only return
false inconclusive results; contrast is verified from the ratios below.

## Contrast

Measured with the WCAG 2.2 relative-luminance formula. AA requires 4.5:1 for normal text and 3:1 for
large text and non-text UI.

| Foreground              | Background            | Ratio | Result          |
| ----------------------- | --------------------- | ----- | --------------- |
| Ink `#152029`           | Canvas `#f5f2eb`      | 14.78 | Pass            |
| Muted `#52616c`         | Canvas                | 5.72  | Pass            |
| Muted `#52616c`         | Surface `#fffdf8`     | 6.29  | Pass            |
| Accent `#0b57a4`        | Canvas                | 6.45  | Pass            |
| Accent `#0b57a4`        | Surface               | 7.09  | Pass            |
| Accent strong `#073b70` | Canvas                | 10.05 | Pass            |
| Accent strong           | Accent soft `#dceafb` | 9.21  | Pass            |
| White `#ffffff`         | Accent strong         | 11.24 | Pass            |
| Footer text `#f7f5ef`   | Ink footer            | 15.16 | Pass            |
| Footer muted `#b8c3ca`  | Ink footer            | 9.21  | Pass            |
| Focus `#b44600`         | Canvas                | 4.92  | Pass (non-text) |
| Focus `#f4a259`         | Ink footer            | 8.00  | Pass (non-text) |

Dark-theme pairs also pass: ink/canvas 16.03:1, muted/canvas 9.10:1, muted/surface 8.23:1,
accent/canvas 8.62:1, accent/surface 7.79:1, strong accent/canvas 11.40:1, strong accent/soft accent
7.27:1, button ink/strong accent 11.40:1, focus/canvas 9.84:1, footer ink/footer 17.07:1, and footer
muted/footer 9.18:1.

The footer focus outline uses `#f4a259` instead of the global `#b44600`, which only reached 3.00:1
on the dark footer. Decorative card and divider borders (e.g. `#c9c5bb` on canvas, 1.54:1) are
non-informational and intentionally exempt from non-text contrast.

## Keyboard flow

Verified in the production build with the mouse unused. Every stop is a native `<a>`; no `tabindex`
values exist.

1. First Tab reveals the "Skip to main content" link, which jumps to `#main-content`.
2. Tab order follows DOM order: primary navigation, theme button, the current page's content links,
   then footer profile and CV links.
3. `:focus-visible` draws a 0.2rem outline with a 0.2rem offset on every interactive element; the
   outline is visible against both light surfaces and the dark footer.
4. In-page section anchors and external `saudi-utils` links are reachable and activate with Enter.
5. No interaction depends on hover, drag, timing, or pointer-only behavior.

## Focus and reduced motion

- Focus styling is defined once via `:focus-visible` and inherits to all anchors.
- `@media (prefers-reduced-motion: reduce)` disables smooth scrolling, transitions, ambient
  animation, reveal movement, and hover transforms with `!important`.
- The theme follows `prefers-color-scheme` until the visitor selects light or dark. Storage access is
  guarded, the visible label reflects the action, and system theming still works without JavaScript.

## Zoom and responsive behavior

- Layout uses `rem`, fluid `clamp()` type, and `min()`/`max()` containers; the 30rem (480px) and
  42rem (672px) breakpoints collapse the header and grids, so content reflows rather than clips at
  200% browser zoom.
- Reading width is capped at 47rem and the shell at 76rem, keeping long-form text legible when
  magnified.
- Touch and pointer targets are at least 2.75rem (44px) tall, exceeding the WCAG 2.2 24px minimum.

## Known limitations

- `color-contrast` is not asserted automatically because `jsdom` cannot compute it; it is verified
  from the token ratios above and must be re-checked whenever a color token changes.
- axe runs without a real browser, so it cannot evaluate properties that depend on live layout,
  zoom, or rendering. A screen-reader pass in a real browser remains an owner action before launch.
- The two axe page-level rules report "incomplete" at element scope; the explicit `main`/`h1`/skip
  link assertions cover the same intent but are not the rule engine's own verdict.
- Automated checks cannot judge reading order quality, link-purpose wording, or diagram
  comprehension; those rely on the content review.

## Owner follow-ups before launch

- Run one screen-reader pass (VoiceOver on macOS is sufficient) over the homepage and one case study.
- Confirm 200% browser zoom manually on the built site; the fluid layout is expected to reflow.
- Re-run `npm run build && npm run test:a11y` after any token, layout, or component change.

# Visual System

Decision date: 17 September 2026

## Direction

The portfolio uses an editorial-technical visual language: warm paper-like neutrals, dark ink,
restrained blue actions, strong typographic hierarchy, and small monospaced labels. The system is
quiet enough for evidence-led writing while retaining a recognizable engineering character.

The launch system is light-only. It avoids gradients used as decoration, ornamental animation,
glass effects, oversized rounding, technology-logo walls, and interaction that hides information.

## Typography

- **IBM Plex Sans Variable** is the body, interface, and heading face across weights 100–700.
- **IBM Plex Mono Regular and SemiBold** are limited to eyebrows, metadata, and short technical
  labels. IBM does not publish Plex Mono as a variable webfont, so official static WOFF2 files are
  used instead.
- Fonts are self-hosted from the official IBM packages under the included SIL Open Font License.
- Only the primary Sans face is preloaded. Every face uses `font-display: swap` and a system-font
  fallback.
- Fluid type steps run from compact metadata through the display heading. Headings use tight
  leading; prose uses a 1.65 line height and a maximum reading width of 47rem.

## Color and contrast

| Token         | Value     | Use                                 |
| ------------- | --------- | ----------------------------------- |
| Canvas        | `#f5f2eb` | Warm page background                |
| Surface       | `#fffdf8` | Cards and elevated reading areas    |
| Ink           | `#152029` | Primary text and dark footer        |
| Muted ink     | `#52616c` | Supporting text and metadata        |
| Accent        | `#0b57a4` | Links and informational borders     |
| Accent strong | `#073b70` | Primary actions and hover states    |
| Accent soft   | `#dceafb` | Low-emphasis information surfaces   |
| Focus         | `#b44600` | High-visibility keyboard outline    |
| Focus (dark)  | `#f4a259` | Keyboard outline on the dark footer |

The selected text, link, button, and focus combinations target WCAG 2.2 AA. Phase 8 verified them:
the automated axe audit passes and the measured token contrast ratios are recorded in
[accessibility.md](accessibility.md). The dark footer uses a lighter focus color because `#b44600`
only reaches 3.00:1 on ink; `#f4a259` reaches 8.00:1.

## Spacing, layout, and surfaces

- The spacing scale is based on 0.25rem increments, with fluid large section spacing.
- The site shell is capped at 76rem; long-form reading is capped at 47rem.
- Cards use a 0.75rem radius, one-pixel neutral border, and low-contrast shadow.
- Breakpoints are content-driven: 30rem adjusts the compact header and full-width actions, 42rem
  enables two-column cards, and 68rem enables the editorial split and three-column cards.
- Layout changes never reorder the DOM. All grid children use shrink-safe sizing to prevent
  horizontal overflow.

## Components and interaction

- The header contains an identity lockup and a wrapping, always-visible navigation. No menu script
  or hidden mobile state is required.
- Action links have primary, secondary, and text treatments while remaining native anchors.
- Surface cards accept semantic slotted content and retain the same information without hover.
- Section shells provide consistent label, heading, and content alignment.
- The footer provides approved professional links and location context.
- All interactive targets are at least 2.75rem high. Focus uses a persistent orange outline with
  offset, and the skip link becomes visible on focus.
- Motion is limited to short color and underline transitions. Smooth scrolling and transitions are
  effectively disabled when `prefers-reduced-motion: reduce` is active.
- Case-study pages reuse the reading shell with a metadata panel, an evidence-bounded numbered flow
  diagram, public-link actions, and previous/next navigation.

## Boundaries

Phase 5 established the shell using approved project titles and descriptions. Phase 6 composed the
approved homepage. Phase 7 renders complete case studies with validated metadata and diagrams. Dark
mode, final SEO artwork, advanced browser testing, visual regression, and measured performance stay
deferred.

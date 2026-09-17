# Visual System

Decision date: 17 September 2026

## Direction

The portfolio uses an editorial-technical visual language: warm neutrals, restrained blue actions,
strong typographic hierarchy, small monospaced labels, and a light technical grid. The system is
quiet enough for evidence-led writing while adding a more personal, modern edge through an editorial
portrait treatment and low-amplitude motion.

Light and dark themes share semantic tokens rather than component overrides. The initial theme
follows the operating system; an accessible header control stores an explicit visitor choice. A
small inline script applies that choice before paint and progressively adds header and reveal
behavior. The experience remains usable without JavaScript.

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

The dark palette uses canvas `#0f171d`, surface `#162129`, muted surface `#1c2932`, ink `#edf2f4`,
muted ink `#acbac3`, accent `#77b7ff`, strong accent `#a8d1ff`, soft accent `#173b5d`, and focus
`#ffad66`. Component colors continue to reference semantic tokens.

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

- The header is sticky and always visible. It gains a compact shadowed state after scrolling while
  preserving the identity, wrapping navigation, and 44px theme control.
- Action links have primary, secondary, and text treatments while remaining native anchors.
- Surface cards accept semantic slotted content and retain the same information without hover.
- Section shells provide consistent label, heading, and content alignment.
- The footer provides approved professional links and location context.
- All interactive targets are at least 2.75rem high. Focus uses a persistent orange outline with
  offset, and the skip link becomes visible on focus.
- Motion is limited to a slow ambient background drift, one-time progressive reveals, and short
  hover/focus transforms of at most 12px. Content is visible before JavaScript initializes.
  `prefers-reduced-motion: reduce` disables animation, smooth scrolling, reveals, and transforms.
- The homepage hero pairs its copy with a decorative `AA` monogram portrait. The portrait component
  can later accept a real source, required meaningful alt text, intrinsic dimensions, and focal
  position without changing the layout.
- Case-study pages reuse the reading shell with a metadata panel, an evidence-bounded numbered flow
  diagram, public-link actions, and previous/next navigation.

## Boundaries

Phase 5 established the shell, Phases 6–7 completed its content, and Phases 8–10 hardened and
measured it. The Phase 11 visual refresh adds the two-theme system, portrait slot, favicon, sticky
header, and restrained motion. A real portrait, automated visual regression, and field performance
measurement remain deferred.

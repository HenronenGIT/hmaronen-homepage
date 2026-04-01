# Portfolio Design Overview

A reference document for designers working on a redesign of Henri Maronen's personal portfolio.

---

## Pages & Structure

The site is a single-page application with three distinct pages:

| Route             | Purpose                       |
| ----------------- | ----------------------------- |
| `/`               | Homepage — the main portfolio |
| `/thoughts`       | Blog listing                  |
| `/thoughts/:slug` | Individual blog post          |

The homepage is the core experience. It's built as a long-scroll page with a sticky navigation that links to anchored sections.

### Homepage Sections (top to bottom)

1. **Hero** — Full-viewport intro with name, typewriter effect, and a portrait image
2. **About** — Bio text with info cards (role, education, focus) and a video modal
3. **Skills** — Tech skills displayed as floating blobs with category filters, plus an infinite scrolling marquee
4. **Work Experience** — Timeline-style cards showing positions at Slush
5. **Projects** — Two featured project cards (Breefli, Photography Portfolio)
6. **CTA** — "Let's connect" section with QR codes for LinkedIn and Telegram

### Persistent UI

- **Navigation** — sticky header, glass morphism style, hides/shows on scroll
- **Social Links** — fixed sidebar on desktop (right edge), bottom bar on mobile
- **Cursor Effect** — custom cursor tracking effect, global across all pages

---

## Color Palette

The site uses a dark theme throughout with a single teal accent color.

### Core Colors

| Role           | Value     | Notes                                       |
| -------------- | --------- | ------------------------------------------- |
| Background     | `#1A1A1B` | Main page background, dark charcoal         |
| Surface        | `#111111` | Card backgrounds                            |
| Surface Deep   | `#0a0a0a` | Deepest dark, borders, dividers             |
| Primary Accent | `#47bfba` | Teal — the only brand color                 |
| Primary Hover  | `#3FBDB3` | Slightly darker teal for interactive states |

### Text Scale

| Role              | Value     |
| ----------------- | --------- |
| Heading / Primary | `#ffffff` |
| Body              | `#e0e0e0` |
| Muted             | `#888888` |
| Subtle            | `#555555` |

### Accent Usage

The teal `#47bfba` is used sparingly as a highlight color — glows, borders, button fills, hover states, and inline link accents. It's never used as a background at full opacity.

Alpha variants of the accent are used for glow effects and gradient overlays (ranging from 5% to 80% opacity).

### Secondary Card Variant

Some cards use a dark blue color scheme separate from the main dark theme:

- Background: `#1a2330`
- Title: `#d8e8f0`
- Subtitle: `#7a9aaa`

---

## Typography

### Font Pair

| Role      | Family         | Source       |
| --------- | -------------- | ------------ |
| Headings  | **Montserrat** | Google Fonts |
| Body / UI | **Inter**      | Google Fonts |

Montserrat is used for all large headlines, section titles, and the navigation logo. Inter handles everything else — body copy, labels, buttons, metadata.

### Size Scale

The site uses a standard modular scale mapped to Tailwind utility classes:

```
12px → 14px → 16px → 18px → 20px → 24px → 30px → 36px → 48px → 60px → 72px → 96px → 128px
```

### Key Type Styles

| Style            | Size    | Weight | Notes                    |
| ---------------- | ------- | ------ | ------------------------ |
| Section title    | 48–60px | 700    | Montserrat, responsive   |
| Section subtitle | 18–20px | 400    | Inter, muted color       |
| Body large       | 20–24px | 400    | Inter, leading-relaxed   |
| Body             | 18px    | 400    | Inter, leading-relaxed   |
| Metadata / label | 14px    | 500    | Uppercase, tracked       |
| Tag / badge      | 12–14px | 500    | Used on tech stack chips |

---

## Layout

- **Max content width:** ~1400px (centered)
- **Approach:** Mobile-first, single column expanding to multi-column at `md` (768px) and `lg` (1024px)
- **Spacing rhythm:** Based on Tailwind's default scale; sections use generous vertical padding (80–128px)

### Grid Usage

- About section: 2-column (text + info cards)
- Skills: single-column with filter tabs
- Work Experience: single-column timeline
- Projects: 2-column card grid

---

## Visual Style

### Glass Morphism

Navigation and buttons use a glass morphism treatment — semi-transparent backgrounds with `backdrop-blur`. This is a consistent motif across interactive surfaces.

### Depth & Glow

The dark background lets the teal accent create visible glow effects. Cards use `box-shadow` with the primary color at low opacity. Skill blobs use `text-shadow` pulsing animations.

### Motion

- Skill blobs float up/down on a 6-second loop
- Skills marquee scrolls horizontally in both directions (30–42s loops)
- Navigation hides/shows on scroll
- Fade-in entrance animations on components
- Typewriter effect on hero text

### Cards

Cards have gradient borders (using the `border-box` technique) and subtle hover scale effects (1.02–1.05×). Most use a dark charcoal background (`#111`) with the blue variant (`#1a2330`) used for contrast in certain contexts.

---

## What to Keep in Mind for a Redesign

- The teal accent `#47bfba` is the primary brand color — any redesign should decide whether to keep, evolve, or replace it
- The font pair (Montserrat + Inter) is solid but conventional — a redesign could differentiate here
- The glass morphism + dark background aesthetic is the most dominant visual decision
- Motion and interactivity (cursor, marquee, floating blobs) are intentional personality choices
- The CTA section leans on QR codes rather than a contact form — worth reconsidering for usability
- Mobile layout collapses to single column throughout; the social links move from a fixed sidebar to a bottom bar

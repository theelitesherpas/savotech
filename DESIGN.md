---
name: Savo Technologies
description: Swiss-light enterprise identity — white ground, ink type, flat RGB tricolor reserved for decisive marks and the AI zone.
colors:
  white: "#ffffff"
  paper: "#fafafb"
  paper-2: "#f4f4f6"
  paper-3: "#efeff2"
  ink: "#101014"
  ink-2: "#17171f"
  ink-3: "#1b1b24"
  ink-zone: "#0e0e13"
  ink-footer: "#0b0b0e"
  text: "#101014"
  muted: "#55555f"
  faint: "#9c9ca6"
  text-light: "#f6f6f8"
  muted-light: "#9c9ca6"
  red: "#ff1e1d"
  blue: "#1d28ff"
  green: "#2bd926"
  red-text: "#e5131b"
  green-text: "#0e8a26"
  tint-red: "#ffe8e9"
  tint-blue: "#e8ecfc"
  tint-green: "#e9fbe6"
  line: "#e7e7eb"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.8vw, 4.1rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  lead:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  xl: "20px"
  pill: "999px"
  tick: "5px"
spacing:
  container: "1200px"
  section-y: "clamp(4.5rem, 9vw, 7.5rem)"
  grid-gap: "1.1rem"
  card-padding: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.6rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.6rem"
  chip:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.muted}"
    rounded: "999px"
    padding: "0.5rem 0.95rem"
  chip-selected:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "999px"
  pro-badge:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "6px"
    padding: "2.5px 8px"
  card-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  card-dark:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.muted-light}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  input-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
---

# Design System: Savo Technologies (v2 — Swiss Light)

## Overview

**Creative North Star: "The Calm Machine Room"** — a white engineering floor where black type does the talking and a pure RGB tricolor (red / blue / green) marks the only alive things in the room: actions, status and AI. Pinned by the user's reference set savo95–100 (palette and structure extracted from pixels).

The page is white almost everywhere, separated by 1px #E7E7EB hairlines. Near-black ink (#101014) appears twice at scale: the AI zone (agents + assistant) and the ending (final CTA + footer). There are no gradients, no glows and no shadows at rest; depth is a hairline border plus a small hover lift. Plus Jakarta Sans carries the entire page, display and body alike.

**Key Characteristics:**
- White ground; ink zone reserved for AI and the ending
- Flat tricolor: #FF1E1D / #1D28FF / #2BD926 — marks, dots, tints, never large text fills
- Pale tint chips (#FFE8E9 / #E8ECFC / #E9FBE6) for icon tiles and accents on white
- Plus Jakarta Sans for display and body; square-ish radii (8–20px)
- The PRO badge is the only glow on the page (a soft blue pulse)

## Colors

Palette character: paper-white discipline with electric RGB accents — Swiss signage, not neon.

### Primary
- **Electric Blue** (#1D28FF): primary buttons, links, active states, the AI console's core, PRO badge. The workhorse of the trio (6.4:1 on white, usable as text).
- **Signal Red** (#FF1E1D): counter-accent — work-meta labels, stars, one assurance tick, the console's first dot. Text-safe variant #E5131B (4.6:1).
- **Live Green** (#2BD926): "live/data" semantics — agent CTAs, status dots, portal on-track chip. Text-safe variant #0E8A26 on light; raw green only on ink.

### Neutral
- **Ink scale** (#0B0B0E → #1B1B24): text, the AI zone (#0E0E13), console panel (#101014), dark cards (#17171F), footer (#0B0B0E).
- **Paper scale** (#FFFFFF → #EFEFF2): grounds, alternating sections, media frames.
- **Text/Muted** (#101014 / #55555F on light; #F6F6F8 / #9C9CA6 on ink).
- **Tints** (#FFE8E9 red / #E8ECFC blue / #E9FBE6 green): icon tiles, selected states, chip fills.

### Named Rules
**The Tricolor Budget Rule.** Red, blue and green appear only as marks: dots, ticks, badges, icon tiles, 2px card top-bars, status chips. Never as large fills on white, never as body text color.
**The One Ink Zone Rule.** Ink at section scale appears exactly twice: the AI zone (agents + assistant) and the ending (final CTA + footer). Everything between them is white/paper. The ink console panel inside the light hero is the single sanctioned preview of that zone.

## Typography

**Display Font:** Plus Jakarta Sans (system-ui fallback) — self-hosted via next/font
**Body Font:** Plus Jakarta Sans (system-ui fallback) — self-hosted via next/font

**Character:** One face carries the whole page. Plus Jakarta Sans 700/800 with -0.03em tracking reads geometric yet warm, engineered but not cold; the 400/500 body keeps it composed and modern.

### Hierarchy
- **Display** (700, clamp 2.3–4.1rem, 1.12, -0.032em): hero headline, max ~16ch, black on white.
- **Headline** (700, clamp 1.8–2.7rem): section titles; white inside the ink zone.
- **Title** (700, ~1–1.3rem): card titles, agent names, estimator header.
- **Lead** (400, clamp 1–1.12rem, 1.75): one per section, ≤56ch, muted.
- **Body** (400, 0.88–0.97rem, 1.6–1.7): card and FAQ copy, ≤72ch.
- **Label** (600–700, 0.72–0.98rem continuous utilitarian scale, tracked up to 0.22em, uppercase inside components only): tags, meta rows, badges, stat labels, chips, small controls. Component copy may use any step of this continuous scale; display/title/lead sizes remain fixed.

### Named Rules
**The Solid Numeral Rule.** Numerals are solid ink on white / white on ink, tabular-nums. No gradient text exists anywhere.
**The One-Face Rule.** Plus Jakarta Sans serves display, body and labels. A second face never enters.

## Layout

Container 1200px (padding clamp 1–1.75rem). Section rhythm clamp(4.5rem, 9vw, 7.5rem). Grids: services 4-col (AI card uniform ink-filled), agents 3-col, industries 5-col, work 3-col, roles 3-col, footer contact 6-col. Breakpoints 1180 / 1024 / 900 / 768 / 520 / 380. Grid items and `.reveal` wrappers carry `min-width: 0`. Hairline dividers (#E7E7EB / rgba-white .1) separate everything that isn't a card.

## Elevation & Depth

Flat by default. Structure is hairline borders; depth appears only as a state response: a small hover lift (translateY -3/-4px) with a soft offset shadow (`0 12px 32px -16px rgba(16,16,20,.16)` light, `0 18px 40px -18px rgba(0,0,0,.8)` on ink). The ink console and estimator panel sit with one large soft shadow at rest (they are objects on the page, not regions of it).

### Shadow Vocabulary
- **Lift** (`0 12px 32px -16px rgba(16,16,20,.16)`): light-card hover.
- **Lift Large** (`0 20px 44px -20px rgba(16,16,20,.2)`): work cards, estimator, console at rest.
- **Blue Press** (`0 8px 20px -8px rgba(29,40,255,.45)`): primary buttons.
- **PRO Pulse** (blue ring, 2.6s): PRO badge only.

### Named Rules
**The Flat-At-Rest Rule.** No shadow on anything at rest except the console and estimator panel. Hover may lift; borders may darken; nothing glows except PRO.

## Shapes

Radii 8/12/14/20px — squarer than the previous world; pills survive only as chips/tags. Cards 14px, panels 20px, buttons/inputs 8px, PRO badge 6px, process dots 3px squares (a Swiss tick, not circles). 1px borders everywhere structure exists. The brand identity is the official user-supplied wordmark (savotech_new_logo.svg): geometric SAVO caps with a Technologies sub-line, single-color, rendered via currentColor — ink on white surfaces, white on ink surfaces. The S glyph alone serves the favicon (white on ink rounded square) and small UI avatars (white on electric blue).

## Components

### Buttons
- **Primary:** solid #1D28FF, white text, radius 8px; hover darkens to #161CCB and lifts 2px.
- **Outline:** 1.5px ink border, transparent; hover fills ink with white text. On ink surfaces: white border, hover fills white with ink text.

### Chips
- Pill, 1px border, paper fill on light (ink-tint on dark); selected = solid blue with white text. Used for capabilities, filters, estimator multi-select, chat suggestions.

### PRO Badge
- Solid #1D28FF, radius 6px, 0.62rem Plus Jakarta Sans 700, tracked 0.12em, white text, soft blue pulse ring. Marks AI Agents in nav, agent cards, AI/ML hire card, hero secondary CTA.

### Cards
- **Light:** white, 1px #E7E7EB, radius 14; hover lifts and border turns ink. Icon tiles rotate the tricolor tints by grid position.
- **Agent (ink zone):** #17171F fill, hairline border, 2px top bar rotating red/blue/green across the fleet; hover lifts with a deep shadow.
- **AI feature card:** the one ink card inside a white grid (services), green link, PRO badge.

### Inputs / Fields
- White fill, 1px #E7E7EB, radius 8; focus = blue border + 3px blue-tint ring; error = #DC4C4C border + ring. Dark chat input mirrors with ink fill.

### Navigation
- 76px white glass header (transparent over the white hero; blur + hairline when scrolled). Desktop AI mega-menu on white with a blue-tint hover and an ink flagship card. Mobile: white drawer.

### Signature: Hero Signal Field
- The hero ground is an Aceternity-style dot-grid-and-animations field, rebuilt natively (SVG/CSS/SMIL, zero JS per frame): a 22px ink dot grid radially masked to fade at the edges, three tricolor signal paths that draw themselves on a 12s loop, square pulse nodes on the paths, and four traveling dots (blue, blue-faint, red, green). Under prefers-reduced-motion the paths render drawn and still, with no traveling dots.

### Signature: Agent Console (hero)
- Ink #101014 panel, radius 20px, RGB traffic-light dots and a monospace-free URL label in chrome bar; holds the animated orbit/stack/globe scenes per slide. The only sanctioned large ink moment above the fold.

### Signature: Ask Savo chat panel
- Ink-2 shell; user bubbles solid blue, bot bubbles ink-3; green live dot; chips; sr-only live region announces bot answers only.

### Signature: Instant Estimator
- White panel with ink header; blue-selected chips and opt-cards; result price in #1D28FF Plus Jakarta Sans 700, en-IN formatting, tabular-nums.

## Do's and Don'ts

### Do:
- **Do** keep chroma rationed to marks and tints (Tricolor Budget Rule).
- **Do** use hairline borders for structure and hover-darkening for feedback.
- **Do** rotate icon-tile tints across grids so the trio distributes evenly.
- **Do** format INR with en-IN grouping and tabular numerals.
- **Do** write copy without em dashes.

### Don't:
- **Don't** use gradients, glow, or shadows at rest (PRO badge and the two panels excepted).
- **Don't** fill large surfaces with the raw RGB trio on white, or use green/red raw values as text on light.
- **Don't** add a second ink zone, eyebrow/kicker labels, section numbers, or glyph/emoji icons.
- **Don't** name any underlying AI provider in user-facing assistant surfaces.
- **Don't** invent commercial claims without marking them as placeholders.

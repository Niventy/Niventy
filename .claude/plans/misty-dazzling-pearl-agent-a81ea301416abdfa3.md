# Niventy Website Visual Rebrand Plan -- Bizu Agency Style

## Overview
Transform the Niventy website from dark navy/blue/white to warm cream/hot-pink/black (Bizu Agency style). Preserves React + Tailwind CDN architecture and serif italic typography.

---

## Phase 1: Global Foundation

### File: index.html

**1a. Tailwind color config** -- Add custom colors:

- cream-50: #faf8f4 (lightest cream)
- cream-100: #f5f0e8 (main bg, replaces white)
- cream-200: #ede5d8 (borders/cards)
- cream-300: #ddd3c2 (strong border)
- accent-400: #f472b6 (pink lighter)
- accent-500: #ec4899 (PRIMARY hot pink)
- accent-600: #db2777 (hover)
- accent-700: #be185d (active)
- dark-900: #0a0a0a (near-black)
- dark-950: #000000 (true black)
- niventy-600: #ec4899 (migration alias)

Add marquee-photos animation (25s linear infinite).

**1b. Body class:** bg-cream-100 text-slate-700 selection:bg-accent-500

**1c. Fonts:** No changes needed.

---

## Phase 2: Hero Rewrite (Highest Impact)

### File: components/Hero.tsx -- COMPLETE REWRITE

Full-bleed photo hero replacing dark gradient.

**Structure:**
- section: min-h-screen relative overflow-hidden flex flex-col
- Background: Unsplash photo (absolute inset-0 object-cover)
- Overlay: absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20
- Content: flex-1 flex items-center justify-center z-10
  - Headline: text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase
  - Italic: font-accent italic normal-case
  - CTA: bg-accent-500 hover:bg-accent-600 text-white rounded-full px-8 py-4
  - Service Badges: colorful pills (pink/emerald/amber/blue) rounded-full
- Bottom: Brand marquee (border-t border-white/10, text-white/60)

---

## Phase 3: Photo Marquee (New Component)

### New File: components/PhotoMarquee.tsx

- py-4 bg-cream-100 overflow-hidden
- flex animate-marquee-photos, duplicate for loop
- Photos: w-64 h-40 rounded-xl object-cover mx-2
- Gradient fade masks on edges
- Insert after Hero in App.tsx

---

## Phase 4: Section Modifications

### 4a. About (About.tsx)
- bg-white -> bg-cream-100
- Cards: bg-cream-50, border-cream-200
- niventy-600 -> accent-500
- SVG lines: blue -> pink (#ec4899)
- Brain card: accent-500/accent-600 gradient

### 4b. Work (Work.tsx)
- bg-white -> bg-dark-900 text-white
- Heading: text-white, gradient from-accent-400 to-accent-500
- Button: bg-accent-500

### 4c. Testimonials (Testimonials.tsx)
- Amber bg -> bg-cream-100
- All amber-* -> accent-500/accent-200

### 4d. Pricing (Pricing.tsx)
- bg-slate-950 -> bg-dark-950
- All niventy-* -> accent-500
- Glow/shadows: accent-600/20

### 4e. SystemArchitecture (SystemArchitecture.tsx)
- bg-[#F8FAFC] -> bg-cream-100
- Cards: bg-cream-50, blue -> accent tones

### 4f. ServicesList (ServicesList.tsx)
- bg-white -> bg-cream-100, remove blue glows
- All blue-* -> accent-500

### 4g. Process (Process.tsx) -- 3 sub-sections
- Sec1: bg-cream-100, stats bg-cream-50, niventy -> accent
- Sec2: bg-cream-50, Phase04 accent gradient, pills cream
- Sec3: bg-cream-100, Niventy card accent-500 to accent-700

### 4h. Footer (Footer.tsx)
- bg-dark-950, add large NIVENTY text in accent-500 text-7xl+
- Social hover: accent-500, CTA: accent-500

### 4i. Button (Button.tsx)
- primary: bg-accent-500 pink glow
- secondary: bg-cream-50 border-cream-300
- outline/ghost/glow: cream + accent tones

### 4j. Header (Header.tsx)
- bg-dark-950, hover:text-accent-400

### 4k. SectionLabel (SectionLabel.tsx)
- accent-500/10 border, text-accent-500, dot accent-500

### 4l. App.tsx
- bg-cream-100, text-slate-700, selection:bg-accent-500
- Add PhotoMarquee after Hero

---

## Priority Order

1. index.html (config)
2. Hero.tsx (rewrite)
3. Button.tsx (shared)
4. App.tsx + PhotoMarquee.tsx
5. Header.tsx + SectionLabel.tsx
6. Footer.tsx
7. About.tsx
8. Work.tsx
9. Pricing.tsx
10. Testimonials.tsx
11. ServicesList.tsx
12. SystemArchitecture.tsx
13. Process.tsx

---

## Color Reference

| Role | Old | New | Class |
|------|-----|-----|-------|
| Page bg | slate-50 | Cream | bg-cream-100 (#f5f0e8) |
| Card bg | white | Cream | bg-cream-50 (#faf8f4) |
| Border | slate-100 | Cream | border-cream-200 (#ede5d8) |
| Accent | #1846b8 | Pink | accent-500 (#ec4899) |
| Dark bg | slate-950 | Black | bg-dark-950 (#000000) |
| Text | slate-600 | Darker | text-slate-700 |

---

## Risks

1. Custom colors must be in tailwind.config before use
2. Hero photo large -- use loading=eager
3. Cream contrast OK: ~7.2:1 ratio (WCAG AA pass)
4. Unify fuchsia/pink under accent-* scale
5. PhotoMarquee.tsx is the only new file
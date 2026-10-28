# MAISON NOIR — Flagship Luxury Perfume Experience

A bespoke, production-ready luxury landing page for the fictional high perfumery **MAISON NOIR PARIS**. Designed with an editorial aesthetic inspired by luxury fragrance campaigns (Byredo, Le Labo, Frédéric Malle), featuring custom campaign art direction, refined typography, and a production build pipeline.

---

## ✦ Creative & Technical Highlights

- **Bespoke Campaign Imagery**: Every perfume bottle and atelier scene is custom-directed with physical branding ("MAISON NOIR PARIS", "AMBRE NOIR", "FIG & VETIVER", "ROSE OBSIDIENNE") under chiaroscuro Parisian studio lighting. Zero stock watermarks or unrelated cosmetics.
- **Restrained Motion Design**: Subtle CSS transformations, IntersectionObserver reveals, and smooth modal transitions. Full `prefers-reduced-motion` compliance.
- **Editorial Typography**: Pairing of **Cormorant Garamond** (display serif) and **Inter** (neutral, legible sans-serif) with balanced tracking and intentional whitespace.
- **Strict Color Harmony**: Warm ivory (`#F5F0E6`), deep charcoal (`#131211`), and muted antique gold (`#B69A68`). Zero bright neon, purple, or synthetic gradients.
- **Production Performance**: Tailwind CSS v4 pruned and minified (20 KB), vanilla ES6+ JavaScript (8 KB), with all assets optimized and preloaded for LCP.

---

## ✦ Project Architecture

```
maison-noir/
├── index.html                   # Source HTML for live dev environment
├── package.json                 # Build scripts & dependencies
├── src/
│   ├── input.css                # Tailwind CSS v4 tokens & custom keyframes
│   └── js/
│       └── main.js              # Vanilla ES6+ interactions & modal logic
├── assets/
│   └── images/                  # High-resolution bespoke campaign photography
│       ├── hero.jpg             # Signature flacon on charcoal slate
│       ├── ambre-noir.jpg       # Amber Noir on aged cedarwood
│       ├── fig-vetiver.jpg      # Fig & Vetiver on travertine pedestal
│       ├── rose-obsidienne.jpg  # Rose Obsidienne smoked glass with velvet petal
│       ├── craftsmanship.jpg    # Parisian master perfumer's atelier & formula book
│       └── editorial-interlude.jpg # Golden atomized fragrance mist
├── scripts/
│   ├── build-js.js              # Strips comments & minifies JS
│   └── copy-html.js             # Generates standalone dist/ folder with relative assets
└── dist/                        # 100% self-contained deployment bundle
    ├── index.html
    └── assets/
        ├── styles.min.css
        ├── main.min.js
        └── images/
```

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
```bash
# Watch Tailwind styles
npm run dev
```

### 3. Production Build
```bash
# Compiles minified CSS, minified JS, and builds the self-contained dist/ directory
npm run build
```

### 4. Preview
```bash
npm run preview
# Serves live at http://localhost:3000
```

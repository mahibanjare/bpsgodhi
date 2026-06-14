# Bright Public School — Website

**CGBSE English Medium School | Godhi, Mandir Hasaud, Naya Raipur, Chhattisgarh**

A fast, fully-responsive single-page site built with **React + Vite**. Rebuilt and
optimized with a refined navy + gold brand system derived from the school emblem.

## 🚀 Quick Start

```bash
npm install          # install dependencies
npm run dev          # start dev server (http://localhost:5173)
npm run build        # production build → dist/
npm run preview      # preview the production build
npm run optimize     # regenerate optimized images & favicons from design-source/
```

## 📁 Project Structure

```
bright-public-school/
├── design-source/            # original hi-res logo & photo (NOT served — source only)
│   ├── logo-original.png
│   ├── favicon-original.svg
│   └── campus-original.jpeg
├── public/                   # served assets (web-optimized)
│   ├── logo-web.png          # 512px logo (was 10 MB → 78 KB)
│   ├── favicon.png · apple-touch-icon.png · icon-192/512.png
│   ├── campus.jpg · og-image.jpg
│   ├── site.webmanifest · robots.txt · sitemap.xml
├── scripts/
│   └── optimize-assets.mjs   # sharp-based image optimizer (npm run optimize)
├── src/
│   ├── hooks/useScrollReveal.js
│   ├── components/
│   │   ├── Navbar · Hero · Marquee · About · Programs · Stats
│   │   ├── Facilities · Testimonials · Gallery · Admission · Contact
│   │   ├── Footer · FloatingActions · Logo
│   ├── App.jsx · main.jsx · index.css
├── index.html
└── vite.config.js
```

## 🎨 Design System

Brand palette is derived directly from the school emblem:

| Token        | Hex       | Source in logo            |
|--------------|-----------|---------------------------|
| Navy         | `#0A1628` | Circle border + lettering |
| Gold         | `#C9A84C` | Outer ring + BPS banner   |
| Sun          | `#F6A623` | Rising-sun core           |
| Leaf / Green | `#4F9D3A` | Laurel wreath + hills      |

- **Fonts:** Playfair Display (headings) · DM Sans (body) · Cormorant Garamond (italic accents)
- Reusable utility classes (`.section`, `.container`, `.section-head`, `.card`, `.btn-gold`, `.eyebrow`, `.reveal`) replace repeated inline styles.

## ✅ What changed in the rebuild

**Performance**
- Logo **10 MB → 78 KB**; total `public/` **~12 MB → ~0.7 MB**
- Generated proper favicons, Apple touch icon, PWA icons + web manifest
- Lazy-loaded map & form iframes; preloaded hero image; `prefers-reduced-motion` support

**Design & UX**
- Real [lucide-react](https://lucide.dev) icons replace emoji throughout
- Scroll-reveal animations (single shared IntersectionObserver)
- Active-section highlighting in the navbar; animated mobile menu
- Real campus photo featured in the hero, about and gallery
- Floating WhatsApp / Call / Back-to-top actions
- Fixed bugs: invisible program feature-cards (white-on-white) and invisible testimonial dots

**SEO**
- Fixed broken favicon reference; added theme-color, manifest, OG image dimensions, Twitter image, plus logo / founding date / social profiles in the Schema.org JSON-LD

## 📞 School Info

- **Address:** Godhi, Mandir Hasaud, Naya Raipur, CG
- **Phone:** 91651 87777
- **Board:** CGBSE · **Medium:** English · **Classes:** Nursery to XII

---
_Design & Develop by [Mbjare](https://mbjare.com)._

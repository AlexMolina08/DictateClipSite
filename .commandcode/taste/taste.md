# Design System & Brand
- Use the auge design system tokens: coral (#FF4252), cream (#F7F2EC), ink (#1D1D1F), not the old DictateClip Apple-blue (#0071E3). Confidence: 0.85
- Use coral sparingly and intentionally — only for the brand mark, one accent word, and captioned-frame overlays. Never as a button fill or gradient. Confidence: 0.80
- Use cream as the primary canvas with near-black ink text for editorial seriousness. Confidence: 0.75
- Avoid generic AI/SaaS visual clichés: no chat bubbles, feature card grids, AI gradients, magic particles, glassmorphism, or dashboard screenshots. Confidence: 0.90

# Visual Design
- Use a magazine-split layout for the hero: image occupies ~62% left, cream gutter, copy on right column — not full-bleed. Confidence: 0.75
- Use a single captioned-frame overlay (not a chat bubble) as the product transformation hint — a tight crop with an auge-style caption. Confidence: 0.70
- Use a clip-rail / contact-sheet horizontal strip for the "raw takes" section instead of a feature card grid. Confidence: 0.75
- Use hairline borders and consistent warm grading across all site imagery — no drop shadows on photos. Confidence: 0.70

# Architecture & Implementation
- Use Vite + React + Tailwind for the stack. Keep it lean — 3 routes (/, /privacy, /terms). No overbuilding. Confidence: 0.85
- Use responsive image/video patterns: `<picture>` for art-directed hero crops, AVIF/WebP, lazy-load below-fold media, video poster fallback. Confidence: 0.80
- Use H.264 MP4 for the showreel video (not HEVC alpha) with poster fallback for web compatibility. Confidence: 0.75
- Use subtle framer-motion fade/translate on scroll-into-view — no scroll-jacking, pinning, or heavy parallax. Confidence: 0.70

# Content & Narrative
- Explain the product through narrative story beats (raw take → auge shapes → finished cut), not through feature cards or generic SaaS sections. Confidence: 0.85
- Keep the landing page to 5-6 clean sections: Nav, Hero, Raw Takes, Auge Shapes It, Final Close, Footer. No separate "features" section. Confidence: 0.80
- Use clear TODO markers for missing final assets/copy rather than scattering placeholders through the codebase. Confidence: 0.75

# Typography
- Use Instrument Serif for display headlines (with italic for the one accent word), IBM Plex Sans or Inter for body, JetBrains Mono for eyebrows/labels. Not SF Pro (not web-licensable). Confidence: 0.70
- Use tight tracking on serif headlines, generous line-height on body text. Confidence: 0.65

# Legal & Compliance
- Keep legal routes (/privacy, /terms) alive so existing App Store links do not break during domain migration. Confidence: 0.85
- Remove the redundant legal modal — keep only the dedicated routes for crawlable, shareable legal pages. Confidence: 0.80
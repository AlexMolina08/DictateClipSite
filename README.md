# auge-site

Marketing and legal website for **auge** — the iOS app that turns raw
talking-to-camera takes into finished short-form videos.

## Stack

Vite + React + Tailwind CSS. Three routes: `/`, `/privacy`, `/terms`
(plus a minimal `/support` kept alive for existing App Store links).

## Design system

Mirrors the auge app tokens (`DictateClip/DesignSystem/DesignTokens.swift`):
coral `#FF4252` (signature accent, used sparingly), cream `#F7F2EC` (canvas),
ink neutrals. Typography: Instrument Serif (display), IBM Plex Sans (body),
JetBrains Mono (labels).

## Development

```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
```

## TODO before launch

All placeholders are centralized and marked `TODO(...)`:

- `src/content/siteConfig.js` — App Store URL, domain, support email, legal entity.
- `src/content/copy.js` — all landing copy.
- `src/content/privacy.md` / `terms.md` — legal text for auge's real data practices.
- `src/components/Hero.jsx` — replace the landscape image placeholder with a real
  art-directed `<picture>` (desktop landscape + mobile portrait crops).

# Sag for Cash

Atlanta creator marketplace MVP built around streetwear / sagging culture.

**Status (2026-10-25)**: LIVE discovery UI on GitHub Pages. PAYMENTS DISABLED.

## Live destinations
- Public discovery: https://lonniebeal-droid.github.io/sag-for-cash/ (HTTP 200 verified 2026-10-25)
- Marketing path `studio-5809245207-fb5d1.web.app/projects/sag-for-cash.html` → **404** as of 2026-10-25 (do not advertise until restored)

## What works (verified)
- Creator profiles, discovery, follows, custom requests, reporting (Pages surface)
- Premium-ready schema fields present; charge path locked off
- 18+ gate / moderation posture in product design

## Safety
- 18+ only
- No live payments until provider + Ju explicit authorization
- No PHI (not a health product)

## Stack
Next.js + React + TypeScript + Tailwind + Supabase client

## Local
```bash
npm install
cp .env.example .env.local
npm test
npm run dev
```

## Exact next
1. Keep payments off.
2. Optional: restore marketing Firebase page or drop the dead link.
3. Optional: onboarding funnel polish still payments-off.

See `DEPLOYMENT_STATUS.md` and `SAG_FOR_CASH_SOFTWARE_READINESS_RECEIPT.md`.

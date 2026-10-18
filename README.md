# Sag for Cash

Atlanta creator marketplace MVP built around streetwear / sagging culture.

**Status (2026-09-25)**: LIVE MVP / PAYMENTS DISABLED. Software readiness advanced by Grok (JU Portfolio Finisher).

## Live destinations
- Public GitHub Pages front: https://lonniebeal-droid.github.io/sag-for-cash/
- Official JU marketing landing: https://studio-5809245207-fb5d1.web.app/projects/sag-for-cash.html

## What works (verified)
- Creator profiles, discovery, follows, custom requests, reporting
- Public drops / free feed pipeline
- Premium-ready schema (locked content + pricing fields present)
- 18+ gate, moderation, RLS-oriented safety posture
- Payments remain **disabled** pending provider approval (no live charges)

## Safety / compliance invariants
- 18+ only
- Payments / real-money settlement disabled until explicit provider + Ju authorization
- Moderated media; reporting path present
- No real PHI; this is a commercial creator marketplace, not a health product

## Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Supabase client (`@supabase/supabase-js`)
- GitHub Pages static front for the public discovery experience

## Local run
```bash
npm install
cp .env.example .env.local
# fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
npm test
npm run dev
```
Open http://localhost:3000

`npm test` does not need real credentials. `npm run build` prerenders without them. A hosted deploy still needs those two public variables set in the host (never a service-role key). This repo does not turn payments on.

## Deploy (staged, not executed)
1. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` on the host.
2. `npm test` then `npm run build`.
3. Deploy only after Ju approves that specific release. Payments stay off.

## Exact next executable tasks
1. Confirm GitHub Pages continues to serve the discovery UI (already live).
2. When payment provider is approved: enable checkout path only after Ju explicit authorization and REAL_MONEY-style gate review.
3. Optional: expand creator onboarding / first-upload funnel while keeping payments off.

## Receipt
See `SAG_FOR_CASH_SOFTWARE_READINESS_RECEIPT.md`.

© 2026 JU / Loomis Group. Payments disabled until authorized.

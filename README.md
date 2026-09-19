# Yoga Bible

A Next.js yoga library with Stripe subscriptions.

## Features

- 24 asanas with Sanskrit names, cues, benefits, and contraindications
- Free vs member poses
- Timed sequences
- Stripe Checkout at `/pricing` (`POST /api/checkout`)

## Setup

```bash
npm install
npm run dev
```

## Stripe (Vercel env)

- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID` — recurring $12/month price
- `NEXT_PUBLIC_SITE_URL` — production URL

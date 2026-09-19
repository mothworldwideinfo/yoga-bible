import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  const key = process.env.STRIPE_SECRET_KEY;
  const price = process.env.STRIPE_PRICE_ID;
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!key || !price) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Add STRIPE_SECRET_KEY and STRIPE_PRICE_ID in Vercel environment variables.",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(key);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price, quantity: 1 }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}

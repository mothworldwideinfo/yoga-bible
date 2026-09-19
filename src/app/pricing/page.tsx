"use client";

import { useState } from "react";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function subscribe() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a3b]">Membership</p>
      <h1 className="mt-2 font-serif text-4xl">The full canon</h1>
      <p className="mt-3 text-[#5c5348]">
        Free readers keep the foundational poses and two sequences. Members unlock intermediate
        and advanced asanas, peak-pose flows, and new sequences as the library grows.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#d7cfc4] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Guest</h2>
          <p className="mt-1 text-3xl">$0</p>
          <ul className="mt-4 space-y-2 text-sm text-[#5c5348]">
            <li>Foundational pose library</li>
            <li>Morning Ground + Calm Evening</li>
            <li>Alignment cues and contraindications</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[#2c241b] bg-[#2c241b] p-6 text-[#f6f1e8]">
          <h2 className="font-serif text-2xl">Member</h2>
          <p className="mt-1 text-3xl">
            $12<span className="text-base">/month</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#d7cfc4]">
            <li>Entire asana library</li>
            <li>All sequences including peak Crow</li>
            <li>Cancel anytime via Stripe</li>
          </ul>
          <button
            onClick={subscribe}
            disabled={loading}
            className="mt-6 w-full rounded-full bg-[#f6f1e8] py-3 text-sm text-[#2c241b] disabled:opacity-60"
          >
            {loading ? "Opening checkout…" : "Subscribe with Stripe"}
          </button>
          {error && <p className="mt-3 text-sm text-[#e8c4b8]">{error}</p>}
        </div>
      </div>
    </main>
  );
}

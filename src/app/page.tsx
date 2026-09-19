import Link from "next/link";
import { poses } from "@/data/poses";
import { sequences } from "@/data/sequences";

export default function Home() {
  const free = poses.filter((p) => !p.premium).length;
  const all = poses.length;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a3b]">The living canon</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight text-[#2c241b] md:text-6xl">
          A yoga bible for the mat — poses, sequences, and quiet discipline.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#5c5348]">
          Study {all} foundational asanas with Sanskrit names, alignment cues, and contraindications.
          {free} poses are free. Members unlock the full library and premium flows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/poses" className="rounded-full bg-[#2c241b] px-6 py-3 text-sm text-[#f6f1e8]">
            Open the library
          </Link>
          <Link href="/pricing" className="rounded-full border border-[#2c241b] px-6 py-3 text-sm">
            Become a member · $12/mo
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3">
        {[
          { t: "Asana library", d: "English + Sanskrit, level, category, hold time, and teaching cues." },
          { t: "Ready sequences", d: `${sequences.length} practices from 20 to 40 minutes, free and member.` },
          { t: "Subscription", d: "Stripe Checkout for monthly membership. Unlock advanced work." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-[#d7cfc4] bg-white/50 p-6">
            <h2 className="font-serif text-2xl">{c.t}</h2>
            <p className="mt-2 text-sm text-[#5c5348]">{c.d}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

import Link from "next/link";
import { poses } from "@/data/poses";

export default function PosesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl">Pose library</h1>
      <p className="mt-2 text-[#5c5348]">
        Free poses are open. Member poses show a lock until you subscribe.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {poses.map((p) => (
          <Link
            key={p.slug}
            href={`/poses/${p.slug}`}
            className="rounded-2xl border border-[#d7cfc4] bg-white/60 p-5 transition hover:border-[#2c241b]"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-serif text-xl">{p.name}</h2>
                <p className="text-sm italic text-[#7a7166]">{p.sanskrit}</p>
              </div>
              {p.premium && (
                <span className="rounded-full bg-[#2c241b] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#f6f1e8]">
                  Member
                </span>
              )}
            </div>
            <p className="mt-3 text-xs uppercase tracking-wide text-[#8a6a3b]">
              {p.category} · {p.level}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

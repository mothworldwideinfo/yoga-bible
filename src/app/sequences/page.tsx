import Link from "next/link";
import { sequences } from "@/data/sequences";

export default function SequencesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl">Sequences</h1>
      <p className="mt-2 text-[#5c5348]">Timed practices. Member flows include peak poses.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sequences.map((s) => (
          <Link key={s.slug} href={`/sequences/${s.slug}`} className="rounded-2xl border border-[#d7cfc4] bg-white/60 p-6">
            <div className="flex justify-between">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              {s.premium && (
                <span className="h-fit rounded-full bg-[#2c241b] px-2 py-0.5 text-[10px] uppercase text-[#f6f1e8]">Member</span>
              )}
            </div>
            <p className="mt-2 text-sm text-[#5c5348]">{s.focus}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-[#8a6a3b]">
              {s.minutes} min · {s.level} · {s.poses.length} poses
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

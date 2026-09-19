import Link from "next/link";
import { notFound } from "next/navigation";
import { getPose, poses } from "@/data/poses";

export function generateStaticParams() {
  return poses.map((p) => ({ slug: p.slug }));
}

export default function PosePage({ params }: { params: { slug: string } }) {
  const pose = getPose(params.slug);
  if (!pose) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/poses" className="text-sm text-[#7a7166]">
        ← Library
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <h1 className="font-serif text-4xl">{pose.name}</h1>
        {pose.premium && (
          <span className="rounded-full bg-[#2c241b] px-3 py-1 text-xs text-[#f6f1e8]">Member</span>
        )}
      </div>
      <p className="mt-1 text-lg italic text-[#7a7166]">{pose.sanskrit}</p>
      <p className="mt-2 text-sm uppercase tracking-wide text-[#8a6a3b]">
        {pose.category} · {pose.level} · Hold {pose.hold}
      </p>
      {pose.premium ? (
        <div className="mt-8 rounded-2xl border border-[#d7cfc4] bg-white/70 p-6">
          <p className="font-serif text-2xl">This asana is in the member canon.</p>
          <p className="mt-2 text-[#5c5348]">
            Subscribe to read full cues, benefits, and contraindications.
          </p>
          <Link href="/pricing" className="mt-5 inline-block rounded-full bg-[#2c241b] px-5 py-2 text-sm text-[#f6f1e8]">
            Unlock with membership
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-serif text-2xl">Cues</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#3d3328]">
              {pose.cues.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="font-serif text-2xl">Benefits</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {pose.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl">Modify or skip</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {pose.avoid.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { sequences } from "@/data/sequences";
import { getPose } from "@/data/poses";

export function generateStaticParams() {
  return sequences.map((s) => ({ slug: s.slug }));
}

export default function SequencePage({ params }: { params: { slug: string } }) {
  const seq = sequences.find((s) => s.slug === params.slug);
  if (!seq) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/sequences" className="text-sm text-[#7a7166]">
        ← Sequences
      </Link>
      <h1 className="mt-4 font-serif text-4xl">{seq.title}</h1>
      <p className="mt-2 text-[#5c5348]">{seq.focus}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-[#8a6a3b]">
        {seq.minutes} minutes · {seq.level}
      </p>
      {seq.premium ? (
        <div className="mt-8 rounded-2xl border border-[#d7cfc4] bg-white/70 p-6">
          <p className="font-serif text-2xl">Member sequence</p>
          <p className="mt-2 text-[#5c5348]">Subscribe to open the full pose order and timing notes.</p>
          <Link href="/pricing" className="mt-5 inline-block rounded-full bg-[#2c241b] px-5 py-2 text-sm text-[#f6f1e8]">
            Subscribe to practice
          </Link>
        </div>
      ) : (
        <>
          <p className="mt-6 text-sm text-[#5c5348]">{seq.notes}</p>
          <ol className="mt-8 space-y-3">
            {seq.poses.map((slug, i) => {
              const p = getPose(slug);
              if (!p) return null;
              return (
                <li key={slug} className="flex items-center justify-between rounded-xl border border-[#d7cfc4] bg-white/50 px-4 py-3">
                  <span>
                    <span className="mr-3 text-xs text-[#8a6a3b]">{i + 1}</span>
                    <Link href={`/poses/${p.slug}`} className="font-medium">{p.name}</Link>
                    <span className="ml-2 text-sm italic text-[#7a7166]">{p.sanskrit}</span>
                  </span>
                  <span className="text-xs text-[#7a7166]">{p.hold}</span>
                </li>
              );
            })}
          </ol>
        </>
      )}
    </main>
  );
}

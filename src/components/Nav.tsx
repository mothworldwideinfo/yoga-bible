import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d7cfc4]/80 bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serif text-xl tracking-tight text-[#2c241b]">
          Yoga Bible
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[#5c5348]">
          <Link href="/poses" className="hover:text-[#2c241b]">
            Poses
          </Link>
          <Link href="/sequences" className="hover:text-[#2c241b]">
            Sequences
          </Link>
          <Link href="/pricing" className="rounded-full bg-[#2c241b] px-4 py-1.5 text-[#f6f1e8] hover:bg-[#3d3328]">
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d7cfc4] py-10 text-center text-sm text-[#7a7166]">
      Yoga Bible · Practice with attention. Not medical advice.
    </footer>
  );
}

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-serif text-4xl">Welcome to the membership</h1>
      <p className="mt-4 text-[#5c5348]">
        Stripe confirmed your subscription. After webhook + auth is wired, member poses
        unlock automatically. For this first release, keep your receipt and we will map
        access to your email.
      </p>
      <Link href="/poses" className="mt-8 inline-block rounded-full bg-[#2c241b] px-6 py-3 text-sm text-[#f6f1e8]">
        Return to the library
      </Link>
    </main>
  );
}

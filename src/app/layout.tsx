import type { Metadata } from "next";
import "./globals.css";
import { Footer, Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Yoga Bible — Poses, Sequences, Membership",
  description:
    "A living yoga library: asana cues, benefits, sequences, and a member plan for the full canon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

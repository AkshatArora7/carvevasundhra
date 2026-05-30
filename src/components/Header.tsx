import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#membership", label: "Membership" },
    { href: "#trainers", label: "Trainers" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff3d00] to-[#ff7a00] text-black font-display text-xl shadow-[0_0_20px_-4px_#ff7a00]">
            C
          </span>
          <span className="font-display text-2xl tracking-wider">
            CARVE <span className="text-[#ff7a00]">24×7</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="btn-primary text-sm hidden sm:inline-flex">
          Join Now
        </a>
      </div>
    </header>
  );
}

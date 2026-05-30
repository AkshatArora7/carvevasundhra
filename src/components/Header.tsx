import Link from "next/link";
import Logo from "@/components/Logo";
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
        <Link href="/" className="flex items-center gap-2" aria-label="Carve 24x7 home">
          <Logo className="h-10 w-32 sm:w-36" variant="gradient" />
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

        <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="btn-primary text-xs px-4 py-2 sm:text-sm sm:px-5 sm:py-2.5">
          Join Now
        </a>
      </div>
    </header>
  );
}

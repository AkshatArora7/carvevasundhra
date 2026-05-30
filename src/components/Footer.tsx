import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const cols = [
    {
      title: "Explore",
      links: [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#membership", label: "Membership" },
        { href: "#trainers", label: "Trainers" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Visit",
      links: [
        { href: "#contact", label: "Contact" },
        { href: site.mapEmbed, label: "Get Directions", external: true },
      ],
    },
  ];

  return (
    <footer className="mt-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2" aria-label="Carve 24x7 home">
            <Image
              src="/logo.png"
              alt="Carve 24x7 — Cut. Shape. Sculpt."
              width={180}
              height={54}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-4 text-zinc-400 max-w-md text-sm leading-relaxed">
            {site.shortDesc}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.social.instagram, label: "IG" },
              { href: site.social.facebook, label: "FB" },
              { href: site.social.youtube, label: "YT" },
              { href: site.social.x, label: "X" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-xs text-zinc-300 hover:bg-white/5 hover:border-white/30"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-xl tracking-wide">{c.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...("external" in l && l.external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    className="hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            {site.address.line1}, {site.address.city} · {site.phones[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}

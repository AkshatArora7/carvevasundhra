import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata = {
  title: "Carve 24×7 — Demo Selector",
  description:
    "Choose a design demo for Carve 24×7. Two distinct directions: a premium dark marketing site and a brutalist infinite-scroll experience.",
  robots: { index: false, follow: false },
};

export default function ChooserPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(255,107,0,0.25), transparent 60%), radial-gradient(50% 40% at 85% 90%, rgba(198,255,0,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-3">
          <Logo variant="gradient" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              {site.name}
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50">
              Demo selector
            </div>
          </div>
        </div>
        <a
          href={`tel:${site.phones[0].replace(/\s+/g, "")}`}
          className="hidden text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white sm:block"
        >
          {site.phones[0]}
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70">
          For client review
        </span>
        <h1 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Pick a{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ff6b00 0%, #ff3d00 60%, #ffb070 100%)",
            }}
          >
            direction
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
          Two distinct concepts for the Carve&nbsp;24×7 website. Open either
          demo, share feedback, and we&rsquo;ll lock the winning direction.
        </p>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3">
        <DemoCard
          href="/v1"
          tag="V1 · Brutalist"
          title="Push Your Limits"
          description="High-contrast brutalist layout with infinite scroll, raw typography, and an electric orange accent. Built for energy and edge."
          bullets={[
            "Infinite-scroll feed (classes · trainers · stories)",
            "Archivo Black + JetBrains Mono",
            "Dark mode, neon accents, hard shadows",
          ]}
          accent="#ff6b00"
        />
        <DemoCard
          href="/v2"
          tag="V2 · Premium"
          title="Cut. Shape. Sculpt."
          description="Refined, premium marketing layout with structured sections, JSON-LD SEO, membership tiers and a conversion-focused contact flow."
          bullets={[
            "Hero · Services · Membership · Trainers · FAQ",
            "Inter + Bebas Neue, soft radial glow",
            "Schema.org HealthClub + sitemap",
          ]}
          accent="#ff3d00"
        />
        <DemoCard
          href="/v3"
          tag="V3 · Scroll"
          title="Train Like You Mean It"
          description="Agency-grade scrollytelling: a sticky section pinned to the viewport while five class cards slide horizontally on vertical scroll."
          bullets={[
            "Framer Motion scroll-linked transforms",
            "Hero video · horizontal classes · CTA",
            "Neon-green accent, Space Grotesk display",
          ]}
          accent="#c6ff00"
        />
      </section>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name} · {site.address.line2},{" "}
        {site.address.city}
      </footer>
    </main>
  );
}

function DemoCard({
  href,
  tag,
  title,
  description,
  bullets,
  accent,
}: {
  href: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
        style={{ background: accent }}
      />
      <span
        className="self-start rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em]"
        style={{ borderColor: `${accent}66`, color: accent }}
      >
        {tag}
      </span>
      <h2 className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
        {description}
      </p>
      <ul className="mt-6 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span
              aria-hidden
              className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: accent }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          Open demo
        </span>
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border transition group-hover:translate-x-1"
          style={{ borderColor: accent, color: accent }}
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}

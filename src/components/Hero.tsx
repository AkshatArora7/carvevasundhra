import { site, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#ff3d00]/25 blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#ff7a00]/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl fade-up">
          <span className="section-eyebrow">Opening soon · Vasundhara, Ghaziabad</span>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight">
            CUT. <span className="text-gradient">SHAPE.</span>
            <br />
            SCULPT.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl">
            {site.shortDesc}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#membership" className="btn-primary">
              Explore Memberships
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Book a Free Tour
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {site.hours}
            </span>
            <span>Sector 5, Vasundhara · Olive County</span>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-black/40 backdrop-blur p-6 sm:p-8">
              <dt className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400">
                {s.label}
              </dt>
              <dd className="mt-2 font-display text-4xl sm:text-5xl text-white">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

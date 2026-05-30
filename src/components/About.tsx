export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-eyebrow">About Carve</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
            A gym built for the
            <br /> <span className="text-gradient">work you put in.</span>
          </h2>
          <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
            Carve 24×7 is more than a fitness center — it&apos;s a transformation
            studio in the heart of Vasundhara, Ghaziabad. We&apos;ve combined
            commercial-grade equipment, evidence-based programming and a coaching
            team that genuinely cares about your progress.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Whether you&apos;re chasing your first pull-up, your strongest
            deadlift, or the body you&apos;ve been promising yourself for years,
            our floor is open and our coaches are ready — around the clock.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "Hammer Strength & free weights",
              "Olympic lifting platforms",
              "Dedicated functional zone",
              "Climate controlled · 22°C",
              "Steam, sauna & lockers",
              "On-site nutritionist",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-black relative">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,122,0,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255,61,0,0.18), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="font-display text-[8rem] leading-[0.85] text-white/90">
                EARN
                <br />
                EVERY
                <br />
                <span className="text-gradient">REP.</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-display text-2xl">
                  C
                </div>
                <div className="text-sm text-zinc-300">
                  <div className="font-semibold text-white">Carve Method™</div>
                  <div className="text-zinc-400">
                    Programmed. Coached. Measured.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="card p-5 w-56">
              <div className="text-xs uppercase tracking-widest text-zinc-400">
                Member rating
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-display text-4xl">4.9</span>
                <span className="text-[#ff7a00]">★★★★★</span>
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Based on Google reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

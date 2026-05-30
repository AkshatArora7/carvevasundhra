const trainers = [
  { name: "Arjun Kapoor", role: "Head Coach · Strength & Conditioning", years: "12" },
  { name: "Neha Verma", role: "Yoga & Mobility Specialist", years: "8" },
  { name: "Rahul Bisht", role: "Personal Trainer · Fat Loss", years: "9" },
  { name: "Priya Sharma", role: "Functional & HIIT Coach", years: "6" },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="section-eyebrow">Coaches</span>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
              Meet the <span className="text-gradient">team.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400">
            Internationally certified, continuously trained, and obsessed with
            your progress.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <article key={t.name} className="card overflow-hidden group">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.25), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 font-display text-7xl text-white/15 group-hover:text-white/30 transition">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-300">
                  {t.years} yrs exp
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl tracking-wide">{t.name}</h3>
                <p className="text-sm text-zinc-400 mt-1">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

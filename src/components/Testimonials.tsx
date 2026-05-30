import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Members say</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
            Real results. <br />
            <span className="text-gradient">Real people.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-7 flex flex-col">
              <div className="text-[#ff7a00] text-2xl leading-none">“</div>
              <blockquote className="mt-3 text-zinc-200 leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-white/10">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-zinc-400">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

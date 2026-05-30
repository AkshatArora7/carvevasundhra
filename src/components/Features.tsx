import { features } from "@/lib/site";

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Why Carve</span>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
              Built different. <br />
              <span className="text-gradient">On purpose.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400">
            Every detail — from flooring to lighting to coaching certifications
            — is selected to make your time on the floor count.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-black/60 p-8 hover:bg-[#111] transition-colors"
            >
              <div className="font-display text-5xl text-[#ff7a00]/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-2xl tracking-wide">
                {f.title}
              </h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

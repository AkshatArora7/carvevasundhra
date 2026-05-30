import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a0a05] via-[#0a0a0a] to-[#0a0a0a] p-10 sm:p-16">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#ff3d00]/30 blur-[120px]"
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl leading-none">
                Ready to <span className="text-gradient">show up?</span>
              </h2>
              <p className="mt-4 text-zinc-300 max-w-lg">
                Lock in pre-launch pricing today. Limited founding-member spots
                available at Carve 24×7, Vasundhara.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a href="#contact" className="btn-primary">
                Reserve Membership
                <span aria-hidden>→</span>
              </a>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                className="btn-ghost"
              >
                {site.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

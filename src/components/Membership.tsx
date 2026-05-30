import { plans } from "@/lib/site";

export default function Membership() {
  return (
    <section id="membership" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Membership</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
            Plans that match your <span className="text-gradient">grind.</span>
          </h2>
          <p className="mt-5 text-zinc-400">
            Transparent pricing. No joining fees. Cancel anytime within the
            first 7 days for a full refund.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative card p-8 flex flex-col ${
                p.highlight
                  ? "border-[#ff7a00]/60 bg-gradient-to-b from-[#ff3d00]/10 to-transparent shadow-[0_0_60px_-20px_#ff7a00]"
                  : ""
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-[#ff3d00] to-[#ff7a00] text-black">
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-3xl tracking-wide">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span className="text-zinc-400 text-sm">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-[#ff3d00] to-[#ff7a00] flex items-center justify-center text-[10px] text-black font-bold shrink-0">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 text-center ${
                  p.highlight ? "btn-primary justify-center" : "btn-ghost justify-center"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Looking for corporate / family plans?{" "}
          <a href="#contact" className="text-[#ff7a00] hover:underline">
            Talk to us
          </a>
          .
        </p>
      </div>
    </section>
  );
}

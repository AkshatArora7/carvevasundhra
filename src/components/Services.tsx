import { services } from "@/lib/site";

const Icon = ({ name }: { name: string }) => {
  const common = "w-7 h-7";
  switch (name) {
    case "dumbbell":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 9v6M2 11v2M20 9v6M22 11v2M7 6v12M17 6v12M7 12h10" strokeLinecap="round" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M3 11h3l2-4 4 8 2-4h7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trainer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21c0-4 3-7 7-7s7 3 7 7" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" strokeLinejoin="round" />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3c2 4 2 8 0 12-2-4-2-8 0-12zM3 14c4-1 7 1 9 4-4 1-7-1-9-4zm18 0c-4-1-7 1-9 4 4 1 7-1 9-4z" strokeLinejoin="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16M4 20l8-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow">What we offer</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-none">
            Train every way. <br />
            <span className="text-gradient">Recover every day.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            From heavy compound lifts to mindful mobility — every discipline
            under one roof, with expert coaching included.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card p-7 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff3d00]/20 to-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide">
                {s.title}
              </h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

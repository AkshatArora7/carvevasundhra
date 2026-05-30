export default function Marquee() {
  const words = [
    "STRENGTH",
    "ENDURANCE",
    "POWER",
    "DISCIPLINE",
    "MOBILITY",
    "HYPERTROPHY",
    "RECOVERY",
    "GRIT",
    "PROGRESS",
    "FOCUS",
  ];
  const row = [...words, ...words];
  return (
    <div className="border-y border-white/10 bg-black/50 overflow-hidden">
      <div className="marquee-track flex gap-12 py-5 whitespace-nowrap will-change-transform">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl sm:text-4xl tracking-widest text-zinc-500"
          >
            {w}
            <span className="ml-12 text-[#ff7a00]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

type Props = {
  align?: "left" | "center" | "right";
  className?: string;
};

export default function CraftedBy({ align = "center", className = "" }: Props) {
  const justify =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div
      className={`flex ${justify} pt-4 ${className}`}
      style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
    >
      <a
        href="https://aatechax.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Crafted by aatechax — visit aatechax.com"
        className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/35 transition-colors hover:text-white"
      >
        <span>Crafted by</span>
        <span className="relative inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
            style={{
              background:
                "linear-gradient(135deg, #ff6b00 0%, #ff3d00 60%, #ffb070 100%)",
              boxShadow: "0 0 12px rgba(255,107,0,0.55)",
            }}
          />
          <span
            className="font-semibold tracking-[0.3em] text-white/80 transition-colors group-hover:text-[#ff6b00]"
          >
            aatechax
          </span>
        </span>
        <span
          aria-hidden
          className="ml-1 inline-block translate-x-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          ↗
        </span>
      </a>
    </div>
  );
}

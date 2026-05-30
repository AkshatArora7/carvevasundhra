type Props = {
  className?: string;
  variant?: "gradient" | "white" | "dark";
  ariaLabel?: string;
};

export default function Logo({
  className = "h-10 w-auto",
  variant = "gradient",
  ariaLabel = "Carve 24x7 — Cut. Shape. Sculpt.",
}: Props) {
  const background =
    variant === "gradient"
      ? "linear-gradient(135deg, #ff7a00 0%, #ff3d00 55%, #ffd166 100%)"
      : variant === "white"
      ? "#ffffff"
      : "#0a0a0a";

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={`inline-block aspect-[10/3] ${className}`}
      style={{
        background,
        WebkitMaskImage: "url(/logo.png)",
        maskImage: "url(/logo.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  variable: "--font-v3-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const body = Inter({
  variable: "--font-v3-body",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-v3-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carve 24×7 — Scroll Edition (V3 Demo)",
  description:
    "V3 demo — a premium scroll-triggered horizontal storytelling experience for Carve 24×7. Strength · Cardio · HIIT · Combat · Mobility.",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ fontFamily: "var(--font-v3-body), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}

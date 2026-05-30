import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";

const display = Archivo_Black({
  variable: "--font-v1-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const body = Inter({
  variable: "--font-v1-body",
  subsets: ["latin"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-v1-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carve 24×7 — Push Your Limits | Brutalist Edition",
  description:
    "Carve 24×7 V1 — a brutalist, infinite-scroll fitness experience. Strength, HIIT, yoga, personal training in Vasundhara, Ghaziabad. Open 24 hours.",
};

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      {children}
    </div>
  );
}

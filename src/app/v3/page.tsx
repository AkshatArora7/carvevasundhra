"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ClassCard = {
  tag: string;
  title: string;
  subtitle: string;
  bullets: string[];
  metric: { value: string; label: string };
  image: string;
  accent: string;
};

const CLASSES: ClassCard[] = [
  {
    tag: "01 / Strength",
    title: "Iron Forged",
    subtitle: "Powerlifting · Olympic · Hypertrophy",
    bullets: [
      "Coached compound lifts",
      "Periodised 12-week blocks",
      "Open rack floor 24/7",
    ],
    metric: { value: "2,400kg", label: "Plate weight on floor" },
    image:
      "https://picsum.photos/seed/carve-strength/1600/1100",
    accent: "#ff6b00",
  },
  {
    tag: "02 / Cardio",
    title: "Engine Room",
    subtitle: "Zone 2 · VO₂ · Conditioning",
    bullets: [
      "Assault bikes & ski ergs",
      "Heart-rate guided sessions",
      "Lactate-threshold testing",
    ],
    metric: { value: "180 BPM", label: "Average peak in class" },
    image:
      "https://picsum.photos/seed/carve-cardio/1600/1100",
    accent: "#c6ff00",
  },
  {
    tag: "03 / HIIT",
    title: "Burn Protocol",
    subtitle: "Tabata · AMRAP · EMOM",
    bullets: [
      "45-minute group sweat",
      "Functional movement focus",
      "Beginner & advanced lanes",
    ],
    metric: { value: "650 kcal", label: "Average burn per session" },
    image:
      "https://picsum.photos/seed/carve-hiit/1600/1100",
    accent: "#ff3d00",
  },
  {
    tag: "04 / Combat",
    title: "Strike Lab",
    subtitle: "Boxing · Muay Thai · Kickboxing",
    bullets: [
      "Pad work with coaches",
      "Bag floor & ring",
      "Tactical conditioning",
    ],
    metric: { value: "12 bags", label: "Plus a full-size ring" },
    image:
      "https://picsum.photos/seed/carve-combat/1600/1100",
    accent: "#ff6b00",
  },
  {
    tag: "05 / Mobility",
    title: "Quiet Power",
    subtitle: "Yoga · Stretch · Recovery",
    bullets: [
      "Heated mobility studio",
      "Sound bath & breathwork",
      "1:1 movement screens",
    ],
    metric: { value: "24/7", label: "Recovery zone access" },
    image:
      "https://picsum.photos/seed/carve-yoga/1600/1100",
    accent: "#c6ff00",
  },
];

export default function V3Page() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <Nav />
      <Hero />
      <HorizontalClasses />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-black/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-7 w-7"
            style={{
              WebkitMaskImage: "url(/logo.png)",
              maskImage: "url(/logo.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              background:
                "linear-gradient(135deg,#ff6b00 0%,#ff3d00 60%,#ffb070 100%)",
            }}
          />
          <span
            className="text-sm font-semibold tracking-[0.18em]"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            CARVE 24×7
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/70 md:flex">
          <a href="#classes" className="transition hover:text-white">
            Classes
          </a>
          <a href="#join" className="transition hover:text-white">
            Join
          </a>
          <Link href="/" className="transition hover:text-white">
            All demos
          </Link>
        </nav>
        <a
          href="#join"
          className="rounded-full bg-green-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-green-300"
        >
          Join Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="https://picsum.photos/seed/carve-hero/1920/1080"
        aria-hidden
      >
        <source src="/v3/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 40%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 70%, #000 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, #000)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70"
          style={{ fontFamily: "var(--font-v3-mono)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Open 24 / 7 · Vasundhara
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-4xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-v3-display)" }}
        >
          Train like
          <br />
          you <span className="text-green-400">mean it.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-white/70 sm:text-lg"
        >
          Five disciplines. One floor. Carve&nbsp;24×7 is a coach-led strength
          and conditioning club in Vasundhara, built for people who show up.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-3 rounded-full bg-green-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-green-300"
          >
            Join Now
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#classes"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
          >
            See classes
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/50"
        style={{ fontFamily: "var(--font-v3-mono)" }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}

function HorizontalClasses() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapperRef });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const trackWidthVw = (CLASSES.length - 1) * 100;
  const x = useTransform(smooth, [0, 1], ["0vw", `-${trackWidthVw}vw`]);
  const progressScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section
      id="classes"
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `${CLASSES.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 pt-24 sm:px-12">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.4em] text-green-400"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              — Disciplines
            </p>
            <h2
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              Five ways to train.
            </h2>
          </div>
          <div className="hidden text-right sm:block">
            <p
              className="text-[10px] uppercase tracking-[0.4em] text-white/40"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              Scroll to advance
            </p>
            <p
              className="mt-2 text-xs text-white/60"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              {CLASSES.length} classes
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {CLASSES.map((c, i) => (
            <Card key={c.title} card={c} index={i} />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-20 mx-auto h-[2px] w-[min(80vw,900px)] origin-left overflow-hidden bg-white/10">
          <motion.div
            style={{ scaleX: progressScale, transformOrigin: "left" }}
            className="h-full w-full bg-green-400"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ card, index }: { card: ClassCard; index: number }) {
  return (
    <article
      className="relative flex h-full w-screen flex-shrink-0 items-center justify-center px-8 sm:px-16"
      aria-label={`${card.tag} — ${card.title}`}
    >
      <div className="relative flex h-[78vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:flex-row">
        <div className="relative h-1/2 w-full sm:h-full sm:w-3/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={`${card.title} training environment at Carve 24x7`}
            className="absolute inset-0 h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-1 left-0 right-0 h-32 sm:bottom-0 sm:left-auto sm:right-0 sm:top-0 sm:h-full sm:w-32"
            style={{
              background:
                "linear-gradient(to top, rgba(9,9,11,1), transparent)",
            }}
          />
          <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
            <span
              className="rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              {card.tag}
            </span>
          </div>
        </div>

        <div className="relative flex w-full flex-1 flex-col justify-between gap-8 p-8 sm:w-2/5 sm:p-12">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: card.accent, fontFamily: "var(--font-v3-mono)" }}
            >
              {card.subtitle}
            </p>
            <h3
              className="mt-3 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              {card.title}
            </h3>
            <ul className="mt-6 space-y-2.5 text-sm text-white/75">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: card.accent }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <p
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-v3-display)" }}
              >
                {card.metric.value}
              </p>
              <p
                className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50"
                style={{ fontFamily: "var(--font-v3-mono)" }}
              >
                {card.metric.label}
              </p>
            </div>
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white/5"
            >
              Try class
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <section id="join" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="text-[10px] uppercase tracking-[0.4em] text-green-400"
            style={{ fontFamily: "var(--font-v3-mono)" }}
          >
            — Ready?
          </p>
          <h2
            className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Walk in.{" "}
            <span className="text-green-400">Walk out stronger.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Book a free intro session and we&rsquo;ll show you the floor. No
            pressure, no sales script — just a workout.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              Visit
            </p>
            <p className="mt-3 text-sm text-white/80">
              1st Floor, Olive Street
              <br />
              Olive County, Sector 5
              <br />
              Vasundhara, Ghaziabad 201012
            </p>
          </div>
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              Call
            </p>
            <p className="mt-3 text-sm text-white/80">
              <a href="tel:+918750001034" className="hover:text-white">
                +91 87500 01034
              </a>
              <br />
              <a href="tel:+918750001037" className="hover:text-white">
                +91 87500 01037
              </a>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <a
              href="tel:+918750001034"
              className="inline-flex items-center gap-3 rounded-full bg-green-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-green-300"
            >
              Book intro
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.25em] text-white/50 hover:text-white"
            >
              ← Back to all demos
            </Link>
          </div>
        </div>

        <p
          className="mt-20 text-[10px] uppercase tracking-[0.3em] text-white/30"
          style={{ fontFamily: "var(--font-v3-mono)" }}
        >
          © {new Date().getFullYear()} Carve 24×7 · V3 Scroll Edition
        </p>
      </div>
    </section>
  );
}

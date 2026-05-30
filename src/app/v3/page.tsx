"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CraftedBy from "@/components/CraftedBy";

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
      "Coach-led compound lifts — squat, bench, deadlift, clean",
      "Periodised 12-week strength blocks with weekly check-ins",
      "Open rack floor 24/7 with calibrated competition plates",
    ],
    metric: { value: "2,400kg", label: "Plate weight on the floor" },
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80",
    accent: "#ff6b00",
  },
  {
    tag: "02 / Cardio",
    title: "Engine Room",
    subtitle: "Zone 2 · VO₂ Max · Conditioning",
    bullets: [
      "Assault bikes, ski ergs, rowers and a 30-meter sled track",
      "Heart-rate guided sessions with on-screen zone display",
      "Quarterly lactate-threshold testing for serious athletes",
    ],
    metric: { value: "180 BPM", label: "Average peak in class" },
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    accent: "#ff3d00",
  },
  {
    tag: "03 / HIIT",
    title: "Burn Protocol",
    subtitle: "Tabata · AMRAP · EMOM",
    bullets: [
      "45-minute group sweat — no two sessions the same",
      "Functional movement focus with regressions for every level",
      "Beginner & advanced lanes running side by side",
    ],
    metric: { value: "650 kcal", label: "Average burn per session" },
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    accent: "#ff6b00",
  },
  {
    tag: "04 / Combat",
    title: "Strike Lab",
    subtitle: "Boxing · Muay Thai · Kickboxing",
    bullets: [
      "Pad work with national-level coaches",
      "Twelve heavy bags, double-end bags and a full-size ring",
      "Tactical conditioning circuits between rounds",
    ],
    metric: { value: "12 bags", label: "Plus a full-size training ring" },
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80",
    accent: "#ff3d00",
  },
  {
    tag: "05 / Mobility",
    title: "Quiet Power",
    subtitle: "Yoga · Stretch · Recovery",
    bullets: [
      "Heated mobility studio for deep tissue work",
      "Sound bath, breathwork and guided meditation",
      "1:1 movement screens with our physio team",
    ],
    metric: { value: "24/7", label: "Recovery zone access" },
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
    accent: "#ff6b00",
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
          className="rounded-full bg-[#ff6b00] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#ff3d00] hover:text-white"
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
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
          Open 24 / 7 · Vasundhara
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-5xl text-5xl font-bold leading-[0.92] tracking-tight sm:mt-8 sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-v3-display)" }}
        >
          Train like
          <br />
          you{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#ff6b00 0%,#ff3d00 60%,#ffb070 100%)",
            }}
          >
            mean it.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-xl"
        >
          Five disciplines. One floor. Carve&nbsp;24×7 is a coach-led strength
          and conditioning club in Vasundhara, built for people who show up —
          and stay long after the music stops.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex w-full flex-wrap items-center gap-3 sm:mt-12 sm:w-auto sm:gap-4"
        >
          <a
            href="#join"
            className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#ff6b00] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#ff3d00] hover:text-white sm:flex-none sm:px-8 sm:py-5 sm:text-sm"
          >
            Join Now
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#classes"
            className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5 sm:flex-none sm:px-8 sm:py-5 sm:text-sm"
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
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 pt-6 sm:px-12 sm:pt-24">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.4em] text-[#ff6b00]"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              — Disciplines
            </p>
            <h2
              className="mt-2 text-xl font-bold tracking-tight sm:text-4xl"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 mx-auto h-[2px] w-[min(85vw,900px)] origin-left overflow-hidden bg-white/10 sm:bottom-10">
          <motion.div
            style={{ scaleX: progressScale, transformOrigin: "left" }}
            className="h-full w-full bg-[#ff6b00]"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ card, index }: { card: ClassCard; index: number }) {
  return (
    <article
      className="relative flex h-full w-screen flex-shrink-0 items-center justify-center px-3 sm:px-16"
      aria-label={`${card.tag} — ${card.title}`}
    >
      <div className="relative mt-20 mb-12 flex h-[calc(100vh-8rem)] w-full max-w-[1500px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:mt-0 sm:mb-0 sm:h-[82vh] sm:flex-row sm:rounded-3xl">
        <div className="relative h-[38%] w-full sm:h-full sm:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={`${card.title} — ${card.subtitle} training at Carve 24x7`}
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
            className="absolute -bottom-1 left-0 right-0 h-32 sm:bottom-0 sm:left-auto sm:right-0 sm:top-0 sm:h-full sm:w-40"
            style={{
              background:
                "linear-gradient(to top, rgba(9,9,11,1), transparent)",
            }}
          />
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
            <span
              className="rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs"
              style={{ fontFamily: "var(--font-v3-mono)" }}
            >
              {card.tag}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-12 sm:left-12 sm:right-12">
            <p
              className="text-4xl font-bold uppercase leading-[0.85] tracking-tight text-white/90 sm:text-7xl md:text-8xl"
              style={{
                fontFamily: "var(--font-v3-display)",
                WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              }}
            >
              0{index + 1}
            </p>
          </div>
        </div>

        <div className="relative flex w-full flex-1 flex-col justify-between gap-5 p-5 sm:w-1/2 sm:gap-10 sm:p-14">
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.3em] sm:text-sm"
              style={{ color: card.accent, fontFamily: "var(--font-v3-mono)" }}
            >
              {card.subtitle}
            </p>
            <h3
              className="mt-2 text-3xl font-bold leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl md:text-7xl"
              style={{ fontFamily: "var(--font-v3-display)" }}
            >
              {card.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80 sm:mt-8 sm:space-y-4 sm:text-lg">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 sm:gap-4">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full sm:mt-3 sm:h-2 sm:w-2"
                    style={{ background: card.accent }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-3 border-t border-white/10 pt-4 sm:flex-nowrap sm:gap-6 sm:pt-8">
            <div>
              <p
                className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-v3-display)", color: card.accent }}
              >
                {card.metric.value}
              </p>
              <p
                className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/60 sm:mt-2 sm:text-xs"
                style={{ fontFamily: "var(--font-v3-mono)" }}
              >
                {card.metric.label}
              </p>
            </div>
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/5 sm:px-6 sm:py-4 sm:text-xs"
              style={{ borderColor: card.accent, color: card.accent }}
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
            className="text-[10px] uppercase tracking-[0.4em] text-[#ff6b00]"
            style={{ fontFamily: "var(--font-v3-mono)" }}
          >
            — Ready?
          </p>
          <h2
            className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-v3-display)" }}
          >
            Walk in.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#ff6b00 0%,#ff3d00 60%,#ffb070 100%)",
              }}
            >
              Walk out stronger.
            </span>
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
              className="inline-flex items-center gap-3 rounded-full bg-[#ff6b00] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#ff3d00] hover:text-white"
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
        <CraftedBy align="left" className="mt-6" />
      </div>
    </section>
  );
}

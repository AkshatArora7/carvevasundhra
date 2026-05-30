"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import s from "./v1.module.css";

// ---------------- mock data ----------------
type ClassItem = {
  tag: string;
  title: string;
  duration: string;
  level: string;
  coach: string;
  q: string;
  desc: string;
};
type Trainer = { name: string; role: string; years: number; q: string };
type Story = { name: string; role: string; q: string; quote: string };

const CLASSES: ClassItem[] = [
  { tag: "Strength", title: "Powerlifting Foundations", duration: "60 min", level: "All Levels", coach: "Arjun K.", q: "powerlifting,barbell",
    desc: "Squat. Bench. Deadlift. The big three taught right — programming, cues and progressive overload that translate to real numbers on the bar." },
  { tag: "HIIT", title: "Burn Zone HIIT", duration: "45 min", level: "Intermediate", coach: "Priya S.", q: "hiit,cardio,gym",
    desc: "Twelve stations. Forty-five minutes. Battle ropes, sled pushes, assault bikes — leave knowing you trained." },
  { tag: "Yoga", title: "Power Vinyasa", duration: "55 min", level: "All Levels", coach: "Neha V.", q: "yoga,studio",
    desc: "Heat, breath and flow. Build mobility and decompress between heavy sessions without losing your edge." },
  { tag: "Functional", title: "Athletic Functional", duration: "50 min", level: "Advanced", coach: "Rahul B.", q: "functional,training,athlete",
    desc: "Kettlebells, plyo, sled, sandbag — train like an athlete, move like one outside the gym." },
  { tag: "Cardio", title: "Tread + Tempo", duration: "40 min", level: "Beginner", coach: "Priya S.", q: "treadmill,running,gym",
    desc: "Zone-2 intervals on the treadmill engineered for fat loss without trashing your knees." },
  { tag: "Mobility", title: "Recovery & Mobility", duration: "35 min", level: "All Levels", coach: "Neha V.", q: "stretching,foam,roller",
    desc: "Foam rolling, banded mobility, and breathwork. Your body will thank you on Monday." },
  { tag: "Dance", title: "Zumba Live", duration: "50 min", level: "All Levels", coach: "Aanchal R.", q: "zumba,dance,studio",
    desc: "High-energy choreography to Bollywood, Afro and Latin. Cardio that doesn't feel like cardio." },
  { tag: "Bodybuilding", title: "Hypertrophy Split", duration: "75 min", level: "Intermediate", coach: "Arjun K.", q: "bodybuilding,gym,muscle",
    desc: "Push / pull / legs the Carve way — volume, tempo, and proximity-to-failure dialed for size." },
  { tag: "CrossFit", title: "Conditioning WOD", duration: "60 min", level: "Advanced", coach: "Rahul B.", q: "crossfit,kettlebell",
    desc: "Classic AMRAPs and EMOMs scored on the wall. Compete with yourself, never the clock." },
];

const TRAINERS: Trainer[] = [
  { name: "Arjun Kapoor", role: "Head Coach · S&C", years: 12, q: "male,trainer,gym" },
  { name: "Neha Verma", role: "Yoga & Mobility", years: 8, q: "female,yoga,instructor" },
  { name: "Rahul Bisht", role: "Personal Trainer", years: 9, q: "trainer,fitness,man" },
  { name: "Priya Sharma", role: "HIIT & Functional", years: 6, q: "female,trainer,fitness" },
  { name: "Aanchal Rao", role: "Dance & Cardio", years: 7, q: "dance,coach,female" },
  { name: "Vikrant Mehra", role: "Bodybuilding", years: 14, q: "bodybuilder,male,gym" },
  { name: "Sana Iqbal", role: "Nutrition Coach", years: 5, q: "nutritionist,wellness" },
  { name: "Karan Joshi", role: "Mobility Specialist", years: 6, q: "stretch,coach,man" },
];

const STORIES: Story[] = [
  { name: "Rohan Mehta", role: "Lost 14 kg in 4 months", q: "fit,man,portrait",
    quote: "The coaches actually pay attention to your form. Three other gyms didn't come close." },
  { name: "Ananya Sharma", role: "Marathon trainee", q: "runner,woman,portrait",
    quote: "Clean, well-lit, never overcrowded. The functional zone made my endurance work click." },
  { name: "Vikram Singh", role: "Powerlifter · 200 kg DL", q: "weightlifter,portrait",
    quote: "Calibrated plates. Real platforms. Chalk allowed. That alone makes Carve worth it." },
  { name: "Meera Joshi", role: "Postnatal comeback", q: "woman,fitness,smile",
    quote: "Patient coaching that respected my recovery. I'm stronger now than before pregnancy." },
  { name: "Kabir Singh", role: "Gained 8 kg lean mass", q: "muscular,man,portrait",
    quote: "Programming + nutrition + accountability. The combo I never got at any other gym." },
  { name: "Tanya Bhalla", role: "First pull-up at 35", q: "athletic,woman,gym",
    quote: "Carve made strength feel approachable. Today I did three unbroken pull-ups." },
];

// ---------------- helpers ----------------
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Picsum-based placeholder, seeded — easy to swap to your own /public asset.
function imgFor(seed: string, w = 900, h = 700) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

type Section =
  | { kind: "classes"; page: number; items: ClassItem[] }
  | { kind: "trainers"; page: number; items: Trainer[] }
  | { kind: "stories"; page: number; items: Story[] };

const MAX_PAGES = 4;
const KIND_TITLES: Record<Section["kind"], string> = {
  classes: "CLASSES IN ROTATION",
  trainers: "MEET THE COACHES",
  stories: "TRANSFORMATION STORIES",
};

// ---------------- page ----------------
export default function V1Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(loading);
  const pageRef = useRef(page);
  loadingRef.current = loading;
  pageRef.current = page;

  // ----- append a new batch -----
  const appendBatch = useCallback(() => {
    if (loadingRef.current) return;
    if (pageRef.current >= MAX_PAGES) return;

    setLoading(true);
    const nextPage = pageRef.current + 1;

    setTimeout(() => {
      setSections((prev) => {
        const idx = pageRef.current;
        return [
          ...prev,
          { kind: "classes", page: idx, items: shuffle(CLASSES).slice(0, 3) },
          { kind: "trainers", page: idx, items: shuffle(TRAINERS).slice(0, 4) },
          { kind: "stories", page: idx, items: shuffle(STORIES).slice(0, 2) },
        ];
      });
      setPage(nextPage);
      setLoading(false);
      if (nextPage >= MAX_PAGES) setEnded(true);
    }, 650);
  }, []);

  // ----- IntersectionObserver: infinite scroll -----
  useEffect(() => {
    if (ended) return;
    const node = sentinelRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) appendBatch();
        });
      },
      { rootMargin: "600px 0px 600px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [appendBatch, ended]);

  // ----- initial batch -----
  useEffect(() => {
    appendBatch();
  }, [appendBatch]);

  // ----- scroll state for nav -----
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // ----- reveal-on-scroll for sections -----
  const revealRefs = useRef<Set<HTMLElement>>(new Set());
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.revealVisible);
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    revealRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const registerReveal = (el: HTMLElement | null) => {
    if (el) revealRefs.current.add(el);
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={`${s.root} ${navOpen ? s.navOpen : ""}`}>
      {/* ============= NAV ============= */}
      <header className={`${s.nav} ${scrolled ? s.navScrolled : ""}`}>
        <a href="#top" className={s.navBrand} aria-label="Carve 24x7 home">
          <span className={s.logoMask} aria-hidden />
          <span className={s.navTag}>CUT · SHAPE · SCULPT</span>
        </a>
        <nav className={s.navLinks} aria-label="Primary">
          <a href="#classes" onClick={() => setNavOpen(false)}>Classes</a>
          <a href="#trainers" onClick={() => setNavOpen(false)}>Trainers</a>
          <a href="#stories" onClick={() => setNavOpen(false)}>Stories</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
        </nav>
        <a href="#contact" className={`${s.btn} ${s.btnPrimary} ${s.navCta}`}>
          JOIN NOW →
        </a>
        <button
          className={s.navMenu}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </header>

      <main id="top">
        {/* ============= HERO ============= */}
        <section className={s.hero}>
          <video
            className={s.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1600&q=80&auto=format&fit=crop"
          >
            <source src="/v1/hero.mp4" type="video/mp4" />
          </video>
          <div className={s.heroOverlay} aria-hidden />
          <div className={s.heroContent}>
            <span className={s.eyebrow}>Vasundhara · Ghaziabad · 24/7</span>
            <h1 className={s.heroTitle}>
              PUSH<br />YOUR<br /><span className={s.accent}>LIMITS.</span>
            </h1>
            <p className={s.heroLede}>
              A brutalist temple to iron and sweat. Industrial-grade equipment,
              certified coaches, and a floor that never closes.
            </p>
            <div className={s.heroCta}>
              <a href="#contact" className={`${s.btn} ${s.btnPrimary}`}>JOIN NOW</a>
              <a href="#feed" className={`${s.btn} ${s.btnGhost}`}>SEE CLASSES ↓</a>
            </div>
            <dl className={s.heroStats}>
              <div><dt>OPEN</dt><dd>24/7</dd></div>
              <div><dt>FLOOR</dt><dd>8,000 ft²</dd></div>
              <div><dt>COACHES</dt><dd>15+</dd></div>
              <div><dt>CLASSES/WK</dt><dd>40+</dd></div>
            </dl>
          </div>
          <a href="#feed" className={s.heroScroll} aria-label="Scroll to content">
            SCROLL <span aria-hidden>↓</span>
          </a>
        </section>

        {/* ============= MARQUEE ============= */}
        <div className={s.marquee} aria-hidden>
          <div className={s.marqueeTrack}>
            {[
              "STRENGTH","✦","ENDURANCE","✦","POWER","✦","DISCIPLINE","✦",
              "HYPERTROPHY","✦","MOBILITY","✦","GRIT","✦",
              "STRENGTH","✦","ENDURANCE","✦","POWER","✦","DISCIPLINE","✦",
              "HYPERTROPHY","✦","MOBILITY","✦","GRIT","✦",
            ].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>

        {/* ============= FEED ============= */}
        <section id="feed" className={s.feed} aria-label="Carve content feed">
          <header
            className={`${s.feedHead} ${s.reveal}`}
            ref={registerReveal as (el: HTMLElement | null) => void}
          >
            <span className={s.eyebrow}>The Feed</span>
            <h2 className={s.feedTitle}>
              NO PAGES. <span className={s.accent}>JUST PROGRESS.</span>
            </h2>
            <p className={s.feedSub}>
              Keep scrolling. Classes, coaches, real member stories — loaded
              as you go.
            </p>
          </header>

          <div className={s.feedItems}>
            {sections.map((sec, i) => (
              <FeedSection
                key={`${sec.kind}-${i}`}
                id={sec.kind}
                title={`${KIND_TITLES[sec.kind]}`}
                meta={`PAGE ${sec.page + 1} · ${sec.items.length} ITEMS`}
                registerReveal={registerReveal}
              >
                {sec.kind === "classes" && (
                  <div className={s.storyStack}>
                    {sec.items.map((c, j) => (
                      <ClassCard key={`${i}-${j}`} c={c} seed={`c-${i}-${j}`} />
                    ))}
                  </div>
                )}
                {sec.kind === "trainers" && (
                  <div className={s.trainerGrid}>
                    {sec.items.map((t, j) => (
                      <TrainerCard key={`${i}-${j}`} t={t} seed={`t-${i}-${j}`} />
                    ))}
                  </div>
                )}
                {sec.kind === "stories" && (
                  <div className={s.storyStack}>
                    {sec.items.map((st, j) => (
                      <StoryCard key={`${i}-${j}`} st={st} seed={`s-${i}-${j}`} />
                    ))}
                  </div>
                )}
              </FeedSection>
            ))}
          </div>

          {/* loader */}
          {!ended && (
            <div
              className={`${s.loader} ${loading ? s.loaderActive : ""}`}
              aria-live="polite"
              aria-busy={loading}
            >
              <div className={s.loaderBar}><div className={s.loaderFill} /></div>
              <div className={s.loaderSkeletons}>
                <div className={s.skeleton} />
                <div className={s.skeleton} />
                <div className={s.skeleton} />
              </div>
              <p className={s.loaderText}>LOADING MORE…</p>
            </div>
          )}

          <div ref={sentinelRef} className={s.sentinel} aria-hidden />

          {ended && (
            <p className={s.feedEnd}>
              ◼ THAT&apos;S THE END OF THE FEED — NOW GO TRAIN.
            </p>
          )}
        </section>

        {/* ============= CONTACT ============= */}
        <section
          id="contact"
          className={`${s.contact} ${s.reveal}`}
          ref={registerReveal as (el: HTMLElement | null) => void}
        >
          <div className={s.contactGrid}>
            <div>
              <span className={s.eyebrow}>Visit</span>
              <h2 className={s.contactTitle}>
                COME IN. <span className={s.accent}>LIFT.</span>
              </h2>
              <p className={s.contactAddr}>
                1st Floor, Olive Street, Olive County<br />
                Sector 5, Vasundhara, Ghaziabad 201012
              </p>
              <p className={s.contactPhones}>
                <a href="tel:+918750001034">+91 87500 01034</a> ·{" "}
                <a href="tel:+918750001037">+91 87500 01037</a>
              </p>
              <div className={s.contactCta}>
                <a href="tel:+918750001034" className={`${s.btn} ${s.btnPrimary}`}>
                  CALL US
                </a>
                <a
                  href="https://www.google.com/maps?q=Olive+County+Sector+5+Vasundhara+Ghaziabad"
                  target="_blank"
                  rel="noopener"
                  className={`${s.btn} ${s.btnGhost}`}
                >
                  DIRECTIONS ↗
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className={s.foot}>
        <span
          className={`${s.logoMask} ${s.footLogo}`}
          aria-label="Carve 24x7"
        />
        <p>© {year} CARVE 24×7 · ALL RIGHTS RESERVED.</p>
        <p className={s.footAddr}>SECTOR 5, VASUNDHARA · GHAZIABAD</p>
      </footer>
    </div>
  );
}

// ---------------- subcomponents ----------------
function FeedSection({
  id,
  title,
  meta,
  children,
  registerReveal,
}: {
  id: string;
  title: string;
  meta: string;
  children: React.ReactNode;
  registerReveal: (el: HTMLElement | null) => void;
}) {
  return (
    <section
      id={id}
      className={s.reveal}
      ref={registerReveal as (el: HTMLElement | null) => void}
    >
      <header className={s.sectionHead}>
        <h3>{title}</h3>
        <span className={s.count}>{meta}</span>
      </header>
      {children}
    </section>
  );
}

function FallbackImg({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 60%, #2a1500 100%)",
          ...style,
        }}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      style={style}
      onError={() => setErrored(true)}
    />
  );
}

function ClassCard({ c, seed }: { c: ClassItem; seed: string }) {
  return (
    <article className={`${s.card} ${s.classCard}`}>
      <div className={s.classCardMedia}>
        <span className={s.classCardTag}>{c.tag}</span>
        <FallbackImg
          src={imgFor(seed + c.q, 900, 700)}
          alt={`${c.title} class at Carve 24x7`}
        />
      </div>
      <div className={s.classCardBody}>
        <h4 className={s.classCardTitle}>{c.title}</h4>
        <p className={s.classCardDesc}>{c.desc}</p>
        <dl className={s.classCardMeta}>
          <div><dt>DURATION</dt> <strong>{c.duration}</strong></div>
          <div><dt>LEVEL</dt> <strong>{c.level}</strong></div>
          <div><dt>COACH</dt> <strong>{c.coach}</strong></div>
        </dl>
      </div>
    </article>
  );
}

function TrainerCard({ t, seed }: { t: Trainer; seed: string }) {
  return (
    <article className={`${s.card} ${s.trainerCard}`}>
      <div className={s.trainerCardImg}>
        <FallbackImg
          src={imgFor(seed + t.q, 600, 800)}
          alt={`Portrait of ${t.name}, ${t.role} at Carve 24x7`}
        />
      </div>
      <div className={s.trainerCardBody}>
        <h4 className={s.trainerCardName}>{t.name}</h4>
        <p className={s.trainerCardRole}>{t.role}</p>
        <p className={s.trainerCardYears}>{t.years}+ yrs experience</p>
      </div>
    </article>
  );
}

function StoryCard({ st, seed }: { st: Story; seed: string }) {
  return (
    <article className={`${s.card} ${s.storyCard}`}>
      <div className={s.storyAvatar}>
        <FallbackImg
          src={imgFor(seed + st.q, 400, 400)}
          alt={`Member testimonial: ${st.name}`}
        />
      </div>
      <div>
        <p className={s.storyQuote}>{st.quote}</p>
        <p className={s.storyBy}>
          <strong>{st.name}</strong> · {st.role}
        </p>
      </div>
    </article>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className={s.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>NAME<input type="text" name="name" required /></label>
      <label>PHONE<input type="tel" name="phone" required /></label>
      <label>EMAIL<input type="email" name="email" required /></label>
      <label>
        GOAL
        <select name="goal" defaultValue="Weight loss">
          <option>Weight loss</option>
          <option>Muscle gain</option>
          <option>General fitness</option>
          <option>Personal training</option>
        </select>
      </label>
      <button type="submit" className={`${s.btn} ${s.btnPrimary}`}>
        SEND →
      </button>
      {sent && (
        <p className={s.contactOk}>
          ✔ Thanks — we&apos;ll be in touch within a day.
        </p>
      )}
    </form>
  );
}

/* ===========================================================
   CARVE 24x7 — Vanilla JS infinite feed
   - IntersectionObserver-driven lazy append
   - Reveal-on-scroll animations
   - Mobile nav toggle
   =========================================================== */

(() => {
  "use strict";

  // ---------- helpers ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const create = (tag, attrs = {}, html = "") => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") el.className = v;
      else if (k === "dataset") Object.assign(el.dataset, v);
      else el.setAttribute(k, v);
    }
    if (html) el.innerHTML = html;
    return el;
  };
  const rand = (n) => Math.floor(Math.random() * n);
  const img = (q, seed, w = 900, h = 700) =>
    `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(q)}&sig=${seed}`;

  // ---------- mock data ----------
  const CLASSES = [
    { tag: "Strength",  title: "Powerlifting Foundations", duration: "60 min", level: "All Levels", coach: "Arjun K.", q: "powerlifting,barbell",
      desc: "Squat. Bench. Deadlift. The big three taught right — programming, cues and progressive overload that actually translates to numbers on the bar." },
    { tag: "HIIT",      title: "Burn Zone HIIT", duration: "45 min", level: "Intermediate", coach: "Priya S.", q: "hiit,cardio,gym",
      desc: "Twelve stations. Forty-five minutes. Battle ropes, sled pushes, assault bikes — leave knowing you trained." },
    { tag: "Yoga",      title: "Power Vinyasa", duration: "55 min", level: "All Levels", coach: "Neha V.", q: "yoga,studio",
      desc: "Heat, breath and flow. Build mobility and decompress between heavy sessions without losing your edge." },
    { tag: "Functional", title: "Athletic Functional", duration: "50 min", level: "Advanced", coach: "Rahul B.", q: "functional,training,athlete",
      desc: "Kettlebells, plyo, sled, sandbag — train like an athlete, move like one outside the gym." },
    { tag: "Cardio",    title: "Tread + Tempo", duration: "40 min", level: "Beginner", coach: "Priya S.", q: "treadmill,running,gym",
      desc: "Zone-2 intervals on the treadmill engineered for fat loss without trashing your knees." },
    { tag: "Mobility",  title: "Recovery & Mobility", duration: "35 min", level: "All Levels", coach: "Neha V.", q: "stretching,foam,roller",
      desc: "Foam rolling, banded mobility, and breathwork. Your body will thank you on Monday." },
    { tag: "Dance",     title: "Zumba Live", duration: "50 min", level: "All Levels", coach: "Aanchal R.", q: "zumba,dance,studio",
      desc: "High-energy choreography to Bollywood, Afro and Latin. Cardio that doesn't feel like cardio." },
    { tag: "Bodybuilding", title: "Hypertrophy Split", duration: "75 min", level: "Intermediate", coach: "Arjun K.", q: "bodybuilding,gym,muscle",
      desc: "Push / pull / legs the Carve way — volume, tempo, and proximity-to-failure dialed for size." },
    { tag: "CrossFit",  title: "Conditioning WOD", duration: "60 min", level: "Advanced", coach: "Rahul B.", q: "crossfit,kettlebell",
      desc: "Classic AMRAPs and EMOMs scored on the wall. Compete with yourself, never the clock." },
  ];

  const TRAINERS = [
    { name: "Arjun Kapoor", role: "Head Coach · S&C", years: 12, q: "male,trainer,gym" },
    { name: "Neha Verma",   role: "Yoga & Mobility",  years: 8,  q: "female,yoga,instructor" },
    { name: "Rahul Bisht",  role: "Personal Trainer", years: 9,  q: "trainer,fitness,man" },
    { name: "Priya Sharma", role: "HIIT & Functional", years: 6, q: "female,trainer,fitness" },
    { name: "Aanchal Rao",  role: "Dance & Cardio",   years: 7,  q: "dance,coach,female" },
    { name: "Vikrant Mehra",role: "Bodybuilding",     years: 14, q: "bodybuilder,male,gym" },
    { name: "Sana Iqbal",   role: "Nutrition Coach",  years: 5,  q: "nutritionist,wellness" },
    { name: "Karan Joshi",  role: "Mobility Specialist", years: 6, q: "stretch,coach,man" },
  ];

  const STORIES = [
    { name: "Rohan Mehta",   role: "Lost 14 kg in 4 months", q: "fit,man,portrait",
      quote: "The coaches actually pay attention to your form. Three other gyms didn't come close." },
    { name: "Ananya Sharma", role: "Marathon trainee", q: "runner,woman,portrait",
      quote: "Clean, well-lit, never overcrowded. The functional zone made my endurance work click." },
    { name: "Vikram Singh",  role: "Powerlifter · 200 kg DL", q: "weightlifter,portrait",
      quote: "Calibrated plates. Real platforms. Chalk allowed. That alone makes Carve worth it." },
    { name: "Meera Joshi",   role: "Postnatal comeback", q: "woman,fitness,smile",
      quote: "Patient coaching that respected my recovery. I'm stronger now than before pregnancy." },
    { name: "Kabir Singh",   role: "Gained 8 kg lean mass", q: "muscular,man,portrait",
      quote: "Programming + nutrition + accountability. The combo I never got at any other gym." },
    { name: "Tanya Bhalla",  role: "First pull-up at 35", q: "athletic,woman,gym",
      quote: "Carve made strength feel approachable. Today I did three unbroken pull-ups." },
  ];

  // ---------- builders ----------
  let imgSeed = 1;
  const nextSeed = () => imgSeed++;

  function buildClass(c) {
    const el = create("article", { class: "card class-card" });
    el.innerHTML = `
      <div class="class-card__media">
        <span class="class-card__tag">${c.tag}</span>
        <img loading="lazy" alt="${c.title} class at Carve 24x7"
             src="${img(c.q, nextSeed(), 900, 700)}"
             onerror="this.style.background='linear-gradient(135deg,#1a1a1a,#0a0a0a)';this.removeAttribute('src');" />
      </div>
      <div class="class-card__body">
        <h4 class="class-card__title">${c.title}</h4>
        <p class="class-card__desc">${c.desc}</p>
        <dl class="class-card__meta">
          <div><dt>DURATION</dt> <strong>${c.duration}</strong></div>
          <div><dt>LEVEL</dt> <strong>${c.level}</strong></div>
          <div><dt>COACH</dt> <strong>${c.coach}</strong></div>
        </dl>
      </div>`;
    return el;
  }

  function buildTrainer(t) {
    const el = create("article", { class: "card trainer-card" });
    el.innerHTML = `
      <div class="trainer-card__img">
        <img loading="lazy" alt="Portrait of ${t.name}, ${t.role} at Carve 24x7"
             src="${img(t.q, nextSeed(), 600, 800)}"
             onerror="this.style.background='linear-gradient(135deg,#222,#000)';this.removeAttribute('src');" />
      </div>
      <div class="trainer-card__body">
        <h4 class="trainer-card__name">${t.name}</h4>
        <p class="trainer-card__role">${t.role}</p>
        <p class="trainer-card__years">${t.years}+ yrs experience</p>
      </div>`;
    return el;
  }

  function buildStory(s) {
    const el = create("article", { class: "card story-card" });
    el.innerHTML = `
      <div class="story-card__avatar">
        <img loading="lazy" alt="Member testimonial: ${s.name}"
             src="${img(s.q, nextSeed(), 400, 400)}"
             onerror="this.style.background='linear-gradient(135deg,#222,#000)';this.removeAttribute('src');" />
      </div>
      <div>
        <p class="story-card__quote">${s.quote}</p>
        <p class="story-card__by"><strong>${s.name}</strong> · ${s.role}</p>
      </div>`;
    return el;
  }

  function buildSection(title, count, kind) {
    const wrap = create("section", { class: "reveal" });
    wrap.id = kind;
    wrap.innerHTML = `
      <header class="feed__section-head">
        <h3>${title}</h3>
        <span class="count">PAGE ${page + 1} · ${count} ITEMS</span>
      </header>
      <div class="${kind === "trainers" ? "trainer-grid" : ""}" data-list></div>`;
    return wrap;
  }

  // ---------- infinite loader ----------
  const feed     = $("#feedItems");
  const loader   = $("#loader");
  const sentinel = $("#sentinel");
  const endMsg   = $("#feedEnd");

  const KINDS = ["classes", "trainers", "stories"];
  const TITLES = {
    classes: "CLASSES IN ROTATION",
    trainers: "MEET THE COACHES",
    stories: "TRANSFORMATION STORIES",
  };
  const MAX_PAGES = 4; // ~12 sections of mixed content before "end"
  let page = 0;
  let loading = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function appendBatch() {
    if (loading || page >= MAX_PAGES) return;
    loading = true;
    loader.classList.add("is-active");
    loader.setAttribute("aria-busy", "true");

    // simulate fetch latency
    setTimeout(() => {
      KINDS.forEach((kind) => {
        let items, builder;
        if (kind === "classes")       { items = shuffle(CLASSES).slice(0, 3); builder = buildClass; }
        else if (kind === "trainers") { items = shuffle(TRAINERS).slice(0, 4); builder = buildTrainer; }
        else                          { items = shuffle(STORIES).slice(0, 2);  builder = buildStory; }

        const section = buildSection(TITLES[kind], items.length, kind);
        const list = section.querySelector("[data-list]");

        if (kind === "trainers") {
          items.forEach((i) => list.appendChild(builder(i)));
        } else {
          // non-grid sections — stack with spacing
          list.style.display = "flex";
          list.style.flexDirection = "column";
          list.style.gap = "1.5rem";
          items.forEach((i) => list.appendChild(builder(i)));
        }

        feed.appendChild(section);
        revealObserver.observe(section);
      });

      page += 1;
      loading = false;
      loader.classList.remove("is-active");
      loader.setAttribute("aria-busy", "false");

      if (page >= MAX_PAGES) {
        endMsg.hidden = false;
        scrollObserver.disconnect();
        loader.remove();
      }
    }, 650);
  }

  // ---------- observers ----------
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) appendBatch();
      });
    },
    { rootMargin: "600px 0px 600px 0px" }
  );
  scrollObserver.observe(sentinel);

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // ---------- nav: scroll + mobile toggle ----------
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 16);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#navToggle").addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    $("#navToggle").setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      $("#navToggle").setAttribute("aria-expanded", "false");
    })
  );

  // year stamp
  const yr = $("#year");
  if (yr) yr.textContent = new Date().getFullYear();

  // kick off the first batch immediately so there's content under the hero
  appendBatch();
})();

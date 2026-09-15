import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Flame,
  Instagram,
  MapPin,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT, RESULTS, STATS, TEACHERS, TESTIMONIALS } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-classroom.jpg";
import t1 from "@/assets/teacher-1.jpg";
import t2 from "@/assets/teacher-2.jpg";
import t3 from "@/assets/teacher-3.jpg";
import t4 from "@/assets/teacher-4.jpg";
import t5 from "@/assets/teacher-5.jpg";

const teacherImages = [t1, t2, t3, t4, t5];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/6 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      <Sparkles className="h-3 w-3" />
      {children}
    </span>
  );
}

/* ---------------------------------------------------------------- HERO */
export function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-64 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,oklch(0.375_0.072_187/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.375_0.072_187/0.06)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <Eyebrow>{t.hero.badge}</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.03] font-bold tracking-[-0.02em] text-balance-tight text-foreground sm:text-5xl lg:text-[4.1rem]">
            {t.hero.titleA}
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {t.hero.titleB}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.lead}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_oklch(0.4_0.08_180)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-20px_oklch(0.4_0.08_180)]"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-muted-foreground">{t.hero.note}</p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2.5">
                {teacherImages.slice(0, 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={200}
                    height={200}
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs leading-snug text-muted-foreground">
              {lang === "uz"
                ? "3000+ o‘quvchi · 500+ o‘quvchi IELTS 7.0+ ball"
                : "3,000+ students taught · 500+ scored IELTS 7.0+"}
            </p>
          </div>
        </Reveal>

        <Reveal className="relative" delay={140}>
          <div className="grain overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_40px_80px_-50px_oklch(0.3_0.06_180/0.6)]">
            <img
              src={hero}
              alt={
                lang === "uz"
                  ? "NUFUZ Learning Center darsxonasida IELTS guruhi"
                  : "An IELTS group in a NUFUZ Learning Center classroom"
              }
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="float-soft absolute -right-2 top-5 hidden rounded-2xl border border-border/70 bg-card/90 px-4 py-3 shadow-[0_20px_50px_-30px_oklch(0.3_0.06_180/0.8)] backdrop-blur-xl sm:block">
            <p className="font-display text-2xl font-bold leading-none text-primary">8.5</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              IELTS · 2026
            </p>
          </div>

          <div className="mt-4 rounded-3xl border border-border/70 bg-card/85 p-5 shadow-[0_24px_60px_-40px_oklch(0.3_0.06_180/0.7)] backdrop-blur-xl sm:absolute sm:-bottom-10 sm:-left-6 sm:mt-0 sm:w-72">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.hero.cardTitle}
            </p>
            <ul className="mt-3 space-y-2.5">
              {t.hero.cardRows.map((r) => (
                <li key={r.k} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-foreground">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {r.k}
                  </span>
                  <span className="text-xs text-muted-foreground">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STATS */
export function Stats() {
  const { lang } = useLang();
  return (
    <section className="grain border-y border-border/60 bg-gradient-to-br from-primary via-primary to-[oklch(0.3_0.07_192)] text-primary-foreground">
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 90}
            className={`px-2 text-center lg:px-6 ${
              i > 0 ? "lg:border-l lg:border-primary-foreground/12" : ""
            }`}
          >
            <div className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {s.value}
            </div>
            <p className="mt-1.5 text-xs leading-snug text-primary-foreground/75 sm:text-sm">
              {lang === "uz" ? s.uz : s.en}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ PROGRAMS */
export function Programs() {
  const { t } = useLang();
  return (
    <section
      id="programs"
      className="scroll-mt-24 border-y border-primary/15 bg-gradient-to-br from-[oklch(0.91_0.035_160)] via-[oklch(0.94_0.028_150)] to-[oklch(0.88_0.045_175)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.programsTitle}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance-tight text-foreground sm:text-4xl">
            {t.programsLead}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {t.programs.map((p, i) => {
            const core = i < 2;
            return (
              <Reveal
                as="article"
                key={p.name}
                delay={i * 90}
                className={`hover-lift flex flex-col rounded-3xl border p-7 sm:p-8 ${
                  core
                    ? "border-primary/25 bg-gradient-to-br from-primary/7 via-card to-card"
                    : "border-border/70 bg-card"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      core ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="font-display text-sm font-bold text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 [margin-top:1.5rem]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.meta}
                  </span>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    {t.nav.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- RESULTS */
export function Results() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<"all" | "IELTS" | "Multilevel">("all");
  const list = RESULTS.filter((r) => filter === "all" || r.exam === filter);

  const renderResult = (r: (typeof RESULTS)[number], key: string, hidden = false) => (
    <article
      key={key}
      aria-hidden={hidden || undefined}
      className="group relative w-[17rem] shrink-0 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary to-[oklch(0.31_0.07_192)] p-5 text-primary-foreground shadow-[0_26px_60px_-45px_oklch(0.3_0.06_180/0.9)] sm:w-[19rem]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-accent/18 blur-2xl"
      />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-primary-foreground/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
          {r.exam}
        </span>
        <Flame className="h-4 w-4 text-accent" />
      </div>
      <div className="relative mt-5 flex items-end gap-2">
        <span className="font-display text-4xl font-bold leading-none text-accent">{r.score}</span>
        <span className="pb-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/55">
          {r.exam === "IELTS" ? "band" : "CEFR"}
        </span>
      </div>
      <p className="relative mt-2 text-[11px] text-primary-foreground/70">{r.detail}</p>
      <div className="relative mt-5 border-t border-primary-foreground/15 pt-4">
        <p className="font-semibold">{r.name}</p>
        <p className="mt-0.5 truncate text-xs text-primary-foreground/70">
          {lang === "uz" ? r.uni.uz : r.uni.en}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-primary-foreground/55">
          {t.resultsFrom}: {r.from}
        </p>
      </div>
    </article>
  );

  const renderResultRow = (items: typeof RESULTS, reverse = false) => (
    <div className="marquee-viewport">
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {[false, true].map((duplicate) => (
          <div key={String(duplicate)} className="flex shrink-0 gap-4 pr-4">
            {items.map((r, i) => renderResult(r, `${duplicate}-${r.name}-${i}`, duplicate))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="results" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>{t.resultsTitle}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance-tight text-foreground sm:text-4xl">
              {t.resultsLead}
            </h2>
          </div>
          <div className="flex gap-2">
            {(["all", "IELTS", "Multilevel"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_12px_30px_-18px_oklch(0.4_0.08_180)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f === "all" ? t.resultsFilterAll : f}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        {renderResultRow(list)}
        {renderResultRow([...list].reverse(), true)}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ TEACHERS */
export function Teachers() {
  const { t, lang } = useLang();
  const teacherCards = TEACHERS.map((teacher, i) => {
    const info = lang === "uz" ? teacher.uz : teacher.en;
    return { teacher, info, image: teacherImages[i] };
  });

  return (
    <section id="teachers" className="scroll-mt-24 border-y border-border/60 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.teachersTitle}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance-tight text-foreground sm:text-4xl">
            {t.teachersLead}
          </h2>
        </Reveal>
      </div>
      <div className="marquee-viewport mt-12">
        <div className="marquee-track marquee-track-teachers">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="flex shrink-0 gap-5 pr-5">
              {teacherCards.map(({ teacher, info, image }) => (
                <article
                  key={`${duplicate}-${teacher.key}`}
                  aria-hidden={duplicate || undefined}
                  className="grid h-[19rem] w-[20rem] shrink-0 grid-cols-[7.5rem_1fr] overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_24px_60px_-50px_oklch(0.3_0.06_180/0.8)] sm:h-[18rem] sm:w-[34rem] sm:grid-cols-[12rem_1fr]"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={image}
                      alt={duplicate ? "" : info.name}
                      loading="lazy"
                      width={900}
                      height={1100}
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col p-4 sm:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{info.role}</p>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-foreground">{info.name}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
                        {teacher.achievement}
                      </span>
                      <span className="truncate rounded-full border border-border/70 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                        {info.students}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{info.bio}</p>
                    <blockquote className="mt-auto border-t border-border/60 pt-3">
                      <p className="line-clamp-2 text-xs italic text-foreground/85">{info.quote}</p>
                      <footer className="mt-1 truncate text-[10px] font-semibold text-primary">{info.quoteBy}</footer>
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- ABOUT */
export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <Eyebrow>{t.aboutTitle}</Eyebrow>
          <p className="mt-5 font-display text-2xl font-semibold leading-snug text-balance-tight text-primary sm:text-3xl">
            {t.aboutLead}
          </p>
          {t.aboutBody.map((p) => (
            <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.aboutPoints.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 80}
              className="hover-lift rounded-3xl border border-border/70 bg-card p-6"
            >
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- TESTIMONIALS */
export function Testimonials() {
  const { t, lang } = useLang();
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>{t.testimonialsTitle}</Eyebrow>
        </Reveal>
      </div>
      <div className="marquee-viewport mt-10">
        <div className="marquee-track marquee-track-reviews">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="flex shrink-0 gap-4 pr-4">
              {TESTIMONIALS.map((item, i) => {
                const c = lang === "uz" ? item.uz : item.en;
                return (
                  <figure
                    key={`${duplicate}-${i}`}
                    aria-hidden={duplicate || undefined}
                    className="flex h-56 w-[19rem] shrink-0 flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-[0_22px_55px_-50px_oklch(0.3_0.06_180/0.9)] sm:w-[24rem]"
                  >
                    <div className="flex items-center justify-between">
                      <Quote className="h-5 w-5 text-accent" />
                      <div className="flex gap-0.5 text-accent">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star key={s} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mt-3 line-clamp-4 grow text-sm leading-relaxed text-foreground/90">
                      {c.text}
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                        {c.by.charAt(0)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-foreground">{c.by}</span>
                        <span className="text-xs font-medium uppercase tracking-wider text-primary">{c.meta}</span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */
export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>{t.faqTitle}</Eyebrow>
        </Reveal>
        <Reveal
          delay={80}
          className="mt-8 divide-y divide-border/60 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_30px_70px_-60px_oklch(0.3_0.06_180/0.9)]"
        >
          {t.faq.map((item, i) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
              >
                <span className="text-sm font-semibold text-foreground sm:text-base">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-400 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground">
                  <span className="block pb-5">{item.a}</span>
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- CONTACT */
export function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="grain rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary via-primary to-[oklch(0.3_0.07_190)] p-7 text-primary-foreground shadow-[0_50px_100px_-60px_oklch(0.3_0.06_180)] sm:p-10 lg:p-14">
          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance-tight sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-3 max-w-md text-sm text-primary-foreground/80 sm:text-base">{t.ctaLead}</p>

              <div className="mt-8 space-y-3 text-sm">
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" />
                  {CONTACT.phone}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  {lang === "uz" ? CONTACT.addressUz : CONTACT.addressEn}
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href={CONTACT.telegram}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-semibold transition-colors hover:bg-primary-foreground/20"
                  >
                    <Send className="h-3.5 w-3.5" /> Telegram
                  </a>
                  <a
                    href={CONTACT.instagram}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-semibold transition-colors hover:bg-primary-foreground/20"
                  >
                    <Instagram className="h-3.5 w-3.5" /> @nufuz_lc
                  </a>
                </div>
              </div>
<div className="mt-8 h-56 overflow-hidden rounded-2xl border border-primary-foreground/15">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.5684271842915!2d64.6801095!3d40.096253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA1JzQ2LjUiTiA2NMKwNDAnNDguNCJF!5e0!3m2!1sen!2s!4v1789053184142!5m2!1sen!2s"
    className="h-full w-full border-0"
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
</div>
            <form
     onSubmit={async (e) => {
      e.preventDefault();

      const formElement = e.currentTarget;
      const inputs = formElement.querySelectorAll('input');
      const rawName = inputs[0] ? inputs[0].value.trim() : "";
      const rawPhone = inputs[1] ? inputs[1].value.trim() : "";
      const courseSelect = formElement.querySelector('select') as HTMLSelectElement;
      const course = courseSelect ? courseSelect.value : "";

      // Ismni tekshirish: kamida 3 ta harf va raqam yo'qligi
      const nameRegex = /^[A-Za-zА-Яа-яG'g'O'o'ShshChch\s]{3,}$/;
      const hasNumber = /\d/.test(rawName);

      if (!nameRegex.test(rawName) || hasNumber) {
        alert("Iltimos, ismingizni to'g'ri kiriting (kamida 3 ta harfdan iborat bo'lsin va raqam qatnashmasin).");
        return;
      }

      // Telefon raqamdan faqat raqamlarni ajratib olish va to'liqligini tekshirish
      const rawDigits = rawPhone.replace(/[^\d]/g, ""); // 998912345678 formatida
      if (rawDigits.length !== 12) {
        alert("Iltimos, telefon raqamingizni to'liq kiriting (masalan: +998 91 234 56 78).");
        return;
      }

      // Telegramga yuborish uchun toza raqam (+998912345678)
      const formattedPhoneForTelegram = "+" + rawDigits;

      const BOT_TOKEN = "8956519614:AAEhpMvqRvkFky30u3y2JmzTWIgI0UWGZBE";
      const CHAT_ID = "8133807584";

      const message = `🎯 Yangi ariza keldi!\n\n👤 Ism: ${rawName}\n📞 Tel: ${formattedPhoneForTelegram}\n📚 Kurs: ${course}`;

      try {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        });

        if (res.ok) {
          alert("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
          formElement.reset();
        } else {
          alert("Xatolik yuz berdi, iltimos qaytadan urinib ko'ring.");
        }
      } catch (err) {
        console.error(err);
        alert("Internet bilan aloqada xatolik!");
      }
    }}
              className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 p-5 sm:p-6"
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {t.formName}
                  </span>
                  <input
                    required
                    className="mt-1.5 w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/8 px-4 py-3 text-sm text-primary-foreground transition-colors placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                    placeholder={lang === "uz" ? "Ism va familiya" : "Full name"}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {t.formPhone}
                  </span>
               <input
  required
  type="text"
  defaultValue="+998 "
  onInput={(e) => {
    let input = e.currentTarget;
    let val = input.value;
    if (!val.startsWith("+998")) {
      input.value = "+998 ";
      return;
    }
    let digits = val.slice(5).replace(/\D/g, "").slice(0, 9);
    let res = "+998";
    if (digits.length > 0) res += " " + digits.slice(0, 2);
    if (digits.length > 2) res += " " + digits.slice(2, 5);
    if (digits.length > 5) res += " " + digits.slice(5, 7);
    if (digits.length > 7) res += " " + digits.slice(7, 9);
    input.value = res;
  }}
  placeholder="+998 91 234 56 78"
  className="mt-1.5 w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground transition-colors placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
/>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {t.formCourse}
                  </span>
                  <select className="mt-1.5 w-full rounded-xl border border-primary-foreground/20 bg-primary px-4 py-3 text-sm text-primary-foreground transition-colors focus:border-accent focus:outline-none">
                    {t.programs.map((p) => (
                      <option key={p.name}>{p.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_oklch(0.79_0.155_78)]"
              >
                {t.formSubmit}
              </button>
              {sent && <p className="mt-3 text-center text-sm text-accent">{t.formDone}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- FOOTER */
export function Footer() {
  const { t, lang } = useLang();
  const links = [
    ["#programs", t.nav.programs],
    ["#results", t.nav.results],
    ["#teachers", t.nav.teachers],
    ["#about", t.nav.about],
    ["#faq", t.nav.faq],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-lg font-bold tracking-[0.14em] text-primary">{t.brand}</p>
          <p className="text-[10px] font-medium tracking-[0.28em] text-muted-foreground">{t.brandSub}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {lang === "uz"
              ? "IELTS, Multilevel (CEFR), SAT va General English kurslari. 2020 yildan beri Gijduvonda."
              : "IELTS, Multilevel (CEFR), SAT and General English courses. In Gijduvon since 2020."}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={CONTACT.telegram}
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary/8"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary/8"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.phoneHref}
              aria-label={CONTACT.phone}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary/8"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label={t.nav.programs}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {lang === "uz" ? "Bo‘limlar" : "Sections"}
          </p>
          <ul className="mt-4 space-y-2.5">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.contactTitle}
          </p>
          <a
            href={CONTACT.phoneHref}
            className="mt-4 block text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            {CONTACT.phone}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {lang === "uz" ? CONTACT.addressUz : CONTACT.addressEn}
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t.nav.cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} NUFUZ Learning Center. {t.footerRights}
        </p>
      </div>
    </footer>
  );
}

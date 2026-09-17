import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/content/site";
import mark from "@/assets/Nufuz-lc2.png";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#programs", t.nav.programs],
    ["#results", t.nav.results],
    ["#teachers", t.nav.teachers],
    ["#about", t.nav.about],
    ["#faq", t.nav.faq],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_40px_-24px_oklch(0.3_0.06_180/0.5)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:h-20 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={mark} alt="" width={512} height={512} className="h-9 w-9 object-contain" />
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-[0.14em] text-primary">
              {t.brand}
            </span>
            <span className="block text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
              {t.brandSub}
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/8 hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div className="flex rounded-full border border-border/70 bg-card/60 p-0.5" role="group" aria-label={t.langLabel}>
            {(["uz", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={CONTACT.phoneHref}
            aria-label={CONTACT.phone}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border/70 text-primary transition-colors hover:bg-primary/8 sm:flex"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.4_0.08_180)] transition-transform hover:-translate-y-0.5 sm:block"
          >
            {t.nav.cta}
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-5 py-3 backdrop-blur-xl lg:hidden">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm font-medium text-foreground/80 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}

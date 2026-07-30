import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND, NAV_LINKS } from "@/lib/site";

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5 shrink-0" aria-label={BRAND.name}>
      <img
        src="/logo.png"
        alt="RR Heaven Gardenblr Logo"
        className="h-13 sm:h-16 md:h-20 lg:h-24 w-auto object-contain rounded-lg bg-white p-1 shadow-md border border-gold/40 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="hidden sm:flex flex-col">
        <span
          className={`font-display text-[1.1rem] sm:text-[1.35rem] md:text-[1.5rem] leading-none tracking-tight transition-colors duration-500 ${
            light ? "text-on-dark" : "text-forest"
          }`}
        >
          RR Heaven
        </span>
        <span className="eyebrow text-[0.6rem] sm:text-[0.68rem] tracking-[0.2em] text-gold pt-0.5">
          Gardenblr
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || !overHero ? "glass-nav py-2 md:py-3.5" : "py-3 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-3 sm:px-6 md:px-10">
          <Wordmark light={light} />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`link-underline text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-500 ${
                  light
                    ? "text-on-dark/85 hover:text-on-dark"
                    : "text-foreground/70 hover:text-forest"
                }`}
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/book-consultation"
              className={`btn-lux inline-flex ${
                light ? "btn-ghost-light" : "btn-solid"
              } !px-2.5 !py-1.5 sm:!px-6 sm:!py-3 !text-[0.6rem] sm:!text-[0.68rem] font-mono`}
            >
              <span>Book</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 sm:h-10 sm:w-11 shrink-0 items-center justify-center border-2 border-gold/70 text-gold bg-black/50 shadow-md transition-all hover:bg-gold hover:text-black lg:hidden"
            >
              <span className="flex flex-col gap-[4px]">
                <span className="block h-[2px] w-4 bg-current" />
                <span className="block h-[2px] w-4 bg-current" />
                <span className="block h-[2px] w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col justify-between bg-forest-deep p-6 overflow-y-auto lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-on-dark/15 pb-4">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="RR Heaven Logo"
                    className="h-12 w-auto object-contain rounded-lg bg-white p-1"
                  />
                  <div>
                    <span className="font-display text-xl text-on-dark block">RR Heaven</span>
                    <span className="text-[0.6rem] text-gold tracking-widest uppercase font-mono block">Gardenblr</span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold bg-black/40"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.4 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-on-dark/10 py-3.5 text-lg font-display text-on-dark hover:text-gold transition-colors"
                      activeProps={{ className: "text-gold font-bold" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      <span>{l.label}</span>
                      <span className="text-xs text-gold font-mono">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="mt-8 border-t border-on-dark/15 pt-6 space-y-3">
              <Link
                to="/book-consultation"
                onClick={() => setOpen(false)}
                className="btn-lux btn-solid w-full justify-center py-3 text-xs uppercase font-mono"
              >
                <span>Book Garden Consultation</span>
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:+91${BRAND.phones[0]}`}
                  className="btn-lux btn-ghost-light w-full justify-center py-2.5 text-xs font-mono"
                >
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=Hello%20RR%20Heaven%20Gardenblr`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lux btn-ghost-light w-full justify-center py-2.5 text-xs font-mono text-gold border-gold/40"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
              <p className="eyebrow text-center text-stone/60 text-[0.65rem] pt-2">{BRAND.hours}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

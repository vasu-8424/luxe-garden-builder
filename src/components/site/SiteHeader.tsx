import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND, NAV_LINKS } from "@/lib/site";

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link to="/" className="group flex items-baseline gap-2" aria-label={BRAND.name}>
      <span
        className={`font-display text-[1.35rem] leading-none tracking-tight transition-colors duration-500 ${
          light ? "text-on-dark" : "text-forest"
        }`}
      >
        RR Heaven
      </span>
      <span
        className={`eyebrow pt-[2px] transition-colors duration-500 ${
          light ? "text-gold" : "text-gold"
        }`}
      >
        Gardenblr
      </span>
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
          scrolled || !overHero ? "glass-nav py-3" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
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

          <div className="flex items-center gap-3">
            <Link
              to="/book-consultation"
              className={`btn-lux hidden md:inline-flex ${
                light ? "btn-ghost-light" : "btn-solid"
              } !px-6 !py-3 !text-[0.68rem]`}
            >
              <span>Book Consultation</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
                light
                  ? "border-on-dark/30 text-on-dark"
                  : "border-foreground/15 text-foreground"
              }`}
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-forest-deep lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="font-display text-xl text-on-dark">RR Heaven</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center border border-on-dark/25 text-on-dark"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 flex flex-col px-5">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.6 }}
                >
                  <Link
                    to={l.to}
                    className="block border-b border-on-dark/10 py-5 font-display text-3xl text-on-dark"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-5 pt-10">
              <Link
                to="/book-consultation"
                className="btn-lux btn-ghost-light w-full justify-center"
              >
                <span>Book Consultation</span>
              </Link>
              <p className="eyebrow mt-8 text-stone/60">{BRAND.hours}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LuxLink } from "@/components/site/LuxButton";
import { Counter } from "@/components/site/Counter";
import { STATS } from "@/lib/site";
import { IMG } from "@/lib/catalog";

export function Hero() {
  const reduced = useReducedMotion();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    let ticking = false;

    const onScroll = () => {
      if (window.innerWidth < 768) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            const offset = Math.min(window.scrollY, 900) * 0.22;
            bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-forest-deep">
      <div ref={bgRef} className="absolute inset-0 h-full w-full md:-top-[8%] md:h-[116%] overflow-hidden will-change-transform">
        <img
          src={IMG.hero}
          alt="Golden-hour walkway lined with mature potted plants at the RR Heaven Gardenblr nursery in Bengaluru"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover object-center md:object-cover"
        />
      </div>
      <div className="scrim-full absolute inset-0" />
      <div className="scrim-bottom absolute inset-x-0 bottom-0 h-1/2" />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-4 pt-28 pb-12 sm:gap-14 sm:px-6 sm:pt-36 sm:pb-16 md:px-10 md:pb-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <motion.p
            className="eyebrow text-gold text-xs sm:text-sm font-mono"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Premium Plants • Elegant Landscapes • Timeless Gardens
          </motion.p>

          <h1 className="display-xl mt-6 sm:mt-8 text-on-dark text-3xl sm:text-5xl md:text-6xl leading-tight">
            {["Create Living Spaces", "That Breathe Luxury."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.15, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 1 ? (
                    <>
                      That Breathe <em className="text-gold not-italic">Luxury.</em>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 sm:mt-9 max-w-xl text-sm sm:text-base leading-relaxed text-stone/80 font-sans"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Premium indoor plants, outdoor plants, designer pots, landscaping and
            complete garden solutions crafted for homes, villas, offices, resorts
            and commercial spaces across Bengaluru.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <LuxLink to="/products" variant="ghost" className="w-full sm:w-auto text-center justify-center">
              Explore Collection
            </LuxLink>
            <LuxLink to="/book-consultation" variant="ghost" className="w-full sm:w-auto text-center justify-center">
              Book Garden Consultation
            </LuxLink>
          </motion.div>
        </div>

        <motion.aside
          className="glass-panel p-8 md:p-9"
          initial={reduced ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-gold">By the numbers</p>
          <dl className="mt-8 space-y-7">
            {STATS.map((s) => (
              <div key={s.label} className="border-b border-on-dark/12 pb-6 last:border-0 last:pb-0">
                <dd className="text-[2rem] leading-none text-on-dark">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 text-[0.72rem] tracking-[0.18em] text-stone/65 uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="block h-14 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
      </div>
    </section>
  );
}

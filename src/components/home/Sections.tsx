import { useRef, useState } from "react";
import { Reveal, MaskReveal } from "@/components/site/Reveal";
import { LuxLink, LuxAnchor } from "@/components/site/LuxButton";
import { Counter } from "@/components/site/Counter";
import { BRAND, PROCESS, STATS, WHY_US } from "@/lib/site";
import { IMG } from "@/lib/catalog";

export function AboutSplit() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal className="relative">
          <div className="media-zoom aspect-[4/5] overflow-hidden bg-forest-deep shadow-lift">
            <img
              src={IMG.about}
              alt="Interior of the RR Heaven Gardenblr nursery greenhouse in Bengaluru"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:absolute sm:-right-8 sm:bottom-10 sm:mt-0 sm:w-64">
            {[
              { t: "Premium Gardening", s: "Nursery-grown stock" },
              { t: "Expert Landscaping", s: "In-house design team" },
              { t: "Trusted Quality", s: "15 years in Bengaluru" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={0.15 + i * 0.1}>
                <div className="border border-foreground/8 bg-card p-5 shadow-soft">
                  <p className="font-display text-lg text-forest">{c.t}</p>
                  <p className="mt-1 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    {c.s}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold">Our Story</p>
          </Reveal>
          <h2 className="display-lg mt-6 text-forest">
            <MaskReveal>Fifteen years of</MaskReveal>
            <MaskReveal delay={0.08}>growing beautifully.</MaskReveal>
          </h2>
          <Reveal delay={0.15}>
            <div className="gold-rule mt-9" />
            <p className="body-lux mt-9">
              RR Heaven Gardenblr began as a nursery on Kempegowda Road in
              Rajarajeshwari Nagar. Fifteen years later, it is a garden studio —
              a place where architects specify planters, interior designers source
              statement foliage, and families come back season after season.
            </p>
            <p className="body-lux mt-6">
              We grow, select and acclimatise our own stock. We draw our own
              landscape plans. And we maintain what we build, because a garden is
              never finished on handover day — it only begins there.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl text-forest font-bold font-mono">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase font-mono">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <LuxLink to="/about" variant="solid">
                More about us
              </LuxLink>
              <LuxLink to="/projects" variant="outline">
                See our projects
              </LuxLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    if (!mobileRef.current) return;
    const scrollLeft = mobileRef.current.scrollLeft;
    const width = mobileRef.current.offsetWidth;
    const index = Math.round(scrollLeft / (width * 0.8));
    setMobileIndex(Math.min(WHY_US.length - 1, Math.max(0, index)));
  };

  return (
    <section className="relative bg-forest-deep py-16 text-on-dark md:py-32 border-y border-gold/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-gold/20 pb-4">
          <div>
            <p className="eyebrow text-gold font-mono">Why RR Heaven</p>
            <h2 className="display-lg mt-2 text-on-dark">
              Eight reasons the work holds up.
            </h2>
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-gold bg-black/60 px-4 py-2 border border-gold/30">
            {WHY_US.length} Core Standards
          </span>
        </div>

        {/* 1. MOBILE PHONE SLIDESHOW CAROUSEL (Seamless Touch Swipe & Zero Lag) */}
        <div className="block md:hidden">
          <div
            ref={mobileRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {WHY_US.map((w, i) => (
              <div
                key={w.title}
                className="snap-center shrink-0 w-[82vw] max-w-[22rem] flex flex-col justify-between p-6 border border-gold/40 bg-[#071a13] text-on-dark shadow-2xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-3xl font-bold text-gold">
                      {w.n}
                    </span>
                    <span className="text-[0.6rem] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/60 border border-gold/30 text-gold">
                      {w.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-on-dark leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-stone/85 font-sans">
                    {w.text}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                      `Hello RR Heaven Gardenblr, I would like to enquire about ${w.title} (${w.tag}).`,
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 text-[0.68rem] font-mono uppercase tracking-wider"
                  >
                    <span>Enquire</span>
                  </a>
                  <span className="text-[0.65rem] font-mono text-gold">
                    0{i + 1} / 08
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Step Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-2">
            {WHY_US.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 transition-all ${
                  mobileIndex === idx ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 2. DESKTOP FULL-SCREEN STACKING CARD DECK ON SCROLL */}
        <div className="hidden md:block relative space-y-12 pb-24">
          {WHY_US.map((w, i) => (
            <div
              key={w.title}
              style={{
                top: `calc(120px + ${i * 16}px)`,
                zIndex: i + 1,
              }}
              className="sticky mx-auto max-w-5xl border border-gold/40 bg-[#071a13] p-10 md:p-14 text-on-dark shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold hover:shadow-gold"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-gold">
                    {w.n}
                  </span>
                  <div>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase font-mono px-3 py-1 bg-black/60 border border-gold/30 text-gold">
                      {w.tag}
                    </span>
                    <p className="text-[0.68rem] font-mono text-stone/50 mt-1">Standard 0{i + 1} of 08</p>
                  </div>
                </div>
                <span className="text-[0.68rem] font-mono text-stone/60">
                  RR HEAVEN GARDENBLR ARCHITECTURAL SLA
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-on-dark leading-tight">
                {w.title}
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-stone/85 font-sans max-w-3xl">
                {w.text}
              </p>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hello RR Heaven Gardenblr, I would like to enquire about ${w.title} (${w.tag}).`,
                  )}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] text-black font-semibold px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-[#20bd5a]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z"/>
                  </svg>
                  <span>Enquire Feature on WhatsApp</span>
                </a>
                <span className="text-[0.68rem] font-mono text-gold/80">
                  Card {i + 1} of 8 Stacked
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-forest py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-4 md:px-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-l border-on-dark/15 pl-6">
              <p className="text-[2.6rem] leading-none text-gold md:text-[3.2rem] font-mono font-bold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-[0.68rem] tracking-[0.2em] text-stone/65 uppercase font-mono">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  const [mobileProcessIndex, setMobileProcessIndex] = useState(0);
  const mobileProcessRef = useRef<HTMLDivElement>(null);

  const handleProcessScroll = () => {
    if (!mobileProcessRef.current) return;
    const scrollLeft = mobileProcessRef.current.scrollLeft;
    const width = mobileProcessRef.current.offsetWidth;
    const index = Math.round(scrollLeft / (width * 0.8));
    setMobileProcessIndex(Math.min(PROCESS.length - 1, Math.max(0, index)));
  };

  return (
    <section className="relative bg-background py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-4">
          <div>
            <p className="eyebrow text-gold font-mono">The Execution Process</p>
            <h2 className="display-lg mt-2 text-forest">Five steps, no surprises.</h2>
          </div>
          <span className="font-mono text-[0.7rem] uppercase tracking-widest text-forest bg-forest/10 px-4 py-2 border border-forest/20">
            5 Execution Phases
          </span>
        </div>

        {/* 1. MOBILE PHONE PROCESS CAROUSEL (Seamless Touch Swipe & Zero Lag) */}
        <div className="block md:hidden">
          <div
            ref={mobileProcessRef}
            onScroll={handleProcessScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {PROCESS.map((p, i) => (
              <div
                key={p.n}
                className="snap-center shrink-0 w-[82vw] max-w-[22rem] flex flex-col justify-between p-6 border border-gold/40 bg-forest-deep text-on-dark shadow-2xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-3xl font-bold text-gold">
                      {p.n}
                    </span>
                    <span className="text-[0.6rem] tracking-widest uppercase font-mono px-2 py-0.5 bg-black/60 border border-gold/30 text-gold">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-on-dark leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[0.65rem] font-mono text-gold mt-1">{p.subtitle}</p>
                  <p className="mt-3 text-xs leading-relaxed text-stone/85 font-sans">
                    {p.text}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                      `Hello RR Heaven Gardenblr, I would like to enquiry about Process Phase ${p.n}: ${p.title}.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-black font-semibold px-4 py-2 text-[0.68rem] font-mono uppercase tracking-wider"
                  >
                    <span>Book Phase</span>
                  </a>
                  <span className="text-[0.65rem] font-mono text-gold">
                    Step 0{i + 1} / 05
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Process Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-2">
            {PROCESS.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 transition-all ${
                  mobileProcessIndex === idx ? "w-6 bg-forest" : "w-1.5 bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 2. DESKTOP FULL-SCREEN STACKING PROCESS CARDS */}
        <div className="hidden md:block relative space-y-12 pb-24">
          {PROCESS.map((p, i) => (
            <div
              key={p.n}
              style={{
                top: `calc(130px + ${i * 18}px)`,
                zIndex: i + 1,
              }}
              className="sticky mx-auto max-w-5xl border border-gold/40 bg-forest-deep p-10 md:p-14 text-on-dark shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-gold"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-gold">
                    {p.n}
                  </span>
                  <div>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase font-mono px-3 py-1 bg-black/60 border border-gold/30 text-gold">
                      {p.tag}
                    </span>
                    <p className="text-[0.68rem] font-mono text-gold mt-1">{p.subtitle}</p>
                  </div>
                </div>
                <span className="text-[0.68rem] font-mono text-stone/60">
                  Execution Phase {i + 1} of 5
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-on-dark leading-tight">
                {p.title}
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-stone/85 font-sans max-w-3xl">
                {p.text}
              </p>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                    `Hello RR Heaven Gardenblr, I would like to book an inquiry for Process Phase ${p.n}: ${p.title}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] text-black font-semibold px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-[#20bd5a]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z"/>
                  </svg>
                  <span>Book Phase Consultation on WhatsApp</span>
                </a>
                <span className="text-[0.68rem] font-mono text-gold/80">
                  Phase {i + 1} of 5 Pinned
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-forest-deep">
      <img
        src={IMG.cta}
        alt="Illuminated resort garden at twilight"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="scrim-full absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-32 text-center md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow text-gold font-mono">Begin</p>
          <h2 className="display-xl mx-auto mt-8 max-w-4xl text-on-dark">
            Let's Build Your Dream Garden.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone/75 font-sans">
            A site visit, an honest estimate, and a plan you can live with for
            years. Open 7 working days, 7:30 AM – 10:00 PM.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <LuxAnchor href={`tel:+91${BRAND.phones[0]}`} variant="ghost">
              Call Now
            </LuxAnchor>
            <LuxLink to="/book-consultation" variant="ghost">
              Book Consultation
            </LuxLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <span className="flex gap-1" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 text-on-dark md:py-36 border-t border-gold/15">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow text-gold font-mono font-bold tracking-widest uppercase">Google Reviews</p>
          <h2 className="display-lg mt-6 text-on-dark font-display font-semibold text-3xl md:text-5xl leading-tight">
            Trusted by homeowners, architects and hoteliers.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="w-full"
            >
              <figure className="glass-panel flex h-full flex-col justify-between border border-gold/25 bg-black/30 p-8 md:p-10 transition-all duration-300 hover:border-gold/60">
                <div>
                  <Stars />
                  <blockquote className="mt-6 font-display text-lg md:text-xl leading-relaxed text-on-dark">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-9 flex items-center gap-4 border-t border-on-dark/15 pt-6">
                  <span className="numeral flex h-11 w-11 items-center justify-center border border-gold/60 text-xs text-gold font-mono font-bold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-on-dark">{t.name}</span>
                    <span className="block text-xs text-stone/70 font-mono mt-0.5">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

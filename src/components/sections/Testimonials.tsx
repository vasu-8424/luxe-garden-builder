import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <span className="flex gap-1" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-olive py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow text-gold">Google Reviews</p>
          <h2 className="display-lg mt-6 text-on-dark">
            Trusted by homeowners, architects and hoteliers.
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="w-[85vw] shrink-0 snap-start sm:w-[24rem] lg:w-auto"
            >
              <figure className="glass-panel flex h-full flex-col justify-between p-8">
                <div>
                  <Stars />
                  <blockquote className="mt-6 font-display text-[1.15rem] leading-relaxed text-on-dark">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-9 flex items-center gap-4 border-t border-on-dark/12 pt-6">
                  <span className="numeral flex h-11 w-11 items-center justify-center border border-gold/50 text-xs text-gold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm text-on-dark">{t.name}</span>
                    <span className="block text-xs text-stone/60">{t.role}</span>
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

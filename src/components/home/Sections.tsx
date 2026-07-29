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
              RR Heaven Gardenblr began as a small nursery on Kempegowda Road in
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
                  <p className="text-2xl text-forest">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
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
  return (
    <section className="bg-cream-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow text-gold">Why RR Heaven</p>
          <h2 className="display-lg mt-6 text-forest">
            Eight reasons the work holds up.
          </h2>
        </Reveal>

        <div className="grid gap-x-16 gap-y-0 md:grid-cols-2">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08}>
              <div className="group grid grid-cols-[auto_1fr] gap-8 border-t border-foreground/10 py-9">
                <span className="numeral pt-1 text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-forest transition-colors duration-500 group-hover:text-olive">
                    {w.title}
                  </h3>
                  <p className="body-lux mt-3 max-w-md text-[0.98rem]">{w.text}</p>
                </div>
              </div>
            </Reveal>
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
              <p className="text-[2.6rem] leading-none text-gold md:text-[3.2rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-[0.68rem] tracking-[0.2em] text-stone/65 uppercase">
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
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow text-gold">The Process</p>
          <h2 className="display-lg mt-6 text-forest">Five steps, no surprises.</h2>
        </Reveal>

        <div>
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="group grid items-baseline gap-6 border-t border-foreground/10 py-10 md:grid-cols-[8rem_1fr_1.2fr] md:gap-12 md:py-14">
                <span className="numeral text-4xl text-foreground/15 transition-colors duration-700 group-hover:text-gold md:text-6xl">
                  {p.n}
                </span>
                <h3 className="display-md text-forest">{p.title}</h3>
                <p className="body-lux max-w-lg">{p.text}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-foreground/10" />
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
          <p className="eyebrow text-gold">Begin</p>
          <h2 className="display-xl mx-auto mt-8 max-w-4xl text-on-dark">
            Let's Build Your Dream Garden.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone/75">
            A site visit, an honest estimate, and a plan you can live with for
            years. Open every day, {BRAND.hours.split("·")[1]?.trim()}.
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

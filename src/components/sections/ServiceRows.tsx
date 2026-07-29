import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { SERVICES } from "@/lib/catalog";

export function ServiceRows({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="bg-cream-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-20 max-w-3xl md:mb-28">
          <p className="eyebrow text-gold">Services</p>
          <h2 className="display-lg mt-6 text-forest">
            From a single planter to an entire landscape.
          </h2>
        </Reveal>
      </div>

      <div className="space-y-24 md:space-y-36">
        {items.map((s, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={s.title}
              className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={flipped ? "lg:order-2" : ""}>
                <div className="media-zoom aspect-[4/3] w-full overflow-hidden bg-forest-deep shadow-lift">
                  <img
                    src={s.image}
                    alt={`${s.title} by RR Heaven Gardenblr in Bengaluru`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={flipped ? "lg:order-1" : ""}>
                <p className="numeral text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-md mt-5 text-forest">{s.title}</h3>
                <div className="gold-rule mt-7" />
                <p className="body-lux mt-7 max-w-lg">{s.copy}</p>
                <ul className="mt-9 space-y-3">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-4 border-b border-foreground/8 pb-3 text-sm text-foreground/75"
                    >
                      <span className="h-1 w-1 shrink-0 bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <LuxLink to="/book-consultation" variant="outline">
                    Request this service
                  </LuxLink>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {limit && (
        <div className="mx-auto mt-20 flex max-w-[1400px] justify-center px-5 md:px-10">
          <LuxLink to="/services" variant="solid">
            All eight services
          </LuxLink>
        </div>
      )}
    </section>
  );
}

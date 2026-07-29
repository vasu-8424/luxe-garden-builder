import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { SERVICES, type Service } from "@/lib/catalog";
import { ImageEnquiryModal, type ImageEnquiryItem } from "@/components/sections/ImageEnquiryModal";

export function ServiceRows({ limit }: { limit?: number }) {
  const [selectedService, setSelectedService] = useState<ImageEnquiryItem | null>(null);
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  const handleOpenInquiry = (s: Service) => {
    setSelectedService({
      title: s.title,
      category: "Architectural Service",
      image: s.image,
      description: s.copy,
      points: s.points,
      specs: s.specs,
    });
  };

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
                <button
                  type="button"
                  onClick={() => handleOpenInquiry(s)}
                  className="media-zoom group relative aspect-[4/3] w-full overflow-hidden bg-forest-deep shadow-lift text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} by RR Heaven Gardenblr in Bengaluru`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-forest-deep/90 border border-gold text-gold font-mono text-xs uppercase tracking-widest px-4 py-2 shadow-2xl">
                      Click to View & Enquire on WhatsApp
                    </span>
                  </div>
                </button>
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
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenInquiry(s)}
                    className="bg-forest text-on-dark hover:bg-forest-deep px-6 py-3 text-xs tracking-[0.18em] uppercase font-mono transition-colors font-semibold shadow-md flex items-center gap-2"
                  >
                    <span>Enquire Service</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.988L2 22l5.132-1.346a9.92 9.92 0 0 0 4.88 1.28h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.174-2.925-7.06A9.917 9.917 0 0 0 12.012 2zm0 18.272h-.003a8.257 8.257 0 0 1-4.212-1.157l-.302-.18-3.125.819.834-3.045-.198-.315a8.27 8.27 0 0 1-1.267-4.408c0-4.561 3.712-8.273 8.275-8.273 2.21 0 4.287.862 5.85 2.426a8.23 8.23 0 0 1 2.422 5.854c0 4.562-3.712 8.273-8.274 8.273z"/>
                    </svg>
                  </button>
                  <LuxLink to="/book-consultation" variant="outline">
                    Book Site Inspection
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

      <ImageEnquiryModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}

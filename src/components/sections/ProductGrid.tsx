import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { PRODUCTS, type Product } from "@/lib/catalog";
import { ImageEnquiryModal, type ImageEnquiryItem } from "@/components/sections/ImageEnquiryModal";

function Card({ p, index, onSelect }: { p: Product; index: number; onSelect: (p: Product) => void }) {
  const desktopSpanClass =
    p.span === "tall"
      ? "md:row-span-2 md:min-h-[42rem]"
      : p.span === "wide"
        ? "md:col-span-2 md:aspect-[16/9]"
        : "";

  return (
    <Reveal delay={(index % 3) * 0.08} className={`w-full ${desktopSpanClass}`}>
      {/* Mobile Card Version (visible < md) */}
      <div
        onClick={() => onSelect(p)}
        className="block md:hidden border border-foreground/12 bg-white p-4 shadow-sm hover:border-gold cursor-pointer transition-all duration-300 rounded-none"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep mb-3">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className={`h-full w-full object-cover ${
              p.fit === "contain" ? "object-contain bg-white p-3" : "object-cover"
            }`}
          />
          <span className="absolute top-2.5 left-2.5 bg-black/75 px-2.5 py-1 text-[0.6rem] uppercase tracking-widest text-gold font-mono">
            {p.category}
          </span>
        </div>

        <h3 className="font-display text-xl text-forest font-semibold">{p.title}</h3>
        <p className="mt-1.5 text-xs text-foreground/75 leading-relaxed font-sans line-clamp-2">{p.copy}</p>

        <div className="mt-4 border-t border-foreground/10 pt-3 flex items-center justify-between">
          <span className="text-[0.65rem] font-mono text-gold uppercase tracking-wider font-bold">
            View Details & Specs
          </span>
          <span className="bg-forest text-on-dark px-3 py-1.5 text-[0.65rem] font-mono uppercase tracking-wider font-bold">
            Enquire
          </span>
        </div>
      </div>

      {/* Desktop Card Version (visible >= md) */}
      <button
        type="button"
        onClick={() => onSelect(p)}
        className="hidden md:block media-zoom group relative h-full w-full overflow-hidden bg-forest-deep text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <img
          src={p.image}
          alt={`${p.title} available at RR Heaven Gardenblr, Bengaluru`}
          loading="lazy"
          className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
            p.fit === "contain" ? "object-contain bg-white p-3 md:p-6" : "object-cover"
          }`}
        />
        <div className="scrim-bottom absolute inset-0 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold/90 font-mono">
            {p.category}
          </span>
          <h3 className="font-display text-2xl text-on-dark md:text-[1.7rem] mt-1">{p.title}</h3>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-3 max-w-sm text-sm leading-relaxed text-stone/75">{p.copy}</p>
            </div>
          </div>
          <span className="mt-5 inline-flex items-center gap-3 text-[0.68rem] tracking-[0.2em] text-gold uppercase font-mono font-semibold border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">
            Enquire & View Details
            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-700 group-hover:translate-x-2"
            >
              <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
        </div>
      </button>
    </Reveal>
  );
}

export function ProductGrid({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const [selectedProduct, setSelectedProduct] = useState<ImageEnquiryItem | null>(null);
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  const handleSelect = (p: Product) => {
    setSelectedProduct({
      title: p.title,
      category: p.category,
      image: p.image,
      description: p.copy,
      specs: p.specs,
      points: p.careGuide,
      fit: p.fit,
    });
  };

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {showHeading && (
          <Reveal className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow text-gold">The Collection</p>
              <h2 className="display-lg mt-6 max-w-2xl text-forest">
                Plants and planters chosen the way an architect chooses stone.
              </h2>
            </div>
            <p className="body-lux max-w-sm md:text-right">
              Click any image to view architectural specs and send an instant inquiry directly on WhatsApp.
            </p>
          </Reveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5">
          {items.map((p, i) => (
            <Card key={p.title} p={p} index={i} onSelect={handleSelect} />
          ))}
        </div>

        {limit && (
          <Reveal className="mt-14 flex justify-center">
            <LuxLink to="/products" variant="outline">
              View full collection
            </LuxLink>
          </Reveal>
        )}
      </div>

      <ImageEnquiryModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

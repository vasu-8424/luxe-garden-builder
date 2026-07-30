import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS, type Product } from "@/lib/catalog";
import { ImageEnquiryModal, type ImageEnquiryItem } from "@/components/sections/ImageEnquiryModal";

export function PlantFinder() {
  const [filterLight, setFilterLight] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<ImageEnquiryItem | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterLight === "All") return true;
    return p.specs.some(
      (s) => s.label === "Light Requirement" && s.value.toLowerCase().includes(filterLight.toLowerCase())
    );
  });

  const handleOpenInquiry = (p: Product) => {
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
    <section className="bg-background py-24 md:py-36 border-t border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold font-mono">Botanical Finder</p>
            <h2 className="display-lg mt-6 text-forest">
              Find Plants Matched to Your Lighting & Architecture
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "All", label: "All Species" },
              { id: "Filtered", label: "Filtered / Low Light" },
              { id: "Medium", label: "Medium Light" },
              { id: "Sun", label: "Full Sun Outdoor" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterLight(f.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all ${
                  filterLight === f.id
                    ? "border-forest bg-forest text-on-dark font-bold"
                    : "border-foreground/20 bg-transparent text-foreground/70 hover:border-forest"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.05}>
              <div
                onClick={() => handleOpenInquiry(p)}
                className="group relative flex flex-col justify-between border border-foreground/10 bg-white/40 p-5 hover:border-gold transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-deep mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                        p.fit === "contain" ? "object-contain bg-white p-3" : "object-cover"
                      }`}
                    />
                    <span className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-gold font-mono">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-forest group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/75 font-sans line-clamp-2">
                    {p.copy}
                  </p>
                </div>

                <div className="mt-5 border-t border-foreground/10 pt-4 flex items-center justify-between">
                  <span className="text-[0.68rem] font-mono uppercase tracking-wider text-forest font-bold">
                    View Specs & Care
                  </span>
                  <span className="bg-gold text-black text-[0.65rem] font-mono uppercase px-3 py-1 font-bold">
                    Enquire
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageEnquiryModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

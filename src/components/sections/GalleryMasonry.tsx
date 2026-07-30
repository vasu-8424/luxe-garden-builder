import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/lib/catalog";
import { ImageEnquiryModal, type ImageEnquiryItem } from "@/components/sections/ImageEnquiryModal";

const ratioClass: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

export function GalleryMasonry({ filters = true }: { filters?: boolean }) {
  const [active, setActive] = useState("All");
  const [selectedItem, setSelectedItem] = useState<ImageEnquiryItem | null>(null);

  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  const handleOpenInquiry = (g: GalleryItem) => {
    setSelectedItem({
      title: g.title,
      category: g.category,
      image: g.image,
      description: g.description || `Architectural garden installation crafted by RR Heaven Gardenblr for ${g.category} spaces in Bengaluru.`,
      fit: g.fit,
      specs: g.specs || [
        { label: "Category", value: g.category },
        { label: "Execution", value: "RR Heaven Gardenblr Master Team" },
        { label: "Location", value: "Bengaluru, Karnataka" },
      ],
    });
  };

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-gold">Featured Gardens</p>
            <h2 className="display-lg mt-6 max-w-2xl text-forest">
              A portfolio measured in mornings, not photographs.
            </h2>
          </div>
          <p className="body-lux max-w-sm text-sm md:text-right">
            Click any gallery image to open full details and enquire directly on WhatsApp.
          </p>
        </Reveal>

        {filters && (
          <Reveal className="mb-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-foreground/10 pb-4">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`text-[0.7rem] tracking-[0.2em] uppercase font-mono transition-colors duration-300 py-1 ${
                  active === c
                    ? "text-gold border-b-2 border-gold font-bold"
                    : "text-foreground/50 hover:text-forest"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>
        )}

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={`${g.title}-${i}`} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => handleOpenInquiry(g)}
                className="media-zoom group relative block w-full overflow-hidden bg-forest-deep text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <div className={ratioClass[g.ratio]}>
                  <img
                    src={g.image}
                    alt={`${g.title} — ${g.category} garden project by RR Heaven Gardenblr`}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                      g.fit === "contain" ? "object-contain bg-white p-3" : "object-cover"
                    }`}
                  />
                </div>
                <div className="scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 flex justify-between items-end">
                  <div>
                    <p className="eyebrow text-gold font-mono">{g.category}</p>
                    <p className="mt-2 font-display text-xl text-on-dark">{g.title}</p>
                  </div>
                  <span className="bg-gold/90 text-black text-[0.65rem] uppercase tracking-widest px-3 py-1.5 font-mono font-bold">
                    Enquire
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageEnquiryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}

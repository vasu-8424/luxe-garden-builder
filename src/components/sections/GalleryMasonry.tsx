import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/lib/catalog";

const ratioClass: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

export function GalleryMasonry({ filters = true }: { filters?: boolean }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
        </Reveal>

        {filters && (
          <Reveal className="mb-12 flex flex-wrap gap-x-8 gap-y-3">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  active === c
                    ? "text-gold"
                    : "text-foreground/45 hover:text-forest"
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
                onClick={() => setLightbox(g)}
                className="media-zoom group relative block w-full overflow-hidden bg-forest-deep text-left"
              >
                <div className={ratioClass[g.ratio]}>
                  <img
                    src={g.image}
                    alt={`${g.title} — ${g.category} garden project by RR Heaven Gardenblr`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="scrim-bottom absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow text-gold">{g.category}</p>
                  <p className="mt-3 font-display text-xl text-on-dark">{g.title}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-deep/95 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center border border-on-dark/25 text-on-dark"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <motion.figure
              className="max-h-[86vh] max-w-5xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="max-h-[76vh] w-full object-contain"
              />
              <figcaption className="mt-5 flex items-center justify-between text-on-dark">
                <span className="font-display text-lg">{lightbox.title}</span>
                <span className="eyebrow text-gold">{lightbox.category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

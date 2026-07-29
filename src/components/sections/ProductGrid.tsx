import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { PRODUCTS, type Product } from "@/lib/catalog";

function Card({ p, index }: { p: Product; index: number }) {
  const spanClass =
    p.span === "tall"
      ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[42rem]"
      : p.span === "wide"
        ? "md:col-span-2 aspect-[4/3] md:aspect-[16/9]"
        : "aspect-[4/5]";

  return (
    <Reveal delay={(index % 3) * 0.08} className={spanClass}>
      <article className="media-zoom group relative h-full w-full overflow-hidden bg-forest-deep">
        <img
          src={p.image}
          alt={`${p.title} available at RR Heaven Gardenblr, Bengaluru`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="scrim-bottom absolute inset-0 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
          <h3 className="font-display text-2xl text-on-dark md:text-[1.7rem]">{p.title}</h3>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-3 max-w-sm text-sm leading-relaxed text-stone/75">{p.copy}</p>
            </div>
          </div>
          <span className="mt-5 flex items-center gap-3 text-[0.68rem] tracking-[0.2em] text-gold uppercase">
            Enquire
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
      </article>
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
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

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
              Everything we stock is acclimatised in our Bengaluru nursery before it
              reaches your home.
            </p>
          </Reveal>
        )}

        <div className="grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3 md:gap-5">
          {items.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
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
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-forest-deep pt-32 pb-16 md:min-h-[72vh] md:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="scrim-full absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[0.7rem] tracking-[0.2em] text-stone/60 uppercase">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-stone/30">/</span>}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="display-xl mt-6 max-w-4xl text-on-dark">{title}</h1>
          {intro && (
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-stone/75">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

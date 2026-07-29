import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { CtaBanner } from "@/components/home/Sections";

export function LegalPage({
  eyebrow,
  title,
  crumbLabel,
  sections,
}: {
  eyebrow: string;
  title: string;
  crumbLabel: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <>
      <section className="bg-cream-deep pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
              <li>
                <Link to="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li className="text-foreground/25">/</li>
              <li className="text-gold">{crumbLabel}</li>
            </ol>
          </nav>
          <Reveal>
            <p className="eyebrow text-gold">{eyebrow}</p>
            <h1 className="display-lg mt-6 max-w-3xl text-forest">{title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <div className="border-t border-foreground/10 py-9">
                <h2 className="font-display text-2xl text-forest">{s.h}</h2>
                <p className="body-lux mt-4">{s.p}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CtaBanner, StatsBand } from "@/components/home/Sections";
import { IMG, PROJECTS } from "@/lib/catalog";

const title = "Landscape Projects in Bengaluru | RR Heaven Gardenblr";
const description =
  "Villas, terraces, tech parks and resorts — selected landscape and garden projects delivered by RR Heaven Gardenblr across Bengaluru.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work."
        intro="A hundred landscapes delivered. These six show the range."
        image={IMG.sTerrace}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-x-5 gap-y-16 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article className={i % 2 === 1 ? "md:mt-24" : ""}>
                  <div className="media-zoom aspect-[4/3] overflow-hidden bg-forest-deep">
                    <img
                      src={p.image}
                      alt={`${p.title} landscape project in ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-8 border-t border-foreground/10 pt-6">
                    <div>
                      <h2 className="display-md text-forest">{p.title}</h2>
                      <p className="mt-3 text-sm text-muted-foreground">{p.location}</p>
                      <p className="mt-1 text-sm text-foreground/70">{p.scope}</p>
                    </div>
                    <span className="numeral text-xs text-gold">{p.year}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />
      <StatsBand />
      <CtaBanner />
    </>
  );
}

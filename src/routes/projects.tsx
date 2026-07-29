import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CtaBanner, StatsBand } from "@/components/home/Sections";
import { IMG, PROJECTS, type Project } from "@/lib/catalog";
import { ImageEnquiryModal, type ImageEnquiryItem } from "@/components/sections/ImageEnquiryModal";

const title = "Landscape Projects & Architectural Masterplans | RR Heaven Gardenblr";
const description =
  "Villas, penthouses, commercial tech parks and resort grounds delivered by RR Heaven Gardenblr across Bengaluru and Karnataka.";

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
  const [selectedProject, setSelectedProject] = useState<ImageEnquiryItem | null>(null);

  const handleOpenProjectInquiry = (p: Project) => {
    setSelectedProject({
      title: p.title,
      category: p.location,
      image: p.image,
      description: p.description,
      specs: p.specs,
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Projects Portfolio"
        title="Architectural Landscapes."
        intro="Over 100 masterplans executed for private villas, corporate parks, rooftop lounges, and boutique resorts."
        image={IMG.sTerrace}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article
                  onClick={() => handleOpenProjectInquiry(p)}
                  className={`group cursor-pointer ${i % 2 === 1 ? "md:mt-20" : ""}`}
                >
                  <div className="media-zoom relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-lift">
                    <img
                      src={p.image}
                      alt={`${p.title} landscape project in ${p.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-gold text-black text-xs font-mono uppercase tracking-widest px-4 py-2 font-bold shadow-xl">
                        Enquire Similar Project
                      </span>
                    </div>
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-8 border-t border-foreground/10 pt-6">
                    <div>
                      <h2 className="display-md text-forest group-hover:text-gold transition-colors">{p.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground font-mono">{p.location}</p>
                      <p className="mt-1 text-sm text-foreground/75">{p.scope}</p>
                    </div>
                    <span className="numeral text-xs text-gold font-bold">{p.year}</span>
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

      <ImageEnquiryModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

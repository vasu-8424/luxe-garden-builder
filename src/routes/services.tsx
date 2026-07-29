import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { ProcessTimeline, CtaBanner } from "@/components/home/Sections";
import { IMG } from "@/lib/catalog";

const title = "Landscaping & Garden Services in Bengaluru | RR Heaven Gardenblr";
const description =
  "Indoor and outdoor garden setup, garden design, landscaping, maintenance, re-potting and organic solutions across Bengaluru.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Designed, built and kept alive."
        intro="Eight disciplines, one team — so nothing is lost between the drawing and the ground."
        image={IMG.sLandscape}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <ServiceRows />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}

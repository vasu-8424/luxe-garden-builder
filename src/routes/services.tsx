import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { BudgetEstimator } from "@/components/sections/BudgetEstimator";
import { ProcessTimeline, CtaBanner } from "@/components/home/Sections";
import { IMG } from "@/lib/catalog";

const title = "Landscaping & Architectural Garden Services | RR Heaven Gardenblr";
const description =
  "Indoor setup, living walls, villa landscaping, rooftop gardens, maintenance SLAs and organic plant protection across Bengaluru.";

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
        eyebrow="Services & Execution SLA"
        title="Designed, Built and Kept Alive."
        intro="Eight specialized landscape disciplines delivered by our in-house team of horticulturists and site engineers."
        image={IMG.sLandscape}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <ServiceRows />
      <BudgetEstimator />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}

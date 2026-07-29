import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { ProcessTimeline } from "@/components/home/Sections";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { IMG } from "@/lib/catalog";

const title = "Book a Garden Consultation in Bengaluru | RR Heaven Gardenblr";
const description =
  "Book a complimentary garden or landscaping consultation across Bengaluru. Site visit, planting plan and transparent estimate.";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book-consultation" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Start with a site visit."
        intro="Complimentary across Bengaluru. We measure, photograph, listen — and come back with a plan."
        image={IMG.sIndoor}
        crumbs={[{ label: "Home", to: "/" }, { label: "Book Consultation" }]}
      />
      <ConsultationForm />
      <ProcessTimeline />
      <ContactBlock />
    </>
  );
}

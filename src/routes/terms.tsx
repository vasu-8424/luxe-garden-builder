import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Terms & Conditions | RR Heaven Gardenblr";
const description =
  "Terms governing purchases, garden design, landscaping and maintenance services provided by RR Heaven Gardenblr, Bengaluru.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="The basis on which we work."
      crumbLabel="Terms & Conditions"
      sections={[
        {
          h: "Quotations and estimates",
          p: "All estimates are valid for thirty days from the date of issue and are based on the site conditions observed during consultation. Material substitutions or scope changes may revise the figure, always with your written agreement.",
        },
        {
          h: "Plants and living material",
          p: "Plants are living products. We supply healthy, acclimatised stock and advise on care, but growth, flowering and survival depend on placement, watering and site conditions after handover.",
        },
        {
          h: "Delivery and installation",
          p: "Delivery timelines are indicative and may be affected by weather, nursery availability or access at your site. Installation dates are confirmed once advance payment is received.",
        },
        {
          h: "Payments",
          p: "Landscaping projects are typically staged: an advance on confirmation, progress payments against milestones, and a balance on completion. Product purchases are payable at the time of delivery.",
        },
        {
          h: "Maintenance contracts",
          p: "Maintenance programmes cover the scope listed in your contract. Replacement of plants lost to neglect, vandalism, flooding or extreme weather is chargeable unless otherwise agreed.",
        },
        {
          h: "Governing law",
          p: "These terms are governed by the laws of India, with jurisdiction in the courts of Bengaluru, Karnataka.",
        },
      ]}
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Faq } from "@/components/sections/Faq";
import { IMG } from "@/lib/catalog";

const title = "Contact RR Heaven Gardenblr — Garden Nursery, Rajarajeshwari Nagar";
const description =
  "Visit our nursery at BEML Layout, Rajarajeshwari Nagar, Bengaluru 560098. Open 7 working days, 7:30 AM – 10:00 PM. Call +91 9448276985 / +91 8088776985.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Find us on Kempegowda Road."
        intro="Open 7 working days a week, 7:30 AM – 10:00 PM."
        image={IMG.g6}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <ContactBlock />
      <ConsultationForm />
      <Faq />
    </>
  );
}

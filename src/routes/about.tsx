import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSplit, WhyUs, StatsBand, ProcessTimeline, CtaBanner } from "@/components/home/Sections";
import { Testimonials } from "@/components/sections/Testimonials";
import { IMG } from "@/lib/catalog";

const title = "About RR Heaven Gardenblr — Garden Nursery in Bengaluru";
const description =
  "Fifteen years of premium plant cultivation and landscape craftsmanship in Rajarajeshwari Nagar, Bengaluru. Meet the studio behind the gardens.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Studio"
        title="A nursery that grew into a garden studio."
        intro="From a single greenhouse on Kempegowda Road to landscapes across Bengaluru — built on cultivation, craft and long relationships."
        image={IMG.about}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <AboutSplit />
      <StatsBand />
      <WhyUs />
      <ProcessTimeline />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

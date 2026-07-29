import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  AboutSplit,
  WhyUs,
  StatsBand,
  ProcessTimeline,
  CtaBanner,
} from "@/components/home/Sections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ServiceRows } from "@/components/sections/ServiceRows";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { BudgetEstimator } from "@/components/sections/BudgetEstimator";
import { PlantFinder } from "@/components/sections/PlantFinder";

const title = "RR Heaven Gardenblr — ₹100 Cr Luxury Architectural Horticulture & Nursery Platform";
const description =
  "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSplit />
      <BudgetEstimator />
      <ProductGrid limit={6} />
      <PlantFinder />
      <ServiceRows limit={4} />
      <WhyUs />
      <GalleryMasonry filters={false} />
      <BeforeAfter />
      <Testimonials />
      <StatsBand />
      <ProcessTimeline />
      <Faq />
      <CtaBanner />
      <ContactBlock />
    </>
  );
}

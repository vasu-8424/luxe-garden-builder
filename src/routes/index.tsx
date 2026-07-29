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

const title = "RR Heaven Gardenblr — Luxury Garden Nursery & Landscaping, Bengaluru";
const description =
  "Premium indoor & outdoor plants, ceramic pots and complete landscaping in Rajarajeshwari Nagar, Bengaluru. 15+ years, 100+ landscape projects.";

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
      <ProductGrid limit={6} />
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

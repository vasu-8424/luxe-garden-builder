import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { CtaBanner } from "@/components/home/Sections";
import { IMG } from "@/lib/catalog";

const title = "Garden Gallery — Residential & Commercial Landscapes | RR Heaven Gardenblr";
const description =
  "Browse residential, commercial, terrace, indoor, outdoor and luxury villa gardens designed and built by RR Heaven Gardenblr in Bengaluru.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Gardens, photographed at their best hour."
        image={IMG.g4}
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <GalleryMasonry />
      <CtaBanner />
    </>
  );
}

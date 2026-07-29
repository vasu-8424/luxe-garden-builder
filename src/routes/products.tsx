import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { PlantFinder } from "@/components/sections/PlantFinder";
import { CtaBanner } from "@/components/home/Sections";
import { Faq } from "@/components/sections/Faq";
import { IMG } from "@/lib/catalog";

const title = "Premium Plants & Designer Pots Collection | RR Heaven Gardenblr";
const description =
  "Acclimatised indoor & outdoor plants, ceramic planters, granite fibre pots, organic manures and cocopeat — direct from our Bengaluru nursery.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products Collection"
        title="Botanical & Architectural Inventory."
        intro="Ten luxury categories, acclimatised in our Rajarajeshwari Nagar nursery before delivery to your address. Click any image to enquire on WhatsApp."
        image={IMG.pIndoor}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />
      <ProductGrid showHeading={false} />
      <PlantFinder />
      <Faq />
      <CtaBanner />
    </>
  );
}

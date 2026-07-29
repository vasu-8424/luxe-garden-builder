import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CtaBanner } from "@/components/home/Sections";
import { Faq } from "@/components/sections/Faq";
import { IMG } from "@/lib/catalog";

const title = "Premium Plants & Designer Pots in Bengaluru | RR Heaven Gardenblr";
const description =
  "Indoor plants, outdoor plants, ceramic, plastic and granite fibre pots, plant stands, organic manure and cocopeat — curated in Bengaluru.";

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
        eyebrow="Products"
        title="The collection."
        intro="Ten categories, each grown, glazed or graded to a standard we would put in our own homes."
        image={IMG.pIndoor}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />
      <ProductGrid showHeading={false} />
      <Faq />
      <CtaBanner />
    </>
  );
}

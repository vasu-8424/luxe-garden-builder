import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollProgress, FloatingActions, LuxCursor } from "@/components/site/Chrome";
import { BRAND } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-gold">Error 404</p>
        <h1 className="display-lg mt-6 text-forest">This path has not been planted yet.</h1>
        <p className="body-lux mt-5">
          The page you are looking for has been moved, renamed, or never existed.
          Let us guide you back to the garden.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-lux btn-solid">
            <span>Return home</span>
          </Link>
          <Link to="/contact" className="btn-lux btn-outline-dark">
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-gold">Something went wrong</p>
        <h1 className="display-md mt-6 text-forest">This page didn't load</h1>
        <p className="body-lux mt-4">
          You can try again, or head back to the home page.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-lux btn-solid"
          >
            <span>Try again</span>
          </button>
          <a href="/" className="btn-lux btn-outline-dark">
            <span>Go home</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio" },
      {
        name: "description",
        content:
          "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed.",
      },
      { name: "author", content: BRAND.name },
      { property: "og:site_name", content: BRAND.name },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://luxe-garden-builder.vercel.app/" },
      { property: "og:title", content: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio" },
      {
        property: "og:description",
        content:
          "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed.",
      },
      { property: "og:image", content: "https://luxe-garden-builder.vercel.app/og-image.png?v=3" },
      { property: "og:image:secure_url", content: "https://luxe-garden-builder.vercel.app/og-image.png?v=3" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RR Heaven Gardenblr — Luxury Architectural Horticulture & Nursery Studio" },
      {
        name: "twitter:description",
        content:
          "Bengaluru's premier landscape architecture, acclimatised plant nursery and bio-wall studio in Rajarajeshwari Nagar. 15+ years, 5,000+ luxury spaces transformed.",
      },
      { name: "twitter:image", content: "https://luxe-garden-builder.vercel.app/og-image.png?v=3" },
      { name: "theme-color", content: "#143A2C" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg?v=3", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico?v=3", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png?v=3", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=3" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BRAND.name,
          description:
            "Luxury garden nursery, premium plants and landscaping studio in Rajarajeshwari Nagar, Bengaluru.",
          telephone: BRAND.phones.map((p) => `+91${p}`),
          email: BRAND.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Double Road, 5th Stage, BEML Layout, Kempegowda Road",
            addressLocality: "Rajarajeshwari Nagar, Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560098",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 07:30-22:00",
          priceRange: "₹₹₹",
          sameAs: [BRAND.social.facebook, BRAND.social.instagram, BRAND.social.linkedin],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <LuxCursor />
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main>
        <Outlet />
      </main>
      <FloatingActions />
      <SiteFooter />
    </QueryClientProvider>
  );
}

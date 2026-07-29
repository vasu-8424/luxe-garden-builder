import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Gallery", to: "/gallery" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Indoor Garden Setup", to: "/services" },
      { label: "Outdoor Garden Setup", to: "/services" },
      { label: "Landscaping", to: "/services" },
      { label: "Garden Maintenance", to: "/services" },
      { label: "Organic Solutions", to: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Indoor Plants", to: "/products" },
      { label: "Outdoor Plants", to: "/products" },
      { label: "Ceramic Pots", to: "/products" },
      { label: "Plant Stands", to: "/products" },
      { label: "Organic Manure", to: "/products" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-on-dark">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-display text-3xl leading-tight">
              RR Heaven <span className="text-gold">Gardenblr</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone/70">
              {BRAND.tagline} Premium plants, designer planters and complete
              landscape craftsmanship for Bengaluru's finest homes and spaces.
            </p>

            <form
              className="mt-10 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label className="eyebrow text-gold" htmlFor="newsletter">
                Newsletter
              </label>
              <div className="mt-4 flex border-b border-on-dark/25 focus-within:border-gold">
                <input
                  id="newsletter"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Your email address"
                  className="w-full bg-transparent py-3 text-sm text-on-dark placeholder:text-stone/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="eyebrow text-gold transition-opacity hover:opacity-70"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-gold">{col.title}</p>
                <ul className="mt-6 space-y-3">
                  {col.links.map((l, i) => (
                    <li key={`${l.label}-${i}`}>
                      <Link
                        to={l.to}
                        className="text-sm text-stone/70 transition-colors hover:text-on-dark"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-on-dark/12 pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow text-gold">Visit</p>
            <address className="mt-5 text-sm leading-relaxed text-stone/70 not-italic">
              {BRAND.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="mt-2 block text-stone/50">{BRAND.address.landmark}</span>
            </address>
          </div>
          <div>
            <p className="eyebrow text-gold">Contact</p>
            <div className="mt-5 space-y-2 text-sm text-stone/70">
              {BRAND.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="block hover:text-on-dark">
                  +91 {p}
                </a>
              ))}
              <a href={`mailto:${BRAND.email}`} className="block hover:text-on-dark">
                {BRAND.email}
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold">Hours</p>
            <p className="mt-5 text-sm text-stone/70">{BRAND.hours}</p>
            <div className="mt-6 flex gap-4">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-on-dark/20 text-stone/70 transition-colors hover:border-gold hover:text-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4z" />
                </svg>
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-on-dark/20 text-stone/70 transition-colors hover:border-gold hover:text-gold"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-on-dark/12 pt-8 text-xs text-stone/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-stone/80">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-stone/80">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

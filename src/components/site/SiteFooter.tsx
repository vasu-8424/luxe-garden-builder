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
    <footer className="bg-forest-deep text-on-dark border-t border-gold/20">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-display text-3xl leading-tight">
              RR Heaven <span className="text-gold">Gardenblr</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone/70 font-sans">
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
              <label className="eyebrow text-gold font-mono" htmlFor="newsletter">
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
                  className="eyebrow text-gold transition-opacity hover:opacity-70 font-mono"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-gold font-mono">{col.title}</p>
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
            <p className="eyebrow text-gold font-mono">Visit</p>
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
            <p className="eyebrow text-gold font-mono">Contact</p>
            <div className="mt-5 space-y-2 text-sm text-stone/70">
              {BRAND.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="block hover:text-on-dark font-mono">
                  +91 {p}
                </a>
              ))}
              <a href={`mailto:${BRAND.email}`} className="block hover:text-on-dark font-mono">
                {BRAND.email}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold font-mono">Social Media & Hours</p>
            <p className="mt-5 text-sm text-stone/70">{BRAND.hours}</p>
            
            {/* Social Media Icons with Links */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow us on Instagram"
                title="RR Heaven Gardenblr on Instagram"
                className="flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow us on Facebook"
                title="RR Heaven Gardenblr on Facebook"
                className="flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Connect with Naveen Kumar on LinkedIn"
                title="Naveen Kumar on LinkedIn"
                className="flex h-11 w-11 items-center justify-center border border-on-dark/20 text-stone/80 transition-all hover:border-gold hover:text-gold hover:bg-white/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
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

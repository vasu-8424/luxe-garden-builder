import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site";

const MAP_SRC =
  "https://www.google.com/maps?q=BEML%20Layout%205th%20Stage%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%20560098&output=embed";

export function ContactBlock() {
  return (
    <section className="bg-cream-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow text-gold font-mono">Visit the Nursery</p>
          <h2 className="display-lg mt-6 text-forest">
            Come walk the rows before you decide.
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="h-[26rem] w-full overflow-hidden bg-stone shadow-soft lg:h-full lg:min-h-[34rem]">
              <iframe
                title={`Map to ${BRAND.name}, Rajarajeshwari Nagar, Bengaluru`}
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[35%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between bg-forest-deep p-9 text-on-dark md:p-12">
              <div className="space-y-10">
                <div>
                  <p className="eyebrow text-gold font-mono">Address</p>
                  <address className="mt-5 font-display text-xl leading-relaxed not-italic">
                    {BRAND.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <p className="mt-3 text-sm text-stone/55">{BRAND.address.landmark}</p>
                </div>

                <div>
                  <p className="eyebrow text-gold font-mono font-bold">Telephone</p>
                  <div className="mt-5 space-y-2">
                    {BRAND.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+91${p}`}
                        className="numeral link-underline block text-lg text-on-dark font-mono"
                      >
                        +91 {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow text-gold font-mono font-bold">Email</p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="link-underline mt-5 inline-block text-sm text-stone/80 font-mono"
                  >
                    {BRAND.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow text-gold font-mono font-bold">Business Hours</p>
                  <p className="mt-5 text-sm text-stone/80">{BRAND.hours}</p>
                </div>
              </div>

              {/* Social Links with SVG Icons */}
              <div className="mt-12 border-t border-on-dark/12 pt-8">
                <p className="eyebrow text-gold font-mono font-bold mb-4">Connect With Us</p>
                <div className="flex flex-wrap gap-4">
                  {/* Instagram */}
                  <a
                    href={BRAND.social.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stone/80 hover:text-gold transition-colors border border-on-dark/20 px-3 py-2 bg-white/5"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={BRAND.social.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stone/80 hover:text-gold transition-colors border border-on-dark/20 px-3 py-2 bg-white/5"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4z" />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={BRAND.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-stone/80 hover:text-gold transition-colors border border-on-dark/20 px-3 py-2 bg-white/5"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

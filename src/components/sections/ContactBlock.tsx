import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site";

const MAP_SRC =
  "https://www.google.com/maps?q=BEML%20Layout%205th%20Stage%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%20560098&output=embed";

export function ContactBlock() {
  return (
    <section className="bg-cream-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow text-gold">Visit the Nursery</p>
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
                  <p className="eyebrow text-gold">Address</p>
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
                  <p className="eyebrow text-gold">Telephone</p>
                  <div className="mt-5 space-y-2">
                    {BRAND.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+91${p}`}
                        className="numeral link-underline block text-lg text-on-dark"
                      >
                        +91 {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow text-gold">Email</p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="link-underline mt-5 inline-block text-sm text-stone/80"
                  >
                    {BRAND.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow text-gold">Business Hours</p>
                  <p className="mt-5 text-sm text-stone/80">{BRAND.hours}</p>
                </div>
              </div>

              <div className="mt-12 flex gap-4 border-t border-on-dark/12 pt-8">
                <a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow text-stone/60 transition-colors hover:text-gold"
                >
                  Facebook
                </a>
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow text-stone/60 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

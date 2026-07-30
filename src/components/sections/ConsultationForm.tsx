import { useState } from "react";
import { z } from "zod";
import { LuxButton } from "@/components/site/LuxButton";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, { message: "Enter a valid phone number" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255)
    .or(z.literal("")),
  service: z.string().trim().min(1, { message: "Select a service" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be under 1000 characters" }),
});

const SERVICE_OPTIONS = [
  "Indoor Garden Setup",
  "Outdoor Garden Setup",
  "Garden Design",
  "Landscaping",
  "Garden Maintenance",
  "Plant Maintenance",
  "Re-potting",
  "Organic Solutions",
  "Plants & Pots Purchase",
];

const field =
  "w-full border-b border-foreground/15 bg-transparent py-4 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold focus:outline-none";

export function ConsultationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const text = [
      `New consultation request — ${BRAND.name}`,
      `Name: ${parsed.data.name}`,
      `Phone: ${parsed.data.phone}`,
      parsed.data.email ? `Email: ${parsed.data.email}` : "",
      `Service: ${parsed.data.service}`,
      parsed.data.message ? `Details: ${parsed.data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-gold">Book a Consultation</p>
          <h2 className="display-lg mt-6 text-forest">
            Tell us about your space.
          </h2>
          <p className="body-lux mt-8 max-w-sm">
            Share a few details and we will arrange a site visit at a time that
            suits you. Consultations across Bengaluru are complimentary.
          </p>
          <div className="mt-10 space-y-3 border-t border-foreground/10 pt-8">
            {BRAND.phones.map((p) => (
              <a
                key={p}
                href={`tel:+91${p}`}
                className="numeral link-underline block text-lg text-forest"
              >
                +91 {p}
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="link-underline inline-block pt-2 text-sm text-muted-foreground"
            >
              {BRAND.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="eyebrow text-muted-foreground">
                Full name
              </label>
              <input id="name" name="name" maxLength={100} className={field} placeholder="Your name" />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="eyebrow text-muted-foreground">
                Phone
              </label>
              <input id="phone" name="phone" maxLength={15} className={field} placeholder="10-digit mobile" />
              {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="eyebrow text-muted-foreground">
                Email (optional)
              </label>
              <input id="email" name="email" maxLength={255} className={field} placeholder="you@email.com" />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="service" className="eyebrow text-muted-foreground">
                Service
              </label>
              <select id="service" name="service" defaultValue="" className={field}>
                <option value="" disabled>
                  Choose a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && <p className="mt-2 text-xs text-destructive">{errors.service}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow text-muted-foreground">
                About your space
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                className={`${field} resize-none`}
                placeholder="Area, location, timeline, references…"
              />
              {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-6">
              <LuxButton type="submit" variant="solid">
                Send request
              </LuxButton>
              {sent && (
                <p className="text-sm text-olive">
                  Thank you — your request is on its way. We respond within 24 hours (open 7 working days a week).
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

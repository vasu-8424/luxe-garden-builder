import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { FAQS } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-gold">Questions</p>
          <h2 className="display-lg mt-6 text-forest">Before you begin.</h2>
          <p className="body-lux mt-7 max-w-sm">
            Still unsure? Call us — we answer between 7:30 AM and 10:00 PM, every
            day of the week.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-foreground/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-foreground/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-8 py-7 text-left"
                  >
                    <span
                      className={`font-display text-xl transition-colors duration-500 md:text-2xl ${
                        isOpen ? "text-gold" : "text-forest"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`mt-2 shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="body-lux max-w-2xl pr-10 pb-8">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

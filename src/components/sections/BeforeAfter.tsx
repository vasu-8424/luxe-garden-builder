import { useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/catalog";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <section className="bg-forest-deep py-24 text-on-dark md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-gold">Landscaping Showcase</p>
            <h2 className="display-lg mt-6 max-w-2xl text-on-dark">
              The same ground. Eleven weeks apart.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone/65 md:text-right">
            Drag the handle to see a bare Bengaluru backyard rebuilt into a
            layered, lit and irrigated garden.
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden select-none"
            onMouseDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => setFromClientX(e.touches[0].clientX)}
            onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
          >
            <img
              src={IMG.after}
              alt="Completed luxury backyard garden with lawn, stone path and layered planting"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={IMG.before}
                alt="Bare backyard with patchy grass before landscaping"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ width: ref.current?.offsetWidth ?? "100%", maxWidth: "none" }}
              />
            </div>

            <span className="absolute top-6 left-6 eyebrow bg-forest-deep/70 px-3 py-2 text-stone/80">
              Before
            </span>
            <span className="absolute top-6 right-6 eyebrow bg-forest-deep/70 px-3 py-2 text-gold">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-gold"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-forest-deep/80 backdrop-blur">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                  <path d="M7 1L3 5l4 4M13 1l4 4-4 4" stroke="var(--gold)" strokeWidth="1.2" />
                </svg>
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after landscaping"
              className="absolute inset-x-0 bottom-4 mx-auto w-2/3 opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold"
      style={{ transform: `scaleX(${p})`, transition: "transform 120ms linear" }}
    />
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-[55] flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
          "Hello RR Heaven Gardenblr, I would like a garden consultation.",
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center border border-forest/15 bg-card text-forest shadow-lift transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 004.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.95.24-3.2-.67-2.7-1.06-4.4-3.8-4.53-3.98-.13-.18-1.08-1.44-1.08-2.75s.69-1.95.94-2.22a.98.98 0 01.71-.33c.18 0 .35 0 .5.01.16.01.38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.18-.13.29-.26.45s-.28.35-.4.47c-.13.13-.27.28-.12.54.15.27.67 1.1 1.44 1.79.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.27.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.2.48.31.06.11.06.63-.18 1.31z" />
        </svg>
      </a>
      <a
        href={`tel:+91${BRAND.phones[0]}`}
        aria-label="Call us"
        className="flex items-center justify-center border border-forest/15 bg-forest text-on-dark shadow-lift transition-all duration-500 hover:-translate-y-1 hover:bg-gold hover:text-charcoal"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
        </svg>
      </a>
    </div>
  );
}

export function LuxCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setActive(!!t?.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-full border border-gold mix-blend-difference md:block"
      style={{
        width: active ? 46 : 18,
        height: active ? 46 : 18,
        transform: `translate3d(${pos.x - (active ? 23 : 9)}px, ${pos.y - (active ? 23 : 9)}px, 0)`,
        transition:
          "width 400ms cubic-bezier(.22,1,.36,1), height 400ms cubic-bezier(.22,1,.36,1), transform 90ms linear",
        backgroundColor: active ? "transparent" : "var(--gold)",
        opacity: 0.75,
      }}
    />
  );
}

import { useEffect, useRef, useState } from "react";
import { BRAND } from "@/lib/site";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          setP(h > 0 ? window.scrollY / h : 0);
          ticking = false;
        });
        ticking = true;
      }
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
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold pointer-events-none"
      style={{ transform: `scaleX(${p})`, transition: "transform 120ms linear" }}
    />
  );
}

export function FloatingActions() {
  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="fixed right-4 bottom-4 z-[55] hidden sm:flex flex-col gap-3 md:right-6 md:bottom-6">
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
            "Hello RR Heaven Gardenblr, I would like to enquire about your luxury plants & landscape services.",
          )}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat on WhatsApp"
          className="flex h-13 w-13 items-center justify-center border border-forest/15 bg-[#25D366] text-black shadow-lift transition-all duration-300 hover:scale-105"
          style={{ height: "3.5rem", width: "3.5rem" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 004.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.95.24-3.2-.67-2.7-1.06-4.4-3.8-4.53-3.98-.13-.18-1.08-1.44-1.08-2.75s.69-1.95.94-2.22a.98.98 0 01.71-.33c.18 0 .35 0 .5.01.16.01.38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.18-.13.29-.26.45s-.28.35-.4.47c-.13.13-.27.28-.12.54.15.27.67 1.1 1.44 1.79.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.27.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.2.48.31.06.11.06.63-.18 1.31z" />
          </svg>
        </a>
        <a
          href={`tel:+91${BRAND.phones[0]}`}
          aria-label="Call us"
          className="flex items-center justify-center border border-forest/15 bg-forest text-on-dark shadow-lift transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black"
          style={{ height: "3.5rem", width: "3.5rem" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
          </svg>
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-[60] grid grid-cols-2 sm:hidden border-t border-gold/30 bg-forest-deep shadow-2xl">
        <a
          href={`tel:+91${BRAND.phones[0]}`}
          className="flex items-center justify-center gap-2 py-3 bg-forest text-on-dark font-mono text-xs uppercase tracking-wider font-bold border-r border-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
          </svg>
          Call Us
        </a>
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
            "Hello RR Heaven Gardenblr, I would like to enquiry about plants & garden consultation.",
          )}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-black font-mono text-xs uppercase tracking-wider font-bold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 004.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.72 13.9c-.24.68-1.4 1.3-1.94 1.35-.5.05-.95.24-3.2-.67-2.7-1.06-4.4-3.8-4.53-3.98-.13-.18-1.08-1.44-1.08-2.75s.69-1.95.94-2.22a.98.98 0 01.71-.33c.18 0 .35 0 .5.01.16.01.38-.06.6.45.23.55.77 1.9.84 2.04.07.13.11.29.02.47-.09.18-.13.29-.26.45s-.28.35-.4.47c-.13.13-.27.28-.12.54.15.27.67 1.1 1.44 1.79.99.88 1.82 1.16 2.08 1.29.26.13.41.11.56-.07.15-.18.65-.76.82-1.02.17-.27.34-.22.57-.13.23.09 1.47.69 1.72.82.25.13.42.2.48.31.06.11.06.63-.18 1.31z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  );
}

export function LuxCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = cursorRef.current;
    if (!el) return;

    let ticking = false;
    const move = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const target = e.target as HTMLElement | null;
          const isHover = !!target?.closest("a, button, [data-cursor]");
          const size = isHover ? 44 : 16;
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.transform = `translate3d(${e.clientX - size / 2}px, ${e.clientY - size / 2}px, 0)`;
          el.style.backgroundColor = isHover ? "transparent" : "var(--gold)";
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden rounded-full border border-gold mix-blend-difference md:block will-change-transform"
      style={{
        width: 16,
        height: 16,
        opacity: 0.75,
        transition: "width 300ms cubic-bezier(.22,1,.36,1), height 300ms cubic-bezier(.22,1,.36,1)",
      }}
    />
  );
}

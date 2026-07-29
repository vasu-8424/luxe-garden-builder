import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setStarted(true);
        io.disconnect();

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
          setDisplay(value);
          return;
        }

        const duration = 1900;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, started]);

  return (
    <span ref={ref} className={`numeral ${className}`}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

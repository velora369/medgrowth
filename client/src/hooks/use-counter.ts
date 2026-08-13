import { useEffect, useRef, useState } from "react";

type CounterOptions = {
  target: number;
  duration?: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
};

export function useCounter({ target, duration = 1800, format, prefix = "", suffix = "" }: CounterOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = (n: number) => {
      const val = format ? format(n) : Math.round(n).toLocaleString("pt-BR");
      setDisplay(`${prefix}${val}${suffix}`);
    };

    if (reduced) {
      render(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          render(target * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, format, prefix, suffix]);

  return { ref, display };
}

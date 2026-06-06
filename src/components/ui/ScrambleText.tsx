"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CHARS   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/~[]";
const TICK_MS = 30; // ms per tick

type ScrambleTextProps = {
  text: string;
  // Each flag is independent — you can mix and match freely.
  onMount?:  boolean; // play once when the component first renders   (default: true)
  onScroll?: boolean; // play each time the element scrolls into view  (default: true)
  onHover?:  boolean; // play each time the mouse enters the element   (default: true)
  // Delay before the mount animation starts (ms). Useful for staggering.
  delay?: number;
  className?: string;
};

export default function ScrambleText({
  text,
  onMount  = true,
  onScroll = true,
  onHover  = true,
  delay    = 0,
  className,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text); // start with real text — SSR-safe

  const elementRef  = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout>  | null>(null);

  // When onMount is true, the mount effect already handles the first visible frame.
  // This flag tells the IntersectionObserver to skip that first intersection so
  // both don't fire simultaneously and restart each other.
  const skipFirstScrollRef = useRef(onMount);

  // Core animation: reveals characters left to right.
  // Targets ~15 ticks per string (30 ms each) → max ~450 ms regardless of length.
  const runScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let revealedCount = 0;
    const charsPerTick = Math.max(1, Math.ceil(text.length / 15));

    intervalRef.current = setInterval(() => {
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedCount) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(next);
      revealedCount += charsPerTick;

      if (revealedCount > text.length) {
        clearInterval(intervalRef.current!);
        setDisplay(text);
      }
    }, TICK_MS);
  }, [text]);

  // ── Mount trigger ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!onMount) return;

    timeoutRef.current = setTimeout(runScramble, delay);

    return () => {
      if (timeoutRef.current)  clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onMount, delay, runScramble]);

  // ── Scroll trigger (IntersectionObserver) ───────────────────────────────
  useEffect(() => {
    if (!onScroll || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Skip the very first intersection when onMount is also enabled.
          // That first intersection happens on page load and mount already handles it.
          if (skipFirstScrollRef.current) {
            skipFirstScrollRef.current = false;
            return;
          }

          runScramble();
        });
      },
      { threshold: 0.1 } // trigger when at least 10% of the element is visible
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [onScroll, runScramble]);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={text}               // screen readers always get the real text
      onMouseEnter={onHover ? runScramble : undefined}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Gates Notes–style decode: numbers → symbols → final text
const PHASE_CHARS = [
  "0123456789",
  "@#$%&*<>!?[]",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
];

const TICK_MS    = 45;
const TICK_COUNT = 24;

type ScrambleTextProps = {
  text: string;
  onMount?:  boolean;
  onScroll?: boolean;
  onHover?:  boolean;
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
  const [display, setDisplay] = useState(text);
  const [reduceMotion, setReduceMotion] = useState(false);

  const elementRef  = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const skipFirstScrollRef = useRef(onMount);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const runScramble = useCallback(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }

    if (intervalRef.current) clearInterval(intervalRef.current);

    let revealedCount = 0;
    let tick = 0;
    const totalTicks = TICK_COUNT;
    const charsPerTick = Math.min(2, Math.max(1, Math.ceil(text.length / totalTicks)));

    intervalRef.current = setInterval(() => {
      const progress = tick / totalTicks;

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedCount) return char;

          // Phase shifts as animation progresses (Gates-style decode)
          const phase =
            progress < 0.35 ? 0 : progress < 0.7 ? 1 : 2;
          const pool = PHASE_CHARS[phase];
          return pool[Math.floor(Math.random() * pool.length)];
        })
        .join("");

      setDisplay(next);
      tick++;
      revealedCount += charsPerTick;

      if (revealedCount > text.length) {
        clearInterval(intervalRef.current!);
        setDisplay(text);
      }
    }, TICK_MS);
  }, [text, reduceMotion]);

  useEffect(() => {
    if (!onMount || reduceMotion) return;

    timeoutRef.current = setTimeout(runScramble, delay);

    return () => {
      if (timeoutRef.current)  clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onMount, delay, runScramble, reduceMotion]);

  useEffect(() => {
    if (!onScroll || !elementRef.current || reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (skipFirstScrollRef.current) {
            skipFirstScrollRef.current = false;
            return;
          }

          runScramble();
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [onScroll, runScramble, reduceMotion]);

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={text}
      onMouseEnter={onHover && !reduceMotion ? runScramble : undefined}
    >
      <span aria-hidden="true">{display}</span>
    </span>
  );
}

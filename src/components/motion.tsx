"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Fades + slides children up when they scroll into view.
 * Respects prefers-reduced-motion (content appears instantly).
 */
export function Reveal({
  children,
  delay = 0,
  y = 44,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          ok: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };
          gsap.from(ref.current, {
            y: reduceMotion ? 0 : y,
            autoAlpha: reduceMotion ? 1 : 0,
            duration: reduceMotion ? 0 : 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              once: true,
            },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Staggers direct children (`> *`) up-and-in when scrolled into view.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          ok: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };
          gsap.from(ref.current!.children, {
            y: reduceMotion ? 0 : 48,
            autoAlpha: reduceMotion ? 1 : 0,
            duration: reduceMotion ? 0 : 0.85,
            stagger: reduceMotion ? 0 : stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              once: true,
            },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Hero text entrance: each `.reveal-line > span` slides up out of an
 * overflow-hidden mask on mount, staggered. Wrap hero lines in
 * <span className="reveal-line"><span>…</span></span>.
 */
export function HeroReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          ok: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };
          if (reduceMotion) return;
          gsap.from(".reveal-line > span", {
            yPercent: 115,
            duration: 1,
            stagger: 0.09,
            ease: "power4.out",
            delay: 0.1,
          });
          gsap.from(".hero-fade", {
            autoAlpha: 0,
            y: 24,
            duration: 0.9,
            delay: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Infinite horizontal marquee (CSS-driven; pauses for reduced motion).
 */
export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item, i) => (
        <span
          key={`${key}-${i}`}
          className="display flex items-center whitespace-nowrap text-4xl sm:text-6xl"
        >
          <span className="px-6">{item}</span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden py-6 ${className}`}>
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

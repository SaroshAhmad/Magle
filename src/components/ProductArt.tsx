"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Animated SVG illustration per product. Loops subtly once scrolled
 * into view; static when reduced motion is preferred.
 */
export default function ProductArt({
  slug,
  className = "",
}: {
  slug: string;
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

          const st = {
            trigger: ref.current,
            start: "top 95%",
            toggleActions: "play pause resume pause",
          };

          switch (slug) {
            case "booking-system":
              gsap.to(".cal-day", {
                scale: 0.5,
                opacity: 0.35,
                transformOrigin: "center",
                stagger: { each: 0.12, from: "random", repeat: -1, yoyo: true },
                duration: 0.9,
                ease: "sine.inOut",
                scrollTrigger: st,
              });
              gsap.to(".cal-check", {
                scale: 1.18,
                rotate: 8,
                transformOrigin: "center",
                repeat: -1,
                yoyo: true,
                duration: 1.1,
                ease: "sine.inOut",
                scrollTrigger: st,
              });
              break;

            case "ai-assistant":
              gsap.to(".wave-bar", {
                scaleY: () => gsap.utils.random(0.3, 1.6),
                transformOrigin: "center",
                repeat: -1,
                yoyo: true,
                repeatRefresh: true,
                duration: 0.45,
                ease: "sine.inOut",
                stagger: { each: 0.08 },
                scrollTrigger: st,
              });
              gsap.to(".ai-ring", {
                scale: 1.12,
                opacity: 0.25,
                transformOrigin: "center",
                repeat: -1,
                yoyo: true,
                duration: 1.6,
                ease: "sine.inOut",
                stagger: 0.3,
                scrollTrigger: st,
              });
              break;

            case "email-automation":
              gsap.to(".mail-envelope", {
                y: -8,
                rotate: -3,
                transformOrigin: "center",
                repeat: -1,
                yoyo: true,
                duration: 1.4,
                ease: "sine.inOut",
                scrollTrigger: st,
              });
              gsap.fromTo(
                ".mail-line",
                { xPercent: -30, opacity: 0 },
                {
                  xPercent: 40,
                  opacity: 1,
                  repeat: -1,
                  duration: 1.2,
                  ease: "power1.inOut",
                  stagger: 0.25,
                  scrollTrigger: st,
                },
              );
              break;

            case "review-management":
              gsap.to(".star", {
                scale: 1.25,
                rotate: 12,
                transformOrigin: "center",
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "back.inOut(2)",
                stagger: { each: 0.15, repeat: -1, yoyo: true },
                scrollTrigger: st,
              });
              break;
          }
        },
      );
    },
    { scope: ref, dependencies: [slug] },
  );

  return (
    <div ref={ref} className={className} aria-hidden>
      {slug === "booking-system" && (
        <svg viewBox="0 0 200 140" fill="none" className="h-full w-full">
          <rect x="24" y="18" width="152" height="110" rx="16" fill="#fff" opacity="0.85" />
          <rect x="24" y="18" width="152" height="30" rx="16" fill="#6366f1" />
          <rect x="24" y="34" width="152" height="14" fill="#6366f1" />
          <circle cx="52" cy="33" r="5" fill="#fff" />
          <circle cx="148" cy="33" r="5" fill="#fff" />
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle
                key={`${row}-${col}`}
                className="cal-day"
                cx={58 + col * 28}
                cy={68 + row * 22}
                r="7"
                fill={row === 1 && col === 2 ? "#f472b6" : "#c7d2fe"}
              />
            )),
          )}
          <g className="cal-check">
            <circle cx="148" cy="106" r="17" fill="#22d3ee" />
            <path
              d="M140 106l6 6 11 -12"
              stroke="#0b0b1a"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )}

      {slug === "ai-assistant" && (
        <svg viewBox="0 0 200 140" fill="none" className="h-full w-full">
          <circle className="ai-ring" cx="100" cy="70" r="56" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" />
          <circle className="ai-ring" cx="100" cy="70" r="44" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5" />
          <circle cx="100" cy="70" r="33" fill="#0b0b1a" />
          {[-16, -8, 0, 8, 16].map((x, i) => (
            <rect
              key={i}
              className="wave-bar"
              x={97 + x}
              y={58}
              width="4.5"
              height="24"
              rx="2.25"
              fill={i % 2 === 0 ? "#22d3ee" : "#f472b6"}
            />
          ))}
        </svg>
      )}

      {slug === "email-automation" && (
        <svg viewBox="0 0 200 140" fill="none" className="h-full w-full">
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              className="mail-line"
              x="18"
              y={40 + i * 24}
              width="42"
              height="5"
              rx="2.5"
              fill={["#6366f1", "#22d3ee", "#f472b6"][i]}
            />
          ))}
          <g className="mail-envelope">
            <rect x="84" y="38" width="94" height="66" rx="12" fill="#fff" opacity="0.9" />
            <path
              d="M88 46l43 32 43-32"
              stroke="#6366f1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="172" cy="44" r="12" fill="#f472b6" />
            <path d="M168 44h8M172 40v8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      )}

      {slug === "review-management" && (
        <svg viewBox="0 0 200 140" fill="none" className="h-full w-full">
          <rect x="22" y="30" width="156" height="80" rx="18" fill="#fff" opacity="0.85" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              className="star"
              transform={`translate(${44 + i * 24}, 62)`}
              d="M10 0l2.9 6.3 6.9 0.8-5.1 4.7 1.4 6.8L10 15.2 3.9 18.6l1.4-6.8L0.2 7.1l6.9-0.8L10 0z"
              fill={i < 4 ? "#6366f1" : i === 4 ? "#22d3ee" : "#c7d2fe"}
            />
          ))}
          <rect x="52" y="92" width="60" height="6" rx="3" fill="#c7d2fe" />
          <rect x="120" y="92" width="28" height="6" rx="3" fill="#f9a8d4" />
        </svg>
      )}
    </div>
  );
}

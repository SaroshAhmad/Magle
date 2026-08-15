"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Fixed, full-viewport luminous background: three blurred gradient orbs
 * that float continuously and drift with scroll (parallax at different
 * speeds). Sits behind all page content on every route.
 */
export default function Background() {
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

          // Continuous float — each orb on its own rhythm
          gsap.to(".orb-1", {
            x: 80,
            y: 60,
            scale: 1.15,
            duration: 9,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
          gsap.to(".orb-2", {
            x: -70,
            y: 90,
            scale: 0.9,
            duration: 12,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
          gsap.to(".orb-3", {
            x: 60,
            y: -70,
            scale: 1.2,
            duration: 10,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          // Scroll parallax — orbs drift as the page scrolls
          gsap.to(".orb-1", {
            yPercent: 60,
            ease: "none",
            scrollTrigger: { trigger: document.body, start: "top top", end: "max", scrub: 1.2 },
          });
          gsap.to(".orb-2", {
            yPercent: -50,
            ease: "none",
            scrollTrigger: { trigger: document.body, start: "top top", end: "max", scrub: 1.6 },
          });
          gsap.to(".orb-3", {
            yPercent: 40,
            xPercent: -30,
            ease: "none",
            scrollTrigger: { trigger: document.body, start: "top top", end: "max", scrub: 2 },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="orb orb-1 -top-40 left-[8%] h-[34rem] w-[34rem] opacity-45"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #818cf8, rgba(129,140,248,0) 70%)",
        }}
      />
      <div
        className="orb orb-2 right-[4%] top-[30%] h-[30rem] w-[30rem] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #67e8f9, rgba(103,232,249,0) 70%)",
        }}
      />
      <div
        className="orb orb-3 bottom-[-10%] left-[35%] h-[32rem] w-[32rem] opacity-35"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #f9a8d4, rgba(249,168,212,0) 70%)",
        }}
      />
    </div>
  );
}

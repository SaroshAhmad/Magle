"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type StackCard = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  chips: string[];
};

const tints = ["bg-peach", "bg-lilac", "bg-mint"];

/**
 * KOTA-style stacking cards: each card pins under the header as you
 * scroll; the previous card scales down and dims as the next one
 * slides over it. Pure sticky positioning + GSAP scrubbed depth.
 */
export default function ServiceStack({ cards }: { cards: StackCard[] }) {
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

          const els = gsap.utils.toArray<HTMLElement>(".stack-card");
          els.forEach((el, i) => {
            if (i === els.length - 1) return;
            gsap.to(el, {
              scale: 0.92,
              autoAlpha: 0.55,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: els[i + 1],
                start: "top bottom",
                end: "top top+=120",
                scrub: true,
              },
            });
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="space-y-8">
      {cards.map((card, i) => (
        <div
          key={card.slug}
          className="stack-card sticky"
          style={{ top: `${96 + i * 14}px` }}
        >
          <Link
            href={`/services/${card.slug}`}
            className={`group grid min-h-[26rem] gap-8 rounded-[2rem] p-8 text-ink shadow-[0_24px_80px_-32px_rgba(16,16,30,0.35)] sm:p-12 md:grid-cols-[auto_1fr_auto] ${tints[i % tints.length]}`}
          >
            <p className="display text-6xl sm:text-8xl">0{i + 1}</p>
            <div className="flex flex-col justify-between gap-8">
              <div>
                <h3 className="display text-4xl leading-none sm:text-6xl">
                  {card.name}
                </h3>
                <p className="display mt-3 text-xl text-accent sm:text-2xl">
                  {card.tagline}
                </p>
                <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
                  {card.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-ink/20 bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <span className="flex h-14 w-14 items-center justify-center self-start justify-self-end rounded-full bg-ink text-xl text-background transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Marquee, Reveal, RevealGroup } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, branding and growth marketing — designed and delivered by Magle Digital for service businesses.",
};

const tints = ["bg-peach", "bg-lilac", "bg-mint"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        lines={[
          <>Craftsmanship first.</>,
          <>
            <span className="outline-text">Templates</span>{" "}
            <span className="text-accent">never.</span>
          </>,
        ]}
        lede="Three services, delivered end to end by one team. Each has a defined process, a clear deliverable, and a point: making your business easier to find, easier to trust, and easier to buy from."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <RevealGroup className="space-y-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group grid gap-8 rounded-3xl p-8 text-ink transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(20,18,14,0.35)] sm:p-12 md:grid-cols-[auto_1fr_auto] md:items-center ${tints[i]}`}
              >
                <p className="display text-6xl sm:text-7xl">0{i + 1}</p>
                <div>
                  <h2 className="display text-4xl leading-none sm:text-5xl">
                    {service.name}
                  </h2>
                  <p className="display mt-3 text-xl text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                    {service.summary}
                  </p>
                </div>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl text-background transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="border-b border-line">
        <Marquee
          items={["Discover", "Design", "Build", "Launch", "Grow"]}
        />
      </div>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="display text-4xl sm:text-5xl">
              Not sure which one you need?
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Most clients aren&apos;t. Tell us where the business hurts and
              we&apos;ll recommend the smallest engagement that fixes it —
              sometimes that&apos;s one service, sometimes it isn&apos;t us at
              all.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Talk it through."
        body="A short conversation, an honest recommendation, and a written plan you keep either way."
        buttonLabel="Get in touch"
      />
    </>
  );
}

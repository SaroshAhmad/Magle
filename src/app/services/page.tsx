import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, branding and growth marketing — designed and delivered by Magle Digital for service businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Craftsmanship first.{" "}
            <span className="text-accent italic">Templates never.</span>
          </>
        }
        lede="Three services, delivered end to end by one team. Each has a defined process, a clear deliverable, and a point: making your business easier to find, easier to trust, and easier to buy from."
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="space-y-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/40 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
              >
                <p className="font-serif text-3xl text-accent italic">
                  0{i + 1}
                </p>
                <div>
                  <h2 className="text-2xl font-medium">{service.name}</h2>
                  <p className="mt-1 font-serif text-lg text-accent italic">
                    {service.tagline}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
                <p className="text-sm text-accent md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                  View service →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which one you need?"
        body="Most clients aren't. Tell us where the business hurts and we'll recommend the smallest engagement that fixes it — sometimes that's one service, sometimes it isn't us at all."
        buttonLabel="Talk it through"
      />
    </>
  );
}

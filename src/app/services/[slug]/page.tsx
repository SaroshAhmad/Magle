import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";
import { Reveal, RevealGroup } from "@/components/motion";
import { CtaBand, Label, PageHero } from "@/components/ui";

const tints: Record<string, string> = {
  "custom-websites": "bg-peach",
  branding: "bg-lilac",
  "growth-marketing": "bg-mint",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const tint = tints[service.slug] ?? "bg-peach";

  return (
    <>
      <PageHero
        eyebrow={`Service — ${service.name}`}
        lines={[
          <>{service.name}.</>,
          <span key="tag" className="text-accent">
            {service.tagline}
          </span>,
        ]}
        lede={service.intro}
      />

      {/* Deliverables */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <Label index="01">What you get</Label>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              Included in every engagement
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.07}>
            {service.deliverables.map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-5 rounded-3xl p-7 text-ink ${tint}`}
              >
                <span className="display text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-ink/80">{item}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <Label index="02">The process</Label>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              How it works,{" "}
              <span className="outline-text">step by step.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
              You&apos;ll always know where the project is, what happens next,
              and what we need from you. No black boxes.
            </p>
          </Reveal>
          <div className="mt-14">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={0.05}>
                <div className="group grid gap-4 border-t border-line py-10 transition-colors md:grid-cols-[120px_280px_1fr] md:gap-10">
                  <p className="display text-5xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display text-3xl">{step.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <div className="rounded-3xl bg-ink p-10 text-background sm:p-16">
              <Label index="03">
                <span className="text-background/60">The outcome</span>
              </Label>
              <p className="display mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl">
                {service.outcome}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-background"
                >
                  Also see: {s.name} →
                </Link>
              ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Sound good?"
        body="Tell us about your business and we'll come back with an honest read — what we'd do, in what order, and what it would take."
      />
    </>
  );
}

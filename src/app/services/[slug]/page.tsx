import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";
import { CtaBand, Eyebrow, PageHero } from "@/components/ui";

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

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            {service.name}
            <span className="mt-2 block text-3xl text-accent italic sm:text-4xl">
              {service.tagline}
            </span>
          </>
        }
        lede={service.intro}
      />

      {/* Deliverables */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl">Included in every engagement</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow>The process</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl">
            How it works, step by step
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            You&apos;ll always know where the project is, what happens next,
            and what we need from you. No black boxes.
          </p>
          <ol className="mt-12 space-y-0">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-[100px_240px_1fr] md:gap-8"
              >
                <p className="font-serif text-2xl text-accent italic">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcome */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-2xl border border-accent/25 bg-accent-soft p-8 md:p-12">
            <Eyebrow>The outcome</Eyebrow>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">
              {service.outcome}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-line px-5 py-2 text-sm text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  Also see: {s.name} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        body="Tell us about your business and we'll come back with an honest read — what we'd do, in what order, and what it would take."
      />
    </>
  );
}

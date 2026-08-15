import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/content";
import { HeroReveal, Reveal, RevealGroup } from "@/components/motion";
import { ComingSoonBadge, CtaBand, Label, PillButton } from "@/components/ui";

const tints: Record<string, string> = {
  "booking-system": "bg-sky",
  "ai-assistant": "bg-lilac",
  "email-automation": "bg-lemon",
  "review-management": "bg-rose",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const tint = tints[product.slug] ?? "bg-sky";

  return (
    <>
      <section className="border-b border-line">
        <HeroReveal className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <div className="hero-fade flex flex-wrap items-center gap-4">
            <Label index="✦">Product</Label>
            <ComingSoonBadge />
          </div>
          <h1 className="display mt-6 text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl">
            <span className="reveal-line">
              <span>{product.name}.</span>
            </span>
            <span className="reveal-line">
              <span className="text-accent">{product.tagline}</span>
            </span>
          </h1>
          <p className="hero-fade mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {product.intro}
          </p>
        </HeroReveal>
      </section>

      {/* Features */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <Label index="01">Capabilities</Label>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              What it <span className="outline-text">does.</span>
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.07}>
            {product.features.map((feature, i) => (
              <div
                key={feature.title}
                className={`rounded-3xl p-8 text-ink ${i === 0 ? "bg-ink !text-background md:col-span-2" : tint}`}
              >
                <p
                  className={`font-mono text-xs uppercase tracking-[0.18em] ${
                    i === 0 ? "text-lime" : "text-ink/50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-4 text-2xl sm:text-3xl">
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 max-w-2xl leading-relaxed ${
                    i === 0 ? "text-background/70" : "text-ink/70"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Who it's for + early access */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className={`h-full rounded-3xl p-9 text-ink sm:p-12 ${tint}`}>
                <Label index="02">Who it&apos;s for</Label>
                <p className="display mt-6 text-2xl leading-tight sm:text-3xl">
                  {product.whoFor}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-3xl bg-ink p-9 text-background sm:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">
                  ✦ Early access
                </p>
                <p className="mt-6 leading-relaxed text-background/75">
                  {product.name} is in active development. Early clients get
                  the full capability today, delivered concierge-style by our
                  team — and move onto the product seamlessly when it ships.
                </p>
                <div className="mt-8">
                  <PillButton href="/contact" variant="accent">
                    Request early access →
                  </PillButton>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="rounded-full border-2 border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-background"
                >
                  Also see: {p.name} →
                </Link>
              ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Be first in line."
        body="Join the early list and tell us what your business needs most. We build with our early clients, not just for them."
        buttonLabel="Get in touch"
      />
    </>
  );
}

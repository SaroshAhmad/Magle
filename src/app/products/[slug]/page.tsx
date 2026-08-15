import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/content";
import { ComingSoonBadge, CtaBand, Eyebrow } from "@/components/ui";

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

  return (
    <>
      <section className="hero-glow border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow>Products</Eyebrow>
            <ComingSoonBadge />
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
            {product.name}
            <span className="mt-2 block text-3xl text-accent italic sm:text-4xl">
              {product.tagline}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {product.intro}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl">What it does</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + early access */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-8">
              <Eyebrow>Who it&apos;s for</Eyebrow>
              <p className="mt-4 font-serif text-xl leading-snug">
                {product.whoFor}
              </p>
            </div>
            <div className="rounded-2xl border border-accent/25 bg-accent-soft p-8">
              <Eyebrow>Early access</Eyebrow>
              <p className="mt-4 leading-relaxed text-muted">
                {product.name} is in active development. Early clients get the
                full capability today, delivered concierge-style by our team —
                and move onto the product seamlessly when it ships.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Request early access
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="rounded-full border border-line px-5 py-2 text-sm text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  Also see: {p.name} →
                </Link>
              ))}
          </div>
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

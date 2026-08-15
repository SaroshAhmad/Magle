import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { ComingSoonBadge, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products",
  description:
    "In-house software by Magle Digital: booking system, AI engineered assistance, email automation, and review capture & management.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Software we build{" "}
            <span className="text-accent italic">in-house</span>, for
            businesses like yours.
          </>
        }
        lede="Four tools, one connected system: bookings that fill themselves, an AI assistant that answers when you can't, email that follows up automatically, and reviews that grow on their own. Each product is in active development — join the early list and shape what we ship."
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-medium">{product.name}</h2>
                  <ComingSoonBadge />
                </div>
                <p className="mt-1 font-serif text-lg text-accent italic">
                  {product.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  {product.summary}
                </p>
                <p className="mt-6 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-surface p-8 md:p-10">
            <h2 className="font-serif text-2xl">
              Why &ldquo;coming soon&rdquo; doesn&apos;t mean &ldquo;wait&rdquo;
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Early clients get every one of these capabilities today —
              delivered and managed by our team while the products mature. As
              each product ships, it slots in underneath, and nothing changes
              on your side except the price of doing it manually. Being early
              means you shape the roadmap.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want in early?"
        body="Tell us which of these would move the needle for your business. Early access clients get concierge onboarding and a direct line to the people building it."
        buttonLabel="Request early access"
      />
    </>
  );
}

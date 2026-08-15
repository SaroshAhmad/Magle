import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { Marquee, Reveal, RevealGroup } from "@/components/motion";
import ProductArt from "@/components/ProductArt";
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
        lines={[
          <>
            Software built <span className="grad-text">in-house</span>,
          </>,
          <>
            for businesses like{" "}
            <span className="outline-text">yours.</span>
          </>,
        ]}
        lede="Four tools, one connected system: bookings that fill themselves, an AI assistant that answers when you can't, email that follows up automatically, and reviews that grow on their own. Each product is in active development — join the early list and shape what we ship."
      />

      {/* Dark luminous product grid */}
      <section className="px-3 py-6 sm:px-5">
        <div className="relative mx-auto max-w-[96rem] overflow-hidden rounded-[2.5rem] bg-dark text-white">
          <div
            aria-hidden
            className="orb -top-40 right-[20%] h-[30rem] w-[30rem] opacity-35"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #6366f1, rgba(99,102,241,0) 70%)",
            }}
          />
          <div
            aria-hidden
            className="orb bottom-[-25%] left-[10%] h-[26rem] w-[26rem] opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #22d3ee, rgba(34,211,238,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24">
            <RevealGroup className="grid gap-5 md:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex min-h-[440px] flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:glow-indigo sm:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="display text-3xl leading-none sm:text-4xl">
                      {product.name}
                    </h2>
                    <ComingSoonBadge dark />
                  </div>
                  <ProductArt
                    slug={product.slug}
                    className="mx-auto h-44 w-full max-w-sm transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <p className="display grad-text text-2xl">
                      {product.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed text-white/65">
                      {product.summary}
                    </p>
                    <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more →
                    </p>
                  </div>
                </Link>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <div className="border-b border-line">
        <Marquee
          items={["Booking", "AI Assistance", "Automation", "Reviews"]}
        />
      </div>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <div className="glow-cyan rounded-3xl bg-lime p-10 text-ink sm:p-14">
              <h2 className="display text-3xl sm:text-5xl">
                Why &ldquo;coming soon&rdquo; doesn&apos;t mean &ldquo;wait&rdquo;.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">
                Early clients get every one of these capabilities today —
                delivered and managed by our team while the products mature. As
                each product ships, it slots in underneath, and nothing changes
                on your side except the price of doing it manually. Being early
                means you shape the roadmap.
              </p>
            </div>
          </Reveal>
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

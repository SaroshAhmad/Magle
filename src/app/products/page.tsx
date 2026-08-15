import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { Marquee, Reveal, RevealGroup } from "@/components/motion";
import { ComingSoonBadge, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products",
  description:
    "In-house software by Magle Digital: booking system, AI engineered assistance, email automation, and review capture & management.",
};

const tints: Record<string, string> = {
  "booking-system": "bg-sky",
  "ai-assistant": "bg-ink text-background",
  "email-automation": "bg-lemon",
  "review-management": "bg-rose",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        lines={[
          <>
            Software built <span className="text-accent">in-house</span>,
          </>,
          <>
            for businesses like{" "}
            <span className="outline-text">yours.</span>
          </>,
        ]}
        lede="Four tools, one connected system: bookings that fill themselves, an AI assistant that answers when you can't, email that follows up automatically, and reviews that grow on their own. Each product is in active development — join the early list and shape what we ship."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {products.map((product) => {
              const dark = product.slug === "ai-assistant";
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={`group flex min-h-[360px] flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(20,18,14,0.35)] sm:p-10 ${tints[product.slug]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="display text-4xl leading-none">
                      {product.name}
                    </h2>
                    <ComingSoonBadge dark={dark} />
                  </div>
                  <div>
                    <p
                      className={`display text-2xl ${dark ? "text-lime" : "text-accent"}`}
                    >
                      {product.tagline}
                    </p>
                    <p
                      className={`mt-4 leading-relaxed ${
                        dark ? "text-background/70" : "text-ink/70"
                      }`}
                    >
                      {product.summary}
                    </p>
                    <p
                      className={`mt-6 font-display text-sm font-bold uppercase tracking-wide ${
                        dark ? "text-lime" : "text-ink"
                      } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    >
                      Learn more →
                    </p>
                  </div>
                </Link>
              );
            })}
          </RevealGroup>
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
            <div className="rounded-3xl bg-lime p-10 text-ink sm:p-14">
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

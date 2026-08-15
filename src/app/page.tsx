import Link from "next/link";
import { products, services } from "@/lib/content";
import { ComingSoonBadge, CtaBand, Eyebrow } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-24 sm:pt-36">
          <Eyebrow>A technology company for real-world businesses</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] sm:text-7xl">
            We build the website, the brand, and the{" "}
            <span className="text-accent italic">software behind it</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            Magle Digital designs custom websites and brands for service
            businesses — and engineers the in-house tools that keep them
            running: booking, AI-powered assistance, email automation and
            review management. One company, one system, no duct tape.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Start a project
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-line px-7 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              See what we&apos;re building
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>Why we exist</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
                Good businesses lose money in quiet, boring ways.
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-medium">Calls go unanswered</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  The person doing the work is also the person answering the
                  phone — so the phone loses, and most callers who hit
                  voicemail never call back.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Customers forget to show up</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  No-shows are rarely malicious. They&apos;re a reminder that
                  was never sent — an empty chair that a simple system would
                  have filled.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Everything is duct tape</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  A free booking tool here, a spreadsheet there, a website from
                  2019 — five disconnected tools and nobody making them work
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
                The agency side
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              All services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
              >
                <p className="font-serif text-lg text-accent italic">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl font-medium">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <p className="mt-6 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Products</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
                The software we&apos;re engineering in-house
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              All products →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <ComingSoonBadge />
                </div>
                <p className="mt-2 font-serif text-lg text-accent italic">
                  {product.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Culture teaser */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Culture</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
                Small team. High standards. Built from basics.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                We&apos;re building Magle the way we build for clients:
                deliberately, from first principles, with no shortcuts that
                someone pays for later. If that sounds like how you like to
                work, we&apos;d like to meet you.
              </p>
              <Link
                href="/culture"
                className="mt-7 inline-block rounded-full border border-line px-6 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
              >
                Our culture &amp; open roles
              </Link>
            </div>
            <blockquote className="rounded-2xl border border-line bg-surface p-8">
              <p className="font-serif text-2xl leading-snug">
                &ldquo;Every business we work with should feel like it has a
                technology team of its own — because with us, it{" "}
                <span className="text-accent italic">does</span>.&rdquo;
              </p>
              <footer className="mt-5 text-sm text-muted">
                — The Magle Digital founding principle
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's build yours."
        body="Tell us about your business and what's leaking — missed calls, no-shows, an outdated website, or all three. We'll tell you honestly what we'd do about it."
      />
    </>
  );
}

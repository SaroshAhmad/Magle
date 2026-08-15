import Link from "next/link";
import { products, services } from "@/lib/content";
import { HeroReveal, Marquee, Reveal, RevealGroup } from "@/components/motion";
import {
  ComingSoonBadge,
  CtaBand,
  Label,
  PillButton,
  SectionTitle,
} from "@/components/ui";

const serviceTints = ["bg-peach", "bg-lilac", "bg-mint"];
const productTints: Record<string, string> = {
  "booking-system": "bg-sky",
  "ai-assistant": "bg-ink text-background",
  "email-automation": "bg-lemon",
  "review-management": "bg-rose",
};

const problems = [
  {
    title: "Calls go unanswered",
    body: "The person doing the work is also the person answering the phone — so the phone loses, and most callers who hit voicemail never call back.",
  },
  {
    title: "Customers forget to show up",
    body: "No-shows are rarely malicious. They're a reminder that was never sent — an empty chair that a simple system would have filled.",
  },
  {
    title: "Everything is duct tape",
    body: "A free booking tool here, a spreadsheet there, a website from 2019 — five disconnected tools and nobody making them work together.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <HeroReveal className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:pb-28 sm:pt-28">
          <div className="hero-fade">
            <Label index="✦">A technology company for real-world businesses</Label>
          </div>
          <h1 className="display-black mt-8 text-[15vw] leading-[0.9] sm:text-8xl lg:text-[9.5rem]">
            <span className="reveal-line">
              <span>We build</span>
            </span>
            <span className="reveal-line">
              <span>
                the <span className="text-accent">website,</span>
              </span>
            </span>
            <span className="reveal-line">
              <span>the brand &amp;</span>
            </span>
            <span className="reveal-line">
              <span>
                the <span className="outline-text">software</span>
              </span>
            </span>
            <span className="reveal-line">
              <span>behind it.</span>
            </span>
          </h1>
          <div className="hero-fade mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Custom websites and brands for service businesses — plus the
              in-house tools that keep them running: booking, AI-powered
              assistance, email automation and review management. One company,
              one system, no duct tape.
            </p>
            <div className="flex flex-wrap gap-3">
              <PillButton href="/contact" variant="accent">
                Start a project <span aria-hidden>→</span>
              </PillButton>
              <PillButton href="/products" variant="outline">
                Our products
              </PillButton>
            </div>
          </div>
        </HeroReveal>
      </section>

      {/* Marquee */}
      <div className="border-b border-line">
        <Marquee
          items={[
            "Websites",
            "Branding",
            "Growth",
            "Booking",
            "AI Assistance",
            "Automation",
            "Reviews",
          ]}
        />
      </div>

      {/* The problem */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <Reveal>
            <Label index="01">Why we exist</Label>
            <h2 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
              Good businesses lose money in{" "}
              <span className="text-accent">quiet, boring</span> ways.
            </h2>
          </Reveal>
          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {problems.map((problem, i) => (
              <div key={problem.title} className="bg-background p-8 sm:p-10">
                <p className="display text-5xl text-accent">0{i + 1}</p>
                <h3 className="display mt-6 text-2xl">{problem.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {problem.body}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label index="02">The agency side</Label>
              <SectionTitle small="Our" big="Services" className="mt-4" />
            </div>
            <Link
              href="/services"
              className="font-display text-sm font-bold uppercase tracking-wide underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
            >
              All services →
            </Link>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex min-h-[380px] flex-col justify-between rounded-3xl p-8 text-ink transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(20,18,14,0.35)] ${serviceTints[i]}`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.18em]">
                    0{i + 1} — Service
                  </p>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-background transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="display text-4xl leading-none">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Products */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label index="03">Engineered in-house</Label>
              <SectionTitle small="Our" big="Products" className="mt-4" />
            </div>
            <Link
              href="/products"
              className="font-display text-sm font-bold uppercase tracking-wide underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
            >
              All products →
            </Link>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2">
            {products.map((product) => {
              const dark = product.slug === "ai-assistant";
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={`group flex min-h-[300px] flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(20,18,14,0.35)] ${productTints[product.slug]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display text-3xl leading-none sm:text-4xl">
                      {product.name}
                    </h3>
                    <ComingSoonBadge dark={dark} />
                  </div>
                  <div>
                    <p
                      className={`display text-xl ${dark ? "text-lime" : "text-accent"}`}
                    >
                      {product.tagline}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        dark ? "text-background/70" : "text-ink/70"
                      }`}
                    >
                      {product.summary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Culture teaser */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <Label index="04">Culture</Label>
              <h2 className="display mt-6 text-5xl leading-[0.95] sm:text-6xl">
                Small team. High standards.{" "}
                <span className="outline-text">Built from basics.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
                We&apos;re building Magle the way we build for clients:
                deliberately, from first principles, with no shortcuts that
                someone pays for later. If that sounds like how you like to
                work, we&apos;d like to meet you.
              </p>
              <div className="mt-8">
                <PillButton href="/culture" variant="outline">
                  Culture &amp; open roles
                </PillButton>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="rotate-1 rounded-3xl bg-lime p-9 transition-transform duration-300 hover:rotate-0 sm:p-12">
                <p className="display text-3xl leading-tight text-ink sm:text-4xl">
                  &ldquo;Every business we work with should feel like it has a
                  technology team of its own — because with us, it does.&rdquo;
                </p>
                <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
                  ✦ The Magle founding principle
                </footer>
              </blockquote>
            </Reveal>
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

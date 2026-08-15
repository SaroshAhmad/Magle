import Link from "next/link";
import { products, services } from "@/lib/content";
import { HeroReveal, Marquee, Reveal, RevealGroup } from "@/components/motion";
import ServiceStack from "@/components/ServiceStack";
import ProductArt from "@/components/ProductArt";
import {
  ComingSoonBadge,
  CtaBand,
  Label,
  PillButton,
  SectionTitle,
} from "@/components/ui";

const productTints: Record<string, string> = {
  "booking-system": "bg-sky",
  "ai-assistant": "bg-dark-2 text-white",
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
                the <span className="grad-text">website,</span>
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
              <PillButton href="/contact" variant="grad">
                Start a project <span aria-hidden>→</span>
              </PillButton>
              <PillButton href="/products" variant="outline">
                Our products
              </PillButton>
            </div>
          </div>
        </HeroReveal>
      </section>

      {/* Marquee — direction-aware */}
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

      {/* The problem — dark luminous band */}
      <section className="px-3 py-6 sm:px-5">
        <div className="relative mx-auto max-w-[96rem] overflow-hidden rounded-[2.5rem] bg-dark text-white">
          <div
            aria-hidden
            className="orb -top-32 left-[15%] h-[28rem] w-[28rem] opacity-35"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #6366f1, rgba(99,102,241,0) 70%)",
            }}
          />
          <div
            aria-hidden
            className="orb bottom-[-30%] right-[8%] h-[26rem] w-[26rem] opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #f472b6, rgba(244,114,182,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-10 sm:py-28">
            <Reveal>
              <Label index="01" light>
                Why we exist
              </Label>
              <h2 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
                Good businesses lose money in{" "}
                <span className="grad-text">quiet, boring</span> ways.
              </h2>
            </Reveal>
            <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
              {problems.map((problem, i) => (
                <div
                  key={problem.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
                >
                  <p className="display grad-text text-6xl">0{i + 1}</p>
                  <h3 className="display mt-6 text-2xl">{problem.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/65">
                    {problem.body}
                  </p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Services — stacking cards */}
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

          <div className="mt-16">
            <ServiceStack
              cards={services.map((s) => ({
                slug: s.slug,
                name: s.name,
                tagline: s.tagline,
                summary: s.summary,
                chips: s.deliverables
                  .slice(0, 3)
                  .map((d) => d.split("—")[0].trim()),
              }))}
            />
          </div>
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
                  className={`group flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                    dark ? "glow-indigo" : "hover:glow-soft hover:shadow-[0_24px_70px_-24px_rgba(99,102,241,0.45)]"
                  } ${productTints[product.slug]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="display text-3xl leading-none sm:text-4xl">
                      {product.name}
                    </h3>
                    <ComingSoonBadge dark={dark} />
                  </div>
                  <ProductArt
                    slug={product.slug}
                    className="mx-auto h-40 w-full max-w-xs transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <p
                      className={`display text-xl ${dark ? "grad-text" : "text-accent"}`}
                    >
                      {product.tagline}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        dark ? "text-white/65" : "text-ink/70"
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
              <blockquote className="glow-indigo rotate-1 rounded-3xl bg-dark p-9 text-white transition-transform duration-300 hover:rotate-0 sm:p-12">
                <p className="display text-3xl leading-tight sm:text-4xl">
                  &ldquo;Every business we work with should feel like it has a{" "}
                  <span className="grad-text">technology team of its own</span>{" "}
                  — because with us, it does.&rdquo;
                </p>
                <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/50">
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

import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms";
import { Reveal } from "@/components/motion";
import { Label, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Magle Digital — tell us about your business and we'll reply within one working day.",
};

const steps = [
  "A real person reads your message and replies within one working day.",
  "If it looks like a fit, we book a short call — no decks, just questions about your business.",
  "You get a written recommendation: what we'd do, in what order, and what it costs. Yours to keep either way.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={[
          <>Tell us what&apos;s</>,
          <span key="l" className="text-accent">
            leaking.
          </span>,
        ]}
        lede="Missed calls, no-shows, a website that embarrasses you, a brand that undersells you — whatever it is, describe it in plain words. We'll reply within one working day with an honest read, not a sales script."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-3xl bg-mint p-8 text-ink">
                  <Label index="01">What happens next</Label>
                  <ol className="mt-6 space-y-5">
                    {steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-4">
                        <span className="display text-2xl">0{i + 1}</span>
                        <p className="leading-relaxed text-ink/75">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-lilac p-8 text-ink">
                  <Label index="02">Looking to join the team?</Label>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">
                    Applications live on our culture page — we&apos;d rather
                    meet you there.
                  </p>
                  <Link
                    href="/culture#apply"
                    className="mt-5 inline-block font-display text-sm font-bold uppercase tracking-wide underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
                  >
                    Go to careers →
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="glow-indigo rounded-3xl bg-dark p-8 text-white">
                  <p className="font-mono text-xs uppercase tracking-[0.18em]">
                    <span className="grad-text">✦ Where we work</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Remote-first, serving clients in the UK, India and beyond.
                    Wherever your customers are, that&apos;s where we work.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="glow-soft rounded-3xl bg-surface p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms";
import { Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Magle Digital — tell us about your business and we'll reply within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what&apos;s <span className="text-accent italic">leaking</span>.
          </>
        }
        lede="Missed calls, no-shows, a website that embarrasses you, a brand that undersells you — whatever it is, describe it in plain words. We'll reply within one working day with an honest read, not a sales script."
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-10">
              <div>
                <Eyebrow>What happens next</Eyebrow>
                <ol className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <span className="font-serif text-lg text-accent italic">01</span>
                    <p className="leading-relaxed text-muted">
                      A real person reads your message and replies within one
                      working day.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-lg text-accent italic">02</span>
                    <p className="leading-relaxed text-muted">
                      If it looks like a fit, we book a short call — no decks,
                      just questions about your business.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-lg text-accent italic">03</span>
                    <p className="leading-relaxed text-muted">
                      You get a written recommendation: what we&apos;d do, in
                      what order, and what it costs. Yours to keep either way.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-7">
                <Eyebrow>Looking to join the team?</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Applications live on our culture page — we&apos;d rather meet
                  you there.
                </p>
                <Link
                  href="/culture#apply"
                  className="mt-4 inline-block text-sm text-accent transition-opacity hover:opacity-80"
                >
                  Go to careers →
                </Link>
              </div>

              <div>
                <Eyebrow>Where we work</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Remote-first, serving clients in the UK, India and beyond.
                  Wherever your customers are, that&apos;s where we work.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

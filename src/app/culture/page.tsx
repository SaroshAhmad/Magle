import type { Metadata } from "next";
import { ApplicationForm } from "@/components/forms";
import { Marquee, Reveal, RevealGroup } from "@/components/motion";
import { Label, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Culture & Careers",
  description:
    "How Magle Digital works, what we value, and how to join the team building websites, brands and in-house software for real-world businesses.",
};

const values = [
  {
    title: "Built from basics",
    body: "We don't reach for shortcuts, templates or hype. We understand a problem from first principles, then build the simplest thing that genuinely solves it. Slow is smooth; smooth is fast.",
    tint: "bg-peach",
  },
  {
    title: "Craft is the brand",
    body: "Every screen, every sentence, every line of code carries our name. 'Good enough' compounds into mediocre; care compounds into reputation. We choose care, even when nobody's watching.",
    tint: "bg-lilac",
  },
  {
    title: "The client's revenue is the metric",
    body: "Not deliverables shipped, not hours logged, not awards. Did the phone ring more? Did the calendar fill? If our work doesn't move a real business forward, it wasn't finished.",
    tint: "bg-mint",
  },
  {
    title: "Honesty over comfort",
    body: "We tell clients when they don't need what they're asking for. We tell each other when work isn't good enough yet. Kind, direct, and never political.",
    tint: "bg-sky",
  },
  {
    title: "Owners, not passengers",
    body: "Small team means real responsibility. You'll ship things with your fingerprints on them, talk to actual clients, and see the effect of your work on an actual business — fast.",
    tint: "bg-lemon",
  },
  {
    title: "Learn in public",
    body: "We're building a technology company from scratch and we act like students of the craft: write things down, share what we learn, and let better arguments win regardless of who makes them.",
    tint: "bg-rose",
  },
];

const workingHere = [
  "Remote-first, async-friendly — we care about output, not hours online",
  "Small team, direct access — no layers between you and the decisions",
  "Real scope from week one — you build things clients actually use",
  "Modern tools and modern stack — we build the way we'd advise clients to",
  "Room to grow with the company — early people shape what this becomes",
];

export default function CulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Culture"
        lines={[
          <>We&apos;re building a</>,
          <>
            company <span className="text-accent">worth</span>
          </>,
          <>
            <span className="outline-text">building.</span>
          </>,
        ]}
        lede="Magle Digital is small on purpose and ambitious on purpose: a technology company that starts from basics, sweats the craft, and builds in-house software that real businesses run on. This is how we work — and an open door if you'd like to work this way too."
      />

      {/* Values */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <Reveal>
            <Label index="01">What we believe</Label>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              The principles we <span className="text-accent">hire for.</span>
            </h2>
          </Reveal>
          <RevealGroup
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`flex min-h-[300px] flex-col justify-between rounded-3xl p-8 text-ink ${value.tint}`}
              >
                <p className="display text-4xl">0{i + 1}</p>
                <div>
                  <h3 className="display text-2xl leading-none">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="border-b border-line">
        <Marquee items={["Craft", "Honesty", "Ownership", "Momentum"]} />
      </div>

      {/* Working here */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <Label index="02">Working here</Label>
              <h2 className="display mt-5 text-4xl leading-[0.95] sm:text-6xl">
                Early-stage,{" "}
                <span className="outline-text">honestly stated.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
                We won&apos;t dress it up: this is the ground floor. That means
                no corporate perks catalogue — and it also means your work
                isn&apos;t a rounding error. The people who join now
                aren&apos;t employees of a big machine; they&apos;re the reason
                the machine exists later.
              </p>
              <ul className="mt-9 space-y-4">
                {workingHere.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="display text-lg text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="glow-indigo -rotate-1 rounded-3xl bg-dark p-9 text-white transition-transform duration-300 hover:rotate-0 sm:p-12">
                <p className="display text-3xl leading-tight sm:text-4xl">
                  &ldquo;We want Magle to be the place where{" "}
                  <span className="grad-text">
                    serious people do their best work
                  </span>{" "}
                  — and where a small business owner anywhere can afford the
                  result.&rdquo;
                </p>
                <footer className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                  ✦ Why we&apos;re building this
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <Label index="03">Join us</Label>
              <h2 className="display mt-5 text-4xl leading-[0.95] sm:text-6xl">
                Introduce <span className="text-accent">yourself.</span>
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
                We don&apos;t post job ads and wait. If you design, engineer,
                grow or care for clients at a high standard — and the way we
                work resonates — we want to hear from you before we
                &ldquo;need&rdquo; you. The strongest teams are assembled from
                people you already know you want.
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                No CV required at this stage. Show us one thing you&apos;ve
                made and tell us why it&apos;s good. That tells us more than
                two pages of bullet points ever could.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="glow-soft rounded-3xl bg-surface p-8 sm:p-10">
                <ApplicationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

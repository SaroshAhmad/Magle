import type { Metadata } from "next";
import { ApplicationForm } from "@/components/forms";
import { Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Culture & Careers",
  description:
    "How Magle Digital works, what we value, and how to join the team building websites, brands and in-house software for real-world businesses.",
};

const values = [
  {
    title: "Built from basics",
    body: "We don't reach for shortcuts, templates or hype. We understand a problem from first principles, then build the simplest thing that genuinely solves it. Slow is smooth; smooth is fast.",
  },
  {
    title: "Craft is the brand",
    body: "Every screen, every sentence, every line of code carries our name. 'Good enough' compounds into mediocre; care compounds into reputation. We choose care, even when nobody's watching.",
  },
  {
    title: "The client's revenue is the metric",
    body: "Not deliverables shipped, not hours logged, not awards. Did the phone ring more? Did the calendar fill? If our work doesn't move a real business forward, it wasn't finished.",
  },
  {
    title: "Honesty over comfort",
    body: "We tell clients when they don't need what they're asking for. We tell each other when work isn't good enough yet. Kind, direct, and never political.",
  },
  {
    title: "Owners, not passengers",
    body: "Small team means real responsibility. You'll ship things with your fingerprints on them, talk to actual clients, and see the effect of your work on an actual business — fast.",
  },
  {
    title: "Learn in public",
    body: "We're building a technology company from scratch and we act like students of the craft: write things down, share what we learn, and let better arguments win regardless of who makes them.",
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
        title={
          <>
            We&apos;re building a company{" "}
            <span className="text-accent italic">worth building</span>.
          </>
        }
        lede="Magle Digital is small on purpose and ambitious on purpose: a technology company that starts from basics, sweats the craft, and builds in-house software that real businesses run on. This is how we work — and an open door if you'd like to work this way too."
      />

      {/* Values */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl">The principles we hire for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <p className="font-serif text-lg text-accent italic">
                  0{i + 1}
                </p>
                <h3 className="mt-2 text-lg font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working here */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>Working here</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight">
                Early-stage, honestly stated
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                We won&apos;t dress it up: this is the ground floor. That means
                no corporate perks catalogue — and it also means your work
                isn&apos;t a rounding error. The people who join now aren&apos;t
                employees of a big machine; they&apos;re the reason the machine
                exists later.
              </p>
              <ul className="mt-8 space-y-4">
                {workingHere.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="self-start rounded-2xl border border-line bg-surface p-8">
              <p className="font-serif text-2xl leading-snug">
                &ldquo;We want Magle to be the place where{" "}
                <span className="text-accent italic">
                  serious people do their best work
                </span>{" "}
                — and where a small business owner anywhere can afford the
                result.&rdquo;
              </p>
              <footer className="mt-5 text-sm text-muted">
                — Why we&apos;re building this
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Join us</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight">
                Introduce yourself
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                We don&apos;t post job ads and wait. If you design, engineer,
                grow or care for clients at a high standard — and the way we
                work resonates — we want to hear from you before we &ldquo;need&rdquo;
                you. The strongest teams are assembled from people you already
                know you want.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                No CV required at this stage. Show us one thing you&apos;ve
                made and tell us why it&apos;s good. That tells us more than
                two pages of bullet points ever could.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

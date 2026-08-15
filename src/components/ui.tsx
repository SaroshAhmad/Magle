import Link from "next/link";
import { HeroReveal, Reveal } from "@/components/motion";

/** Small numbered/mono label, KOTA-style: "01 — Services" */
export function Label({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: string;
}) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
      {index && <span className="text-accent">{index} — </span>}
      {children}
    </p>
  );
}

/** Section title with size play: small word + huge word, one line each */
export function SectionTitle({
  small,
  big,
  className = "",
}: {
  small: string;
  big: string;
  className?: string;
}) {
  return (
    <h2 className={`display ${className}`}>
      <span className="block text-2xl font-semibold sm:text-3xl">{small}</span>
      <span className="block text-6xl sm:text-8xl">{big}</span>
    </h2>
  );
}

export function ComingSoonBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${
        dark ? "bg-lime text-ink" : "bg-ink text-background"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-ink" : "bg-lime"}`} />
      Coming soon
    </span>
  );
}

export function PillButton({
  href,
  children,
  variant = "ink",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "ink" | "accent" | "outline" | "cream";
  className?: string;
}) {
  const styles = {
    ink: "bg-ink text-background hover:bg-accent hover:text-background",
    accent: "bg-accent text-background hover:bg-ink",
    outline:
      "border-2 border-ink text-ink hover:bg-ink hover:text-background",
    cream: "bg-background text-ink hover:bg-accent hover:text-background",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Page hero with animated line reveal + typographic scale play */
export function PageHero({
  eyebrow,
  lines,
  lede,
}: {
  eyebrow: string;
  /** each entry renders as one masked reveal line */
  lines: React.ReactNode[];
  lede: string;
}) {
  return (
    <section className="border-b border-line">
      <HeroReveal className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="hero-fade">
          <Label index="✦">{eyebrow}</Label>
        </div>
        <h1 className="display mt-6 text-[13vw] leading-[0.95] sm:text-7xl lg:text-8xl">
          {lines.map((line, i) => (
            <span key={i} className="reveal-line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {lede}
        </p>
      </HeroReveal>
    </section>
  );
}

/** Big pre-footer call to action */
export function CtaBand({
  title,
  body,
  buttonLabel = "Start a project",
  href = "/contact",
}: {
  title: string;
  body: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <h2 className="display-black mx-auto text-6xl sm:text-8xl lg:text-9xl">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            {body}
          </p>
          <div className="mt-10">
            <PillButton href={href} variant="accent" className="px-10 py-5 text-base">
              {buttonLabel} <span aria-hidden>→</span>
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

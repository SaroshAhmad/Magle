import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

export function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Coming soon
    </span>
  );
}

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
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          {body}
        </p>
        <Link
          href={href}
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
}) {
  return (
    <section className="hero-glow border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {lede}
        </p>
      </div>
    </section>
  );
}

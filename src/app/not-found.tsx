import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-glow">
      <div className="mx-auto max-w-6xl px-5 py-32 text-center">
        <p className="font-serif text-7xl text-accent italic">404</p>
        <h1 className="mt-4 font-serif text-3xl">This page doesn&apos;t exist.</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The link may be old, or the page may have moved. Everything we offer
          is one click from the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

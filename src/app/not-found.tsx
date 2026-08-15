import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-32 text-center">
        <p className="display-black grad-text text-[30vw] leading-none sm:text-[14rem]">
          404
        </p>
        <h1 className="display mt-2 text-4xl">
          This page doesn&apos;t <span className="outline-text">exist.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
          The link may be old, or the page may have moved. Everything we offer
          is one click from the homepage.
        </p>
        <Link
          href="/"
          className="btn-grad mt-9 inline-block rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Back to home →
        </Link>
      </div>
    </section>
  );
}

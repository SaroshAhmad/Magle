import Link from "next/link";
import { products, services } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] bg-ink text-background sm:rounded-t-[4rem]">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:pt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/60">
            <span className="text-accent">✦</span> Got a project in mind?
          </p>
          <Link
            href="/contact"
            className="display-black group mt-4 block text-[16vw] leading-[0.9] transition-colors hover:text-accent sm:text-9xl lg:text-[11rem]"
          >
            Let&apos;s talk
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">
              →
            </span>
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-background/15 pt-12 md:grid-cols-4">
          <div>
            <p className="display text-2xl">
              magle<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">
              Websites, brands and in-house software for businesses that run on
              customers, not spreadsheets.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/50">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/50">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/50">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/culture"
                  className="text-sm text-background/70 transition-colors hover:text-accent"
                >
                  Culture &amp; Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-background/70 transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-background/15 pt-6 font-mono text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Magle Digital. All rights reserved.</p>
          <p>UK ✦ India ✦ Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

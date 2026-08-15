import Link from "next/link";
import { products, services } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-dark text-white sm:rounded-t-[4rem]">
      {/* luminous accents */}
      <div
        aria-hidden
        className="orb -top-24 right-[10%] h-96 w-96 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #6366f1, rgba(99,102,241,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="orb bottom-0 left-[5%] h-80 w-80 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #22d3ee, rgba(34,211,238,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:pt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">
            <span className="grad-text">✦</span> Got a project in mind?
          </p>
          <Link
            href="/contact"
            className="display-black group mt-4 block text-[16vw] leading-[0.9] sm:text-9xl lg:text-[11rem]"
          >
            <span className="transition-colors duration-300 group-hover:text-transparent group-hover:[background:linear-gradient(95deg,#818cf8,#22d3ee,#f472b6)] group-hover:[background-clip:text]">
              Let&apos;s talk
            </span>
            <span className="grad-text inline-block transition-transform duration-300 group-hover:translate-x-4">
              →
            </span>
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-white/15 pt-12 md:grid-cols-4">
          <div>
            <p className="display text-2xl">
              magle<span className="grad-text">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Websites, brands and in-house software for businesses that run on
              customers, not spreadsheets.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-cyan"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-cyan"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/culture"
                  className="text-sm text-white/70 transition-colors hover:text-cyan"
                >
                  Culture &amp; Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-cyan"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 font-mono text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Magle Digital. All rights reserved.</p>
          <p>UK ✦ India ✦ Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

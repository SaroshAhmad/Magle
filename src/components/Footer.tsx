import Link from "next/link";
import { products, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-xl">
              Magle <span className="text-accent italic">Digital</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Websites, brands and in-house software for businesses that run on
              customers, not spreadsheets.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/culture"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Culture &amp; Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Magle Digital. All rights reserved.</p>
          <p>Serving clients in the UK, India and beyond.</p>
        </div>
      </div>
    </footer>
  );
}

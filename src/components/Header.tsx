"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/culture", label: "Culture" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <Link
          href="/"
          className="display text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          magle<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                  active
                    ? "bg-ink text-white"
                    : "text-ink hover:bg-accent/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 rounded-full btn-grad px-5 py-2.5 font-display text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-ink transition-transform ${
                open ? "top-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-ink transition-transform ${
                open ? "bottom-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-background px-5 pb-8 pt-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="display block py-3 text-4xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full btn-grad px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            Start a project →
          </Link>
        </nav>
      )}
    </header>
  );
}

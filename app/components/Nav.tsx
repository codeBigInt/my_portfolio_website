"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#writing", label: "Articles" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="relative mx-auto max-w-3xl">
        <nav className="flex items-center justify-between gap-6 rounded-full border border-ink/10 bg-paper/70 px-5 py-3 shadow-[0_8px_30px_rgba(20,20,20,0.08)] backdrop-blur-xl">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.15em] text-ink"
          >
            Elliot Lucky
          </a>

          <ul className="hidden items-center gap-7 text-sm text-ink/60 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/cv"
            className="hidden rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-paper transition-opacity hover:opacity-80 md:inline-block"
          >
            CV
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/20 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-4 bg-ink transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {open && (
          <ul className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-ink/10 bg-paper/90 px-5 py-4 text-sm shadow-[0_8px_30px_rgba(20,20,20,0.08)] backdrop-blur-xl md:hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink/70 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-ink px-4 py-2 text-center text-xs font-medium uppercase tracking-wider text-paper"
              >
                CV
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

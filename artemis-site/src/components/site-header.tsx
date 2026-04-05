"use client";

import Link from "next/link";
import { useState } from "react";
import { siteNavigation } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Artemis II
          </Link>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-300/40 hover:bg-sky-400/10 md:hidden"
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav className="hidden flex-wrap gap-3 text-sm text-slate-200 md:flex">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 leading-none transition hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {open ? (
          <nav id="site-mobile-nav" className="mt-4 grid gap-2 md:hidden">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 transition hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

import Link from "next/link";
import { ReactNode } from "react";
import { siteNavigation } from "@/content/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(92,140,255,0.22),_transparent_30%),linear-gradient(180deg,_#050816_0%,_#08101f_45%,_#03060f_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.7)_0.7px,transparent_0.7px)] [background-size:30px_30px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,31,0.2)_0%,rgba(8,16,31,0.75)_100%)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Artemis II
          </Link>
          <nav className="hidden gap-6 text-sm text-slate-200 lg:flex">
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-sky-300">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-300 lg:px-10">
          <p className="max-w-3xl leading-7">
            A commemorative editorial site exploring Artemis II, its crew, its place in lunar history, and the missions it is meant to unlock.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 lg:pt-28">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{eyebrow}</p>
      <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{intro}</p>
    </section>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-8 h-px w-24 bg-sky-400/50" />
      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">{children}</div>
    </section>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export function GlassCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(41,98,255,0.08)] backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{body}</p>
    </article>
  );
}

export function StatGrid({ items }: { items: readonly { label: string; value: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{item.label}</p>
          <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

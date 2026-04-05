import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, GlassCard, PageHero, Section, StatGrid } from "@/components/site-shell";
import { homeHighlights, missionStats, siteNavigation } from "@/content/site";

export const metadata: Metadata = {
  title: "Artemis II Guide | Crew, Mission, Apollo 8 Comparison, and Future Missions",
  description:
    "A readable guide to Artemis II covering the crew, mission profile, Apollo 8 comparison, Artemis technology, and what Artemis II means for Artemis III and future lunar missions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artemis II Guide | Crew, Mission, Apollo 8 Comparison, and Future Missions",
    description:
      "A readable guide to Artemis II covering the crew, mission profile, Apollo 8 comparison, Artemis technology, and what Artemis II means for Artemis III and future lunar missions.",
    url: "https://artemis.endless-summer.online/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis II Guide | Crew, Mission, Apollo 8 Comparison, and Future Missions",
    description:
      "A readable guide to Artemis II covering the crew, mission profile, Apollo 8 comparison, Artemis technology, and future missions.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28 xl:gap-20">
        <div>
          <PageHero
            eyebrow="Artemis II"
            title="A return to crewed lunar flight, and the beginning of a new era beyond Earth orbit"
            intro="Artemis II stands at a rare hinge-point in spaceflight history. Artemis 2 is not only NASA’s first crewed Artemis mission, but also the first time since the Apollo era that astronauts will leave the near-Earth environment and head out on a lunar trajectory. As a mission, it is both a test and a statement: a demonstration that the systems built for a new generation of deep-space exploration are ready to carry human beings around the Moon and safely home again."
          />
        </div>
        <aside className="relative self-center lg:pt-10">
          <div className="absolute -inset-5 rounded-[2rem] bg-sky-400/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-sky-300/20 bg-sky-300/10 blur-2xl" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(56,189,248,0.15)] backdrop-blur-sm">
            <img
              src="/artemis-2-crew-portrait.jpg"
              alt="Official Artemis II crew portrait featuring Christina Koch, Victor Glover, Reid Wiseman, and Jeremy Hansen"
              className="h-full w-full object-cover"
            />
            <figcaption className="border-t border-white/10 bg-slate-950/80 px-5 py-4 text-sm leading-6 text-slate-300">
              Official Artemis II crew portrait. Source: 
              <a
                href="https://commons.wikimedia.org/wiki/File:Artemis_2_Crew_Portrait.jpg"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 transition hover:text-sky-200"
              >
                Wikimedia Commons
              </a>
            </figcaption>
          </figure>
        </aside>
      </section>

      <Section title="Why Artemis II matters">
        <p>
          Some missions are remembered because they achieve a visible first. Others matter because they make later triumphs possible. Artemis II belongs to the second category, even as it carries historic firsts of its own. It is designed as a proving flight for the spacecraft, launch system, crew procedures, and mission operations that NASA and its international partners intend to rely on for future expeditions deeper into cislunar space and, eventually, onto the lunar surface. Without a mission like this, later ambitions would remain theoretical. For anyone searching for what Artemis II is, why Artemis 2 matters, or how the mission fits into NASA’s lunar program, this is the core answer.
        </p>
        <p>
          The significance of Artemis II also comes from timing. For more than half a century, no crewed mission has ventured out toward the Moon. Human spaceflight has remained extraordinary, but it has also been geographically bounded, concentrated in low Earth orbit through the Space Shuttle era and then through decades of work aboard the International Space Station. Artemis II marks a widening of that horizon. It asks whether the technologies, training, and operational discipline of the present day are ready for the harsher, less forgiving realm beyond Earth orbit.
        </p>
        <p>
          The mission carries a symbolic weight as well. Its four-person crew reflects a broader and more representative story of human exploration than the one told in the 1960s. It includes the first woman assigned to a lunar mission, the first Black astronaut assigned to a lunar mission, and the first Canadian assigned to a lunar mission. Those milestones matter not as decoration, but because they signal that the next age of exploration is being imagined differently from the last. Artemis II is both a technical rehearsal and a cultural marker, a mission about capability, continuity, and change all at once.
        </p>
      </Section>

      <Section title="Mission at a glance">
        <StatGrid items={missionStats} />
        <div className="rounded-[2rem] border border-sky-300/20 bg-sky-400/10 p-6 shadow-[0_0_60px_rgba(56,189,248,0.12)] backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Live mission tracker</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4 text-base leading-7 text-slate-200">
              <h3 className="text-2xl font-semibold text-white">Follow Artemis II’s current position around the Moon</h3>
              <p>
                The site now includes a dedicated Artemis II live tracker showing the current mission phase, Orion’s distance from Earth, distance from the Moon, and live mission status updates while the flight is under way. If you are searching for an Artemis II tracker, a way to see where Orion is now, or a readable mission status page during the lunar flyby, start there.
              </p>
            </div>
            <div>
              <Link
                href="/live-tracker"
                className="inline-flex rounded-2xl border border-sky-300/30 bg-slate-950/60 px-5 py-4 text-base font-medium text-white transition hover:border-sky-300/50 hover:bg-sky-300/10 hover:text-sky-100"
              >
                Open the Live Tracker
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p>
              NASA plans Artemis II as an approximately ten-day mission built around a lunar flyby trajectory. After launch aboard the Space Launch System, the Orion spacecraft will enter Earth orbit, carry out early checkouts and demonstrations, and then depart for the Moon. The crew will travel out through deep space, pass around the far side of the Moon on a free-return trajectory, and come back to Earth for reentry and splashdown in the Pacific.
            </p>
            <p>
              That sequence may sound straightforward in summary, but its importance lies in what it tests. Artemis II is meant to prove that Orion can support a crew in deep space, that navigation and communications can be managed across cislunar distances, that manual spacecraft operations can be performed when required, and that reentry and recovery can be executed with the confidence demanded of a crewed system. In practical terms, the mission is NASA’s opportunity to learn with astronauts on board before any attempt is made to land people on the Moon again.
            </p>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-sm">
              <div className="border-b border-white/10 px-6 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Flight path</p>
              </div>
              <img
                src="/lunar-flyby-diagram.svg"
                alt="Diagram showing Artemis II traveling from Earth to the Moon and back on a free-return trajectory"
                className="w-full"
              />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(167,139,250,0.08)] backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Explore the site</p>
              <ul className="mt-5 space-y-4">
                {siteNavigation
                  .filter((item) => item.href !== "/")
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-base text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="A mission framed by history, but not trapped by it">
        <CardGrid>
          {homeHighlights.map((item) => (
            <GlassCard key={item.title} title={item.title} body={item.body} />
          ))}
        </CardGrid>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p>
              Artemis II will inevitably be read against Apollo, especially Apollo 8, the 1968 mission that first carried human beings away from Earth and into the Moon’s neighborhood. That comparison is necessary and useful, but it should not flatten the differences between the two eras. Apollo emerged from the intense geopolitical competition of the Cold War and raced toward a near-term demonstration of national power. Artemis is being built in a different context: slower, more international, more systems-oriented, and more explicitly intended as the start of an enduring campaign rather than a single sprint to a flag-and-footprints moment.
            </p>
            <p>
              That distinction matters because Artemis II is not simply reenactment. It is the beginning of a different architecture for exploration, one that links launch systems, spacecraft, lunar operations, partner agencies, and future surface missions into a broader program. The site that follows is built around that idea. It is meant to give each piece of the story room to breathe: the astronauts themselves, the mission profile, the Apollo legacy that still shapes public understanding, the technology that has changed since the 1960s, and the next steps that Artemis II is intended to unlock.
            </p>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(56,189,248,0.1)] backdrop-blur-sm lg:mt-2">
            <img
              src="/earthrise-apollo-8.jpg"
              alt="Earthrise photograph taken during Apollo 8"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="border-t border-white/10 bg-slate-950/80 px-5 py-4 text-sm leading-6 text-slate-300">
              Apollo 8’s Earthrise remains one of the defining images behind every modern comparison between Apollo and Artemis. Source: 
              <a
                href="https://commons.wikimedia.org/wiki/File:AS08-14-2383.jpg"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 transition hover:text-sky-200"
              >
                Wikimedia Commons
              </a>
            </figcaption>
          </figure>
        </div>
      </Section>
    </>
  );
}

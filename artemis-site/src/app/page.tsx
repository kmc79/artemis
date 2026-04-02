import Link from "next/link";
import { CardGrid, GlassCard, PageHero, Section, StatGrid } from "@/components/site-shell";
import { homeHighlights, missionStats, siteNavigation } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Artemis II"
        title="A return to crewed lunar flight, and the beginning of a new era beyond Earth orbit"
        intro="Artemis II stands at a rare hinge-point in spaceflight history. It is not only NASA’s first crewed Artemis mission, but also the first time since the Apollo era that astronauts will leave the near-Earth environment and head out on a lunar trajectory. As a mission, it is both a test and a statement: a demonstration that the systems built for a new generation of deep-space exploration are ready to carry human beings around the Moon and safely home again."
      />

      <Section title="Why Artemis II matters">
        <p>
          Some missions are remembered because they achieve a visible first. Others matter because they make later triumphs possible. Artemis II belongs to the second category, even as it carries historic firsts of its own. It is designed as a proving flight for the spacecraft, launch system, crew procedures, and mission operations that NASA and its international partners intend to rely on for future expeditions deeper into cislunar space and, eventually, onto the lunar surface. Without a mission like this, later ambitions would remain theoretical.
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
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p>
              NASA plans Artemis II as an approximately ten-day mission built around a lunar flyby trajectory. After launch aboard the Space Launch System, the Orion spacecraft will enter Earth orbit, carry out early checkouts and demonstrations, and then depart for the Moon. The crew will travel out through deep space, pass around the far side of the Moon on a free-return trajectory, and come back to Earth for reentry and splashdown in the Pacific.
            </p>
            <p>
              That sequence may sound straightforward in summary, but its importance lies in what it tests. Artemis II is meant to prove that Orion can support a crew in deep space, that navigation and communications can be managed across cislunar distances, that manual spacecraft operations can be performed when required, and that reentry and recovery can be executed with the confidence demanded of a crewed system. In practical terms, the mission is NASA’s opportunity to learn with astronauts on board before any attempt is made to land people on the Moon again.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Explore the site</p>
            <div className="mt-5 space-y-4">
              {siteNavigation.filter((item) => item.href !== "/").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 px-4 py-4 text-base text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
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
        <p>
          Artemis II will inevitably be read against Apollo, especially Apollo 8, the 1968 mission that first carried human beings away from Earth and into the Moon’s neighborhood. That comparison is necessary and useful, but it should not flatten the differences between the two eras. Apollo emerged from the intense geopolitical competition of the Cold War and raced toward a near-term demonstration of national power. Artemis is being built in a different context: slower, more international, more systems-oriented, and more explicitly intended as the start of an enduring campaign rather than a single sprint to a flag-and-footprints moment.
        </p>
        <p>
          That distinction matters because Artemis II is not simply reenactment. It is the beginning of a different architecture for exploration, one that links launch systems, spacecraft, lunar operations, partner agencies, and future surface missions into a broader program. The site that follows is built around that idea. It is meant to give each piece of the story room to breathe: the astronauts themselves, the mission profile, the Apollo legacy that still shapes public understanding, the technology that has changed since the 1960s, and the next steps that Artemis II is intended to unlock.
        </p>
      </Section>
    </>
  );
}

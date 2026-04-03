import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/site-shell";
import { sourceGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "Artemis II Sources | NASA, CSA, Apollo, and Historical References",
  description:
    "Browse the primary NASA, CSA, and historical sources behind this Artemis II site, including mission pages, crew materials, and Apollo references.",
  alternates: {
    canonical: "/sources",
  },
  openGraph: {
    title: "Artemis II Sources | NASA, CSA, Apollo, and Historical References",
    description:
      "Browse the primary NASA, CSA, and historical sources behind this Artemis II site.",
    url: "https://artemis.endless-summer.online/sources",
    type: "article",
  },
};

export default function SourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sources"
        title="This site is built from primary NASA material, crew and partner sources, and carefully chosen historical context"
        intro="A site like this works only if readers can see where its claims come from. Artemis II sits at the intersection of current mission planning, astronaut biography, program architecture, and Apollo-era history, so the source base has to do more than provide a few links at the bottom of the page. It has to show the difference between direct mission material, contextual reporting from participating agencies, and historical sources that help frame the comparison with Apollo."
      />

      <Section title="How to read these sources">
        <p>
          The strongest foundation for the site is NASA’s own mission and vehicle material. Those pages establish the official framing of Artemis II, Orion, and the Space Launch System, and they provide the baseline facts for mission length, vehicle roles, crew announcements, and published objectives. They do not answer every interpretive question, but they are the right place to start when describing what the mission is designed to do.
        </p>
        <p>
          Crew interviews and partner-agency biographies add a different kind of value. They help explain how the astronauts describe their work, what symbolic and operational roles they occupy, and how international participation appears from outside NASA alone. Apollo-era sources matter for another reason. They make it possible to compare Artemis II with earlier lunar missions without relying only on vague cultural memory. Taken together, the groups below show the evidence base behind the site’s narrative choices.
        </p>
      </Section>

      {sourceGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="space-y-4">
            {group.items.map((item) => (
              <article key={item.href} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block break-all text-base leading-7 text-sky-300 transition hover:text-sky-200"
                >
                  {item.href}
                </Link>
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Why source transparency matters here">
        <p>
          Artemis II is the kind of mission that attracts easy mythmaking. It sits close enough to Apollo to invite broad historical claims, and it carries enough political, technological, and symbolic weight that people often flatten it into a headline rather than a carefully defined mission profile. A transparent source page helps resist that. It shows readers which claims come from published mission material, which interpretations are grounded in astronaut and partner commentary, and which historical comparisons are supported by archival sources.
        </p>
        <p>
          That transparency also suits the tone of the site. This project is not trying to overwhelm visitors with an academic apparatus, but it is trying to earn trust. If a page argues that Artemis II is structurally comparable to Apollo 8, or that the crew represents a broader international and social story than earlier lunar missions did, readers should be able to trace those claims back to the materials that informed them.
        </p>
        <p>
          In short, the source list is not decorative. It is part of the site’s credibility. It gives the editorial narrative a visible foundation and gives readers a path to continue exploring the story on their own.
        </p>
      </Section>
    </>
  );
}

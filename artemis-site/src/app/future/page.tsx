import type { Metadata } from "next";
import { PageHero, Section } from "@/components/site-shell";
import { futureMilestones } from "@/content/site";

export const metadata: Metadata = {
  title: "What Comes After Artemis II? | Artemis III, Lunar Return, and Future Missions",
  description:
    "See what Artemis II is meant to unlock for Artemis III, future lunar missions, and the longer-term direction of NASA's Artemis program.",
  alternates: {
    canonical: "/future",
  },
  openGraph: {
    title: "What Comes After Artemis II? | Artemis III, Lunar Return, and Future Missions",
    description:
      "What Artemis II is meant to unlock for Artemis III, future lunar missions, and the longer-term Artemis campaign.",
    url: "https://artemis.endless-summer.online/future",
    type: "article",
  },
};

const futureQuestions = [
  {
    question: "Why does Artemis II matter so much if Artemis III is the mission expected to land?",
    answer:
      "Because landing plans are only as credible as the transportation and mission system beneath them. Artemis II is the flight that puts a real crew inside Orion, sends them around the Moon, and tests whether the larger architecture behaves the way NASA needs it to behave before accepting the added complexity of a landing attempt.",
  },
  {
    question: "What would Artemis III represent if it succeeds?",
    answer:
      "Artemis III would represent more than a return to the lunar surface. It would mark the point at which Artemis stops being primarily a proving program and starts demonstrating repeated operational capability. In public memory it would likely stand as the flagship landing mission, but within the program it would also be evidence that the earlier test missions did their job.",
  },
  {
    question: "Why does NASA talk so much about sustainability and long-term presence?",
    answer:
      "Because Artemis is not being framed as a one-time revisit. NASA and its partners are trying to build a campaign rather than a single triumph: repeated missions, broader science goals, international participation, and operational lessons that can matter for deeper exploration later on. Whether that ambition is fully realized remains to be seen, but it shapes the way the current missions are designed and justified.",
  },
];

export default function FuturePage() {
  return (
    <>
      <PageHero
        eyebrow="Future / Artemis III"
        title="Artemis II matters because it is supposed to make the missions after it operationally believable"
        intro="The future section of an Artemis II site has to do more than gesture vaguely toward ‘what comes next.’ It needs to explain why this mission exists inside a larger sequence and why Artemis III, in particular, carries such weight. Artemis II is a proving flight. Artemis III is the mission expected to attempt the return of astronauts to the lunar surface. That relationship gives the current mission much of its meaning. If readers are searching for what comes after Artemis II or how Artemis 2 connects to Artemis III, this is the page that addresses it directly. Artemis II is not important despite being preparatory. It is important because future ambitions depend on whether this step works."
      />

      <Section title="Why Artemis III sits at the center of the near future">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p>
              In the public imagination, Artemis III is likely to become the most recognizable early Artemis mission because it is associated with the return of humans to the Moon’s surface. That visibility is understandable. Surface missions concentrate attention in a way flybys and proving flights rarely do. People remember landings. They remember footsteps, images, and moments that seem to resolve a long narrative arc.
            </p>
            <p>
              But Artemis III only makes sense if the path leading to it has been made credible. That is why Artemis II matters so much. It is the mission that tests whether Orion can support a crew in deep space, whether mission control and recovery operations can function coherently in a full crewed lunar profile, and whether the broader Artemis architecture looks dependable enough to support even more complex objectives. Artemis III may get the spotlight, but Artemis II is one of the missions that earns it.
            </p>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-sm lg:mt-2">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Campaign roadmap</p>
            </div>
            <img
              src="/artemis-future-roadmap.svg"
              alt="Diagram showing Artemis II leading into Artemis III and a longer lunar campaign"
              className="w-full"
            />
          </figure>
        </div>
      </Section>

      <Section title="What the next phase of Artemis is meant to unlock">
        <div className="space-y-6">
          {futureMilestones.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
        <p>
          Taken together, these milestones show that Artemis is trying to do something more layered than simply revisiting Apollo’s most famous achievement. The program is being presented as a chain of missions in which each step reduces uncertainty for the next one. Artemis II demonstrates crewed transportation. Artemis III aims to convert that confidence into a landing attempt. Later phases are meant to build persistence, repeatability, and experience that can matter beyond the Moon.
        </p>
      </Section>

      <Section title="The Moon as destination and proving ground">
        <p>
          One of the defining ideas behind Artemis is that the Moon is not only a place to go, but also a place to learn. It is close enough to be operationally reachable and distant enough to force spacecraft, crews, and planners to confront many of the realities of deep-space exploration. Communications delays, mission duration, life-support reliability, navigation at scale, surface operations, and international coordination all become more demanding once missions move beyond low Earth orbit.
        </p>
        <p>
          That is why the future of Artemis is often described in two voices at once. One voice is lunar: return to the surface, conduct science, and establish a more durable human presence. The other is preparatory: use the Moon and cislunar space to develop habits, systems, and infrastructure that may matter for later exploration farther into the solar system. Whether every part of that broader vision is realized is still an open question, but the program’s current logic depends on that dual purpose.
        </p>
      </Section>

      <Section title="Questions that shape the missions after Artemis II">
        <div className="space-y-6">
          {futureQuestions.map((item) => (
            <article key={item.question} className="rounded-3xl border border-white/10 bg-slate-950/45 p-6">
              <h3 className="text-2xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Why the future belongs on an Artemis II site">
        <p>
          A site focused on Artemis II would feel incomplete if it treated the mission as a self-contained event. Its whole purpose is relational. The flight matters because it connects past and future, Apollo and Artemis, proving mission and landing attempt, symbolic return and longer exploration strategy. To explain Artemis II honestly is to explain what NASA hopes it will make possible.
        </p>
        <p>
          That does not mean the future should be presented as guaranteed. Schedules move, hardware programs struggle, budgets change, and ambitions are often tested by political reality. But uncertainty does not make the future section optional. It makes it necessary. The meaning of Artemis II depends on the fact that it is trying to carry a larger program from promise into demonstrated capability.
        </p>
        <p>
          In that sense, Artemis III is not just the next mission on a timeline. It is the question hanging over Artemis II from the beginning: does this flight make the return to the Moon feel operationally real? If it does, then Artemis II will have done exactly the job it was built to do.
        </p>
      </Section>
    </>
  );
}

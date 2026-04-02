import { PageHero, Section } from "@/components/site-shell";
import { technologyComparison } from "@/content/site";

export default function TechnologyComparisonPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Comparison"
        title="Artemis II uses modern systems, but its real significance comes from how differently the whole mission is organized"
        intro="Comparisons between Artemis and Apollo often start with hardware, which makes sense. Both programs send crews toward the Moon, and both rely on capsules, mission control, and carefully staged flight profiles. But the more revealing comparison is not just which spacecraft has newer electronics. It is how the tools, interfaces, software, operational methods, and institutional structure of lunar flight have changed across more than half a century. Artemis II is not simply Apollo with upgraded parts. It reflects a different era of engineering, safety expectations, and international cooperation."
      />

      <Section title="Why the technology comparison matters">
        <p>
          Looking at Apollo and Artemis side by side helps clarify what Artemis II is actually testing. Apollo proved that human beings could reach the Moon with the tools available in the 1960s, which remains one of the most impressive engineering achievements in modern history. Artemis II operates from a very different baseline. Computing is radically more capable, software development is more mature, mission planning is more deeply modeled, and spacecraft interfaces are designed around a different understanding of human-machine interaction.
        </p>
        <p>
          Yet the comparison is useful only if it avoids the lazy conclusion that newer automatically means more meaningful. Apollo’s systems were constrained, but they were also elegant, disciplined, and astonishingly effective within their limits. Artemis benefits from modern tools, but it also carries the weight of higher expectations, broader partnership structures, and a program architecture intended to support repeated missions rather than a single sprint to victory. The question is not which era built the more impressive gadget. It is how each era designed technology around the kind of lunar program it was trying to achieve.
        </p>
      </Section>

      <Section title="Apollo and Artemis side by side">
        <div className="space-y-6">
          {technologyComparison.map((item) => (
            <article key={item.category} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{item.category}</p>
              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Apollo era</p>
                  <p className="mt-4 text-base leading-8 text-slate-300">{item.apollo}</p>
                </div>
                <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Artemis era</p>
                  <p className="mt-4 text-base leading-8 text-slate-100">{item.artemis}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Computing changed the spacecraft, but also the way people think about risk">
        <p>
          The most obvious difference between Apollo and Artemis is computing power. Apollo crews flew with systems so limited by modern standards that every byte of memory and every line of code had to justify itself. That scarcity created a style of engineering that prized efficiency, procedural clarity, and intense discipline between software, hardware, and crew operations. Apollo’s success was not evidence that limited computing was ideal; it was evidence that extraordinary rigor can compensate for severe constraints.
        </p>
        <p>
          Artemis II benefits from a completely different landscape. Orion’s computers, displays, and software environment allow richer information handling, better fault management, and more flexible system integration. But the deeper shift is not just computational abundance. It is that modern missions are expected to model, test, and monitor risk in far more layered ways. Digital tools enable more simulation, more diagnostic data, and more opportunities to refine operations before and during flight. Artemis does not escape uncertainty, but it confronts that uncertainty with a different toolkit and a different institutional attitude toward safety.
        </p>
      </Section>

      <Section title="Crew experience is shaped by interface design as much as by propulsion">
        <p>
          One of the most human differences between the two eras lies in the cockpit. Apollo crews worked through dense arrays of switches, lights, and controls that demanded memorization and highly trained interpretation. Those interfaces suited the hardware and mission logic of their time, but they also placed heavy cognitive demands on astronauts during already intense phases of flight.
        </p>
        <p>
          Orion’s glass cockpit represents a different philosophy. Information can be organized more dynamically, displays can present system state with greater clarity, and the crew’s interaction with the spacecraft is built around modern expectations of situational awareness. That does not make Artemis II simple. Lunar flight remains unforgiving. But it means the crew is supported by interface design that reflects decades of learning about how humans absorb information, prioritize decisions, and manage workload under pressure.
        </p>
        <p>
          This matters because Artemis II is a crewed test mission. The spacecraft is not only being evaluated as a vehicle that can fly, but as a place where astronauts can work effectively across launch, deep-space cruise, lunar flyby, and reentry preparation. Technology is not only what moves the crew. It is also what helps the crew think.
        </p>
      </Section>

      <Section title="Program architecture may be the biggest difference of all">
        <p>
          The most consequential gap between Apollo and Artemis may not be any individual subsystem. It may be the fact that Apollo was a concentrated national project designed to achieve a clear geopolitical goal quickly, while Artemis is a distributed campaign built across agencies, contractors, and international partners. Orion itself reflects that structure through the European-built service module, and the Artemis II crew reflects it through Canadian participation.
        </p>
        <p>
          That broader architecture changes what the technology is for. Apollo technology served a race. Artemis technology is meant to support recurrence: more missions, more partner integration, and a wider exploration agenda that stretches from lunar flybys to surface operations and beyond. That slower, more networked structure can look less dramatic from the outside, but it may prove more durable if it works as intended.
        </p>
        <p>
          In that sense, Artemis II is not just a test of hardware. It is a test of whether a modern, multinational exploration system can operate coherently when real astronauts are on board and the mission moves beyond Earth orbit. The technology comparison matters because it shows that Artemis is trying to prove more than a capsule. It is trying to prove an entire way of doing lunar exploration.
        </p>
      </Section>
    </>
  );
}

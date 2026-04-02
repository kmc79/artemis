import { PageHero, Section, StatGrid } from "@/components/site-shell";
import { missionStats } from "@/content/site";

const missionTimeline = [
  {
    day: "Flight Day 1",
    title: "Launch, Earth orbit, and early spacecraft operations",
    body:
      "Artemis II begins with launch from Kennedy Space Center aboard the Space Launch System. After ascent, Orion is placed into an initial Earth orbit, and the crew begins the first phase of the mission: checking spacecraft health, verifying displays and procedures, and transitioning from launch operations into crewed flight in deep-space hardware. NASA’s plan also includes a proximity operations demonstration using the spent upper stage as a reference target, giving the crew a chance to rehearse manual flying tasks that matter for future missions.",
  },
  {
    day: "Flight Day 2",
    title: "Departure burn and commitment to the lunar trajectory",
    body:
      "Once the initial orbital work is complete, Orion’s service module performs the burn that sends the spacecraft away from Earth and onto its outbound path toward the Moon. This translunar injection is the psychological hinge of the mission as much as the technical one. From that point onward, the crew is no longer circling close to home. They are entering the cislunar environment, where communications delay, navigation scale, and operational consequences all feel different from life in low Earth orbit.",
  },
  {
    day: "Flight Days 2–5",
    title: "Outbound coast through cislunar space",
    body:
      "The outbound phase gives mission controllers and crew time to evaluate Orion as a working deep-space habitat. This is where Artemis II earns its test-flight character. The spacecraft’s life-support systems, avionics, communications paths, and operational procedures have to work not just in theory or simulation, but in the lived reality of an astronaut crew moving farther from Earth. Small correction burns and routine checks help refine the path while also generating the practical knowledge that later missions will rely on.",
  },
  {
    day: "Around Flight Day 5",
    title: "Lunar flyby and far-side blackout",
    body:
      "As Orion approaches the Moon, the mission reaches its most historically resonant phase. Rather than entering lunar orbit, Artemis II is planned as a free-return flyby, taking the spacecraft around the Moon and letting lunar gravity bend its path back toward Earth. During the far-side passage, communications with Earth are temporarily interrupted, echoing one of the defining realities of deep-space flight: there are moments when the crew must operate without immediate conversation with the ground. The flyby is both visually dramatic and operationally meaningful, because it validates navigation, timing, and crew performance at the mission’s farthest point from Earth.",
  },
  {
    day: "Flight Days 6–10",
    title: "Return coast, reentry preparation, and splashdown",
    body:
      "After the Moon has redirected Orion toward home, the mission enters its return phase. This part of the flight is no less important than the outward journey. The crew and mission teams continue evaluating systems, preparing for reentry, and confirming that the spacecraft remains healthy after its deep-space excursion. Near Earth, Orion separates from its service module, enters the atmosphere at lunar-return speeds, endures plasma blackout and intense heating, deploys parachutes, and splashes down in the Pacific. Recovery operations then close the loop on the first full crewed Artemis flight.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Artemis II Mission"
        title="An approximately ten-day proving flight built to test Orion, validate operations, and carry astronauts around the Moon"
        intro="Artemis II is the mission in which the Artemis program stops being a matter of hardware demonstrations alone and becomes a human deep-space flight campaign. Its purpose is not simply to send a crew on a dramatic journey, but to verify that the spacecraft, launch vehicle, procedures, communications systems, and recovery operations required for later lunar missions can function together with astronauts on board. The result is a mission that is as much about disciplined testing as it is about symbolism."
      />

      <Section title="Mission overview">
        <StatGrid items={missionStats} />
        <p>
          NASA describes Artemis II as an approximately ten-day mission built around a lunar flyby. The spacecraft stack begins with the Space Launch System, the heavy-lift rocket designed to send Orion and its crew beyond low Earth orbit in a single launch. Once in space, Orion is planned to carry four astronauts through an early phase of Earth-orbit operations before heading onto a translunar trajectory that will take the spacecraft around the far side of the Moon and back to Earth on a free-return path.
        </p>
        <p>
          That broad outline is easy enough to summarize, but the deeper purpose of the mission lies in what it is trying to prove. Artemis II is NASA’s first opportunity to test Orion with a crew in the environment for which it was built. Life support, power, communications, navigation, manual handling, crew procedures, and recovery planning all need to be exercised under real mission conditions. The spacecraft must not only survive the trip; it must support human beings through it in a way that builds confidence for future missions that will go further in ambition and consequence.
        </p>
        <p>
          This is why Artemis II should be understood as a proving flight rather than a preliminary spectacle. It is the bridge between uncrewed demonstration and operational lunar exploration. If it succeeds, NASA and its partners gain more than a memorable mission. They gain verified experience, refined procedures, and the kind of institutional confidence that cannot be manufactured through simulation alone.
        </p>
      </Section>

      <Section title="What Artemis II is meant to test">
        <p>
          The mission’s test objectives sit at the heart of its identity. Orion must demonstrate that it can function as a crewed deep-space vehicle rather than simply a spacecraft that works on paper. That includes the environmental control and life-support systems that keep astronauts alive and functioning during the mission, the avionics and displays that allow the crew to understand spacecraft status, and the command pathways that support both automated and crew-directed operations. NASA also needs to learn how the actual rhythm of the mission feels with people inside the vehicle, because crewed missions generate practical demands that are different from those revealed by uncrewed flights.
        </p>
        <p>
          Artemis II is also intended to validate mission operations concepts. Communications and navigation in cislunar space operate at a different scale from missions in low Earth orbit. The crew will be farther away, operating with different timelines and different contingency assumptions. Manual control demonstrations are part of that picture as well. A future lunar architecture depends on astronauts being able to understand and, when necessary, directly manage spacecraft behavior. Demonstrating those skills during Artemis II turns abstract readiness into something observable.
        </p>
        <p>
          Reentry and recovery are equally important. Orion is designed to return from lunar velocities, which means its final phase is not just routine closure but a key test of heat shield performance, sequencing, parachute deployment, and recovery execution. A mission to the Moon is only complete if it ends with the crew safely back on Earth. Artemis II therefore has to prove the whole arc, not only the outbound glamour of heading toward the Moon.
        </p>
      </Section>

      <Section title="Flight profile and route">
        <p>
          The route Artemis II is expected to follow gives the mission much of its technical and historical interest. After launch, Orion is first placed into Earth orbit and then raised into a higher orbital regime where the crew can carry out initial checks and demonstrations. This early phase matters because it allows NASA to confirm spacecraft performance before committing the crew to the translunar leg. It also creates room for a planned proximity operations exercise, using the spent upper stage as a practical reference for manual piloting and spacecraft handling.
        </p>
        <p>
          From there, Orion departs Earth orbit and begins the outbound coast toward the Moon. Over the next several days, the crew and flight controllers monitor systems, make corrections as required, and continue learning how the vehicle behaves in deep space. Unlike Apollo 8, Artemis II is not planned to enter lunar orbit. Instead, it is designed around a free-return trajectory, meaning the spacecraft will swing around the Moon in such a way that lunar gravity naturally helps redirect it toward Earth. That choice reflects the mission’s test-flight logic: it provides a robust path that still exposes the crew and spacecraft to the essential realities of lunar-distance travel.
        </p>
        <p>
          NASA’s published mission materials describe the spacecraft traveling more than 230,000 miles from Earth and passing thousands of miles beyond the far side of the Moon. During the far-side portion of the flyby, communications with Earth are temporarily interrupted. That blackout will be brief in absolute terms, but conceptually important. It reminds everyone involved that once human beings leave near-Earth space, they also leave the continuous immediacy of terrestrial support. The route Artemis II follows is therefore not only a path through space. It is a structured encounter with the operational conditions of deep-space flight.
        </p>
      </Section>

      <Section title="Approximate mission timeline">
        <div className="space-y-6">
          {missionTimeline.map((item) => (
            <article key={item.day} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">{item.day}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
        <p>
          Any timeline for Artemis II has to be presented with a little humility, because mission details can shift with launch conditions and planning updates. Even so, the overall sequence is stable enough to explain clearly. The mission begins with launch and Earth-orbit operations, proceeds through translunar injection and outbound cruise, reaches its dramatic center at the lunar flyby, and ends with the return coast, reentry, and splashdown. This structure makes the mission readable to the public while also preserving the operational logic that gives it meaning.
        </p>
      </Section>

      <Section title="Why this mission matters before any landing attempt">
        <p>
          In public imagination, lunar missions are often judged by whether astronauts walk on the surface. By that standard, Artemis II might be misunderstood as an intermediate step rather than a defining mission in its own right. But a landing architecture without a reliable crewed transportation system is not an architecture at all; it is an aspiration. Artemis II exists to reduce uncertainty, sharpen operational understanding, and let a real crew test the systems that later missions will trust with even more demanding objectives.
        </p>
        <p>
          This is where the comparison with Apollo becomes useful, especially with Apollo 8. The earlier mission was remembered partly because it was dramatic and timely, but also because it demonstrated that the path to a landing could be made real. Artemis II plays a similar role for its own era, though in a different political and technological context. It is the flight that asks whether Orion, SLS, mission control, recovery teams, and the wider Artemis program can function together as a human lunar system rather than as separate pieces of promise.
        </p>
        <p>
          If Artemis II succeeds, its legacy will not be limited to photographs, headlines, or even the historical firsts represented by its crew. Its deeper achievement will be to convert a program of plans into a program of demonstrated human capability. That is why the mission deserves more than a quick summary. It is the disciplined center of the early Artemis story, the point at which ambition has to survive contact with reality and prove it can carry people safely through deep space.
        </p>
      </Section>
    </>
  );
}

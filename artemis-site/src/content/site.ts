export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/live-tracker", label: "Live Tracker" },
  { href: "/crew", label: "Crew" },
  { href: "/mission", label: "Mission" },
  { href: "/apollo-legacy", label: "Apollo Legacy" },
  { href: "/technology-comparison", label: "Technology" },
  { href: "/future", label: "Future" },
  { href: "/sources", label: "Sources" },
] as const;

export const homeHighlights = [
  {
    title: "The first crewed Artemis mission",
    body:
      "Artemis II is designed to prove that NASA’s Orion spacecraft and Space Launch System can carry astronauts safely beyond Earth orbit, around the Moon, and home again.",
  },
  {
    title: "A bridge between eras",
    body:
      "Like Apollo 8 before it, Artemis II is a proving mission. It does not aim to land, but to validate the systems, procedures, and confidence needed for the missions that follow.",
  },
  {
    title: "A mission with historical firsts",
    body:
      "The crew includes the first woman, the first Black astronaut, and the first Canadian assigned to a lunar mission, giving Artemis II a wider symbolic reach than any earlier deep-space flight.",
  },
] as const;

export const missionStats = [
  { label: "Mission length", value: "About 10 days" },
  { label: "Crew", value: "4 astronauts" },
  { label: "Destination", value: "Lunar flyby" },
  { label: "Launch vehicle", value: "SLS Block 1" },
] as const;

export const missionTimeline = [
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
] as const;

export const crewProfiles = [
  {
    name: "Reid Wiseman",
    role: "Commander",
    quote:
      "My role as commander on this mission is simply to take care of my crew, take care of this Orion spacecraft, get us around the Moon, and get us safely back to planet Earth.",
    quoteSource: "NASA Curious Universe",
    paragraphs: [
      "G. Reid Wiseman brings to Artemis II the kind of experience that makes a commander legible to both specialists and the public. Before his selection as a NASA astronaut in 2009, he served as a naval aviator and test pilot, professions built around disciplined judgment, procedural precision, and the ability to stay calm while systems are doing demanding things in unforgiving environments. Those traits matter on any space mission, but they matter especially on a crewed test flight that is meant to validate hardware, procedures, and teamwork in deep space rather than simply repeat familiar operations.",
      "Wiseman is not new to orbital flight. During Expedition 41 aboard the International Space Station, he spent 165 days in space and conducted spacewalks that added practical operational experience to his aviation and leadership background. He also later served as Chief of the Astronaut Office, a role that placed him close to the center of astronaut training, crew assignment, and mission preparation. That combination of flight experience and institutional leadership gives him unusual depth as the person responsible for guiding Artemis II through both its technical objectives and its human dynamics.",
      "As commander, Wiseman’s role is not simply symbolic. Artemis II will require a crew leader who can manage the cadence of a demanding mission: launch, Earth-orbit demonstrations, translunar injection, deep-space operations, the lunar flyby, and reentry preparation. His public framing of the job is strikingly direct. He speaks about caring for the crew, caring for Orion, getting around the Moon, and getting home safely. That plainness suits the mission. Artemis II is historic, but it is also operational. Wiseman embodies the professional seriousness needed to keep those two truths in balance.",
    ],
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    quote:
      "Pushing ourselves to explore is just core to who we are. That’s a part of being a human.",
    quoteSource: "NASA Curious Universe",
    paragraphs: [
      "Victor Glover arrives at Artemis II with one of the strongest combinations of military aviation, engineering education, and recent spaceflight experience on the crew. A U.S. Navy captain, naval aviator, and test pilot, he was selected as a NASA astronaut in 2013 and later flew as pilot on SpaceX Crew-1 to the International Space Station. That mission gave him long-duration spaceflight experience, exposure to modern spacecraft operations, and a direct understanding of how a tightly coordinated crew functions in orbit over an extended period.",
      "Glover’s place on Artemis II also carries major historical significance. He is the first Black astronaut assigned to a lunar mission, a milestone that immediately widened the meaning of the flight in the public imagination. It would be easy to reduce that importance to symbolism alone, but that would miss the deeper point. Glover is on the mission because he is highly qualified for it; the historical dimension matters because it changes who gets seen in the story of deep-space exploration without compromising the seriousness of the assignment. In that sense, his presence speaks both to excellence and to a broader conception of who such missions belong to.",
      "As pilot, Glover will help oversee spacecraft systems and support the commander through the mission’s critical phases. His quote about exploration being core to human identity captures one of the philosophical threads that runs through Artemis itself. NASA presents the program as a practical step toward sustained lunar operations, but it also depends on the older, harder-to-quantify argument that exploration is part of how societies learn, imagine, and define themselves. Glover gives that argument a grounded voice. He speaks about exploration not as abstraction, but as a human habit that demands preparation, courage, and follow-through.",
    ],
  },
  {
    name: "Christina Koch",
    role: "Mission Specialist",
    quote:
      "There are things about our universe we can only learn if we go to certain places. Only those places can tell us those things about the universe.",
    quoteSource: "NASA Curious Universe",
    paragraphs: [
      "Christina Koch is one of the most technically and symbolically significant members of the Artemis II crew. Before becoming a NASA astronaut, she worked as an engineer on space science instrumentation and developed a reputation for operating effectively in extreme and remote environments, including work in Antarctica and Greenland. That kind of field experience is not identical to spaceflight, but it reflects a mindset highly relevant to exploration missions: self-sufficiency, systems awareness, and an ability to function where logistics are complex and mistakes are expensive.",
      "Her long-duration mission aboard the International Space Station made her globally known. Koch spent 328 consecutive days in space, setting what was then the record for the longest single spaceflight by a woman, and she also took part in the first all-female spacewalks. Those achievements established her public profile, but the deeper relevance to Artemis II lies in endurance, operational maturity, and scientific seriousness. A crewed lunar mission demands astronauts who can handle confinement, changing timelines, procedural rigor, and the psychological texture of high-consequence work far from home.",
      "Koch will become the first woman assigned to a lunar mission, and that fact alone guarantees that her role in public memory will be large. But the site should present her as more than a milestone. Her quote about learning certain truths only by going to certain places offers a concise philosophy of exploration. It frames travel into deep space not as spectacle, but as method. Artemis II is meant to test a spacecraft, but it also reopens the possibility that people can once again go to places from which entirely different forms of knowledge become possible. Koch gives that idea intellectual force.",
    ],
  },
  {
    name: "Jeremy Hansen",
    role: "Mission Specialist",
    quote:
      "Artemis is the twin sister of Apollo. That’s intentional. It is to remind us that we’re going to go do great things.",
    quoteSource: "NASA Curious Universe",
    paragraphs: [
      "Jeremy Hansen’s inclusion in Artemis II makes the mission more fully international in both practical and symbolic terms. A Canadian Space Agency astronaut, former Royal Canadian Air Force fighter pilot, and military officer with a background in space science and physics, Hansen brings to the crew the same blend of technical fluency and disciplined operational culture that marks the other astronauts. Artemis is often described as a partner-driven program rather than a purely national effort, and Hansen’s presence makes that reality visible in the crew itself rather than only in institutional agreements.",
      "Unlike Wiseman, Glover, and Koch, Hansen will make his first trip to space on Artemis II. That fact makes his assignment especially compelling. NASA and the CSA are entrusting a first-time spaceflier with one of the most visible and demanding missions of the modern era, which says a great deal about his preparation and the confidence placed in him. His prior work includes service as a capcom in mission control and participation in demanding exploration analog environments, experiences that helped prepare him for the complexity and collaborative demands of deep-space flight.",
      "Hansen will also become the first Canadian to travel to the Moon, a national milestone that expands the scope of the mission’s legacy beyond the United States. His comparison of Artemis to Apollo is revealing. He does not present Artemis as a copy, but as a deliberate sibling: related in ambition, different in context, and meant to remind people that large-scale exploration still belongs within the realm of the possible. On a page devoted to the crew, Hansen helps make the case that Artemis II is not only about technical readiness. It is also about widening the circle of participation in humanity’s return to deep space.",
    ],
  },
] as const;

export const apolloLessons = [
  {
    title: "Apollo 8 proved a crew could leave Earth orbit and operate at lunar distance",
    body:
      "Before Apollo 8, no human beings had traveled beyond Earth orbit. Its success showed that a crewed spacecraft could survive translunar flight, navigate to the Moon, function in lunar orbit, and return safely through high-energy reentry. That matters for Artemis II because it established the first real template for what a non-landing lunar mission can accomplish. The mission did not put boots on the surface, yet it fundamentally changed what later missions were allowed to assume.",
  },
  {
    title: "A proving mission can become the turning point of an entire program",
    body:
      "Apollo 8 was not a side note before Apollo 11. It was the flight that turned a lunar landing from ambition into something that looked operationally plausible. Artemis II is built in a similar role. Its success would not be measured by a landing, but by whether it gives NASA and its partners verified confidence in the systems, procedures, and human performance needed for what comes next.",
  },
  {
    title: "Historical parallels help, but they can also distort",
    body:
      "The easiest story to tell is that Artemis is simply Apollo again with better hardware. That story is tidy, but wrong. Apollo was shaped by Cold War urgency, compressed timelines, and a national race framework. Artemis is slower, more international, and more explicitly aimed at sustained operations. The Apollo comparison is useful only if it clarifies Artemis II’s role without pretending the modern mission lives inside the same political logic.",
  },
] as const;

export const apolloEightMilestones = [
  "First crewed mission to leave Earth orbit",
  "First humans to travel to the Moon",
  "First crewed mission to orbit the Moon",
  "First direct human viewing of the lunar far side",
  "Christmas Eve 1968 broadcast watched around the world",
  "Earthrise photograph became one of the defining images of the space age",
] as const;

export const technologyComparison = [
  {
    category: "Guidance and computing",
    apollo: "Apollo flew with computers that were astonishing for their time but tiny by modern standards. The Apollo Guidance Computer worked with extremely limited memory and processing power, forcing software and operations teams to be ruthless about efficiency.",
    artemis: "Artemis II’s Orion spacecraft benefits from decades of advances in computing, fault tolerance, software tooling, and digital displays. The gain is not just raw speed, but flexibility, better situational awareness, and easier integration with modern mission operations.",
  },
  {
    category: "Spacecraft design",
    apollo: "Apollo’s command and service modules were optimized for a sprint-era lunar program with tight mass margins and mission designs shaped by Cold War urgency.",
    artemis: "Orion is built for a different philosophy. It is still a crew capsule for deep space, but it sits inside a broader long-term architecture and is designed around modern safety expectations, updated avionics, and partnership with the European-built service module.",
  },
  {
    category: "Crew interfaces",
    apollo: "Apollo crews worked with dense panels of switches, dials, and indicator lights that demanded memorization, procedural discipline, and highly trained interpretation under pressure.",
    artemis: "Orion uses glass cockpit displays and more contemporary interface design. That does not make the mission easy, but it changes how information is presented and how crew situational awareness is maintained during demanding phases of flight.",
  },
  {
    category: "Mission operations",
    apollo: "Apollo mission control operated brilliantly, but with far less digital infrastructure, automation support, simulation tooling, and global data integration than teams can rely on now.",
    artemis: "Artemis mission operations are shaped by modern software, modeling, communications networks, and integrated engineering pipelines. The result is a more networked and data-rich way of managing risk, planning contingencies, and refining decisions.",
  },
  {
    category: "Program structure",
    apollo: "Apollo was a concentrated national project aimed at reaching the Moon quickly and decisively. It was spectacularly effective, but it was not designed as a sustained multinational campaign.",
    artemis: "Artemis is slower, more distributed, and more explicitly international. It ties together NASA, ESA, CSA, commercial contractors, lunar lander planning, Gateway ambitions, and a longer horizon of repeated lunar activity.",
  },
] as const;

export const futureMilestones = [
  {
    title: "Artemis III and the return to the lunar surface",
    body:
      "If Artemis II proves the crewed transportation system in flight, Artemis III is meant to carry that confidence into a lunar landing attempt. In program terms, Artemis II is the mission that reduces uncertainty before the return of astronauts to the surface.",
  },
  {
    title: "A more durable lunar campaign",
    body:
      "NASA presents Artemis not as a one-off revisit, but as the beginning of a repeated presence around and on the Moon. That includes surface science, new operational experience, international participation, and technologies that can support longer stays.",
  },
  {
    title: "Preparing for missions beyond the Moon",
    body:
      "The Moon matters partly because it is nearby, but also because it offers a proving ground for the systems, logistics, and human factors that deeper missions will require. Artemis II therefore belongs not only to lunar history, but to the longer story of eventual human exploration farther into the solar system.",
  },
] as const;

export const futureQuestions = [
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
] as const;

export const sourceGroups = [
  {
    title: "Primary mission sources",
    items: [
      {
        label: "NASA Artemis II overview",
        href: "https://www.nasa.gov/mission/artemis-ii/",
      },
      {
        label: "NASA Orion spacecraft overview",
        href: "https://www.nasa.gov/mission/orion-spacecraft/",
      },
      {
        label: "NASA Space Launch System overview",
        href: "https://www.nasa.gov/reference/space-launch-system/",
      },
    ],
  },
  {
    title: "Crew and program context",
    items: [
      {
        label: "NASA announcement of the Artemis II crew",
        href: "https://www.nasa.gov/news-release/nasa-reveals-astronaut-crew-for-artemis-ii-moon-mission/",
      },
      {
        label: "NASA Curious Universe — Artemis II crew interviews",
        href: "https://www.nasa.gov/podcasts/curious-universe/",
      },
      {
        label: "Canadian Space Agency — Jeremy Hansen biography",
        href: "https://www.asc-csa.gc.ca/eng/astronauts/biojeremyhansen.asp",
      },
    ],
  },
  {
    title: "Apollo historical context",
    items: [
      {
        label: "NASA Apollo 8 overview",
        href: "https://www.nasa.gov/mission/apollo-8/",
      },
      {
        label: "NASA History Office and Apollo archive materials",
        href: "https://history.nasa.gov/",
      },
      {
        label: "Smithsonian — Apollo program history and context",
        href: "https://airandspace.si.edu/explore/stories/apollo-program",
      },
    ],
  },
] as const;

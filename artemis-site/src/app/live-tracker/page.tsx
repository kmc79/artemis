import type { Metadata } from "next";
import { PageHero, Section } from "@/components/site-shell";

type LiveMissionPhase = {
  name: string;
  start_day: number;
  color: string;
};

type LiveMissionResponse = {
  status: string;
  mission: {
    mission_id: string;
    name: string;
    status: string;
    launch_utc: string;
    splashdown_utc: string;
    horizons_id: string;
    max_dist_km: number;
    crew: { name: string; role: string; agency: string }[];
    phases: LiveMissionPhase[];
  };
  orion: {
    x_km: number;
    y_km: number;
    z_km: number;
    distance_earth_km: number;
    distance_moon_km: number;
    speed_km_s: number;
  };
  moon: {
    x_km: number;
    y_km: number;
    z_km: number;
    distance_earth_km: number;
  };
  data_age_seconds: number;
  next_update_seconds: number;
  updated_at: string;
};

export const metadata: Metadata = {
  title: "Artemis II Live Tracker | Orion Current Position, Distance, Speed, and Moon Mission Status",
  description:
    "Track Artemis II live with current Orion position, mission phase, distance from Earth, distance from the Moon, speed, and mission status updates during NASA's crewed lunar flyby mission.",
  keywords: [
    "Artemis II tracker",
    "Artemis 2 live tracker",
    "Artemis II live",
    "Orion tracker",
    "Orion current position",
    "NASA Artemis tracker",
    "Moon mission tracker",
    "Artemis II position",
    "distance from Earth",
    "distance from Moon",
    "Artemis II mission status",
  ],
  alternates: {
    canonical: "/live-tracker",
  },
  openGraph: {
    title: "Artemis II Live Tracker | Orion Current Position, Distance, Speed, and Moon Mission Status",
    description:
      "Track Artemis II live with current Orion position, mission phase, Earth distance, Moon distance, speed, and mission timing.",
    url: "https://artemis.endless-summer.online/live-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis II Live Tracker | Orion Current Position, Distance, Speed, and Moon Mission Status",
    description:
      "Track Artemis II live with Orion position, mission phase, distance from Earth and the Moon, speed, and current mission status.",
  },
};

const NASA_TRACKER_URL =
  "https://www.nasa.gov/missions/artemis/artemis-2/track-nasas-artemis-ii-mission-in-real-time/";
const LIVE_DATA_URL = "https://api.issinfo.net/artemis/live";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(value);
}

function formatDecimal(value: number, digits = 2) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatUtc(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(value));
}

function missionElapsedDays(launchUtc: string) {
  const launch = new Date(launchUtc).getTime();
  const now = Date.now();
  return Math.max(0, (now - launch) / 86400000);
}

function findCurrentPhase(phases: LiveMissionPhase[], elapsedDays: number) {
  let current = phases[0];

  for (const phase of phases) {
    if (elapsedDays >= phase.start_day) {
      current = phase;
    } else {
      break;
    }
  }

  const currentIndex = phases.findIndex((phase) => phase.name === current.name);

  return { current, currentIndex };
}

export default async function LiveTrackerPage() {
  const response = await fetch(LIVE_DATA_URL, {
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error(`Live tracker request failed: ${response.status}`);
  }

  const data = (await response.json()) as LiveMissionResponse;
  const elapsedDays = missionElapsedDays(data.mission.launch_utc);
  const { current, currentIndex } = findCurrentPhase(data.mission.phases, elapsedDays);
  const missionProgress = Math.min(
    100,
    Math.max(0, (elapsedDays / 9.074) * 100),
  );

  return (
    <>
      <PageHero
        eyebrow="Live Tracker"
        title="Where Artemis II is right now"
        intro="This tracker gives Artemis II its own mission-control-style section: the current phase of flight, current distance from Earth and the Moon, live speed, and the latest available mission update. It is meant to answer the simple question people keep asking once a lunar mission is under way: where are they now?"
      />

      <Section title="Current mission status">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-sky-300/20 bg-sky-400/10 p-6 shadow-[0_0_60px_rgba(56,189,248,0.12)] backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Current phase</p>
            <p className="mt-4 text-3xl font-semibold text-white">{current.name}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Distance from Earth</p>
            <p className="mt-4 text-3xl font-semibold text-white">{formatNumber(data.orion.distance_earth_km)} km</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Distance from Moon</p>
            <p className="mt-4 text-3xl font-semibold text-white">{formatNumber(data.orion.distance_moon_km)} km</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Speed</p>
            <p className="mt-4 text-3xl font-semibold text-white">{formatDecimal(data.orion.speed_km_s)} km/s</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(56,189,248,0.08)] backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Mission progress</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Artemis II flight path status</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
                {formatDecimal(missionProgress, 1)}% of the planned mission timeline
              </div>
            </div>

            <div className="mt-8 rounded-full bg-slate-900/80 p-2">
              <div className="relative h-4 rounded-full bg-white/10">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
                  style={{ width: `${missionProgress}%` }}
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.mission.phases.map((phase, index) => {
                const isCurrent = index === currentIndex;
                return (
                  <div
                    key={phase.name}
                    className={`rounded-2xl border p-4 transition ${
                      isCurrent
                        ? "border-sky-300/40 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.12)]"
                        : "border-white/10 bg-slate-950/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: phase.color }}
                        aria-hidden="true"
                      />
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        Flight day {formatDecimal(phase.start_day, 2)}
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">{phase.name}</p>
                    {isCurrent ? <p className="mt-2 text-sm text-sky-200">Current mission phase</p> : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Live timing</p>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-300">
                <div className="flex items-start justify-between gap-4">
                  <span>Launch</span>
                  <span className="text-right text-white">{formatUtc(data.mission.launch_utc)} UTC</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Planned splashdown</span>
                  <span className="text-right text-white">{formatUtc(data.mission.splashdown_utc)} UTC</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Latest update</span>
                  <span className="text-right text-white">{formatUtc(data.updated_at)} UTC</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Data age</span>
                  <span className="text-right text-white">{data.data_age_seconds} seconds</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Next refresh window</span>
                  <span className="text-right text-white">~{data.next_update_seconds} seconds</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Max planned Earth distance</span>
                  <span className="text-right text-white">{formatNumber(data.mission.max_dist_km)} km</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Current position snapshot</p>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-300">
                <div className="flex items-start justify-between gap-4">
                  <span>Orion X</span>
                  <span className="text-right text-white">{formatNumber(data.orion.x_km)} km</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Orion Y</span>
                  <span className="text-right text-white">{formatNumber(data.orion.y_km)} km</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Orion Z</span>
                  <span className="text-right text-white">{formatNumber(data.orion.z_km)} km</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Moon distance from Earth</span>
                  <span className="text-right text-white">{formatNumber(data.moon.distance_earth_km)} km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Sources">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href={NASA_TRACKER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-base text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
          >
            View NASA’s Artemis II tracking page
          </a>
          <a
            href={LIVE_DATA_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-base text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
          >
            View live JSON data source
          </a>
        </div>
      </Section>
    </>
  );
}

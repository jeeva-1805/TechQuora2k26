import {
  Code2,
  Crown,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

import CoordinatorProfile from "../components/coordinator/CoordinatorProfile";
import EventCoordinatorCard from "../components/coordinator/EventCoordinatorCard";

import {
  staffCoordinators,
  technicalOverallCoordinators,
  nonTechnicalOverallCoordinators,
  technicalEvents,
  nonTechnicalEvents,
} from "../data/coordinators";

function Coordinator() {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-cover
        bg-top
        bg-no-repeat
        text-white
        lg:bg-fixed
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(1,8,22,0.52), rgba(1,8,22,0.85)), url('/images/coordinator-background.png')",
      }}
    >
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-cyan-400/20">

        <div className="absolute inset-0 bg-gradient-to-b from-[#020916]/10 via-transparent to-[#020916]/80" />

        <div className="relative mx-auto max-w-[1500px] px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">

          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-400 sm:text-xs">
            People • Plans • Possibilities
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] sm:text-5xl lg:text-7xl">
            Meet Our

            <span className="mt-2 block bg-gradient-to-r from-white via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
              Coordinators
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm text-slate-300 sm:text-base">
            Different Roles. One Vision. A Successful{" "}
            <strong className="text-white">
              TechQuora2k26.
            </strong>
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">

        {/* ================= STAFF ================= */}

        <section className="rounded-[2rem] border border-cyan-400/40 bg-[#041225]/80 p-5 backdrop-blur-xl sm:p-7">

          <div className="grid gap-7 xl:grid-cols-[230px_1fr] xl:items-center">

            <div>
              <div className="flex items-center gap-3">

                <Users
                  size={35}
                  className="text-fuchsia-300"
                />

                <h2 className="text-xl font-black uppercase">
                  OVERALL

                  <span className="block text-cyan-300">
                    Coordinators
                  </span>
                </h2>

              </div>

              <p className="mt-4 max-w-[210px] text-sm leading-6 text-slate-400">
                Mentors who guide, support and shape the journey.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-cyan-400">
                Experience • Drives • Excellence
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {staffCoordinators.map((person) => (
                <CoordinatorProfile
                  key={person.id}
                  {...person}
                  accent="cyan"
                />
              ))}

            </div>

          </div>

        </section>

        {/* ================= OVERALL COORDINATORS ================= */}

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

          {/* TECH OVERALL */}
          <section className="rounded-[2rem] border border-cyan-400/60 bg-[#041225]/85 p-5 backdrop-blur-xl sm:p-6">

            <div className="flex items-center gap-3">

              <Crown
                size={31}
                className="text-cyan-400"
              />

              <div>
                <h2 className="text-lg font-black uppercase text-cyan-300">
                  Technical Overall Coordinators
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-cyan-500">
                  Ideate • Build • Innovate
                </p>
              </div>

            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {technicalOverallCoordinators.map((person) => (
                <CoordinatorProfile
                  key={person.id}
                  {...person}
                  accent="cyan"
                  compact
                />
              ))}

            </div>

          </section>

          {/* NON TECH OVERALL */}
          <section className="rounded-[2rem] border border-fuchsia-400/60 bg-[#0a1026]/85 p-5 backdrop-blur-xl sm:p-6">

            <div className="flex items-center gap-3">

              <Crown
                size={31}
                className="text-fuchsia-400"
              />

              <div>
                <h2 className="text-lg font-black uppercase text-fuchsia-300">
                  Non-Technical Overall Coordinators
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-fuchsia-500">
                  Engage • Create • Celebrate
                </p>
              </div>

            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {nonTechnicalOverallCoordinators.map((person) => (
                <CoordinatorProfile
                  key={person.id}
                  {...person}
                  accent="pink"
                  compact
                />
              ))}

            </div>

          </section>

        </div>

        {/* ================= EVENTS ================= */}

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

          {/* TECH EVENTS */}
          <section className="rounded-[2rem] border border-cyan-400/60 bg-[#041225]/85 p-5 backdrop-blur-xl sm:p-6">

            <div className="flex items-center justify-between gap-3">

              <div className="flex items-center gap-3">
                <Code2
                  size={32}
                  className="text-cyan-400"
                />

                <div>
                  <h2 className="text-xl font-black uppercase text-cyan-300">
                    Technical Events
                  </h2>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-500">
                    Ideate • Build • Innovate
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-cyan-400/40 px-3 py-1 text-[10px] font-bold text-cyan-300">
                4 EVENTS
              </span>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">

              {technicalEvents.map((event) => (
                <EventCoordinatorCard
                  key={event.id}
                  event={event}
                  accent="cyan"
                />
              ))}

            </div>

          </section>

          {/* NON TECH EVENTS */}
          <section className="rounded-[2rem] border border-fuchsia-400/60 bg-[#091024]/85 p-5 backdrop-blur-xl sm:p-6">

            <div className="flex items-center justify-between gap-3">

              <div className="flex items-center gap-3">
                <Sparkles
                  size={30}
                  className="text-fuchsia-400"
                />

                <div>
                  <h2 className="text-xl font-black uppercase text-fuchsia-300">
                    Non-Technical Events
                  </h2>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-fuchsia-500">
                    Engage • Create • Celebrate
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-fuchsia-400/40 px-3 py-1 text-[10px] font-bold text-fuchsia-300">
                4 EVENTS
              </span>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">

              {nonTechnicalEvents.map((event) => (
                <EventCoordinatorCard
                  key={event.id}
                  event={event}
                  accent="pink"
                />
              ))}

            </div>

          </section>

        </div>

        {/* ================= BOTTOM ================= */}

        <section className="py-12">

          <div className="mx-auto flex max-w-2xl items-center gap-4">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400" />

            <Lightbulb
              size={18}
              className="shrink-0 text-fuchsia-400"
            />

            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.3em] text-fuchsia-300">
                A Big Event Needs A
              </p>

              <h2 className="mt-1 text-xl font-black uppercase sm:text-2xl">
                Strong Team
              </h2>
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-fuchsia-400" />

          </div>

        </section>

      </main>
    </div>
  );
}

export default Coordinator;
import { useState } from "react";

import {
  CalendarDays,
  Code2,
  MapPin,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";

import EventSection from "../components/events/EventSection";
import Button from "../components/common/Button";

import {
  technicalEvents,
  nonTechnicalEvents,
} from "../data/events";

function Events() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="min-h-screen bg-[#020815] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-cyan-500/20">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03142a] via-[#020815] to-[#10051f]" />

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[120px]" />

        {/* light lines */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 opacity-60" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_0.9fr] lg:px-8">

          {/* LEFT */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-400 sm:text-[10px]">
              Explore • Participate • Experience
            </p>

            <h1 className="mt-3 text-5xl font-black italic leading-none sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
                EVENTS
              </span>
            </h1>

            <p className="mt-3 text-sm text-gray-300 sm:text-base">
              Ideas compete. Talents shine. Are you in?
            </p>

            {/* EVENT INFO */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              <div className="flex items-center gap-2">
                <CalendarDays
                  size={20}
                  className="shrink-0 text-cyan-400"
                />

                <div>
                  <p className="text-[8px] text-gray-500">
                    Event Day
                  </p>
                  <p className="text-[10px] font-semibold sm:text-xs">
                    Sep 30, 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  size={20}
                  className="shrink-0 text-blue-400"
                />

                <div>
                  <p className="text-[8px] text-gray-500">
                    Venue
                  </p>
                  <p className="text-[10px] font-semibold sm:text-xs">
                    Loyola Auditorium
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <UserRound
                  size={20}
                  className="shrink-0 text-fuchsia-400"
                />

                <div>
                  <p className="text-[8px] text-gray-500">
                    Open For
                  </p>
                  <p className="text-[10px] font-semibold sm:text-xs">
                    College Students
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT HERO VISUAL */}
          <div className="relative hidden min-h-[250px] items-center justify-center lg:flex">

            <div className="absolute h-60 w-60 rounded-full bg-fuchsia-600/20 blur-[70px]" />

            <div className="absolute right-16 top-3 h-36 w-36 rotate-6 rounded-xl border border-blue-400/30 bg-blue-500/10" />

            <div className="absolute bottom-4 left-20 h-32 w-40 -rotate-6 rounded-xl border border-cyan-400/20 bg-cyan-500/10" />

            <div className="relative z-10 w-[260px] border border-cyan-400/40 bg-[#081227]/90 p-4 shadow-[0_0_40px_rgba(34,211,238,.18)]">

              <div className="flex h-[210px] items-center justify-center bg-gradient-to-br from-blue-500/10 via-purple-500/20 to-fuchsia-500/15">

                <div className="text-center">
                  <Trophy
                    size={30}
                    className="mx-auto mb-3 text-cyan-300"
                  />

                  <p className="text-xs font-bold tracking-[0.35em] text-cyan-300">
                    IDEAS
                  </p>

                  <p className="mt-2 text-3xl font-black">
                    PEOPLE
                  </p>

                  <p className="text-3xl font-black text-fuchsia-300">
                    EVENTS
                  </p>

                  <p className="text-3xl font-black text-cyan-300">
                    IMPACT
                  </p>
                </div>

              </div>

              <p className="mt-2 text-center text-[8px] tracking-[0.3em] text-gray-500">
                TECHQUORA2K26
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CATEGORY SWITCH */}
        <div className="relative z-20 -mt-5 flex justify-center">

          <div className="flex w-full max-w-xl rounded-full border border-blue-400/25 bg-[#061020]/95 p-1.5 shadow-[0_0_30px_rgba(59,130,246,.15)]">

            <button
              onClick={() => setActiveTab("technical")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold transition ${
                activeTab === "technical"
                  ? "bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-400 text-white shadow-[0_0_22px_rgba(34,211,238,.35)]"
                  : "text-gray-400"
              }`}
            >
              <Code2 size={17} />
              Technical Events
            </button>

            <button
              onClick={() => setActiveTab("nontechnical")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold transition ${
                activeTab === "nontechnical"
                  ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-500 text-white shadow-[0_0_22px_rgba(236,72,153,.35)]"
                  : "text-gray-400"
              }`}
            >
              <Users size={17} />
              Non-Technical Events
            </button>

          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          {activeTab === "technical" ? (
            <EventSection
              type="technical"
              title="TECHNICAL EVENTS"
              subtitle="Build • Solve • Create • Present"
              events={technicalEvents}
            />
          ) : (
            <EventSection
              type="nontechnical"
              title="NON-TECHNICAL EVENTS"
              subtitle="Communicate • Collaborate • Enjoy • Shine"
              events={nonTechnicalEvents}
            />
          )}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">

          <EventSection
            type="technical"
            title="TECHNICAL EVENTS"
            subtitle="Build • Solve • Create • Present"
            events={technicalEvents}
          />

          <EventSection
            type="nontechnical"
            title="NON-TECHNICAL EVENTS"
            subtitle="Communicate • Collaborate • Enjoy • Shine"
            events={nonTechnicalEvents}
          />

        </div>

        {/* ================= CTA ================= */}
        <section className="relative mb-12 mt-3 overflow-hidden rounded-xl border border-cyan-400/30 bg-[#071020] px-5 py-5 sm:px-7">

          <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-[70px]" />

          <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-[70px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <Trophy
                size={30}
                className="hidden text-yellow-400 sm:block"
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-fuchsia-400">
                  Different Events
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Ready to showcase{" "}
                  <span className="text-fuchsia-300">
                    your talent?
                  </span>
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Register now and be part of TechQuora2k26.
                </p>
              </div>

            </div>

            <Button to="/registration">
              Register Now
            </Button>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Events;
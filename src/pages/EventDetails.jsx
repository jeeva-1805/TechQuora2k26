import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import { allEvents } from "../data/events";
import Button from "../components/common/Button";

function EventDetails() {
  const { eventId } = useParams();

  const event = allEvents.find(
    (item) => item.slug === eventId
  );

  if (!event) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#020815] px-4 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">
            Event Not Found
          </h1>

          <Link
            to="/events"
            className="mt-5 inline-flex items-center gap-2 text-cyan-400"
          >
            <ArrowLeft size={18} />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020815] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-white/10">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03142a] via-[#020815] to-[#10051f]" />

        {/* Glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[110px]" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* Back */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Events
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">

            {/* LEFT CONTENT */}
            <div className="min-w-0">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {event.id}
              </p>

              <h1 className="mt-3 break-words text-4xl font-black sm:text-5xl lg:text-6xl xl:text-7xl">
                {event.title}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
                {event.description}
              </p>

              {/* Info Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                {/* Duration */}
                <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <Clock3
                    size={21}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-xs text-gray-500">
                    Duration
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    {event.duration}
                  </p>
                </div>

                {/* Team */}
                <div className="rounded-2xl border border-fuchsia-400/20 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <Users
                    size={21}
                    className="text-fuchsia-400"
                  />

                  <p className="mt-3 text-xs text-gray-500">
                    Participation
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    {event.team}
                  </p>
                </div>

                {/* Venue */}
                <div className="rounded-2xl border border-violet-400/20 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <MapPin
                    size={21}
                    className="text-violet-400"
                  />

                  <p className="mt-3 text-xs text-gray-500">
                    Venue
                  </p>

                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    {event.venue}
                  </p>
                </div>

              </div>

              {/* Register */}
              <div className="mt-8">
                <Button
                  to={`/registration?event=${event.slug}`}
                >
                  Register for this Event
                </Button>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="min-w-0">

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#071020] shadow-[0_0_45px_rgba(34,211,238,0.08)]">

                {/* image glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/10" />

                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    relative
                    aspect-video
                    w-full
                    object-cover
                    object-center
                  "
                />

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ================= RULES SECTION ================= */}
      <section className="relative">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
            Event Guidelines
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Rules & Instructions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Please read the event guidelines carefully before registering.
          </p>

          {/* Rules */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

            {event.rules.map((rule, index) => (
              <div
                key={index}
                className="
                  flex min-w-0 gap-3
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-4
                  transition
                  hover:border-cyan-400/20
                  sm:p-5
                "
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                  <CheckCircle2
                    size={17}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Rule {index + 1}
                  </p>

                  <p className="mt-1 min-w-0 text-sm leading-6 text-gray-300">
                    {rule}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Bottom Register CTA */}
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-[#071020] p-6 sm:p-8">

            <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-[70px]" />

            <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-[70px]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  TechQuora2k26
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Ready for {event.title}?
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Complete your registration and be part of the event.
                </p>
              </div>

              <Button
                to={`/registration?event=${event.slug}`}
              >
                Register Now
              </Button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default EventDetails;
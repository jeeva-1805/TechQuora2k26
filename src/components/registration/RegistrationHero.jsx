import {
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";

function RegistrationHero() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-400/30">
      <div
        className="absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat lg:bg-center"
        style={{
          backgroundImage:
            "url('/images/registration/registration-hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020a18] via-[#020a18]/90 to-[#020a18]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-8 pt-14 sm:px-8 lg:px-12 lg:pb-10 lg:pt-16">
        <div className="max-w-[650px]">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
            Join • Participate • Make an Impact
          </p>

          <h1 className="mt-3 text-5xl font-black italic leading-[0.85] sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-b from-white via-fuchsia-100 to-fuchsia-400 bg-clip-text text-transparent">
              REGISTRATION
            </span>

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              OPEN
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold sm:text-2xl">
            Your Journey to TECHQUORA 2026 Starts Here.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Fill in your details, choose your events, select your
            team/individual category and complete the registration
            to secure your spot in the symposium. It's simple,
            fast and easy!
          </p>
        </div>

        <div className="mt-8 grid max-w-[850px] overflow-hidden rounded-2xl border border-cyan-400/60 bg-[#031327]/85 backdrop-blur-xl sm:grid-cols-3">
          <Info
            icon={CalendarDays}
            title="Event Day"
            value="Oct 1, 2026"
          />

          <Info
            icon={MapPin}
            title="Venue"
            value="Loyola Auditorium"
          />

          <Info
            icon={UsersRound}
            title="Open For"
            value="All College Students"
            last
          />
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, value, last }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 ${
        !last
          ? "border-b border-cyan-400/20 sm:border-b-0 sm:border-r"
          : ""
      }`}
    >
      <Icon
        size={32}
        className="shrink-0 text-fuchsia-400"
      />

      <div>
        <p className="text-xs font-semibold text-cyan-300">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default RegistrationHero;
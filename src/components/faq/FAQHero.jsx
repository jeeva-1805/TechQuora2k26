import {
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";

function FAQHero() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-400/30">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[70%_center] bg-no-repeat lg:bg-center"
        style={{
          backgroundImage: "url('/images/faq/faq-hero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020a18] via-[#020a18]/85 to-[#020a18]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-transparent to-[#020b18]/20" />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-7 pt-14 sm:px-8 lg:px-12 lg:pb-10 lg:pt-16">
        <div className="max-w-[590px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-300 sm:text-xs">
            Join • Participate • Make an Impact
          </p>

          <h1 className="mt-3 text-6xl font-black italic leading-none sm:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-b from-white via-fuchsia-200 to-cyan-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </h1>

          <h2 className="mt-2 max-w-lg text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
            Find quick answers to your questions about TECHQUORA 2k26.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Everything you need to know — from registration and events
            to certificates and more, all in one place.
          </p>
        </div>

        {/* Mobile event info */}
        <div className="mt-8 grid overflow-hidden rounded-2xl border border-cyan-400/60 bg-[#031327]/85 backdrop-blur-xl sm:grid-cols-3 lg:hidden">
          <Info
            icon={CalendarDays}
            title="Event Date"
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

        <p className="mt-0.5 text-sm font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default FAQHero;
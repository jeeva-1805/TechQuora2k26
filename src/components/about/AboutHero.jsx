import {
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";

function AboutHero() {
  const info = [
    {
      icon: CalendarDays,
      title: "Event Day",
      value: "Oct 1, 2026",
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "Loyola Auditorium",
    },
    {
      icon: UsersRound,
      title: "Open For",
      value: "All College Students",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-cyan-400/30">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about/about-hero.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#020b18]/90 to-[#020b18]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-[1450px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pb-10 lg:pt-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.38em] text-cyan-300 sm:text-sm">
            Learn • Compete • Connect • Grow
          </p>

          <h1 className="text-5xl font-black italic leading-none sm:text-6xl lg:text-8xl">
            <span className="text-white">
              ABOUT
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              US
            </span>
          </h1>

          <h2 className="mt-3 text-xl font-bold sm:text-2xl lg:text-3xl">
            More Than Just an Event.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            TECHQUORA 2026 is more than a symposium — it's a platform
            where ideas meet opportunity, talent meets recognition,
            and students build a better tomorrow.
          </p>
        </div>

        {/* INFO BAR */}
        <div className="mt-8 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-cyan-400/70 bg-[#031326]/80 backdrop-blur-xl sm:grid-cols-3">
          {info.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-4 sm:px-5 ${
                  index !== info.length - 1
                    ? "border-b border-cyan-400/20 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <Icon
                  size={32}
                  strokeWidth={1.8}
                  className={
                    index === 1
                      ? "text-cyan-300"
                      : "text-fuchsia-400"
                  }
                />

                <div>
                  <p className="text-sm font-medium text-cyan-300">
                    {item.title}
                  </p>

                  <p className="text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
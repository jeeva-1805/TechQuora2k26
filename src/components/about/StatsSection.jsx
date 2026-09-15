import {
  Building2,
  Star,
  Trophy,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    icon: UsersRound,
    value: "500+",
    label: "EXPECTED PARTICIPANTS",
  },
  {
    icon: Trophy,
    value: "8+",
    label: "EXCITING EVENTS",
  },
  {
    icon: Building2,
    value: "2",
    label: "EVENT CATEGORIES",
    subLabel: "(TECHNICAL & NON-TECHNICAL)",
  },
  {
    icon: Star,
    value: "1",
    label: "UNFORGETTABLE DAY",
  },
];

function StatsSection() {
  return (
    <section className="rounded-[26px] border border-cyan-400/60 bg-[#041225]/90 p-3 sm:p-4">
      <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex min-h-[165px] flex-col items-center justify-center rounded-2xl border border-fuchsia-400/40 bg-[#06152a]/80 p-3 text-center"
            >
              <Icon
                size={32}
                className={
                  index % 2 === 0
                    ? "text-cyan-300"
                    : "text-fuchsia-400"
                }
              />

              <p className="mt-3 bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-3xl font-black italic text-transparent">
                {stat.value}
              </p>

              <p className="mt-2 text-[10px] font-semibold text-slate-200 sm:text-xs">
                {stat.label}
              </p>

              {stat.subLabel && (
                <p className="mt-1 text-[8px] text-slate-400">
                  {stat.subLabel}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;
import {
  ShieldCheck,
  UsersRound,
  Zap,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Quick Response",
    text: "Within 24 hours",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Reliable Support",
    text: "Your queries matter",
  },
  {
    id: 3,
    icon: UsersRound,
    title: "Dedicated Team",
    text: "Here to assist you",
  },
];

function SupportFeatures() {
  return (
    <section
      className="
        grid overflow-hidden
        rounded-2xl
        border border-cyan-400/60
        bg-[#041225]/95
        shadow-[0_0_25px_rgba(34,211,238,0.08)]
        sm:grid-cols-3
      "
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className={`
              flex items-center justify-center gap-4
              px-5 py-4
              ${
                index !== features.length - 1
                  ? "border-b border-cyan-400/20 sm:border-b-0 sm:border-r"
                  : ""
              }
            `}
          >
            <div
              className="
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-full
                border border-fuchsia-400/70
                bg-fuchsia-400/10
                text-fuchsia-300
                shadow-[0_0_18px_rgba(217,70,239,0.2)]
              "
            >
              <Icon size={25} />
            </div>

            <div>
              <h3 className="text-sm font-black text-cyan-300">
                {feature.title}
              </h3>

              <p className="mt-1 text-xs text-slate-300">
                {feature.text}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SupportFeatures;
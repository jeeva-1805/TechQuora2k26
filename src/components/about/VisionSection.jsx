import {
  ArrowRight,
  Lightbulb,
  Trophy,
  UsersRound,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "LEARN",
    text: "Gain new skills and explore new ideas.",
  },
  {
    icon: Trophy,
    title: "COMPETE",
    text: "Challenge yourself and bring out the best.",
  },
  {
    icon: UsersRound,
    title: "CONNECT",
    text: "Meet like-minded peers and build your network.",
  },
  {
    icon: TrendingUp,
    title: "GROW",
    text: "Turn your talent into real-world impact.",
  },
];

function VisionSection() {
  return (
    <section className="rounded-[26px] border border-cyan-400/60 bg-[#041225]/90 p-4 shadow-[0_0_35px_rgba(34,211,238,0.05)] sm:p-6">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_0.75fr_0.7fr]">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl border border-cyan-400/60">
          <img
            src="/images/about/techquora-stage.png"
            alt="TechQuora"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>

        {/* VISION */}
        <div className="flex flex-col justify-center lg:border-r lg:border-cyan-400/20 lg:pr-7">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
            Our Vision
          </p>

          <h2 className="mt-2 text-3xl font-black italic leading-[0.95] sm:text-4xl">
            EMPOWERING
            <br />
            THE{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              NEXT GEN
            </span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
            We believe in the power of young minds. TECHQUORA brings
            together curious, creative and passionate students from
            various departments to learn, compete, connect and showcase
            their talents. Our goal is to create a space where ideas
            turn into impact.
          </p>

          <p className="mt-5 rotate-[-4deg] text-lg italic text-fuchsia-300">
            Same Stage.
            <br />
            Different Talents.
          </p>
        </div>

        {/* FEATURES */}
        <div className="space-y-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center gap-4 rounded-xl border border-cyan-400/50 bg-[#06172c]/80 p-3 transition hover:border-fuchsia-400/70"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/50 bg-fuchsia-400/10 text-fuchsia-300">
                  <Icon size={24} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-black text-cyan-300">
                    {feature.title}
                  </h3>

                  <p className="text-xs leading-4 text-slate-300">
                    {feature.text}
                  </p>
                </div>

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-400 text-purple-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
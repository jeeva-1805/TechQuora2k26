import { ArrowUpRight } from "lucide-react";

function WhyTechQuora() {
  return (
    <section className="relative overflow-hidden rounded-[26px] border border-cyan-400/60 bg-[#041225]/90 p-6 sm:p-8">
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative">
        <h2 className="text-3xl font-black italic sm:text-4xl">
          WHY{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            TECHQUORA
          </span>{" "}
          ?
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
          Because it's not just about events, it's about experiences,
          opportunities and a community that inspires.
        </p>

        <div className="mt-8 flex items-end justify-between">
          <p className="rotate-[-7deg] text-xl italic leading-5 text-fuchsia-300 sm:text-2xl">
            Be a part
            <br />
            of something
            <br />
            Bigger!
          </p>

          <ArrowUpRight
            size={60}
            strokeWidth={1}
            className="text-cyan-400/20"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyTechQuora;
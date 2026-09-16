import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-fuchsia-400/60 bg-[#051329]/90 px-5 py-6 sm:px-8">
      <div className="absolute -left-16 top-0 h-full w-60 bg-fuchsia-500/10 blur-[70px]" />

      <div className="absolute -right-16 top-0 h-full w-60 bg-cyan-500/10 blur-[70px]" />

      <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row">
        <p className="rotate-[-4deg] text-lg italic leading-5 text-fuchsia-300">
          Different Events.
          <br />
          One Unforgettable Experience!
        </p>

        <div>
          <h2 className="text-xl font-black sm:text-2xl">
            READY TO BE A PART OF{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              TECHQUORA 2026?
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            Register now and be a part of something extraordinary!
          </p>
        </div>

        <Link
          to="/registration"
          className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
            px-7
            py-3
            font-bold
            text-white
            shadow-[0_0_25px_rgba(217,70,239,0.25)]
            transition
            hover:scale-105
          "
        >
          Register Now
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default AboutCTA;
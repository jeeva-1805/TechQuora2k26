import { Play } from "lucide-react";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-[88vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/header.jpeg')",
      }}
    >
      <div className="absolute left-[5%] top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute right-[10%] top-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[130px]" />

      <div className="absolute bottom-0 left-1/2 h-40 w-[700px] -translate-x-1/2 bg-cyan-500/10 blur-[100px]" />

      <div className="absolute right-[-120px] bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="w-full max-w-3xl text-center lg:text-left">

          {/* Badge */}
          <div className="mb-5 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300 backdrop-blur-md">
            National Level Symposium 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Think.

            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Create.
            </span>

            Innovate.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base md:text-lg lg:mx-0">
            TechQuora2k26 is a platform for students to showcase their
            technical skills, creativity, teamwork and innovation through
            exciting technical and non-technical events.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
           <Link to="/registration" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-6 py-3 font-bold text-white transition hover:scale-105">
           Register Now →
         </Link>

            <Button
              to="/events"
              variant="secondary"
            >
              <Play size={16} className="mr-2" />
              Explore Events
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300 lg:justify-start">

            <div>
              <p className="text-2xl font-bold text-white">
                10+
              </p>
              <p>Events</p>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-white">
                500+
              </p>
              <p>Participants</p>
            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-white">
                2
              </p>
              <p>Categories</p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}

export default Hero;
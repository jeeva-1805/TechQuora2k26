import AboutHero from "../components/about/AboutHero";
import VisionSection from "../components/about/VisionSection";
import WhyTechQuora from "../components/about/WhyTechQuora";
import StatsSection from "../components/about/StatsSection";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020b18] text-white">
      <AboutHero />

      <div className="mx-auto max-w-[1450px] space-y-6 px-4 pb-10 pt-6 sm:px-6 lg:px-10">
        <VisionSection />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <WhyTechQuora />
          <StatsSection />
        </div>

        <AboutCTA />

        <p className="pb-2 text-center text-xs text-cyan-300/70">
          © 2026 TECHQUORA. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default About;
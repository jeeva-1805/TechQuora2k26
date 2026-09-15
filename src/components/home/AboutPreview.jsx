import { ArrowRight, Check } from "lucide-react";

import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import { rules } from "../../data/rules";

function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 sm:py-24">

      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* ABOUT CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">

          <SectionTitle
            label="About TechQuora2k26"
            title="Innovation Beyond Boundaries"
            description="TechQuora2k26 brings students together to explore ideas, showcase their talents and experience a day filled with technology, creativity and collaboration."
          />

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Our symposium features technical and non-technical events
            designed to encourage learning, teamwork, innovation and
            healthy competition among students.
          </p>

          <div className="mt-8">
            <Button to="/about">
              Know More

              <ArrowRight
                size={17}
                className="ml-2"
              />
            </Button>
          </div>

        </div>

        {/* RULES CARD */}
        <div className="rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/5 p-6 sm:p-8 lg:p-10">

          <SectionTitle
            label="Guidelines"
            title="Event Rules"
            description="Please read the general guidelines before participating."
          />

          <div className="mt-7 space-y-4">

            {rules.slice(0, 4).map((rule) => (
              <div
                key={rule.id}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <Check size={13} />
                </div>

                <p className="text-sm leading-6 text-gray-300">
                  {rule.text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-8">
            <Button
              to="/about"
              variant="secondary"
            >
              View All Rules

              <ArrowRight
                size={17}
                className="ml-2"
              />
            </Button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;
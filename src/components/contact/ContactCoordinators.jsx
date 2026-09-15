import {
  Code2,
  UsersRound,
} from "lucide-react";

import ContactCoordinatorCard from "./ContactCoordinatorCard";

import {
  overallCoordinators,
  techCoordinators,
  nonTechCoordinators,
} from "../../data/contactData";

function ContactCoordinators() {
  return (
    <section
      className="
        relative overflow-hidden
        rounded-[28px]
        border border-cyan-400/60
        bg-[#031020]/95
        p-4
        shadow-[0_0_40px_rgba(34,211,238,0.05)]
        sm:p-6
        lg:p-8
      "
    >
      {/* decorative glows */}
      <div className="pointer-events-none absolute -left-28 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <div className="relative">
        {/* TITLE */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <UsersRound
              size={38}
              className="text-fuchsia-300"
            />

            <h2 className="text-3xl font-black italic sm:text-4xl lg:text-5xl">
              <span className="text-cyan-300">
                CONTACT
              </span>{" "}
              <span className="text-fuchsia-300">
                SUPPORT
              </span>
            </h2>
          </div>

          <p className="mt-2 text-sm font-black uppercase tracking-[0.3em] text-cyan-300 sm:text-base">
            Our Coordinators
          </p>
        </div>

        {/* OVERALL */}
        <div className="mt-7">
          <SectionTitle
            icon={UsersRound}
            title="OVERALL COORDINATORS"
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {overallCoordinators.map(
              (coordinator, index) => (
                <ContactCoordinatorCard
                  key={coordinator.id}
                  coordinator={coordinator}
                  large
                  accent={
                    index % 2 === 0
                      ? "cyan"
                      : "pink"
                  }
                />
              )
            )}
          </div>
        </div>

        {/* TECH + NON TECH */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* TECH */}
          <div className="rounded-2xl border border-cyan-400/40 bg-[#041225]/70 p-3 sm:p-4">
            <SectionTitle
              icon={Code2}
              title="TECH COORDINATORS"
            />

            <div className="mt-4 grid grid-cols-2 gap-3">
              {techCoordinators.map(
                (coordinator) => (
                  <ContactCoordinatorCard
                    key={coordinator.id}
                    coordinator={coordinator}
                    accent="cyan"
                  />
                )
              )}
            </div>
          </div>

          {/* NON TECH */}
          <div className="rounded-2xl border border-fuchsia-400/40 bg-[#041225]/70 p-3 sm:p-4">
            <SectionTitle
              icon={UsersRound}
              title="NON-TECH COORDINATORS"
              pink
            />

            <div className="mt-4 grid grid-cols-2 gap-3">
              {nonTechCoordinators.map(
                (coordinator) => (
                  <ContactCoordinatorCard
                    key={coordinator.id}
                    coordinator={coordinator}
                    accent="pink"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  pink = false,
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          bg-[#07172d]
          px-5
          py-2
          ${
            pink
              ? "border-fuchsia-400/60"
              : "border-cyan-400/60"
          }
        `}
      >
        <Icon
          size={22}
          className={
            pink
              ? "text-fuchsia-300"
              : "text-cyan-300"
          }
        />

        <h3
          className={`
            text-xs
            font-black
            italic
            sm:text-sm
            ${
              pink
                ? "text-fuchsia-300"
                : "text-cyan-100"
            }
          `}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default ContactCoordinators;
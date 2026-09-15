import {
  CreditCard,
  UserRound,
  UsersRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "FILL DETAILS",
    text: "Enter your personal and college information.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "CHOOSE EVENT",
    text: "Select your category (Technical / Non-Technical) and event.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "TEAM / INDIVIDUAL",
    text: "Choose team or individual and add team members if required.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "MAKE PAYMENT",
    text: "Complete payment and submit your registration.",
  },
];

function RegistrationSteps() {
  return (
    <aside className="rounded-[24px] border border-fuchsia-400/60 bg-[#041225]/95 p-5 lg:p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
        How To Register
      </p>

      <h2 className="mt-4 text-3xl font-black italic leading-none">
        SIMPLE STEPS,
        <br />

        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          BIG OPPORTUNITIES.
        </span>
      </h2>

      <div className="mt-8 space-y-6">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="flex items-center gap-4"
            >
              <div
                className="
                  flex h-[74px] w-[74px] shrink-0
                  items-center justify-center
                  rounded-[22px]
                  border border-fuchsia-400/70
                  bg-[#07172d]
                  text-2xl font-black text-cyan-300
                  shadow-[0_0_20px_rgba(217,70,239,0.18)]
                "
              >
                {step.number}
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-400/50 text-white">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-sm font-black text-cyan-300">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-300">
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 rotate-[-5deg] text-center text-xl italic leading-6 text-cyan-300">
        Register Today
        <br />
        <span className="text-fuchsia-300">
          Be a Part of TechQuora!
        </span>
      </p>
    </aside>
  );
}

export default RegistrationSteps;
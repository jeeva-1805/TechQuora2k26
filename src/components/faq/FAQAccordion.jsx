import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  UsersRound,
} from "lucide-react";

import { faqData } from "../../data/faqData";

function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((current) =>
      current === id ? null : id
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-cyan-400/60
        bg-[#041225]/95
        p-4
        shadow-[0_0_30px_rgba(34,211,238,0.05)]
        sm:p-6
      "
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-2 text-5xl font-black italic leading-none sm:text-6xl">
          <span className="bg-gradient-to-b from-white via-fuchsia-200 to-cyan-400 bg-clip-text text-transparent">
            FAQ
          </span>
        </h2>

        <p className="mt-1 text-sm text-cyan-100 sm:text-base">
          Quick answers to the most common queries about TECHQUORA 2k26.
        </p>

        {/* Questions */}
        <div className="mt-5 space-y-2.5">
          {faqData.map((item) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-fuchsia-400/70 bg-[#071a31]"
                      : "border-cyan-400/60 bg-[#06172c]/90"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-3
                    py-3
                    text-left
                    sm:px-4
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-fuchsia-400/60
                      bg-fuchsia-400/10
                      text-cyan-300
                      shadow-[0_0_15px_rgba(217,70,239,0.15)]
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <span className="min-w-0 flex-1 text-xs font-medium text-cyan-100 sm:text-sm lg:text-[15px]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`
                      shrink-0
                      text-cyan-300
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-cyan-400/15 px-4 pb-4 pt-3 sm:pl-16">
                    <p className="text-xs leading-6 text-slate-300 sm:text-sm">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <a
          href="/contact"
          className="
            mt-5
            flex
            items-center
            gap-4
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
            px-4
            py-4
            text-white
            transition
            hover:scale-[1.01]
          "
        >
          <UsersRound size={34} />

          <div className="min-w-0 flex-1">
            <p className="font-bold">
              Still have questions?
            </p>

            <p className="text-xs text-white/90">
              Reach out to us via contact form or email.
            </p>
          </div>

          <ChevronRight size={22} />
        </a>
      </div>
    </section>
  );
}

export default FAQAccordion;
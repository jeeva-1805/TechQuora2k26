import {
  CalendarDays,
  FileQuestion,
  Home,
  Mail,
  UsersRound,
} from "lucide-react";

import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    text: "Back to main page",
    path: "/",
    icon: Home,
  },
  {
    title: "About",
    text: "Know more about TECHQUORA",
    path: "/about",
    icon: UsersRound,
  },
  {
    title: "Events",
    text: "Explore all events and competitions",
    path: "/events",
    icon: CalendarDays,
  },
  {
    title: "Coordinators",
    text: "Meet the team",
    path: "/coordinators",
    icon: UsersRound,
  },
  {
    title: "FAQ",
    text: "Your questions, our answers",
    path: "/faq",
    icon: FileQuestion,
  },
  {
    title: "Contact",
    text: "Get in touch with us",
    path: "/contact",
    icon: Mail,
  },
];

function QuickLinks() {
  return (
    <aside className="hidden rounded-[24px] border border-fuchsia-400/60 bg-[#041225]/95 p-5 lg:block">
      <h2 className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
        Quick Links
      </h2>

      <div className="mt-4">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              className="group flex items-center gap-4 border-b border-cyan-400/10 py-4 last:border-none"
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-fuchsia-400/60
                  bg-[#07172d]
                  text-cyan-300
                  shadow-[0_0_18px_rgba(217,70,239,0.15)]
                  transition
                  group-hover:scale-105
                "
              >
                <Icon size={25} />
              </div>

              <div>
                <p className="text-sm font-bold text-cyan-300">
                  {item.title}
                </p>

                <p className="mt-1 text-xs leading-4 text-slate-300">
                  {item.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="mt-8 rotate-[-6deg] text-center text-lg italic leading-5 text-fuchsia-300">
        Register Today
        <br />
        Be a Part of TechQuora!
      </p>
    </aside>
  );
}

export default QuickLinks;
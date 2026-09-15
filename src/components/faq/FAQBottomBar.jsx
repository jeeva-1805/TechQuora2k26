import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

function FAQBottomBar() {
  return (
    <section className="rounded-[24px] border border-fuchsia-400/60 bg-[#041225]/95 p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1.1fr_auto] lg:items-center">
        <Info
          icon={CalendarDays}
          value="1 October 2026"
          label="Event Date"
        />

        <Info
          icon={Clock3}
          value="9:00 AM - 5:00 PM"
          label="Event Time"
        />

        <Info
          icon={MapPin}
          value="Loyola Auditorium"
          label="Venue"
        />

        <div className="text-center lg:text-left">
          <p className="text-[10px] uppercase text-slate-300">
            Ready to be a part of
          </p>

          <p className="font-black text-cyan-300">
            TECHQUORA{" "}
            <span className="text-fuchsia-400">
              2k26?
            </span>
          </p>
        </div>

        <Link
          to="/register"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
            px-6
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:scale-105
          "
        >
          Register Now
          <ArrowRight size={17} />
        </Link>
      </div>

      <p className="mt-5 rotate-[-3deg] text-center text-sm italic text-fuchsia-300">
        Different Events. One Unforgettable Experience!
      </p>
    </section>
  );
}

function Info({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <Icon
        size={25}
        className="text-fuchsia-300"
      />

      <div>
        <p className="text-xs font-medium text-white">
          {value}
        </p>

        <p className="text-[10px] text-cyan-300">
          {label}
        </p>
      </div>
    </div>
  );
}

export default FAQBottomBar;
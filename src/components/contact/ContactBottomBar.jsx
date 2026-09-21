import {ArrowRight,CalendarDays,Clock3,MapPin,} from "lucide-react";

import { Link } from "react-router-dom";

function ContactBottomBar() {
  return (
    <section
      className="
        rounded-[22px]
        border border-fuchsia-400/60
        bg-[#041225]/95
        p-4
      "
    >
      <div
        className="
          grid gap-5
          sm:grid-cols-3
          lg:grid-cols-[1fr_1fr_1fr_auto]
          lg:items-center
        "
      >
        <Info
          icon={CalendarDays}
          value="Sep 30 2026"
          label="Event Date"
        />

        <Info
          icon={Clock3}
          value="9:00 AM - 4:00 PM"
          label="Event Time"
        />

        <Info
          icon={MapPin}
          value="Loyola Auditorium"
          label="Venue"
        />

        <Link
          to="/registration"
          className="
            flex items-center
            justify-center gap-2
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
            px-6 py-3
            text-sm font-bold
            text-white
            shadow-[0_0_20px_rgba(217,70,239,0.2)]
            transition
            hover:scale-105
            sm:col-span-3
            lg:col-span-1
          "
        >
          Register Now
          <ArrowRight size={17} />
        </Link>
      </div>

      <p className="mt-5 rotate-[-2deg] text-center text-sm italic text-fuchsia-300">
        Different Events. One Unforgettable Experience!
      </p>
    </section>
  );
}

function Info({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/50">
        <Icon
          size={20}
          className="text-cyan-300"
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-white">
          {value}
        </p>

        <p className="mt-1 text-[10px] text-cyan-300">
          {label}
        </p>
      </div>
    </div>
  );
}

export default ContactBottomBar;
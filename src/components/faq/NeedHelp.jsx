import {
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
} from "lucide-react";

function NeedHelp() {
  return (
    <aside className="hidden rounded-[24px] border border-fuchsia-400/60 bg-[#041225]/95 p-5 lg:block">
      <h2 className="text-xl font-black uppercase tracking-[0.12em]">
        <span className="text-cyan-300">
          NEED
        </span>{" "}
        <span className="text-fuchsia-300">
          HELP?
        </span>
      </h2>

      <p className="mt-2 text-xs leading-5 text-slate-300">
        Can't find what you're looking for?
        <br />
        We're here to help!
      </p>

      <div className="mt-5 space-y-4">
        <HelpCard
          icon={Mail}
          title="Email Us"
          value="techquora@college.ac.in"
          text="We'll reply as soon as possible."
        />

        <HelpCard
          icon={MessageCircle}
          title="WhatsApp"
          value="+91 98765 43210"
          text="Quick help & support."
        />

        <HelpCard
          icon={MapPin}
          title="Visit Us"
          value="Loyola Auditorium"
          text="Drop by and say hi!"
        />
      </div>

      <div className="mt-6 flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-purple-400/40 bg-[#07162d] p-5 text-center">
        <MessagesSquare
          size={42}
          className="text-fuchsia-300"
        />

        <p className="mt-3 rotate-[-5deg] text-lg italic leading-5 text-cyan-300">
          We're Just
          <br />
          One Message Away!
        </p>
      </div>
    </aside>
  );
}

function HelpCard({
  icon: Icon,
  title,
  value,
  text,
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-cyan-400/50 bg-[#06172c] p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/60 text-cyan-300">
        <Icon size={26} />
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-bold text-cyan-300">
          {title}
        </h3>

        <p className="mt-1 break-words text-xs text-white">
          {value}
        </p>

        <p className="mt-1 text-[11px] text-cyan-300/70">
          {text}
        </p>
      </div>
    </div>
  );
}

export default NeedHelp;
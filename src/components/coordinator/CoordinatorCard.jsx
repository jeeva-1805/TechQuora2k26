import {
  Bug,
  Code2,
  FileText,
  MessageSquare,
  Music2,
  Palette,
  Paintbrush,
  Brain,
  UserRound,
} from "lucide-react";

const icons = {
  paper: FileText,
  bug: Bug,
  palette: Palette,
  code: Code2,
  debate: MessageSquare,
  brush: Paintbrush,
  music: Music2,
  quiz: Brain,
};

function EventCoordinatorCard({
  event,
  accent = "cyan",
}) {
  const Icon = icons[event.icon] || Code2;

  const isPink = accent === "pink";

  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl border
        bg-[#061426]/90 p-4
        backdrop-blur-lg
        transition duration-300
        hover:-translate-y-1
        ${
          isPink
            ? "border-fuchsia-400/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.12)]"
            : "border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
        }
      `}
    >
      {/* EVENT TITLE */}
      <div className="flex items-start gap-3">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            isPink
              ? "bg-fuchsia-400/10 text-fuchsia-300"
              : "bg-cyan-400/10 text-cyan-300"
          }`}
        >
          <Icon size={23} />
        </div>

        <div>
          <h3
            className={`text-sm font-black uppercase ${
              isPink
                ? "text-fuchsia-300"
                : "text-cyan-300"
            }`}
          >
            {event.code}
          </h3>

          <p className="mt-1 text-xs text-slate-300">
            {event.title}
          </p>
        </div>

      </div>

      {/* COORDINATORS */}
      <div
        className={`mt-5 grid gap-3 ${
          event.coordinators.length === 3
            ? "grid-cols-3"
            : "grid-cols-2"
        }`}
      >
        {event.coordinators.map((person) => (
          <div
            key={person.id}
            className="min-w-0 text-center"
          >
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border ${
                isPink
                  ? "border-fuchsia-400/50 bg-fuchsia-400/5"
                  : "border-cyan-400/50 bg-cyan-400/5"
              }`}
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserRound
                  size={22}
                  className={
                    isPink
                      ? "text-fuchsia-300"
                      : "text-cyan-300"
                  }
                />
              )}
            </div>

            <p className="mt-2 truncate text-[11px] font-semibold text-white">
              {person.name}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-500">
              Coordinator
            </p>
          </div>
        ))}
      </div>

    </article>
  );
}

export default EventCoordinatorCard;
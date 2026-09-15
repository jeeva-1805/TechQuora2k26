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
        group relative
        min-h-[280px]
        overflow-hidden
        rounded-3xl
        border
        bg-[#061426]/90
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        ${
          isPink
            ? "border-fuchsia-400/50 hover:shadow-[0_0_35px_rgba(217,70,239,0.14)]"
            : "border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]"
        }
      `}
    >
      {/* BACKGROUND GLOW */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          blur-[80px]
          ${
            isPink
              ? "bg-fuchsia-500/15"
              : "bg-cyan-500/15"
          }
        `}
      />

      {/* EVENT HEADER */}
      <div className="relative flex items-start gap-3">
        <div
          className={`
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            ${
              isPink
                ? "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300"
                : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
            }
          `}
        >
          <Icon size={25} />
        </div>

        <div>
          <h3
            className={`
              text-sm
              font-black
              uppercase
              tracking-wide
              sm:text-base
              ${
                isPink
                  ? "text-fuchsia-300"
                  : "text-cyan-300"
              }
            `}
          >
            {event.code}
          </h3>

          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            {event.title}
          </p>
        </div>
      </div>

      {/* COORDINATORS */}
      <div
        className={`
          relative
          mt-7
          grid
          items-start
          justify-items-center
          gap-5
          ${
            event.coordinators.length === 3
              ? "grid-cols-3"
              : "grid-cols-2"
          }
        `}
      >
        {event.coordinators.map((person) => (
          <div
            key={person.id}
            className="min-w-0 w-full text-center"
          >
            {/* BIGGER PHOTO */}
            <div
              className={`
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-2
                transition-transform
                duration-300
                group-hover:scale-[1.02]
                sm:h-24
                sm:w-24
                lg:h-24
                lg:w-24
                xl:h-28
                xl:w-28
                ${
                  isPink
                    ? "border-fuchsia-400/60 bg-fuchsia-400/5 shadow-[0_0_25px_rgba(217,70,239,0.12)]"
                    : "border-cyan-400/60 bg-cyan-400/5 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                }
              `}
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />
              ) : (
                <UserRound
                  size={34}
                  className={
                    isPink
                      ? "text-fuchsia-300"
                      : "text-cyan-300"
                  }
                />
              )}
            </div>

            {/* NAME */}
            <p className="mt-4 break-words text-xs font-bold text-white sm:text-sm">
              {person.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
              Coordinator
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default EventCoordinatorCard;
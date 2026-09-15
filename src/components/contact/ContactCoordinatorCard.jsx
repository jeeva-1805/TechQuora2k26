import {
  Phone,
  UserRound,
} from "lucide-react";

function ContactCoordinatorCard({
  coordinator,
  large = false,
  accent = "cyan",
}) {
  const isPink = accent === "pink";

  return (
    <article
      className={`
        relative overflow-hidden
        rounded-2xl border
        bg-[#06152a]/95
        p-4
        transition duration-300
        hover:-translate-y-1
        ${
          isPink
            ? "border-fuchsia-400/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.13)]"
            : "border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.13)]"
        }
      `}
    >
      {/* glow */}
      <div
        className={`
          pointer-events-none
          absolute -right-12 -top-12
          h-36 w-36 rounded-full blur-[70px]
          ${
            isPink
              ? "bg-fuchsia-500/15"
              : "bg-cyan-500/15"
          }
        `}
      />

      <div
        className={`
          relative
          ${
            large
              ? "flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left"
              : "flex flex-col items-center text-center"
          }
        `}
      >
        {/* IMAGE */}
        <div
          className={`
            shrink-0 rounded-full
            bg-gradient-to-br
            from-cyan-300 via-blue-500 to-fuchsia-500
            p-[2px]
            ${
              large
                ? "h-28 w-28 sm:h-32 sm:w-32"
                : "h-24 w-24 sm:h-28 sm:w-28"
            }
          `}
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#031020]">
            {coordinator.image ? (
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <UserRound
                size={38}
                className="text-cyan-300"
              />
            )}
          </div>
        </div>

        {/* INFO */}
        <div className={large ? "min-w-0 flex-1" : ""}>
          <h3
            className={`
              mt-3 break-words
              font-black italic
              ${
                large
                  ? "text-xl sm:mt-0 sm:text-2xl"
                  : "text-base sm:text-lg"
              }
              ${
                isPink
                  ? "text-fuchsia-300"
                  : "text-cyan-300"
              }
            `}
          >
            {coordinator.name}
          </h3>

          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            {coordinator.role}
          </p>

          {/* PHONE */}
          <a
            href={`tel:${coordinator.phone.replace(/\s/g, "")}`}
            className="
              mt-3 inline-flex
              items-center gap-2
              rounded-xl
              border border-fuchsia-400/60
              bg-[#071a31]
              px-4 py-2
              text-xs font-semibold
              text-white
              transition
              hover:border-cyan-300
              hover:text-cyan-300
            "
          >
            <Phone
              size={17}
              className="text-cyan-300"
            />

            {coordinator.phone}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ContactCoordinatorCard;
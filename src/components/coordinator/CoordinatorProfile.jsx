import {
  Phone,
  UserRound,
} from "lucide-react";

function CoordinatorProfile({
  name,
  role = "Coordinator",
  department,
  image,
  phone,
  accent = "cyan",
  compact = false,
}) {
  const isPink = accent === "pink";

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border
        bg-[#071426]/90 backdrop-blur-xl
        ${
          isPink
            ? "border-fuchsia-400/40"
            : "border-cyan-400/40"
        }
      `}
    >
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] ${
          isPink
            ? "bg-fuchsia-500/15"
            : "bg-cyan-500/15"
        }`}
      />

      <div
        className={`relative flex ${
          compact
            ? "items-center gap-4 p-4"
            : "flex-col items-center p-5 text-center"
        }`}
      >
        {/* PHOTO */}
        <div
          className={`shrink-0 rounded-full bg-gradient-to-br p-[2px] ${
            isPink
              ? "from-fuchsia-400 via-purple-500 to-cyan-400"
              : "from-cyan-400 via-blue-500 to-fuchsia-400"
          } ${
            compact
              ? "h-20 w-20 sm:h-24 sm:w-24"
              : "h-24 w-24"
          }`}
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#06101f]">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
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
        </div>

        {/* DETAILS */}
        <div
          className={`min-w-0 ${
            compact ? "flex-1" : ""
          }`}
        >
          <h3 className="mt-3 break-words text-sm font-bold text-white sm:text-base">
            {name}
          </h3>

          {role && (
            <p
              className={`mt-1 text-xs ${
                isPink
                  ? "text-fuchsia-300"
                  : "text-cyan-300"
              }`}
            >
              {role}
            </p>
          )}

          {department && (
            <p className="mt-1 text-xs text-slate-400">
              {department}
            </p>
          )}

          {/* PHONE ONLY WHEN AVAILABLE */}
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={`
                mt-3 inline-flex items-center gap-2
                rounded-full border px-3 py-2
                text-[11px] font-medium
                ${
                  isPink
                    ? "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200"
                    : "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                }
              `}
            >
              <Phone size={13} />
              {phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoordinatorProfile;
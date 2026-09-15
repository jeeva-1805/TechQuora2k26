import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function EventCard({
  id,
  slug,
  title,
  description,
  tags,
  image,
  accent = "cyan",
}) {
  const themes = {
    cyan: {
      border: "border-cyan-400/60",
      glow: "shadow-[0_0_30px_rgba(34,211,238,0.10)]",
      imageGlow: "bg-cyan-400/10",
      button:
        "border-cyan-400/70 text-cyan-300 hover:bg-cyan-400 hover:text-black",
      tag: "border-cyan-400/40 text-cyan-200",
    },

    pink: {
      border: "border-fuchsia-400/60",
      glow: "shadow-[0_0_30px_rgba(232,121,249,0.10)]",
      imageGlow: "bg-fuchsia-500/10",
      button:
        "border-fuchsia-400/70 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white",
      tag: "border-fuchsia-400/40 text-fuchsia-200",
    },

    purple: {
      border: "border-violet-400/60",
      glow: "shadow-[0_0_30px_rgba(139,92,246,0.10)]",
      imageGlow: "bg-violet-500/10",
      button:
        "border-violet-400/70 text-violet-300 hover:bg-violet-500 hover:text-white",
      tag: "border-violet-400/40 text-violet-200",
    },

    blue: {
      border: "border-blue-400/60",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.10)]",
      imageGlow: "bg-blue-500/10",
      button:
        "border-blue-400/70 text-blue-300 hover:bg-blue-500 hover:text-white",
      tag: "border-blue-400/40 text-blue-200",
    },

    orange: {
      border: "border-orange-400/60",
      glow: "shadow-[0_0_30px_rgba(251,146,60,0.10)]",
      imageGlow: "bg-orange-500/10",
      button:
        "border-orange-400/70 text-orange-300 hover:bg-orange-500 hover:text-black",
      tag: "border-orange-400/40 text-orange-200",
    },
  };

  const theme = themes[accent] || themes.cyan;

  return (
    <article
      className={`
        group relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        bg-[#06101f]
        transition-all
        duration-500
        hover:-translate-y-1
        ${theme.border}
        ${theme.glow}
      `}
    >
      {/* ================= MOBILE ================= */}

      <div className="flex items-center gap-3 p-3 sm:hidden">
        {/* IMAGE */}
        <div
          className={`
            relative
            h-20
            w-24
            shrink-0
            overflow-hidden
            rounded-xl
            border
            border-white/10
            ${theme.imageGlow}
          `}
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-semibold tracking-wider text-gray-500">
            {id}
          </p>

          <h3 className="mt-1 break-words text-sm font-bold leading-5 text-white">
            {title}
          </h3>

          <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-400">
            {description}
          </p>
        </div>

        {/* ARROW */}
        <Link
          to={`/events/${slug}`}
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300
            hover:scale-110
            ${theme.button}
          `}
          aria-label={`View ${title}`}
        >
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* ================= TABLET / DESKTOP ================= */}

      <div className="hidden h-full flex-col sm:flex">
        {/* EVENT ID */}
        <div className="px-4 pt-4">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400">
            {id}
          </p>
        </div>

        {/* IMAGE */}
        <div
          className={`
            relative
            mx-4
            mt-3
            h-[170px]
            overflow-hidden
            rounded-xl
            border
            border-white/10
            ${theme.imageGlow}
          `}
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06101f]/25 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="break-words text-lg font-bold leading-6 text-white">
            {title}
          </h3>

          <p className="mt-2 min-h-[40px] text-xs leading-5 text-gray-400">
            {description}
          </p>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`
                  rounded
                  border
                  px-2
                  py-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-wide
                  ${theme.tag}
                `}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ARROW BOTTOM RIGHT */}
          <div className="mt-auto flex justify-end pt-5">
            <Link
              to={`/events/${slug}`}
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
                hover:scale-110
                ${theme.button}
              `}
              aria-label={`View ${title}`}
            >
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
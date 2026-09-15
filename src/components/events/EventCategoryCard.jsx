import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function EventCategoryCard({
  title,
  description,
  image,
  type,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      
      <img
        src={image}
        alt={title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6">
        
        <span className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">
          {type}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">
          {description}
        </p>

        <Link
          to={`/events?type=${type}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3"
        >
          Explore Events
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export default EventCategoryCard;
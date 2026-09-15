import EventCard from "./EventCard";

function EventSection({
  type,
  title,
  subtitle,
  events,
}) {
  const isTechnical = type === "technical";

  return (
    <section className="py-7 sm:py-9">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p
            className={`text-[9px] font-bold uppercase tracking-[0.3em] ${
              isTechnical ? "text-cyan-400" : "text-fuchsia-400"
            }`}
          >
            // {isTechnical ? "Technical" : "Non - Technical"}
          </p>

          <h2 className="mt-1 text-xl font-black italic sm:text-2xl lg:text-3xl">
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isTechnical
                  ? "from-white via-cyan-200 to-cyan-400"
                  : "from-white via-fuchsia-200 to-pink-400"
              }`}
            >
              {title}
            </span>
          </h2>
        </div>

        <p className="hidden text-xs text-gray-500 md:block">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EventSection;
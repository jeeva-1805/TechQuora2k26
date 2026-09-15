import CoordinatorCard from "./CoordinatorCard";

function CoordinatorSection({
  label,
  title,
  description,
  coordinators = [],
  accent = "cyan",
  columns = 4,
}) {
  const isCyan = accent === "cyan";

  const gridClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4";

  const coordinatorList = Array.isArray(coordinators)
    ? coordinators
    : [];

  return (
    <section className="py-8 sm:py-10">

      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${
              isCyan
                ? "text-cyan-400"
                : "text-fuchsia-400"
            }`}
          >
            {label}
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-gray-400 lg:text-right">
          {description}
        </p>

      </div>

      {/* COORDINATOR CARDS */}
      {coordinatorList.length > 0 ? (
        <div
          className={`
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            ${gridClass}
          `}
        >
          {coordinatorList.map((coordinator) => (
            <CoordinatorCard
              key={coordinator.id}
              {...coordinator}
              accent={accent}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-gray-400">
          Coordinator details will be updated soon.
        </div>
      )}

    </section>
  );
}

export default CoordinatorSection;
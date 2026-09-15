function SectionTitle({
  label,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
          {label}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
function PageHeader({ title, description }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold md:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        {description}
      </p>
    </section>
  );
}

export default PageHeader;
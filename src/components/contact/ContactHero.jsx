function ContactHero() {
  return (
    <section className="relative min-h-[360px] overflow-hidden border-b border-cyan-400/30 sm:min-h-[420px] lg:min-h-[360px]">
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[68%_center]
          bg-no-repeat
          lg:bg-center
        "
        style={{
          backgroundImage:
            "url('/images/contact/contact-hero.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020a18] via-[#020a18]/80 to-[#020a18]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/70 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[360px] max-w-[1500px] items-center px-5 py-10 sm:min-h-[420px] sm:px-8 lg:min-h-[360px] lg:px-12">
        <div className="max-w-[580px]">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
            We're Here To Help
          </p>

          <h1 className="mt-3 text-5xl font-black italic leading-[0.82] sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-b from-white via-fuchsia-100 to-fuchsia-400 bg-clip-text text-transparent">
              CONTACT
            </span>

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SUPPORT
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold leading-tight sm:text-2xl">
            Have a question? Need assistance?
            <br />
            We're just a message away!
          </h2>

          <p className="mt-3 max-w-[500px] text-sm leading-6 text-slate-300 sm:text-base">
            Reach out to our support team for any queries
            regarding registration, events, payments, or
            technical issues.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
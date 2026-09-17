function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-[#020b18] text-white">
      
      {/* GLOW */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
        
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black sm:text-4xl">
              TechQuora
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                2k26
              </span>
            </h2>

            <div className="mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 lg:mx-0" />

            <p className="mx-auto mt-5 max-w-[330px] text-sm leading-7 text-slate-300 lg:mx-0">
              A small step towards a bigger community.
              Built with passion to create, learn and grow together.
            </p>

            <p className="mt-5 text-xl italic text-cyan-300">
              Ideas Beyond{" "}
              <span className="text-fuchsia-400">
                Tomorrow
              </span>
            </p>
          </div>

          {/* CREATED BY */}
          <div>
            <div className="mb-7 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-cyan-400" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-300">
                Created By
              </p>

              <div className="h-[1px] w-12 bg-fuchsia-400" />
            </div>

            <div className="flex justify-center gap-7 sm:gap-12">
              
              <Creator
                image="/images/footer/creator-1.jpeg"
                name="Jeeva K"
                role="Frontend Developer"
                pink={false}
              />

              <Creator
                image="/images/footer/creator-2.jpeg"
                name="ANDREWS"
                role="Backend Developer"
                pink={true}
              />

            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center lg:border-l lg:border-cyan-400/20 lg:pl-10 lg:text-left">
            
            <h3 className="text-xl font-bold">
              Better Ideas Together
            </h3>

            <div className="mx-auto mt-4 h-[2px] w-14 bg-gradient-to-r from-cyan-400 to-fuchsia-500 lg:mx-0" />

            <p className="mx-auto mt-5 max-w-[280px] text-sm leading-7 text-slate-300 lg:mx-0">
              Two creators turning ideas into meaningful,
              creative and user-friendly digital experiences.
            </p>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Code • Create • Grow • Together
            </p>

          </div>
        </div>
      </div>

      {/* DECORATIVE WAVE */}
      <div className="relative h-12 overflow-hidden">
        <div className="absolute -bottom-16 -left-[5%] h-24 w-[60%] rotate-[4deg] rounded-[50%] border-t border-purple-500/70 bg-purple-600/10" />

        <div className="absolute -bottom-16 -right-[5%] h-24 w-[60%] -rotate-[4deg] rounded-[50%] border-t border-cyan-400/70 bg-blue-600/10" />
      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-cyan-400/20 bg-[#020916]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-400 md:flex-row">
          
          <p>
            © 2026 TechQuora2k26. All rights reserved.
          </p>

          <p>
            Made with{" "}
            <span className="text-lg text-fuchsia-400">
              
            </span>{" "}
            by Jeeva & Andrews
          </p>

        </div>
      </div>

    </footer>
  );
}


function Creator({ image, name, role, pink }) {
  return (
    <div className="w-[125px] text-center sm:w-[150px]">
      
      <div
        className={`
          mx-auto
          h-24 w-24
          rounded-full
          bg-gradient-to-br
          p-[3px]
          sm:h-28 sm:w-28
          ${
            pink
              ? "from-fuchsia-400 via-purple-500 to-pink-500"
              : "from-cyan-300 via-blue-500 to-purple-500"
          }
        `}
      >
        <div className="h-full w-full overflow-hidden rounded-full bg-[#041225]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <h4 className="mt-3 text-base font-black">
        {name}
      </h4>

      <p className="mt-1 text-xs text-slate-300">
        {role}
      </p>

    </div>
  );
}


export default Footer;
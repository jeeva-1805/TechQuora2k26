import FAQHero from "../components/faq/FAQHero";
import QuickLinks from "../components/faq/QuickLinks";
import FAQAccordion from "../components/faq/FAQAccordion";
import NeedHelp from "../components/faq/NeedHelp";
import FAQBottomBar from "../components/faq/FAQBottomBar";

function FAQ() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020b18] text-white">
      {/* HERO */}
      <FAQHero />

      {/* MAIN FAQ AREA */}
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-9">
        <div
          className="
            grid
            gap-4
            lg:grid-cols-[260px_minmax(0,1fr)_280px]
            xl:grid-cols-[300px_minmax(0,1fr)_320px]
          "
        >
          <QuickLinks />

          <FAQAccordion />

          <NeedHelp />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-5">
          <FAQBottomBar />
        </div>

        {/* FOOTER */}
        <p className="pb-2 pt-5 text-center text-[10px] text-cyan-300/70">
          © 2026 TECHQUORA. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default FAQ;
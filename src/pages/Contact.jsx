import ContactHero from "../components/contact/ContactHero";
import SupportFeatures from "../components/contact/SupportFeatures";
import ContactCoordinators from "../components/contact/ContactCoordinators";
import ContactBottomBar from "../components/contact/ContactBottomBar";

function Contact() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020b18] text-white">
      {/* HERO */}
      <ContactHero />

      <div className="mx-auto max-w-[1500px] space-y-5 px-4 py-5 sm:px-6 lg:px-9">
        {/* QUICK RESPONSE / SUPPORT / TEAM */}
        <SupportFeatures />

        {/* COORDINATORS */}
        <ContactCoordinators />

        {/* BOTTOM INFO */}
        <ContactBottomBar />

        {/* COPYRIGHT */}
        <p className="pb-2 text-center text-[10px] text-cyan-300/70">
          © 2026 TECHQUORA. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default Contact;
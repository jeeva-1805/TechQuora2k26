import RegistrationHero from "../components/registration/RegistrationHero";
import RegistrationSteps from "../components/registration/RegistrationSteps";
import RegistrationForm from "../components/registration/RegistrationForm";

function Register() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020b18] text-white">
      <RegistrationHero />

      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-9">
        <div
          className="
            grid
            gap-4
            lg:grid-cols-[310px_minmax(0,1fr)]
            xl:grid-cols-[350px_minmax(0,1fr)]
          "
        >
          <RegistrationSteps />

          <RegistrationForm />
        </div>

        <p className="pb-2 pt-6 text-center text-[10px] text-cyan-300/70">
          © 2026 TECHQUORA. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default Register;
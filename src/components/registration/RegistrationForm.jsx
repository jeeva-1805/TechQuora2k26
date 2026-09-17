import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Building2,
  ChevronDown,
  GraduationCap,
  Phone,
  Send,
  UserRound,
  UsersRound,
} from "lucide-react";

import {
  departments,
  nonTechnicalEvents,
  technicalEvents,
  years,
} from "../../data/registrationData";

const initialForm = {
  fullName: "",
  collegeName: "",
  year: "",
  department: "",
  mobile: "",
  category: "Technical",
  participationType: "Individual",
  event: "",
  member1: "",
  member2: "",
  member3: "",
  member4: "",
};

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState("");

  const events =
    formData.category === "Technical"
      ? technicalEvents
      : nonTechnicalEvents;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeCategory = (category) => {
    setFormData((prev) => ({
      ...prev,
      category,
      event: "",
    }));

    setMessage("");
  };

  const changeParticipation = (type) => {
    setFormData((prev) => ({
      ...prev,
      participationType: type,
      member1: "",
      member2: "",
      member3: "",
      member4: "",
    }));

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !formData.fullName.trim() ||
      !formData.collegeName.trim() ||
      !formData.year ||
      !formData.department ||
      !formData.mobile.trim() ||
      !formData.event
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(formData.mobile.trim())) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (
      formData.participationType === "Team" &&
      !formData.member1.trim()
    ) {
      setMessage("Please enter at least one team member.");
      return;
    }

    sessionStorage.setItem(
      "techquoraRegistration",
      JSON.stringify(formData)
    );

    navigate("/payment");
  };

  return (
    <section className="rounded-[24px] border border-cyan-400/60 bg-[#041225]/95 p-4 sm:p-5">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
        Registration Form
      </p>

      <h2 className="mt-2 text-3xl font-black italic">
        JOIN{" "}
        <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
          TECHQUORA 2026
        </span>
      </h2>

      <p className="mt-1 text-sm text-slate-300">
        Fill in the details below to register for the symposium.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-3"
      >
        {/* Full Name + College */}
        <div className="grid gap-3 sm:grid-cols-2">
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            icon={UserRound}
            required
          />

          <InputField
            label="College Name"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Enter your college name"
            icon={Building2}
            required
          />
        </div>

        {/* Year + Department */}
        <div className="grid gap-3 sm:grid-cols-2">
          <SelectField
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            options={years}
            placeholder="Select your year"
            icon={GraduationCap}
            required
          />

          <SelectField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={departments}
            placeholder="Select your department"
            icon={GraduationCap}
            required
          />
        </div>

        {/* Mobile Number */}
        <InputField
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your 10-digit mobile number"
          icon={Phone}
          type="tel"
          inputMode="numeric"
          maxLength={10}
          required
        />

        {/* Event Category */}
        <div>
          <Label text="Event Category" />

          <div className="grid grid-cols-2 gap-3">
            <ChoiceButton
              active={formData.category === "Technical"}
              onClick={() => changeCategory("Technical")}
              icon="</>"
              title="Technical Events"
            />

            <ChoiceButton
              active={formData.category === "Non-Technical"}
              onClick={() =>
                changeCategory("Non-Technical")
              }
              icon={<UsersRound size={20} />}
              title="Non-Technical Events"
            />
          </div>
        </div>

        {/* Participation Type */}
        <div>
          <Label text="Team / Individual" />

          <div className="grid grid-cols-2 gap-3">
            <ChoiceButton
              active={
                formData.participationType === "Individual"
              }
              onClick={() =>
                changeParticipation("Individual")
              }
              icon={<UserRound size={20} />}
              title="Individual"
              subtitle="Solo Participation"
            />

            <ChoiceButton
              active={formData.participationType === "Team"}
              onClick={() => changeParticipation("Team")}
              icon={<UsersRound size={20} />}
              title="Team"
              subtitle="Max 4 Members"
            />
          </div>
        </div>

        {/* Event Selection */}
        <SelectField
          label="Select Your Event"
          name="event"
          value={formData.event}
          onChange={handleChange}
          options={events}
          placeholder="Choose event you want to participate in"
          required
        />

        {/* Team Members */}
        {formData.participationType === "Team" && (
          <div>
            <Label text="Team Members (Max 4)" />

            <div className="grid gap-3 sm:grid-cols-2">
              {[1, 2, 3, 4].map((number) => (
                <InputField
                  key={number}
                  label={`${number}. Member Name`}
                  name={`member${number}`}
                  value={formData[`member${number}`]}
                  onChange={handleChange}
                  placeholder={`Enter member ${number} name`}
                  icon={UserRound}
                  required={number === 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Error Message */}
        {message && (
          <div className="rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/5 p-3 text-center text-xs text-fuchsia-200">
            {message}
          </div>
        )}

        {/* Proceed to Payment */}
        <button
          type="submit"
          className="
            flex w-full items-center justify-center gap-3
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-purple-500
            to-cyan-400
            px-5 py-3.5
            text-sm font-bold text-white
            shadow-[0_0_25px_rgba(34,211,238,0.15)]
            transition
            hover:scale-[1.01]
          "
        >
          <Send size={18} />

          Proceed to Payment

          <span>→</span>
        </button>

        <p className="text-center text-[10px] text-cyan-300/70">
          🔒 Your information is secure with us.
        </p>
      </form>
    </section>
  );
}

/* =========================
   Reusable Components
========================= */

function Label({ text, required = true }) {
  return (
    <label className="mb-1 block text-xs font-medium text-white">
      {text}

      {required && (
        <span className="ml-1 text-fuchsia-400">
          *
        </span>
      )}
    </label>
  );
}

function InputField({
  label,
  icon: Icon,
  required,
  ...props
}) {
  return (
    <div>
      <Label
        text={label}
        required={required}
      />

      <div className="flex items-center rounded-lg border border-cyan-400/50 bg-[#06172c] transition focus-within:border-fuchsia-400">
        {Icon && (
          <Icon
            size={17}
            className="ml-3 shrink-0 text-cyan-300"
          />
        )}

        <input
          {...props}
          required={required}
          className="w-full bg-transparent px-3 py-3 text-xs text-white outline-none placeholder:text-cyan-300/60"
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  options,
  placeholder,
  icon: Icon,
  required,
  ...props
}) {
  return (
    <div>
      <Label
        text={label}
        required={required}
      />

      <div className="relative flex items-center rounded-lg border border-cyan-400/50 bg-[#06172c] transition focus-within:border-fuchsia-400">
        {Icon && (
          <Icon
            size={17}
            className="ml-3 shrink-0 text-cyan-300"
          />
        )}

        <select
          {...props}
          required={required}
          className="w-full appearance-none bg-transparent px-3 py-3 pr-9 text-xs text-cyan-100 outline-none"
        >
          <option
            value=""
            className="bg-[#06172c]"
          >
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#06172c]"
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 text-cyan-300"
        />
      </div>
    </div>
  );
}

function ChoiceButton({
  active,
  onClick,
  icon,
  title,
  subtitle,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex min-h-[58px] items-center justify-center gap-3
        rounded-lg border px-3 py-2
        text-left transition
        ${
          active
            ? "border-cyan-300 bg-gradient-to-r from-blue-600/30 to-purple-600/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            : "border-cyan-400/40 bg-[#06172c]"
        }
      `}
    >
      <div className="text-xl font-bold text-cyan-300">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-white">
          {title}
        </p>

        {subtitle && (
          <p className="text-[9px] text-cyan-300">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}

export default RegistrationForm;
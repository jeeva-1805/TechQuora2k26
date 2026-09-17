import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Loader2,
  QrCode,
} from "lucide-react";

import { GOOGLE_SHEET_URL } from "../config/googleSheet";

function Payment() {
  const navigate = useNavigate();

  const [registration, setRegistration] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedData = sessionStorage.getItem(
      "techquoraRegistration"
    );

    if (!savedData) {
      navigate("/registration");
      return;
    }

    try {
      setRegistration(JSON.parse(savedData));
    } catch {
      sessionStorage.removeItem("techquoraRegistration");
      navigate("/registration");
    }
  }, [navigate]);

  const handleScreenshot = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please upload an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Screenshot must be below 5 MB.");
      return;
    }

    setPaymentScreenshot(file);
    setPreview(URL.createObjectURL(file));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registration) return;

    if (!transactionId.trim()) {
      setMessage("Please enter your transaction ID.");
      return;
    }

    if (!paymentScreenshot) {
      setMessage("Please upload your payment screenshot.");
      return;
    }

    if (
      !GOOGLE_SHEET_URL ||
      GOOGLE_SHEET_URL.includes("PASTE_")
    ) {
      setMessage("Apps Script URL is not configured.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const payload = new URLSearchParams();

      Object.entries(registration).forEach(([key, value]) => {
        payload.append(key, value || "");
      });

      payload.append("transactionId", transactionId.trim());
      payload.append("paymentStatus", "Pending Verification");
      payload.append("submittedAt", new Date().toISOString());

      /*
        Screenshot upload will be connected to
        Google Drive in the next step.

        For now we validate that the student
        selected a screenshot before submission.
      */
      payload.append(
        "paymentScreenshot",
        paymentScreenshot.name
      );

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      sessionStorage.removeItem("techquoraRegistration");

      setSuccess(true);
    } catch (error) {
      console.error("Registration error:", error);

      setMessage(
        "Unable to complete registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!registration) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020b18] text-white">
        <Loader2 className="animate-spin text-cyan-300" />
      </main>
    );
  }

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020b18] px-4 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-cyan-400/40 bg-[#041225] p-8 text-center">
          <CheckCircle2
            size={64}
            className="mx-auto text-cyan-300"
          />

          <h1 className="mt-5 text-3xl font-black">
            Registration Complete!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Your TechQuora2k26 registration has been submitted.
            Your payment will be verified by the coordinator.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-7 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-7 py-3 text-sm font-bold"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020b18] px-4 py-12 text-white">
      <div className="mx-auto max-w-5xl">

        <button
          type="button"
          onClick={() => navigate("/registration")}
          className="mb-6 flex items-center gap-2 text-sm text-cyan-300"
        >
          <ArrowLeft size={17} />
          Back to Registration
        </button>

        <div className="mb-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Final Step
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            COMPLETE{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              PAYMENT
            </span>
          </h1>

          <p className="mt-3 text-sm text-slate-300">
            Complete your payment to confirm your registration.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Registration Summary */}
            <section className="rounded-3xl border border-cyan-400/30 bg-[#041225] p-6">
              <h2 className="text-lg font-black text-cyan-300">
                Registration Summary
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <Summary
                  label="Name"
                  value={registration.fullName}
                />

                <Summary
                  label="College"
                  value={registration.collegeName}
                />

                <Summary
                  label="Event"
                  value={registration.event}
                />

                <Summary
                  label="Category"
                  value={registration.category}
                />

                <Summary
                  label="Participation"
                  value={registration.participationType}
                />
              </div>
            </section>

            {/* Payment Details */}
            <section className="rounded-3xl border border-fuchsia-400/30 bg-[#041225] p-6">
              <div className="flex items-center gap-3">
                <CreditCard className="text-fuchsia-400" />

                <h2 className="text-lg font-black">
                  Payment Details
                </h2>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[#06172c] p-5 text-center">
                <QrCode
                  size={32}
                  className="mx-auto text-cyan-300"
                />

                <p className="mt-3 text-xs text-slate-400">
                  Scan QR Code to Pay
                </p>

                <img
                  src="/images/registration/payment-qr.jpeg"
                  alt="TechQuora payment QR code"
                  className="mx-auto mt-4 h-52 w-52 rounded-xl bg-white object-contain p-2"
                />

                <p className="mt-4 text-xs text-slate-400">
                  Registration Fee
                </p>

                <p className="mt-1 text-3xl font-black text-cyan-300">
                  ₹ 250
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-cyan-400/40 bg-[#041225] p-6"
          >
            <h2 className="text-xl font-black">
              Payment Confirmation
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              After completing the payment, enter your transaction
              ID and upload the payment screenshot.
            </p>

            <div className="mt-6">
              <label className="mb-2 block text-xs font-bold">
                Transaction ID
                <span className="ml-1 text-fuchsia-400">*</span>
              </label>

              <input
                type="text"
                value={transactionId}
                onChange={(e) =>
                  setTransactionId(e.target.value)
                }
                placeholder="Enter UPI / Transaction ID"
                className="w-full rounded-xl border border-cyan-400/40 bg-[#06172c] px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-fuchsia-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs font-bold">
                Payment Screenshot
                <span className="ml-1 text-fuchsia-400">*</span>
              </label>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-cyan-400/50 bg-[#06172c] p-6 text-center transition hover:border-fuchsia-400">
                <span className="text-sm font-bold text-cyan-300">
                  Upload Payment Screenshot
                </span>

                <span className="mt-2 text-[10px] text-slate-400">
                  JPG, PNG or WEBP • Maximum 5 MB
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshot}
                  className="hidden"
                />
              </label>
            </div>

            {preview && (
              <div className="mt-5">
                <p className="mb-2 text-xs text-slate-400">
                  Screenshot Preview
                </p>

                <img
                  src={preview}
                  alt="Payment screenshot preview"
                  className="max-h-72 w-full rounded-xl border border-white/10 object-contain"
                />
              </div>
            )}

            {message && (
              <div className="mt-5 rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/5 p-3 text-center text-xs text-fuchsia-200">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-5 py-4 text-sm font-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} />
                  Complete Registration
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[10px] text-slate-500">
              Your registration will be confirmed after payment
              verification.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

function Summary({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-white/5 pb-3">
      <span className="text-slate-400">
        {label}
      </span>

      <span className="text-right font-semibold text-white">
        {value || "-"}
      </span>
    </div>
  );
}

export default Payment;
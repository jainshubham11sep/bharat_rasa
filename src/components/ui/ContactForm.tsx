"use client";

import { useState, FormEvent } from "react";
// Note: form data is passed directly to Calendly via URL params

interface ContactFormState {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string;
}

const countryCodes = [
  { value: "australia", flag: "🇦🇺", code: "+61" },
  { value: "canada", flag: "🇨🇦", code: "+1" },
  { value: "india", flag: "🇮🇳", code: "+91", default: true },
  { value: "new_zealand", flag: "🇳🇿", code: "+64" },
  { value: "uae", flag: "🇦🇪", code: "+971" },
  { value: "united_kingdom", flag: "🇬🇧", code: "+44" },
  { value: "united_states", flag: "🇺🇸", code: "+1" },
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1001+ employees",
];

const budgetOptions = [
  "Less than ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹3,00,000/month",
  "₹3,00,000 – ₹5,00,000/month",
  "₹5,00,000+/month",
];

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>({
    status: "idle",
    errorMessage: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting", errorMessage: "" });

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("from_name") as string;
    const email = data.get("reply_to") as string;

    // Build Calendly URL with prefilled name & email
    const calendlyBase = "https://calendly.com/bharatinnovations";
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (email) params.set("email", email);

    setState({ status: "success", errorMessage: "" });
    setTimeout(() => {
      window.location.href = `${calendlyBase}?${params.toString()}`;
    }, 800);
  }

  if (state.status === "success") {
    return (
      <div className="ggcontact">
        <div className="ggc-success ggc-alert ggc-alert-success">
          <h3>Thank you!</h3>
          <p>Redirecting you to our calendar to pick a date &amp; time...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ggcontact">
      <div className="ggc-head">
        <h1 className="ggc-title">Book a Free Strategy Call</h1>
        <p className="ggc-sub">
          We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to
          you as soon as possible.
        </p>
      </div>


      <form className="ggc-card ggc-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="currency" value="INR" />
        <input type="hidden" name="currency_symbol" value="₹" />
        <input type="hidden" name="country" value="India" />

        <div className="ggc-grid">
          <div>
            <label>
              Full Name <span className="req">*</span>
            </label>
            <input name="from_name" type="text" required placeholder="John Doe" />
          </div>

          <div>
            <label>
              Email Address <span className="req">*</span>
            </label>
            <input name="reply_to" type="email" required placeholder="john.doe@example.com" />
          </div>

          <div>
            <label>
              Contact Number <span className="req">*</span>
            </label>
            <div className="ggc-phone-group">
              <select name="country_code" required>
                {countryCodes.map((c) => (
                  <option key={c.value} value={c.value} defaultValue={c.default ? c.value : undefined}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                name="contact_number"
                type="tel"
                inputMode="numeric"
                required
                placeholder="9876543210"
              />
            </div>
          </div>

          <div>
            <label>Designation</label>
            <input name="designation" type="text" placeholder="CEO, Marketing Manager, etc." />
          </div>

          <div>
            <label>
              Company Name <span className="req">*</span>
            </label>
            <input name="company_name" type="text" required placeholder="Acme Corporation" />
          </div>

          <div>
            <label>Company Size</label>
            <select name="company_size">
              <option value="">Select company size</option>
              {companySizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label>
              Domain <span className="req">*</span>
            </label>
            <input name="domain" type="text" required placeholder="www.yourcompany.com" />
          </div>

          <div>
            <label>
              Instagram <span className="req">*</span>
            </label>
            <input name="instagram" type="text" required placeholder="@yourusername" />
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            How did you discover us? <span className="req">*</span>
          </label>
          <div className="ggc-radio-group">
            {["Organic Content", "Ads", "Referral"].map((opt) => (
              <label key={opt} className="ggc-radio-chip">
                <input type="radio" name="discovered_via" value={opt} required />
                <span style={{ color: "#fff" }}>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            Current ROAS <span className="req">*</span>
          </label>
          <input name="current_roas" type="text" required placeholder="e.g. 3.5x" />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            Current monthly revenue (₹) (numbers only) <span className="req">*</span>
          </label>
          <input
            name="current_revenue"
            type="number"
            inputMode="numeric"
            required
            placeholder="500000"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            Problem you&apos;re facing <span className="req">*</span>
          </label>
          <input
            name="problem"
            type="text"
            required
            placeholder="Low lead quality, inconsistent brand messaging..."
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            Monthly marketing budget <span className="req">*</span>
          </label>
          <select name="budget" required>
            <option value="">Select your budget</option>
            {budgetOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>
            Message <span className="req">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Please describe how we can help you..."
          />
        </div>

        <div className="ggc-actions">
          <button type="submit" className="ggc-btn" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

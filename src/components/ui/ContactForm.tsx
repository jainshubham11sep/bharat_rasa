"use client";

import { useState, FormEvent } from "react";

interface ContactFormState {
  status: "idle" | "submitting";
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

const discoveryOptions = ["Organic Content", "Ads", "Referral"];

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>({ status: "idle" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });

    const data = new FormData(e.currentTarget);
    const name = (data.get("from_name") as string) || "";
    const email = (data.get("reply_to") as string) || "";

    // Fire-and-forget — save form data
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    }).catch(() => {});

    // Redirect directly to Calendly with name & email pre-filled
    const params = new URLSearchParams({ hide_gdpr_banner: "1" });
    if (name) params.set("name", name);
    if (email) params.set("email", email);
    window.location.href = `https://calendly.com/bharatinnovations?${params.toString()}`;
  }

  return (
    <div className="ggcontact">
      <div className="ggc-head">
        <h1 className="ggc-title">Book a Free Strategy Call</h1>
        <p className="ggc-sub">
          Fill out every field below — we&apos;ll use these details to prepare for your call.
        </p>
      </div>

      <form className="ggc-card ggc-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="currency" value="INR" />
        <input type="hidden" name="currency_symbol" value="₹" />
        <input type="hidden" name="country" value="India" />

        <div className="ggc-grid">
          <div>
            <label>Full Name <span className="req">*</span></label>
            <input name="from_name" type="text" required placeholder="John Doe" />
          </div>

          <div>
            <label>Email Address <span className="req">*</span></label>
            <input name="reply_to" type="email" required placeholder="john.doe@example.com" />
          </div>

          <div>
            <label>Contact Number <span className="req">*</span></label>
            <div className="ggc-phone-group">
              <select name="country_code" required>
                {countryCodes.map((c) => (
                  <option key={c.value} value={c.value}>
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
            <label>Designation <span className="req">*</span></label>
            <input name="designation" type="text" required placeholder="CEO, Marketing Manager, etc." />
          </div>

          <div>
            <label>Company Name <span className="req">*</span></label>
            <input name="company_name" type="text" required placeholder="Acme Corporation" />
          </div>

          <div>
            <label>Company Size <span className="req">*</span></label>
            <select name="company_size" required>
              <option value="">Select company size</option>
              {companySizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Website / Domain <span className="req">*</span></label>
            <input name="domain" type="text" required placeholder="www.yourcompany.com" />
          </div>

          <div>
            <label>Instagram Handle <span className="req">*</span></label>
            <input name="instagram" type="text" required placeholder="@yourusername" />
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>How did you discover us? <span className="req">*</span></label>
          <div className="ggc-radio-group">
            {discoveryOptions.map((opt) => (
              <label key={opt} className="ggc-radio-chip">
                <input type="radio" name="discovered_via" value={opt} required />
                <span style={{ color: "#fff" }}>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Current ROAS <span className="req">*</span></label>
          <input name="current_roas" type="text" required placeholder="e.g. 3.5x" />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Current Monthly Revenue (₹) <span className="req">*</span></label>
          <input
            name="current_revenue"
            type="number"
            inputMode="numeric"
            required
            placeholder="500000"
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Problem You&apos;re Facing <span className="req">*</span></label>
          <input
            name="problem"
            type="text"
            required
            placeholder="Low lead quality, inconsistent brand messaging..."
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Monthly Marketing Budget <span className="req">*</span></label>
          <select name="budget" required>
            <option value="">Select your budget</option>
            {budgetOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Message <span className="req">*</span></label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Please describe how we can help you..."
          />
        </div>

        <div className="ggc-actions">
          <button type="submit" className="ggc-btn" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "Redirecting..." : "Submit & Book a Call"}
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState, FormEvent, useRef } from "react";

const countryCodes = [
  { value: "australia", flag: "🇦🇺", code: "+61" },
  { value: "canada",    flag: "🇨🇦", code: "+1"  },
  { value: "india",     flag: "🇮🇳", code: "+91", default: true },
  { value: "new_zealand",flag: "🇳🇿", code: "+64" },
  { value: "uae",       flag: "🇦🇪", code: "+971" },
  { value: "united_kingdom", flag: "🇬🇧", code: "+44" },
  { value: "united_states",  flag: "🇺🇸", code: "+1"  },
];

const companySizes = [
  "1-10 employees", "11-50 employees", "51-200 employees",
  "201-500 employees", "501-1000 employees", "1001+ employees",
];

const budgetOptions = [
  "Less than ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹3,00,000/month",
  "₹3,00,000 – ₹5,00,000/month",
  "₹5,00,000+/month",
];

const discoveryOptions = ["Organic Content", "Ads", "Referral"];

type Errors = Record<string, string>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const req = (key: string, label: string) => {
      const v = (data.get(key) as string || "").trim();
      if (!v) e[key] = `${label} is required.`;
    };

    req("from_name",       "Full Name");
    req("reply_to",        "Email Address");
    req("contact_number",  "Contact Number");
    req("designation",     "Designation");
    req("company_name",    "Company Name");
    req("company_size",    "Company Size");
    req("current_roas",    "Current ROAS");
    req("current_revenue", "Current Monthly Revenue");
    req("problem",         "Problem You're Facing");
    req("budget",          "Monthly Marketing Budget");
    req("message",         "Message");

    // Email format
    const email = (data.get("reply_to") as string || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e["reply_to"] = "Enter a valid email address.";

    // Radio — discovered_via
    if (!data.get("discovered_via"))
      e["discovered_via"] = "Please select how you discovered us.";

    return e;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error field
      const firstKey = Object.keys(errs)[0];
      const el = e.currentTarget.querySelector(`[name="${firstKey}"]`) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setErrors({});
    setSubmitting(true);

    const name  = (data.get("from_name")  as string) || "";
    const email = (data.get("reply_to")   as string) || "";

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    }).catch(() => {});

    const params = new URLSearchParams({ hide_gdpr_banner: "1" });
    if (name)  params.set("name",  name);
    if (email) params.set("email", email);
    window.location.href = `https://calendly.com/bharatinnovations?${params.toString()}`;
  }

  // Clear error as user edits the field
  const clear = (name: string) =>
    setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });

  const Err = ({ field }: { field: string }) =>
    errors[field] ? <span className="ggc-err">{errors[field]}</span> : null;

  return (
    <div className="ggcontact">
      <div className="ggc-head">
        <h1 className="ggc-title">Book a Free Strategy Call</h1>
        <p className="ggc-sub">
          Fill in your details below — we&apos;ll use them to prepare for your call.
        </p>
      </div>

      <form className="ggc-card ggc-form" onSubmit={handleSubmit} noValidate ref={formRef}>
        <input type="hidden" name="currency" value="INR" />
        <input type="hidden" name="currency_symbol" value="₹" />
        <input type="hidden" name="country" value="India" />

        <div className="ggc-grid">
          {/* Full Name */}
          <div>
            <label>Full Name <span className="req">*</span></label>
            <input
              name="from_name" type="text"
              placeholder="John Doe"
              className={errors.from_name ? "ggc-input-err" : ""}
              onChange={() => clear("from_name")}
            />
            <Err field="from_name" />
          </div>

          {/* Email */}
          <div>
            <label>Email Address <span className="req">*</span></label>
            <input
              name="reply_to" type="email"
              placeholder="john.doe@example.com"
              className={errors.reply_to ? "ggc-input-err" : ""}
              onChange={() => clear("reply_to")}
            />
            <Err field="reply_to" />
          </div>

          {/* Phone */}
          <div>
            <label>Contact Number <span className="req">*</span></label>
            <div className="ggc-phone-group">
              <select name="country_code">
                {countryCodes.map((c) => (
                  <option key={c.value} value={c.value}>{c.flag} {c.code}</option>
                ))}
              </select>
              <input
                name="contact_number" type="tel" inputMode="numeric"
                placeholder="9876543210"
                className={errors.contact_number ? "ggc-input-err" : ""}
                onChange={() => clear("contact_number")}
              />
            </div>
            <Err field="contact_number" />
          </div>

          {/* Designation */}
          <div>
            <label>Designation <span className="req">*</span></label>
            <input
              name="designation" type="text"
              placeholder="CEO, Marketing Manager, etc."
              className={errors.designation ? "ggc-input-err" : ""}
              onChange={() => clear("designation")}
            />
            <Err field="designation" />
          </div>

          {/* Company Name */}
          <div>
            <label>Company Name <span className="req">*</span></label>
            <input
              name="company_name" type="text"
              placeholder="Acme Corporation"
              className={errors.company_name ? "ggc-input-err" : ""}
              onChange={() => clear("company_name")}
            />
            <Err field="company_name" />
          </div>

          {/* Company Size */}
          <div>
            <label>Company Size <span className="req">*</span></label>
            <select
              name="company_size"
              className={errors.company_size ? "ggc-input-err" : ""}
              onChange={() => clear("company_size")}
            >
              <option value="">Select company size</option>
              {companySizes.map((s) => <option key={s}>{s}</option>)}
            </select>
            <Err field="company_size" />
          </div>

          {/* Website — optional */}
          <div>
            <label>
              Website / Domain
              <span className="ggc-optional"> (optional)</span>
            </label>
            <input name="domain" type="text" placeholder="www.yourcompany.com" />
          </div>

          {/* Instagram — optional */}
          <div>
            <label>
              Instagram Handle
              <span className="ggc-optional"> (optional)</span>
            </label>
            <input name="instagram" type="text" placeholder="@yourusername" />
          </div>
        </div>

        {/* How did you discover us */}
        <div style={{ marginTop: "1rem" }}>
          <label>How did you discover us? <span className="req">*</span></label>
          <div className="ggc-radio-group">
            {discoveryOptions.map((opt) => (
              <label key={opt} className="ggc-radio-chip">
                <input
                  type="radio" name="discovered_via" value={opt}
                  onChange={() => clear("discovered_via")}
                />
                <span style={{ color: "#fff" }}>{opt}</span>
              </label>
            ))}
          </div>
          <Err field="discovered_via" />
        </div>

        {/* Current ROAS */}
        <div style={{ marginTop: "1rem" }}>
          <label>Current ROAS <span className="req">*</span></label>
          <input
            name="current_roas" type="text"
            placeholder="e.g. 3.5x"
            className={errors.current_roas ? "ggc-input-err" : ""}
            onChange={() => clear("current_roas")}
          />
          <Err field="current_roas" />
        </div>

        {/* Current Revenue */}
        <div style={{ marginTop: "1rem" }}>
          <label>Current Monthly Revenue (₹) <span className="req">*</span></label>
          <input
            name="current_revenue" type="number" inputMode="numeric"
            placeholder="500000"
            className={errors.current_revenue ? "ggc-input-err" : ""}
            onChange={() => clear("current_revenue")}
          />
          <Err field="current_revenue" />
        </div>

        {/* Problem */}
        <div style={{ marginTop: "1rem" }}>
          <label>Problem You&apos;re Facing <span className="req">*</span></label>
          <input
            name="problem" type="text"
            placeholder="Low lead quality, inconsistent brand messaging..."
            className={errors.problem ? "ggc-input-err" : ""}
            onChange={() => clear("problem")}
          />
          <Err field="problem" />
        </div>

        {/* Budget */}
        <div style={{ marginTop: "1rem" }}>
          <label>Monthly Marketing Budget <span className="req">*</span></label>
          <select
            name="budget"
            className={errors.budget ? "ggc-input-err" : ""}
            onChange={() => clear("budget")}
          >
            <option value="">Select your budget</option>
            {budgetOptions.map((b) => <option key={b}>{b}</option>)}
          </select>
          <Err field="budget" />
        </div>

        {/* Message */}
        <div style={{ marginTop: "1rem" }}>
          <label>Message <span className="req">*</span></label>
          <textarea
            name="message" rows={5}
            placeholder="Please describe how we can help you..."
            className={errors.message ? "ggc-input-err" : ""}
            onChange={() => clear("message")}
          />
          <Err field="message" />
        </div>

        {/* Global warning if errors present */}
        {Object.keys(errors).length > 0 && (
          <div className="ggc-global-err">
            ⚠️ Please fill in all required fields before submitting.
          </div>
        )}

        <div className="ggc-actions">
          <button type="submit" className="ggc-btn" disabled={submitting}>
            {submitting ? "Redirecting..." : "Submit & Book a Call"}
          </button>
        </div>
      </form>

      <style>{`
        .ggc-err {
          display: block;
          margin-top: 0.25rem;
          font-size: 0.76rem;
          color: #f87171;
          font-weight: 500;
        }
        .ggc-input-err {
          border-color: #f87171 !important;
          background: rgba(248,113,113,0.06) !important;
        }
        .ggc-optional {
          font-size: 0.74rem;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
          margin-left: 0.25rem;
        }
        .ggc-global-err {
          margin-top: 0.75rem;
          padding: 0.7rem 1rem;
          background: rgba(248,113,113,0.1);
          border: 1px solid rgba(248,113,113,0.3);
          border-radius: 8px;
          color: #f87171;
          font-size: 0.84rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";

const ALL_SERVICES = [
  "Social Media Growth",
  "Web Development",
  "Paid Advertising",
  "SEO & Content",
  "AI Automation",
  "Influencer Marketing",
  "Creative Strategy",
  "Not Sure — Need Guidance",
];

const GOALS = [
  "More Sales / Revenue",
  "Higher ROAS",
  "Brand Awareness",
  "Lead Generation",
  "Website / Store Redesign",
  "Scale Existing Ads",
  "Everything — Full Growth Package",
];

const BUDGETS = [
  "Less than ₹25,000/month",
  "₹25,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹3,00,000/month",
  "₹3,00,000+/month",
];

const TIMELINES = ["ASAP", "Within 1 Month", "1–3 Months", "Just Exploring"];

const COUNTRY_CODES = [
  { flag: "🇮🇳", code: "+91", value: "india" },
  { flag: "🇺🇸", code: "+1",  value: "us" },
  { flag: "🇦🇪", code: "+971", value: "uae" },
  { flag: "🇬🇧", code: "+44", value: "uk" },
  { flag: "🇦🇺", code: "+61", value: "australia" },
];

interface Props {
  service?: string;
}

export default function QuoteForm({ service = "" }: Props) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const name  = (data.get("name")  as string) || "";
    const email = (data.get("email") as string) || "";

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

  return (
    <div className="qf-wrap">
      <div className="qf-head">
        <p className="qf-eyebrow">Get a Free Quote</p>
        <h2 className="qf-title">Tell us about your project</h2>
        <p className="qf-sub">We&apos;ll review your details and prepare a custom quote on the call.</p>
      </div>

      <form className="qf-form" onSubmit={handleSubmit} noValidate>

        {/* ── Row 1: Name + Email ── */}
        <div className="qf-grid2">
          <div className="qf-field">
            <label>Full Name <span className="qf-req">*</span></label>
            <input name="name" type="text" required placeholder="John Doe" />
          </div>
          <div className="qf-field">
            <label>Email Address <span className="qf-req">*</span></label>
            <input name="email" type="email" required placeholder="john@company.com" />
          </div>
        </div>

        {/* ── Row 2: Phone + Business Name ── */}
        <div className="qf-grid2">
          <div className="qf-field">
            <label>Phone Number <span className="qf-req">*</span></label>
            <div className="qf-phone">
              <select name="country_code">
                {COUNTRY_CODES.map(c => (
                  <option key={c.value} value={c.value}>{c.flag} {c.code}</option>
                ))}
              </select>
              <input name="phone" type="tel" inputMode="numeric" required placeholder="9876543210" />
            </div>
          </div>
          <div className="qf-field">
            <label>Business Name <span className="qf-req">*</span></label>
            <input name="business_name" type="text" required placeholder="Your Brand / Company" />
          </div>
        </div>

        {/* ── Website + Instagram ── */}
        <div className="qf-grid2">
          <div className="qf-field">
            <label>Website / Domain <span className="qf-req">*</span></label>
            <input name="website" type="text" required placeholder="www.yourbrand.com" />
          </div>
          <div className="qf-field">
            <label>Instagram Handle <span className="qf-req">*</span></label>
            <input name="instagram" type="text" required placeholder="@yourbrand" />
          </div>
        </div>

        {/* ── Service Interested In ── */}
        <div className="qf-field">
          <label>Service Interested In <span className="qf-req">*</span></label>
          <select name="service" required defaultValue={service}>
            <option value="">Select a service</option>
            {ALL_SERVICES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* ── Primary Goal ── */}
        <div className="qf-field">
          <label>Primary Goal <span className="qf-req">*</span></label>
          <div className="qf-chips">
            {GOALS.map(g => (
              <label key={g} className="qf-chip">
                <input type="radio" name="goal" value={g} required />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ── Current Situation ── */}
        <div className="qf-field">
          <label>Current Situation <span className="qf-req">*</span></label>
          <textarea
            name="current_situation"
            rows={3}
            required
            placeholder="e.g. Running Meta ads but getting poor ROAS, no website yet, brand new business…"
          />
        </div>

        {/* ── Budget + Timeline ── */}
        <div className="qf-grid2">
          <div className="qf-field">
            <label>Monthly Budget <span className="qf-req">*</span></label>
            <select name="budget" required>
              <option value="">Select budget</option>
              {BUDGETS.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="qf-field">
            <label>When do you want to start? <span className="qf-req">*</span></label>
            <select name="timeline" required>
              <option value="">Select timeline</option>
              {TIMELINES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* ── Anything else ── */}
        <div className="qf-field">
          <label>Anything Else? <span style={{ opacity: 0.5, fontSize: "0.78rem" }}>(Optional)</span></label>
          <textarea name="notes" rows={2} placeholder="Any specific requirements, questions, or context…" />
        </div>

        <button type="submit" className="qf-btn" disabled={submitting}>
          {submitting ? "Redirecting…" : "Get My Free Quote →"}
        </button>
      </form>

      <style>{`
        .qf-wrap {
          color: #fff;
          font-family: Inter, system-ui, sans-serif;
        }
        .qf-head { margin-bottom: 1.5rem; }
        .qf-eyebrow {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(224,166,149,0.9); margin: 0 0 0.35rem;
        }
        .qf-title { font-size: 1.4rem; font-weight: 800; margin: 0 0 0.35rem; }
        .qf-sub { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin: 0; }

        .qf-form { display: flex; flex-direction: column; gap: 1rem; }

        .qf-grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }
        @media (max-width: 540px) { .qf-grid2 { grid-template-columns: 1fr; } }

        .qf-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .qf-field label {
          font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.8);
        }
        .qf-req { color: #e0a695; }

        .qf-field input,
        .qf-field select,
        .qf-field textarea {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          color: #fff;
          font-size: 0.875rem;
          padding: 0.6rem 0.85rem;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.15s;
          font-family: inherit;
        }
        .qf-field input::placeholder,
        .qf-field textarea::placeholder { color: rgba(255,255,255,0.3); }
        .qf-field input:focus,
        .qf-field select:focus,
        .qf-field textarea:focus {
          outline: none;
          border-color: rgba(224,166,149,0.6);
          background: rgba(255,255,255,0.09);
        }
        .qf-field select option { background: #1a1a2e; color: #fff; }
        .qf-field textarea { resize: vertical; }

        .qf-phone { display: flex; gap: 0.5rem; }
        .qf-phone select { width: auto; flex-shrink: 0; padding: 0.6rem 0.5rem; }
        .qf-phone input { flex: 1; }

        .qf-chips {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
        }
        .qf-chip {
          display: flex; align-items: center; gap: 0.4rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 0.38rem 0.85rem;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.15s;
          user-select: none;
        }
        .qf-chip:has(input:checked) {
          background: rgba(224,166,149,0.18);
          border-color: rgba(224,166,149,0.6);
          color: #f0c8be;
        }
        .qf-chip input { display: none; }

        .qf-btn {
          width: 100%;
          padding: 0.85rem;
          background: linear-gradient(135deg, #e0a695, #c8745e);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.15s, transform 0.15s;
          margin-top: 0.25rem;
          font-family: inherit;
        }
        .qf-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .qf-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>
    </div>
  );
}

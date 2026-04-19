import Link from "next/link";

export const metadata = {
  title: "AI Automation & Retargeting for D2C | Bharat Innovations",
  description: "Recover 40% of abandoned carts with AI-powered retargeting flows, WhatsApp chatbots & Meta dynamic ads — running 24/7 with zero extra ad spend for your D2C brand.",
  keywords: ["AI marketing automation India", "retargeting agency", "WhatsApp chatbot marketing", "cart abandonment recovery", "Meta retargeting D2C", "email drip campaigns India"],
  openGraph: {
    title: "AI Automation & Retargeting for D2C | Bharat Innovations",
    description: "40% cart recovery. 2–3x warm audience ROAS. Zero extra ad spend. AI automation that works while you sleep.",
    url: "https://bharatinnovations.co/services/ai-automation",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const results = [
  { val: "24/7", label: "Automated follow-up running" },
  { val: "2–3x", label: "Warm audience ROAS vs cold" },
  { val: "40%", label: "Cart abandonment recovered" },
  { val: "₹0", label: "Extra ad spend needed" },
];

const automations = [
  "Cart abandonment recovery sequences",
  "WhatsApp chatbot follow-ups",
  "Dynamic retargeting on Meta",
  "Email drip campaigns",
  "Post-purchase upsell flows",
  "Browse abandonment retargeting",
  "Win-back campaigns for lapsed buyers",
  "Lookalike audience automation",
];

const process = [
  {
    n: "01",
    title: "Funnel mapping & leakage audit",
    desc: "We map every step where potential buyers drop off — product page, cart, checkout, post-purchase. Each drop-off point becomes an automation opportunity.",
  },
  {
    n: "02",
    title: "Retargeting architecture",
    desc: "We build layered retargeting audiences on Meta — 1-day, 3-day, 7-day, 14-day windows — each with tailored messaging that matches where the buyer is in their decision journey.",
  },
  {
    n: "03",
    title: "WhatsApp & chatbot deployment",
    desc: "We deploy intelligent WhatsApp chatbots that follow up with warm leads, answer product questions, and guide buyers to checkout — automatically, at scale.",
  },
  {
    n: "04",
    title: "Email & SMS automation",
    desc: "Abandoned cart emails, browse abandonment nudges, back-in-stock alerts, win-back sequences. Every touchpoint automated and personalised.",
  },
  {
    n: "05",
    title: "Continuous optimisation",
    desc: "We track recovery rates, open rates, and conversion rates across every automation. Sequences that underperform get rewritten. Winners get expanded.",
  },
];

const accent = "#00e6c8";

export default function AIAutomationPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,230,200,0.1) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>AI Automation & Retargeting</div>
          <h1 className="cs-h1">Convert while<br />you sleep.</h1>
          <p className="svc-detail-sub">AI-powered flows that recover abandoned carts, follow up warm leads, and close sales — around the clock.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#7c7bff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>The Problem We Solve</div>
          <p className="cs-text">
            For every 100 people who visit your store, 95+ leave without buying. That&apos;s not a traffic problem — it&apos;s a follow-up problem. Most brands spend all their budget acquiring new visitors while letting warm, high-intent audiences slip through the cracks. We build the automation layer that catches them.
          </p>
        </section>

        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>Automations We Build</div>
          <div className="svc-platforms">
            {automations.map(a => (
              <div key={a} className="svc-platform-tag" style={{ borderColor: `${accent}40`, color: "rgba(255,255,255,0.75)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {a}
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">How we build your automation system</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(0,230,200,0.08)`, borderColor: `rgba(0,230,200,0.3)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>Part of the RASA Framework</div>
          <p className="cs-rasa-text">
            The &ldquo;A&rdquo; in RASA stands for Automate. Every client we work with gets an automation layer deployed alongside their paid campaigns — because scaling traffic without capturing warm audiences is leaving money on the table every single day.
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/rasa-framework" className="svc-cs-link" style={{ color: accent }}>Learn about RASA Framework →</Link>
          </div>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Set Up My Automation
          </Link>
        </div>
      </div>
    </main>
  );
}

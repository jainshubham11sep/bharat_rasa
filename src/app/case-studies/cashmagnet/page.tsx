import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "10x",   label: "Return on ad spend" },
  { value: "400%",  label: "Increase in orders" },
  { value: "₹25K",  label: "Daily ad spend today" },
  { value: "12.5x", label: "Spend scale multiplier" },
];

const steps = [
  {
    n: "1",
    title: "Full-funnel audit & leakage fix",
    desc: "Before touching the ad account, we audited the entire customer journey — from ad click to checkout. We plugged conversion leakages, streamlined the purchase flow, and ensured every rupee spent on ads had the best possible chance of returning revenue.",
  },
  {
    n: "2",
    title: "Creative testing engine — 30+ per month",
    desc: "We built a systematic creative testing machine — launching 30+ creatives monthly, identifying hero performers, and ruthlessly cutting what didn't convert. The winning creatives became the engine that powered the 10x ROAS.",
  },
  {
    n: "3",
    title: "Data-validated budget scaling",
    desc: "We scaled the daily budget from ₹2K to ₹25K in structured phases — only increasing spend once each level proved profitable. No guessing, no hope-based scaling. Pure data at every step.",
  },
  {
    n: "4",
    title: "AI-powered retargeting & automation",
    desc: "We deployed AI-driven retargeting sequences and automated follow-up flows that brought back warm audiences and converted fence-sitters — significantly boosting order volume without increasing acquisition costs.",
  },
];

const accentColor = "#2d8f6f";

export default function CashmagnetPage() {
  return (
    <main className="cs-page">
      <div className="cs-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,143,111,0.12) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow" style={{ color: accentColor }}>Case Study — E-Commerce · Performance Marketing</div>
          <div className="cs-hero-logo">
            <Image src="/images/client_logo/cashmagnet.jpeg" alt="Cashmagnet logo" width={120} height={80} style={{ objectFit: "contain", borderRadius: 10 }} />
          </div>
          <h1 className="cs-h1">Cashmagnet.in</h1>
          <p className="cs-meta">Category: E-Commerce · cashmagnet.in · From ₹2K/day to ₹25K/day ad spend</p>

          {/* Hero KPI strip */}
          <div className="cs-card" style={{ borderColor: `${accentColor}30`, display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Peak ROAS", val: "10x" },
              { label: "Orders Growth", val: "+400%" },
              { label: "Daily Ad Spend Scaled", val: "12.5x" },
            ].map(k => (
              <div key={k.label} style={{ textAlign: "center" }}>
                <div className="cs-section-label" style={{ color: accentColor }}>{k.label}</div>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#fff" }}>{k.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container cs-body">

        {/* Challenge */}
        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accentColor}` }}>
          <div className="cs-section-label" style={{ color: accentColor }}>The Challenge</div>
          <p className="cs-text">
            Cashmagnet.in had the product, the ambition, and a small ad budget — but no system to scale. Spending just ₹2,000 a day with no creative strategy, no funnel optimisation, and no data-led decision making meant the brand was stuck in a plateau it couldn&apos;t break out of alone. Every attempt to increase spend just increased losses.
          </p>
        </section>

        {/* Budget trajectory */}
        <section className="cs-section">
          <div className="cs-card cs-trajectory">
            <div className="cs-section-label">Ad Spend Scale-Up Journey</div>
            {[
              { label: "Before",    val: "₹2,000 / day",  pct: 8 },
              { label: "Mid-scale", val: "₹12,000 / day", pct: 48 },
              { label: "Today",     val: "₹25,000 / day", pct: 100 },
            ].map(r => (
              <div key={r.label} className="cs-bar-row">
                <span className="cs-bar-label">{r.label}</span>
                <div className="cs-bar-track">
                  <div className="cs-bar-fill" style={{ width: `${r.pct}%`, background: `linear-gradient(90deg, ${accentColor}, #4ade80)` }} />
                </div>
                <span className="cs-bar-val">{r.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* KPIs */}
        <div className="cs-stats">
          {stats.map(s => (
            <div key={s.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentColor},#4ade80)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Growth system */}
        <section className="cs-section">
          <h2 className="cs-h2">The growth system we built</h2>
          <div className="cs-steps">
            {steps.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(45,143,111,0.12)`, borderColor: `rgba(45,143,111,0.4)`, color: accentColor }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final outcomes */}
        <section className="cs-section cs-card" style={{ borderColor: `${accentColor}30` }}>
          <div className="cs-today-grid">
            <div>
              <div className="cs-section-label" style={{ color: accentColor }}>Increase in total orders</div>
              <div className="cs-today-val">400%</div>
            </div>
            <div>
              <div className="cs-section-label" style={{ color: accentColor }}>Consistent ROAS</div>
              <div className="cs-today-val">10x</div>
            </div>
            <div>
              <div className="cs-section-label" style={{ color: accentColor }}>Daily spend, profitably</div>
              <div className="cs-today-val">₹25K</div>
            </div>
          </div>
        </section>

        {/* RASA */}
        <section className="cs-rasa-box" style={{ borderLeftColor: accentColor }}>
          <div className="cs-rasa-label" style={{ color: accentColor }}>Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            Cashmagnet.in is proof that scaling ad spend doesn&apos;t have to mean scaling risk. The RASA Framework gave us the structure to grow responsibly — validating at every stage before pushing harder. From ₹2K a day to ₹25K a day, every rupee was earned, not gambled.
          </p>
        </section>

        <div className="cs-footer-tag">Bharat Innovations — India&apos;s First AI Marketing Agency</div>
      </div>
    </main>
  );
}

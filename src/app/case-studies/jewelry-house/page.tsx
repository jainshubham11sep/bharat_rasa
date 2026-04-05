import Link from "next/link";

const stats = [
  { value: "8.5x",  label: "Consistent ROAS" },
  { value: "+250%", label: "Increase in orders" },
  { value: "₹30K",  label: "Daily ad spend today" },
  { value: "15x",   label: "Spend scale multiplier" },
];

const steps = [
  {
    n: "1",
    title: "Audience intelligence & targeting precision",
    desc: "We mapped the exact buyer profile for Jewelry House — occasion, income segment, geography, buying intent signal — and built laser-targeted campaigns that put the right product in front of the right person at the right moment. No spray-and-pray.",
  },
  {
    n: "2",
    title: "30+ creatives tested monthly",
    desc: "We ran a relentless creative testing programme — 30+ creatives every single month — testing formats, hooks, models, and product angles. The top performers were identified fast, scaled hard, and refreshed regularly to fight ad fatigue.",
  },
  {
    n: "3",
    title: "Influencer-led trust building",
    desc: "We activated jewellery and lifestyle influencers to build the brand's credibility before scaling cold traffic. In a high-consideration category like jewellery, the influencer halo effect directly reduces purchase hesitation and boosts conversion rates.",
  },
  {
    n: "4",
    title: "Phased budget scaling with performance gates",
    desc: "Every budget increase was gated by performance data. We moved from ₹2K to ₹30K per day in structured phases — each step validated before the next was taken. This discipline is why we reached ₹30K/day while maintaining 8.5x ROAS instead of watching it collapse under pressure.",
  },
  {
    n: "5",
    title: "AI automation for retargeting & follow-up",
    desc: "We deployed intelligent retargeting flows and chatbot-powered follow-up sequences that brought back cart abandoners and warm audiences — turning lost sales into completed orders and significantly improving overall ROAS.",
  },
];

const accentColor = "#2d4a8f";
const accentLight = "#5b7fd4";

export default function JewelryHousePage() {
  return (
    <main className="cs-page">
      <div className="cs-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,74,143,0.15) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow" style={{ color: accentLight }}>Case Study — Fine Jewellery · D2C Performance</div>
          <h1 className="cs-h1">Jewelry House</h1>
          <p className="cs-meta">Category: Jewellery · From ₹2K/day to ₹30K/day ad spend · 8.5x ROAS</p>

          <blockquote className="cs-hero-quote" style={{ borderLeftColor: accentLight }}>
            <em>&ldquo;From a modest daily budget to India&apos;s jewellery buyers at scale — a story of precision, patience, and performance.&rdquo;</em>
          </blockquote>
        </div>
      </div>

      <div className="container cs-body">

        {/* Intro card */}
        <section className="cs-section cs-card" style={{ borderColor: `${accentLight}30` }}>
          <p className="cs-text">
            Jewelry House came to us with potential but no performance. Within months, we built a high-output growth engine that took daily ad spend from ₹2,000 to ₹30,000 — while maintaining an 8.5x ROAS and growing orders by 250%.
          </p>
          <div className="cs-stats" style={{ marginTop: "1.5rem", marginBottom: 0 }}>
            {[
              { val: "8.5x", label: "Avg ROAS" },
              { val: "+250%", label: "Orders growth" },
              { val: "15x", label: "Spend scale" },
            ].map(k => (
              <div key={k.label} className="cs-stat-card">
                <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentLight},#93c5fd)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{k.val}</div>
                <div className="cs-stat-label">{k.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge */}
        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accentLight}` }}>
          <div className="cs-section-label" style={{ color: accentLight }}>The Challenge</div>
          <p className="cs-text">
            Jewelry House was sitting on a strong product catalogue but had no marketing infrastructure to match it. Spending just ₹2,000 a day with no tested creatives, no audience strategy, and no conversion optimisation meant the brand was invisible to the buyers who were actively searching for exactly what it sold. The gap between product quality and marketing quality was costing the brand every single day.
          </p>
        </section>

        {/* Scaling journey */}
        <section className="cs-section">
          <div className="cs-card cs-trajectory">
            <div className="cs-section-label">From ₹2K to ₹30K — The Scaling Journey</div>
            {[
              { label: "Before",  val: "₹2,000 / day",  pct: 7 },
              { label: "Phase 2", val: "₹13,000 / day", pct: 43 },
              { label: "Today",   val: "₹30,000 / day", pct: 100 },
            ].map(r => (
              <div key={r.label} className="cs-bar-row">
                <span className="cs-bar-label">{r.label}</span>
                <div className="cs-bar-track">
                  <div className="cs-bar-fill" style={{ width: `${r.pct}%`, background: `linear-gradient(90deg, ${accentLight}, #93c5fd)` }} />
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
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentLight},#93c5fd)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Strategy */}
        <section className="cs-section">
          <h2 className="cs-h2">The strategy that delivered it</h2>
          <div className="cs-steps">
            {steps.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(91,127,212,0.12)`, borderColor: `rgba(91,127,212,0.4)`, color: accentLight }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final outcomes */}
        <section className="cs-section">
          <h2 className="cs-h2">Final outcomes — Jewelry House today</h2>
          <div className="cs-card cs-today-grid" style={{ borderColor: `${accentLight}30` }}>
            <div>
              <div className="cs-section-label" style={{ color: accentLight }}>Daily ad spend</div>
              <div className="cs-today-val">₹30,000</div>
              <div className="cs-today-sub">Up from ₹2,000 at start</div>
            </div>
            <div>
              <div className="cs-section-label" style={{ color: accentLight }}>ROAS</div>
              <div className="cs-today-val">8.5x</div>
              <div className="cs-today-sub">Consistent, not one-time</div>
            </div>
            <div>
              <div className="cs-section-label" style={{ color: accentLight }}>Orders</div>
              <div className="cs-today-val">+250%</div>
              <div className="cs-today-sub">Month-on-month growth</div>
            </div>
          </div>
        </section>

        {/* RASA */}
        <section className="cs-rasa-box" style={{ borderLeftColor: accentLight }}>
          <div className="cs-rasa-label" style={{ color: accentLight }}>Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            Jewelry House is what happens when a great product finally gets a great system behind it. The RASA Framework gave us the structure to scale confidently — from ₹2K to ₹30K a day without losing profitability. In jewellery, where trust and timing are everything, having the right framework is the difference between burning budget and building a brand.
          </p>
        </section>

        <div className="cs-footer-tag">Bharat Innovations — India&apos;s First AI Marketing Agency</div>
      </div>
    </main>
  );
}

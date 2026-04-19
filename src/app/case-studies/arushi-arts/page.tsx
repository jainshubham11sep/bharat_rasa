import Link from "next/link";

export const metadata = {
  title: "Arushi Arts Jewellery Case Study — 7.5x ROAS | Bharat Innovations",
  description: "How Bharat Innovations repositioned Arushi Arts as a premium imitation jewellery brand, achieving 7.5x ROAS & 300%+ order growth with influencer seeding & Meta ads.",
  keywords: ["Arushi Arts case study", "imitation jewellery marketing", "jewellery brand positioning India", "7.5x ROAS case study", "D2C jewellery marketing"],
  openGraph: {
    title: "Arushi Arts — 7.5x ROAS Jewellery Case Study | Bharat Innovations",
    description: "Premium repositioning + micro-influencers + Meta ads = 7.5x ROAS and 300% more orders. The Arushi Arts growth story.",
    url: "https://bharatinnovations.co/case-studies/arushi-arts",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const stats = [
  { value: "7.5x", label: "Average ROAS" },
  { value: "+300%", label: "Increase in orders" },
  { value: "₹15K", label: "Daily ad spend today" },
  { value: "7.5x", label: "Spend scale-up" },
];

const steps = [
  {
    n: "1",
    title: "Brand repositioning — premium imitation",
    desc: "We shifted Arushi Arts from a commodity mindset to a premium imitation brand. New content direction, elevated visual identity, and messaging focused on style and occasion-dressing — not price. This alone changed the quality of buyer the ads attracted.",
  },
  {
    n: "2",
    title: "Influencer seeding for authentic reach",
    desc: "We partnered with lifestyle and fashion micro-influencers whose audiences matched Arushi Arts' ideal buyer profile. Real women, real occasions, real jewellery — the kind of content that makes a viewer stop scrolling and start shopping.",
  },
  {
    n: "3",
    title: "High-volume creative testing",
    desc: "We tested 25+ creatives monthly, mapping performance to audience segments, occasions, and product categories. The winning creatives were then scaled aggressively — taking daily spend from ₹2K to ₹15K without sacrificing ROAS.",
  },
  {
    n: "4",
    title: "AOV optimisation through collections & bundles",
    desc: "We introduced curated collection sets and bundle offers that encouraged multi-product purchases — increasing the average order value and making every sale more profitable per transaction.",
  },
];

const accentColor = "#b5547a";

export default function ArushiArtsPage() {
  return (
    <main className="cs-page">
      <div className="cs-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(181,84,122,0.12) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow" style={{ color: accentColor }}>Case Study — Imitation Jewellery · D2C Scaling</div>
          <h1 className="cs-h1">Arushi Arts</h1>
          <p className="cs-meta">Category: Imitation Jewellery · From ₹2K/day to ₹15K/day ad spend · 7.5x ROAS</p>

          <div className="cs-card" style={{ borderColor: `${accentColor}30`, maxWidth: 560, textAlign: "center" }}>
            <p className="cs-strategy-title" style={{ color: accentColor, marginBottom: "1.25rem" }}>
              Turning an underestimated category into a high-performance D2C brand
            </p>
            <div className="cs-stats" style={{ marginBottom: 0 }}>
              <div className="cs-stat-card">
                <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentColor},#d4789a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>7.5x</div>
                <div className="cs-stat-label">Average ROAS</div>
              </div>
              <div className="cs-stat-card">
                <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentColor},#d4789a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+300%</div>
                <div className="cs-stat-label">Increase in orders</div>
              </div>
              <div className="cs-stat-card">
                <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentColor},#d4789a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>₹15K</div>
                <div className="cs-stat-label">Daily ad spend today</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container cs-body">

        {/* Challenge */}
        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accentColor}` }}>
          <div className="cs-section-label" style={{ color: accentColor }}>The Challenge</div>
          <p className="cs-text">
            Arushi Arts had a beautiful product range but was being swallowed by the noise in the imitation jewellery space. With ₹2,000/day in ad spend and no clear brand identity, they were competing on price alone — a race they couldn&apos;t win. The brand needed a positioning overhaul and a system that could scale spend without destroying margins.
          </p>
        </section>

        {/* Key insight */}
        <div className="cs-card cs-truth-box" style={{ borderLeft: `3px solid ${accentColor}`, marginBottom: "2rem" }}>
          <div className="cs-truth-icon" style={{ color: accentColor }}>◎</div>
          <div>
            <div className="cs-strategy-title" style={{ color: accentColor }}>Our key insight</div>
            <p className="cs-strategy-desc">
              Imitation jewellery buyers aren&apos;t looking for cheap — they&apos;re looking for stylish and trustworthy. We repositioned Arushi Arts as a premium-feel imitation brand, and the market responded immediately. The same product, better positioned, unlocked a completely different buyer.
            </p>
          </div>
        </div>

        {/* Budget trajectory */}
        <section className="cs-section">
          <div className="cs-card cs-trajectory">
            <div className="cs-section-label">Budget Scale-Up Trajectory</div>
            {[
              { label: "Before",  val: "₹2,000 / day",  pct: 13 },
              { label: "Phase 2", val: "₹8,000 / day",  pct: 53 },
              { label: "Today",   val: "₹15,000 / day", pct: 100 },
            ].map(r => (
              <div key={r.label} className="cs-bar-row">
                <span className="cs-bar-label">{r.label}</span>
                <div className="cs-bar-track">
                  <div className="cs-bar-fill" style={{ width: `${r.pct}%`, background: `linear-gradient(90deg, ${accentColor}, #d4789a)` }} />
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
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accentColor},#d4789a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* What we executed */}
        <section className="cs-section">
          <h2 className="cs-h2">What we executed</h2>
          <div className="cs-steps">
            {steps.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(181,84,122,0.12)`, borderColor: `rgba(181,84,122,0.4)`, color: accentColor }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before / Today */}
        <section className="cs-section">
          <div className="cs-ba-grid">
            <div className="cs-card">
              <div className="cs-section-label">Where they started</div>
              <div className="cs-today-val" style={{ color: accentColor }}>₹2K/DAY</div>
              <div className="cs-today-sub">Minimal ad spend, no brand positioning, competing purely on price</div>
            </div>
            <div className="cs-card" style={{ borderColor: `${accentColor}40` }}>
              <div className="cs-section-label" style={{ color: accentColor }}>Where they are today</div>
              <div className="cs-today-val" style={{ color: accentColor }}>₹15K/DAY</div>
              <div className="cs-today-sub">7.5x ROAS, 300% more orders, a recognised brand in imitation jewellery</div>
            </div>
          </div>
        </section>

        {/* RASA */}
        <section className="cs-rasa-box" style={{ borderLeftColor: accentColor }}>
          <div className="cs-rasa-label" style={{ color: accentColor }}>Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            Arushi Arts shows what happens when you stop competing on price and start competing on brand. The RASA Framework helped us rebuild the brand&apos;s positioning from the ground up — and then scale it with the precision and confidence that only comes from a validated system.
          </p>
        </section>

        <div className="cs-footer-tag">Bharat Innovations — India&apos;s First AI Marketing Agency</div>
      </div>
    </main>
  );
}

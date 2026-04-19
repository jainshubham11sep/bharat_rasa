import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Silver House by RJ Case Study — 5x ROAS | Bharat Innovations",
  description: "How Bharat Innovations scaled Silver House by RJ from 2.3x to 5x consistent ROAS with influencer seeding, high-converting creatives & full-funnel Meta ad strategy.",
  keywords: ["silver jewellery brand marketing", "silver house by RJ case study", "5x ROAS jewellery", "jewellery brand Meta ads", "Bharat Innovations jewellery"],
  openGraph: {
    title: "Silver House by RJ — 5x ROAS Case Study | Bharat Innovations",
    description: "From 2.3x to 5x consistent ROAS. Influencer seeding + winning creatives + full-funnel strategy — here's how we did it.",
    url: "https://bharatinnovations.co/case-studies/silver-house-by-rj",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const phases = [
  {
    phase: "Phase 1 · Months 1–3",
    title: "Trust Building & Foundation",
    rows: [
      { label: "Focus", value: "Brand credibility" },
      { label: "ROAS", value: "2.3x" },
      { label: "Status", value: "Building audience" },
    ],
    big: "2.3x",
    color: "#b8975a",
  },
  {
    phase: "Phase 2 · Months 4–6",
    title: "Scale & Profit Optimisation",
    rows: [
      { label: "Focus", value: "Influencer + creatives" },
      { label: "ROAS", value: "5x consistent" },
      { label: "Status", value: "Highly profitable" },
    ],
    big: "5x",
    color: "#b8975a",
  },
];

const stats = [
  { value: "5x", label: "Consistent ROAS achieved" },
  { value: "₹25L+", label: "Monthly revenue today" },
  { value: "400%", label: "Offline footfall increase" },
  { value: "₹3,500", label: "Average order value" },
];

const steps = [
  {
    n: "1",
    title: "Brand trust architecture",
    desc: "We identified that the biggest barrier wasn't price — it was trust. We built a complete brand credibility system: authentic storytelling, quality content, and positioning Jitendra Gupta as a trusted voice in the jewellery space before spending heavily on ads.",
  },
  {
    n: "2",
    title: "Influencer collaborations for social proof",
    desc: "In months 4–6, we executed strategic influencer collaborations that gave the brand the social proof it needed. Real people wearing real jewellery — the kind of content that converts hesitant buyers in a high-trust-required category.",
  },
  {
    n: "3",
    title: "Aggressive creative testing — 30+ per month",
    desc: "We tested more than 30 creatives every month to identify what truly resonated with jewellery buyers. Finding the right creative in this niche is everything — it's the difference between a 2x and a 5x ROAS.",
  },
  {
    n: "4",
    title: "Local-level offline store ads",
    desc: "We ran hyper-local campaigns targeting the brand's offline store catchment area — driving real foot traffic to the physical store. A strategy that most digital agencies ignore entirely.",
  },
  {
    n: "5",
    title: "Identified a strong, validated market",
    desc: "Our team didn't just run ads — we analysed purchase behaviour, audience segments, and category trends to pinpoint exactly which buyers were ready to purchase silver and gold jewellery online, then doubled down on those segments.",
  },
];

export default function SilverHouseByRJPage() {
  return (
    <main className="cs-page">
      <div className="cs-hero" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,151,90,0.12) 0%, transparent 70%), #0a0a0a" }}>
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow" style={{ color: "#b8975a" }}>Case Study — Silver, Gold &amp; Diamond Jewellery</div>
          <div className="cs-hero-logo">
            <Image src="/images/client_logo/silver-house-by-rj.jpeg" alt="Silver House by RJ logo" width={200} height={80} style={{ objectFit: "contain", borderRadius: 12 }} />
          </div>
          <h1 className="cs-h1">Silver House By RJ</h1>
          <p className="cs-meta">Founder: Jitendra Gupta · Niche: Silver, Gold &amp; Diamond Jewellery · Timeline: 8 Months</p>

          <blockquote className="cs-hero-quote">
            <em>From ₹10,000/month in ad spend to ₹5 Lakhs/month — with a consistent 5x ROAS and 400% increase in offline store footfall.</em>
            <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)" }}>One of our most patient, most rewarding brand journeys.</span>
          </blockquote>
        </div>
      </div>

      <div className="container cs-body">

        {/* Challenge */}
        <section className="cs-section cs-card" style={{ borderLeft: "3px solid #b8975a" }}>
          <div className="cs-section-label" style={{ color: "#b8975a" }}>The Core Challenge</div>
          <p className="cs-text">
            Selling gold and silver jewellery online is one of the hardest challenges in Indian e-commerce. Without strong brand trust and a recognisable face, customers hesitate. Fear of RTO, authenticity concerns, and the deeply personal nature of jewellery buying make this a category where shortcuts simply don&apos;t work.
          </p>
        </section>

        {/* Honest truth box */}
        <div className="cs-card cs-truth-box">
          <div className="cs-truth-icon">◎</div>
          <div>
            <div className="cs-strategy-title" style={{ color: "#b8975a" }}>The honest truth about jewellery brands</div>
            <p className="cs-strategy-desc">
              We won&apos;t pretend we scaled this brand in 3 months — because we didn&apos;t. The first 3 months were about building trust, not chasing ROAS. We held at 2.3x while laying the foundation. That patience is what made the next 5 months explosive. In jewellery, trust is the product.
            </p>
          </div>
        </div>

        {/* Two-phase journey */}
        <section className="cs-section">
          <h2 className="cs-h2">The two-phase journey</h2>
          <div className="cs-months">
            {phases.map(p => (
              <div key={p.phase} className="cs-month-card" style={{ borderTopColor: p.color }}>
                <div className="cs-month-label" style={{ color: p.color }}>{p.phase}</div>
                <div className="cs-month-phase">{p.title}</div>
                <div className="cs-month-rows">
                  {p.rows.map(r => (
                    <div key={r.label} className="cs-month-row"><span>{r.label}</span><span>{r.value}</span></div>
                  ))}
                </div>
                <div className="cs-month-big" style={{ color: p.color }}>{p.big}</div>
              </div>
            ))}
          </div>
        </section>

        {/* KPIs */}
        <div className="cs-stats">
          {stats.map(s => (
            <div key={s.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: "linear-gradient(120deg,#b8975a,#d4af70)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* How we built */}
        <section className="cs-section">
          <h2 className="cs-h2">How we built trust and then scale</h2>
          <div className="cs-steps">
            {steps.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: "rgba(184,151,90,0.12)", borderColor: "rgba(184,151,90,0.4)", color: "#b8975a" }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title" style={{ color: "#b8975a" }}>{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offline impact */}
        <section className="cs-section">
          <h2 className="cs-h2">Offline impact — beyond digital</h2>
          <div className="cs-ba-grid">
            <div className="cs-card">
              <div className="cs-today-val" style={{ color: "#b8975a" }}>400%</div>
              <div className="cs-today-sub">Increase in offline store footfall through local-level digital ad campaigns</div>
            </div>
            <div className="cs-card">
              <div className="cs-today-val" style={{ color: "#b8975a" }}>2 stores</div>
              <div className="cs-today-sub">Brand just launched its 2nd offline store in Lucknow — powered by digital momentum</div>
            </div>
          </div>

          <div className="cs-card cs-today-grid" style={{ marginTop: "1.25rem", gridTemplateColumns: "repeat(4,1fr)" }}>
            {[
              { label: "Monthly ad spend", val: "₹5 Lakhs", sub: "Up from ₹10,000 at start" },
              { label: "Monthly revenue", val: "₹25 Lakhs+", sub: "Consistent every month" },
              { label: "ROAS", val: "5x", sub: "Stable & profitable" },
              { label: "Avg order value", val: "₹3,500", sub: "High-intent buyers" },
            ].map(r => (
              <div key={r.label}>
                <div className="cs-section-label" style={{ color: "#b8975a" }}>{r.label}</div>
                <div className="cs-today-val">{r.val}</div>
                <div className="cs-today-sub">{r.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RASA box */}
        <section className="cs-rasa-box" style={{ borderLeftColor: "#b8975a" }}>
          <div className="cs-rasa-label" style={{ color: "#b8975a" }}>Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            Silver House By RJ is the clearest proof that the RASA Framework works even in the hardest categories. When trust is the product, you can&apos;t skip steps. We built the foundation first, validated the market, then scaled — and the result is a brand now expanding into its second physical store, backed by a thriving digital presence.
          </p>
        </section>

        <div className="cs-footer-tag">Bharat Innovations — India&apos;s First AI Marketing Agency</div>
      </div>
    </main>
  );
}

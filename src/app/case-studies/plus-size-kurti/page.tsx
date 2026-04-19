import Link from "next/link";

export const metadata = {
  title: "Plus-Size Kurti Brand Case Study | 6x ROAS | Bharat Innovations",
  description: "How Bharat Innovations helped a plus-size fashion brand achieve 6x ROAS and consistent daily orders through influencer strategy, premium content & paid advertising on Meta.",
  keywords: ["plus size fashion marketing", "D2C fashion case study", "Meta ads fashion brand", "influencer marketing fashion", "Bharat Innovations case study"],
  openGraph: {
    title: "Plus-Size Kurti Brand — 6x ROAS Case Study | Bharat Innovations",
    description: "From zero to consistent daily orders. See how we scaled a plus-size kurti brand with influencer seeding, model-led content & Meta ads.",
    url: "https://bharatinnovations.co/case-studies/plus-size-kurti",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const months = [
  {
    month: "Month 1",
    phase: "Foundation & Soft Launch",
    spend: "₹30,000",
    revenue: "₹56,000",
    roas: "1.87x",
    highlight: "1.9x",
    color: "#7c7bff",
  },
  {
    month: "Month 2",
    phase: "Scaling with Influencer Ads",
    spend: "₹58,750",
    revenue: "₹5,26,400",
    roas: "8.96x",
    highlight: "8.96x",
    color: "#b88dff",
  },
  {
    month: "Month 3",
    phase: "Profit Optimisation",
    spend: "₹95,500",
    revenue: "₹8,58,545",
    roas: "8.97x",
    highlight: "8.97x",
    color: "#4ade80",
  },
];

const stats = [
  { value: "8.97x", label: "Peak ROAS (Month 3)" },
  { value: "₹8.5L", label: "Revenue by Month 3" },
  { value: "90", label: "Days to profitability" },
  { value: "4", label: "Top performing states" },
];

const strategies = [
  {
    title: "Website built for conversion",
    desc: "Built a clean, fast, mobile-optimised website with a simplified checkout — designed to remove every possible drop-off point before the first rupee was spent on ads.",
  },
  {
    title: "Premium model-led content",
    desc: "Created visual content featuring real plus-size models to build authentic trust — showing the audience that this brand truly understood and celebrated them.",
  },
  {
    title: "Influencer collaborations",
    desc: "Partnered with relevant influencers to build social proof and credibility before scaling paid media — ensuring ads landed on a warm, trusting audience.",
  },
  {
    title: "Data-validated ad scaling",
    desc: "Scaled ad budgets only after validating creatives with data — no wasted spend in Month 1. This disciplined approach made Month 2's 9x ROAS possible.",
  },
];

const regions = ["Gujarat", "Hyderabad, Telangana", "West Bengal", "Maharashtra"];

export default function PlusSizeKurtiPage() {
  return (
    <main className="cs-page">
      <div className="cs-hero">
        <div className="cs-hero-bg" aria-hidden="true" />
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow">Case Study — Plus Size Women&apos;s Fashion · Built From Zero</div>
          <h1 className="cs-h1">Plus Size Kurti</h1>
          <p className="cs-meta">Founder: Vinitha Pilaniya · plussizekurti.com · Timeline: 3 Months (0 → ₹8.5L/month)</p>
        </div>
      </div>

      <div className="container cs-body">

        {/* Where it started */}
        <section className="cs-section cs-card">
          <div className="cs-section-label">Where it all started</div>
          <p className="cs-text">
            Vinitha came to us with a vision but no infrastructure. There was no website, no social media presence, no brand identity — just a product and a gap in the market. We built this brand entirely from scratch, identifying a deeply underserved audience: plus-size women who had been ignored by mainstream fashion marketing.
          </p>
          <div className="cs-tags">
            {["Zero website", "Zero social media", "Zero branding", "Zero marketing history"].map(t => (
              <span key={t} className="cs-tag">{t}</span>
            ))}
          </div>
        </section>

        {/* Month by month */}
        <section className="cs-section">
          <h2 className="cs-h2">Month-by-month growth</h2>
          <div className="cs-months">
            {months.map((m) => (
              <div key={m.month} className="cs-month-card" style={{ borderTopColor: m.color }}>
                <div className="cs-month-label" style={{ color: m.color }}>{m.month}</div>
                <div className="cs-month-phase">{m.phase}</div>
                <div className="cs-month-rows">
                  <div className="cs-month-row"><span>Total spend</span><span>{m.spend}</span></div>
                  <div className="cs-month-row"><span>Revenue</span><span>{m.revenue}</span></div>
                  <div className="cs-month-row"><span>ROAS</span><span>{m.roas}</span></div>
                </div>
                <div className="cs-month-big" style={{ color: m.color }}>{m.highlight}</div>
              </div>
            ))}
          </div>

          {/* Revenue trajectory */}
          <div className="cs-card cs-trajectory">
            <div className="cs-section-label">Revenue Growth Trajectory</div>
            {[
              { month: "Month 1", val: "₹56,000", pct: 6 },
              { month: "Month 2", val: "₹5,26,400", pct: 61 },
              { month: "Month 3", val: "₹8,58,545", pct: 100 },
            ].map(r => (
              <div key={r.month} className="cs-bar-row">
                <span className="cs-bar-label">{r.month}</span>
                <div className="cs-bar-track">
                  <div className="cs-bar-fill" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="cs-bar-val">{r.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* KPI stats */}
        <div className="cs-stats">
          {stats.map(s => (
            <div key={s.label} className="cs-stat-card">
              <div className="cs-stat-value">{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Strategy */}
        <section className="cs-section">
          <h2 className="cs-h2">The strategy behind it</h2>
          <div className="cs-strategy-grid">
            {strategies.map(s => (
              <div key={s.title} className="cs-card cs-strategy-card">
                <div className="cs-strategy-title">{s.title}</div>
                <p className="cs-strategy-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regions */}
        <section className="cs-section">
          <h2 className="cs-h2">Top performing regions</h2>
          <div className="cs-tags" style={{ marginBottom: "1.5rem" }}>
            {regions.map(r => <span key={r} className="cs-tag">{r}</span>)}
          </div>
          <div className="cs-card cs-today-grid">
            <div>
              <div className="cs-section-label">Where the brand stands today</div>
              <div className="cs-today-val">₹15L+</div>
              <div className="cs-today-sub">Monthly revenue</div>
            </div>
            <div>
              <div className="cs-section-label">Monthly ad spend</div>
              <div className="cs-today-val">₹2L</div>
              <div className="cs-today-sub">Consistent 7–8x ROAS</div>
            </div>
            <div>
              <div className="cs-section-label">Status</div>
              <div className="cs-status">Profitable</div>
              <div className="cs-today-sub">Stable daily sales &amp; healthy margins</div>
            </div>
          </div>
        </section>

        {/* RASA quote */}
        <section className="cs-rasa-box">
          <div className="cs-rasa-label">Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            From zero to ₹8.5L in 90 days — without a single shortcut. The RASA Framework gave us the roadmap: validate before scaling, build trust before spending, and let data — not gut feel — drive every decision. Plus Size Kurti is proof that with the right system, a brand can be built profitably from day one.
          </p>
        </section>

        <div className="cs-footer-tag">Bharat Innovations — India&apos;s First AI Marketing Agency · plussizekurti.com</div>
      </div>
    </main>
  );
}

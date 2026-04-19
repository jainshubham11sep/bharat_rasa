import Link from "next/link";

export const metadata = {
  title: "Performance Marketing Agency India | Bharat Innovations",
  description: "ROI-first Meta & Google ad campaigns for D2C brands. Scale from ₹10K to ₹30K/day while maintaining 8.5x ROAS. 400%+ order growth. Full-funnel ad management.",
  keywords: ["performance marketing agency India", "Meta ads agency India", "Google ads for D2C", "ROAS optimization", "paid advertising D2C brands", "Facebook ads agency India"],
  openGraph: {
    title: "Performance Marketing Agency India | Bharat Innovations",
    description: "Scale your D2C brand's ad spend profitably. We've achieved 8.5x ROAS, 10x ROAS on eCommerce, and 400%+ order volume growth for our clients.",
    url: "https://bharatinnovations.co/services/performance-marketing",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const results = [
  { val: "8.5x", label: "Peak ROAS maintained" },
  { val: "10x", label: "ROAS on e-commerce" },
  { val: "₹30K", label: "Daily spend scaled to" },
  { val: "+400%", label: "Order volume increase" },
];

const process = [
  {
    n: "01",
    title: "Full-funnel audit",
    desc: "Before touching any campaign, we audit your entire buyer journey — from ad creative to checkout. We identify leakage points and fix them before spending a rupee more.",
  },
  {
    n: "02",
    title: "Audience research & targeting",
    desc: "We map your exact buyer — occasion, income segment, geography, intent signal. Campaigns go live only when we know who we're talking to and why they'll buy.",
  },
  {
    n: "03",
    title: "Creative testing engine",
    desc: "30+ creatives tested every month. Winning hooks are identified fast, scaled hard, and refreshed regularly. No ad fatigue. No stale campaigns.",
  },
  {
    n: "04",
    title: "Data-validated budget scaling",
    desc: "Every rupee increase is gated by performance data. We move in phases — ₹2K to ₹5K to ₹15K to ₹30K — validating profitability at each step before pushing further.",
  },
  {
    n: "05",
    title: "Weekly reporting & optimisation",
    desc: "You get clear weekly reports — ROAS, CPR, CVR, spend efficiency. We optimise continuously, not quarterly.",
  },
];

const platforms = ["Meta Ads (Facebook & Instagram)", "Google Search & Shopping", "YouTube Ads", "Retargeting & Dynamic Ads", "WhatsApp Campaigns"];

const accent = "#7c7bff";

export default function PerformanceMarketingPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,123,255,0.15) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>Performance Marketing</div>
          <h1 className="cs-h1">Scale spend.<br />Protect ROAS.</h1>
          <p className="svc-detail-sub">Meta & Google campaigns built for D2C brands that want profitable scale — not just reach.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        {/* Results */}
        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#00e6c8)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        {/* What we do */}
        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>What We Do</div>
          <p className="cs-text">
            Most agencies optimise for clicks. We optimise for profit. Every campaign we run is built around one question: what&apos;s the highest-ROAS path from rupee spent to order placed? We use the RASA Framework to systematically research, target, scale, and automate — so your budget works harder every single day.
          </p>
        </section>

        {/* Platforms */}
        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>Platforms We Manage</div>
          <div className="svc-platforms">
            {platforms.map(p => (
              <div key={p} className="svc-platform-tag" style={{ borderColor: `${accent}40`, color: "rgba(255,255,255,0.75)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="cs-section">
          <h2 className="cs-h2">Our process</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(124,123,255,0.1)`, borderColor: `rgba(124,123,255,0.35)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case study link */}
        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>See It In Action</div>
          <p className="cs-rasa-text">
            Jewelry House went from ₹2,000/day to ₹30,000/day while maintaining 8.5x ROAS. Cashmagnet.in hit 10x ROAS and grew orders by 400%. That&apos;s what a proper performance marketing system looks like.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
            <Link href="/case-studies/jewelry-house" className="svc-cs-link" style={{ color: accent }}>Jewelry House case study →</Link>
            <Link href="/case-studies/cashmagnet" className="svc-cs-link" style={{ color: accent }}>Cashmagnet case study →</Link>
          </div>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Get a Free Audit
          </Link>
        </div>
      </div>
    </main>
  );
}

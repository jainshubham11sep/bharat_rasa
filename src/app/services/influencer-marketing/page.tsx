import Link from "next/link";

export const metadata = {
  title: "Influencer Marketing for D2C Brands | Bharat Innovations",
  description: "Trust-building influencer campaigns for jewellery, fashion & lifestyle D2C brands. Boost CVR by 35%, build brand credibility in 30 days & repurpose content for paid ads.",
  keywords: ["influencer marketing India", "D2C influencer agency", "micro influencer marketing", "UGC content India", "jewellery influencer marketing", "fashion influencer agency India"],
  openGraph: {
    title: "Influencer Marketing for D2C Brands | Bharat Innovations",
    description: "+35% CVR lift. 30-day credibility build. Content repurposed for paid ads. Influencer marketing built for D2C brands that want real ROI.",
    url: "https://bharatinnovations.co/services/influencer-marketing",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const results = [
  { val: "+35%", label: "CVR lift on cold traffic post-influencer" },
  { val: "30 days", label: "To build brand credibility" },
  { val: "3x", label: "Content repurposed for paid ads" },
  { val: "₹0", label: "Wasted on wrong influencers" },
];

const niches = [
  "Jewellery & accessories", "Women's fashion & apparel", "Beauty & skincare",
  "Home décor & lifestyle", "Health & wellness", "Food & beverage",
];

const process = [
  {
    n: "01",
    title: "Influencer research & vetting",
    desc: "We don't pick influencers by follower count. We analyse engagement rate, audience demographics, past brand collaborations, and content authenticity. Every influencer we recommend has been vetted for your specific buyer profile.",
  },
  {
    n: "02",
    title: "Campaign brief & content direction",
    desc: "We write the creative brief, align on messaging, and direct the content to ensure it hits your brand positioning while feeling authentic — not scripted. Authentic content converts. Scripted content gets skipped.",
  },
  {
    n: "03",
    title: "Multi-tier influencer activation",
    desc: "We work across micro (10K–100K), mid-tier (100K–500K), and macro influencers — mixing reach and trust at each budget level. Micro-influencers drive the highest engagement. Macros build brand awareness at scale.",
  },
  {
    n: "04",
    title: "Content repurposing for paid",
    desc: "Every piece of influencer content we create gets repurposed as paid ad creative. The best UGC-style content from influencers regularly outperforms studio-shot ads by 2–3x in CTR.",
  },
  {
    n: "05",
    title: "Performance tracking",
    desc: "We track reach, engagement, website traffic from influencer posts, and — most importantly — the lift in conversion rate on your paid campaigns after the influencer content goes live.",
  },
];

const accent = "#f472b6";

export default function InfluencerMarketingPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,114,182,0.12) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>Influencer Marketing</div>
          <h1 className="cs-h1">Build trust first.<br />Then scale.</h1>
          <p className="svc-detail-sub">The right influencers reduce purchase hesitation and make every rupee of paid spend work harder.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#fda4af)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>Why Influencer Marketing Works for D2C</div>
          <p className="cs-text">
            In high-consideration categories like jewellery, fashion, and skincare, buyers don&apos;t just want to see a product — they want to see someone they trust wearing it. Influencer content removes the hesitation that kills conversion. When we activated jewellery influencers for Jewelry House before scaling cold traffic, conversion rates on paid campaigns improved measurably. Trust is the hidden lever on ROAS.
          </p>
        </section>

        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>Niches We Specialise In</div>
          <div className="svc-platforms">
            {niches.map(n => (
              <div key={n} className="svc-platform-tag" style={{ borderColor: `${accent}40`, color: "rgba(255,255,255,0.75)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {n}
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">Our influencer process</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(244,114,182,0.08)`, borderColor: `rgba(244,114,182,0.3)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>See The Impact</div>
          <p className="cs-rasa-text">
            Jewelry House activated jewellery and lifestyle influencers before scaling cold traffic. The result: purchase hesitation dropped, cold traffic CVR improved, and the 8.5x ROAS they hit at ₹30K/day was partly built on the trust those influencers created.
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/case-studies/jewelry-house" className="svc-cs-link" style={{ color: accent }}>Read the Jewelry House case study →</Link>
          </div>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Launch Influencer Campaign
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Creative Strategy & Ad Testing | Bharat Innovations",
  description: "30+ creatives tested every month for your D2C brand. We identify winning hooks in 7 days and scale hard — resulting in 3x higher CVR vs unoptimised creatives.",
  keywords: ["ad creative strategy India", "creative testing agency", "UGC ads D2C", "winning ad creatives", "video ad production India", "scroll-stopping creatives"],
  openGraph: {
    title: "Creative Strategy & Ad Testing | Bharat Innovations",
    description: "30+ creatives per month. Winners found in 7 days. 3x better CVR. No ad fatigue. Built for D2C brands that want to scale fast.",
    url: "https://bharatinnovations.co/services/creative-strategy",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const results = [
  { val: "30+", label: "Creatives tested monthly" },
  { val: "7 days", label: "To identify a winning hook" },
  { val: "3x", label: "Better CVR vs unoptimised creatives" },
  { val: "0", label: "Ad fatigue incidents" },
];

const formats = [
  "Static image ads", "Short-form video (Reels/Shorts)", "UGC-style creatives",
  "Carousel & collection ads", "Story ads", "Testimonial videos",
  "Product demo formats", "Hook-first scroll-stoppers",
];

const process = [
  {
    n: "01",
    title: "Creative brief & angle mapping",
    desc: "We start with your product, your audience, and your competitors. From there we map 8–12 distinct creative angles — pain points, transformations, social proof, urgency — and prioritise by conversion potential.",
  },
  {
    n: "02",
    title: "Rapid creative production",
    desc: "Our in-house creative team produces 30+ variations monthly across multiple formats. Each creative is built with a specific hypothesis: if we say X in the hook, buyer Y will stop scrolling.",
  },
  {
    n: "03",
    title: "Structured A/B testing",
    desc: "We test systematically — one variable at a time. Hook vs hook. Format vs format. CTA vs CTA. No spaghetti-at-the-wall testing. Pure data-driven creative science.",
  },
  {
    n: "04",
    title: "Winner identification & scaling",
    desc: "Winning creatives are identified within 7 days using spend efficiency thresholds. Winners get budget; losers get cut. No emotional attachment to creative — only results matter.",
  },
  {
    n: "05",
    title: "Refresh cycle to beat fatigue",
    desc: "We run a continuous refresh cycle — retiring creatives before fatigue hits, keeping frequency low and CTR high. Your campaigns never go stale.",
  },
];

const accent = "#f59e0b";

export default function CreativeStrategyPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>Creative Strategy & Testing</div>
          <h1 className="cs-h1">Find the hook.<br />Scale the winner.</h1>
          <p className="svc-detail-sub">30+ creatives tested every month — so you always have a top-performing ad in market.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#fde68a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>Why Creative Is Everything</div>
          <p className="cs-text">
            In a world where every D2C brand is running ads, the creative is the single biggest lever on your ROAS. Bad creatives with a great audience = wasted budget. Great creatives with a decent audience = consistent winners. We build the system that keeps producing great creatives — month after month, without drop-off.
          </p>
        </section>

        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>Formats We Produce</div>
          <div className="svc-platforms">
            {formats.map(f => (
              <div key={f} className="svc-platform-tag" style={{ borderColor: `${accent}40`, color: "rgba(255,255,255,0.75)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">Our creative process</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(245,158,11,0.1)`, borderColor: `rgba(245,158,11,0.35)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>Proven Across Our Clients</div>
          <p className="cs-rasa-text">
            Every case study in our portfolio — from Plus Size Kurti to Jewelry House — was powered by a systematic creative testing engine. 30+ creatives per month is not a claim. It&apos;s our operating standard.
          </p>
          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/case-studies" className="svc-cs-link" style={{ color: accent }}>View all case studies →</Link>
          </div>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Start Creative Testing
          </Link>
        </div>
      </div>
    </main>
  );
}

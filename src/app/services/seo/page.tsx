import Link from "next/link";

export const metadata = {
  title: "SEO & Content — Bharat Innovations",
  description: "Technical SEO, keyword strategy and content that drives consistent organic traffic to your D2C store.",
};

const results = [
  { val: "Top 3", label: "Keyword rankings achieved" },
  { val: "60%", label: "Organic traffic increase avg" },
  { val: "0", label: "Penalty risks — white hat only" },
  { val: "∞", label: "Traffic keeps coming after ads stop" },
];

const deliverables = [
  "Technical SEO audit & fixes", "Keyword research & mapping", "On-page optimisation",
  "Schema markup & structured data", "Content strategy & blogging", "Internal linking architecture",
  "Core Web Vitals optimisation", "Local SEO (Google Business Profile)", "Monthly performance reports",
];

const process = [
  {
    n: "01",
    title: "Technical audit",
    desc: "We start by crawling your site for technical issues — broken links, slow pages, indexation problems, missing meta tags, duplicate content. Every issue is prioritised by its impact on rankings.",
  },
  {
    n: "02",
    title: "Keyword research & intent mapping",
    desc: "We identify the exact search terms your buyers use at every stage — discovery, comparison, and purchase intent. Then we map them to the right pages so Google knows exactly what each page should rank for.",
  },
  {
    n: "03",
    title: "On-page optimisation",
    desc: "Titles, meta descriptions, headings, image alt text, internal links, page speed. Every on-page factor optimised — not with keyword stuffing, but with intent-matched content that both Google and buyers love.",
  },
  {
    n: "04",
    title: "Content creation",
    desc: "We produce buyer-intent blog posts, category page content, and product descriptions that rank and convert. Every piece is built around a keyword cluster, not just a single term.",
  },
  {
    n: "05",
    title: "Track, report, iterate",
    desc: "Monthly ranking reports, traffic analysis, and conversion tracking. SEO is a compounding investment — we track progress and iterate continuously to accelerate the curve.",
  },
];

const accent = "#4ade80";

export default function SEOPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,222,128,0.1) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>SEO & Content</div>
          <h1 className="cs-h1">Rank higher.<br />Grow for free.</h1>
          <p className="svc-detail-sub">Organic traffic that compounds over time — so your brand grows even when the ads are off.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#86efac)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>SEO as a Growth Asset</div>
          <p className="cs-text">
            Paid ads stop the moment you pause spending. SEO compounds — every optimised page, every ranked keyword, every quality backlink keeps paying dividends for months and years. For D2C brands, SEO isn&apos;t optional. It&apos;s the growth asset that reduces your dependency on paid channels and lowers your blended CAC over time.
          </p>
        </section>

        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>What&apos;s Included</div>
          <div className="svc-platforms">
            {deliverables.map(d => (
              <div key={d} className="svc-platform-tag" style={{ borderColor: `${accent}40`, color: "rgba(255,255,255,0.75)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {d}
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">Our SEO process</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(74,222,128,0.08)`, borderColor: `rgba(74,222,128,0.3)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>Complements Your Paid Campaigns</div>
          <p className="cs-rasa-text">
            The best D2C growth stacks pair paid ads for immediate revenue with SEO for long-term compounding. We run both — ensuring your brand owns both the paid and organic search real estate in your category.
          </p>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Get a Free SEO Audit
          </Link>
        </div>
      </div>
    </main>
  );
}

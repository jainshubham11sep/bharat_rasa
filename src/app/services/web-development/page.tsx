import Link from "next/link";

export const metadata = {
  title: "Web Development — Bharat Innovations",
  description: "High-converting D2C storefronts and landing pages built for speed, mobile performance, and conversions.",
};

const results = [
  { val: "<2s", label: "Mobile load time target" },
  { val: "95+", label: "PageSpeed score achieved" },
  { val: "+28%", label: "Avg CVR lift post-redesign" },
  { val: "100%", label: "Mobile-first builds" },
];

const deliverables = [
  "Custom D2C storefront design", "Shopify / Next.js development", "Landing page design & build",
  "Mobile-first responsive layouts", "Checkout flow optimisation", "Page speed optimisation",
  "SEO-ready structure", "Schema & structured data", "A/B testing setup",
];

const process = [
  {
    n: "01",
    title: "Conversion audit of existing site",
    desc: "Before writing a line of code, we audit your current site for conversion killers — slow load times, confusing navigation, weak product pages, broken checkout flows. We fix the biggest leaks first.",
  },
  {
    n: "02",
    title: "Design with buyer psychology",
    desc: "Every design decision is made through the lens of buyer psychology. Trust signals, social proof placement, scarcity cues, CTA positioning — nothing is arbitrary. Everything converts.",
  },
  {
    n: "03",
    title: "Performance-first development",
    desc: "We build on Shopify or Next.js — whichever fits your stack. Sub-2-second load times on mobile are non-negotiable. Core Web Vitals are optimised before launch, not patched after.",
  },
  {
    n: "04",
    title: "SEO baked in from day one",
    desc: "Clean URL structure, proper heading hierarchy, schema markup, sitemap, meta tags — SEO isn&apos;t an afterthought. It&apos;s part of the foundation so Google can rank your pages from day one.",
  },
  {
    n: "05",
    title: "Launch & post-launch support",
    desc: "We handle QA, cross-browser testing, and launch. Post-launch we monitor performance metrics and make adjustments. You don&apos;t go live and get abandoned.",
  },
];

const accent = "#60a5fa";

export default function WebDevelopmentPage() {
  return (
    <main className="svc-detail-page">
      <div className="svc-detail-hero" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(96,165,250,0.12) 0%, transparent 70%), #0a0a0a` }}>
        <div className="container svc-detail-hero-inner">
          <Link href="/services" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            All Services
          </Link>
          <div className="svc-detail-eyebrow" style={{ color: accent }}>Web Development</div>
          <h1 className="cs-h1">Built to convert.<br />Not just to look good.</h1>
          <p className="svc-detail-sub">Fast, mobile-first D2C websites and landing pages engineered around your buyer journey.</p>
        </div>
      </div>

      <div className="container svc-detail-body">

        <div className="cs-stats">
          {results.map(r => (
            <div key={r.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: `linear-gradient(120deg,${accent},#93c5fd)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{r.val}</div>
              <div className="cs-stat-label">{r.label}</div>
            </div>
          ))}
        </div>

        <section className="cs-section cs-card" style={{ borderLeft: `3px solid ${accent}` }}>
          <div className="cs-section-label" style={{ color: accent }}>Why Your Website Is Your #1 Growth Lever</div>
          <p className="cs-text">
            You can run the best ads in the world, but if your website is slow, confusing, or untrustworthy — buyers will leave. A 1-second delay in mobile load time can drop conversion rates by 20%. A poorly designed checkout flow loses 70% of carts. We build sites where the ads you run actually convert — not just click.
          </p>
        </section>

        <section className="cs-section cs-card" style={{ borderColor: `${accent}25` }}>
          <div className="cs-section-label" style={{ color: accent }}>What We Build</div>
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
          <h2 className="cs-h2">Our development process</h2>
          <div className="cs-steps">
            {process.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: `rgba(96,165,250,0.08)`, borderColor: `rgba(96,165,250,0.3)`, color: accent }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-rasa-box" style={{ borderLeftColor: accent }}>
          <div className="cs-rasa-label" style={{ color: accent }}>The Foundation of Every Campaign</div>
          <p className="cs-rasa-text">
            Before we launch any paid campaign for a new client, we audit their website. If the site isn&apos;t converting, we fix it first. Running ads to a broken site is burning money. We don&apos;t do that to our clients.
          </p>
        </section>

        <div className="svc-detail-cta">
          <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2.5rem" }}>
            Get a Free Website Audit
          </Link>
        </div>
      </div>
    </main>
  );
}

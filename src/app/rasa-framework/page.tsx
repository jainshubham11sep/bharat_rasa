import Link from "next/link";

const pillars = [
  {
    letter: "R",
    title: "Research & Data Intelligence",
    color: "#7c7bff",
    desc: "Deep-dive audience research, competitor analysis, and first-party data mining to uncover the exact growth levers unique to your brand.",
    points: [
      "Customer persona mapping & psychographic profiling",
      "Competitor ad & funnel teardown",
      "Market gap identification",
    ],
  },
  {
    letter: "A",
    title: "Ad Creative Strategy",
    color: "#b88dff",
    desc: "High-converting creatives engineered with AI-assisted iteration — hooks, scripts, visuals, and copy that stop the scroll and drive clicks.",
    points: [
      "AI-powered creative generation & A/B testing",
      "Platform-native formats (Reels, Shorts, Static, Carousel)",
      "Winning angle identification at scale",
    ],
  },
  {
    letter: "S",
    title: "Systematic Funnel Optimization",
    color: "#e0a695",
    desc: "Every touchpoint from cold traffic to repeat purchase is mapped, tested, and optimized — eliminating leaks that silently kill ROAS.",
    points: [
      "Full-funnel CRO (landing pages, PDPs, checkout)",
      "Retargeting stack architecture",
      "Email & WhatsApp nurture sequences",
    ],
  },
  {
    letter: "A",
    title: "Attribution & Analytics",
    color: "#4ade80",
    desc: "Crystal-clear attribution dashboards so you always know what's working, what's wasting budget, and where to double down.",
    points: [
      "Multi-touch attribution modelling",
      "Real-time performance dashboards",
      "Weekly data-driven audit reports",
    ],
  },
];

const results = [
  { value: "6x", label: "Average ROAS improvement" },
  { value: "50%+", label: "Order growth in 90 days" },
  { value: "3 mo", label: "Time to measurable results" },
  { value: "100+", label: "D2C brands scaled" },
];

export default function RasaFrameworkPage() {
  return (
    <main className="rasa-page">
      {/* Hero */}
      <section className="rasa-hero">
        <div className="rasa-hero-bg" aria-hidden="true" />
        <div className="container rasa-hero-inner">
          <Link href="/" className="rasa-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>

          <div className="rasa-tag">Performance Marketing System</div>

          <h1 className="rasa-h1">
            The <span className="rasa-accent">RASA</span> Framework
          </h1>
          <p className="rasa-subtitle">
            India&apos;s first AI-powered performance marketing system built exclusively for D2C brands —
            engineered to deliver <strong>6x ROAS</strong> and <strong>50%+ order growth</strong> in 90 days.
          </p>

          <div className="rasa-results">
            {results.map((r) => (
              <div key={r.label} className="rasa-result-card">
                <span className="rasa-result-value">{r.value}</span>
                <span className="rasa-result-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is RASA */}
      <section className="rasa-section rasa-what">
        <div className="container">
          <div className="rasa-section-label">What is RASA?</div>
          <h2 className="rasa-section-h2">
            A 4-pillar system that turns ad spend<br />into predictable, scalable revenue
          </h2>
          <p className="rasa-section-desc">
            Most D2C brands bleed money on ads because they treat marketing as a collection of disconnected tactics.
            RASA is different — it&apos;s a unified operating system where every pillar feeds the next,
            creating a compounding flywheel of growth.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="rasa-section rasa-pillars-section">
        <div className="container">
          <div className="rasa-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="rasa-pillar">
                <div className="rasa-pillar-letter" style={{ color: p.color, borderColor: p.color + "40", background: p.color + "12" }}>
                  {p.letter}
                </div>
                <div className="rasa-pillar-body">
                  <h3 className="rasa-pillar-title" style={{ color: p.color }}>{p.title}</h3>
                  <p className="rasa-pillar-desc">{p.desc}</p>
                  <ul className="rasa-pillar-list">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: p.color, flexShrink: 0, marginTop: 2 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="rasa-section rasa-how">
        <div className="container">
          <div className="rasa-section-label">The Process</div>
          <h2 className="rasa-section-h2">How we implement RASA for your brand</h2>
          <div className="rasa-steps">
            {[
              { n: "01", title: "Brand Audit & Onboarding", desc: "We audit your current ads, analytics, funnel, and creatives to establish a performance baseline." },
              { n: "02", title: "Research Sprint", desc: "Deep research into your audience, top competitors, and untapped angles — completed in week one." },
              { n: "03", title: "Launch & Iterate", desc: "We launch campaigns with AI-assisted creatives and iterate fast using real data — not guesswork." },
              { n: "04", title: "Scale What Works", desc: "Proven winners are scaled systematically while underperformers are cut — protecting every rupee of budget." },
            ].map((s) => (
              <div key={s.n} className="rasa-step">
                <div className="rasa-step-num">{s.n}</div>
                <div>
                  <div className="rasa-step-title">{s.title}</div>
                  <div className="rasa-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rasa-section rasa-cta-section">
        <div className="container rasa-cta-inner">
          <h2 className="rasa-cta-h2">Ready to scale with RASA?</h2>
          <p className="rasa-cta-desc">Apply for a free brand audit and see exactly where your ROAS is leaking — and how we fix it.</p>
          <Link href="/" className="rasa-cta-btn">
            Get a Free Brand Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

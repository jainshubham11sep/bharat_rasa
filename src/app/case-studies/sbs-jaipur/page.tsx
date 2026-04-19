import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SBS Jaipur Case Study — 20x ROAS | Bharat Innovations",
  description: "How Bharat Innovations helped SBS Jaipur achieve 20x ROAS with creative testing, founder personal branding & 32,000 new Instagram followers in 3 months.",
  keywords: ["SBS Jaipur case study", "jewellery brand marketing India", "20x ROAS case study", "founder personal branding", "Instagram growth jewellery brand"],
  openGraph: {
    title: "SBS Jaipur — 20x ROAS Case Study | Bharat Innovations",
    description: "32,000 new followers. 20x ROAS. Founder turned into a brand face. See how we transformed SBS Jaipur's marketing from the ground up.",
    url: "https://bharatinnovations.co/case-studies/sbs-jaipur",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const before = [
  { label: "Monthly ad spend", value: "₹2,00,000" },
  { label: "Monthly revenue", value: "₹6–7 Lakhs" },
  { label: "ROAS", value: "3 – 3.5x" },
  { label: "Profitability", value: "In loss" },
  { label: "Instagram following", value: "Minimal" },
];

const after = [
  { label: "Monthly ad spend", value: "₹1,20,000", highlight: true },
  { label: "Monthly revenue", value: "₹15 Lakhs", highlight: true },
  { label: "ROAS", value: "15x avg (20x peak)", highlight: true },
  { label: "Profitability", value: "Highly profitable", highlight: true },
  { label: "Instagram following", value: "+32,000 followers", highlight: true },
];

const stats = [
  { value: "15x", label: "Average ROAS achieved" },
  { value: "₹15L", label: "Monthly revenue in 90 days" },
  { value: "32K", label: "New followers in 3 months" },
  { value: "40%", label: "Less ad spend, more results" },
];

const steps = [
  {
    n: "1",
    title: "Founder personal brand building",
    desc: "We positioned Sunita Sharma as the face of SBS Jaipur — creating consistent, story-driven content across Instagram and Facebook that connected emotionally with women buyers. Result: 32,000 new followers in 3 months, building a loyal audience that converts.",
  },
  {
    n: "2",
    title: "Aggressive creative testing on Meta",
    desc: "We tested 20+ creatives every month and identified 5 hero creatives that consistently outperformed. Some individual creatives delivered a 20x ROAS — a stark contrast to the brand's previous near-zero testing approach.",
  },
  {
    n: "3",
    title: "Website & checkout optimisation",
    desc: "We plugged the website leakages, streamlined the payment checkout process, and eliminated friction points that were silently killing conversions — turning existing traffic into actual revenue.",
  },
  {
    n: "4",
    title: "Bundle offers to increase AOV",
    desc: "We introduced strategic bundle offers that increased the Average Order Value, making every ad rupee work harder and improving profitability per transaction.",
  },
  {
    n: "5",
    title: "AI integration & chatbot automation",
    desc: "We automated all key business processes using AI integrations and highly trained chatbots — reducing operational load, improving response time, and creating a seamless post-purchase experience.",
  },
];

export default function SBSJaipurPage() {
  return (
    <main className="cs-page">
      <div className="cs-hero" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(180,80,40,0.12) 0%, transparent 70%), #0a0a0a" }}>
        <div className="container cs-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <div className="cs-eyebrow" style={{ color: "#e07a5f" }}>Case Study — Premium Women&apos;s Clothing</div>
          <div className="cs-hero-logo">
            <Image src="/images/client_logo/sbs.jpeg" alt="SBS Jaipur logo" width={100} height={100} style={{ objectFit: "contain", borderRadius: 12 }} />
          </div>
          <h1 className="cs-h1">SBS Jaipur</h1>
          <p className="cs-meta">Founder: Sunita Sharma · Category: Premium Women&apos;s Clothing · Timeline: 3 Months</p>
        </div>
      </div>

      <div className="container cs-body">

        {/* Challenge */}
        <section className="cs-section cs-card" style={{ borderLeft: "3px solid #e07a5f" }}>
          <div className="cs-section-label" style={{ color: "#e07a5f" }}>The Challenge</div>
          <p className="cs-text">
            SBS Jaipur was spending ₹2 lakhs/month on ads but barely staying afloat. After accounting for packaging, RTO, delivery, and making costs, the brand was operating at a loss despite achieving ₹6–7L in monthly sales. The core issues: a leaky website with no smooth checkout, almost zero creative testing on Meta, and no system to scale profitably.
          </p>
        </section>

        {/* Before / After */}
        <section className="cs-section">
          <div className="cs-ba-grid">
            <div className="cs-card">
              <div className="cs-section-label">Before Bharat Innovations</div>
              {before.map(r => (
                <div key={r.label} className="cs-month-row">
                  <span>{r.label}</span><span>{r.value}</span>
                </div>
              ))}
            </div>
            <div className="cs-card" style={{ borderColor: "rgba(224,122,95,0.4)" }}>
              <div className="cs-section-label" style={{ color: "#e07a5f" }}>After 3 Months</div>
              {after.map(r => (
                <div key={r.label} className="cs-month-row">
                  <span>{r.label}</span>
                  <span style={{ color: r.highlight ? "#e07a5f" : undefined, fontWeight: r.highlight ? 700 : undefined }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KPIs */}
        <div className="cs-stats">
          {stats.map(s => (
            <div key={s.label} className="cs-stat-card">
              <div className="cs-stat-value" style={{ background: "linear-gradient(120deg,#e07a5f,#f4a261)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* How we did it */}
        <section className="cs-section">
          <h2 className="cs-h2">How we did it</h2>
          <div className="cs-steps">
            {steps.map(s => (
              <div key={s.n} className="cs-step">
                <div className="cs-step-num" style={{ background: "rgba(224,122,95,0.12)", borderColor: "rgba(224,122,95,0.4)", color: "#e07a5f" }}>{s.n}</div>
                <div>
                  <div className="cs-strategy-title">{s.title}</div>
                  <p className="cs-strategy-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RASA box */}
        <section className="cs-rasa-box" style={{ borderLeftColor: "#e07a5f" }}>
          <div className="cs-rasa-label" style={{ color: "#e07a5f" }}>Powered by the RASA Framework</div>
          <p className="cs-rasa-text">
            Every result above was achieved using our proprietary RASA Framework — a system built specifically to make D2C brands profitable at scale through Brand Intelligence, AI Nurturing, Engagement Ecosystem, Experience Automation, and Trust Building. SBS Jaipur is proof that with the right system, you don&apos;t need to spend more to earn more.
          </p>
        </section>

        {/* Quote */}
        <blockquote className="cs-quote">
          <p>&ldquo;We went from barely breaking even to scaling 15 Lakhs a month — and spending less on ads than before. The results felt unreal at first.&rdquo;</p>
          <footer>— Sunita Sharma, Founder, SBS Jaipur</footer>
        </blockquote>

        <div className="cs-footer-tag">Bharat Innovations · bharat-innovations.agency</div>
      </div>
    </main>
  );
}

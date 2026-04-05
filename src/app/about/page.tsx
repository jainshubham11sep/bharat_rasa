import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us — Bharat Innovations",
  description: "India's First AI Marketing Agency. We help D2C brands scale profitably using the RASA Framework.",
};

const team = [
  {
    name: "Founder & CEO",
    role: "Growth Strategist · AI Marketing Expert",
    bio: "With years of experience scaling D2C brands across India, our founder built the RASA Framework to give every brand a repeatable system for profitable growth.",
  },
];

const values = [
  {
    title: "Results First",
    desc: "Every decision is backed by data. We don't run campaigns — we build growth systems.",
  },
  {
    title: "Transparency",
    desc: "No hidden fees, no vanity metrics. You see exactly what your budget produces.",
  },
  {
    title: "AI-Powered",
    desc: "We leverage cutting-edge AI tools to automate, optimise, and scale faster than traditional agencies.",
  },
  {
    title: "D2C Specialists",
    desc: "We work exclusively with direct-to-consumer brands. It's all we do — and we do it exceptionally well.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <span className="cs-index-eyebrow">Who We Are</span>
          <h1 className="cs-index-h1">About Bharat Innovations</h1>
          <p className="cs-index-sub">
            India&apos;s First AI Marketing Agency — helping D2C brands scale profitably with proven systems, not guesswork.
          </p>
        </div>
      </section>

      <div className="container about-body">

        {/* Mission */}
        <section className="about-card">
          <div className="about-label">Our Mission</div>
          <h2 className="about-h2">Built to make Indian D2C brands unstoppable</h2>
          <p className="about-text">
            Bharat Innovations was founded with a single obsession: to give D2C brands a marketing engine that actually works. Most agencies sell clicks. We sell outcomes. Using our proprietary RASA Framework — Research, Audience, Scale, Automate — we&apos;ve helped brands go from struggling with ROAS to generating consistent 6x–10x returns on ad spend.
          </p>
          <p className="about-text">
            We believe great products deserve great marketing. And great marketing isn&apos;t about big budgets — it&apos;s about the right system.
          </p>
        </section>

        {/* Stats */}
        <div className="about-stats">
          {[
            { val: "$350,000+", label: "Revenue Generated" },
            { val: "6X", label: "Average ROAS" },
            { val: "200+", label: "Brands Served" },
            { val: "₹40L+", label: "Monthly Ads Managed" },
          ].map(s => (
            <div key={s.label} className="about-stat">
              <div className="about-stat-val">{s.val}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <section className="about-section">
          <div className="about-label">Our Values</div>
          <div className="about-values-grid">
            {values.map(v => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-title">{v.title}</div>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logo */}
        <section className="about-logo-section">
          <Image
            src="/images/bharat_innovation_logo.png"
            alt="Bharat Innovations"
            width={320}
            height={80}
            style={{ height: "64px", width: "auto", objectFit: "contain" }}
          />
          <p className="about-tagline">India&apos;s First AI Marketing Agency</p>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2 className="about-cta-h2">Ready to scale your brand?</h2>
          <p className="about-cta-sub">Let&apos;s talk about how the RASA Framework can work for you.</p>
          <div className="about-cta-btns">
            <Link href="/rasa-framework" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2rem" }}>
              Explore RASA Framework
            </Link>
            <Link href="/case-studies" className="about-cta-secondary">
              View Case Studies
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

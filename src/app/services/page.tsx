import Link from "next/link";

export const metadata = {
  title: "Marketing Services for D2C Brands | Bharat Innovations",
  description: "End-to-end AI marketing services — Paid Ads (Meta & Google), Creative Strategy, SEO, Web Development, AI Automation & Influencer Marketing for D2C & eCommerce brands in India.",
  keywords: ["D2C marketing services India", "paid advertising agency", "creative strategy", "SEO for eCommerce", "web development D2C", "AI automation marketing", "influencer marketing India"],
  openGraph: {
    title: "Marketing Services for D2C Brands | Bharat Innovations",
    description: "Full-stack AI marketing services for D2C brands — everything from paid ads to SEO to web development, all powered by the RASA Framework.",
    url: "https://bharatinnovations.co/services",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    slug: "performance-marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    label: "Performance Marketing",
    tagline: "Meta · Google · ROI-first campaigns",
    desc: "We run data-driven paid campaigns on Meta and Google that scale your ad spend while protecting ROAS. No vanity clicks — only profitable growth.",
    results: ["8.5x ROAS maintained at ₹30K/day", "₹2K → ₹30K daily budget scaled", "+400% increase in orders"],
    accent: "#7c7bff",
  },
  {
    slug: "creative-strategy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    label: "Creative Strategy & Testing",
    tagline: "30+ creatives tested monthly",
    desc: "We build a relentless creative testing engine — 30+ new creatives every month — to find winning hooks, formats, and angles before scaling hard.",
    results: ["30+ creatives tested per month", "Hero creatives identified in 7 days", "Ad fatigue eliminated systematically"],
    accent: "#f59e0b",
  },
  {
    slug: "ai-automation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    label: "AI Automation & Retargeting",
    tagline: "Recover lost sales · 24/7 follow-up",
    desc: "We deploy AI-powered retargeting flows and chatbot sequences that bring back cart abandoners, warm up cold audiences, and close sales while you sleep.",
    results: ["Cart abandonment recovery automated", "Follow-up sequences running 24/7", "Warm audience ROAS 2–3x cold traffic"],
    accent: "#00e6c8",
  },
  {
    slug: "influencer-marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: "Influencer Marketing",
    tagline: "Trust-building at scale",
    desc: "We identify and activate the right influencers to build brand credibility before scaling cold traffic — reducing purchase hesitation and boosting CVR.",
    results: ["Influencer halo effect on cold traffic CVR", "Jewellery brand credibility built in 30 days", "Content repurposed across paid channels"],
    accent: "#f472b6",
  },
  {
    slug: "seo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    label: "SEO & Content",
    tagline: "Organic growth · Long-term visibility",
    desc: "From technical SEO audits to keyword-targeted content, we build the organic infrastructure that keeps bringing buyers to your store — even when ads are off.",
    results: ["Full technical & on-page SEO", "Keyword research & content strategy", "Structured data & schema markup"],
    accent: "#4ade80",
  },
  {
    slug: "web-development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: "Web Development",
    tagline: "High-converting D2C storefronts",
    desc: "We build fast, mobile-first websites and landing pages engineered to convert. Every pixel is optimised for the buyer journey — from first click to checkout.",
    results: ["Sub-2s load time on mobile", "Conversion-optimised checkout flows", "SEO & speed built-in from day one"],
    accent: "#60a5fa",
  },
];

export default function ServicesPage() {
  return (
    <main className="svc-page">
      {/* Hero */}
      <section className="svc-hero">
        <div className="container svc-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Home
          </Link>
          <span className="cs-index-eyebrow">What We Do</span>
          <h1 className="cs-index-h1">Our Services</h1>
          <p className="cs-index-sub">
            Every service we offer feeds into one outcome — profitable, scalable growth for your D2C brand.
            Powered by the RASA Framework.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="container svc-body">
        <div className="svc-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
              <div className="svc-card-icon" style={{ color: s.accent, background: `${s.accent}15` }}>
                {s.icon}
              </div>
              <div className="svc-card-tag" style={{ color: s.accent }}>{s.tagline}</div>
              <h2 className="svc-card-title">{s.label}</h2>
              <p className="svc-card-desc">{s.desc}</p>
              <ul className="svc-card-results">
                {s.results.map((r) => (
                  <li key={r}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="svc-card-cta">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="svc-cta">
          <h2 className="svc-cta-h2">Not sure which service you need?</h2>
          <p className="svc-cta-sub">Book a free 30-minute strategy call. We&apos;ll diagnose exactly where your brand is leaking revenue and how to fix it.</p>
          <div className="about-cta-btns">
            <Link href="/contact" className="drawer-footer-btn" style={{ display: "inline-flex", width: "auto", padding: "0.9rem 2rem" }}>
              Book a Free Strategy Call
            </Link>
            <Link href="/rasa-framework" className="about-cta-secondary">
              Learn about RASA Framework →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

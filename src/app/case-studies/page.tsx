import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

const colorMap: Record<string, string> = {
  green: "#4ade80",
  blue: "#60a5fa",
  "blue-soft": "#93c5fd",
};

// Accent color + gradient per case study for the visual banner
const cardMeta: Record<string, { from: string; to: string; label: string }> = {
  "plus-size-kurti":    { from: "#7c3aed", to: "#4f46e5", label: "Women's Fashion · Built from Zero" },
  "sbs-jaipur":         { from: "#c2410c", to: "#b45309", label: "Premium Women's Clothing" },
  "silver-house-by-rj": { from: "#92400e", to: "#78350f", label: "Silver, Gold & Diamond Jewellery" },
  "arushi-arts":        { from: "#9d174d", to: "#831843", label: "Imitation Jewellery · D2C Scaling" },
  "cashmagnet":         { from: "#065f46", to: "#064e3b", label: "E-Commerce · Performance Marketing" },
  "jewelry-house":      { from: "#1e3a8a", to: "#1e40af", label: "Fine Jewellery · D2C Performance" },
};

export default function CaseStudiesPage() {
  return (
    <main className="cs-index-page">
      {/* Hero */}
      <section className="cs-index-hero">
        <div className="container cs-index-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <span className="cs-index-eyebrow">Proven Results</span>
          <h1 className="cs-index-h1">Case Studies</h1>
          <p className="cs-index-sub">
            Real brands. Real numbers. Here&apos;s how we&apos;ve helped D2C businesses
            scale profitably with the RASA Framework.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <div className="container cs-index-body">
        <div className="cs-index-grid">
          {caseStudies.map((cs) => {
            const meta = cardMeta[cs.id] ?? { from: "#312e81", to: "#1e1b4b", label: "D2C Growth" };
            return (
              <Link key={cs.id} href={cs.link} className="cs-idx-card">
                {/* Visual banner */}
                <div
                  className="cs-idx-banner"
                  style={{ background: `linear-gradient(135deg, ${meta.from} 0%, ${meta.to} 100%)` }}
                >
                  {cs.logo && (
                    <div className="cs-idx-banner-logo">
                      <Image
                        src={cs.logo}
                        alt={cs.title}
                        width={100}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  {!cs.logo && (
                    <div className="cs-idx-banner-initials">
                      {cs.title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <span className="cs-idx-banner-label">{meta.label}</span>
                </div>

                {/* Card body */}
                <div className="cs-idx-body">
                  <div className="cs-idx-head">
                    <h2 className="cs-idx-title">{cs.title}</h2>
                    <span className="cs-idx-arrow">
                      <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  <p
                    className="cs-idx-desc"
                    dangerouslySetInnerHTML={{ __html: cs.description }}
                  />

                  <div className="cs-idx-kpis">
                    {cs.kpis.map((kpi, i) => (
                      <div key={i} className="cs-idx-kpi">
                        <span className="cs-idx-kpi-val" style={{ color: colorMap[kpi.color] }}>
                          {kpi.value}
                        </span>
                        <span className="cs-idx-kpi-label">{kpi.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

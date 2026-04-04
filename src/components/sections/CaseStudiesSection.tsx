import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

const colorMap = {
  green: "gg-green",
  blue: "gg-blue",
  "blue-soft": "gg-blue-soft",
};

export default function CaseStudiesSection() {
  return (
    <section className="gg-cs" aria-label="Bharat Innovations case studies">
      <div className="gg-cs__stars gg-cs__s1" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s2" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s3" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s4" aria-hidden="true">*</div>

      <div className="gg-cs__svg gg-cs__svg--br" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="gg-cs__container">
        <div className="gg-cs__intro">
          <h2 className="gg-cs__h2">Proven Growth, Real Results</h2>
          <p className="gg-cs__p">
            At Bharat Innovations, we don&apos;t just talk about results — we deliver them.
            Here&apos;s how we&apos;ve helped D2C brands scale with our RASA Framework.
          </p>
        </div>

        <div className="gg-cs__grid">
          {caseStudies.map((cs) => (
            <Link key={cs.id} href={cs.link} className="gg-card" style={{ textDecoration: "none" }}>
              <div className="gg-card__head">
                <div className="gg-card__brand">
                  {cs.logo ? (
                    <div className="gg-card__logo" aria-hidden="true">
                      <Image
                        src={cs.logo}
                        alt={`${cs.title} logo`}
                        width={80}
                        height={40}
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="gg-card__logo-text" aria-hidden="true">
                      {cs.title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <h3 className="gg-card__title">{cs.title}</h3>
                </div>
                <span className="gg-card__link" aria-label={`View ${cs.title} case study`}>
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <p className="gg-card__desc" dangerouslySetInnerHTML={{ __html: cs.description }} />

              <div className="gg-card__kpis">
                {cs.kpis.map((kpi, i) => (
                  <div key={i} className="gg-kpi">
                    <p className={`gg-kpi__val ${colorMap[kpi.color]}`}>{kpi.value}</p>
                    <p className="gg-kpi__lab">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

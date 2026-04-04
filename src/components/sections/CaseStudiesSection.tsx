import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

const colorMap = {
  green: "gg-green",
  blue: "gg-blue",
  "blue-soft": "gg-blue-soft",
};

export default function CaseStudiesSection() {
  return (
    <section className="gg-cs" aria-label="Bharat Innovations case studies">
      {/* Decorative stars */}
      <div className="gg-cs__stars gg-cs__s1" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s2" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s3" aria-hidden="true">*</div>
      <div className="gg-cs__stars gg-cs__s4" aria-hidden="true">*</div>

      <div className="gg-cs__svg gg-cs__svg--br" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="gg-cs__container">
        <div className="gg-cs__intro">
          <h2 className="gg-cs__h2">Proven Growth, Real Results</h2>
          <p className="gg-cs__p">
            At Bharat Innovations, we don&apos;t just talk about results — we deliver them.
            Here&apos;s how we&apos;ve helped businesses scale with data-driven strategies.
          </p>
        </div>

        <div className="gg-cs__grid">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="gg-card">
              <div className="gg-card__head">
                <div className="gg-card__brand">
                  <div className="gg-card__logo" aria-hidden="true">
                    <Image
                      src={cs.logo}
                      alt={`${cs.title} logo`}
                      width={44}
                      height={44}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="gg-card__title">{cs.title}</h3>
                </div>

                <a
                  className="gg-card__link"
                  href={cs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cs.title} case study`}
                >
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path
                      d="M14 5h5v5M10 14L19 5M19 14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <p
                className="gg-card__desc"
                dangerouslySetInnerHTML={{ __html: cs.description }}
              />

              <div className="gg-card__kpis">
                {cs.kpis.map((kpi, i) => (
                  <div key={i} className="gg-kpi">
                    <p className={`gg-kpi__val ${colorMap[kpi.color]}`}>{kpi.value}</p>
                    <p className="gg-kpi__lab">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

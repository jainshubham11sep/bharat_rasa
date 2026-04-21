import Image from "next/image";

const partners = [
  {
    src: "/images/partner-meta.jpeg",
    alt: "Meta Business Partner",
    label: "Meta Business Partner",
    wide: true,
  },
  {
    src: "/images/partner-google.jpeg",
    alt: "Google Partner",
    label: "Google Partner",
    wide: false,
  },
  {
    src: "/images/partner-shopify.jpeg",
    alt: "Certified Shopify Partner",
    label: "Certified Shopify Partner",
    wide: false,
  },
  {
    src: "/images/partner-snapchat.jpeg",
    alt: "Snapchat Strategic Agency Partner",
    label: "Snapchat Strategic Agency Partner",
    wide: false,
  },
  {
    src: "/images/partner-hubspot.jpeg",
    alt: "HubSpot Diamond Agency Partner",
    label: "HubSpot Diamond Agency Partner",
    wide: false,
  },
];

export default function OurPartnersSection() {
  return (
    <section className="op-section">
      <div className="op-inner">
        <div className="op-header">
          <span className="op-eyebrow">Certified &amp; Trusted</span>
          <h2 className="op-title">Our Partners</h2>
          <p className="op-sub">
            Officially certified by the world&apos;s leading platforms — so you scale with the best.
          </p>
        </div>

        <div className="op-grid">
          {partners.map((p) => (
            <div key={p.alt} className={`op-card${p.wide ? " op-card--wide" : ""}`}>
              <div className="op-img-wrap">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 600px) 45vw, 200px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="op-label">{p.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .op-section {
          width: 100%;
          padding: 3.5rem 1.25rem;
          background: var(--c-bg);
          font-family: Inter, system-ui, sans-serif;
          box-sizing: border-box;
        }
        .op-inner { max-width: 1100px; margin: 0 auto; }

        .op-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .op-eyebrow {
          display: block;
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(224,166,149,0.9); margin-bottom: 0.4rem;
        }
        .op-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800; margin: 0 0 0.5rem;
          color: var(--c-text);
        }
        .op-sub {
          font-size: 0.9rem;
          color: var(--c-text-2);
          margin: 0;
        }

        .op-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
        }

        .op-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem 1.25rem 1rem;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.07);
          width: 160px;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .op-card--wide {
          width: 220px;
        }
        .op-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.13);
        }

        .op-img-wrap {
          position: relative;
          width: 100%;
          height: 110px;
        }
        .op-card--wide .op-img-wrap {
          height: 90px;
        }

        .op-label {
          font-size: 0.74rem;
          font-weight: 600;
          color: #444;
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .op-section { padding: 2.5rem 0; }
          .op-header { padding: 0 1.25rem; }
          .op-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 0.85rem;
            padding: 0.5rem 1.25rem 1rem;
            scrollbar-width: none;
            justify-content: flex-start;
          }
          .op-grid::-webkit-scrollbar { display: none; }
          .op-card {
            flex: 0 0 130px;
            width: 130px;
            scroll-snap-align: start;
            padding: 1rem 0.85rem 0.75rem;
          }
          .op-card--wide {
            flex: 0 0 150px;
            width: 150px;
          }
          .op-img-wrap { height: 80px; }
          .op-card--wide .op-img-wrap { height: 70px; }
          .op-label { font-size: 0.68rem; }
        }
      `}</style>
    </section>
  );
}

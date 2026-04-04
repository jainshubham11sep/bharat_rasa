const stats = [
  { value: "$369,000+", label: "Revenue Generated" },
  { value: "5.5", label: "Average ROI" },
  { value: "40+", label: "Successful Campaigns" },
];

export default function StatsSection() {
  return (
    <div className="ggca" aria-label="Content Approach Section">
      <div className="ggca-star topright" aria-hidden="true">*</div>
      <div className="ggca-star bottomleft" aria-hidden="true">*</div>
      <div className="ggca-triangle" aria-hidden="true">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40 10L10 70H70L40 10Z" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="ggca-wrap">
        <h1 className="ggca-title">Data-Driven & Dynamic Growth Strategies</h1>
        <p className="ggca-sub">
          Our approach is rooted in data, built on dynamic strategies, and focused on real
          business growth. We analyze, adapt, and scale what works.
        </p>
        <div className="ggca-grid">
          {stats.map((s) => (
            <div key={s.label} className="ggca-stat">
              <h2>{s.value}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="ggca-btn-wrap">
          <a className="ggca-btn" href="#services">
            OUR SERVICES
          </a>
        </div>
      </div>
    </div>
  );
}

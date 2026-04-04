import Link from "next/link";

const features = [
  {
    title: "Ad + SEO Audit",
    description:
      "See what's wasting money, what to fix, and what to scale — all in one place.",
  },
  {
    title: "Updated Strategies",
    description:
      "Get monthly updates for SEO, ads, and content that actually move the needle.",
  },
  {
    title: "Growth Action Plan",
    description:
      "A clear roadmap for your next 3–6 months of marketing execution.",
  },
];

export default function DashboardSection() {
  return (
    <section className="ggdash-home">
      <div className="inner">
        <h2>
          One Dashboard.{" "}
          <span className="highlight">All the Growth You Need.</span>
        </h2>
        <p className="sub">
          Ad audits, SEO strategy, content ideas, and a clear monthly growth plan — without
          paying ₹1L/month retainers.
        </p>

        <div className="ggdash-grid">
          {features.map((f) => (
            <div key={f.title} className="ggdash-card">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>

        <p className="sub" style={{ marginBottom: "2rem" }}>
          The Bharat Innovations Growth Dashboard is your plug-and-play marketing OS for D2C brands.
        </p>

        <Link href="/growth-dashboard" className="cta-btn">
          Explore Growth Dashboard
        </Link>
      </div>
    </section>
  );
}

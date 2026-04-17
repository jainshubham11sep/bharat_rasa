const steps = [
  {
    step: "Step One",
    heading: "Discovery Call",
    text: "We go deep into your numbers, audience, and competitive landscape to map out a growth strategy built specifically around your brand — not a recycled template.",
    variant: "gg-hiw-yellow",
  },
  {
    step: "Step Two",
    heading: "Onboarding",
    text: "Within 7 days of onboarding we audit your accounts, set up tracking infrastructure, and brief creatives — so we hit the ground running without wasted weeks.",
    variant: "gg-hiw-blue",
  },
  {
    step: "Step Three",
    heading: "Convergence",
    text: "All channels — ads, content, website, and retention — work as one integrated system. We iterate weekly based on data until your brand reaches its growth ceiling, then we raise it.",
    variant: "gg-hiw-red",
  },
];

export default function HowWeGrowSection() {
  return (
    <section className="gg-hiw-wrap">
      <h1 className="gg-hiw-title">How We Grow Your Business</h1>
      <div className="gg-hiw-cards">
        {steps.map((s) => (
          <div key={s.step} className={`gg-hiw-card ${s.variant}`}>
            <div className="gg-hiw-step">{s.step}</div>
            <div className="gg-hiw-heading">{s.heading}</div>
            <div className="gg-hiw-text">{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

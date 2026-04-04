const steps = [
  {
    step: "Step One",
    heading: "Discovery Call",
    text: "We analyze your business & market to create a strategy while also suggesting SEO and Growth related strategies to help you scale faster.",
    variant: "gg-hiw-yellow",
  },
  {
    step: "Step Two",
    heading: "Onboarding",
    text: "We have a clear and simple onboarding process which is then followed by setting up the basic foundations of optimizing your digital presence.",
    variant: "gg-hiw-blue",
  },
  {
    step: "Step Three",
    heading: "Convergence",
    text: "We launch paid ad campaigns, optimize local and online SEO strategies while also focusing heavily on Conversion Rate Optimization (CRO).",
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

const openRoles = [
  {
    title: "Performance Marketer",
    description: "Meta + Google full funnel execution.",
  },
  {
    title: "Shopify / WordPress Developer",
    description: "Custom builds and CRO optimisation.",
  },
];

export default function CareersSection() {
  return (
    <section className="gg-careers">
      <div className="gg-careers__wrap">
        <div className="gg-careers__top">
          <div className="gg-careers__hero">
            <div className="gg-careers__kicker">
              <span className="gg-careers__dot"></span>
              Careers at Bharat Innovations
            </div>

            <h2 className="gg-careers__title">
              We Don&apos;t Hire Employees.{" "}
              <span>We Build Operators.</span>
            </h2>

            <p className="gg-careers__sub">
              Bharat Innovations isn&apos;t a typical marketing agency. We build growth systems, scale brands,
              fix broken funnels, replace bloated SaaS stacks, and make businesses profitable. If
              you want ownership, responsibility, and real impact, keep reading.
            </p>

            <ul className="gg-careers__bullets">
              <li>
                <span className="gg-careers__check"></span>
                Think in systems, not tasks
              </li>
              <li>
                <span className="gg-careers__check"></span>
                Care about outcomes
              </li>
              <li>
                <span className="gg-careers__check"></span>
                Take responsibility
              </li>
              <li>
                <span className="gg-careers__check"></span>
                Move fast and fix
              </li>
            </ul>
          </div>

          <aside className="gg-careers__applyCard">
            <div>
              <h3 className="gg-careers__applyTitle">How to Apply</h3>
              <p className="gg-careers__applyText">
                Submit your application through our official careers page.
              </p>
            </div>
            <div className="gg-careers__btnRow">
              <a
                className="gg-careers__btn gg-careers__btnPrimary"
                href="https://gogrowth.co/career/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now →
              </a>
            </div>
          </aside>
        </div>

        <div className="gg-careers__sections">
          <div className="gg-careers__card">
            <h3 className="gg-careers__h3">Open Roles</h3>
            <div className="gg-careers__roleGrid">
              {openRoles.map((role) => (
                <div key={role.title} className="gg-careers__role">
                  <h4>{role.title}</h4>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gg-careers__card">
            <h3 className="gg-careers__h3">Why Join</h3>
            <p className="gg-careers__p">
              Real ownership. Real responsibility. Real growth.
            </p>
          </div>
        </div>

        <div className="gg-careers__footer">
          <a
            className="gg-careers__btn gg-careers__btnPrimary"
            href="https://gogrowth.co/career/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  );
}

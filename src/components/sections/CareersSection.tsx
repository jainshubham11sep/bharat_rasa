const openRoles = [
  {
    title: "Performance Marketer",
    description: "Own full-funnel campaigns on Meta & Google. You'll test creatives, scale winners, and be accountable to ROAS — not just ad spend.",
  },
  {
    title: "Shopify / WordPress Developer",
    description: "Build fast, conversion-focused storefronts and landing pages. You care about UX, speed, and how a page makes someone buy.",
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
              We Don&apos;t Fill Seats.{" "}
              <span>We Build Growth Operators.</span>
            </h2>

            <p className="gg-careers__sub">
              At Bharat Innovations, we don&apos;t manage tasks — we own outcomes. Every person on our team runs their domain like a founder would. We move fast, learn from data, and build things that actually scale brands. If that sounds like the environment you&apos;ve been looking for, read on.
            </p>

            <ul className="gg-careers__bullets">
              <li>
                <span className="gg-careers__check"></span>
                You think in systems and outcomes, not checklists
              </li>
              <li>
                <span className="gg-careers__check"></span>
                You take initiative without waiting to be told
              </li>
              <li>
                <span className="gg-careers__check"></span>
                You thrive when you have real responsibility
              </li>
              <li>
                <span className="gg-careers__check"></span>
                You want to grow with a team that moves at pace
              </li>
            </ul>
          </div>

          <aside className="gg-careers__applyCard">
            <div>
              <h3 className="gg-careers__applyTitle">How to Apply</h3>
              <p className="gg-careers__applyText">
                Send us a short note about yourself and why you&apos;d be a great fit. We read every application.
              </p>
            </div>
            <div className="gg-careers__btnRow">
              <a
                className="gg-careers__btn gg-careers__btnPrimary"
                href="/contact"
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
              You&apos;ll work directly on live brand accounts from day one. No shadowing, no busywork — just real problems, real data, and the freedom to make decisions that move the needle.
            </p>
          </div>
        </div>

        <div className="gg-careers__footer">
          <a
            className="gg-careers__btn gg-careers__btnPrimary"
            href="/contact"
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

import Link from "next/link";

export const metadata = {
  title: "Refund & Returns Policy | Bharat Innovations",
  description: "Read Bharat Innovations' Refund & Returns Policy. Understand our service terms, cancellation process, and refund conditions.",
};

export default function RefundReturnsPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <Link href="/" className="cs-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <span className="cs-index-eyebrow">Legal</span>
          <h1 className="cs-index-h1">Refund &amp; Returns Policy</h1>
          <p className="cs-index-sub">Last updated: April 2025</p>
        </div>
      </section>

      <div className="container about-body">
        <div className="legal-content">

          <section className="legal-section">
            <h2>1. Nature of Our Services</h2>
            <p>Bharat Innovations provides digital marketing services including performance advertising, social media growth, web development, and growth consulting. As these are professional services delivered through time, expertise, and proprietary systems, they are inherently non-tangible and non-returnable in the traditional sense.</p>
          </section>

          <section className="legal-section">
            <h2>2. General Refund Policy</h2>
            <p>All payments made to Bharat Innovations are non-refundable once work has commenced. This includes:</p>
            <ul>
              <li>Monthly retainer fees once the billing cycle has begun</li>
              <li>One-time project fees once discovery or strategy work has started</li>
              <li>Ad budget amounts transferred for campaign management (as these are disbursed to ad platforms)</li>
              <li>Onboarding or setup fees</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Exceptional Circumstances</h2>
            <p>Bharat Innovations may, at its sole discretion, consider a partial refund in the following situations:</p>
            <ul>
              <li>A service was purchased but work had not yet commenced due to delays on our end</li>
              <li>A technical or billing error resulted in a duplicate charge</li>
              <li>A written agreement between both parties specifically includes refund provisions</li>
            </ul>
            <p>Refund requests must be submitted in writing to hello@bharatinnovations.in within 7 days of the charge. Requests made after this window will not be considered.</p>
          </section>

          <section className="legal-section">
            <h2>4. Ad Spend & Third-Party Platform Costs</h2>
            <p>Any amounts paid directly to third-party advertising platforms (such as Meta, Google, or LinkedIn) through your ad accounts are governed entirely by those platforms&apos; own refund and billing policies. Bharat Innovations has no control over and cannot be held liable for these charges.</p>
          </section>

          <section className="legal-section">
            <h2>5. Cancellation Policy</h2>
            <p>Clients may cancel ongoing retainer services by providing 30 days written notice. Upon cancellation:</p>
            <ul>
              <li>All work in the current billing cycle will be completed as contracted</li>
              <li>No refunds will be issued for the current billing period</li>
              <li>All access, assets, and credentials belonging to the client will be returned within 7 business days</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Disputes</h2>
            <p>If you believe you have been incorrectly charged or have a concern about service delivery, please contact us before initiating any chargeback with your bank. We are committed to resolving issues fairly and promptly.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us</h2>
            <p>For refund-related queries, please reach out to us at:</p>
            <p><strong>Bharat Innovations</strong><br />Email: hello@bharatinnovations.in</p>
            <p>We aim to respond to all queries within 2 business days.</p>
          </section>

        </div>
      </div>
    </main>
  );
}

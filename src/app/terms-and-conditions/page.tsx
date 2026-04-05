import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Bharat Innovations",
  description: "Terms and Conditions for Bharat Innovations — India's First AI Marketing Agency.",
};

export default function TermsPage() {
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
          <h1 className="cs-index-h1">Terms &amp; Conditions</h1>
          <p className="cs-index-sub">Last updated: April 2025</p>
        </div>
      </section>

      <div className="container about-body">
        <div className="legal-content">

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the Bharat Innovations website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="legal-section">
            <h2>2. Services</h2>
            <p>Bharat Innovations provides AI-powered digital marketing services including but not limited to performance marketing, social media advertising, creative strategy, and growth consulting for D2C brands. Specific service terms will be outlined in individual service agreements.</p>
          </section>

          <section className="legal-section">
            <h2>3. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information about their business</li>
              <li>Timely payment of agreed fees</li>
              <li>Ensuring all content and products comply with applicable laws</li>
              <li>Maintaining active ad accounts and necessary platform access</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Payment Terms</h2>
            <p>Payment terms are specified in individual service agreements. Invoices are due within the period stated. Late payments may result in service suspension. All fees are non-refundable unless otherwise stated in writing.</p>
          </section>

          <section className="legal-section">
            <h2>5. Performance & Results</h2>
            <p>While we strive to achieve the best possible results, Bharat Innovations does not guarantee specific ROAS, revenue, or other performance metrics. Digital advertising results depend on multiple factors including market conditions, platform algorithms, and product quality, which are beyond our complete control.</p>
          </section>

          <section className="legal-section">
            <h2>6. Confidentiality</h2>
            <p>Both parties agree to keep confidential all proprietary information shared during the engagement. This includes campaign strategies, creative assets, performance data, and business information. This obligation survives termination of services.</p>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property</h2>
            <p>All creative assets, strategies, and proprietary frameworks developed by Bharat Innovations (including the RASA Framework) remain our intellectual property. Upon full payment, clients receive a licence to use deliverables created specifically for their campaigns.</p>
          </section>

          <section className="legal-section">
            <h2>8. Termination</h2>
            <p>Either party may terminate services with 30 days written notice. Bharat Innovations reserves the right to terminate immediately if the client violates these terms, engages in illegal activities, or fails to make payment.</p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>Bharat Innovations&apos; liability is limited to the fees paid for services in the month the issue arose. We are not liable for indirect, incidental, or consequential damages.</p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.</p>
          </section>

          <section className="legal-section">
            <h2>11. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p><strong>Bharat Innovations</strong><br />Email: hello@bharatinnovations.in</p>
          </section>

        </div>
      </div>
    </main>
  );
}

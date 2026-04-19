import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Bharat Innovations",
  description: "Read Bharat Innovations' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy matters to us.",
};

export default function PrivacyPolicyPage() {
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
          <h1 className="cs-index-h1">Privacy Policy</h1>
          <p className="cs-index-sub">Last updated: April 2025</p>
        </div>
      </section>

      <div className="container about-body">
        <div className="legal-content">

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, business name, and any other information you choose to provide.</p>
            <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, referring URLs, and pages visited.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyse and improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
          </section>

          <section className="legal-section">
            <h2>4. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, though this may affect site functionality.</p>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.</p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@bharatinnovations.in.</p>
          </section>

          <section className="legal-section">
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.</p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Bharat Innovations</strong><br />Email: hello@bharatinnovations.in</p>
          </section>

        </div>
      </div>
    </main>
  );
}

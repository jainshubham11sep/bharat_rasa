import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Book a Free Strategy Call", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Returns", href: "/refund-returns" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socials = [
  {
    label: "Bharat Innovations",
    sub: "Instagram",
    href: "https://www.instagram.com/bharatinnovations.agency?igsh=NW10ZTZuNzBuZnBs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "RASA Framework",
    sub: "Instagram",
    href: "https://www.instagram.com/rasaframework?igsh=Z2MzemRlMDh4Yjh3",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Founder",
    sub: "@abhimanyu2.0",
    href: "https://www.instagram.com/abhimanyu2.0?igsh=YnN4ZzBuZDF6ejE2&utm_source=qr",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "Bharat Innovations",
    href: "https://www.linkedin.com/company/bharat-innovaitions/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const marqueeText = "become the go-to brand in your industry |";
const marqueeItems = Array(10).fill(marqueeText);

export default function Footer() {
  return (
    <footer className="ggfooter">
      {/* Marquee Banner */}
      <div className="marquee-wrap">
        <div className="marquee-outer">
          <div className="marquee-row">
            <div className="marquee" aria-hidden="true">
              {marqueeItems.map((text, i) => (
                <span key={i} className="item">{text}</span>
              ))}
              {marqueeItems.map((text, i) => (
                <span key={`dup-${i}`} className="item">{text}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="content">
          <div className="ggfooter-grid">

            {/* Brand col */}
            <div className="ggfooter-brand">
              <Link href="/" className="footer-logo-link">
                <Image
                  src="/images/bharat_innovation_logo.png"
                  alt="Bharat Innovations"
                  width={420}
                  height={105}
                  style={{ height: "60px", width: "auto", objectFit: "contain" }}
                />
              </Link>
              <p className="ggfooter-tagline">India&apos;s First AI Marketing Agency for D2C &amp; eCommerce Brands.</p>

              {/* Phone numbers */}
              <div className="ggfooter-phones">
                <a href="tel:+919983732955" className="ggfooter-phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 17z"/>
                  </svg>
                  +91 99837 32955
                </a>
                <a href="tel:+918233155275" className="ggfooter-phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 17z"/>
                  </svg>
                  +91 82331 55275
                </a>
              </div>

              {/* Email */}
              <a href="mailto:info@bharatinnovations.co" className="ggfooter-phone">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                info@bharatinnovations.co
              </a>

              {/* Address */}
              <div className="ggfooter-address">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>5th Floor, RTech Capital Highstreet, Mahal Rd, Jagatpura, Jaipur, Rajasthan 302017</span>
              </div>
            </div>

            {/* Links col */}
            <div className="ggfooter-links-col">
              <div className="ggfooter-col-label">Quick Links</div>
              <div className="footer-links">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social col */}
            <div className="ggfooter-social-col">
              <div className="ggfooter-col-label">Follow Us</div>
              <div className="ggfooter-socials">
                {socials.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="ggfooter-social-item">
                    <span className="ggfooter-social-icon">{s.icon}</span>
                    <span>
                      <span className="ggfooter-social-name">{s.label}</span>
                      <span className="ggfooter-social-sub">{s.sub}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="inner">
          <p>All rights reserved by Bharat Innovations © {new Date().getFullYear()}</p>
        </div>
      </div>

      <style>{`
        .ggfooter-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 2.5rem;
          padding: 2.5rem 0 1.5rem;
        }
        .ggfooter-brand { display: flex; flex-direction: column; gap: 0.75rem; }
        .ggfooter-tagline { font-size: 0.82rem; color: var(--c-text-3); margin: 0; line-height: 1.6; max-width: 280px; }
        .ggfooter-phones { display: flex; flex-direction: column; gap: 0.35rem; }
        .ggfooter-phone {
          display: flex; align-items: center; gap: 0.45rem;
          font-size: 0.83rem; color: var(--c-text-2); text-decoration: none;
          transition: color 0.15s;
        }
        .ggfooter-phone:hover { color: #e0a695; }
        .ggfooter-address {
          display: flex; gap: 0.45rem; align-items: flex-start;
          font-size: 0.78rem; color: var(--c-text-3); line-height: 1.6;
        }
        .ggfooter-col-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #e0a695; margin-bottom: 1rem;
        }
        .ggfooter-links-col .footer-links { display: flex; flex-direction: column; gap: 0.6rem; }
        .ggfooter-links-col .footer-links a { font-size: 0.85rem; color: var(--c-text-2); text-decoration: none; transition: color 0.15s; }
        .ggfooter-links-col .footer-links a:hover { color: #e0a695; }
        .ggfooter-socials { display: flex; flex-direction: column; gap: 0.85rem; }
        .ggfooter-social-item {
          display: flex; align-items: center; gap: 0.6rem;
          text-decoration: none; transition: opacity 0.15s;
        }
        .ggfooter-social-item:hover { opacity: 0.75; }
        .ggfooter-social-icon {
          width: 30px; height: 30px; border-radius: 7px;
          background: rgba(224,166,149,0.1); border: 1px solid rgba(224,166,149,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #e0a695; flex-shrink: 0;
        }
        .ggfooter-social-name { display: block; font-size: 0.82rem; font-weight: 600; color: var(--c-text); }
        .ggfooter-social-sub { display: block; font-size: 0.7rem; color: var(--c-text-3); }

        @media (max-width: 900px) {
          .ggfooter-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .ggfooter-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </footer>
  );
}

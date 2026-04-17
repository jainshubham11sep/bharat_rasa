import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Book a Free Strategy Call", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Returns", href: "/refund-returns" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
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
              {/* Duplicate for seamless loop */}
              {marqueeItems.map((text, i) => (
                <span key={`dup-${i}`} className="item">{text}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="content">
          <div className="row">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/bharat_innovation_logo.png"
                  alt="Bharat Innovations"
                  width={420}
                  height={105}
                  style={{ height: "70px", width: "auto", objectFit: "contain" }}
                />
              </Link>
            </div>

            <div className="social">
              <div className="footer-links">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
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
    </footer>
  );
}

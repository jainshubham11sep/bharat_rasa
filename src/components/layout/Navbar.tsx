"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/rasa-framework", label: "RASA Framework" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/services", label: "Our Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <nav className="ggnav" role="navigation" aria-label="Primary">
        <div className="nav-inner">
          <div className="nav-left">
            <button
              className="menu-toggle"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="nav-center">
            <Link href="/" className="brand-logo-link" aria-label="Bharat Innovations">
              <Image
                src="/images/bharat_innovation_logo.png"
                alt="Bharat Innovations"
                width={400}
                height={100}
                priority
                style={{ height: "56px", width: "auto", objectFit: "contain" }}
              />
            </Link>
          </div>

          <div className="nav-right">
            <Link href="/rasa-framework" className="btn btn-desktop btn-diy">
              RASA
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay — outside nav so backdrop-filter doesn't clip it */}
      <div
        className={`ggnav-overlay${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer — outside nav so backdrop-filter doesn't clip it */}
      <aside
        id="ggnav-drawer"
        className={`ggnav-drawer${drawerOpen ? " open" : ""}`}
        aria-label="Navigation menu"
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="drawer-header">
          <Link href="/" className="drawer-brand-link" onClick={() => setDrawerOpen(false)}>
            <Image
              src="/images/bharat_innovation_logo.png"
              alt="Bharat Innovations"
              width={200}
              height={50}
              style={{ height: "38px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <button className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="ggnav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setDrawerOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="drawer-footer">
          <Link href="/rasa-framework" className="drawer-footer-btn" onClick={() => setDrawerOpen(false)}>
            Explore RASA Framework
          </Link>
        </div>
      </aside>
    </>
  );
}

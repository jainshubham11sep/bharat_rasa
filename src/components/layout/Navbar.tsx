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
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light";
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

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
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              {/* Sun icon — shown in dark mode (click to go light). Moon icon — shown in light mode (click to go dark).
                  Before mount we always render the sun so server/client HTML match. */}
              {mounted && !isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>
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

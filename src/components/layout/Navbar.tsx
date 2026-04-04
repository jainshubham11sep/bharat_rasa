"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "CONTACT", href: "/contact" },
  { label: "MY ACCOUNT", href: "/my-account" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);

  // Trap focus & handle ESC key inside drawer
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
    <nav className="ggnav" role="navigation" aria-label="Primary">
      <div className="nav-inner">
        {/* Left: Hamburger */}
        <div className="nav-left">
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Center: Brand (desktop) / DIY button (mobile) */}
        <div className="nav-center">
          <Link href="/" className="brand brand-desktop" aria-label="Bharat Innovations">
            Bharat Innovations
          </Link>
          <Link href="/do-it-yourself" className="btn btn-mobile btn-diy btn-diy-mobile">
            RASA
          </Link>
        </div>

        {/* Right: DIY (desktop) */}
        <div className="nav-right">
          <Link href="/do-it-yourself" className="btn btn-desktop btn-diy">
            RASA
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`ggnav-overlay${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        id="ggnav-drawer"
        className={`ggnav-drawer${drawerOpen ? " open" : ""}`}
        aria-label="Navigation menu"
        aria-modal="true"
        role="dialog"
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <Link href="/" className="drawer-brand-link" onClick={() => setDrawerOpen(false)}>
              Bharat Innovations
            </Link>
          </div>
          <button
            className="drawer-close"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="ggnav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setDrawerOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </nav>
  );
}

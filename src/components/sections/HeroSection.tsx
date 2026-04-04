"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "@/components/ui/ContactModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="gg-hero">
        {/* Decorative elements */}
        <div className="gg-deco dotA" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div className="gg-deco dotB" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </div>
        <div className="gg-deco triA" aria-hidden="true">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor">
            <polygon points="30,5 55,45 5,45" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="gg-deco triB" aria-hidden="true">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor">
            <polygon points="30,5 55,45 5,45" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="gg-deco plus" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor">
            <path d="M10,20 L30,20 M20,10 L20,30" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container">
          <div className="gg-center">
            <Link href="/rasa-framework" className="gg-tag gg-tag-link">
              <span className="gg-tag-default">
                Explore RASA Framework
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
              <span className="gg-tag-hover">Scale Upto 6x ROAS</span>
            </Link>

            <h1 className="gg-h1">
              <span className="line1">Bharat Innovations</span>
              <span className="line2">
                India&apos;s First AI Marketing <span className="gg-accent">Agency</span>
              </span>
            </h1>

            <p className="gg-desc">
              <span className="gg-desc-line">Struggling with poor <span className="gg-accent">ROAS</span> and inconsistent sales?</span>
              <span className="gg-desc-line"><span className="gg-accent">RASA Framework</span> delivers 6X ROAS and 50%+ order growth</span>
              <span className="gg-desc-line">in just 3 months.</span>
            </p>

            <button
              type="button"
              className="gg-btn"
              onClick={() => setModalOpen(true)}
            >
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

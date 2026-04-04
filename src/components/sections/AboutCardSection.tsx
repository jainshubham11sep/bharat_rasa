"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutCardSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="gghxw2" id="gghxw2">
      <div className="shell">
        <div className="row">
          <div className="left">
            <h1 className="title">
              Performance Marketing Agency for D2C & eCommerce Brands
            </h1>
            <p className="snippet">
              Bharat Innovations is a Performance marketing agency for D2C and eCommerce brands.
            </p>
            <button
              className="see"
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "See less" : "See more"}
            </button>
          </div>

          <div className="right">
            <Image
              className="logo"
              src="/images/MARKETING-agency-2.png"
              alt="Bharat Innovations logo"
              width={210}
              height={210}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className={`morewrap${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="more">
            <p>
              Bharat Innovations is a Performance marketing agency for D2C and eCommerce brands,
              helping online businesses build visibility, drive traffic, and convert it into
              consistent revenue.
            </p>

            <h3>Digital Marketing Services That Drive D2C & eCommerce Growth</h3>
            <p>
              Bharat Innovations offers end-to-end digital marketing services for D2C and eCommerce brands,
              designed to support every stage of growth.
            </p>

            <h3>Search Engine Optimization (SEO) for eCommerce</h3>
            <ul>
              <li>Keyword research for eCommerce & D2C brands</li>
              <li>On-page SEO for product & collection pages</li>
              <li>Technical SEO & site structure fixes</li>
              <li>Content optimization & buying guides</li>
              <li>Local SEO for offline-enabled brands</li>
            </ul>

            <h3>Website Design & Development</h3>
            <ul>
              <li>Custom Shopify & WooCommerce websites</li>
              <li>Mobile-first, conversion-focused layouts</li>
              <li>Page speed & SEO readiness</li>
            </ul>

            <h3>Paid Advertising & Performance Marketing</h3>
            <ul>
              <li>Google Ads & Shopping</li>
              <li>Meta & Instagram ads</li>
              <li>Retargeting & funnel optimisation</li>
              <li>ROAS tracking & analytics</li>
            </ul>

            <h3>Local, Hyperlocal & AI-Optimised Growth</h3>
            <p>
              We optimise brands for traditional search, Maps, and AI discovery platforms like
              ChatGPT and Gemini using clean technical structures.
            </p>

            <h3>Why Brands Choose Bharat Innovations</h3>
            <ul>
              <li>D2C & eCommerce specialists</li>
              <li>Transparent strategy & execution</li>
              <li>Performance-focused growth systems</li>
              <li>Flexible engagement models</li>
            </ul>

            <h3>Serving Global Markets</h3>
            <p>
              Bharat Innovations works with brands across India, the US, Australia, and Europe, supporting
              both local and global growth strategies.
            </p>

            <p>
              Whether you&apos;re launching, scaling, or optimising, Bharat Innovations helps you turn
              traffic into predictable revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              We build full-stack growth systems for D2C and eCommerce brands — combining paid ads, content, and web to turn traffic into predictable, compounding revenue.
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
              src="/images/bharat_innovation_logo.png"
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
              At Bharat Innovations, we don&apos;t believe in running ads in isolation. Every brand we work with gets a complete growth system — where paid media, organic content, website experience, and retention all work together to drive compounding results.
            </p>

            <h3>What We Do Differently</h3>
            <p>
              Most agencies optimise for clicks. We optimise for revenue. Our RASA Framework — Research, Architecture, Scale, Analyse — ensures every rupee of ad spend is accountable to real business outcomes.
            </p>

            <h3>Paid Advertising</h3>
            <ul>
              <li>Full-funnel Meta & Google campaign management</li>
              <li>Creative testing frameworks that cut CAC</li>
              <li>Retargeting sequences & cart recovery flows</li>
              <li>ROAS-first budget allocation and scaling</li>
            </ul>

            <h3>Social Media Growth</h3>
            <ul>
              <li>Platform-native content strategy for Instagram & Facebook</li>
              <li>Reels, carousels, and UGC production briefs</li>
              <li>Audience building through engagement-led campaigns</li>
              <li>Creator and influencer collaboration strategy</li>
            </ul>

            <h3>Website & Conversion Optimisation</h3>
            <ul>
              <li>High-converting Shopify & WooCommerce builds</li>
              <li>Landing pages engineered for paid traffic</li>
              <li>Page speed, mobile UX & technical SEO</li>
              <li>A/B testing for product pages and checkout</li>
            </ul>

            <h3>Who We Work With</h3>
            <p>
              We partner with D2C and eCommerce brands at every stage — from founders scaling their first ₹10L/month to established brands pushing past ₹1Cr/month. Our clients are spread across India, the US, Australia, and the UAE.
            </p>

            <h3>Results We&apos;ve Delivered</h3>
            <ul>
              <li>8× ROAS for a premium jewellery brand</li>
              <li>60 registrations on ₹90 ad spend for a fitness coaching brand</li>
              <li>₹2 CPL with 20–40× ROAS for a handcrafted home decor brand</li>
              <li>₹2Cr+ revenue generated for education and webinar clients</li>
            </ul>

            <p>
              If your brand has a product the market wants but your numbers aren&apos;t reflecting it — that&apos;s exactly the problem we exist to solve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

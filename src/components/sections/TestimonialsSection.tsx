"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const item = testimonials[current];

  return (
    <div className="ggtjsx">
      <div className="wrap">
        <div className="top">
          <div className="badge">
            <span data-badge="">{item.name} - {item.role}</span>
          </div>
          <div className="controls">
            <button
              type="button"
              className="navbtn"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="navbtn"
              aria-label="Next testimonial"
              onClick={next}
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="quote">
          <h2 className="h2">{item.quote}</h2>
        </div>

        <div className="cta">
          <Link href="/case-studies">
            <button type="button" className="chip">
              {item.stats}
            </button>
          </Link>
        </div>

        <div className="videoWrap">
          <div className="frame">
            <div className="inner">
              <video
                key={item.videoUrl}
                controls
                muted
                playsInline
                autoPlay
                loop
                src={item.videoUrl}
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="ggfaq">
      <div className="hdr">
        <h2>
          Your questions, <span>answered</span>
        </h2>
      </div>

      <div className="tag">
        <span className="chip">Frequently Asked</span>
      </div>

      <div className="items">
        {faqs.map((faq, i) => (
          <div key={i} className={`item${openIndex === i ? " open" : ""}`}>
            <button
              className="btn"
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <div className="left">
                <div className="iconwrap">
                  <svg
                    className="icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="q">{faq.question}</h3>
              </div>
            </button>

            <div className="answrap">
              <div className="ans">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

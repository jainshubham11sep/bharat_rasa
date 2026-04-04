"use client";

import { useState } from "react";
import { services } from "@/data/services";
import ContactModal from "@/components/ui/ContactModal";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="gg-sv-wrap">
        <div className="gg-sv-inner">
          <div className="gg-sv-badge">Our Services</div>

          <div className="gg-sv-grid">
            {services.map((service) => (
              <div key={service.title} className="gg-sv-card">
                <div className="gg-sv-col">
                  <h3>{service.title}</h3>
                  <p className="gg-sv-desc">{service.description}</p>

                  <div className="gg-sv-feat">
                    {service.features.map((feat) => (
                      <div key={feat} className="gg-sv-row">
                        <div className="gg-sv-icon">
                          <CheckIcon />
                        </div>
                        <span className="gg-sv-text">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="gg-sv-btn"
                    onClick={() => setModalOpen(true)}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

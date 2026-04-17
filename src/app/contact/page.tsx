"use client";

import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <main style={{ background: "#06060f", minHeight: "100vh", color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Hero strip */}
      <section style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #06060f 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "5rem 1.25rem 3rem",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={{
            display: "block", fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#e0a695", marginBottom: "0.75rem",
          }}>
            Let&apos;s Talk Growth
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
            Book a Free Strategy Call
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.75rem", fontSize: "1rem", maxWidth: 540 }}>
            Fill in the form and we&apos;ll take you straight to our calendar to pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Main layout */}
      <div className="contact-page-layout">

        {/* Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Call Us */}
          <div style={{
            background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e0a695", marginBottom: "1rem" }}>
              Call Us
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:+919983732955" style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "#fff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 17z"/>
                </svg>
                +91 99837 32955
              </a>
              <a href="tel:+918233155275" style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "#fff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 17z"/>
                </svg>
                +91 82331 55275
              </a>
            </div>
          </div>

          {/* Address */}
          <div style={{
            background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e0a695", marginBottom: "1rem" }}>
              Our Office
            </div>
            <div style={{ display: "flex", gap: "0.65rem" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                5th Floor, RTech Capital Highstreet,<br />
                Mahal Rd, Jagatpura, Jaipur,<br />
                Shri Kishanpura, Rajasthan 302017
              </p>
            </div>
          </div>

          {/* Email & WhatsApp */}
          <div style={{
            background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e0a695", marginBottom: "1rem" }}>
              Email &amp; WhatsApp
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="mailto:hello@bharatinnovations.in" style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.88rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                hello@bharatinnovations.in
              </a>
              <a href="https://wa.me/919983732955" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "0.88rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#e0a695">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div style={{
            background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "1.5rem",
          }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e0a695", marginBottom: "1rem" }}>
              Follow Us
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              <a href="https://www.instagram.com/bharatinnovations.agency?igsh=NW10ZTZuNzBuZnBs" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(224,166,149,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#e0a695"/>
                  </svg>
                </span>
                <span>
                  <span style={{ display: "block", color: "#e0a695", fontWeight: 600, fontSize: "0.85rem" }}>@bharatinnovations.agency</span>
                  <span style={{ display: "block", fontSize: "0.73rem", color: "rgba(255,255,255,0.4)" }}>Bharat Innovations</span>
                </span>
              </a>

              <a href="https://www.instagram.com/rasaframework?igsh=Z2MzemRlMDh4Yjh3" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(224,166,149,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#e0a695"/>
                  </svg>
                </span>
                <span>
                  <span style={{ display: "block", color: "#e0a695", fontWeight: 600, fontSize: "0.85rem" }}>@rasaframework</span>
                  <span style={{ display: "block", fontSize: "0.73rem", color: "rgba(255,255,255,0.4)" }}>RASA Framework</span>
                </span>
              </a>

              <a href="https://www.instagram.com/abhimanyu2.0?igsh=YnN4ZzBuZDF6ejE2&utm_source=qr" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(224,166,149,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e0a695" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#e0a695"/>
                  </svg>
                </span>
                <span>
                  <span style={{ display: "block", color: "#e0a695", fontWeight: 600, fontSize: "0.85rem" }}>@abhimanyu2.0</span>
                  <span style={{ display: "block", fontSize: "0.73rem", color: "rgba(255,255,255,0.4)" }}>Founder</span>
                </span>
              </a>

              <a href="https://www.linkedin.com/company/bharat-innovaitions/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(224,166,149,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#e0a695">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </span>
                <span>
                  <span style={{ display: "block", color: "#e0a695", fontWeight: 600, fontSize: "0.85rem" }}>Bharat Innovations</span>
                  <span style={{ display: "block", fontSize: "0.73rem", color: "rgba(255,255,255,0.4)" }}>LinkedIn</span>
                </span>
              </a>

            </div>
          </div>

        </aside>
      </div>

      <style>{`
        .contact-page-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.25rem 5rem;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-page-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

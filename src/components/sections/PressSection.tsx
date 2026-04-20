"use client";

import { useRef, useState } from "react";

const HEADLINE = "How 26-Year-Old Abhimanyu Nirban Scaled India's First AI Marketing Agency Worldwide";

const pressLogos = [
  { name: "Times of India",      domain: "timesofindia.indiatimes.com",  href: "https://timesofindia.indiatimes.com",                                                                                            color: "#d63b2f" },
  { name: "The Wire",            domain: "thewire.in",                   href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",               color: "#1a1a1a" },
  { name: "The Week",            domain: "theweek.in",                   href: "https://www.theweek.in/wire-updates/business/2025/09/12/dcm19-abhimanyu-nirban.html",                                          color: "#c8102e" },
  { name: "ANI",                 domain: "aninews.in",                   href: "https://www.aninews.in",                                                                                                         color: "#003580" },
  { name: "The Tribune",         domain: "tribuneindia.com",             href: "https://www.tribuneindia.com/news/business/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide/", color: "#002868" },
  { name: "Jaipur Times",        domain: "jaipurtimes.org",              href: "https://en.jaipurtimes.org/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",                 color: "#e63312" },
  { name: "PTI",                 domain: "ptinews.com",                  href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",               color: "#b22222" },
  { name: "The CEO Magazine",    domain: "theceomag.com",                href: "https://www.theceomag.com",                                                                                                      color: "#1a1a2e" },
  { name: "Devdiscourse",        domain: "devdiscourse.com",             href: "https://www.devdiscourse.com/article/technology/3625184-ai-revolution-bharat-innovations-global-branding-breakthrough",         color: "#0056b3" },
  { name: "My Startup News",     domain: "mystartupnews.in",             href: "https://mystartupnews.in",                                                                                                       color: "#2d6a4f" },
  { name: "MSN",                 domain: "msn.com",                      href: "https://www.msn.com/en-in/lifestyle/smart-living/how-26-year-old-abhimanyu-nirban-scaled-india-s-first-ai-marketing-agency-worldwide/ar-AA1Mp1W8", color: "#0078d4" },
];

const articles = [
  {
    pub:    "The Week",
    date:   "Sep 12, 2025",
    image:  "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "Abhimanyu's vision is bold and unapologetic. AI is not just the future of marketing — it is the present. Creativity should be guided by data, measured not in vanity metrics but in profitability and growth.",
    href:   "https://www.theweek.in/wire-updates/business/2025/09/12/dcm19-abhimanyu-nirban.html",
    accent: "#c8102e",
    domain: "theweek.in",
  },
  {
    pub:    "The Wire",
    date:   "Sep 12, 2025",
    image:  "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "Bharat Innovations manages over ₹40 lakhs in monthly ad spends, delivers ROAS up to 15x, and partners with 70+ e-commerce brands across 4 countries, including 42 jewellery brands alone.",
    href:   "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#444",
    domain: "thewire.in",
  },
  {
    pub:    "The Tribune",
    date:   "Sep 12, 2025",
    image:  "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "At just 26, Abhimanyu Nirban has built one of India's most talked-about startups. Bharat Innovations manages ₹40L+ in monthly ad spends and ROAS up to 15x across 70+ brands in 4 countries.",
    href:   "https://www.tribuneindia.com/news/business/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide/",
    accent: "#002868",
    domain: "tribuneindia.com",
  },
  {
    pub:    "Jaipur Times",
    date:   "Sep 12, 2025",
    image:  "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "In 2024, Abhimanyu introduced the RASA Framework — after testing 100+ marketing frameworks, he crafted a system that consistently delivers a minimum 6x ROAS.",
    href:   "https://en.jaipurtimes.org/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#e63312",
    domain: "jaipurtimes.org",
  },
  {
    pub:    "Press Trust of India",
    date:   "Sep 12, 2025",
    image:  "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "Now, Bharat Innovations is aggressively expanding internationally, aiming to establish itself as a world leader in AI-powered marketing and PR.",
    href:   "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#b22222",
    domain: "ptinews.com",
  },
  {
    pub:    "Devdiscourse",
    date:   "Sep 12, 2025",
    image:  "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/aiimagegallery/12_09_2025_07_01_28_6216048.png?width=920",
    excerpt: "AI Revolution: Bharat Innovations' Global Branding Breakthrough. How one Indian agency redefined what's possible with AI-powered D2C marketing at scale.",
    href:   "https://www.devdiscourse.com/article/technology/3625184-ai-revolution-bharat-innovations-global-branding-breakthrough",
    accent: "#0056b3",
    domain: "devdiscourse.com",
  },
  {
    pub:    "MSN",
    date:   "Sep 12, 2025",
    image:  "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "How 26-year-old Abhimanyu Nirban built Bharat Innovations from a small room with his father's old laptop into India's first AI marketing agency with a global footprint.",
    href:   "https://www.msn.com/en-in/lifestyle/smart-living/how-26-year-old-abhimanyu-nirban-scaled-india-s-first-ai-marketing-agency-worldwide/ar-AA1Mp1W8",
    accent: "#0078d4",
    domain: "msn.com",
  },
];

const doubledLogos = [...pressLogos, ...pressLogos];

function FaviconLogo({ domain, name, accent }: { domain: string; name: string; accent: string }) {
  const [imgErr, setImgErr] = useState(false);
  if (imgErr) {
    return (
      <span style={{
        fontSize: name.length > 10 ? "0.85rem" : "1rem",
        fontWeight: 800,
        color: "rgba(255,255,255,0.55)",
        whiteSpace: "nowrap",
      }}>{name}</span>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
        alt={name}
        width={20}
        height={20}
        onError={() => setImgErr(true)}
        style={{ borderRadius: 4, flexShrink: 0 }}
      />
      <span style={{
        fontSize: name.length > 10 ? "0.85rem" : "1rem",
        fontWeight: 800,
        color: "rgba(255,255,255,0.55)",
        whiteSpace: "nowrap",
      }}>{name}</span>
    </div>
  );
}

export default function PressSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const onMouseDown = (e: React.MouseEvent) => { setDragStart(e.pageX); setScrollLeft(scrollRef.current?.scrollLeft ?? 0); };
  const onMouseMove = (e: React.MouseEvent) => { if (dragStart === null || !scrollRef.current) return; scrollRef.current.scrollLeft = scrollLeft - (e.pageX - dragStart); };
  const onMouseUp = () => setDragStart(null);

  return (
    <section className="press-section" style={{
      width: "100%",
      background: "#05050d",
      color: "#fff",
      fontFamily: "Inter, system-ui, sans-serif",
      padding: "4.5rem 0 5rem",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem", textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(124,123,255,0.9)", marginBottom: "0.5rem" }}>
          As Seen In
        </div>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, margin: 0 }}>
          Featured in leading publications
        </h2>
      </div>

      {/* ── Scrolling logo ticker ── */}
      <div style={{
        position: "relative", overflow: "hidden", marginBottom: "3.5rem",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}>
        <div style={{ display: "flex", width: "max-content", animation: "press-ticker 32s linear infinite" }}>
          {doubledLogos.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "0 2rem", borderRight: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none", flexShrink: 0, height: 64,
              }}
            >
              <FaviconLogo domain={p.domain} name={p.name} accent={p.color} />
            </a>
          ))}
        </div>
      </div>

      {/* ── Article cards carousel ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 0.4rem" }}>Covered by 10+ national publications</p>
          <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 700, margin: 0, color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
            &ldquo;{HEADLINE}&rdquo;
          </h3>
        </div>

        {/* Draggable horizontal scroll */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem",
            cursor: dragStart !== null ? "grabbing" : "grab",
            userSelect: "none", scrollbarWidth: "none",
          }}
        >
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", flexDirection: "column", flexShrink: 0, width: 300,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "#fff",
              }}
            >
              {/* Article image */}
              <div style={{ width: "100%", height: 160, overflow: "hidden", background: "#111", position: "relative", flexShrink: 0 }}>
                {!imgErrors[i] ? (
                  <img
                    src={a.image}
                    alt={a.pub}
                    onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                    background: `linear-gradient(135deg, ${a.accent}22, #0a0a14)`,
                  }}>
                    <span style={{ fontSize: "2rem", fontWeight: 900, color: a.accent, opacity: 0.4 }}>{a.pub[0]}</span>
                  </div>
                )}
                {/* Publication badge over image */}
                <div style={{
                  position: "absolute", top: 10, left: 10,
                  display: "flex", alignItems: "center", gap: "0.35rem",
                  background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)",
                  borderRadius: 6, padding: "0.3rem 0.6rem",
                }}>
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=16`}
                    alt={a.pub}
                    width={14} height={14}
                    style={{ borderRadius: 2 }}
                  />
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff" }}>{a.pub}</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1rem 1.1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                  {a.date} · PTI
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                  {HEADLINE}
                </div>
                <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {a.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "0.25rem" }}>
                  <span style={{ fontSize: "0.74rem", fontWeight: 700, color: a.accent === "#444" ? "#7c7bff" : a.accent }}>Read article</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={a.accent === "#444" ? "#7c7bff" : a.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", textAlign: "center", marginTop: "0.4rem" }}>
          Drag or swipe to see more
        </p>
      </div>

      <style>{`
        @keyframes press-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

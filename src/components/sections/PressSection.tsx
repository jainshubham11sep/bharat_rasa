"use client";

import { useRef, useState } from "react";

const HEADLINE = "How 26-Year-Old Abhimanyu Nirban Scaled India's First AI Marketing Agency Worldwide";

const pressLogos = [
  { name: "Times of India",   domain: "timesofindia.indiatimes.com",  href: "https://timesofindia.indiatimes.com" },
  { name: "The Wire",         domain: "thewire.in",                   href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide" },
  { name: "The Week",         domain: "theweek.in",                   href: "https://www.theweek.in/wire-updates/business/2025/09/12/dcm19-abhimanyu-nirban.html" },
  { name: "ANI",              domain: "aninews.in",                   href: "https://www.aninews.in" },
  { name: "The Tribune",      domain: "tribuneindia.com",             href: "https://www.tribuneindia.com/news/business/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide/" },
  { name: "Jaipur Times",     domain: "jaipurtimes.org",              href: "https://en.jaipurtimes.org/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide" },
  { name: "PTI",              domain: "ptinews.com",                  href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide" },
  { name: "The CEO Magazine", domain: "theceomag.com",                href: "https://www.theceomag.com" },
  { name: "Devdiscourse",     domain: "devdiscourse.com",             href: "https://www.devdiscourse.com/article/technology/3625184-ai-revolution-bharat-innovations-global-branding-breakthrough" },
  { name: "My Startup News",  domain: "mystartupnews.in",             href: "https://mystartupnews.in" },
  { name: "MSN",              domain: "msn.com",                      href: "https://www.msn.com/en-in/lifestyle/smart-living/how-26-year-old-abhimanyu-nirban-scaled-india-s-first-ai-marketing-agency-worldwide/ar-AA1Mp1W8" },
];

const articles = [
  {
    pub: "The Week", date: "Sep 12, 2025", domain: "theweek.in",
    image: "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "Abhimanyu's vision is bold and unapologetic. AI is not just the future of marketing — it is the present. Creativity should be guided by data, measured not in vanity metrics but in profitability and growth.",
    href: "https://www.theweek.in/wire-updates/business/2025/09/12/dcm19-abhimanyu-nirban.html",
    accent: "#c8102e",
  },
  {
    pub: "The Wire", date: "Sep 12, 2025", domain: "thewire.in",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "Bharat Innovations manages over ₹40 lakhs in monthly ad spends, delivers ROAS up to 15x, and partners with 70+ e-commerce brands across 4 countries, including 42 jewellery brands alone.",
    href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#555",
  },
  {
    pub: "The Tribune", date: "Sep 12, 2025", domain: "tribuneindia.com",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "At just 26, Abhimanyu Nirban has built one of India's most talked-about startups. Bharat Innovations manages ₹40L+ in monthly ad spends and ROAS up to 15x across 70+ brands in 4 countries.",
    href: "https://www.tribuneindia.com/news/business/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide/",
    accent: "#002868",
  },
  {
    pub: "Jaipur Times", date: "Sep 12, 2025", domain: "jaipurtimes.org",
    image: "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "In 2024, Abhimanyu introduced the RASA Framework — after testing 100+ marketing frameworks, he crafted a system that consistently delivers a minimum 6x ROAS.",
    href: "https://en.jaipurtimes.org/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#e63312",
  },
  {
    pub: "Press Trust of India", date: "Sep 12, 2025", domain: "ptinews.com",
    image: "http://img.theweek.in/content/dam/week/wire-updates/pti-preview-theweek.jpg",
    excerpt: "Now, Bharat Innovations is aggressively expanding internationally, aiming to establish itself as a world leader in AI-powered marketing and PR.",
    href: "https://thewire.in/ptiprnews/how-26-year-old-abhimanyu-nirban-scaled-indias-first-ai-marketing-agency-worldwide",
    accent: "#b22222",
  },
  {
    pub: "Devdiscourse", date: "Sep 12, 2025", domain: "devdiscourse.com",
    image: "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/aiimagegallery/12_09_2025_07_01_28_6216048.png?width=920",
    excerpt: "AI Revolution: Bharat Innovations' Global Branding Breakthrough. How one Indian agency redefined what's possible with AI-powered D2C marketing at scale.",
    href: "https://www.devdiscourse.com/article/technology/3625184-ai-revolution-bharat-innovations-global-branding-breakthrough",
    accent: "#0056b3",
  },
  {
    pub: "MSN", date: "Sep 12, 2025", domain: "msn.com",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWFlNzhmMGIwLThmYTYtMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc=",
    excerpt: "How 26-year-old Abhimanyu Nirban built Bharat Innovations from a small room with his father's old laptop into India's first AI marketing agency with a global footprint.",
    href: "https://www.msn.com/en-in/lifestyle/smart-living/how-26-year-old-abhimanyu-nirban-scaled-india-s-first-ai-marketing-agency-worldwide/ar-AA1Mp1W8",
    accent: "#0078d4",
  },
];

const doubledLogos = [...pressLogos, ...pressLogos];

function FaviconLogo({ domain, name }: { domain: string; name: string }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div className="ps-logo-item">
      {!imgErr && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
          alt={name}
          width={20}
          height={20}
          onError={() => setImgErr(true)}
          className="ps-favicon"
        />
      )}
      <span className="ps-logo-name">{name}</span>
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
    <section className="ps-section press-section">
      {/* Header */}
      <div className="ps-header">
        <div className="ps-eyebrow">As Seen In</div>
        <h2 className="ps-title">Featured in leading publications</h2>
      </div>

      {/* Scrolling logo ticker */}
      <div className="ps-ticker-wrap">
        <div className="ps-ticker">
          {doubledLogos.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className="ps-ticker-item">
              <FaviconLogo domain={p.domain} name={p.name} />
            </a>
          ))}
        </div>
      </div>

      {/* Article cards */}
      <div className="ps-content">
        <div className="ps-subheader">
          <p className="ps-count-label">Covered by 10+ national publications</p>
          <h3 className="ps-headline">&ldquo;{HEADLINE}&rdquo;</h3>
        </div>

        <div
          ref={scrollRef}
          className={`ps-cards${dragStart !== null ? " grabbing" : ""}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {articles.map((a, i) => (
            <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" className="ps-card">
              {/* Image */}
              <div className="ps-card-img">
                {!imgErrors[i] ? (
                  <img
                    src={a.image}
                    alt={a.pub}
                    onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                    className="ps-img"
                  />
                ) : (
                  <div className="ps-img-fallback">
                    <span className="ps-img-letter">{a.pub[0]}</span>
                  </div>
                )}
                {/* Publication badge */}
                <div className="ps-badge">
                  <img src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=16`} alt={a.pub} width={14} height={14} style={{ borderRadius: 2 }} />
                  <span className="ps-badge-name">{a.pub}</span>
                </div>
              </div>

              {/* Body */}
              <div className="ps-card-body">
                <div className="ps-card-date">{a.date} · PTI</div>
                <div className="ps-card-title">{HEADLINE}</div>
                <p className="ps-card-excerpt">{a.excerpt}</p>
                <div className="ps-read-more">
                  <span className="ps-read-link">Read article</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="ps-drag-hint">Drag or swipe to see more</p>
      </div>

      <style>{`
        .ps-section {
          width: 100%;
          background: var(--c-bg-alt);
          color: var(--c-text);
          font-family: Inter, system-ui, sans-serif;
          padding: 4.5rem 0 5rem;
          overflow: hidden;
        }

        /* Header */
        .ps-header {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .ps-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #e0a695;
          margin-bottom: 0.5rem;
        }
        .ps-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          margin: 0;
          color: var(--c-text);
        }

        /* Ticker */
        .ps-ticker-wrap {
          position: relative;
          overflow: hidden;
          margin-bottom: 3.5rem;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .ps-ticker {
          display: flex;
          width: max-content;
          animation: press-ticker 32s linear infinite;
        }
        .ps-ticker-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          border-right: 1px solid var(--c-border);
          text-decoration: none;
          flex-shrink: 0;
          height: 64px;
        }
        .ps-logo-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .ps-favicon { border-radius: 4px; flex-shrink: 0; }
        .ps-logo-name {
          font-weight: 800;
          white-space: nowrap;
          color: var(--c-text-2);
          font-size: 0.9rem;
        }

        /* Content area */
        .ps-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        .ps-subheader { margin-bottom: 1.25rem; }
        .ps-count-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-text-3);
          margin: 0 0 0.4rem;
        }
        .ps-headline {
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 700;
          margin: 0;
          color: var(--c-text-2);
          font-style: italic;
          line-height: 1.5;
        }

        /* Cards */
        .ps-cards {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          cursor: grab;
          user-select: none;
          scrollbar-width: none;
        }
        .ps-cards::-webkit-scrollbar { display: none; }
        .ps-cards.grabbing { cursor: grabbing; }

        .ps-card {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          width: 300px;
          background: var(--c-bg-card-solid);
          border: 1px solid var(--c-border);
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          color: var(--c-text);
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .ps-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px var(--c-shadow);
        }

        /* Card image */
        .ps-card-img {
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: var(--c-bg-alt);
          position: relative;
          flex-shrink: 0;
        }
        .ps-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ps-img-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--c-bg-alt);
        }
        .ps-img-letter { font-size: 2rem; font-weight: 900; color: var(--c-text-3); }

        /* Publication badge over image */
        .ps-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(6px);
          border-radius: 6px;
          padding: 0.3rem 0.6rem;
        }
        .ps-badge-name { font-size: 0.7rem; font-weight: 700; color: #fff; }

        /* Card body */
        .ps-card-body {
          padding: 1rem 1.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ps-card-date {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c-text-3);
        }
        .ps-card-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--c-text);
          line-height: 1.4;
        }
        .ps-card-excerpt {
          font-size: 0.76rem;
          color: var(--c-text-2);
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .ps-read-more {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.25rem;
          color: #e0a695;
        }
        .ps-read-link { font-size: 0.74rem; font-weight: 700; }

        .ps-drag-hint {
          font-size: 0.7rem;
          color: var(--c-text-4);
          text-align: center;
          margin-top: 0.4rem;
        }

        @keyframes press-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

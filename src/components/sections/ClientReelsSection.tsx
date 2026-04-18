"use client";

import { useRef, useState, useEffect } from "react";

const reels = [
  {
    src: "/media/IMG_1164.MP4",
    caption: "Working with Bharat Innovations transformed our entire marketing approach — our sales doubled in 3 months!",
  },
  {
    src: "/media/IMG_1606.MP4",
    caption: "The team at Bharat Innovations really understands e-commerce. Our ROAS went from 1.8x to 4.5x in just 60 days.",
  },
  {
    src: "/media/IMG_2665.MP4",
    caption: "Finally found an agency that delivers on promises. Revenue up 3x and we're scaling fast!",
  },
];

function ReelCard({ src, caption }: { src: string; caption: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // React's `muted` prop doesn't reliably set the DOM property — do it imperatively on mount
  const setVideoRef = (el: HTMLVideoElement | null) => {
    (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.muted = true;
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.25 }  // lower threshold for tall 9:16 cards on small screens
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play().then(() => setPlaying(true)).catch(() => {}); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <div className="cr-card" ref={cardRef}>
      <video
        ref={setVideoRef}
        src={src}
        playsInline
        loop
        preload="auto"
        onClick={togglePlay}
        className="cr-video"
      />

      {/* Caption overlay */}
      <div className="cr-caption-wrap">
        <p className="cr-caption">&ldquo;{caption}&rdquo;</p>
      </div>

      {/* Play/pause overlay */}
      {!playing && (
        <button onClick={togglePlay} className="cr-play-btn" aria-label="Play">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
      )}

      {/* Mute toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
        className="cr-mute-btn"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        )}
      </button>
    </div>
  );
}

export default function ClientReelsSection() {
  return (
    <section className="cr-section">
      <div className="cr-inner">
        <div className="cr-header">
          <span className="cr-eyebrow">Testimonials</span>
          <h2 className="cr-title">What Clients Say About Us</h2>
          <p className="cr-sub">Real words from real brands we've helped grow.</p>
        </div>
        <div className="cr-grid">
          {reels.map((r, i) => (
            <ReelCard key={i} src={r.src} caption={r.caption} />
          ))}
        </div>
      </div>

      <style>{`
        .cr-section {
          width: 100%;
          padding: 2.5rem 1.25rem;
          background: linear-gradient(180deg, #0a0a14 0%, #000 100%);
          color: #fff;
          font-family: Inter, system-ui, sans-serif;
          box-sizing: border-box;
        }
        .cr-inner { max-width: 1100px; margin: 0 auto; }
        .cr-header { text-align: center; margin-bottom: 2rem; }
        .cr-eyebrow {
          display: block; font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(224,166,149,0.9); margin-bottom: 0.4rem;
        }
        .cr-title {
          font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 800; margin: 0 0 0.5rem;
        }
        .cr-sub { color: rgba(255,255,255,0.5); font-size: 0.9rem; margin: 0; }

        .cr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          align-items: start;
        }

        .cr-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
          aspect-ratio: 9/16;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,0,0,0.5);
        }

        .cr-video {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        .cr-caption-wrap {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 2.5rem 1rem 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
          pointer-events: none;
        }
        .cr-caption {
          font-size: 0.82rem; font-weight: 500;
          line-height: 1.5; color: #fff; margin: 0;
          display: -webkit-box; -webkit-line-clamp: 4;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .cr-play-btn {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.3); border: none; cursor: pointer;
        }
        .cr-play-btn svg { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6)); }

        .cr-mute-btn {
          position: absolute; top: 0.75rem; right: 0.75rem;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10; backdrop-filter: blur(4px);
          transition: background 0.15s;
        }
        .cr-mute-btn:hover { background: rgba(0,0,0,0.85); }

        @media (max-width: 768px) {
          .cr-grid {
            grid-template-columns: 1fr;
            max-width: 340px;
            margin: 0 auto;
          }
          .cr-section { padding: 2rem 1rem; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cr-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

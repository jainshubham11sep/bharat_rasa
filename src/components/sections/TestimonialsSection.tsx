"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

function useThumbnails() {
  const [thumbs, setThumbs] = useState<string[]>([]);

  useEffect(() => {
    const captured: string[] = new Array(testimonials.length).fill("");
    let done = 0;

    testimonials.forEach((t, i) => {
      const v = document.createElement("video");
      v.src = t.videoUrl;
      v.muted = true;
      v.preload = "auto";
      v.playsInline = true;
      v.addEventListener("loadedmetadata", () => {
        v.currentTime = Math.max(1, (v.duration || 5) * 0.2);
      });
      v.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas");
        canvas.width = v.videoWidth || 320;
        canvas.height = v.videoHeight || 568;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
          captured[i] = canvas.toDataURL("image/jpeg", 0.85);
        }
        done++;
        if (done === testimonials.length) setThumbs([...captured]);
        v.src = "";
      });
      v.addEventListener("error", () => { done++; if (done === testimonials.length) setThumbs([...captured]); });
      v.load();
    });
  }, []);

  return thumbs;
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const thumbs = useThumbnails();
  const item = testimonials[current];

  // Autoplay when section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.src = testimonials[current].videoUrl;
    v.loop = false;
    v.muted = muted;
    v.load();
    if (sectionVisible) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    const onEnded = () => {
      setCurrent(c => (c + 1) % testimonials.length);
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [current, muted]);

  // Sync muted state to video element
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = muted;
  }, [muted]);

  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play().then(() => setPlaying(true)).catch(() => {}); }
    else { v.pause(); setPlaying(false); }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted(m => !m);
  };

  const selectVideo = (i: number) => {
    setPlaying(false);
    setMuted(false);
    setCurrent(i);
  };

  const PlaylistItem = ({ i }: { i: number }) => {
    const t = testimonials[i];
    return (
      <button
        onClick={() => selectVideo(i)}
        className={`yt2-item${i === current ? " yt2-item-active" : ""}`}
      >
        {/* Thumbnail */}
        <div className="yt2-thumb">
          {thumbs[i]
            ? <img src={thumbs[i]} alt={t.name} className="yt2-thumb-img" />
            : <div className="yt2-thumb-placeholder"><svg width="14" height="14" viewBox="0 0 24 24" className="yt2-thumb-placeholder-icon"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
          }
          {i === current && playing && (
            <div className="yt2-bars">
              {[10, 16, 8].map((h, idx) => (
                <span key={idx} style={{ height: h, animationDelay: `${idx * 0.2}s` }} className="yt2-bar" />
              ))}
            </div>
          )}
          {i === current && !playing && (
            <div className="yt2-thumb-active-overlay">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          )}
        </div>
        {/* Info */}
        <div className="yt2-item-info">
          <div className="yt2-item-name">{t.name}</div>
          <div className="yt2-item-role">{t.role}</div>
          <div className="yt2-item-stats">{t.stats}</div>
        </div>
      </button>
    );
  };

  return (
    <section className="yt2-section" ref={sectionRef}>
      <div className="yt2-inner">

        {/* Header */}
        <div className="yt2-header">
          <span className="yt2-eyebrow">Client Results</span>
          <h2 className="yt2-title">Real brands. Real results.</h2>
        </div>

        {/* Layout */}
        <div className="yt2-layout">

          {/* Player col */}
          <div className="yt2-player-col">
            <div className="yt2-player-wrap">
              <video
                ref={videoRef}
                src={item.videoUrl}
                preload="auto"
                playsInline
                muted
                onClick={handlePlayPause}
                className="yt2-video"
              />

              {!playing && (
                <button onClick={handlePlayPause} aria-label="Play" className="yt2-play-btn">
                  <div className="yt2-play-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </button>
              )}

              {/* Speaker / Mute toggle */}
              <button onClick={handleMuteToggle} aria-label={muted ? "Unmute" : "Mute"} className="yt2-mute-btn">
                {muted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                    <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                    <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                )}
              </button>

              <div className="yt2-caption">
                <span className="yt2-caption-text">{item.quote}</span>
              </div>
            </div>

            {/* Meta */}
            <div className="yt2-meta">
              <div>
                <div className="yt2-meta-name">{item.name}</div>
                <div className="yt2-meta-role">{item.role}</div>
              </div>
              <Link href="/case-studies" className="yt2-chip">{item.stats}</Link>
            </div>
          </div>

          {/* Playlist col */}
          <div className="yt2-playlist-col">
            <div className="yt2-playlist-header">
              <span className="yt2-playlist-label">Client Stories</span>
              <span className="yt2-playlist-count">{testimonials.length} videos</span>
            </div>
            <div className="yt2-playlist-scroll">
              {testimonials.map((_, i) => <PlaylistItem key={i} i={i} />)}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .yt2-section {
          width: 100%;
          padding: 2.5rem 1.25rem;
          background: linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg-alt) 100%);
          color: var(--c-text);
          font-family: Inter, system-ui, sans-serif;
          box-sizing: border-box;
        }
        .yt2-inner { max-width: 1280px; margin: 0 auto; }
        .yt2-header { margin-bottom: 1.5rem; }
        .yt2-eyebrow {
          display: block; font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(224,166,149,0.9); margin-bottom: 0.4rem;
        }
        .yt2-title { font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 800; margin: 0; color: var(--c-text); }

        /* ── Layout ── */
        .yt2-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 1.25rem;
          align-items: start;
        }

        /* ── Player ── */
        .yt2-player-col { display: flex; flex-direction: column; gap: 0.75rem; }
        .yt2-player-wrap {
          position: relative; width: 100%; aspect-ratio: 16/9;
          background: var(--c-bg-card-solid); border-radius: 12px; overflow: hidden;
          border: 1px solid var(--c-border);
        }
        .yt2-video {
          width: 100%; height: 100%; object-fit: cover;
          display: block; cursor: pointer;
        }
        .yt2-play-btn {
          position: absolute; inset: 0; display: flex;
          align-items: center; justify-content: center;
          background: var(--c-bg-overlay); border: none; cursor: pointer;
        }
        .yt2-play-circle {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
        }
        .yt2-mute-btn {
          position: absolute; bottom: 2.8rem; right: 0.75rem;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 10; backdrop-filter: blur(4px);
          transition: background 0.15s;
        }
        .yt2-mute-btn:hover { background: rgba(0,0,0,0.8); }

        .yt2-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 0.55rem 0.9rem; background: var(--c-bg-caption);
          pointer-events: none;
        }
        .yt2-caption-text {
          font-size: 0.8rem; font-weight: 500; color: var(--c-text);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;
        }
        .yt2-meta {
          display: flex; align-items: center;
          justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;
        }
        .yt2-meta-name { font-size: 0.95rem; font-weight: 700; color: var(--c-text); }
        .yt2-meta-role { font-size: 0.78rem; color: var(--c-text-3); margin-top: 2px; }
        .yt2-chip {
          display: inline-flex; align-items: center;
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(224,166,149,0.35); border-radius: 9999px;
          font-size: 0.74rem; font-weight: 700;
          color: rgba(224,166,149,0.95); background: rgba(224,166,149,0.12);
          text-decoration: none; white-space: nowrap;
        }

        /* ── Playlist ── */
        .yt2-playlist-col {
          display: flex; flex-direction: column;
          background: var(--c-bg-playlist); border-radius: 12px;
          overflow: hidden; border: 1px solid var(--c-border);
        }
        .yt2-playlist-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.75rem 1rem; border-bottom: 1px solid var(--c-border); flex-shrink: 0;
        }
        .yt2-playlist-label { font-size: 0.8rem; font-weight: 700; color: var(--c-text); }
        .yt2-playlist-count { font-size: 0.72rem; color: var(--c-text-3); }
        .yt2-playlist-scroll {
          overflow-y: auto; max-height: 420px;
        }
        .yt2-playlist-scroll::-webkit-scrollbar { width: 3px; }
        .yt2-playlist-scroll::-webkit-scrollbar-thumb { background: var(--c-border); border-radius: 2px; }

        /* ── Playlist item ── */
        .yt2-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
          width: 100%; padding: 0.6rem 0.85rem;
          background: none; border: none;
          border-bottom: 1px solid var(--c-border-sub);
          cursor: pointer; text-align: left; color: var(--c-text);
          transition: background 0.15s;
        }
        .yt2-item:hover { background: var(--c-bg-card); }
        .yt2-item-active { background: rgba(224,166,149,0.1) !important; }

        .yt2-thumb {
          position: relative; width: 76px; height: 50px;
          border-radius: 6px; overflow: hidden; background: var(--c-thumb-bg); flex-shrink: 0;
        }
        .yt2-thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .yt2-thumb-placeholder {
          width: 100%; height: 100%;
          background: var(--c-thumb-bg);
          display: flex; align-items: center; justify-content: center;
        }
        .yt2-thumb-placeholder-icon { fill: rgba(255,255,255,0.35); }
        .yt2-bars {
          position: absolute; inset: 0; background: rgba(0,0,0,0.45);
          display: flex; align-items: flex-end; justify-content: center; padding-bottom: 5px; gap: 3px;
        }
        .yt2-bar {
          display: block; width: 3px; background: #e0a695; border-radius: 2px;
          animation: ytbar2 0.8s ease-in-out infinite alternate;
        }
        .yt2-thumb-active-overlay {
          position: absolute; inset: 0; background: rgba(224,166,149,0.28);
          display: flex; align-items: center; justify-content: center;
        }
        .yt2-item-info { flex: 1; min-width: 0; }
        .yt2-item-name {
          font-size: 0.8rem; font-weight: 700; color: var(--c-text);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .yt2-item-role {
          font-size: 0.7rem; color: var(--c-text-3); margin-top: 2px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .yt2-item-stats {
          font-size: 0.68rem; color: rgba(224,166,149,0.9); font-weight: 600; margin-top: 3px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        @keyframes ytbar2 {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .yt2-section { padding: 2.5rem 1rem; }
          .yt2-layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .yt2-play-circle { width: 48px; height: 48px; }
          .yt2-playlist-col { border-radius: 10px; }
          .yt2-playlist-scroll { max-height: 280px; }
          .yt2-thumb { width: 68px; height: 44px; }
        }
      `}</style>
    </section>
  );
}

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbs = useThumbnails();
  const item = testimonials[current];

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.src = testimonials[current].videoUrl;
    v.loop = false;
    v.load();
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));

    const onEnded = () => {
      setCurrent(c => (c + 1) % testimonials.length);
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [current]);

  const handlePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play().then(() => setPlaying(true)).catch(() => {}); }
    else { v.pause(); setPlaying(false); }
  };

  const selectVideo = (i: number) => { setPlaying(false); setCurrent(i); };

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
            : <div className="yt2-thumb-placeholder"><svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
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
    <section className="yt2-section">
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
          padding: 4rem 1.25rem;
          background: linear-gradient(180deg, #000 0%, #0a0a14 100%);
          color: #fff;
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
        .yt2-title { font-size: clamp(1.4rem, 3vw, 2.2rem); font-weight: 800; margin: 0; }

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
          background: #000; border-radius: 12px; overflow: hidden;
        }
        .yt2-video {
          width: 100%; height: 100%; object-fit: cover;
          display: block; cursor: pointer;
        }
        .yt2-play-btn {
          position: absolute; inset: 0; display: flex;
          align-items: center; justify-content: center;
          background: rgba(0,0,0,0.35); border: none; cursor: pointer;
        }
        .yt2-play-circle {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
        }
        .yt2-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 0.55rem 0.9rem; background: rgba(0,0,0,0.78);
          pointer-events: none;
        }
        .yt2-caption-text {
          font-size: 0.8rem; font-weight: 500; color: #fff;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;
        }
        .yt2-meta {
          display: flex; align-items: center;
          justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;
        }
        .yt2-meta-name { font-size: 0.95rem; font-weight: 700; }
        .yt2-meta-role { font-size: 0.78rem; color: rgba(255,255,255,0.45); margin-top: 2px; }
        .yt2-chip {
          display: inline-flex; align-items: center;
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(224,166,149,0.35); border-radius: 9999px;
          font-size: 0.74rem; font-weight: 700;
          color: rgba(240,200,190,0.95); background: rgba(224,166,149,0.12);
          text-decoration: none; white-space: nowrap;
        }

        /* ── Playlist ── */
        .yt2-playlist-col {
          display: flex; flex-direction: column;
          background: #0f0f0f; border-radius: 12px;
          overflow: hidden; border: 1px solid rgba(255,255,255,0.07);
        }
        .yt2-playlist-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;
        }
        .yt2-playlist-label { font-size: 0.8rem; font-weight: 700; color: #fff; }
        .yt2-playlist-count { font-size: 0.72rem; color: rgba(255,255,255,0.4); }
        .yt2-playlist-scroll {
          overflow-y: auto; max-height: 420px;
        }
        .yt2-playlist-scroll::-webkit-scrollbar { width: 3px; }
        .yt2-playlist-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

        /* ── Playlist item ── */
        .yt2-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
          width: 100%; padding: 0.6rem 0.85rem;
          background: none; border: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer; text-align: left; color: #fff;
          transition: background 0.15s;
        }
        .yt2-item:hover { background: rgba(255,255,255,0.04); }
        .yt2-item-active { background: rgba(224,166,149,0.1) !important; }

        .yt2-thumb {
          position: relative; width: 76px; height: 50px;
          border-radius: 6px; overflow: hidden; background: #1a1a2a; flex-shrink: 0;
        }
        .yt2-thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .yt2-thumb-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          display: flex; align-items: center; justify-content: center;
        }
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
          font-size: 0.8rem; font-weight: 700; color: #fff;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .yt2-item-role {
          font-size: 0.7rem; color: rgba(255,255,255,0.4); margin-top: 2px;
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
          .yt2-playlist-col {
            border-radius: 10px;
          }
          .yt2-playlist-scroll {
            max-height: 280px;
          }
          .yt2-thumb { width: 68px; height: 44px; }
        }
      `}</style>
    </section>
  );
}

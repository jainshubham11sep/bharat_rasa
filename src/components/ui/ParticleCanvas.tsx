"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

const FOV = 350;
const DEPTH = 700;
const MAX_DIST = 160;
const SPEED = 0.18;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;
    const mouse = { x: 0, y: 0 };
    let particles: Particle[] = [];

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 55 : 120;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: (Math.random() - 0.5) * W * 2.5,
        y: (Math.random() - 0.5) * H * 2.5,
        z: Math.random() * DEPTH,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        vz: (Math.random() - 0.5) * 0.4,
      }));
    };

    const project = (x: number, y: number, z: number) => {
      const scale = FOV / (FOV + z);
      const mx = (mouse.x / W - 0.5) * 60;
      const my = (mouse.y / H - 0.5) * 40;
      return {
        sx: (x - mx * (z / DEPTH)) * scale + W / 2,
        sy: (y - my * (z / DEPTH)) * scale + H / 2,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const proj = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.z > DEPTH) p.z = 1;
        if (p.z < 1)     p.z = DEPTH;
        if (p.x >  W * 1.5) p.x = -W * 1.5;
        if (p.x < -W * 1.5) p.x =  W * 1.5;
        if (p.y >  H * 1.5) p.y = -H * 1.5;
        if (p.y < -H * 1.5) p.y =  H * 1.5;

        return project(p.x, p.y, p.z);
      });

      // connecting lines
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = proj[i].sx - proj[j].sx;
          const dy = proj[i].sy - proj[j].sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const t = 1 - dist / MAX_DIST;
            const depthFade = (proj[i].scale + proj[j].scale) / 2;
            ctx.beginPath();
            ctx.moveTo(proj[i].sx, proj[i].sy);
            ctx.lineTo(proj[j].sx, proj[j].sy);
            ctx.strokeStyle = `rgba(138,124,255,${(t * t * 0.45 * depthFade).toFixed(3)})`;
            ctx.lineWidth = t * 1.2;
            ctx.stroke();
          }
        }
      }

      // particles with glow
      proj.forEach((p) => {
        const r = Math.max(0.8, p.scale * 4);
        const alpha = 0.2 + p.scale * 0.75;

        const grad = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 4);
        grad.addColorStop(0,   `rgba(180,170,255,${(alpha * 0.65).toFixed(3)})`);
        grad.addColorStop(0.4, `rgba(124,123,255,${(alpha * 0.2).toFixed(3)})`);
        grad.addColorStop(1,   "rgba(100,100,255,0)");
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,208,255,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    const onResize = () => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    draw();

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

interface Electron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  lifetime: number;
  maxLifetime: number;
  pathLength: number;
  traveled: number;
}

export default function SiliconParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const maxParticles = isMobile ? 18 : 38;
    const particles: Electron[] = [];

    const colors = [
      "rgba(6, 182, 212, ",   // Electric Cyan
      "rgba(139, 92, 246, ",  // Primary Violet
      "rgba(16, 185, 129, ",  // Emerald Signal
    ];

    const createParticle = (): Electron => {
      const isHorizontal = Math.random() > 0.5;
      const speed = 0.5 + Math.random() * 0.9;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: isHorizontal ? (Math.random() > 0.5 ? speed : -speed) : 0,
        vy: !isHorizontal ? (Math.random() > 0.5 ? speed : -speed) : 0,
        size: 1 + Math.random() * 1.8,
        alpha: 0.1 + Math.random() * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        lifetime: 0,
        maxLifetime: 200 + Math.random() * 300,
        pathLength: 80 + Math.random() * 200,
        traveled: 0,
      };
    };

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.lifetime++;
        p.traveled += Math.abs(p.vx) + Math.abs(p.vy);
        p.x += p.vx;
        p.y += p.vy;

        // 90 or 45 degree turn at trace junctions
        if (p.traveled > p.pathLength) {
          p.traveled = 0;
          p.pathLength = 60 + Math.random() * 180;
          if (p.vx !== 0) {
            p.vy = Math.random() > 0.5 ? 0.7 : -0.7;
            p.vx = 0;
          } else {
            p.vx = Math.random() > 0.5 ? 0.7 : -0.7;
            p.vy = 0;
          }
        }

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Fade in and out
        const progress = p.lifetime / p.maxLifetime;
        let fade = 1;
        if (progress < 0.15) fade = progress / 0.15;
        else if (progress > 0.85) fade = (1 - progress) / 0.15;

        // Reset if lifetime expired
        if (p.lifetime >= p.maxLifetime) {
          particles[idx] = createParticle();
          return;
        }

        const currentAlpha = p.alpha * fade;

        // Draw electron trace packet with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance

        // Subtle trace trail line behind particle
        if (p.vx !== 0) {
          ctx.beginPath();
          ctx.moveTo(p.x - p.vx * 8, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else if (p.vy !== 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.vy * 8);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-75"
      style={{ willChange: "transform" }}
    />
  );
}
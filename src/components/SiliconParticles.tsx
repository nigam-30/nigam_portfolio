"use client";

import { useEffect, useRef, useState } from "react";

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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if mobile, touch, or prefers-reduced-motion
    if (
      typeof window === "undefined" ||
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const maxParticles = 24;
    const particles: Electron[] = [];

    const colors = [
      "rgba(6, 182, 212, ",   // Electric Cyan
      "rgba(139, 92, 246, ",  // Primary Violet
      "rgba(16, 185, 129, ",  // Emerald Signal
    ];

    const createParticle = (): Electron => {
      const isHorizontal = Math.random() > 0.5;
      const speed = 0.5 + Math.random() * 0.7;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: isHorizontal ? (Math.random() > 0.5 ? speed : -speed) : 0,
        vy: !isHorizontal ? (Math.random() > 0.5 ? speed : -speed) : 0,
        size: 1.2 + Math.random() * 1.5,
        alpha: 0.15 + Math.random() * 0.65,
        color: colors[Math.floor(Math.random() * colors.length)],
        lifetime: 0,
        maxLifetime: 220 + Math.random() * 260,
        pathLength: 80 + Math.random() * 180,
        traveled: 0,
      };
    };

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        if (window.innerWidth < 768) {
          setIsTouchDevice(true);
          return;
        }
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.lifetime++;
        p.traveled += Math.abs(p.vx) + Math.abs(p.vy);
        p.x += p.vx;
        p.y += p.vy;

        // 90 or 45 degree turn at trace junctions
        if (p.traveled > p.pathLength) {
          p.traveled = 0;
          p.pathLength = 60 + Math.random() * 160;
          if (p.vx !== 0) {
            p.vy = Math.random() > 0.5 ? 0.6 : -0.6;
            p.vx = 0;
          } else {
            p.vx = Math.random() > 0.5 ? 0.6 : -0.6;
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
          particles[i] = createParticle();
          continue;
        }

        const currentAlpha = p.alpha * fade;

        // Draw electron trace packet with 2-pass hardware accelerated glow (no expensive shadowBlur)
        // Outer halo glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha * 0.25})`;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();

        // Subtle trace trail line behind particle
        if (p.vx !== 0) {
          ctx.beginPath();
          ctx.moveTo(p.x - p.vx * 7, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else if (p.vy !== 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.vy * 7);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70"
    />
  );
}
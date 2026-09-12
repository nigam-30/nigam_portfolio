"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCircuitCardProps {
  children: React.ReactNode;
  className?: string;
  pinLabel?: string;
}

export default function TiltCircuitCard({
  children,
  className = "",
  pinLabel,
}: TiltCircuitCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        window.innerWidth < 768)
    ) {
      setIsTouchDevice(true);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isTouchDevice
          ? undefined
          : {
              rotateX,
              rotateY,
              transformStyle: isHovered ? "preserve-3d" : "flat",
            }
      }
      className={`relative rounded-xl p-[1px] transition-shadow duration-300 ${
        isHovered
          ? "shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.25)]"
          : "shadow-lg"
      } ${className}`}
    >
      {/* Animated Circuit Trace Border Beam */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.7) 0%, rgba(139,92,246,0.6) 50%, rgba(16,185,129,0.7) 100%)",
        }}
      />

      {/* Default Static Border */}
      <div
        className={`absolute inset-0 rounded-xl border border-[#8B5CF6]/25 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Inner Card Content */}
      <div
        style={!isTouchDevice && isHovered ? { transform: "translateZ(8px)" } : undefined}
        className="relative h-full w-full rounded-xl bg-[#070d22]/95 p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
      >
        {/* Hardware IC Pinout Accents */}
        <div className="absolute top-2 left-3 flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
          <span className="text-[10px] font-mono text-[#38BDF8] tracking-widest uppercase">
            {pinLabel || "IC_BLOCK"}
          </span>
        </div>

        <div className="absolute top-2 right-3 flex items-center gap-1 opacity-50 font-mono text-[9px] text-[#94A3B8]">
          <span>+3.3V</span>
          <span>•</span>
          <span>GND</span>
        </div>

        {/* Content */}
        <div className="pt-3">{children}</div>
      </div>
    </motion.div>
  );
}

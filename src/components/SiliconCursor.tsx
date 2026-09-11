"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function SiliconCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor lag effect
  const springX = useSpring(mouseX, { damping: 25, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 350 });

  const ringX = useSpring(mouseX, { damping: 18, stiffness: 180 });
  const ringY = useSpring(mouseY, { damping: 18, stiffness: 180 });

  useEffect(() => {
    // Disable on touch / mobile devices
    if (typeof window !== "undefined") {
      const touchCheck = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsTouchDevice(touchCheck);
      if (touchCheck) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer, .interactive-node");
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Trailing Outer Ring / Crosshair */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute w-8 h-8 flex items-center justify-center pointer-events-none"
      >
        {isHovered ? (
          // Chip Pin / Precision Reticle when hovering interactive elements
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
            <div className="absolute inset-2 rounded-full border border-[#8B5CF6]/50 animate-ping" />
          </div>
        ) : (
          // Default Silicon Particle Ring
          <div className="w-6 h-6 rounded-full border border-[#8B5CF6]/60 shadow-[0_0_10px_rgba(139,92,246,0.35)] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#06B6D4] opacity-75" />
          </div>
        )}
      </motion.div>

      {/* Core Glowing Dot */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovered ? 1.2 : 1,
          backgroundColor: isHovered ? "#06B6D4" : "#8B5CF6",
          boxShadow: isHovered
            ? "0 0 12px #06B6D4, 0 0 4px #06B6D4"
            : "0 0 10px #8B5CF6, 0 0 4px #8B5CF6",
        }}
        transition={{ duration: 0.1 }}
        className="absolute w-2 h-2 rounded-full pointer-events-none"
      />
    </div>
  );
}
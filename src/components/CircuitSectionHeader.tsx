"use client";

import { motion } from "framer-motion";

interface CircuitSectionHeaderProps {
  moduleNumber: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export default function CircuitSectionHeader({
  moduleNumber,
  title,
  subtitle,
  badge = "IC_ACTIVE",
}: CircuitSectionHeaderProps) {
  return (
    <div className="text-center relative space-y-3 mb-14">
      {/* Top Circuit Trace Line with Light Pulse */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#06B6D4]/50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-3 py-1 rounded-md bg-portfolio-substrate/90 border border-[#06B6D4]/30 text-[11px] font-mono text-[#38BDF8] tracking-widest uppercase shadow-[0_0_12px_rgba(6,182,212,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>{moduleNumber}</span>
          <span className="text-[#8B5CF6]">•</span>
          <span className="text-emerald-400">{badge}</span>
        </motion.div>
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#06B6D4]/50" />
      </div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-portfolio-text font-mono inline-block relative pb-2"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-portfolio-text to-purple-200">
          {title}
        </span>
        {/* Glowing Underline with PCB Pad Endpoints */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
        </div>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-portfolio-textSecondary text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

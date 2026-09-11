"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 90, damping: 15 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Power-On SVG Animated Circuit Traces across Hero */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 50 100 L 250 100 L 350 200 L 800 200 L 950 350 L 1400 350"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 1200 80 L 1000 80 L 900 180 L 400 180 L 300 280 L 50 280"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 2.8, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M 100 650 L 300 650 L 450 500 L 1100 500 L 1250 650 L 1500 650"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0.3] }}
          transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
        />
      </svg>

      {/* Wafer Micro-Grid Background Layer */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center text-center lg:text-left">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start"
          >
            {/* Telemetry Chip Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-portfolio-substrate/90 border border-portfolio-primary/40 text-portfolio-cyan text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-portfolio-emerald animate-ping" />
              <span className="text-[#a78bfa] font-bold">SYSTEM_SPEC</span>
              <span className="text-portfolio-textSecondary">•</span>
              <span className="text-cyan-300">VLSI & AI HARDWARE</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#8B5CF6] to-[#06B6D4]">
                Nigam Mehta
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="space-y-2.5 max-w-2xl">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-portfolio-text leading-snug font-mono">
                B.Tech Electronics Engineering — <span className="text-portfolio-cyan">VLSI Design & Technology</span>
              </p>
              <p className="text-base sm:text-lg text-portfolio-textSecondary font-normal leading-relaxed">
                Engineering chips at the intersection of hardware and AI — B.Tech VLSI Design student exploring how data and embedded intelligence shape next-gen semiconductor
              </p>
            </motion.div>

            {/* Hardware Micro-Specs Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-[11px]"
            >
              <span className="px-2.5 py-1 rounded bg-[#0b1122]/90 border border-[#8B5CF6]/30 text-purple-300">
                [ARCH: VLSI / ASIC]
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b1122]/90 border border-[#06B6D4]/30 text-cyan-300">
                [RTL: VERILOG & FSM]
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b1122]/90 border border-[#10B981]/30 text-emerald-300">
                [BUS: AMBA APB4]
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5 pt-4 w-full"
            >
              <a
                href="https://github.com/nigam-30"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio-substrate/80 border border-portfolio-primary/30 text-portfolio-text hover:text-portfolio-cyan hover:border-portfolio-cyan transition-all duration-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm font-mono"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4 text-[#8B5CF6]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio-substrate/80 border border-portfolio-primary/30 text-portfolio-text hover:text-portfolio-cyan hover:border-portfolio-cyan transition-all duration-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm font-mono"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-[#06B6D4]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:mehtanigam3024@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio-substrate/80 border border-portfolio-primary/30 text-portfolio-text hover:text-portfolio-cyan hover:border-portfolio-cyan transition-all duration-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm font-mono"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4 text-[#10B981]" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8B5CF6]/25 via-[#06B6D4]/20 to-[#10B981]/25 rounded-3xl blur-2xl opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />

            {/* Hardware Photo Bezel */}
            <div className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] rounded-2xl bg-portfolio-substrate/90 border border-portfolio-primary/30 hover:border-portfolio-cyan/60 shadow-[0_0_35px_rgba(0,0,0,0.8),0_0_20px_rgba(139,92,246,0.2)] backdrop-blur-xl overflow-hidden relative z-10 transition-all duration-300 group">
              {/* Screen Top Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0f20]/90 border-b border-portfolio-primary/20 text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[#38BDF8] ml-2 font-bold tracking-wider">ENGINEER_PROFILE</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Photo Area */}
              <div className="relative p-3.5 flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#06B6D4]/30 shadow-inner bg-[#070b16]">
                  <Image
                    src="/profile.jpg"
                    alt="Nigam Mehta"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Corner Reticle Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-portfolio-cyan pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-portfolio-cyan pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-portfolio-cyan pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-portfolio-cyan pointer-events-none" />
                </div>
              </div>

              {/* Screen Status Footer Bar */}
              <div className="px-4 py-2.5 bg-[#0a0f20]/90 border-t border-portfolio-primary/20 flex items-center justify-between text-[11px] font-mono text-portfolio-textSecondary">
                <span className="text-[#F8FAFC] font-semibold">NIGAM MEHTA</span>
                <span className="text-cyan-400">SAKEC // MUMBAI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-portfolio-textSecondary/60 hover:text-portfolio-cyan transition-colors duration-200 block p-2"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}

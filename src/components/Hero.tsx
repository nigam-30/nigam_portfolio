"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[92vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Wafer Substrate Grid */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-40" />

      {/* Subtle Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Identity & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small uppercase technical discipline tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-portfolio-border bg-portfolio-card/60 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent" />
              <span className="text-xs font-mono font-medium tracking-wider text-portfolio-textSecondary uppercase">
                Electronics Engineering · VLSI Design &amp; Technology
              </span>
            </div>

            {/* Dominant Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-portfolio-text">
              Nigam Mehta
            </h1>

            {/* Core Value Statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-portfolio-text leading-tight max-w-xl">
              I design digital hardware <br className="hidden sm:inline" />
              for intelligent systems.
            </p>

            {/* Technology Pillars */}
            <p className="text-sm sm:text-base font-mono text-portfolio-textSecondary tracking-wide">
              RTL Design <span className="text-portfolio-accent">·</span> ASIC{" "}
              <span className="text-portfolio-accent">·</span> FPGA{" "}
              <span className="text-portfolio-accent">·</span> AI Hardware
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-portfolio-text text-portfolio-bg font-medium text-sm hover:bg-portfolio-accent hover:text-black transition-all duration-200 shadow-sm group"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/nigam-30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-card/40 hover:bg-portfolio-card text-portfolio-text hover:text-portfolio-accent text-sm font-medium transition-all duration-200"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 text-portfolio-textSecondary" />
              </a>
            </div>

            {/* Social / Professional Channels */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-xs font-mono text-portfolio-textSecondary">
              <a
                href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-portfolio-accent transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <span className="text-portfolio-border hidden sm:inline">•</span>
              <a
                href="mailto:mehtanigam3024@gmail.com"
                className="flex items-center gap-1.5 hover:text-portfolio-accent transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span>mehtanigam3024@gmail.com</span>
              </a>
              <span className="text-portfolio-border hidden sm:inline">•</span>
              <span className="text-portfolio-textSecondary/90 whitespace-nowrap">Mumbai, IN</span>
            </div>
          </motion.div>

          {/* Right Column: Semiconductor-Inspired Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] sm:max-w-[360px] relative">
              {/* Semiconductor Bezel */}
              <div className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-300 p-3 shadow-card relative group">
                {/* Silicon Header Coordinates */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-portfolio-border px-1.5 text-[11px] font-mono text-portfolio-textSecondary">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-portfolio-text font-medium">VLSI // SAKEC</span>
                  </span>
                  <span className="text-portfolio-textMuted tracking-wider text-[10px]">
                    DIE_ID #NM3024
                  </span>
                </div>

                {/* Profile Image with subtle silicon corner markers */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-portfolio-subtle border border-portfolio-border/60">
                  <Image
                    src="/profile.jpg"
                    alt="Nigam Mehta"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                    sizes="(max-width: 768px) 320px, 360px"
                  />

                  {/* Minimal silicon corner reticle marks */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-portfolio-accent/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-portfolio-accent/60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-portfolio-accent/60 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-portfolio-accent/60 pointer-events-none" />
                </div>

                {/* Status Bar */}
                <div className="mt-3 pt-2.5 border-t border-portfolio-border px-1.5 flex items-center justify-between text-xs font-mono">
                  <span className="text-portfolio-textSecondary">Nigam Mehta</span>
                  <span className="text-portfolio-accent font-medium text-[11px]">
                    B.Tech 2023–2028
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

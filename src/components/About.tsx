"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase, Cpu } from "lucide-react";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";

export default function About() {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background Circuit Trace */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-25" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="01 // ARCH_OVERVIEW"
          title="About Me"
          subtitle="Get to know my academic background, career objectives, and engineering focus."
          badge="SYS_READY"
        />

        {/* Bio & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Bio card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="md:col-span-7 bg-portfolio-card border border-portfolio-primary/25 rounded-2xl p-6 sm:p-8 shadow-glow hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top PCB Pinout Label */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-portfolio-primary/15 text-[10px] font-mono text-portfolio-textSecondary">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#06B6D4]" />
                <span>UNIT_01 // BIO_REGISTER</span>
              </span>
              <span className="text-emerald-400">STATUS: VERIFIED</span>
            </div>

            {/* Bio Text */}
            <div className="space-y-3.5">
              <h3 className="text-xl font-bold text-portfolio-primary flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#06B6D4]" /> Professional Bio
              </h3>
              <p className="text-portfolio-textSecondary leading-relaxed text-sm sm:text-base">
                B.Tech student in Electronics Engineering, specializing in VLSI Design &amp; Technology at SAKEC, Mumbai — building toward a career in chip design and ASIC/hardware verification.
              </p>
              <p className="text-portfolio-textSecondary leading-relaxed text-sm sm:text-base">
                My core focus is VLSI and semiconductor fundamentals: CMOS technology, ASIC design flow, FPGA prototyping, and AI accelerator architectures, developed through coursework and a VLSI Design &amp; Semiconductor Engineering internship. Alongside this, I&apos;ve built practical experience in embedded systems (PIC16 microcontrollers, MPLAB X, Embedded C, IoT/BLE communication) and data analysis (Python, SQL, Power BI), which I use to support hardware design decisions with data — not as separate tracks.
              </p>
              <p className="text-portfolio-textSecondary leading-relaxed text-sm sm:text-base">
                Designed and simulated a modular, FSM-based Digital Event Monitoring Unit in Verilog — evolving a standalone 8-bit sensor monitor into an AMBA APB4 bus-integrated, SoC-ready IP with memory-mapped registers. Built a companion Python automation tool (AutoArchitect) that scripts Yosys synthesis and auto-generates gate-level SVG diagrams from the netlist.
              </p>
              <p className="text-portfolio-textSecondary leading-relaxed text-sm sm:text-base">
                Currently strengthening my SystemVerilog and verification fundamentals through coursework, and looking for VLSI design, ASIC verification, or semiconductor internship opportunities.
              </p>
            </div>

            <div className="mt-6 border-t border-portfolio-primary/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
              <div className="bg-[#070b16]/70 p-3 rounded-lg border border-portfolio-primary/15">
                <span className="text-[11px] text-portfolio-textSecondary block uppercase tracking-wider font-semibold">Email</span>
                <a
                  href="mailto:mehtanigam3024@gmail.com"
                  className="text-portfolio-text hover:text-portfolio-cyan transition-colors duration-200 text-xs font-medium truncate block mt-0.5"
                >
                  mehtanigam3024@gmail.com
                </a>
              </div>
              <div className="bg-[#070b16]/70 p-3 rounded-lg border border-portfolio-primary/15">
                <span className="text-[11px] text-portfolio-textSecondary block uppercase tracking-wider font-semibold">Target Roles</span>
                <span className="text-portfolio-text text-xs font-medium block mt-0.5">
                  VLSI Design, ASIC Verification, AI Hardware, Semiconductors
                </span>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="md:col-span-5 bg-portfolio-card border border-portfolio-primary/25 rounded-2xl p-6 sm:p-8 shadow-glow hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top PCB Pinout Label */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-portfolio-primary/15 text-[10px] font-mono text-portfolio-textSecondary">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-[#8B5CF6]" />
                <span>UNIT_02 // ACADEMICS</span>
              </span>
              <span className="text-cyan-400">AFFILIATION: MUMBAI_UNIV</span>
            </div>

            <h3 className="text-xl font-bold text-portfolio-primary mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-[#8B5CF6]" /> Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-portfolio-text">
                  Pursuing B.Tech Electronics Engineering [VLSI Design And Technology]
                </h4>
                <p className="text-sm text-portfolio-cyan font-medium mt-1 font-mono">
                  From Shah And Anchor Kutchhi Engineering College, Mumbai , Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-2 text-portfolio-textSecondary text-sm">
                <Calendar className="h-4 w-4 text-portfolio-primary" />
                <span>2023 – Present (Expected graduation: 2028)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

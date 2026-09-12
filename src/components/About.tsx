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

        {/* Horizontal Stacked Cards (One after the other) */}
        <div className="flex flex-col gap-8">
          {/* Card 1: Professional Bio (Full Width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="w-full bg-portfolio-card border border-portfolio-primary/25 rounded-2xl p-6 sm:p-8 shadow-glow hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top PCB Pinout Label */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-portfolio-primary/15 text-[10px] font-mono text-portfolio-textSecondary">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#06B6D4]" />
                <span>UNIT_01 // BIO_REGISTER</span>
              </span>
              <span className="text-emerald-400">STATUS: VERIFIED</span>
            </div>

            {/* Bio Header & Content */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-primary flex items-center gap-2.5 font-sans">
                <Briefcase className="h-5 w-5 text-[#06B6D4]" /> Professional Bio
              </h3>

              <p className="text-portfolio-text text-base sm:text-lg font-medium leading-relaxed">
                B.Tech student in Electronics Engineering, specializing in <span className="text-portfolio-cyan font-semibold">VLSI Design &amp; Technology</span> at SAKEC Mumbai — building toward a career in chip design, RTL implementation, and ASIC/hardware verification.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#070b16]/70 border border-portfolio-primary/15 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                    ⚡ VLSI &amp; Silicon Design
                  </span>
                  <p className="text-portfolio-textSecondary text-sm leading-relaxed">
                    Core focus on CMOS technology, ASIC design flow, FPGA prototyping, and AI accelerator architectures, reinforced by hands-on RTL design and semiconductor internship experience.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070b16]/70 border border-portfolio-primary/15 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider block">
                    🛠️ SoC Integration &amp; EDA Automation
                  </span>
                  <p className="text-portfolio-textSecondary text-sm leading-relaxed">
                    Designed AMBA APB4 bus-integrated digital monitoring IPs in Verilog and developed AutoArchitect in Python to automate Yosys synthesis and netlist SVG diagram generation.
                  </p>
                </div>
              </div>

              <p className="text-portfolio-textSecondary leading-relaxed text-sm sm:text-base pt-1">
                Practical experience in embedded systems (PIC16 microcontrollers, MPLAB X, Embedded C, BLE/IoT) and data analysis (Python, SQL, Power BI) to drive data-informed hardware engineering decisions. Currently deepening expertise in SystemVerilog verification and seeking internship roles in VLSI design, ASIC verification, or semiconductor engineering.
              </p>
            </div>

            {/* Bottom Quick-Info Bar */}
            <div className="mt-6 border-t border-portfolio-primary/15 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 font-mono text-xs">
              <div className="bg-[#070b16]/80 p-3 rounded-lg border border-portfolio-primary/15">
                <span className="text-[11px] text-portfolio-textSecondary block uppercase tracking-wider font-semibold">Email</span>
                <a
                  href="mailto:mehtanigam3024@gmail.com"
                  className="text-portfolio-text hover:text-portfolio-cyan transition-colors duration-200 font-medium truncate block mt-0.5"
                >
                  mehtanigam3024@gmail.com
                </a>
              </div>
              <div className="bg-[#070b16]/80 p-3 rounded-lg border border-portfolio-primary/15">
                <span className="text-[11px] text-portfolio-textSecondary block uppercase tracking-wider font-semibold">Target Roles</span>
                <span className="text-portfolio-text font-medium block mt-0.5 truncate">
                  VLSI Design, ASIC Verification, AI Hardware
                </span>
              </div>
              <div className="bg-[#070b16]/80 p-3 rounded-lg border border-portfolio-primary/15 sm:col-span-2 lg:col-span-1">
                <span className="text-[11px] text-portfolio-textSecondary block uppercase tracking-wider font-semibold">Location</span>
                <span className="text-portfolio-cyan font-medium block mt-0.5">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Education & Academic Credentials (Full Width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="w-full bg-portfolio-card border border-portfolio-primary/25 rounded-2xl p-6 sm:p-8 shadow-glow hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top PCB Pinout Label */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-portfolio-primary/15 text-[10px] font-mono text-portfolio-textSecondary">
              <span className="text-[#38BDF8] font-bold flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-[#8B5CF6]" />
                <span>UNIT_02 // ACADEMICS</span>
              </span>
              <span className="text-cyan-400 font-mono">AFFILIATION: MUMBAI_UNIV</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-primary flex items-center gap-2.5 font-sans">
                  <GraduationCap className="h-5 w-5 text-[#8B5CF6]" /> Education &amp; Academic Background
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-portfolio-text">
                  Bachelor of Technology (B.Tech) in Electronics Engineering
                </h4>
                <p className="text-sm sm:text-base text-portfolio-cyan font-semibold font-mono">
                  Specialization: VLSI Design &amp; Technology
                </p>
                <p className="text-sm text-portfolio-textSecondary">
                  Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai, Maharashtra
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:items-end justify-center gap-2 bg-[#070b16]/80 p-4 rounded-xl border border-portfolio-primary/20 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <Calendar className="h-4 w-4 text-[#06B6D4]" />
                  <span>2023 – 2028</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>IN PROGRESS // EXPECTED 2028</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

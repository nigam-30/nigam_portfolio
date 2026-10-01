"use client";

import { GraduationCap } from "lucide-react";

const focusAreas = [
  "Digital IC Design",
  "RTL & FPGA Prototyping",
  "ASIC Verification",
  "AI Hardware Architectures",
  "Embedded Systems",
  "EDA & Synthesis Workflows",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            01 — ABOUT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
            Engineering digital hardware from logic gates to SoC integration.
          </h2>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-portfolio-textSecondary text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am an Electronics Engineering student specializing in{" "}
              <strong className="text-portfolio-text font-semibold">
                VLSI Design &amp; Technology
              </strong>{" "}
              at Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai. My core interest lies
              at the boundary where digital logic, microarchitecture, and silicon fabrication meet.
            </p>

            <p>
              My work spans writing synthesizable RTL in Verilog and SystemVerilog, engineering finite
              state machines (FSMs), integrating standard on-chip interconnects like AMBA APB4, and
              validating timing closure in Xilinx Vivado. I have taken custom hardware designs through
              functional simulation, synthesis, and FPGA implementation.
            </p>

            <p>
              Beyond pure silicon design, I explore how embedded microcontrollers (Microchip PIC16,
              Embedded C) and data engineering pipelines (Python, SQL, SHAP interpretability) support
              next-generation edge AI accelerators. I am currently deepening my proficiency in
              SystemVerilog/UVM verification and open-source EDA tooling.
            </p>

            {/* Academic Credentials Banner */}
            <div className="pt-4">
              <div className="p-5 rounded-xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-borderHover transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-portfolio-accent">
                    <GraduationCap className="h-4 w-4" />
                    <span>BACHELOR OF TECHNOLOGY (B.TECH)</span>
                  </div>
                  <h3 className="text-base font-semibold text-portfolio-text">
                    Electronics Engineering (VLSI Design &amp; Technology)
                  </h3>
                  <p className="text-xs text-portfolio-textSecondary">
                    Shah &amp; Anchor Kutchhi Engineering College (SAKEC), Mumbai
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs text-portfolio-textSecondary">
                  <span className="block text-portfolio-text font-medium">2023 – 2028</span>
                  <span className="text-emerald-400">In Progress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Technical Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-portfolio-card border border-portfolio-border p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-portfolio-border pb-4">
                <h3 className="text-xs font-mono font-bold tracking-widest text-portfolio-text uppercase">
                  CORE FOCUS
                </h3>
                <span className="text-[11px] font-mono text-portfolio-accent">HARDWARE &amp; ARCH</span>
              </div>

              <ul className="space-y-3.5">
                {focusAreas.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-portfolio-border grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-portfolio-textSecondary block text-[11px]">LOCATION</span>
                  <span className="text-portfolio-text font-medium">Mumbai, India</span>
                </div>
                <div>
                  <span className="text-portfolio-textSecondary block text-[11px]">TARGET ROLES</span>
                  <span className="text-portfolio-text font-medium">RTL / ASIC / FPGA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

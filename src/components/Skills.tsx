"use client";

import { Cpu, Terminal, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: typeof Cpu;
  skills: { name: string; note?: string }[];
}

const categories: SkillCategory[] = [
  {
    title: "HARDWARE",
    subtitle: "RTL Implementation & Silicon Architecture",
    icon: Cpu,
    skills: [
      { name: "Verilog HDL", note: "RTL modeling, FSMs & datapath synthesis" },
      { name: "SystemVerilog", note: "Verification constructs & testbenches" },
      { name: "RTL Design", note: "Synchronous logic, pipelining, hazard logic" },
      { name: "FPGA Prototyping", note: "Xilinx Spartan-7 implementation" },
      { name: "ASIC Methodologies", note: "Logic synthesis & timing constraints" },
      { name: "Digital Logic Design", note: "Combinational/sequential analysis" },
      { name: "CMOS Technology", note: "Semiconductor device physics & sizing" },
    ],
  },
  {
    title: "EDA & WORKFLOWS",
    subtitle: "Electronic Design Automation & Verification",
    icon: Layers,
    skills: [
      { name: "Xilinx Vivado", note: "Elaboration, synthesis, implementation" },
      { name: "Vivado XSim", note: "Cycle-accurate behavioral verification" },
      { name: "Cadence EDA Tools", note: "VLSI academic & virtual flow training" },
      { name: "Static Timing Analysis", note: "WNS/TNS constraint validation" },
      { name: "AMBA APB4 Protocol", note: "Memory-mapped slave integration" },
      { name: "FPGA Implementation", note: "Bitstream generation & pin mapping" },
    ],
  },
  {
    title: "SOFTWARE & COMPUTE",
    subtitle: "Systems Programming & Analytical Pipelines",
    icon: Terminal,
    skills: [
      { name: "Python", note: "EDA automation scripts, NumPy, Pandas" },
      { name: "C / C++ (C++14)", note: "Low-level systems, STL data structures" },
      { name: "Linux & Bash", note: "CLI automation, toolchain orchestration" },
      { name: "SQL", note: "Relational data extraction & segmentation" },
      { name: "Git & GitHub", note: "Version control & open-source workflows" },
      { name: "Data Analytics & ML", note: "Scikit-learn, SMOTE, SHAP, Power BI" },
      { name: "Embedded C", note: "Microchip PIC16, MPLAB X, BLE, IoT" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            03 — ENGINEERING STACK
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
              Core competencies across silicon, tools &amp; software.
            </h2>
            <p className="text-xs font-mono text-portfolio-textSecondary">
              Categorized Engineering Capabilities
            </p>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 p-7 flex flex-col justify-between shadow-card space-y-6 group"
              >
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="space-y-2 pb-4 border-b border-portfolio-border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-mono font-bold tracking-widest text-portfolio-accent uppercase">
                        {category.title}
                      </h3>
                      <Icon className="h-4 w-4 text-portfolio-textSecondary group-hover:text-portfolio-accent transition-colors" />
                    </div>
                    <p className="text-xs text-portfolio-textSecondary font-sans">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-portfolio-subtle/60 border border-portfolio-border/60 hover:border-portfolio-accent/30 transition-colors"
                      >
                        <div className="text-sm font-semibold text-portfolio-text">
                          {skill.name}
                        </div>
                        {skill.note && (
                          <div className="text-xs text-portfolio-textSecondary font-mono mt-0.5">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-portfolio-border text-[11px] font-mono text-portfolio-textMuted flex items-center justify-between">
                  <span>DISCIPLINE_0{idx + 1}</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

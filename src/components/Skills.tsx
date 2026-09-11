"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Database, Code, ShieldCheck, Zap, Activity } from "lucide-react";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";

interface SkillGroup {
  id: string;
  category: string;
  icCode: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export default function Skills() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const skillGroups: SkillGroup[] = [
    {
      id: "vlsi",
      category: "VLSI / Hardware",
      icCode: "IC-01 // RTL_CORE",
      icon: <Cpu className="h-5 w-5 text-[#06B6D4]" />,
      color: "#06B6D4",
      skills: [
        "Verilog",
        "RTL Design",
        "Digital Logic Design",
        "FSM",
        "ASIC Verification",
        "Semiconductor Technology",
        "Hardware Design",
      ],
    },
    {
      id: "ai",
      category: "AI / ML",
      icCode: "IC-02 // NPU_ACCELERATOR",
      icon: <Brain className="h-5 w-5 text-[#8B5CF6]" />,
      color: "#8B5CF6",
      skills: [
        "Python",
        "Scikit-learn",
        "SHAP",
        "SMOTE",
        "Machine Learning",
        "Artificial Intelligence",
      ],
    },
    {
      id: "data",
      category: "Data Analytics",
      icCode: "IC-03 // DPU_PIPELINE",
      icon: <Database className="h-5 w-5 text-[#10B981]" />,
      color: "#10B981",
      skills: ["SQL", "Power BI", "Data Analysis", "Pandas", "NumPy"],
    },
    {
      id: "software",
      category: "Software & Embedded",
      icCode: "IC-04 // MCU_CONTROLLER",
      icon: <Code className="h-5 w-5 text-[#F59E0B]" />,
      color: "#F59E0B",
      skills: ["C++", "Flask", "FastAPI", "Android Development", "Git", "GitHub"],
    },
    {
      id: "security",
      category: "Cybersecurity",
      icCode: "IC-05 // CRYPTO_ENGINE",
      icon: <ShieldCheck className="h-5 w-5 text-[#EC4899]" />,
      color: "#EC4899",
      skills: ["Cybersecurity Fundamentals", "Network Security"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Wafer Micro-Grid Background Layer */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="02 // CHIPSET_BUS"
          title="Technical Skills"
          subtitle="My core engineering competencies and software tooling knowledge, structured as an integrated circuit hierarchy."
          badge="BUS_SYNCED"
        />

        {/* Central Interconnect Bus Display */}
        <div className="hidden lg:flex items-center justify-between px-6 py-3 rounded-xl bg-[#090d1c]/90 border border-portfolio-primary/30 shadow-[0_0_20px_rgba(139,92,246,0.15)] font-mono text-xs text-portfolio-textSecondary">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-[#06B6D4] animate-pulse" />
            <span className="text-[#38BDF8] font-bold">SYSTEM BUS: AMBA APB4 / HIGH-SPEED INTERCONNECT</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>BANDWIDTH: 128-BIT</span>
            <span className="text-[#8B5CF6]">•</span>
            <span className="text-emerald-400">NODES ACTIVE: 5/5</span>
            <span className="text-[#8B5CF6]">•</span>
            <span>CLOCK: 100MHz</span>
          </div>
        </div>

        {/* Circuit Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const isHovered = activeNode === group.id;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveNode(group.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative rounded-2xl bg-portfolio-card border transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden group interactive-node ${
                  isHovered
                    ? "border-[#06B6D4]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.25)] -translate-y-1"
                    : "border-portfolio-primary/25 hover:border-portfolio-primary/50"
                }`}
              >
                {/* Circuit Node Background Trace lines */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0 L50 0 L30 20 L30 60 L0 60" stroke={group.color} strokeWidth="2" />
                    <circle cx="50" cy="0" r="3" fill={group.color} />
                    <circle cx="0" cy="60" r="3" fill={group.color} />
                  </svg>
                </div>

                <div>
                  {/* IC Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-portfolio-primary/15 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-portfolio-substrate border border-portfolio-primary/25 shadow-inner">
                        {group.icon}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#38BDF8] tracking-wider block font-bold">
                          {group.icCode}
                        </span>
                        <h3 className="text-base font-bold text-portfolio-text font-sans">
                          {group.category}
                        </h3>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] animate-pulse" />
                  </div>

                  {/* Interconnected Pinout Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 rounded-md bg-[#070b16]/85 border border-portfolio-primary/20 text-xs font-mono text-portfolio-text hover:text-portfolio-cyan hover:border-portfolio-cyan transition-colors duration-200 flex items-center gap-1.5 cursor-default shadow-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-portfolio-primary/70" />
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Card Pinout Footer */}
                <div className="mt-5 pt-3 border-t border-portfolio-primary/10 flex items-center justify-between text-[10px] font-mono text-portfolio-textSecondary">
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-[#06B6D4]" />
                    <span>PINS: {group.skills.length * 8}</span>
                  </span>
                  <span className="text-emerald-400">LOGIC: HIGH</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

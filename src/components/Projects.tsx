"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Github } from "@/components/icons";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";
import TiltCircuitCard from "@/components/TiltCircuitCard";

interface ReportLink {
  label: string;
  url: string;
}

interface ProjectItem {
  title: string;
  description: string[];
  stack: string[];
  github: string;
  pinLabel: string;
  reports?: ReportLink[];
}

const projects: ProjectItem[] = [
  {
    title: "8-bit Pipelined Processor",
    pinLabel: "CPU_CORE // RISC_PIPELINE",
    description: [
      "Built an 8-bit processor from scratch using Verilog, featuring a 3-stage pipeline (Fetch, Decode, Execute), an 8-register file (with hardwired R0 = 0), and an ALU supporting ADD, ADDI, SUB, SLL, and HALT instructions.",
      "Engineered hardware hazard detection and stall logic to resolve data dependencies between pipeline stages, alongside automated pipeline flush mechanisms upon encountering HALT instructions to prevent corrupted execution states.",
      "Simulated and verified cycle-accurate behavior at 100 MHz in Xilinx Vivado (XSim) and successfully synthesized & implemented on FPGA, utilizing only 95 LUTs and 104 registers (<2% chip utilization) with full timing closure.",
    ],
    stack: [
      "Verilog HDL",
      "RTL Design",
      "Xilinx Vivado",
      "XSim",
      "FPGA Synthesis",
      "Hazard Handling",
      "Timing Analysis",
      "Digital Verification",
    ],
    github: "https://github.com/nigam-30/pipelined_processor",
    reports: [
      {
        label: "Project Report",
        url: "/reports/Pipelined_Processor_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Data Monitoring Unit",
    pinLabel: "RTL_DEMU // ASIC_IP",
    description: [
      "Engineered a scalable Digital Event Monitoring Unit (DEMU) in two distinct phases, evolving it from a standalone hardware monitor into a fully-fledged SoC-Ready IP core.",
      "Phase 1 (Core Hardware Design): Designed an 8-bit RTL monitoring unit using a robust Moore FSM (Idle, Alarm, Cooldown) with a sticky alarm, fault capture register, and dual-mode (signed/unsigned) bitwise comparison logic for transient spike detection.",
      "Phase 2 (SoC Integration & EDA Automation): Scaled the core into a processor-friendly IP via an AMBA APB4 slave wrapper with a 5-register memory-mapped interface, and developed AutoArchitect in Python to automate Yosys synthesis and NetlistSVG diagram generation.",
    ],
    stack: [
      "Verilog",
      "AMBA APB4",
      "RTL Design",
      "FSM",
      "Python",
      "Yosys",
      "SoC Integration",
      "EDA Automation",
    ],
    github: "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit",
    reports: [
      {
        label: "Phase 1 Report",
        url: "/reports/Data Monitoring Unit Phase 1 Report.pdf",
      },
      {
        label: "Phase 2 Report",
        url: "/reports/Data Monitoring Unit Phase 2 Report.pdf",
      },
    ],
  },
  {
    title: "Bank Management System",
    pinLabel: "SYS_CORE // C++_ENGINE",
    description: [
      "Engineered a full-stack banking simulator with a C++ backend utilizing STL unordered maps to achieve true O(1) average-case complexity for account lookups, balances, and transactions.",
      "Bridged high-performance backend logic to a responsive web frontend using a lightweight Python Flask REST API with clean HTTP endpoints.",
      "Implemented local file-based persistence to maintain full state across sessions without database overhead, showcasing end-to-end systems architecture.",
    ],
    stack: [
      "C++",
      "Flask",
      "REST API",
      "HTML/CSS",
      "Data Structures",
      "File I/O",
      "Full Stack",
    ],
    github: "https://github.com/nigam-30/Bank-Management-System",
    reports: [
      {
        label: "Project Report",
        url: "/reports/Bank_System_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Rail Nova",
    pinLabel: "FASTAPI // DISTRIBUTED",
    description: [
      "Developed a production-grade Indian railway reservation web simulator in FastAPI with SQLAlchemy ORM and SQLite, managing 8,990 stations, 5,277 trains (including Vande Bharat), and 417,080+ stoppage records.",
      "Faithfully reproduced the real Indian Railways CNF/RAC/Waitlist seat allocation algorithm with automatic promotion logic on cancellation, secured by JWT session authentication.",
      "Integrated real-time train progress tracking and PNR status updates powered by WebSockets, along with a custom in-app e-Wallet payment system.",
    ],
    stack: [
      "FastAPI",
      "Python",
      "SQLite",
      "SQLAlchemy",
      "WebSocket",
      "JWT",
      "REST API",
      "Full Stack",
    ],
    github: "https://github.com/nigam-30/Rail-Nova",
    reports: [
      {
        label: "Project Report",
        url: "/reports/Rail_Nova_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Telecom Customer Churn Prediction",
    pinLabel: "ML_PIPELINE // ANALYTICS",
    description: [
      "Engineered a full-stack data analytics and machine learning pipeline to predict telecom customer churn, leveraging SQL queries to segment 3 distinct behavioral cohorts.",
      "Addressed severe class imbalance using SMOTE oversampling, training and evaluating Random Forest and Logistic Regression models to pinpoint high-risk churners.",
      "Applied SHAP TreeExplainer for global and per-customer model interpretability, delivering insights via 13 publication-quality Power BI visualizations.",
    ],
    stack: [
      "Python",
      "SQL",
      "Scikit-learn",
      "SMOTE",
      "SHAP",
      "Random Forest",
      "Logistic Regression",
      "Power BI",
      "Data Analytics",
    ],
    github: "https://github.com/nigam-30/Telecom_Churn_Analysis",
    reports: [
      {
        label: "Project Report",
        url: "/reports/Telecom_Churn_Analysis_Report.pdf",
      },
    ],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8 relative">
      {/* Wafer Grid Layer */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-25" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="03 // PROJECT_REGISTERS"
          title="Featured Projects"
          subtitle="A compilation of my designs, engineering prototypes, and analytical pipelines."
          badge="CODE_VERIFIED"
        />

        {/* Project Cards Grid with 3D Tilt & Animated Circuit Borders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <TiltCircuitCard pinLabel={project.pinLabel} className="h-full">
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-portfolio-text hover:text-portfolio-cyan transition-colors duration-200 font-sans">
                      {project.title}
                    </h3>

                    {/* Description Bullets */}
                    <ul className="list-disc pl-4 space-y-2.5 text-portfolio-textSecondary text-sm sm:text-base leading-relaxed mt-3">
                      {project.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded bg-[#070b16]/90 border border-portfolio-primary/20 text-xs font-mono font-semibold text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-portfolio-primary/15 font-mono">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-portfolio-text hover:text-portfolio-cyan transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 text-[#8B5CF6]" />
                        <span>VIEW REPOSITORY</span>
                      </a>

                      {project.reports && project.reports.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          {project.reports.map((report, rIdx) => (
                            <a
                              key={rIdx}
                              href={encodeURI(report.url)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-portfolio-cyan/10 border border-portfolio-cyan/30 text-portfolio-cyan hover:bg-portfolio-cyan/20 hover:border-portfolio-cyan text-xs font-semibold transition-all duration-200 shadow-glow-cyan/20"
                              title={`View ${report.label}`}
                            >
                              <FileText className="h-3.5 w-3.5 text-portfolio-cyan" />
                              <span>VIEW {report.label.toUpperCase()}</span>
                              <ExternalLink className="h-3 w-3 opacity-70" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCircuitCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

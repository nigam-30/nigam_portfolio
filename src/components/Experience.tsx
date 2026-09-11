"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  badge?: string;
  certificate?: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "AICTE – EduSkills (in collaboration with Microchip)",
    role: "Microchip Embedded System Developer Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Remote",
    certificate: "/certificates/Embedded System Developer Virtual Internship.pdf",
    details: [
      "Selected for the AICTE–EduSkills Internship Program under the Microchip Embedded Systems track.",
      "Completed a structured 8-week curriculum covering PIC16 microcontroller architecture, MPLAB X IDE, embedded C programming (including callbacks, modular design, and linked lists), IoT design considerations, Bluetooth Low Energy (BLE) application development, Azure IoT sensor nodes with motor control, and real-time data visualization using MPLAB Data Visualizer.",
      "Key Tools & Technologies: PIC16F1xxx MCUs, MPLAB X IDE, MCC, Embedded C, BLE, Azure IoT, MPLAB Data Visualizer.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "VLSI Design Semiconductor Engineering Intern",
    period: "Apr 2026 – Jun 2026",
    location: "Remote",
    certificate: "/certificates/Certificate VLSI Design & Semiconductor Engineering Virtual Internship.pdf",
    details: [
      "Focused on Digital Integrated Circuit architectures, RTL design methodologies, and hardware description language validation.",
      "Studied semiconductor fabrication processes, ASIC verification flows, and electronic design automation (EDA) tools.",
    ],
  },
  {
    company: "Elevate Labs",
    role: "Data Analyst Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    certificate: "/certificates/Elevate Labs Data Analyst Internship Certificate.pdf",
    details: [
      "Analyzed behavioral and engagement datasets, building dashboards to track vital KPIs.",
      "Identified trends and anomaly patterns to support product optimization decisions.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "Data Analytics with Python & Power BI Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    certificate: "/certificates/Certificate Data Analysis Virtual Internship Eduskills.pdf",
    details: [
      "Built clean predictive frameworks using Python pandas/numpy arrays and regression models.",
      "Engineered publication-quality interactive dashboards in Power BI to present business intelligence insights.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "Android Developer Intern",
    period: "Oct 2025 – Dec 2025",
    location: "Remote",
    certificate: "/certificates/Google Android Developer Virtual Internship Certificate.pdf",
    details: [
      "Created responsive android application views, integrating REST APIs and handling persistent database configurations.",
      "Utilized Git version controls and optimized layout loading speeds.",
    ],
  },
  {
    company: "EduSkills Foundation",
    role: "AI and Machine Learning Intern",
    period: "Jul 2025 – Sep 2025",
    location: "Remote",
    certificate: "/certificates/Google AI-ML Virtual Internship.pdf",
    details: [
      "Developed basic classifiers and regressors using Scikit-Learn libraries.",
      "Implemented dataset pre-processing, handling missing columns and normalizing inputs.",
    ],
  },
  {
    company: "Edunet Foundation",
    role: "Artificial Intelligence and Machine Learning Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    certificate: "/certificates/Certificate Artificial Intelligence And Machine Learning Internship.pdf",
    details: [
      "Engaged in foundations of neural networks and standard ML algorithms.",
      "Built hands-on predictive models solving pattern classification problems.",
    ],
  },
  {
    company: "Edunet Foundation",
    role: "Cyber Security Intern",
    period: "May 2025 – Jun 2025",
    location: "Remote",
    certificate: "/certificates/Certificate Cybersecurity Internship.pdf",
    details: [
      "Studied core network protocols, firewalls, and cryptographic basics.",
      "Investigated network vulnerabilities and applied encryption techniques for securing communication channels.",
    ],
  },
  {
    company: "Edunet Foundation",
    role: "Foundations of AI Intern",
    period: "Apr 2025 – May 2025",
    location: "Remote",
    certificate: "/certificates/Certificate Foundations Of Artificial Intelligence Internship.pdf",
    details: [
      "Introduced to artificial intelligence fundamentals, search algorithms, and knowledge representation.",
      "Explored prompt engineering, large language model configurations, and ethical AI practices.",
    ],
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8 relative">
      {/* Wafer Grid Layer */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-25" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="04 // INTERN_TELEMETRY"
          title="Professional Experience"
          subtitle="A timeline of my internships and practical engineering training across hardware, data, and software."
          badge="LOG_SYNCED"
        />

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#8B5CF6]/35 ml-4 md:ml-6 space-y-10">
          {visibleExperiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.period + idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Circuit Node Pin */}
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-[#06B6D4] bg-portfolio-substrate group-hover:bg-[#06B6D4] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_#06B6D4] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              </div>

              {/* Experience Card */}
              <div className="bg-portfolio-card border border-portfolio-primary/25 hover:border-[#06B6D4]/50 rounded-xl p-5 sm:p-6 shadow-glow hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 relative overflow-hidden">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-portfolio-text group-hover:text-portfolio-cyan transition-colors duration-200 font-sans">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-portfolio-primary font-mono mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-portfolio-textSecondary gap-1">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Calendar className="h-3.5 w-3.5 text-[#06B6D4]" />
                      {exp.period}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      {exp.location && (
                        <span className="flex items-center gap-1 text-[#94A3B8]">
                          <MapPin className="h-3.5 w-3.5 text-[#8B5CF6]" />
                          {exp.location}
                        </span>
                      )}
                      {exp.badge && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-4 space-y-1.5 text-portfolio-textSecondary text-sm leading-relaxed">
                  {exp.details.map((detail, detIdx) => (
                    <li key={detIdx}>{detail}</li>
                  ))}
                </ul>

                {exp.certificate && (
                  <div className="mt-4 pt-3 border-t border-portfolio-primary/10 flex items-center">
                    <a
                      href={encodeURI(exp.certificate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070b16]/70 border border-portfolio-primary/25 hover:border-portfolio-cyan text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-all duration-200 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] group/cert"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-[#06B6D4] group-hover/cert:text-cyan-200 transition-colors" />
                      <span>View Certificate</span>
                      <span aria-hidden="true" className="text-cyan-400 group-hover/cert:translate-x-0.5 transition-transform duration-200">→</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {experiences.length > 3 && (
          <div className="flex justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-lg bg-portfolio-substrate border border-portfolio-primary/30 hover:border-portfolio-cyan text-portfolio-text hover:text-portfolio-cyan text-xs font-mono font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.2)] flex items-center gap-2 cursor-pointer"
            >
              <span>{showAll ? "COLLAPSE_LOGS [SHOW LESS]" : `EXPAND_LOGS [${experiences.length - 3} MORE ENTRIES]`}</span>
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Calendar, ExternalLink, ChevronDown, ChevronUp, FileText } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  year: string;
  certificate?: string;
  stack: string[];
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "AICTE – EduSkills (in collaboration with Microchip)",
    role: "Microchip Embedded System Developer Intern",
    period: "Jun 2026 – Aug 2026",
    year: "2026",
    certificate: "/certificates/Embedded System Developer Virtual Internship.pdf",
    stack: ["PIC16 MCUs", "MPLAB X IDE", "MCC", "Embedded C", "BLE", "Azure IoT", "Data Visualizer"],
    summary:
      "Engineered embedded firmwares covering PIC16 microcontroller architecture, modular C programming, Bluetooth Low Energy (BLE) applications, and Azure IoT sensor telemetry nodes.",
  },
  {
    company: "EduSkills Foundation",
    role: "VLSI Design & Semiconductor Engineering Intern",
    period: "Apr 2026 – Jun 2026",
    year: "2026",
    certificate: "/certificates/Certificate VLSI Design & Semiconductor Engineering Virtual Internship.pdf",
    stack: ["Digital IC", "RTL Design", "ASIC Flow", "EDA Tools", "Semiconductor Tech"],
    summary:
      "Trained on digital integrated circuit architectures, hardware description language validation, CMOS fabrication processes, and ASIC electronic design automation workflows.",
  },
  {
    company: "Elevate Labs",
    role: "Data Analyst Intern",
    period: "Feb 2026 – Mar 2026",
    year: "2026",
    certificate: "/certificates/Elevate Labs Data Analyst Internship Certificate.pdf",
    stack: ["Data Analytics", "KPI Dashboards", "Pattern Detection", "SQL"],
    summary:
      "Analyzed user engagement datasets, evaluated critical operational metrics, and identified anomaly patterns to support product optimization decisions.",
  },
  {
    company: "EduSkills Foundation",
    role: "Data Analytics with Python & Power BI Intern",
    period: "Jan 2026 – Mar 2026",
    year: "2026",
    certificate: "/certificates/Certificate Data Analysis Virtual Internship Eduskills.pdf",
    stack: ["Python", "Pandas", "Power BI", "Data Modeling", "Business Intelligence"],
    summary:
      "Engineered automated data preprocessing routines and deployed interactive Power BI reports to visualize business intelligence metrics.",
  },
  {
    company: "EduSkills Foundation",
    role: "Android Developer Intern",
    period: "Oct 2025 – Dec 2025",
    year: "2025",
    certificate: "/certificates/Google Android Developer Virtual Internship Certificate.pdf",
    stack: ["Android SDK", "REST APIs", "Mobile UI", "Git"],
    summary:
      "Constructed responsive Android application components, integrating REST API backends and persistent SQLite storage layers.",
  },
  {
    company: "EduSkills Foundation",
    role: "AI and Machine Learning Intern",
    period: "Jul 2025 – Sep 2025",
    year: "2025",
    certificate: "/certificates/Google AI-ML Virtual Internship.pdf",
    stack: ["Python", "Scikit-Learn", "Data Preprocessing", "Classification"],
    summary:
      "Implemented standard supervised learning models, feature engineering pipelines, and classification benchmark evaluation.",
  },
  {
    company: "Edunet Foundation",
    role: "Artificial Intelligence and Machine Learning Intern",
    period: "Jun 2025 – Jul 2025",
    year: "2025",
    certificate: "/certificates/Certificate Artificial Intelligence And Machine Learning Internship.pdf",
    stack: ["Neural Networks", "ML Foundations", "Pattern Recognition"],
    summary:
      "Explored neural network architectures and solved practical pattern recognition problems using predictive models.",
  },
  {
    company: "Edunet Foundation",
    role: "Cyber Security Intern",
    period: "May 2025 – Jun 2025",
    year: "2025",
    certificate: "/certificates/Certificate Cybersecurity Internship.pdf",
    stack: ["Network Protocols", "Cryptography", "Security Auditing"],
    summary:
      "Studied core network defense architectures, firewall mechanics, and basic cryptographic encryption standards.",
  },
  {
    company: "Edunet Foundation",
    role: "Foundations of AI Intern",
    period: "Apr 2025 – May 2025",
    year: "2025",
    certificate: "/certificates/Certificate Foundations Of Artificial Intelligence Internship.pdf",
    stack: ["AI Concepts", "Search Algorithms", "Prompt Engineering"],
    summary:
      "Covered foundational AI search algorithms, knowledge representation paradigms, and prompt engineering methods.",
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            EXPERIENCE TIMELINE
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
              Internships &amp; industrial training.
            </h2>
            <p className="text-xs font-mono text-portfolio-textSecondary">
              Embedded Systems · VLSI · Analytics
            </p>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-portfolio-border ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-10">
          {displayed.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-portfolio-bg border-2 border-portfolio-accent group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 space-y-3.5 shadow-card">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-portfolio-accent font-semibold">
                    {item.company}
                  </span>
                  <div className="flex items-center gap-1.5 text-portfolio-textSecondary">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-portfolio-text tracking-tight">
                  {item.role}
                </h3>

                {/* Summary */}
                <p className="text-sm text-portfolio-textSecondary leading-relaxed font-sans">
                  {item.summary}
                </p>

                {/* Stack Pills & Certificate Link */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-portfolio-border">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-accent hover:text-portfolio-accentHover transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Certificate (PDF)</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-xs font-mono font-medium text-portfolio-text hover:text-portfolio-accent bg-portfolio-card transition-all"
          >
            <span>{showAll ? "Show Less" : `+ ${experiences.length - 4} Earlier Internships`}</span>
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}

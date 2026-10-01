"use client";

import { useState } from "react";
import {
  ExternalLink,
  FileText,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "@/components/icons";
import { Project, projectsData } from "@/data/projectsData";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="work" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            02 — SELECTED WORK
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
              Digital hardware architectures, verified IPs &amp; systems.
            </h2>
            <p className="text-xs font-mono text-portfolio-textSecondary sm:text-right">
              RTL Schematics · Waveforms · Synthesized Reports
            </p>
          </div>
        </div>

        {/* ========================================================
            FEATURED PROJECT — LARGE HERO TREATMENT (DEMU)
           ======================================================== */}
        <div className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-300 overflow-hidden shadow-card group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Discipline & Badge */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 text-portfolio-accent font-semibold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent animate-pulse" />
                    FEATURED PROJECT // HARDWARE IP
                  </span>
                  <span className="text-portfolio-textMuted">VERILOG · APB4</span>
                </div>

                {/* Title & Progression */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-text tracking-tight group-hover:text-portfolio-accent transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-portfolio-accent tracking-widest uppercase">
                    {featuredProject.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-portfolio-textSecondary text-sm sm:text-base leading-relaxed">
                  {featuredProject.shortDescription}
                </p>

                {/* Key Technical Achievement Box */}
                <div className="p-4 rounded-xl bg-portfolio-subtle border border-portfolio-border space-y-1">
                  <span className="text-[11px] font-mono text-portfolio-textSecondary uppercase font-semibold block">
                    Key Technical Achievement
                  </span>
                  <p className="text-xs sm:text-sm text-portfolio-text font-medium leading-relaxed">
                    {featuredProject.technicalAchievement}
                  </p>
                </div>

                {/* Hardware Progression Steps */}
                {featuredProject.progression && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-portfolio-textSecondary uppercase block">
                      Evolution Path
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                      {featuredProject.progression.map((step, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-portfolio-subtle text-portfolio-text border border-portfolio-border">
                            {step}
                          </span>
                          {idx < featuredProject.progression!.length - 1 && (
                            <span className="text-portfolio-accent">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-portfolio-subtle/80 text-portfolio-text border border-portfolio-border/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-portfolio-border flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-portfolio-text text-portfolio-bg font-medium text-xs font-mono hover:bg-portfolio-accent hover:text-black transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-text text-xs font-mono hover:text-portfolio-accent transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                {/* New Report Links */}
                {featuredProject.reports.map((report, idx) => (
                  <a
                    key={idx}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-textSecondary hover:text-portfolio-text text-xs font-mono transition-colors"
                    title={report.label}
                  >
                    <FileText className="h-3.5 w-3.5 text-portfolio-accent" />
                    <span>{report.label.replace("Digital Data Monitor ", "")}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Visual Column: Schematic Preview */}
            <div className="lg:col-span-6 bg-[#030509] border-t lg:border-t-0 lg:border-l border-portfolio-border p-4 sm:p-6 flex flex-col justify-between">
              <div
                onClick={() => setActiveModalProject(featuredProject)}
                className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden cursor-pointer group/img border border-portfolio-border/60 bg-black flex items-center justify-center"
              >
                <Image
                  src={
                    featuredProject.images?.[0]?.url ||
                    "/projects/demu/demu-synthesized-schematic.png"
                  }
                  alt={featuredProject.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-mono text-white flex items-center gap-1.5">
                    <span>Click to inspect synthesized netlist schematic</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-portfolio-accent" />
                  </span>
                </div>
              </div>

              {/* Hardware Quick Metrics Strip */}
              <div className="grid grid-cols-4 gap-2 pt-4 font-mono text-center">
                <div className="p-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border">
                  <span className="text-[10px] text-portfolio-textSecondary block">CLOCK</span>
                  <span className="text-xs font-semibold text-portfolio-text">100 MHz</span>
                </div>
                <div className="p-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border">
                  <span className="text-[10px] text-portfolio-textSecondary block">TIMING</span>
                  <span className="text-xs font-semibold text-emerald-400">+6.72ns</span>
                </div>
                <div className="p-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border">
                  <span className="text-[10px] text-portfolio-textSecondary block">CORE LUTS</span>
                  <span className="text-xs font-semibold text-portfolio-text">52 LUTs</span>
                </div>
                <div className="p-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border">
                  <span className="text-[10px] text-portfolio-textSecondary block">BUS IP</span>
                  <span className="text-xs font-semibold text-portfolio-text">APB4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            TWO-COLUMN PROJECT CARDS (REMAINING 5 PROJECTS)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => {
            const hasImage = project.images && project.images.length > 0;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-card hover:shadow-card-hover group"
              >
                <div className="space-y-5">
                  {/* Category & Subtitle */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-portfolio-accent font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.subtitle && (
                      <span className="text-portfolio-textMuted text-[11px]">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Optional Image Preview (e.g. Pipelined Processor waveform) */}
                  {hasImage && (
                    <div
                      onClick={() => setActiveModalProject(project)}
                      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black border border-portfolio-border cursor-pointer group/cardImg"
                    >
                      <Image
                        src={project.images![0].url}
                        alt={project.title}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover/cardImg:scale-105"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cardImg:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-mono text-white bg-black/80 px-3 py-1.5 rounded-md border border-white/20">
                          Inspect Simulation Waveform
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="text-portfolio-textSecondary text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technical Achievement Box */}
                  <div className="p-3.5 rounded-lg bg-portfolio-subtle border border-portfolio-border space-y-1">
                    <span className="text-[10px] font-mono text-portfolio-textSecondary uppercase font-semibold block">
                      Technical Highlight
                    </span>
                    <p className="text-xs text-portfolio-text font-medium leading-relaxed">
                      {project.technicalAchievement}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-portfolio-border flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>

                    <span className="text-portfolio-border">·</span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-text transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Code</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>

                    {project.liveDemo && (
                      <>
                        <span className="text-portfolio-border">·</span>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-accent hover:text-portfolio-accentHover transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </>
                    )}
                  </div>

                  {/* Report Download */}
                  {project.reports && project.reports.length > 0 && (
                    <a
                      href={project.reports[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors"
                      title={project.reports[0].label}
                    >
                      <FileText className="h-3 w-3 text-portfolio-accent" />
                      <span>Report (PDF)</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

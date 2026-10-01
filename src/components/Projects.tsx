"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight, FileText } from "lucide-react";
import { Github } from "@/components/icons";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const featuredProject = projectsData[0]; // Design of a Modular Digital Data Monitoring Unit
  const otherProjects = projectsData.slice(1);

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
            <p className="text-xs font-mono text-portfolio-textSecondary">
              Click any project for deep architectural case studies
            </p>
          </div>
        </div>

        {/* Featured Project Card: Design of a Modular Digital Data Monitoring Unit */}
        <div className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 p-8 sm:p-10 shadow-card hover:shadow-card-hover space-y-6 group">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-accent font-semibold tracking-wider uppercase">
                {featuredProject.category}
              </span>
              {featuredProject.secondaryLabel && (
                <>
                  <span className="text-portfolio-border">•</span>
                  <span className="px-2 py-0.5 rounded bg-portfolio-subtle text-portfolio-text font-medium border border-portfolio-border">
                    {featuredProject.secondaryLabel}
                  </span>
                </>
              )}
            </div>
            <span className="text-portfolio-textMuted text-[11px]">
              FEATURED HARDWARE IP
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors tracking-tight">
              <Link href={`/projects/${featuredProject.id}`}>
                {featuredProject.title}
              </Link>
            </h3>
            <p className="text-portfolio-textSecondary text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
              {featuredProject.shortDescription}
            </p>
          </div>

          {/* Quick Hardware Parameters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 rounded-lg bg-portfolio-subtle/70 border border-portfolio-border">
              <span className="text-[11px] text-portfolio-textSecondary block">CLOCK</span>
              <span className="text-sm font-semibold text-portfolio-text mt-0.5 block">100 MHz (10ns)</span>
            </div>
            <div className="p-3 rounded-lg bg-portfolio-subtle/70 border border-portfolio-border">
              <span className="text-[11px] text-portfolio-textSecondary block">TIMING SLACK</span>
              <span className="text-sm font-semibold text-emerald-400 mt-0.5 block">+6.720 ns WNS</span>
            </div>
            <div className="p-3 rounded-lg bg-portfolio-subtle/70 border border-portfolio-border">
              <span className="text-[11px] text-portfolio-textSecondary block">CORE LOGIC</span>
              <span className="text-sm font-semibold text-portfolio-text mt-0.5 block">52 Slice LUTs</span>
            </div>
            <div className="p-3 rounded-lg bg-portfolio-subtle/70 border border-portfolio-border">
              <span className="text-[11px] text-portfolio-textSecondary block">BUS INTERCONNECT</span>
              <span className="text-sm font-semibold text-portfolio-text mt-0.5 block">AMBA APB4 Slave</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {featuredProject.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-xs font-mono bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-portfolio-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/projects/${featuredProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-portfolio-text text-portfolio-bg font-mono text-xs font-semibold hover:bg-portfolio-accent hover:text-black transition-colors"
              >
                <span>View Project Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

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
            </div>

            {/* Exact Report Links */}
            <div className="flex flex-wrap items-center gap-2">
              {featuredProject.reports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-textSecondary hover:text-portfolio-text text-xs font-mono transition-colors"
                  title={report.filename}
                >
                  <FileText className="h-3.5 w-3.5 text-portfolio-accent" />
                  <span>{report.label}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Typography-Driven Project Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-card hover:shadow-card-hover group"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-portfolio-accent font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  {project.secondaryLabel && (
                    <span className="px-2 py-0.5 rounded text-[11px] bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border">
                      {project.secondaryLabel}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors tracking-tight">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>

                {/* Concise 1-3 Sentence Description */}
                <p className="text-portfolio-textSecondary text-sm sm:text-base leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-portfolio-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-portfolio-text hover:text-portfolio-accent transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <span className="text-portfolio-border">•</span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-text transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>

                  {project.liveDemo && (
                    <>
                      <span className="text-portfolio-border">•</span>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-accent hover:text-portfolio-accentHover transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    </>
                  )}
                </div>

                {/* Report link if present */}
                {project.reports && project.reports.length > 0 && (
                  <a
                    href={project.reports[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors"
                    title={project.reports[0].filename}
                  >
                    <FileText className="h-3 w-3 text-portfolio-accent" />
                    <span>Report</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

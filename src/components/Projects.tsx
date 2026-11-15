"use client";

import { ExternalLink, FileText } from "lucide-react";
import { Github } from "@/components/icons";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
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
          </div>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
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
                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text tracking-tight">
                  {project.title}
                </h3>

                {/* Concise Description */}
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors"
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

                {/* Report links */}
                {project.reports && project.reports.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {project.reports.map((report, idx) => (
                      <a
                        key={idx}
                        href={report.localUrl || report.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors"
                        title={report.filename}
                      >
                        <FileText className="h-3 w-3 text-portfolio-accent" />
                        <span>
                          {project.reports.length > 1
                            ? (idx === 0 ? "Phase 1 Report" : "Phase 2 Report")
                            : "Report"}
                        </span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, ArrowRight, Maximize2 } from "lucide-react";
import { Github } from "@/components/icons";
import { Project } from "@/data/projectsData";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenImage) {
          setFullscreenImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenImage, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setSelectedImageIdx(0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-portfolio-card border border-portfolio-border rounded-2xl shadow-card overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-portfolio-border bg-portfolio-subtle/50">
            <div className="flex items-center gap-2 font-mono text-xs text-portfolio-textSecondary">
              <span className="w-2 h-2 rounded-full bg-portfolio-accent" />
              <span className="text-portfolio-text font-semibold uppercase tracking-wider">
                TECHNICAL CASE STUDY
              </span>
              <span>·</span>
              <span className="text-portfolio-accent">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-portfolio-textSecondary hover:text-portfolio-text hover:bg-portfolio-card transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Short Description */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-text">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-portfolio-accentSubtle text-portfolio-accent border border-portfolio-accentBorder">
                    {project.subtitle}
                  </span>
                )}
              </div>
              <p className="text-portfolio-textSecondary text-base leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Hardware Progression (if present, DEMU) */}
            {project.progression && (
              <div className="p-4 rounded-xl bg-portfolio-subtle border border-portfolio-border">
                <span className="text-xs font-mono font-semibold text-portfolio-textSecondary uppercase tracking-wider block mb-3">
                  Architecture Progression
                </span>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {project.progression.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-portfolio-card border border-portfolio-border text-portfolio-text font-medium">
                        {step}
                      </span>
                      {idx < project.progression!.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-portfolio-accent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Grid */}
            {project.specs && project.specs.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-wider text-portfolio-textSecondary uppercase">
                  Hardware Specifications &amp; Parameters
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-portfolio-subtle border border-portfolio-border"
                    >
                      <span className="text-[11px] font-mono text-portfolio-textSecondary block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-semibold text-portfolio-text mt-0.5 block truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Diagrams & Waveforms Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold tracking-wider text-portfolio-textSecondary uppercase">
                    Schematics, Waveforms &amp; Implementation Artifacts
                  </h3>
                  <span className="text-[11px] font-mono text-portfolio-textMuted">
                    Click image to inspect full scale
                  </span>
                </div>

                {/* Primary Image View */}
                <div className="rounded-xl overflow-hidden bg-portfolio-subtle border border-portfolio-border relative group">
                  <div
                    onClick={() =>
                      setFullscreenImage(project.images![selectedImageIdx].url)
                    }
                    className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-zoom-in bg-black flex items-center justify-center p-2"
                  >
                    <Image
                      src={project.images[selectedImageIdx].url}
                      alt={project.images[selectedImageIdx].caption}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 850px"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="px-4 py-2.5 bg-portfolio-card/90 border-t border-portfolio-border text-xs font-mono text-portfolio-textSecondary">
                    {project.images[selectedImageIdx].caption}
                  </div>
                </div>

                {/* Thumbnail Selector */}
                {project.images.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIdx(idx)}
                        className={`relative flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden border transition-all ${
                          selectedImageIdx === idx
                            ? "border-portfolio-accent shadow-sm"
                            : "border-portfolio-border opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Deep-Dive Case Study Narrative */}
            <div className="space-y-6 pt-2 border-t border-portfolio-border">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-accent uppercase">
                  01. Overview
                </h4>
                <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-accent uppercase">
                  02. Problem Formulation
                </h4>
                <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-accent uppercase">
                  03. Microarchitecture
                </h4>
                <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-accent uppercase">
                  04. RTL Implementation &amp; Verification
                </h4>
                <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
                  {project.implementation}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-accent uppercase">
                  05. Synthesis, FPGA Results &amp; Timing
                </h4>
                <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

            {/* Technology Stack Pills */}
            <div className="space-y-2 pt-2 border-t border-portfolio-border">
              <h4 className="text-xs font-mono font-bold tracking-wider text-portfolio-textSecondary uppercase">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-portfolio-subtle text-portfolio-text border border-portfolio-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: GitHub & Reports */}
            <div className="pt-4 border-t border-portfolio-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio-text text-portfolio-bg hover:bg-portfolio-accent hover:text-black transition-colors text-xs font-mono font-semibold"
                >
                  <Github className="h-4 w-4" />
                  <span>View Repository</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-text text-xs font-mono font-semibold hover:text-portfolio-accent transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Reports Download */}
              <div className="flex flex-wrap items-center gap-2">
                {project.reports.map((report, idx) => (
                  <a
                    key={idx}
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-textSecondary hover:text-portfolio-text text-xs font-mono transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-portfolio-accent" />
                    <span>{report.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={fullscreenImage}
              alt="High Resolution Schematic"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

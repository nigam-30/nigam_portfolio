import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { Github } from "@/components/icons";
import { projectsData } from "@/data/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Nigam Mehta`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors py-1.5 px-3 rounded-lg bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/50"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 pb-8 border-b border-portfolio-border">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="text-portfolio-accent font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            {project.secondaryLabel && (
              <>
                <span className="text-portfolio-border">•</span>
                <span className="px-2 py-0.5 rounded bg-portfolio-subtle text-portfolio-text font-medium border border-portfolio-border">
                  {project.secondaryLabel}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-portfolio-textSecondary leading-relaxed max-w-4xl font-normal">
            {project.shortDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-portfolio-text text-portfolio-bg font-mono text-xs font-semibold hover:bg-portfolio-accent hover:text-black transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-text text-xs font-mono font-medium hover:text-portfolio-accent transition-colors"
              >
                <span>Live Application</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {project.reports.map((report, idx) => (
              <a
                key={idx}
                href={report.localUrl || report.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-portfolio-textSecondary hover:text-portfolio-text text-xs font-mono transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-portfolio-accent" />
                <span>{report.label}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Hardware Specifications Table */}
        {project.specs && project.specs.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-portfolio-border">
              <h2 className="text-xs font-mono font-bold tracking-widest text-portfolio-accent uppercase">
                ENGINEERING SPECIFICATIONS &amp; PARAMETERS
              </h2>
              <span className="text-[11px] font-mono text-portfolio-textSecondary">
                Synthesized Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {project.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-portfolio-card border border-portfolio-border space-y-1"
                >
                  <span className="text-[11px] font-mono text-portfolio-textSecondary block">
                    {spec.label}
                  </span>
                  <span className="text-sm font-mono font-semibold text-portfolio-text block truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-portfolio-accent uppercase">
            TECHNOLOGY STACK
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-mono bg-portfolio-card text-portfolio-text border border-portfolio-border"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Deep Dive */}
        <div className="space-y-12 pt-4 border-t border-portfolio-border">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-portfolio-text">
              1. Overview
            </h2>
            <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-portfolio-text">
              2. Problem Formulation
            </h2>
            <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-portfolio-text">
              3. Microarchitecture
            </h2>
            <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
              {project.architecture}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-portfolio-text">
              4. RTL Implementation &amp; Verification
            </h2>
            <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
              {project.implementation}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-portfolio-text">
              5. Synthesis, FPGA Results &amp; Timing
            </h2>
            <p className="text-sm sm:text-base text-portfolio-textSecondary leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        {/* Technical Evidence & Diagrams */}
        {project.technicalSections && project.technicalSections.length > 0 && (
          <div className="space-y-10 pt-8 border-t border-portfolio-border">
            <div className="space-y-1">
              <h2 className="text-xs font-mono font-bold tracking-widest text-portfolio-accent uppercase">
                TECHNICAL EVIDENCE &amp; SCHEMATICS
              </h2>
              <p className="text-xl font-bold text-portfolio-text">
                RTL Schematics, Waveforms &amp; Implementation Artifacts
              </p>
            </div>

            <div className="space-y-10">
              {project.technicalSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-portfolio-card border border-portfolio-border overflow-hidden space-y-4 p-6 sm:p-8"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-portfolio-text">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-portfolio-textSecondary leading-relaxed">
                      {sec.content}
                    </p>
                  </div>

                  {sec.image && (
                    <div className="space-y-2 pt-2">
                      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-black border border-portfolio-border flex items-center justify-center p-2">
                        <Image
                          src={sec.image.url}
                          alt={sec.image.caption}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 850px"
                        />
                      </div>
                      <p className="text-xs font-mono text-portfolio-textSecondary text-center">
                        {sec.image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documentation & Reports Footer Bar */}
        <div className="p-8 rounded-2xl bg-portfolio-card border border-portfolio-border space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-portfolio-border">
            <div>
              <h3 className="text-base font-bold text-portfolio-text">
                Verified Technical Reports
              </h3>
              <p className="text-xs text-portfolio-textSecondary font-mono mt-0.5">
                Authentic academic &amp; synthesis documentation
              </p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-accent hover:underline"
            >
              <span>View GitHub Source Code</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.reports.map((report, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-portfolio-subtle border border-portfolio-border space-y-3"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-portfolio-text block">
                    {report.label}
                  </span>
                  <span className="text-[11px] font-mono text-portfolio-textSecondary block">
                    {report.filename}
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={report.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-accent hover:underline"
                  >
                    <span>GitHub PDF</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-portfolio-border">•</span>
                  <a
                    href={report.localUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-text"
                  >
                    <span>Direct Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowDown, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "mehtanigam3024@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-3 text-center">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            05 — LET&apos;S CONNECT
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text">
            Interested in digital hardware, <br className="hidden sm:inline" />
            VLSI or intelligent systems?
          </h2>
          <p className="text-base sm:text-lg text-portfolio-textSecondary pt-1 max-w-xl mx-auto leading-relaxed">
            Open for opportunities in RTL design, FPGA engineering, ASIC verification, and digital hardware architectures.
          </p>
        </div>

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-portfolio-card border border-portfolio-border shadow-card space-y-8">
          {/* Direct Email Header */}
          <div className="text-center space-y-4 pb-8 border-b border-portfolio-border">
            <span className="text-xs font-mono text-portfolio-accent uppercase tracking-wider block font-semibold">
              PRIMARY COMMUNICATION CHANNEL
            </span>
            <a
              href={`mailto:${emailAddress}?subject=Engineering%20Inquiry%20%E2%80%94%20Nigam%20Mehta`}
              className="text-2xl sm:text-4xl font-bold font-mono text-portfolio-text hover:text-portfolio-accent transition-colors block break-all"
            >
              {emailAddress}
            </a>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${emailAddress}?subject=Engineering%20Inquiry%20%E2%80%94%20Nigam%20Mehta`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-portfolio-accent text-black font-semibold text-xs font-mono hover:bg-portfolio-accentHover transition-colors shadow-sm"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Email</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-subtle hover:bg-portfolio-card text-portfolio-text text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-portfolio-textSecondary" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social CTA Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/nigam-30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-subtle hover:bg-portfolio-card text-portfolio-text hover:text-portfolio-accent text-sm font-mono font-medium transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-subtle hover:bg-portfolio-card text-portfolio-text hover:text-portfolio-accent text-sm font-mono font-medium transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn ↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-portfolio-text text-portfolio-bg hover:bg-portfolio-accent hover:text-black text-sm font-mono font-semibold transition-colors"
            >
              <span>Download Resume</span>
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Hardware & Engineering Telemetry Footnote */}
          <div className="pt-6 border-t border-portfolio-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-xs text-portfolio-textSecondary">
            <div className="p-3 rounded-lg bg-portfolio-subtle/50 border border-portfolio-border/60">
              <span className="text-portfolio-textMuted block text-[10px] uppercase">Location</span>
              <span className="text-portfolio-text font-medium">Mumbai, India</span>
            </div>
            <div className="p-3 rounded-lg bg-portfolio-subtle/50 border border-portfolio-border/60">
              <span className="text-portfolio-textMuted block text-[10px] uppercase">Availability</span>
              <span className="text-emerald-400 font-medium flex items-center justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
            </div>
            <div className="p-3 rounded-lg bg-portfolio-subtle/50 border border-portfolio-border/60">
              <span className="text-portfolio-textMuted block text-[10px] uppercase">Response Latency</span>
              <span className="text-portfolio-text font-medium">&lt; 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

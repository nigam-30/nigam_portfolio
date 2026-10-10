"use client";

import { useState } from "react";
import { ArrowDown, Mail, ExternalLink, Copy, Check, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Network error. Please email directly."
      );
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

          {/* Contact Message Form */}
          <div className="pt-8 border-t border-portfolio-border space-y-5">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono text-portfolio-accent uppercase tracking-wider block font-semibold">
                SEND A MESSAGE DIRECTLY
              </span>
              <p className="text-xs text-portfolio-textSecondary">
                Drop your message below — it forwards straight to my personal inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-portfolio-textSecondary mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder:text-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-portfolio-textSecondary mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder:text-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-portfolio-textSecondary mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Share details about roles, hardware projects, or inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder:text-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <span className="text-xs font-mono text-portfolio-textSecondary">
                  Expected reply: &lt; 24 hours
                </span>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-portfolio-accent text-black font-semibold text-xs font-mono hover:bg-portfolio-accentHover transition-colors shadow-sm disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Message sent successfully! It has been dispatched to my inbox.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
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

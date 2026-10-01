"use client";

import { useState } from "react";
import { ArrowDown, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Failed to send message. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please email me directly at mehtanigam3024@gmail.com");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2 text-center">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            05 — LET&apos;S BUILD
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-portfolio-text">
            Interested in digital hardware, <br className="hidden sm:inline" />
            VLSI or intelligent systems?
          </h2>
          <p className="text-base sm:text-lg text-portfolio-textSecondary pt-2 max-w-xl mx-auto">
            Let&apos;s connect. I am actively seeking engineering internships and full-time roles in
            digital IC design, RTL implementation, and FPGA verification.
          </p>
        </div>

        {/* Primary Contact Options */}
        <div className="p-8 sm:p-10 rounded-2xl bg-portfolio-card border border-portfolio-border shadow-card space-y-8">
          {/* Direct Email Header */}
          <div className="text-center space-y-3 pb-6 border-b border-portfolio-border">
            <span className="text-xs font-mono text-portfolio-textSecondary uppercase tracking-wider block">
              Direct Contact Channel
            </span>
            <a
              href="mailto:mehtanigam3024@gmail.com"
              className="text-xl sm:text-3xl font-bold font-mono text-portfolio-text hover:text-portfolio-accent transition-colors block break-all"
            >
              mehtanigam3024@gmail.com
            </a>
          </div>

          {/* Social CTA Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/nigam-30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-subtle/60 hover:bg-portfolio-subtle text-portfolio-text hover:text-portfolio-accent text-sm font-mono font-medium transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-portfolio-border hover:border-portfolio-accent bg-portfolio-subtle/60 hover:bg-portfolio-subtle text-portfolio-text hover:text-portfolio-accent text-sm font-mono font-medium transition-colors"
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

          {/* Clean Message Form */}
          <div className="pt-6 border-t border-portfolio-border space-y-4">
            <span className="text-xs font-mono text-portfolio-textSecondary uppercase tracking-wider block text-center">
              Or Send a Quick Message
            </span>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none transition-colors"
                />
              </div>

              <textarea
                placeholder="Message (inquiries, collaborations, opportunities)..."
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-portfolio-subtle border border-portfolio-border text-portfolio-text placeholder-portfolio-textMuted text-sm font-sans focus:border-portfolio-accent focus:outline-none transition-colors resize-none"
              />

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-portfolio-textSecondary">
                  Response latency: ~24 hours
                </span>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-portfolio-accent text-black font-semibold text-xs font-mono hover:bg-portfolio-accentHover transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Message delivered successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

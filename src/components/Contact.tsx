"use client";

import { motion } from "framer-motion";
import { Mail, Radio } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8 relative">
      {/* Wafer Grid Layer */}
      <div className="absolute inset-0 wafer-grid pointer-events-none opacity-25" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="06 // I/O_INTERRUPT"
          title="Get In Touch"
          subtitle="Want to discuss a project, job opening, or academic collaboration? Let's connect."
          badge="PORT_OPEN"
        />

        {/* Contact Centered Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-portfolio-card border border-portfolio-primary/25 rounded-2xl p-8 sm:p-10 shadow-glow hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col items-center text-center space-y-8 relative overflow-hidden"
        >
          {/* Top Pinout Strip */}
          <div className="w-full flex items-center justify-between pb-3 border-b border-portfolio-primary/15 font-mono text-[10px] text-portfolio-textSecondary">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Radio className="h-3.5 w-3.5 text-[#06B6D4] animate-pulse" />
              <span>TRANSMITTER_ONLINE</span>
            </span>
            <span className="text-emerald-400">LATENCY: ~24HR</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-portfolio-text font-sans">
              Contact Channels
            </h3>
            <p className="text-portfolio-textSecondary text-sm sm:text-base leading-relaxed max-w-md">
              Feel free to email me directly or explore my developer contributions on LinkedIn and GitHub.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-md font-mono">
            <a
              href="mailto:mehtanigam3024@gmail.com"
              className="flex items-center justify-center gap-4 text-portfolio-textSecondary hover:text-portfolio-cyan transition-colors duration-200 group w-full bg-[#070b16]/70 p-3 rounded-xl border border-portfolio-primary/20 hover:border-portfolio-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <div className="h-9 w-9 rounded-lg bg-portfolio-primary/15 flex items-center justify-center border border-portfolio-primary/30 group-hover:bg-[#06B6D4] group-hover:text-black transition-all duration-200 flex-shrink-0">
                <Mail className="h-4 w-4 text-portfolio-cyan group-hover:text-inherit" />
              </div>
              <span className="text-xs sm:text-sm font-semibold group-hover:text-portfolio-text truncate">
                mehtanigam3024@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/nigam-30"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 text-portfolio-textSecondary hover:text-portfolio-cyan transition-colors duration-200 group w-full bg-[#070b16]/70 p-3 rounded-xl border border-portfolio-primary/20 hover:border-portfolio-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <div className="h-9 w-9 rounded-lg bg-portfolio-primary/15 flex items-center justify-center border border-portfolio-primary/30 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-200 flex-shrink-0">
                <Github className="h-4 w-4 text-[#8B5CF6] group-hover:text-inherit" />
              </div>
              <span className="text-xs sm:text-sm font-semibold group-hover:text-portfolio-text truncate">
                github.com/nigam-30
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 text-portfolio-textSecondary hover:text-portfolio-cyan transition-colors duration-200 group w-full bg-[#070b16]/70 p-3 rounded-xl border border-portfolio-primary/20 hover:border-portfolio-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <div className="h-9 w-9 rounded-lg bg-portfolio-primary/15 flex items-center justify-center border border-portfolio-primary/30 group-hover:bg-[#06B6D4] group-hover:text-black transition-all duration-200 flex-shrink-0">
                <Linkedin className="h-4 w-4 text-portfolio-cyan group-hover:text-inherit" />
              </div>
              <span className="text-xs sm:text-sm font-semibold group-hover:text-portfolio-text truncate">
                linkedin.com/in/nigam-mehta-83830528b/
              </span>
            </a>
          </div>

          <div className="text-xs font-mono text-portfolio-textSecondary border-t border-portfolio-primary/10 pt-4 w-full flex items-center justify-between">
            <span>LOC: MUMBAI, INDIA</span>
            <span className="text-cyan-400">STATUS: OPEN FOR ROLES</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Github, Linkedin } from "@/components/icons";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1.5 text-portfolio-text font-mono font-bold text-base hover:text-portfolio-accent transition-colors"
          >
            <span>NM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent" />
          </a>
          <span className="text-portfolio-border">|</span>
          <span className="text-xs font-mono text-portfolio-textSecondary">
            VLSI Design &amp; Technology
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs font-mono text-portfolio-textSecondary text-center sm:text-left">
          &copy; {currentYear} Nigam Mehta · Built with Next.js &amp; Tailwind CSS
        </p>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-5 text-portfolio-textSecondary">
          <a
            href="https://github.com/nigam-30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-portfolio-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:mehtanigam3024@gmail.com"
            className="hover:text-portfolio-accent transition-colors"
            aria-label="Send Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <span className="text-portfolio-border">|</span>
          <a
            href="#"
            className="text-xs font-mono hover:text-portfolio-accent transition-colors flex items-center gap-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

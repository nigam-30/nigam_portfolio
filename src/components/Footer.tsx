import { Cpu, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-bg border-t border-portfolio-primary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-2 text-portfolio-text">
          <Cpu className="h-5 w-5 text-portfolio-primary" />
          <span className="font-bold text-lg tracking-wider font-mono">
            NM<span className="text-portfolio-primary">.</span>
          </span>
        </div>

        {/* Text */}
        <p className="text-xs sm:text-sm text-portfolio-textSecondary text-center md:text-left">
          &copy; {currentYear} Nigam Mehta. All rights reserved. Built with Next.js 14, Tailwind CSS, and Framer Motion.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nigam-30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-textSecondary hover:text-portfolio-primary transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nigam-mehta-83830528b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-textSecondary hover:text-portfolio-primary transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:mehtanigam3024@gmail.com"
            className="text-portfolio-textSecondary hover:text-portfolio-primary transition-colors duration-200"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

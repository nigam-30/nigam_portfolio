"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowDown, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const sections = ["contact", "experience", "skills", "work", "about"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-bg/90 backdrop-blur-md py-3.5 border-b border-portfolio-border shadow-subtle"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name: Minimal NM with electric dot */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 group"
            aria-label="Nigam Mehta - Home"
          >
            <span className="font-mono font-bold text-xl tracking-tight">NM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent transition-transform duration-200 group-hover:scale-125" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-portfolio-accent font-medium"
                      : "text-portfolio-textSecondary hover:text-portfolio-text"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-portfolio-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme Toggle & Resume Link */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-portfolio-textSecondary hover:text-portfolio-text hover:bg-portfolio-subtle transition-all duration-200 border border-transparent hover:border-portfolio-border"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-portfolio-textSecondary hover:text-amber-400 transition-colors" />
              ) : (
                <Moon className="h-4 w-4 text-portfolio-textSecondary hover:text-portfolio-accent transition-colors" />
              )}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-xs font-mono font-medium text-portfolio-text hover:text-portfolio-accent bg-portfolio-card/50 hover:bg-portfolio-card transition-all duration-200 shadow-sm"
            >
              <span>Resume</span>
              <ArrowDown className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-portfolio-textSecondary hover:text-portfolio-text"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 p-2 rounded-md"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-portfolio-bg/95 backdrop-blur-xl border-b border-portfolio-border overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base tracking-wide transition-colors ${
                      isActive
                        ? "text-portfolio-accent bg-portfolio-subtle font-medium"
                        : "text-portfolio-textSecondary hover:text-portfolio-text hover:bg-portfolio-subtle/50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-portfolio-border">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-portfolio-card border border-portfolio-border text-portfolio-text text-sm font-mono font-medium hover:border-portfolio-accent"
                >
                  <span>Resume</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

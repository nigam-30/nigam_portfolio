"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ChevronUp, ExternalLink, X, Eye } from "lucide-react";
import Image from "next/image";

interface CertItem {
  title: string;
  issuer: string;
  image: string;
  featured?: boolean;
}

const certifications: CertItem[] = [
  {
    title: "Data Analytics Essentials",
    issuer: "CISCO Networking Academy",
    image: "/certificates/Data Analytics Essentials CISCO.jpg",
    featured: true,
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Artificial Intelligence Fundamentals IBM SKILLSBUILD.jpg",
    featured: true,
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Electronic Arts (Forage)",
    image: "/certificates/Software Engineering Job Simulation ELECTRONICS ART.jpg",
    featured: true,
  },
  {
    title: "Fundamentals of Cryptography",
    issuer: "Infosys Springboard",
    image: "/certificates/Fundamentals Of Cryptography INFOSYS SPRINGBOARD.jpg",
    featured: true,
  },
  {
    title: "EV Engineering Intro Job Simulation",
    issuer: "Ford (Forage)",
    image: "/certificates/EV Engineering Intro Job Simulation FORD .jpg",
    featured: true,
  },
  {
    title: "Python Essentials 1",
    issuer: "CISCO × Python Institute",
    image: "/certificates/Python Essentials 1 CISCO X PYTHON INSTITUTE.jpg",
    featured: true,
  },
  {
    title: "Generative AI in Action",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Generative AI in Action IBM SKILLS BUILD.jpg",
    featured: true,
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "CISCO Networking Academy",
    image: "/certificates/Introduction To CyberSecurity CISCO.jpg",
    featured: true,
  },
  {
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    image: "/certificates/Fundamentals Of Information Security INFOSYS SPRINGBOARD.jpg",
  },
  {
    title: "Prompt Engineering",
    issuer: "Cognitive Class by IBM",
    image: "/certificates/Prompt Engineering COGNITIVE CLASS BY IBM DEVELOPER SKIILS NETWORK.jpg",
  },
  {
    title: "Network Fundamentals",
    issuer: "Infosys Springboard",
    image: "/certificates/Network Fundamentals Infosys Springboard .jpg",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Quantium (Forage)",
    image: "/certificates/Data Analytics Job Simulation Quantium.jpg",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata (Forage)",
    image: "/certificates/Gen AI Powered Data Analytics Job Simulation TATA.jpg",
  },
  {
    title: "Data Visualisation Job Simulation",
    issuer: "Tata (Forage)",
    image: "/certificates/Data Visualisation Job Simulation TATA.jpg",
  },
  {
    title: "Developer and Technology Job Simulation",
    issuer: "Accenture (Forage)",
    image: "/certificates/Developer And Technology Job Simulation ACCENTURE.jpg",
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Cyber Security Fundamentals IBM SKILLSBUILD.jpg",
  },
  {
    title: "Programming Essentials in C",
    issuer: "C++ Institute",
    image: "/certificates/Programming Essesntials In C C++ Institute.jpg",
  },
  {
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    image: "/certificates/C Programming Course INFOSYS SPRINGBAORD.jpg",
  },
  {
    title: "C++ Fundamentals",
    issuer: "Infosys Springboard",
    image: "/certificates/C++ Fundamentals INFOSYS SPRINGBOARD.jpg",
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [activeCert, setActiveCert] = useState<CertItem | null>(null);

  const displayedCerts = showAll ? certifications : certifications.slice(0, 8);

  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            CREDENTIALS &amp; CONTINUING EDUCATION
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
              Verified certifications.
            </h2>
            <p className="text-xs font-mono text-portfolio-textSecondary">
              Cisco · IBM · Infosys · Forage Industry Simulators
            </p>
          </div>
        </div>

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedCerts.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCert(cert)}
              className="p-5 rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-card hover:shadow-card-hover group cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-portfolio-accent uppercase truncate block">
                    {cert.issuer}
                  </span>
                  <Award className="h-4 w-4 text-portfolio-textSecondary group-hover:text-portfolio-accent transition-colors flex-shrink-0" />
                </div>
                <h3 className="text-sm font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-portfolio-border flex items-center justify-between text-xs font-mono text-portfolio-textSecondary">
                <span className="group-hover:text-portfolio-text transition-colors flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>Preview</span>
                </span>
                <span className="text-emerald-400 text-[10px]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* "+ 11 MORE" Toggle Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-portfolio-border hover:border-portfolio-accent text-xs font-mono font-medium text-portfolio-text hover:text-portfolio-accent bg-portfolio-card transition-all"
          >
            <span>{showAll ? "Show Less" : `+ ${certifications.length - 8} More Certifications`}</span>
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-portfolio-card border border-portfolio-border rounded-2xl overflow-hidden shadow-card z-10 p-5 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-portfolio-border pb-3">
                <div>
                  <h3 className="text-base font-bold text-portfolio-text">
                    {activeCert.title}
                  </h3>
                  <p className="text-xs font-mono text-portfolio-accent">
                    {activeCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1 rounded-md text-portfolio-textSecondary hover:text-portfolio-text"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-portfolio-border">
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 650px"
                />
              </div>

              <div className="flex items-center justify-end pt-2 border-t border-portfolio-border">
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-portfolio-accent hover:underline"
                >
                  <span>Open Full Size Image</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

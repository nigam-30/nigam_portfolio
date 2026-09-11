"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import CircuitSectionHeader from "@/components/CircuitSectionHeader";

interface CertificationItem {
  title: string;
  issuer: string;
  image: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Cyber Security Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Cyber Security Fundamentals IBM SKILLSBUILD.jpg",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "CISCO Networking Academy",
    image: "/certificates/Data Analytics Essentials CISCO.jpg",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Electronic Arts (Forage)",
    image: "/certificates/Software Engineering Job Simulation ELECTRONICS ART.jpg",
  },
  {
    title: "EV Engineering Intro Job Simulation",
    issuer: "Ford (Forage)",
    image: "/certificates/EV Engineering Intro Job Simulation FORD .jpg",
  },
  {
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    image: "/certificates/Fundamentals Of Information Security INFOSYS SPRINGBOARD.jpg",
  },
  {
    title: "Fundamentals of Cryptography",
    issuer: "Infosys Springboard",
    image: "/certificates/Fundamentals Of Cryptography INFOSYS SPRINGBOARD.jpg",
  },
  {
    title: "Generative AI in Action",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Generative AI in Action IBM SKILLS BUILD.jpg",
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "CISCO Networking Academy",
    image: "/certificates/Introduction To CyberSecurity CISCO.jpg",
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
    title: "Python Essentials 1",
    issuer: "CISCO × Python Institute",
    image: "/certificates/Python Essentials 1 CISCO X PYTHON INSTITUTE.jpg",
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
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/certificates/Artificial Intelligence Fundamentals IBM SKILLSBUILD.jpg",
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
  const visibleCertifications = showAll ? certifications : certifications.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-portfolio-bg px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Heading */}
        <CircuitSectionHeader
          moduleNumber="05 // CERT_ROM_INDEX"
          title="Certifications"
          subtitle="Credentials validating my technical expertise and continuing professional development."
          badge="VERIFIED"
        />

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {visibleCertifications.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-portfolio-card border border-portfolio-primary/20 hover:border-portfolio-primary/50 rounded-xl p-5 flex flex-col justify-between group shadow-glow hover:shadow-glow-hover will-change-transform transition-all duration-300"
            >
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-portfolio-text leading-snug group-hover:text-portfolio-primary transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-portfolio-primary/10">
                <a
                  href={encodeURI(cert.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-portfolio-primary hover:text-portfolio-primaryHover transition-colors duration-200"
                >
                  <span>View Certificate</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More / Show Less Toggle Button */}
        {certifications.length > 8 && (
          <div className="flex justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-lg bg-portfolio-card border border-portfolio-primary/30 hover:border-portfolio-primary text-portfolio-text hover:text-portfolio-primary text-sm font-semibold transition-all duration-200 shadow-glow flex items-center gap-2 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : `Show All (${certifications.length})`}</span>
              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

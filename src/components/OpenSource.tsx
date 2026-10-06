"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";

interface RepoItem {
  name: string;
  url: string;
  description: string;
  language: string;
  langColor: string;
}

const repos: RepoItem[] = [
  {
    name: "Design-of-a-Modular-Digital-Data-Monitoring-Unit",
    url: "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit",
    description:
      "Design of a Modular Digital Data Monitoring Unit with Moore FSM, AMBA APB4 slave interface, and Python AutoArchitect synthesis flow.",
    language: "Verilog",
    langColor: "#84b6d4",
  },
  {
    name: "pipelined_processor",
    url: "https://github.com/nigam-30/pipelined_processor",
    description:
      "Synthesizable 8-bit RISC processor with 3-stage pipeline (Fetch, Decode, Execute), hazard detection unit, and Vivado XSim verification.",
    language: "Verilog",
    langColor: "#84b6d4",
  },
  {
    name: "entropyx",
    url: "https://github.com/nigam-30/entropyx",
    description:
      "Cryptographic suite with native C++14 microservice (>400k ops/sec), 2M-bit Bloom filter deduplication, and zero-knowledge AES-256-GCM vault.",
    language: "C++ / React",
    langColor: "#f34b7d",
  },
  {
    name: "Credence-Core",
    url: "https://github.com/nigam-30/Credence-Core",
    description:
      "Institutional-grade digital banking and wealth terminal powered by a C++20 core algorithmic engine, IPC process pipes, and Python Flask REST middleware.",
    language: "C++ / Python",
    langColor: "#3572A5",
  },
  {
    name: "Rail-Nova",
    url: "https://github.com/nigam-30/Rail-Nova",
    description:
      "Production-grade Indian railway reservation web simulator in FastAPI with 417k+ stoppage records, WebSockets, and JWT auth.",
    language: "Python",
    langColor: "#3572A5",
  },
  {
    name: "Telecom_Churn_Analysis",
    url: "https://github.com/nigam-30/Telecom_Churn_Analysis",
    description:
      "End-to-end data analytics and predictive ML pipeline with SMOTE oversampling, Random Forest, and SHAP TreeExplainer.",
    language: "Python / SQL",
    langColor: "#3572A5",
  },
];

export default function OpenSource() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
              OPEN SOURCE REPOSITORIES
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-portfolio-text flex items-center gap-2.5">
              <span>GitHub</span>
              <a
                href="https://github.com/nigam-30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-normal text-portfolio-accent hover:underline flex items-center gap-1"
              >
                <span>@nigam-30</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </h2>
          </div>
          <a
            href="https://github.com/nigam-30?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-portfolio-textSecondary hover:text-portfolio-accent transition-colors flex items-center gap-1"
          >
            <span>View all public repositories</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-card hover:shadow-card-hover group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-portfolio-textSecondary">
                    <FolderGit2 className="h-4 w-4 text-portfolio-accent" />
                    <span className="truncate max-w-[200px]">nigam-30</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-portfolio-textSecondary group-hover:text-portfolio-accent transition-colors" />
                </div>

                <h3 className="text-sm font-bold font-mono text-portfolio-text group-hover:text-portfolio-accent transition-colors break-words">
                  {repo.name}
                </h3>

                <p className="text-xs text-portfolio-textSecondary leading-relaxed line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-portfolio-border flex items-center justify-between text-xs font-mono text-portfolio-textSecondary">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </span>
                <span className="text-portfolio-textSecondary/70 text-[11px]">MIT / Public</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

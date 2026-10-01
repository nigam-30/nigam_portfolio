"use client";

interface BuildingItem {
  area: string;
  focus: string;
  description: string;
  tech: string[];
}

const buildingTracks: BuildingItem[] = [
  {
    area: "ASIC Verification",
    focus: "SystemVerilog / UVM Methodologies",
    description:
      "Deepening constrained-random stimulus generation, functional coverage models, SVA (SystemVerilog Assertions), and building reusable UVM testbench architectures for bus-centric IP blocks.",
    tech: ["SystemVerilog", "UVM", "SVA Assertions", "Coverage Closure"],
  },
  {
    area: "AI Hardware",
    focus: "Accelerator Architectures & Dataflows",
    description:
      "Studying systolic array topologies, weight-stationary vs. output-stationary dataflows, and quantized integer arithmetic (INT8/FP8) matrix multiplication units for edge AI inference.",
    tech: ["Systolic Arrays", "Quantized Compute", "Edge AI", "Dataflow Optimization"],
  },
  {
    area: "RTL Automation",
    focus: "AutoArchitect & Scripted EDA Toolchains",
    description:
      "Extending Python-based toolchains that automate open-source Yosys logic synthesis, generate SVG visual schematics, and auto-generate synthesizable AMBA register wrappers.",
    tech: ["Python", "Yosys", "NetlistSVG", "RTL Scripting"],
  },
  {
    area: "FPGA Systems",
    focus: "Xilinx Vivado Hardware Prototyping",
    description:
      "Designing complex multi-cycle controller datapaths on Spartan-7 / Artix-7 silicon, closing critical timing paths, and exploring High-Level Synthesis (HLS) design trade-offs.",
    tech: ["Xilinx Vivado", "Spartan-7", "Static Timing Analysis", "XDC Constraints"],
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
            04 — CURRENTLY BUILDING
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-portfolio-text">
              Active engineering investigations &amp; research directions.
            </h2>
            <p className="text-xs font-mono text-portfolio-textSecondary">
              Hardware R&amp;D Roadmap
            </p>
          </div>
        </div>

        {/* 4-Track Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buildingTracks.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-all duration-300 space-y-4 shadow-card group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-portfolio-border">
                <span className="text-xs font-mono font-bold text-portfolio-accent tracking-wider uppercase">
                  TRACK 0{idx + 1} &middot; {item.area}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                  {item.focus}
                </h3>
                <p className="text-sm text-portfolio-textSecondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolio-subtle text-portfolio-textSecondary border border-portfolio-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

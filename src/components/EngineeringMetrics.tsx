"use client";

interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

const metrics: MetricItem[] = [
  {
    value: "8-bit",
    label: "Processor Core",
    detail: "Custom RISC Instruction Set",
  },
  {
    value: "3-stage",
    label: "Pipeline",
    detail: "Fetch, Decode, Execute Stages",
  },
  {
    value: "100 MHz",
    label: "Clock Constraint",
    detail: "10 ns cycle-accurate timing",
  },
  {
    value: "95",
    label: "Slice LUTs",
    detail: "1.19% Spartan-7 utilization",
  },
  {
    value: "104",
    label: "Slice Registers",
    detail: "0.65% Spartan-7 fabric",
  },
  {
    value: "+5.123 ns",
    label: "Timing Margin (WNS)",
    detail: "Zero TNS / Timing closed",
  },
  {
    value: "APB4",
    label: "Bus Protocol",
    detail: "5 Memory-Mapped Registers",
  },
  {
    value: "52",
    label: "Monitor Core LUTs",
    detail: "Post-synthesis SoC IP size",
  },
];

export default function EngineeringMetrics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-card/30 border-y border-portfolio-border relative">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono font-medium tracking-widest text-portfolio-accent uppercase">
              MEASURABLE EVIDENCE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-text mt-1">
              Engineering Snapshot
            </h2>
          </div>
          <p className="text-xs font-mono text-portfolio-textSecondary">
            Verified synthesis &amp; timing figures from Xilinx Vivado reports
          </p>
        </div>

        {/* 8-metric grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-portfolio-card border border-portfolio-border hover:border-portfolio-accent/40 transition-colors space-y-2 group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                {item.value}
              </div>
              <div>
                <div className="text-sm font-semibold text-portfolio-text">
                  {item.label}
                </div>
                <div className="text-xs text-portfolio-textSecondary font-mono mt-0.5">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface ProjectReport {
  label: string;
  filename: string;
  githubUrl: string;
  localUrl: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectTechnicalSection {
  title: string;
  content: string;
  image?: {
    url: string;
    caption: string;
  };
}

export interface Project {
  id: string;
  title: string;
  secondaryLabel?: string;
  category: "HARDWARE / VLSI" | "SYSTEMS & SOFTWARE" | "SYSTEMS & FINTECH" | "DATA & ML";
  shortDescription: string;
  stack: string[];
  specs?: ProjectSpec[];
  overview: string;
  problem: string;
  architecture: string;
  implementation: string;
  results: string;
  technicalSections?: ProjectTechnicalSection[];
  github: string;
  liveDemo?: string;
  reports: ProjectReport[];
}

export const projectsData: Project[] = [
  {
    id: "design-of-a-modular-digital-data-monitoring-unit",
    title: "Design of a Modular Digital Data Monitoring Unit",
    category: "HARDWARE / VLSI",
    shortDescription:
      "A synthesizable 8-bit digital monitoring IP in Verilog HDL engineered for real-time sensor anomaly detection without CPU polling overhead. Features a 3-state Moore FSM (IDLE, ALARM, COOLDOWN), configurable signed/unsigned threshold comparators, sticky alarm assertion, and a fault-value capture register. Integrated with an AMBA APB4 memory-mapped slave interface for microprocessor control and verified on Xilinx Spartan-7 FPGA at 100 MHz (+6.720 ns WNS) with timing closure in Xilinx Vivado.",
    stack: [
      "Verilog HDL",
      "AMBA APB4",
      "Moore FSM",
      "Xilinx Vivado",
      "Spartan-7 FPGA",
      "Vivado XSim",
    ],
    specs: [
      { label: "Architecture", value: "8-bit Modular Core" },
      { label: "Bus Protocol", value: "AMBA APB4 Slave" },
      { label: "Target Frequency", value: "100 MHz (10 ns)" },
      { label: "Worst Negative Slack", value: "+6.720 ns WNS" },
      { label: "Core Slice LUTs", value: "52 LUTs (<1%)" },
      { label: "Slice Registers", value: "23 Registers (<1%)" },
      { label: "Memory Registers", value: "5 Memory-Mapped Regs" },
      { label: "Target FPGA", value: "Xilinx Spartan-7" },
    ],
    overview:
      "The Digital Data Monitoring Unit is a modular RTL-based hardware monitoring IP designed to continuously monitor 8-bit sensor data and detect threshold violations in real time. Rather than relying on CPU software polling which risks missing transient microsecond spikes, the hardware IP provides continuous hardware-level event tracking, programmable threshold comparison, sticky alarm behavior, and immediate software acknowledgement.",
    problem:
      "Software polling in embedded systems can overlook rapid transient spikes when the CPU is servicing higher-priority interrupts or running heavy loops. Traditional alarms also lack diagnostics, as alerting that an anomaly occurred does not preserve the exact sensor value responsible. This IP addresses this by locking the offending reading into a dedicated fault capture register and asserting an immediate hardware-level alarm.",
    architecture:
      "Phase 1 established an 8-bit RTL core driven by a 3-state Moore Finite State Machine (IDLE, ALARM, COOLDOWN) featuring dual-mode (signed/unsigned) magnitude comparators, a sticky alarm register, and a fault-value latch. Phase 2 wrapped the core into an AMBA APB4 slave interface with 5 memory-mapped registers (0x00 CONTROL, 0x04 SENSOR_DATA, 0x08 THRESHOLD, 0x0C STATUS/ALARM, 0x10 FAULT_CAPTURE) allowing microprocessor configuration and software acknowledgement.",
    implementation:
      "Implemented in modular, synthesizable Verilog HDL. Verified through cycle-accurate testbenches covering bus read/write transfers across PCLK, PRESETn, PADDR, PWRITE, PSEL, PENABLE, PWDATA, PRDATA, and PREADY. Verified synthesis and timing implementation targeting Xilinx Spartan-7 fabric using Vivado Design Suite, extracting gate-level utilization and cell metrics.",
    results:
      "Synthesized and targeted to Xilinx Spartan-7 fabric. The complete APB4-wrapped peripheral utilizes only 52 Slice LUTs and 23 Slice Registers (<1% of Spartan-7 xc7s15). Timing analysis under a 100 MHz clock constraint (10 ns period) verified positive Worst Negative Slack of +6.720 ns and zero Total Negative Slack (TNS).",
    technicalSections: [
      {
        title: "Elaborated RTL Datapath & Bus Wrapper",
        content:
          "The top-level apb_demu_wrapper interfaces standard APB4 bus signals with the internal monitoring core. Address decoding maps CPU read/write operations to sensor, threshold, status, and control registers.",
        image: {
          url: "/projects/demu/demu-rtl-schematic.png",
          caption: "Elaborated RTL Schematic of apb_demu_wrapper",
        },
      },
      {
        title: "Synthesized Gate-Level FPGA Schematic",
        content:
          "Logic synthesis maps the Moore FSM, comparator trees, and APB4 registers directly onto Spartan-7 look-up tables and carry chains (CARRY4). Total post-synthesis utilization remains under 1% of the device.",
        image: {
          url: "/projects/demu/demu-synthesized-schematic.png",
          caption: "Synthesized Gate-Level Schematic (DEMU Core & APB4 Wrapper)",
        },
      },
      {
        title: "AMBA APB4 Behavioral Simulation Waveform",
        content:
          "Cycle-accurate behavioral simulation in Vivado XSim (0–265 ns) validating bus write transactions to set thresholds, sensor input tracking, alarm generation upon threshold violation, and CPU readback of captured fault values.",
        image: {
          url: "/projects/demu/demu-apb4-waveform.png",
          caption: "Vivado XSim Simulation of APB4 Bus Transactions & Event Triggering",
        },
      },
      {
        title: "Phase 1 Standalone Sensor Monitor Waveform",
        content:
          "Behavioral waveform verifying the 3-state Moore FSM transition from IDLE to ALARM upon threshold breach, holding sticky alarm status until explicit reset/acknowledgement.",
        image: {
          url: "/projects/demu/demu-phase1-waveform.png",
          caption: "Phase 1 Standalone Core Simulation Waveform",
        },
      },
    ],
    github:
      "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit",
    reports: [
      {
        label: "Digital Data Monitor Phase 1 Report",
        filename: "Digital_data_monitor_Phase_1_report.pdf",
        githubUrl:
          "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit/blob/main/Digital_data_monitor_Phase_1_report.pdf",
        localUrl: "/reports/Digital_data_monitor_Phase_1_report.pdf",
      },
      {
        label: "Digital Data Monitor Phase 2 Report",
        filename: "Digital_data_monitor_Phase_2_Report.pdf",
        githubUrl:
          "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit/blob/main/Digital_data_monitor_Phase_2_Report.pdf",
        localUrl: "/reports/Digital_data_monitor_Phase_2_Report.pdf",
      },
    ],
  },
  {
    id: "pipelined-processor",
    title: "8-bit Pipelined RISC Processor",
    secondaryLabel: "CPU Core",
    category: "HARDWARE / VLSI",
    shortDescription:
      "An 8-bit RISC processor implemented in synthesizable Verilog with a 3-stage Fetch–Decode–Execute pipeline and an 8-entry register file (R0 hardwired to zero). Features a hardware hazard detection unit for stall-based RAW dependency handling, automated pipeline flushing on HALT instructions, and stable LED outputs. Synthesized and verified on Xilinx Spartan-7 FPGA at a 100 MHz clock constraint with positive slack closure.",
    stack: [
      "Verilog HDL",
      "3-Stage Pipeline",
      "RISC Datapath",
      "Hazard Stall Logic",
      "Xilinx Vivado",
      "Vivado XSim",
      "Spartan-7 FPGA",
    ],
    specs: [
      { label: "Datapath Width", value: "8-bit Architecture" },
      { label: "Pipeline Depth", value: "3-Stage (IF → ID → EX)" },
      { label: "Target Frequency", value: "100 MHz (10 ns)" },
      { label: "Timing Slack (WNS)", value: "+5.123 ns (Zero TNS)" },
      { label: "FPGA LUTs", value: "95 Slice LUTs (1.19%)" },
      { label: "FPGA Registers", value: "104 Registers (0.65%)" },
      { label: "Register File", value: "8 × 8-bit (R0 hardwired 0)" },
      { label: "Instructions", value: "ADD, ADDI, SUB, SLL, HALT" },
    ],
    overview:
      "Designed an 8-bit Harvard-architecture RISC processor in synthesizable Verilog HDL. The processor pipeline consists of three synchronous stages: Instruction Fetch (IF), Instruction Decode / Operand Read (ID), and Execute / Writeback (EX), complete with an 8-entry register file, program counter, arithmetic logic unit, and hardware hazard mitigation.",
    problem:
      "Pipelined processors suffer from Read-After-Write (RAW) data hazards when an instruction depends on results computed by an immediately preceding instruction still in flight. Without proper hardware interlocks or forwarding, instructions consume stale operands, producing corrupted execution states.",
    architecture:
      "Implemented a 3-stage pipeline partitioned by IF/ID and ID/EX registers. Engineered a dedicated Hazard Detection Unit that monitors source register operands (Rs, Rd) against the active destination register in the execution stage. If a RAW dependency is identified, the hazard unit asserts a stall signal to freeze the Program Counter and IF/ID registers while inserting a bubble into the execution stage. An automated flush unit clears the pipeline upon decoding a HALT instruction.",
    implementation:
      "Constructed modular Verilog RTL files: top.v, alu.v, control.v, pc.v, reg_file.v, if_id_reg.v, and id_ex_reg.v. Register R0 is hardwired to 0, ensuring writes to R0 are ignored and reads always evaluate to zero. Verified cycle-accurate instruction stepping through Vivado XSim testbenches.",
    results:
      "Implemented on an AMD Xilinx Spartan-7 FPGA board. Post-implementation timing closure at 100 MHz (10 ns clock period) confirms a positive Worst Negative Slack of +5.123 ns and zero Total Negative Slack. Hardware resource consumption is minimal, requiring only 95 Slice LUTs (1.19%) and 104 Slice Registers (0.65%).",
    technicalSections: [
      {
        title: "Vivado XSim Cycle-Accurate Simulation Waveform",
        content:
          "Cycle-by-cycle verification of program execution demonstrating instruction fetch, decode, arithmetic computation (ADD, ADDI, SUB, SLL), stall insertion on RAW dependencies, and automated pipeline flushing on HALT.",
        image: {
          url: "/projects/processor/processor-waveform.png",
          caption: "Vivado XSim Behavioral Simulation Waveform",
        },
      },
      {
        title: "Elaborated RTL Datapath Schematic",
        content:
          "RTL elaboration detailing the program counter logic, instruction memory interface, pipeline staging registers, register file, and ALU interconnects.",
        image: {
          url: "/projects/processor/processor-rtl-schematic-left.png",
          caption: "Elaborated RTL Datapath Schematic",
        },
      },
      {
        title: "Synthesized Gate-Level FPGA Schematic",
        content:
          "Gate-level schematic following logic synthesis, showing mapped Spartan-7 LUTs and carry logic delivering 100 MHz timing closure.",
        image: {
          url: "/projects/processor/processor-synth-schematic.png",
          caption: "Synthesized Gate-Level FPGA Schematic",
        },
      },
    ],
    github: "https://github.com/nigam-30/pipelined_processor",
    reports: [
      {
        label: "Pipelined Processor Project Report",
        filename: "Pipelined_Processor_Project_Report.pdf",
        githubUrl:
          "https://github.com/nigam-30/pipelined_processor/blob/main/Pipelined_Processor_Project_Report.pdf",
        localUrl: "/reports/Pipelined_Processor_Project_Report.pdf",
      },
    ],
  },
  {
    id: "entropyx",
    title: "EntropyX — Cryptographic Suite & Vault",
    secondaryLabel: "Zero-Knowledge Vault",
    category: "SYSTEMS & SOFTWARE",
    shortDescription:
      "A dual-engine cryptographic suite combining a native C++14 microservice utilizing OS hardware entropy (CryptGenRandom) with a W3C Web Crypto fallback for edge environments. Implements a 2,000,000-bit Bloom filter (k = 7) backed by persistent SHA-256 indices to ensure zero duplicate password issuance, alongside Shannon entropy scoring. Includes a client-side zero-knowledge vault protected by PBKDF2 key derivation (100,000 iterations) and authenticated AES-256-GCM with volatile memory auto-locking.",
    stack: [
      "C++14",
      "CryptGenRandom",
      "React 19",
      "Tailwind CSS",
      "Web Crypto API",
      "AES-256-GCM",
      "PBKDF2",
      "Bloom Filter",
      "Vite",
    ],
    specs: [
      { label: "C++ Engine Speed", value: ">400,000 ops/sec" },
      { label: "Bloom Filter Capacity", value: "2,000,000 bits (k = 7)" },
      { label: "Key Derivation", value: "PBKDF2 (100,000 rounds)" },
      { label: "Vault Encryption", value: "AES-256-GCM Authenticated" },
    ],
    overview:
      "EntropyX is a security suite featuring a native C++14 cryptographic engine and a React 19 frontend with an integrated client-side zero-knowledge credential vault. It delivers hardware-grade CSPRNG entropy, algorithmic duplicate elimination, and tamper-proof credential storage.",
    problem:
      "Software pseudo-random number generators often suffer from modulo bias or predictable seeding. In addition, cloud-hosted credential vaults present high-value central targets for exfiltration, whereas zero-knowledge encryption ensures that cleartext credentials never touch network sockets or disks.",
    architecture:
      "Employs a dual-engine architecture: locally, a multi-threaded C++14 engine samples OS-level hardware entropy via CryptGenRandom with unbiased rejection sampling and Fisher-Yates shuffling (>400k ops/sec); in cloud deployment (Vercel), it transitions to the W3C Web Crypto CSPRNG API.",
    implementation:
      "Engineered a 2,000,000-bit Bloom Filter with 7 independent hash functions backed by SHA-256 indexing to mathematically prevent duplicate issuance. The client vault uses 100,000 PBKDF2 HMAC-SHA256 iterations with a 128-bit salt to derive the master key, encrypting records with AES-256-GCM. An in-memory security manager purges decrypted keys and credentials from RAM whenever the user navigates away.",
    results:
      "Eliminated duplicate password issuance across millions of simulation tests with sub-millisecond edge response times and zero plaintext leakage.",
    github: "https://github.com/nigam-30/entropyx",
    liveDemo: "https://entropyx-password-suite.vercel.app/",
    reports: [
      {
        label: "EntropyX Project Report",
        filename: "Entropyx_Project_Report.pdf",
        githubUrl:
          "https://github.com/nigam-30/entropyx/blob/main/Entropyx_Project_Report.pdf",
        localUrl: "/reports/Entropyx_Project_Report.pdf",
      },
    ],
  },
];

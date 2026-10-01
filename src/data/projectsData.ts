export interface ProjectReport {
  label: string;
  url: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectImage {
  caption: string;
  url: string;
  aspect?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  category: "Hardware / VLSI" | "Systems & Software" | "Data & ML";
  shortDescription: string;
  technicalAchievement: string;
  stack: string[];
  progression?: string[];
  specs?: ProjectSpec[];
  images?: ProjectImage[];
  overview: string;
  problem: string;
  architecture: string;
  implementation: string;
  results: string;
  github: string;
  liveDemo?: string;
  reports: ProjectReport[];
}

export const projectsData: Project[] = [
  {
    id: "digital-data-monitoring-unit",
    title: "Digital Data Monitoring Unit (DEMU)",
    subtitle: "RTL → APB4 → SoC IP",
    featured: true,
    category: "Hardware / VLSI",
    shortDescription:
      "A modular 8-bit digital event monitor engineered from a standalone Moore FSM hardware core into a fully synthesizable AMBA APB4 SoC IP with automated EDA pipelines.",
    technicalAchievement:
      "Achieved 100 MHz timing closure (+6.720 ns WNS) on Xilinx Spartan-7 fabric, consuming only 52 LUTs and 23 registers for the full bus-wrapped core.",
    stack: [
      "Verilog HDL",
      "AMBA APB4",
      "Moore FSM",
      "Xilinx Vivado",
      "Yosys Synthesis",
      "Python (AutoArchitect)",
      "SoC Integration",
    ],
    progression: [
      "PHASE 01: RTL MONITOR",
      "PHASE 02: APB4 SLAVE",
      "SOC-READY IP",
      "EDA / SYNTHESIS",
    ],
    specs: [
      { label: "Target Architecture", value: "8-bit Modular Core" },
      { label: "Bus Protocol", value: "AMBA APB4 Slave" },
      { label: "Target Frequency", value: "100 MHz (10 ns)" },
      { label: "Worst Negative Slack", value: "+6.720 ns WNS" },
      { label: "Core Slice LUTs", value: "52 LUTs (<1%)" },
      { label: "Slice Registers", value: "23 Registers (<1%)" },
      { label: "Memory Registers", value: "5 Memory-Mapped Regs" },
      { label: "EDA Tooling", value: "Vivado & Yosys" },
    ],
    images: [
      {
        caption: "Synthesized Gate-Level Schematic — DEMU Core & APB4 Wrapper",
        url: "/projects/demu/demu-synthesized-schematic.png",
      },
      {
        caption: "Elaborated RTL Datapath Schematic (apb_demu_wrapper)",
        url: "/projects/demu/demu-rtl-schematic.png",
      },
      {
        caption: "Cycle-Accurate AMBA APB4 Transaction Simulation Waveform (Vivado XSim)",
        url: "/projects/demu/demu-apb4-waveform.png",
      },
      {
        caption: "Phase 1 Behavioral Sensor Monitoring & Alarm Spike Waveform",
        url: "/projects/demu/demu-phase1-waveform.png",
      },
    ],
    overview:
      "The Digital Data Monitoring Unit (DEMU) is a modular, high-reliability silicon IP block designed to perform real-time monitoring of sensor signals and peripheral data buses. Instead of relying on CPU software polling which risks missing transient microsecond spikes, DEMU provides continuous hardware-level event tracking, programmable threshold comparison, and immediate interrupt assertion.",
    problem:
      "Standard microcontroller and embedded architectures typically poll analog/digital sensors in software loops or via timer interrupts. Fast transient spikes, signal glitches, and voltage out-of-range anomalies often settle before the CPU reads the bus, resulting in missed fault events. A pure hardware monitoring unit eliminates polling latency and guarantees deterministic detection.",
    architecture:
      "Phase 1 implemented an 8-bit RTL core featuring a robust 3-state Moore Finite State Machine (IDLE, ALARM, COOLDOWN), dual-mode (signed/unsigned) magnitude comparators, a sticky alarm register, and a dedicated fault capture latch. Phase 2 transformed the core into a drop-in SoC peripheral by wrapping it in an AMBA APB4 slave interface with 5 memory-mapped registers (0x00 CONTROL, 0x04 SENSOR_DATA, 0x08 THRESHOLD, 0x0C STATUS/ALARM, 0x10 FAULT_CAPTURE).",
    implementation:
      "Engineered in synthesizable Verilog HDL. Verified extensively with cycle-accurate testbenches modeling CPU write/read transactions across PCLK, PRESETn, PADDR, PWRITE, PSEL, PENABLE, PWDATA, PRDATA, and PREADY. Developed AutoArchitect, a Python-driven EDA pipeline that interfaces with open-source Yosys to automatically synthesize RTL, extract gate counts, and render NetlistSVG diagrams.",
    results:
      "Successfully mapped to Xilinx Spartan-7 (xc7s15ftgb196-1). The APB-wrapped core consumes only 52 Slice LUTs and 23 Slice Registers (<1% of device capacity). Timing analysis at 100 MHz (10 ns clock) yields a positive Worst Negative Slack of +6.720 ns and zero Total Negative Slack (TNS), confirming excellent timing margins.",
    github:
      "https://github.com/nigam-30/Design-of-a-Modular-Digital-Data-Monitoring-Unit",
    reports: [
      {
        label: "Digital Data Monitor Phase 1 Report",
        url: "/reports/Digital_data_monitor_Phase_1_report.pdf",
      },
      {
        label: "Digital Data Monitor Phase 2 Report",
        url: "/reports/Digital_data_monitor_Phase_2_Report.pdf",
      },
    ],
  },
  {
    id: "pipelined-processor",
    title: "8-bit Pipelined Processor",
    subtitle: "3-Stage RISC Architecture",
    featured: false,
    category: "Hardware / VLSI",
    shortDescription:
      "An 8-bit RISC processor with a 3-stage pipeline (Fetch, Decode, Execute), custom instruction set, hardware hazard detection unit, and verified FPGA implementation.",
    technicalAchievement:
      "Synthesized and mapped to Xilinx Spartan-7 at 100 MHz clock closure (+5.123 ns WNS) using only 95 LUTs and 104 registers (<2% chip resources).",
    stack: [
      "Verilog HDL",
      "RTL Architecture",
      "Xilinx Vivado",
      "Vivado XSim",
      "FPGA Implementation",
      "Hazard Handling",
      "Timing Closure",
    ],
    specs: [
      { label: "Word Length", value: "8-bit Datapath" },
      { label: "Pipeline Depth", value: "3-Stage (IF, ID, EX)" },
      { label: "Target Clock", value: "100 MHz (10 ns period)" },
      { label: "Timing Margin (WNS)", value: "+5.123 ns (Zero TNS)" },
      { label: "Resource (LUTs)", value: "95 Slice LUTs (1.19%)" },
      { label: "Resource (Regs)", value: "104 Slice Registers (0.65%)" },
      { label: "Register File", value: "8 Registers (R0 hardwired 0)" },
      { label: "Instruction Set", value: "ADD, ADDI, SUB, SLL, HALT" },
    ],
    images: [
      {
        caption: "Vivado XSim Cycle-Accurate Simulation Waveform with Pipeline Execution",
        url: "/projects/processor/processor-waveform.png",
      },
      {
        caption: "Elaborated RTL Datapath & Register File Schematic",
        url: "/projects/processor/processor-rtl-schematic-left.png",
      },
      {
        caption: "Synthesized Gate-Level FPGA Schematic",
        url: "/projects/processor/processor-synth-schematic.png",
      },
    ],
    overview:
      "Designed and implemented an 8-bit Harvard-architecture RISC processor core from scratch in synthesizable Verilog. The processor features an instruction memory, an 8-entry register file, an arithmetic logic unit (ALU), hardware hazard detection, pipeline stall logic, and execution control units.",
    problem:
      "Pipelined microarchitectures inherently introduce data hazards (RAW dependencies) and control hazards. Without appropriate forwarding or stall interlocks, instructions reading registers modified by preceding instructions will compute incorrect values.",
    architecture:
      "Constructed a 3-stage pipeline: Instruction Fetch (IF), Instruction Decode / Operand Read (ID), and Execute / Writeback (EX). Features a dedicated Hazard Detection Unit that samples source register addresses in the decode stage against destination registers of instructions in execution, inserting hardware stall bubbles when required. An automated flush unit clears pipeline stages when a HALT instruction is decoded.",
    implementation:
      "Structured in modular Verilog HDL with isolated modules for the ALU, program counter, instruction memory, register file (R0 locked to 0 to provide constant zero), and control decoder. Verified through comprehensive simulation test vectors in Vivado XSim before physical synthesis.",
    results:
      "Full synthesis and implementation in Xilinx Vivado on a Spartan-7 FPGA verified timing closure at 100 MHz target clock. The design consumed 95 LUTs (1.19%) and 104 flip-flops (0.65%), providing an ultra-lightweight, high-frequency educational CPU core with positive setup and hold slack.",
    github: "https://github.com/nigam-30/pipelined_processor",
    reports: [
      {
        label: "Pipelined Processor Project Report",
        url: "/reports/Pipelined_Processor_Project_Report.pdf",
      },
    ],
  },
  {
    id: "entropyx",
    title: "EntropyX — Cryptographic Suite & Vault",
    subtitle: "Zero-Knowledge Authenticated Vault",
    featured: false,
    category: "Systems & Software",
    shortDescription:
      "A dual-engine cryptographic suite with a native C++14 microservice using OS hardware entropy (>400k ops/sec), a 2M-bit Bloom filter, and zero-knowledge AES-256-GCM vault.",
    technicalAchievement:
      "Zero duplicate password issuance guaranteed across global sessions via a 2,000,000-bit Bloom filter (k=7) and volatile memory auto-purge security model.",
    stack: [
      "C++14",
      "React 19",
      "Web Crypto API",
      "AES-256-GCM",
      "PBKDF2",
      "Bloom Filter",
      "Vite",
      "Vercel",
    ],
    specs: [
      { label: "C++ Throughput", value: ">400,000 ops/sec" },
      { label: "Bloom Filter Size", value: "2,000,000 bits (k = 7)" },
      { label: "Key Derivation", value: "PBKDF2 (100k iterations)" },
      { label: "Cipher", value: "AES-256-GCM Authenticated" },
    ],
    overview:
      "EntropyX is a privacy-first cryptographic suite combining low-level systems programming with modern web application security. It provides hardware-grade random generation, global zero-collision password uniqueness checks, and client-side credential storage with zero server trust.",
    problem:
      "Standard pseudo-random number generators in software runtimes suffer from predictability or bias. Furthermore, typical password managers store encrypted blobs in cloud databases vulnerable to exfiltration and offline brute-force attacks.",
    architecture:
      "Utilizes a hybrid dual-engine architecture: a high-performance native C++14 microservice leveraging Windows CryptGenRandom hardware entropy with Fisher-Yates shuffling and unbiased rejection sampling, paired with an in-browser Web Crypto API engine for zero-latency serverless execution.",
    implementation:
      "Built a 2,000,000-bit space-efficient Bloom Filter backed by persistent SHA-256 indices to eliminate password duplication without retaining plaintexts. The vault is encrypted client-side using PBKDF2 (100,000 SHA-256 rounds) and authenticated AES-256-GCM, with volatile RAM purging upon navigation away from the vault view.",
    results:
      "Demonstrated deterministic zero-collision operation across millions of test generations with sub-millisecond edge latency and complete zero-knowledge privacy guarantees.",
    github: "https://github.com/nigam-30/entropyx",
    liveDemo: "https://entropyx-password-suite.vercel.app/",
    reports: [
      {
        label: "EntropyX Project Report",
        url: "/reports/Entropyx_Project_Report.pdf",
      },
    ],
  },
  {
    id: "bank-management-system",
    title: "Bank Management System",
    subtitle: "High-Performance C++ Core Engine",
    featured: false,
    category: "Systems & Software",
    shortDescription:
      "A banking transaction simulator with a C++ backend utilizing STL unordered maps for O(1) average-case account lookups, bridged to a Python Flask REST API.",
    technicalAchievement:
      "Achieved true O(1) transaction and lookup throughput with local file-based persistent state and lightweight RESTful endpoints.",
    stack: [
      "C++",
      "Python Flask",
      "REST API",
      "Data Structures",
      "File I/O",
      "Full Stack",
    ],
    specs: [
      { label: "Lookup Complexity", value: "O(1) Average Case" },
      { label: "Core Backend", value: "C++ STL Hash Maps" },
      { label: "API Layer", value: "Flask REST Microservice" },
      { label: "State Storage", value: "Deterministic File I/O" },
    ],
    overview:
      "An end-to-end financial transaction simulator engineered to demonstrate low-latency systems programming and clean multi-language microservice integration.",
    problem:
      "Traditional enterprise database systems introduce heavy overhead for simple high-throughput account verification workloads. Demonstrating high-efficiency memory management requires direct algorithmic structure design.",
    architecture:
      "Designed with a modular C++ engine handling account creation, deposit, withdrawal, interest calculation, and ledger reconciliation, connected through a lightweight JSON API gateway.",
    implementation:
      "C++ engine utilizes `std::unordered_map` with custom hash optimizations for constant-time account lookups. File serialization guarantees state persistence across process restarts.",
    results:
      "Validated transaction consistency and error boundaries under concurrent simulation loads with zero external database dependencies.",
    github: "https://github.com/nigam-30/Bank-Management-System",
    reports: [
      {
        label: "Bank System Project Report",
        url: "/reports/Bank_System_Project_Report.pdf",
      },
    ],
  },
  {
    id: "rail-nova",
    title: "Rail Nova",
    subtitle: "Distributed Reservation Engine",
    featured: false,
    category: "Systems & Software",
    shortDescription:
      "A railway reservation web simulator in FastAPI with SQLAlchemy ORM and SQLite, managing 8,990 stations, 5,277 trains, and 417,080+ stoppage records.",
    technicalAchievement:
      "Faithfully implemented Indian Railways' CNF/RAC/Waitlist reservation algorithm with real-time WebSocket PNR tracking and automatic cancellation promotions.",
    stack: [
      "FastAPI",
      "Python",
      "SQLite",
      "SQLAlchemy",
      "WebSockets",
      "JWT",
      "Full Stack",
    ],
    specs: [
      { label: "Database Scale", value: "417,080+ Stoppage Records" },
      { label: "Trains Managed", value: "5,277 Active Trains" },
      { label: "Stations Indexed", value: "8,990 Railway Stations" },
      { label: "Real-Time Protocol", value: "Full-Duplex WebSockets" },
    ],
    overview:
      "A full-scale Indian Railways simulation platform engineered to replicate real-world multi-station train routing, dynamic berth quota allocation, and automated seat promotions.",
    problem:
      "Simulating railway reservation mechanics requires handling complex cascading dependencies: when a confirmed passenger cancels, waiting list hierarchies (RAC and WL) must promote deterministically across intermediate stations.",
    architecture:
      "Structured with an asynchronous FastAPI application layer, SQLAlchemy ORM for relational queries, SQLite storage engine with indexed route queries, and WebSocket channels for push updates.",
    implementation:
      "Implemented authentic IRCTC berth allocation rules (CNF, RAC, WL), integrated JWT token session authentication, and built an internal e-Wallet system for seamless transactional testing.",
    results:
      "Delivered sub-50ms API response times across station search and itinerary graph traversal despite a 400k+ record SQLite schema.",
    github: "https://github.com/nigam-30/Rail-Nova",
    reports: [
      {
        label: "Rail Nova Project Report",
        url: "/reports/Rail_Nova_Project_Report.pdf",
      },
    ],
  },
  {
    id: "telecom-customer-churn",
    title: "Telecom Customer Churn Analytics",
    subtitle: "End-to-End ML & Interpretability Pipeline",
    featured: false,
    category: "Data & ML",
    shortDescription:
      "A complete machine learning and behavioral cohort analytics pipeline leveraging SMOTE oversampling, Scikit-learn models, and SHAP TreeExplainer interpretability.",
    technicalAchievement:
      "Delivered global and customer-level churn risk attribution through SHAP TreeExplainer, presented via 13 publication-quality Power BI analytical dashboards.",
    stack: [
      "Python",
      "SQL",
      "Scikit-learn",
      "SMOTE",
      "SHAP",
      "Random Forest",
      "Power BI",
    ],
    specs: [
      { label: "Cohort Segmentation", value: "3 Behavioral Cohorts" },
      { label: "Class Imbalance", value: "SMOTE Resampling" },
      { label: "Model Architecture", value: "Random Forest & LogReg" },
      { label: "Explainability", value: "SHAP TreeExplainer" },
    ],
    overview:
      "An analytical data science project designed to extract actionable business insights from customer usage, billing, and support interaction records to prevent subscriber churn.",
    problem:
      "Customer churn datasets are heavily imbalanced (far fewer churners than retained subscribers), causing conventional machine learning classifiers to bias toward majority classes and miss high-value churn risks.",
    architecture:
      "SQL data extraction and cohort segmentation → Python Pandas data cleaning & feature engineering → SMOTE synthetic oversampling → Scikit-learn model training & cross-validation → SHAP interpretability → Power BI executive reporting.",
    implementation:
      "Trained Random Forest and Logistic Regression classifiers. Evaluated precision, recall, and ROC-AUC curves. Integrated SHAP TreeExplainer to compute exact feature importance values for both global model behavior and individual subscribers.",
    results:
      "Identified primary churn drivers (contract duration, monthly charges, customer service interaction volume) and packaged strategic retention recommendations into 13 interactive Power BI dashboards.",
    github: "https://github.com/nigam-30/Telecom_Churn_Analysis",
    reports: [
      {
        label: "Telecom Churn Analysis Report",
        url: "/reports/Telecom_Churn_Analysis_Report.pdf",
      },
    ],
  },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1NaD0RkSKj21cQD1mJgktG4Y9XyiUOSmn/view?usp=sharing";

export const framerBuildUrl = "https://noble-monstera-580912.framer.app";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroLabels = [
  "Agentic AI builder",
  "Low-latency C++ engineer",
  "Framer & 3D web builder",
  "Open source contributor",
];

export const heroStats = [
  { value: "480+", label: "LeetCode problems solved" },
  { value: "3", label: "Highlighted open source repos" },
  { value: "2", label: "Internships completed" },
  { value: "74%", label: "Depression app accuracy" },
];

export const contributions = [
  {
    name: "GitNexus",
    repo: "abhigyanpatwari/GitNexus",
    stars: "27.5k stars",
    summary:
      "Diagnosed and resolved critical backend routing bugs in a Graph RAG and MCP monorepo serving thousands of developers.",
    highlight: "Restored reliability across an AI-powered codebase intelligence engine.",
    href: "https://github.com/abhigyanpatwari/GitNexus",
    stack: ["TypeScript", "Graph RAG", "MCP"],
  },
  {
    name: "emdash",
    repo: "emdash-cms/emdash",
    stars: "9.4k stars",
    summary:
      "Eliminated runtime type errors in a TypeScript CMS by enforcing strict plugin interface contracts.",
    highlight: "Hardened the Astro-based architecture against silent failures.",
    href: "https://github.com/emdash-cms/emdash",
    stack: ["TypeScript", "Astro", "Plugin contracts"],
  },
  {
    name: "Microsoft Aspire",
    repo: "microsoft/aspire",
    stars: "5.8k stars",
    summary:
      "Shipped a targeted fix to Microsoft's cloud-native platform, strengthening observability and deployment tooling.",
    highlight: "Improved enterprise engineering workflows inside a widely used .NET ecosystem.",
    href: "https://github.com/microsoft/aspire",
    stack: [".NET", "Cloud Native", "Observability"],
  },
];

export const projects = [
  {
    name: "Xerolas",
    strapline: "AI screen intelligence for the desktop.",
    description:
      "Built and shipped a cross-platform Electron app for Windows, macOS, and Linux with silent auto-updates and instant AI-powered screen analysis.",
    impact: ["Snapcraft releases", "Ctrl+Shift+Space launcher", "Encrypted AI gateway"],
    stack: ["Electron.js", "JavaScript", "Cloudflare Workers", "electron-builder"],
    codeUrl: "https://github.com/ideepakchauhan7/Xerolas",
    liveUrl: "https://snapcraft.io/xerolas",
    liveLabel: "Snap Store",
    className: "md:col-span-2",
  },
  {
    name: "Distributed Vector Database",
    strapline: "Fault-tolerant storage with RAFT consensus.",
    description:
      "Built a sharded vector database in C++20 with RAFT, HNSW indexing, consistent hashing, and a Python query router communicating over gRPC.",
    impact: ["RAFT consensus", "Shard-local HNSW", "Latency-aware routing"],
    stack: ["C++20", "RAFT", "gRPC", "Python"],
    codeUrl: "https://github.com/ideepakchauhan7/distributed-vectordb",
    liveUrl: null,
    className: "md:col-span-2",
  },
  {
    name: "C++20 Paper-Trading Platform",
    strapline: "Safety-first trading infrastructure.",
    description:
      "Built a C++20 paper-trading platform for Indian equity and F&O with a centralized risk gate, async observability, and replayable audit trails.",
    impact: ["SPSC + lock-free pools", "Prometheus logging", "Upstox market data"],
    stack: ["C++20", "Boost.Asio", "ProtoBuf", "Google Test"],
    codeUrl: "https://github.com/ideepakchauhan7/OrderBook",
    className: "md:col-span-2",
  },
];

export const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "Codtech IT Solutions Pvt. Ltd.",
    period: "May 2026 - Jun 2026",
    bullets: [
      "Built a RAG pipeline and LangGraph agentic workflow using LangChain with ChromaDB and FAISS.",
      "Integrated vector database retrieval into the workflow to streamline prompt orchestration for the team.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Atharvo",
    period: "Aug 2024 - Sep 2024",
    bullets: [
      "Engineered an SVC classification model that improved outcome prediction accuracy by 30% through feature engineering, EDA, and hyperparameter tuning.",
      "Developed a depression prediction ML app with 74% accuracy and a Flask web interface.",
    ],
  },
];

export const education = {
  school: "Lloyd Institute of Engineering and Technology",
  degree: "B.Tech in Computer Science and Engineering",
  period: "Sep 2021 - May 2025",
  cgpa: "7.5 / 10.0",
  coursework: [
    "CSE Foundations",
    "Data Structures & Algorithms",
    "Machine Learning",
    "System Design",
    "Databases",
    "Computer Networks",
  ],
};

export const skills = [
  {
    title: "Web & 3D",
    items: ["Framer", "Three.js / WebGL", "Responsive Web Design", "Framer Motion", "Interactive 3D"],
  },
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "AI and Generative AI",
    items: ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "Agentic AI"],
  },
  {
    title: "Frameworks and Libraries",
    items: ["React", "Node.js", "Flask", "TensorFlow", "Keras", "Streamlit"],
  },
  {
    title: "Databases and Retrieval",
    items: ["MySQL", "MongoDB", "Redis", "ChromaDB", "FAISS"],
  },
];

export const achievements = [
  "Ranked 1st among 150+ participants at Lloyd Institute Code-A-Thon.",
  "Solved 480+ LeetCode problems and reached the top 10% in three Codeforces contests.",
  "Shipped open source fixes across GitNexus, emdash, and Microsoft Aspire.",
];

export const certifications = [
  "Claude Code in Action — Anthropic (March 2026)",
  "Introduction to Model Context Protocol (MCP) — Anthropic (March 2026)",
];

export const contactLinks = [
  {
    label: "Email",
    value: "ideepakchauhan7@gmail.com",
    href: "mailto:ideepakchauhan7@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 93128 19766",
    href: "tel:+919312819766",
  },
  {
    label: "GitHub",
    value: "github.com/ideepakchauhan7",
    href: "https://github.com/ideepakchauhan7",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ideepakchauhan7",
    href: "https://www.linkedin.com/in/ideepakchauhan7/",
  },
];

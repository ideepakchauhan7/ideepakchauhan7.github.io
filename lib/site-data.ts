export const navItems = [
  { label: "About", href: "#about" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroLabels = [
  "Open source contributor",
  "Low-latency C++ builder",
  "Machine learning practitioner",
];

export const heroStats = [
  { value: "480+", label: "LeetCode problems solved" },
  { value: "10k+", label: "Orders per second processed" },
  { value: "27.5k", label: "Largest repo contributed to" },
  { value: "74%", label: "Depression model accuracy" },
];

export const contributions = [
  {
    name: "GitNexus",
    repo: "abhigyanpatwari/GitNexus",
    stars: "27.5k stars",
    summary:
      "Recognized contributor to a zero-server code intelligence engine built in TypeScript for interactive codebase knowledge graphs.",
    highlight:
      "Shipped an April 2026 bug fix in a Graph RAG and MCP-enabled monorepo.",
    href: "https://github.com/abhigyanpatwari/GitNexus",
    stack: ["TypeScript", "Graph RAG", "MCP"],
  },
  {
    name: "emdash",
    repo: "emdash-cms/emdash",
    stars: "9.4k stars",
    summary:
      "Contributed to a full-stack TypeScript CMS on Astro with a strong focus on type safety and plugin architecture.",
    highlight: "Improved developer-facing reliability inside a large open source codebase.",
    href: "https://github.com/emdash-cms/emdash",
    stack: ["TypeScript", "Astro", "Plugins"],
  },
  {
    name: "Microsoft Aspire",
    repo: "microsoft/aspire",
    stars: "5.8k stars",
    summary:
      "Contributed to Microsoft's code-first platform for building observable cloud-native applications.",
    highlight: "Worked inside a production-grade ecosystem with extensibility at its core.",
    href: "https://github.com/microsoft/aspire",
    stack: [".NET", "Cloud Native", "Observability"],
  },
];

export const projects = [
  {
    name: "High Frequency Trading System",
    strapline: "Low-latency systems engineering with C++.",
    description:
      "Architected a trading system around Kite Broker's API for real-time market data and faster execution, then engineered a low-latency order book with asynchronous processing.",
    impact: ["150 ms latency reduction", "10,000+ orders/sec", "99.99% accuracy"],
    stack: ["C++", "Boost", "ProtoBuf", "Google Test"],
    codeUrl: "https://github.com/ideepakchauhan7/OrderBook",
    liveUrl: null,
    className: "md:col-span-2",
  },
  {
    name: "Skin Disease Classification",
    strapline: "Computer vision workflow optimized for iteration speed.",
    description:
      "Built a CNN pipeline that automated preprocessing and labeling, then improved model generalization using augmentation techniques for stronger classification performance.",
    impact: ["6 hours saved weekly", "15% accuracy improvement", "Streamlit demo shipped"],
    stack: ["Python", "OpenCV", "Matplotlib", "Seaborn", "Jupyter"],
    codeUrl: "https://github.com/ideepakchauhan7/skin-disease-classification",
    liveUrl: "https://skin-disease-classification-cnn.streamlit.app/",
    className: "md:col-span-1",
  },
  {
    name: "Black-Scholes Option Pricing",
    strapline: "Interactive analytics for faster trading decisions.",
    description:
      "Developed and deployed a real-time pricing dashboard using market data, numerical methods, and adjustable volatility parameters for call and put visualization.",
    impact: ["20% faster decision-making", "Live pricing dashboard", "Adjustable volatility analysis"],
    stack: ["Python", "NumPy", "Streamlit", "SciPy", "yfinance"],
    codeUrl: "https://github.com/ideepakchauhan7/blackscholes",
    liveUrl: "https://blackscholesoption.streamlit.app/",
    className: "md:col-span-1",
  },
];

export const experience = {
  role: "Machine Learning Intern",
  company: "Atharvo",
  period: "Aug 2024 - Sep 2024",
  bullets: [
    "Boosted predictive outcome accuracy by 30% through data cleaning, exploratory analysis, feature engineering, and Support Vector Classification.",
    "Designed a depression prediction application with 74% accuracy and integrated a Flask-based interface for user interaction.",
  ],
};

export const education = {
  school: "Lloyd Institute of Engineering and Technology",
  degree: "B.Tech. in Computer Science and Engineering",
  period: "Sep 2021 - May 2025",
  cgpa: "7.5 / 10.0",
  coursework: [
    "Data Structures and Algorithms",
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    "Computer Architecture",
    "Computational Theory",
  ],
};

export const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript", "Rust"],
  },
  {
    title: "Frameworks and Libraries",
    items: ["TensorFlow", "Keras", "Streamlit", "React", "Flask"],
  },
  {
    title: "Databases and Tools",
    items: ["MySQL", "MongoDB", "Docker", "Redis", "Firebase", "Git", "GitHub", "Jupyter"],
  },
  {
    title: "Engineering Foundations",
    items: [
      "Data Structures and Algorithms",
      "System Design",
      "Object-Oriented Programming",
      "Machine Learning",
    ],
  },
];

export const achievements = [
  "Won first place among 150+ participants in Lloyd Institute's 24-hour Code-A-Then challenge.",
  "Solved 480+ LeetCode problems with a sustained focus on advanced data structures and algorithms.",
  "Placed in the top 10% in three Codeforces competitions.",
  "Applied a 200-hour DSA course to achieve a 15% runtime reduction across 40+ LeetCode solutions.",
  "Earned GitHub Pull Shark and Pair Extraordinaire achievements through consistent open source collaboration.",
];

export const certifications = [
  "JP Morgan Software Engineering Job Simulation",
  "Goldman Sachs Software Engineering Virtual Experience",
  "Cisco Networking Essentials",
  "Infosys Foundation Finishing School for Employability Program",
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

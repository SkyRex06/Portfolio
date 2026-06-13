import profileImg from "@/assets/profile.png";
import retailImg from "@/assets/project-retailsync.jpg";
import exoImg from "@/assets/project-exoplanet.jpg";
import cbaeImg from "@/assets/project-cbae.jpg";
import exo0Img from "@/assets/exo0.png";
import exo1Img from "@/assets/exo1.png";
import exo2Img from "@/assets/exo2.png";
import exo3Img from "@/assets/exo3.png";
import CI0Img from "@/assets/CI0.png";
import CI1Img from "@/assets/CI1.png";
import CI2Img from "@/assets/CI2.png";
import R0Img from "@/assets/R0.png";
import R1Img from "@/assets/R1.png";
import R2Img from "@/assets/R2.png";
import resumePdf from "@/assets/Resume.pdf";
import e1Img from "@/assets/E1.png";
import H1Img from "@/assets/H1.png";
import H2Img from "@/assets/H2.png";
import H3Img from "@/assets/H3.png";
import H4Img from "@/assets/H4.png";
import H5Img from "@/assets/H5.png";
import L0Img from "@/assets/L0.png";
import L1Img from "@/assets/L1.png";
import L2Img from "@/assets/L2.png";
import L3Img from "@/assets/L3.png";
import L4Img from "@/assets/L4.png";
import L5Img from "@/assets/L5.png";
import L6Img from "@/assets/L6.png";


const emailAddress = "shivamprasad5953@example.com";

const emailSubject = encodeURIComponent("Portfolio inquiry");
const emailBody = encodeURIComponent("Hi Shivam,\n\nI saw your portfolio and wanted to reach out.");
const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

export const profile = {
  name: "Hi, I'm Shivam ",
  initials: "SP",
  title: "Full Stack Developer & AI Builder",
  subheading:
    "Pursuing AI & Data Science at GGSIPU’28 • Aspiring AI Engineer • Hackathon Winner • Ex-Intern @Cedur ",
  description:
    "Building AI-powered products, scalable web applications, and impactful technology communities while exploring the intersection of software engineering, artificial intelligence, and innovation.",
  image: profileImg,
  email: emailAddress,
  resumeUrl: resumePdf,
  socials: {
    github: "https://github.com/skyrex06/",
    linkedin: "https://linkedin.com/in/skyrex06/",
    leetcode: "https://leetcode.com/u/SkyRex06/",
    email: mailtoLink,
  },
};

export const journey = [
  { title: "Started Learning", desc: "Began software development and AI exploration." },
  { title: "Built Projects", desc: "Explored full-stack development across the stack." },
  { title: "Problem Sloving", desc: "Practiced DSA & sloved real worlds problems with projects" },
];

export const stats = [
  { value: "1+", label: "Internship" },
  { value: "3", label: "Hackathon Wins" },
  { value: "10+", label: "Hackathons" },
  { value: "15+", label: "Projects Shipped" },
  { value: "1", label: "Research Publication" },
];

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  badge: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  gallery: { prompt: string; caption: string }[];
  github?: string;
  demo?: string;
  videoUrl?: string;
  imageGallery?: { src: string; caption: string }[];
  highlights: string[];
};

export type ExperienceItem = {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "retailsync",
    title: "RetailSync SaaS",
    subtitle: "AI-powered retail forecasting platform",
    badge: "Featured",
    description:
      "AI-powered retail forecasting platform using machine learning models for demand forecasting, category-wise sales prediction, and analytics dashboards.",
    longDescription:
      "RetailSync is a full SaaS platform that helps retailers forecast demand, optimize inventory, and visualize category-level performance through interactive dashboards. Built on a modular ML pipeline with reproducible training and a streaming-friendly serving layer.",
    tech: ["TypeScript", "Python", "Pandas", "Scikit-Learn", "Analytics", "Vercel"],
    image: retailImg,
    imageGallery: [
      { src: R0Img, caption: "Hero Dashboard" },
      { src: R1Img, caption: "Demand Forecasting" },
      { src: R2Img, caption: "Inventory View" },
    ],
    gallery: [
      { prompt: "Retail dashboard hero screenshot", caption: "Hero Dashboard" },
      { prompt: "Forecasting chart screenshot", caption: "Demand Forecasting" },
      { prompt: "Inventory view screenshot", caption: "Inventory View" },
    ],
    github: "https://github.com/SkyRex06/RetailSync_saas",

    highlights: [
      "Multi-model forecasting ensemble",
      "Category-wise sales prediction",
      "Real-time analytics dashboards",
      "Deployed on Vercel",
    ],
  },
  {
    slug: "exoplanet",
    title: "Exoplanet Prediction System",
    subtitle: "ML-powered exoplanet classification",
    badge: "Featured",
    description:
      "Machine learning–powered exoplanet prediction platform integrating classification models with a Django backend and REST APIs for real-time inference.",
    longDescription:
      "An end-to-end exoplanet classification system trained on NASA datasets. Models are served behind a Django REST API with a lightweight web frontend for real-time inference and confidence visualization.",
    tech: ["Python", "Django", "REST APIs", "Scikit-Learn", "Pandas", "NumPy"],
    image: exoImg,
    gallery: [
      { prompt: "Exoplanet dashboard hero", caption: "Prediction Dashboard" },
      { prompt: "Model confidence chart", caption: "Model Confidence" },
      { prompt: "Feature importance chart", caption: "Feature Importance" },
      { prompt: "API docs screenshot", caption: "REST API" },
    ],
    imageGallery: [
      { src: exo0Img, caption: "Prediction Dashboard" },
      { src: exo1Img, caption: "Model Confidence" },
      { src: exo2Img, caption: "Feature Importance" },
      { src: exo3Img, caption: "REST API" },
    ],
    github: "https://github.com/SkyRex06/ExoPlanet_Prediction.git",
    demo: "https://exoplanet-prediction-model-interface-1-1x9a.onrender.com/",
    videoUrl: "https://www.youtube.com/watch?v=MA01r7H-sqk",

    highlights: [
      "Trained on NASA exoplanet datasets",
      "Django REST inference API",
      "Confidence-aware predictions",
      "Reproducible training pipeline",
    ],
  },
  {
    slug: "cbae",
    title: "CBAE",
    subtitle: "Causality-Based AI Engine",
    badge: "Research",
    description:
      "Research-driven AI platform combining causal reasoning, transformer-based NLP, explainable AI, and counterfactual reasoning for misinformation detection.",
    longDescription:
      "CBAE blends BERT-based NLP with causal graphs (DoWhy) and counterfactual reasoning to detect and explain misinformation, served via FastAPI and visualized in a React dashboard backed by Neo4j.",
    tech: ["BERT", "FastAPI", "React", "Neo4j", "DoWhy", "Causal AI"],
    image: cbaeImg,
    gallery: [
      { prompt: "Causal AI architecture diagram", caption: "Architecture" },
      { prompt: "Misinformation dashboard screenshot", caption: "Dashboard" },
      { prompt: "Research figure with charts", caption: "Research Figure" },
      { prompt: "Research paper PDF preview", caption: "Paper Preview" },
    ],
    github: "https://github.com/SkyRex06/A-Causality-Based-AI-Engine-for-Detecting-and-Controlling-Misinformation",
    demo: "https://a-causality-based-ai-engine-for-det.vercel.app/",
    imageGallery: [
      { src: CI0Img, caption: "Architecture" },
      { src: CI1Img, caption: "Dashboard" },
      { src: CI2Img, caption: "Research Figure" },
    ],
    highlights: [
      "Causal graph construction with DoWhy",
      "BERT-based NLP pipeline",
      "Counterfactual explanations",
      "Neo4j-backed knowledge graph",
    ],
  },
];

export const experience = [
  {
    company: "CedurNow",
    role: "Software Developer Intern",
    companyUrl: "https://www.cedurnow.com/",
    duration: "June 2025 – July 2025",
    description:
      "Contributed to Cedur HRMS v2.0 by building user-facing features and improving core workflows with React and Node.js. Worked on REST API integrations, authentication flows, and MongoDB-backed modules, while supporting deployment-ready improvements across the stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Auth"],
    gallery: [{ src: e1Img, caption: "Offer letter / onboarding document" }],
  },
];

export const hackathons = [
  {
    name: "Hackathon Tenure (Mixed Wins)",
    achievement: "Selected Wins & Finals",
    project: "Multiple Hackathon Builds",
    description:
      "A combined snapshot of my hackathon participation — from multi-agent AI builds to finals-stage demos. Below are mixed visuals that represent different teams, moments, and showcases.",
    gallery: [
      { src: H1Img, label: "Hackathon Winner" },
      { src: H2Img, label: "Team Moment" },
      { src: H3Img, label: "Stage Demo" },
      { src: H4Img, label: "Presentation" },
      { src: H5Img, label: "Certificate / Moment" },
    ],
    tone: "from-amber-400/30 to-orange-500/20",
  },
];

export const leadership = [
  {
    title: "Leadership at College Club",
    description:
      "Organized multiple events and hosted public speaking sessions—bringing students together through workshops, summits, and community impact.",
    gallery: [
      { src: L0Img, label: "Leadership Event" },
      { src: L1Img, label: "Community Moment" },
      { src: L3Img, label: "Workshop" },
      { src: L4Img, label: "Summit" },
      { src: L5Img, label: "Team Collaboration" },
      { src: L6Img, label: "Student Community" },
    ],
  },
];


export const research = {
  title: "A Causality-Based AI Engine for Detecting and Controlling Misinformation",
  description:
    "Research focused on misinformation detection using causal reasoning, transformer-based NLP, explainable AI, counterfactual intervention systems, and causal graph modeling.",
  highlights: [
    "BERT Integration",
    "Causal Graph Construction",
    "Explainable AI",
    "Counterfactual Reasoning",
    "FastAPI Backend",
    "React Dashboard",
    "Neo4j Graph Database",
  ],
  visuals: ["Architecture Diagram", "Research Charts", "Dashboard Screenshot", "System Flow", "Research Figure"],
  paperUrl: "/projects/cbae",
  repoUrl: "https://github.com/skyrex06/cbae",
};

export const skills = [
  { category: "Programming", items: ["Python", "C++", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
  { category: "Database", items: ["MongoDB", "MySQL", "SQLite", "Neo4j"] },
  { category: "AI / ML", items: ["Scikit-Learn", "Pandas", "NumPy", "ML", "NLP", "Analytics"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "hackathons", label: "Hackathons" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

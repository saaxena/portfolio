export const site = {
  name: "Adarsh Mohan",
  title: "Backend and Generative AI Engineer",
  headline: "I design scalable backends and production GenAI systems.",
  description:
    "Adarsh Mohan is a Backend and Generative AI Engineer in Patna, India. 1.5+ years building RAG systems, LLM applications, and high-throughput APIs with Python, FastAPI, TypeScript, Node.js, LangChain, LangGraph, Pinecone, FAISS, and pgvector.",
  location: "Patna, India",
  email: "adarshsaxenaa@outlook.com",
  phone: "+91 70707 20606",
  phoneHref: "tel:+917070720606",
  github: "https://github.com/saaxena",
  githubHandle: "saaxena",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://adarshmohan.dev",
  keywords: [
    "Adarsh Mohan",
    "Backend Engineer",
    "Generative AI Engineer",
    "Python",
    "FastAPI",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM Engineer",
    "TypeScript",
    "Node.js",
    "Pinecone",
    "FAISS",
    "pgvector",
    "Forward Deployed Engineer",
  ],
};

export const about = `I am a Backend and Generative AI Engineer with 1.5+ years of experience shipping production REST APIs, RAG pipelines, and LLM applications. I work in Python (FastAPI) and TypeScript (Node.js, Express.js, Fastify, React), and I build retrieval systems with LangChain, LangGraph, Hugging Face, Pinecone, FAISS, and pgvector.

I care about systems that stay correct under load: structured generation, evaluation, caching, and backends that can take real traffic. Recently I ranked 13 on a Kaggle hiring-challenge leaderboard for structured radiology report generation, and I implemented a Node.js architecture designed for 1,000,000 requests per second.`;

export const experience = {
  role: "Software Developer",
  company: "Fincorp India",
  location: "Patna, India",
  dates: "Jun 2023 - Dec 2024",
  points: [
    "Designed and shipped scalable backend applications and REST APIs in TypeScript, Node.js, Express.js, Python, and FastAPI with PostgreSQL and Redis.",
    "Implemented JWT authentication and Role-Based Access Control (RBAC) on production APIs; deployed with Docker and AWS.",
    "Built Retrieval-Augmented Generation (RAG) pipelines with LangChain, embeddings, hybrid search, reranking, and vector databases (Pinecone, FAISS, pgvector).",
    "Developed LLM applications for summarization, extraction, search, and workflow automation using prompt engineering and LangGraph.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  stack: string[];
  summary: string;
  points: string[];
  href: string;
  metric: string;
};

export const projects: Project[] = [
  {
    slug: "radiology-report-generation",
    title: "Structured Radiology Report Generation",
    year: "Sep 2026",
    stack: ["Python", "Gemini", "Few-shot Retrieval", "Prompt Engineering", "pytest"],
    summary:
      "Natoe.ai Kaggle hiring challenge. An LLM pipeline that turns radiologist dictation into structured FINDINGS / IMPRESSION reports by editing a normal template.",
    points: [
      "Ranked 13 on the Kaggle leaderboard.",
      "JSON field edits applied in code so untouched fields stay byte-for-byte.",
      "Cut local holdout RES from 0.65 to 0.21 — a 68% reduction. 41 unit tests.",
    ],
    href: "",
    metric: "Rank 13",
  },
  {
    slug: "node-1m-rps",
    title: "High-Throughput Node.js API",
    year: "2025",
    stack: ["Node.js", "Express.js", "Fastify", "Redis Cluster", "PostgreSQL", "PM2"],
    summary:
      "A Node.js architecture with Express, Fastify, Redis cluster, PostgreSQL, and PM2 designed to handle one million requests per second.",
    points: [
      "Standalone and Redis cluster modes, PM2 process clustering.",
      "Postgres seeding up to 20 million rows and a Postgres-to-Redis hot-read path.",
    ],
    href: "",
    metric: "1M RPS",
  },
  {
    slug: "document-intelligence",
    title: "LLM Document Intelligence Platform",
    year: "2024",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "NLP", "OCR", "FAISS", "pgvector"],
    summary:
      "End-to-end PDF and DOCX ingestion for review: OCR, chunking, embeddings, hybrid retrieval, reranking, and citation-aware answers.",
    points: [
      "Automates summarization, extraction, and contract analysis.",
      "Conversational memory and LLM orchestration on FastAPI.",
    ],
    href: "",
    metric: "RAG + OCR",
  },
  {
    slug: "faq-detect",
    title: "FAQ-DETECT",
    year: "2024",
    stack: ["Node.js", "Express.js", "React", "Webhooks", "Gemini"],
    summary:
      "A GitHub and community FAQ bot that mixes configured answers with Gemini and semantic matching, beyond keyword search.",
    points: [
      "Webhook integrations, approval workflows, and notification pipelines.",
      "Cuts repetitive maintainer replies on community channels.",
    ],
    href: "https://faq-detect.vercel.app",
    metric: "Gemini + search",
  },
];

export type LiveWork = {
  title: string;
  blurb: string;
  live: string;
  repo: string;
  stack: string[];
  kind: "component" | "product";
};

export const liveWork: LiveWork[] = [
  {
    title: "Neon Grid",
    blurb: "An eye-catching React grid-pattern component.",
    live: "https://neon-grid-three.vercel.app",
    repo: "https://github.com/saaxena/Neon-grid",
    stack: ["React", "TypeScript"],
    kind: "component",
  },
  {
    title: "Twitter Card",
    blurb: "A ready-to-use React social card component.",
    live: "https://twitter-card-rose.vercel.app",
    repo: "https://github.com/saaxena/Twitter-card",
    stack: ["React", "TypeScript"],
    kind: "component",
  },
  {
    title: "Proofreader",
    blurb: "AI tool that fixes grammar while keeping document formatting and equations.",
    live: "https://proofreader-cfnwzvn9jvs6ufdpnrawpq.streamlit.app/",
    repo: "https://github.com/saaxena/Proofreader",
    stack: ["Python", "Streamlit"],
    kind: "product",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    label: "Backend & frontend",
    items: ["FastAPI", "Node.js", "Express.js", "Fastify", "React", "REST APIs", "JWT", "RBAC", "PM2"],
  },
  {
    label: "Data & vectors",
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "FAISS", "pgvector"],
  },
  {
    label: "Generative AI",
    items: [
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "Embeddings",
      "Tool Calling",
      "OpenAI",
      "Claude",
      "Gemini",
    ],
  },
  {
    label: "Machine learning",
    items: [
      "NLP",
      "Supervised Learning",
      "Gradient Boosting",
      "XGBoost",
      "Neural Networks",
      "Model Evaluation",
      "scikit-learn",
      "OCR",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "L. N. Mishra Institute of Economic Development & Social Change, Patna",
  dates: "Oct 2020 - May 2023",
  score: "CGPA 8.04 / 10",
};

export const certifications = [
  "Generative AI with LangChain and Hugging Face — Udemy, 2026",
  "Python for Machine Learning and Data Science — Udemy, 2026",
];

export const faqs = [
  {
    q: "Who is Adarsh Mohan?",
    a: "Adarsh Mohan is a Backend and Generative AI Engineer based in Patna, India. He builds production RAG systems, LLM applications, and high-throughput APIs in Python and TypeScript.",
  },
  {
    q: "What stack does he use for Generative AI?",
    a: "Python, FastAPI, LangChain, LangGraph, Hugging Face, Pinecone, FAISS, pgvector, OpenAI, Anthropic Claude, and Google Gemini.",
  },
  {
    q: "What is his recent public result?",
    a: "He ranked 13 on the Natoe.ai Kaggle hiring-challenge leaderboard for structured radiology report generation, cutting local holdout Radiology Edit Score from 0.65 to 0.21.",
  },
];

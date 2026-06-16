import {
  NavLink,
  Stat,
  QuickFact,
  SkillCategory,
  Project,
  ResearchItem,
  TimelineEntry,
  SocialLink,
} from "@/types";

// ─── Navigation ────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ──────────────────────────────────────────────
export const HERO_EYEBROW = "// available for opportunities";

export const HERO_HEADLINE = [
  "Building intelligent systems,",
  "search experiences,",
  "and data-driven applications.",
];

export const HERO_ROTATING_TITLES = [
  "Data Analyst",
  "Data Engineer",
  "Information Systems Graduate",
  "Web Developer",
  "Information Retrieval Researcher",
];

export const HERO_SUBTEXT =
  "Fresh Information Systems graduate specializing in Data Analysis and Data Engineering. Dedicated to analyzing trends, engineering data pipelines, and building functional web applications on the side.";

export const HERO_STATS: Stat[] = [
  { value: "3+", label: "Research Projects" },
  { value: "10+", label: "Projects Built" },
  { value: "Data &", label: "Web Specialist" },
  { value: "3.74/4.0", label: "Total GPA" },
];

// ─── About ─────────────────────────────────────────────
export const ABOUT_PARAGRAPHS = [
  "My journey is driven by a passion for analyzing and engineering data to uncover meaningful insights. I specialize in Data Analysis and Data Engineering, focusing on transforming complex datasets into clear, actionable intelligence.",
  "Alongside my data focus, I love building web applications as a side passion. With a solid foundation in Information Systems, I have experience in statistical modeling, machine learning, and database optimization, combined with hands-on web development using modern frameworks.",
  "Today, I lean towards roles where I can design robust data pipelines, build dashboards, and extract insights, bridging the gap between data engineering and interactive web solutions.",
];

export const QUICK_FACTS: QuickFact[] = [
  { icon: "graduation-cap", text: "S1 Sistem Informasi (Jurusan Ilmu Komputer), Universitas Riau, 2026" },
  { icon: "map-pin", text: "Pekanbaru, Riau, Indonesia" },
  { icon: "trophy", text: "Total GPA 3.74/4.0" },
  { icon: "briefcase", text: "Open to: Full-time / Freelance / Research Collaboration" },
  { icon: "globe", text: "Languages: Indonesian (Native), English (Professional)" },
];

export const EXPLORING_BADGES = [
  "Data Engineering",
  "Data Visualization",
  "Tableau Dashboards",
  "Generative AI",
  "Vector Databases",
  "Search Engineering",
];

// ─── Skills ────────────────────────────────────────────
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "dev",
    label: "Software Development",
    skills: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Java" },
      { name: "Android Studio" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "REST API" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    id: "ai",
    label: "Data & AI",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Tableau" },
      { name: "Machine Learning" },
      { name: "Naive Bayes" },
      { name: "Forecasting" },
      { name: "Data Analysis" },
      { name: "Weka" },
      { name: "Time Series" },
    ],
  },
  {
    id: "ir",
    label: "Information Retrieval",
    skills: [
      { name: "Vector Space Model" },
      { name: "TF-IDF" },
      { name: "Cosine Similarity" },
      { name: "Query Expansion" },
      { name: "Rocchio Algorithm" },
      { name: "Language Models" },
      { name: "BIM" },
      { name: "Search Systems" },
      { name: "Plagiarism Detection" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Android Studio" },
      { name: "Postman" },
      { name: "Laragon" },
      { name: "Jupyter Notebook" },
      { name: "Google Colab" },
      { name: "Streamlit" },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────
export const PROJECT_FILTERS = ["All", "Web", "Android", "AI/ML", "Research"];

export const PROJECTS: Project[] = [
  {
    id: "bps-monitoring",
    title: "Website Monitoring Capaian Kinerja BPS",
    category: "Web",
    tags: ["Web Development", "Government Project"],
    description:
      "Performance monitoring system built for BPS Provinsi Riau to track and report institutional achievement metrics digitally.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/Capkin.git" },
    ],
    badge: "Real Client Project",
    featured: true,
  },
  {
    id: "ir-search",
    title: "Information Retrieval Search Engine",
    category: "Research",
    tags: ["Information Retrieval"],
    description:
      "Document search system implementing TF-IDF, Cosine Similarity, and BIM for intelligent document ranking and retrieval.",
    tech: ["Laravel", "PHP", "TF-IDF", "Cosine Similarity", "BIM"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/SmartDoc-berbasis-TF-IDF-Cosine-Similarity..git" },
    ],
  },
  {
    id: "depression-prediction",
    title: "Student Depression Prediction",
    category: "AI/ML",
    tags: ["Machine Learning", "Research"],
    description:
      "Research project classifying student depression levels using Naive Bayes algorithm in Weka data mining tool.",
    tech: ["Naive Bayes", "Weka", "Machine Learning", "Data Mining"],
    links: [],
  },
  {
    id: "plagiarism-detection",
    title: "Plagiarism Detection System (Skripsi)",
    category: "Research",
    tags: ["Information Retrieval", "Research"],
    description:
      "Implemented Vector Space Model and Cosine Similarity to detect plagiarism in student thesis abstracts at Jurusan Ilmu Komputer Universitas Riau.",
    tech: ["Vector Space Model", "Cosine Similarity", "TF-IDF", "PHP", "Laravel"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/plagiarism-system.git" },
    ],
    badge: "Skripsi",
    featured: true,
  },
  {
    id: "edumentor-ai",
    title: "EduMentor AI — PDF Document Assistant",
    category: "AI/ML",
    tags: ["Artificial Intelligence", "Natural Language Processing"],
    description:
      "An intelligent AI assistant that reads, processes, and parses uploaded PDF documents, allowing users to ask questions, extract key objectives, and generate summaries instantly.",
    tech: ["Python", "Google Colab", "Gemini API", "Streamlit", "ngrok"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/EduMentor-AI.git" },
    ],
    badge: "Featured AI Project",
    featured: true,
  },
  {
    id: "sipemtra",
    title: "SIPEMTRA — Travel Ticket Booking",
    category: "Web",
    tags: ["Web Development", "Client Project"],
    description:
      "Online travel ticket ordering system built for PT Tran Prima, enabling customers to book and manage travel reservations digitally.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/Sipemtraa.git" },
    ],
    badge: "Client Project",
  },
  {
    id: "android-crud",
    title: "Android User Management App",
    category: "Android",
    tags: ["Android Development"],
    description:
      "Android application with full CRUD operations, multi-form architecture, and local SQLite data management.",
    tech: ["Java", "Android Studio", "SQLite"],
    links: [],
  },
  {
    id: "quotes-generator",
    title: "Quotes Generator",
    category: "Web",
    tags: ["Web Development", "Mini Project"],
    description:
      "A clean, responsive web application that generates random quotes dynamically using HTML, CSS, and vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "GitHub", url: "https://github.com/Ahm-dev-sketch/Quotes-Generator.git" },
      { label: "Demo", url: "https://ahm-dev-sketch.github.io/Quotes-Generator/" },
    ],
  },
];

// ─── Research ──────────────────────────────────────────
export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    category: "Machine Learning",
    title: "Student Depression Level Prediction using Naive Bayes",
    objective: "Classify student depression levels from survey data",
    method: "Naive Bayes Classification",
    tools: ["Weka", "Data Mining"],
    status: "Completed",
  },
  {
    category: "Information Retrieval",
    title: "Document Retrieval System with Query Expansion",
    objective: "Improve search result relevance using IR techniques",
    method: "TF-IDF · Cosine Similarity · Rocchio · BIM · Language Models",
    tools: ["Laravel", "PHP"],
    status: "Completed",
  },
  {
    category: "Information Retrieval",
    title: "Plagiarism Detection using VSM & Cosine Similarity",
    objective: "Detect plagiarism in student thesis abstracts at Jurusan Ilmu Komputer Universitas Riau",
    method: "Vector Space Model · TF-IDF · Cosine Similarity",
    tools: ["Laravel", "PHP"],
    status: "Completed",
  },
  {
    category: "Data Science",
    title: "Information Retrieval with Language Model Approach",
    objective: "Explore language model-based document ranking",
    method: "Language Model · Query Likelihood",
    tools: ["Python", "IR"],
    status: "Completed",
  },
];

// ─── Timeline ──────────────────────────────────────────
export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: "2022",
    title: "Started S1 Sistem Informasi Degree",
    description:
      "Universitas Riau (Jurusan Ilmu Komputer) — began journey in software development",
  },
  {
    year: "2024",
    title: "KUKERTA MBKM — Desa Cantik Program",
    description: "Community contribution through digital literacy program",
  },
  {
    year: "2024",
    title: "Research: Student Depression Prediction",
    description: "First ML research project using Naive Bayes classification",
  },
  {
    year: "2025",
    title: "Internship / Project at BPS Provinsi Riau",
    description: "Built Performance Monitoring Website for institutional use",
  },
  {
    year: "2025",
    title: "Built SIPEMTRA — Travel Ticket Booking System",
    description: "Online ticket ordering web app for PT Tran Prima",
  },
  {
    year: "2025",
    title: "Developed EduMentor AI Assistant",
    description: "Built a document-based conversational AI model that parses and summarizes PDFs using LLMs",
  },
  {
    year: "2025",
    title: "Built Information Retrieval Search System",
    description: "Implemented TF-IDF, Cosine Similarity, BIM, and Query Expansion",
  },
  {
    year: "2025",
    title: "Oracle & Data Science Training — Star Core",
    description: "Completed professional data science certification program",
  },
  {
    year: "2026",
    title: "Skripsi: Plagiarism Detection using VSM",
    description: "Implemented Vector Space Model & Cosine Similarity for thesis abstract plagiarism detection",
  },
  {
    year: "2026",
    title: "Graduated (GPA 3.74/4.0)",
    description: "S1 Sistem Informasi, Universitas Riau",
    icon: "graduation",
  },
];

// ─── Social Links ──────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Ahm-dev-sketch", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ahmad-dhani-8ab26b300", icon: "linkedin" },
  { platform: "Email", url: "mailto:ahmaddhani7901@gmail.com", icon: "mail" },
  { platform: "Instagram", url: "https://www.instagram.com/amddhani_?igsh=N2h1eDc2dW04azd1", icon: "instagram" },
];

// ─── Contact Form ──────────────────────────────────────
export const CONTACT_SUBJECTS = [
  "Job Opportunity",
  "Freelance",
  "Research Collaboration",
  "Other",
];

// ─── Meta ──────────────────────────────────────────────
export const SITE_META = {
  name: "Ahmad Dhani",
  title: "Ahmad Dhani — Data Analyst & Data Engineer",
  description:
    "Portfolio of Ahmad Dhani, Information Systems graduate specializing in Data Analysis, Data Engineering, and Web Development.",
  url: "https://yourportfolio.vercel.app",
  initials: "AD",
};

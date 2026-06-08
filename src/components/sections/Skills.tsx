"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiPandas,
  SiGit,
  SiGithub,
  SiPostman,
  SiAndroidstudio,
  SiLaragon,
  SiJupyter,
  SiGooglecolab,
  SiStreamlit,
} from "react-icons/si";
import {
  Code2,
  Database,
  Search,
  Wrench,
  BrainCircuit,
  BarChart3,
  FileSearch,
  Cpu,
  Layers,
  Binary,
  Palette,
  MonitorSmartphone,
  Network,
} from "lucide-react";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  Laravel: <SiLaravel />,
  PHP: <SiPhp />,
  Java: <Code2 size={14} />,
  "Android Studio": <SiAndroidstudio />,
  MySQL: <SiMysql />,
  SQLite: <SiSqlite />,
  "REST API": <Network size={14} />,
  "Tailwind CSS": <SiTailwindcss />,
  HTML: <SiHtml5 />,
  CSS: <Palette size={14} />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,
  Pandas: <SiPandas />,
  Tableau: <BarChart3 size={14} />,
  "Machine Learning": <BrainCircuit size={14} />,
  "Naive Bayes": <Binary size={14} />,
  Forecasting: <BarChart3 size={14} />,
  "Data Analysis": <BarChart3 size={14} />,
  Weka: <Cpu size={14} />,
  "Time Series": <BarChart3 size={14} />,
  "Vector Space Model": <Binary size={14} />,
  "TF-IDF": <FileSearch size={14} />,
  "Cosine Similarity": <Search size={14} />,
  "Query Expansion": <Search size={14} />,
  "Rocchio Algorithm": <Layers size={14} />,
  "Language Models": <BrainCircuit size={14} />,
  BIM: <Database size={14} />,
  "Search Systems": <Search size={14} />,
  "Plagiarism Detection": <FileSearch size={14} />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  "VS Code": <MonitorSmartphone size={14} />,
  Postman: <SiPostman />,
  Laragon: <SiLaragon />,
  "Jupyter Notebook": <SiJupyter />,
  "Google Colab": <SiGooglecolab />,
  Streamlit: <SiStreamlit />,
};

const TAB_ICONS: Record<string, React.ReactNode> = {
  dev: <Code2 size={16} />,
  ai: <BrainCircuit size={16} />,
  ir: <Search size={16} />,
  tools: <Wrench size={16} />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("dev");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
            02 — Skills
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Technologies and methodologies I work with across software
            development, data science, and information retrieval.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-bg-secondary text-text-muted border border-border hover:border-accent/30 hover:text-text-primary"
              }`}
            >
              {TAB_ICONS[cat.id]}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={
                    prefersReducedMotion
                      ? {}
                      : { opacity: 0, scale: 0.8, y: 15 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : i * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="glass-card glass-card-hover flex items-center gap-2.5 px-4 py-3 cursor-default group"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform duration-200 flex items-center">
                    {SKILL_ICONS[skill.name] || <Code2 size={14} />}
                  </span>
                  <span className="text-sm font-medium text-text-primary whitespace-nowrap">
                    {skill.name}
                  </span>
                  {/* Proficiency dot indicator */}
                  <span className="flex gap-0.5 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

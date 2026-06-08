"use client";

import { useState } from "react";
import { ExternalLink, Award } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/data";
import ScrollReveal from "@/components/layout/ScrollReveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category === activeFilter || p.tags.includes(activeFilter)
        );

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fade-up" duration={600}>
          <div className="text-center mb-14">
            <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
              03 — Projects
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              A selection of projects spanning web development, mobile
              applications, AI/ML research, and information retrieval systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal variant="fade-up" delay={100} duration={600}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-bg-secondary text-text-muted border border-border hover:border-accent/30 hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              variant="fade-up"
              delay={(i % 3) * 100}
              className={`glass-card glass-card-hover group relative overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Card Content */}
              <div className="p-6 md:p-8 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-text-muted bg-bg-primary/50 px-2.5 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.badge && (
                    <span className="flex items-center gap-1 text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20 flex-shrink-0">
                      <Award size={12} />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-xl md:text-2xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3 mt-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors duration-200"
                      >
                        {link.label === "GitHub" ? (
                          <SiGithub size={14} />
                        ) : (
                          <ExternalLink size={14} />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

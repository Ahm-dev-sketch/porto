"use client";

import { BookOpen, FlaskConical, CheckCircle2, Clock } from "lucide-react";
import { RESEARCH_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/layout/ScrollReveal";

const CATEGORY_COLORS: Record<string, string> = {
  "Machine Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Information Retrieval": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Forecasting: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Data Science": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const STATUS_CONFIG: Record<string, { icon: React.ReactNode; className: string }> = {
  Completed: {
    icon: <CheckCircle2 size={12} />,
    className: "text-success bg-success/10 border-success/20",
  },
  "In Progress": {
    icon: <Clock size={12} />,
    className: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  Published: {
    icon: <BookOpen size={12} />,
    className: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
};

export default function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal variant="fade-up" duration={600}>
          <div className="text-center mb-14">
            <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
              04 — Research
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Research &{" "}
              <span className="text-gradient">Academic Work</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Academic research exploring the intersection of information systems,
              machine learning, and intelligent search.
            </p>
          </div>
        </ScrollReveal>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {RESEARCH_ITEMS.map((item, i) => {
            const categoryColor =
              CATEGORY_COLORS[item.category] ||
              "bg-accent/10 text-accent border-accent/20";
            const statusConf = STATUS_CONFIG[item.status] || STATUS_CONFIG["Completed"];

            return (
              <ScrollReveal
                key={i}
                variant="fade-up"
                delay={(i % 2) * 120}
                className="glass-card glass-card-hover p-6 md:p-8 group relative overflow-hidden"
              >
                {/* Category + Status */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${categoryColor}`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${statusConf.className}`}
                  >
                    {statusConf.icon}
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-start gap-3 mb-5">
                  <FlaskConical
                    size={20}
                    className="text-accent flex-shrink-0 mt-1"
                  />
                  <h3 className="font-syne font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-5" />

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-text-muted uppercase tracking-wider font-mono min-w-[70px] mt-0.5">
                      Objective
                    </span>
                    <span className="text-sm text-text-muted">
                      {item.objective}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-text-muted uppercase tracking-wider font-mono min-w-[70px] mt-0.5">
                      Method
                    </span>
                    <span className="text-sm text-text-primary">
                      {item.method}
                    </span>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

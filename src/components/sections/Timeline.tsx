"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "@/components/layout/ScrollReveal";
import {
  GraduationCap,
  Code2,
  Building2,
  FlaskConical,
  BookOpen,
  Award,
  Users,
  Database,
  BrainCircuit,
} from "lucide-react";
import { TIMELINE_ENTRIES } from "@/lib/data";

const TIMELINE_ICONS: Record<string, React.ReactNode> = {
  "Started S1 Sistem Informasi Degree": <GraduationCap size={18} />,
  "KUKERTA MBKM — Desa Cantik Program": <Users size={18} />,
  "Research: Student Depression Prediction": <FlaskConical size={18} />,
  "Internship / Project at BPS Provinsi Riau": <Building2 size={18} />,
  "Built SIPEMTRA — Travel Ticket Booking System": <Code2 size={18} />,
  "Developed EduMentor AI Assistant": <BrainCircuit size={18} />,
  "Built Information Retrieval Search System": <Code2 size={18} />,
  "Oracle & Data Science Training — Star Core": <Database size={18} />,
  "Skripsi: Plagiarism Detection using VSM": <BookOpen size={18} />,
  "🎓 Graduated with Honors (Predikat Pujian)": <Award size={18} />,
};

export default function Timeline() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
            05 — Timeline
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Center Line */}
          <motion.div
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent via-[#a78bfa] to-[#c084fc] origin-top"
            style={{
              scaleY: prefersReducedMotion ? 1 : scaleY,
              x: "-50%",
              boxShadow: "0 0 10px var(--accent-glow), 0 0 5px var(--accent)",
            }}
          />

          {/* Timeline Entries */}
          <div className="space-y-12">
            {TIMELINE_ENTRIES.map((entry, i) => {
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={i}
                  variant={isLeft ? "fade-right" : "fade-left"}
                  delay={100}
                  className={`relative flex items-start gap-6 ${
                    // Desktop: alternate left/right
                    isLeft
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  } flex-row text-left`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    } pl-12 md:pl-0`}
                  >
                    <div className="glass-card glass-card-hover p-5 md:p-6">
                      <span className="font-mono text-accent text-sm font-semibold">
                        {entry.year}
                      </span>
                      <h3 className="font-syne font-bold text-base md:text-lg text-text-primary mt-1.5 mb-2">
                        {entry.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  {/* Node Dot */}
                  <div className="absolute left-5 md:left-1/2 top-5 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary border-2 border-accent flex items-center justify-center text-accent shadow-lg shadow-accent/20">
                      {TIMELINE_ICONS[entry.title] || (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

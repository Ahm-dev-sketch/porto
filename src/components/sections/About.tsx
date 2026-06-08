"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles, GraduationCap, MapPin, Trophy, Briefcase, Globe, LucideIcon } from "lucide-react";
import { ABOUT_PARAGRAPHS, QUICK_FACTS, EXPLORING_BADGES } from "@/lib/data";

const QUICK_FACT_ICONS: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "map-pin": MapPin,
  "trophy": Trophy,
  "briefcase": Briefcase,
  "globe": Globe,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column — Story */}
          <div>
            <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
              <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
                01 — About
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
                About <span className="text-gradient">Me</span>
              </h2>
            </motion.div>

            {ABOUT_PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                variants={prefersReducedMotion ? {} : itemVariants}
                className="text-text-muted leading-relaxed mb-5 text-base md:text-lg"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Column — Quick Facts */}
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="space-y-6"
          >
            {/* Quick Facts Card */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-syne font-semibold text-lg mb-6 text-text-primary">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {QUICK_FACTS.map((fact, i) => {
                  const IconComponent = QUICK_FACT_ICONS[fact.icon];
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 text-accent">
                        {IconComponent ? <IconComponent size={18} /> : null}
                      </span>
                      <span className="text-text-muted text-sm leading-relaxed">
                        {fact.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Currently Exploring */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} className="text-accent animate-pulse-glow" />
                <h3 className="font-syne font-semibold text-lg text-text-primary">
                  Currently Exploring
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {EXPLORING_BADGES.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={
                      prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }
                    }
                    animate={
                      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="px-3 py-1.5 text-xs font-mono tracking-wide bg-accent/10 text-accent border border-accent/20 rounded-full"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

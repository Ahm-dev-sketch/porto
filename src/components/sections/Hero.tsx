"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  HERO_EYEBROW,
  HERO_ROTATING_TITLES,
  HERO_SUBTEXT,
  HERO_STATS,
} from "@/lib/data";

function AnimatedCounter({ value }: { value: string }) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!numericPart) return;
    const target = parseInt(numericPart, 10);

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericPart, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {numericPart ? count : ""}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_ROTATING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
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
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh" aria-hidden="true" />

      {/* Extra floating blob */}
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float-delayed"
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        aria-hidden="true"
      />

      <motion.div
        variants={prefersReducedMotion ? {} : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 md:pt-48 md:pb-28 w-full flex flex-col justify-center min-h-[calc(100vh-4rem)]"
      >
        {/* Eyebrow */}
        <motion.div
          variants={prefersReducedMotion ? {} : itemVariants}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <p className="font-mono text-xs md:text-sm text-emerald-400 tracking-wider uppercase font-semibold">
            {HERO_EYEBROW.replace("// ", "")}
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={prefersReducedMotion ? {} : itemVariants}
          className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-4 max-w-5xl tracking-tight"
        >
          Engineering <span className="text-gradient">data pipelines</span>, analyzing insights, and building web solutions.
        </motion.h1>

        {/* Rotating Title */}
        <motion.div
          variants={prefersReducedMotion ? {} : itemVariants}
          className="h-9 mb-4 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <span className="inline-block w-5 h-[1.5px] bg-accent/60" />
              <span className="font-mono text-accent text-sm md:text-base font-semibold tracking-wide">
                {HERO_ROTATING_TITLES[titleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={prefersReducedMotion ? {} : itemVariants}
          className="text-text-primary/85 text-base md:text-lg max-w-2xl mb-7 leading-relaxed"
        >
          {HERO_SUBTEXT}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={prefersReducedMotion ? {} : itemVariants}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="magnetic-btn group flex items-center gap-2 px-7 py-3 bg-accent border-2 border-transparent text-white font-medium rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => handleScrollTo("#contact")}
            className="magnetic-btn flex items-center gap-2 px-7 py-3 border-2 border-text-primary/20 text-text-primary font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            <MessageCircle size={16} />
            Let&apos;s Connect
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={prefersReducedMotion ? {} : itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-card px-5 py-4 text-center md:text-left"
            >
              <div className="font-syne font-bold text-2xl text-text-primary mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-text-muted text-xs tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}

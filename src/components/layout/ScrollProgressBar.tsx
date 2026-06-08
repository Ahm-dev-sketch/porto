"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let cachedTotalHeight = 0;

    const measureHeight = () => {
      cachedTotalHeight = document.documentElement.scrollHeight - window.innerHeight;
    };

    const updateProgress = () => {
      if (!barRef.current) return;
      if (cachedTotalHeight <= 0) {
        barRef.current.style.transform = "scaleX(0)";
        ticking = false;
        return;
      }
      const progress = Math.min(Math.max(window.scrollY / cachedTotalHeight, 0), 1);
      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Perform initial measure and progress calculation
    measureHeight();
    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Re-measure when the window is resized or zoomed
    const handleResize = () => {
      measureHeight();
      updateProgress();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] w-full z-[100] pointer-events-none origin-left">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-accent via-[#a78bfa] to-accent origin-left"
        style={{
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

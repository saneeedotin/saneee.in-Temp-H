"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function ScrollManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the element the viewport is
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      const total = start - end;
      const current = start - rect.top;
      
      const progress = Math.min(Math.max(current / total, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const statement1 = "We build world-class digital front doors for ambitious businesses, clinics, and independent ventures.";
  const statement2 = "Closing the gap between real-world excellence and generic digital afterthoughts.";

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-black/5 border border-[#E2E1DC] text-[11px] font-mono-tag text-[#0A0A0A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4F135]" />
          <span>// 02 • THE MANIFESTO</span>
        </div>

        {/* Scroll-Driven Typographic Reveal */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight uppercase transition-all duration-300">
          {statement1.split(" ").map((word, i, arr) => {
            const wordProgress = (i + 1) / arr.length;
            const isLit = scrollProgress >= wordProgress * 0.7;
            const isHighlighted = word.toLowerCase().includes("world-class") || word.toLowerCase().includes("doors");
            
            return (
              <span
                key={i}
                className={`inline-block mr-2.5 sm:mr-4 transition-colors duration-200 ${
                  isLit
                    ? isHighlighted
                      ? "text-[#0A0A0A] font-extrabold"
                      : "text-[#0A0A0A]"
                    : "text-[#0A0A0A]/15"
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* Sub-Manifesto paragraph */}
        <p className="mt-10 sm:mt-14 text-lg sm:text-2xl text-[#4A4A46] font-medium max-w-2xl leading-relaxed">
          {statement2}
        </p>

        {/* Contrast pair tokens */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono-tag">
          <span className="px-4 py-2 rounded-full bg-white border border-[#E2E1DC] text-[#0A0A0A] shadow-sm">
            Small business. <strong className="text-[#0A0A0A]">Big presence.</strong>
          </span>
          <span className="px-4 py-2 rounded-full bg-white border border-[#E2E1DC] text-[#0A0A0A] shadow-sm">
            Premium studio. <strong className="text-[#0A0A0A]">Local focus.</strong>
          </span>
          <span className="px-4 py-2 rounded-full bg-white border border-[#E2E1DC] text-[#0A0A0A] shadow-sm">
            Fast. Beautiful. <strong className="text-[#0A0A0A]">Built to convert.</strong>
          </span>
        </div>

      </div>
    </section>
  );
}

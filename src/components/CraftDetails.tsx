"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Terminal, Code, Sliders, CheckCircle2 } from "lucide-react";

export default function CraftDetails() {
  const [activeTab, setActiveTab] = useState<"design" | "engineering">("design");

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-[1280px] mx-auto">
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#F6F5F0] border border-[#E2E1DC] p-6 sm:p-12 md:p-16 blueprint-grid overflow-hidden">
        
        {/* Collaborative Floating Speech Bubbles (Inspired by Onlines) */}
        <div className="absolute top-8 right-8 hidden lg:flex flex-col gap-3 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md border border-[#E2E1DC] rounded-2xl p-3 shadow-md flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[#C4F135] text-[10px] font-mono">
              _&gt;
            </div>
            <div>
              <div className="text-[9px] font-mono-tag text-[#7C7C76]">Online yesterday</div>
              <div className="text-xs font-semibold text-[#0A0A0A]">Let&apos;s optimize the font load.</div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-[#E2E1DC] rounded-2xl p-3 shadow-md flex items-center gap-3 ml-6">
            <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[#C4F135] text-[10px] font-mono">
              _&gt;
            </div>
            <div>
              <div className="text-[9px] font-mono-tag text-[#7C7C76]">Online today</div>
              <div className="text-xs font-semibold text-[#0A0A0A]">Let&apos;s refine the vector geometry.</div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-tag text-[#7C7C76]">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
            <span>// 06 • THE CRAFT // INSEPARABLE DISCIPLINES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0A0A0A] uppercase tracking-tight leading-[1.05]">
            THE DETAILS <br />
            <span className="text-[#0A0A0A]">ARE NOT DETAILS</span>
            <span className="text-[#C4F135]">.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#4A4A46] leading-relaxed">
            We believe that design and engineering are indivisible. In our studio, designers code
            and engineers obsess over kerning, bezier curves, and micro-interactions to create unforgettable digital front doors.
          </p>

          {/* Interactive Switcher */}
          <div className="mt-8 flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#E2E1DC] w-fit shadow-sm">
            <button
              onClick={() => setActiveTab("design")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tag font-bold transition-all ${
                activeTab === "design"
                  ? "bg-[#0A0A0A] text-[#F6F5F0]"
                  : "text-[#7C7C76] hover:text-[#0A0A0A]"
              }`}
            >
              DESIGN PHILOSOPHY
            </button>
            <button
              onClick={() => setActiveTab("engineering")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tag font-bold transition-all ${
                activeTab === "engineering"
                  ? "bg-[#0A0A0A] text-[#F6F5F0]"
                  : "text-[#7C7C76] hover:text-[#0A0A0A]"
              }`}
            >
              ENGINEERING RIGOR
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeTab === "design" ? (
              <>
                <div className="p-4 rounded-2xl bg-white border border-[#E2E1DC] shadow-sm">
                  <div className="text-[10px] font-mono-tag text-[#0A0A0A] mb-1 font-bold">
                    01 // BESPOKE TYPOGRAPHY
                  </div>
                  <p className="text-xs text-[#7C7C76]">
                    Syne Display + Inter Body + Space Mono HUD. Calibrated leading and tracking for 100% hierarchy clarity.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E2E1DC] shadow-sm">
                  <div className="text-[10px] font-mono-tag text-[#0A0A0A] mb-1 font-bold">
                    02 // VECTOR PURITY
                  </div>
                  <p className="text-xs text-[#7C7C76]">
                    Handcrafted SVG paths, sharp mathematical curves, zero pixelated raster artifacts.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-2xl bg-white border border-[#E2E1DC] shadow-sm">
                  <div className="text-[10px] font-mono-tag text-[#0A0A0A] mb-1 font-bold">
                    01 // GPU-ACCELERATED MOTION
                  </div>
                  <p className="text-xs text-[#7C7C76]">
                    Hardware-accelerated CSS transforms and GSAP ScrollTrigger running locked at 60/120fps.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E2E1DC] shadow-sm">
                  <div className="text-[10px] font-mono-tag text-[#0A0A0A] mb-1 font-bold">
                    02 // LIGHTHOUSE 100/100
                  </div>
                  <p className="text-xs text-[#7C7C76]">
                    Zero bloatware scripts, tree-shaken bundles, and instant 5G loading times worldwide.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

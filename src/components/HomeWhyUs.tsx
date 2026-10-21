"use client";

import { Zap, Compass, Users, CheckCircle, ArrowUpRight, Gauge, Cpu, Code2 } from "lucide-react";

export default function HomeWhyUs() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-tag text-[#7C7C76]">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
            <span>// 05 • ARCHITECTURAL PILLARS [WHY CHOOSE US]</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0A0A0A] uppercase tracking-tight">
            WHY PARTNER <br />
            <span className="text-[#0A0A0A]">WITH US</span>
            <span className="text-[#C4F135]">.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
            Not a bloated agency with fifty accounts and an intern team.
            A tight, senior collective of designers and engineers working directly with founders at startup speed.
          </p>
        </div>
      </div>

      {/* Bento Grid: 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Pillar 1: The World-Class Digital Front Door (Span 7) */}
        <div className="lg:col-span-7 rounded-[32px] bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 ambient-glow opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono-tag text-[#C4F135]">
                PILLAR 01 // PERFORMANCE
              </span>
              <Gauge className="w-5 h-5 text-[#C4F135]" />
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              The World-Class Digital Front Door
            </h3>
            <p className="text-sm text-[#7C7C76] max-w-lg leading-relaxed mb-8">
              Customers judge a business on their phone screen in under three seconds.
              We engineer mobile-first, sub-second loading flagships calibrated for 100/100 Lighthouse performance.
            </p>

            {/* Performance Benchmark Bar & HUD */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono-tag">
                <span className="text-[#7C7C76]">GOOGLE LIGHTHOUSE AUDIT</span>
                <span className="text-[#C4F135] font-bold">100 / 100 VERIFIED</span>
              </div>

              {/* Progress Gauges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="font-display font-extrabold text-xl text-[#C4F135]">0.4s</div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76] mt-0.5">FIRST CONTENTFUL</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="font-display font-extrabold text-xl text-[#C4F135]">100</div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76] mt-0.5">PERFORMANCE</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                  <div className="font-display font-extrabold text-xl text-[#C4F135]">0.00</div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76] mt-0.5">CUMULATIVE SHIFT</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-tag text-[#7C7C76]">
            <span>SUB-SECOND LOADING ON 5G</span>
            <span>MOBILE-FIRST ARCHITECTURE</span>
          </div>
        </div>

        {/* Pillar 2: Zero Template Thinking (Span 5) */}
        <div className="lg:col-span-5 rounded-[32px] bg-[#F6F5F0] text-[#0A0A0A] border border-[#E2E1DC] p-6 sm:p-10 flex flex-col justify-between shadow-sm blueprint-grid">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono-tag text-[#0A0A0A]">
                PILLAR 02 // CRAFT
              </span>
              <Compass className="w-5 h-5 text-[#0A0A0A]" />
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] mb-3">
              Zero Template Thinking
            </h3>
            <p className="text-sm text-[#4A4A46] leading-relaxed mb-6">
              Custom typography, bespoke vector geometry, and zero prefabricated themes.
              Your brand never looks like an off-the-shelf clone.
            </p>

            {/* Bespoke Geometry Sample Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E2E1DC] space-y-2">
              <div className="text-[10px] font-mono-tag text-[#7C7C76]">
                BESPOKE TYPOGRAPHY MATRIX
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#E2E1DC]">
                  <span className="font-display font-extrabold">Syne 800</span>
                  <span className="font-mono-tag text-[10px] text-[#7C7C76]">Display Headers</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#E2E1DC]">
                  <span className="font-body font-medium">Inter 400</span>
                  <span className="font-mono-tag text-[10px] text-[#7C7C76]">Editorial Reading</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-mono-tag font-bold">Space Mono</span>
                  <span className="font-mono-tag text-[10px] text-[#7C7C76]">Data & HUD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E2E1DC] flex items-center justify-between text-xs font-mono-tag text-[#7C7C76]">
            <span>100% BESPOKE CODE</span>
            <span>VECTOR PRECISION</span>
          </div>
        </div>

        {/* Pillar 3: Direct Builder Access (Full width / Span 12) */}
        <div className="lg:col-span-12 rounded-[32px] bg-[#111111] text-[#F6F5F0] border border-white/10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono-tag text-[#C4F135] mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>PILLAR 03 // PARTNERSHIP</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Direct Builder Access
            </h3>
            <p className="text-sm text-[#7C7C76] leading-relaxed">
              Founders speak directly with the designers and engineers building the work.
              No account managers, no translation loss, no agency bureaucracy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[140px]">
              <div className="font-display font-bold text-2xl text-[#C4F135]">0</div>
              <div className="text-[10px] font-mono-tag text-[#7C7C76] mt-0.5">MIDDLEMEN</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[140px]">
              <div className="font-display font-bold text-2xl text-white">100%</div>
              <div className="text-[10px] font-mono-tag text-[#7C7C76] mt-0.5">SENIOR BUILDERS</div>
            </div>
            <a
              href="mailto:saneeedotin@gmail.com?subject=Project%20Direct%20Access"
              className="px-6 py-4 rounded-full bg-[#C4F135] text-[#0A0A0A] font-mono-tag text-xs font-bold hover:bg-white transition-all flex items-center gap-2 shadow-lg"
            >
              <span>CONNECT WITH FOUNDER</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

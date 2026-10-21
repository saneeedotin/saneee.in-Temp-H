"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight, Sparkles, Layers, CheckCircle2 } from "lucide-react";

export default function HomeWorks() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeModalProject, setActiveModalProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="works" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-tag text-[#7C7C76]">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
            <span>// 03 • SELECTED PORTFOLIO [04 CASE STUDIES]</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0A0A0A] uppercase tracking-tight">
            SELECTED <br />
            <span className="text-[#0A0A0A]">WORKS</span>
            <span className="text-[#C4F135]">.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
            Every project is engineered bespoke from zero. No templates, no generic libraries.
            Custom vector identity, high-conversion UX, and sub-second execution.
          </p>
        </div>
      </div>

      {/* Stacking Card Showcase */}
      <div className="space-y-12 sm:space-y-16">
        {projects.map((proj, index) => (
          <div
            key={proj.slug}
            data-cursor="view"
            className="sticky top-24 rounded-[32px] sm:rounded-[44px] bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#C4F135]/40"
            style={{
              zIndex: index + 10,
            }}
          >
            {/* Top Translucent Pill Header */}
            <div className="relative z-10 flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4F135] animate-pulse"></span>
                <span className="font-display font-bold text-base sm:text-xl text-white">
                  {proj.title}
                </span>
                <span className="hidden sm:inline-block text-[#7C7C76]">|</span>
                <span className="hidden sm:inline-block text-xs font-mono-tag text-[#C4F135]">
                  CASE STUDY 0{index + 1}
                </span>
              </div>

              {/* Flanking Coordinates */}
              <div className="flex items-center gap-4 text-xs font-mono-tag text-[#7C7C76]">
                <span className="hidden md:inline-block">YEAR / {proj.year}</span>
                <span className="hidden md:inline-block">•</span>
                <span className="text-[#F6F5F0]">NICHE / {proj.industry.toUpperCase()}</span>
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#C4F135] hover:text-[#0A0A0A] text-white text-[11px] font-mono-tag transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>EXPAND</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Project Media Visual & Rotated Edge Coordinates */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[420px] sm:min-h-[500px]">
              
              {/* Left Rotated Coordinate Tag (Desktop) */}
              <div className="hidden lg:flex lg:col-span-1 items-center justify-center border-r border-white/10 py-6">
                <div className="transform -rotate-90 text-[10px] font-mono-tag text-[#7C7C76] tracking-widest whitespace-nowrap">
                  EST. {proj.year} // REVISION 1.0
                </div>
              </div>

              {/* Main Media Preview Image */}
              <div className="lg:col-span-8 relative min-h-[340px] sm:min-h-[460px] p-6 sm:p-10 flex items-center justify-center overflow-hidden bg-[#111111]">
                <div className="relative w-full h-full max-h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={proj.coverImage}
                    alt={proj.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right Column Details & Impact Card */}
              <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#09090B]">
                <div>
                  <div className="text-[10px] font-mono-tag text-[#C4F135] mb-2">
                    KEY BENCHMARK
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-white mb-3">
                    {proj.keyImpact}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7C7C76] leading-relaxed mb-6">
                    {proj.summary}
                  </p>

                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono-tag text-[#7C7C76]">MEASURED RESULTS:</div>
                    {proj.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#E2E1DC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F135] flex-shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono-tag text-[#7C7C76]">
                    STATUS: LIVE SYSTEM
                  </span>
                  <span className="text-xs font-mono-tag text-[#C4F135] flex items-center gap-1">
                    INDEX 0{index + 1}
                  </span>
                </div>
              </div>

            </div>

            {/* Lower Glass HUD Bar */}
            <div className="p-4 sm:p-6 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tag">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#7C7C76]">SERVICES:</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-[#F6F5F0]">
                  {proj.service.toUpperCase()}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-[#7C7C76]">
                  {proj.industry}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#7C7C76]">
                <span>CLIENT: <strong className="text-white">{proj.client}</strong></span>
                <span>•</span>
                <span>STUDIO DISCIPLINE: <strong className="text-[#C4F135]">SANEEE.IN</strong></span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Case Study Modal Popup */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-[32px] bg-[#0A0A0A] text-[#F6F5F0] border border-white/15 p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C4F135] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors text-sm font-mono"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-[10px] font-mono-tag text-[#C4F135] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C4F135]" />
              CASE STUDY ARCHIVE // {activeModalProject.year}
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
              {activeModalProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono-tag text-[#F6F5F0]">
                {activeModalProject.service.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono-tag text-[#7C7C76]">
                {activeModalProject.industry}
              </span>
            </div>

            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image
                src={activeModalProject.coverImage}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#E2E1DC]">
              <div>
                <h4 className="text-xs font-mono-tag text-[#7C7C76] mb-1">KEY IMPACT:</h4>
                <p className="text-lg font-semibold text-white">{activeModalProject.keyImpact}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tag text-[#7C7C76] mb-1">OVERVIEW:</h4>
                <p className="text-[#7C7C76] leading-relaxed">{activeModalProject.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tag text-[#7C7C76] mb-2">DELIVERED RESULTS:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.results.map((r, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4F135]"></span>
                      <span className="text-xs">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono-tag text-[#7C7C76]">
                SANEEE.IN DIGITAL CRAFT
              </span>
              <a
                href="mailto:saneeedotin@gmail.com?subject=Inquiry%20regarding%20"
                className="px-4 py-2 rounded-full bg-[#C4F135] text-[#0A0A0A] font-mono-tag text-xs font-bold hover:bg-white transition-colors"
              >
                DISCUSS A SIMILAR PROJECT
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

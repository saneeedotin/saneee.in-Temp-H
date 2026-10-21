"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { ArrowUpRight, Sparkles, Terminal, Activity, Layers, Globe, Smartphone, Layout, Share2, PenTool, Cpu, Code2 } from "lucide-react";

export default function HeroWordmark() {
  const [activeAudienceIndex, setActiveAudienceIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isAiMode, setIsAiMode] = useState(false);

  const audiences = [
    "Founders",
    "Product Teams",
    "Design Leaders",
    "Visionaries",
    "Fast Movers",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [audiences.length]);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "website": return <Globe className="w-4 h-4" />;
      case "app": return <Smartphone className="w-4 h-4" />;
      case "ui-ux-design": return <Layout className="w-4 h-4" />;
      case "brand-identity": return <Sparkles className="w-4 h-4" />;
      case "social-media-marketing": return <Share2 className="w-4 h-4" />;
      case "product-design": return <Layers className="w-4 h-4" />;
      case "graphic-design": return <PenTool className="w-4 h-4" />;
      case "ai-automations": return <Cpu className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 max-w-[1280px] mx-auto">
      {/* Studio Card Container */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#F6F5F0] border border-[#E2E1DC] overflow-hidden p-6 sm:p-10 md:p-12 blueprint-grid shadow-sm">
        
        {/* Top HUD Bar (Space Mono) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E2E1DC] text-[11px] font-mono-tag text-[#7C7C76]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span className="text-[#0A0A0A] font-bold">01 // ARCHIVE.SYSTEM</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="pulse-beacon absolute inline-flex h-full w-full rounded-full bg-[#C4F135] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4F135]"></span>
            </span>
            <span className="text-[#0A0A0A] font-semibold">STUDIO BEACON: ACTIVE</span>
          </div>

          {/* Interactive AI / Performance Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 pointer-events-auto">
              <span className="text-[10px] font-mono-tag">AI WORKFLOWS</span>
              <button
                onClick={() => setIsAiMode(!isAiMode)}
                className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
                  isAiMode ? "bg-[#0A0A0A]" : "bg-[#E2E1DC]"
                }`}
                aria-label="Toggle AI Workflows view"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform bg-[#C4F135] ${
                    isAiMode ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <span className="text-[#0A0A0A] font-bold">EST. 2026 • GLOBAL STUDIO</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="pt-8 sm:pt-10 pb-8 sm:pb-12">
          
          {/* Top Logo & Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-2xl bg-[#0A0A0A] p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image
                src="/logo/final_logo-removebg-preview.svg"
                alt="saneee.in mark"
                width={28}
                height={28}
                className="filter invert w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-mono-tag font-bold text-[#0A0A0A] tracking-wider">
              // 01 • THE CREATIVE PARTNER
            </span>
          </div>

          {/* Giant Display Headline - Calibrated Scale for Total Harmony */}
          <div className="mb-8 sm:mb-10">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              DESIGNED TO BE <br />
              <span className="inline-block relative">
                DISTINGUISHED
                <span className="text-[#C4F135]">.</span>
              </span>
            </h1>
          </div>

          {/* Grid Below Headline: Supporting Copy & Live Status on Left, Rolling Carousel on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Supporting Copy & Live Badge */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-[#4A4A46] font-normal leading-relaxed max-w-xl">
                High-performance digital craft for products that dare to lead.
                We build unmistakable digital presences with custom typography, zero templates, and direct senior builder access.
              </p>

              {/* Integrated Live Status Pill */}
              <div className="inline-flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-[#E2E1DC] shadow-sm backdrop-blur-md w-fit">
                <div className="w-7 h-7 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[#C4F135] text-[10px] font-mono">
                  _&gt;
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono-tag text-[#7C7C76]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4F135]"></span>
                    ONLINE RIGHT NOW
                  </div>
                  <div className="text-xs font-medium text-[#0A0A0A]">
                    Building high-performance digital presences
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Audience Carousel & Studio Mission Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 sm:p-6 rounded-3xl bg-white/80 border border-[#E2E1DC] shadow-sm backdrop-blur-md">
                <div className="text-[10px] font-mono-tag text-[#7C7C76] mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-[#0A0A0A]" />
                  CALIBRATED FOR IMPACT
                </div>
                <div className="text-sm text-[#7C7C76] font-medium">Made specifically for:</div>
                <div className="h-10 overflow-hidden mt-1 flex items-center">
                  <span
                    key={activeAudienceIndex}
                    className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight transition-all duration-500 animate-in fade-in slide-in-from-bottom-2"
                  >
                    {audiences[activeAudienceIndex]}
                  </span>
                </div>
                <p className="mt-3 text-xs text-[#7C7C76] leading-relaxed">
                  Operating globally from Mumbai, engineering digital front doors that look and perform like global vanguard flagships.
                </p>
              </div>

              {/* Direct Builder Access Pill */}
              <div className="p-4 rounded-2xl bg-[#0A0A0A] text-[#F6F5F0] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tag text-[#C4F135]">DIRECT BUILDER ACCESS</span>
                  <span className="text-xs font-semibold text-white">Speak with senior engineers</span>
                </div>
                <a
                  href="#works"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C4F135] hover:text-[#0A0A0A] flex items-center justify-center transition-colors text-white"
                  aria-label="View works"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Service Workbench (Grid of 9 Service Cells) */}
        <div id="services" className="pt-8 border-t border-[#E2E1DC]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono-tag text-[#7C7C76] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
              CORE SERVICES WORKBENCH [09 DISCIPLINES]
            </span>
            <span className="text-[10px] font-mono-tag text-[#7C7C76] hidden sm:inline-block">
              HOVER TO EXPLORE STACK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((srv, index) => {
              const isHovered = hoveredService === srv.slug;
              return (
                <div
                  key={srv.slug}
                  onMouseEnter={() => setHoveredService(srv.slug)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 border ${
                    isHovered
                      ? "bg-[#0A0A0A] text-[#F6F5F0] border-[#0A0A0A] shadow-md -translate-y-0.5"
                      : "bg-white/60 text-[#0A0A0A] border-[#E2E1DC] hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-tag text-[#7C7C76] group-hover:text-[#C4F135] transition-colors">
                      0{index + 1} // {srv.slug.toUpperCase()}
                    </span>
                    <div className="text-[#7C7C76] group-hover:text-[#C4F135] transition-colors">
                      {getServiceIcon(srv.slug)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#7C7C76] group-hover:text-[#E2E1DC]/80 line-clamp-2 transition-colors mb-3">
                    {srv.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {srv.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-mono-tag px-2 py-0.5 rounded-full border transition-colors ${
                          isHovered
                            ? "bg-white/10 text-white/90 border-white/10"
                            : "bg-black/5 text-[#4A4A46] border-black/5"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-[#C4F135]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

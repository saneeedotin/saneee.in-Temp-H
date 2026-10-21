"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";

export default function FloatingHeader() {
  const [currentSubLabelIndex, setCurrentSubLabelIndex] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const subLabels = [
    "DIGITAL PRESENCE STUDIO",
    "DESIGN & ENGINEERING",
    "MUMBAI STUDIO",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSubLabelIndex((prev) => (prev + 1) % subLabels.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [subLabels.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F6F5F0]/90 backdrop-blur-xl border border-[#E2E1DC] shadow-lg shadow-black/5"
            : "bg-[#F6F5F0]/80 backdrop-blur-md border border-[#E2E1DC]/80 shadow-sm"
        } w-full max-w-[1240px]`}
      >
        {/* Left: Brand Wordmark & Animated Sub-Label */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 bg-[#0A0A0A] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/logo/final_logo-removebg-preview.svg"
              alt="saneee.in logo"
              width={24}
              height={24}
              className="w-full h-full object-contain filter invert"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-[15px] sm:text-[17px] tracking-tight text-[#0A0A0A] leading-none">
              SANEEE.IN
            </span>
            <div className="h-3.5 overflow-hidden mt-0.5">
              <span
                key={currentSubLabelIndex}
                className="block text-[9px] sm:text-[10px] font-mono-tag text-[#7C7C76] transition-all duration-500 transform translate-y-0 animate-in fade-in slide-in-from-bottom-1"
              >
                {subLabels[currentSubLabelIndex]}
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-bold text-[#0A0A0A] hover:bg-black/5 flex items-center gap-1 transition-colors"
              aria-expanded={isServicesOpen}
            >
              SERVICES
              <ChevronDown className="w-3 h-3 text-[#7C7C76]" />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[420px] p-3 rounded-2xl bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-mono-tag text-[#C4F135] px-2.5 py-1 flex items-center gap-1.5 border-b border-white/10 pb-2 mb-2">
                  <Sparkles className="w-3 h-3 text-[#C4F135]" />
                  <span>CORE ENGINEERING & DESIGN CRAFT</span>
                </div>
                <div className="grid grid-cols-1 gap-1 max-h-[340px] overflow-y-auto">
                  {services.map((srv) => (
                    <a
                      key={srv.slug}
                      href="#services"
                      onClick={() => setIsServicesOpen(false)}
                      className="group p-2 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#F6F5F0] group-hover:text-[#C4F135] transition-colors">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-[#7C7C76] line-clamp-1">
                          {srv.description}
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#7C7C76] group-hover:text-[#C4F135] transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button
              className="px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-bold text-[#0A0A0A] hover:bg-black/5 flex items-center gap-1 transition-colors"
              aria-expanded={isIndustriesOpen}
            >
              INDUSTRIES
              <ChevronDown className="w-3 h-3 text-[#7C7C76]" />
            </button>

            {isIndustriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[340px] p-3 rounded-2xl bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                <div className="text-[10px] font-mono-tag text-[#C4F135] px-2.5 py-1 border-b border-white/10 pb-2 mb-2">
                  CLIENT DOMAINS
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {industries.slice(0, 6).map((ind) => (
                    <a
                      key={ind.slug}
                      href="#works"
                      onClick={() => setIsIndustriesOpen(false)}
                      className="p-2 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between text-xs font-medium text-[#F6F5F0] hover:text-[#C4F135]"
                    >
                      <span>{ind.name}</span>
                      <span className="text-[10px] font-mono-tag text-[#7C7C76]">
                        {ind.tags[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#works"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-bold text-[#0A0A0A] hover:bg-black/5 transition-colors"
          >
            WORKS
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-bold text-[#0A0A0A] hover:bg-black/5 transition-colors"
          >
            ABOUT
          </a>
        </nav>

        {/* Right: Availability Beacon + Gradient Glow CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Availability Status Chip */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/5 border border-[#E2E1DC] text-[10px] font-mono-tag text-[#0A0A0A]">
            <span className="relative flex h-2 w-2">
              <span className="pulse-beacon absolute inline-flex h-full w-full rounded-full bg-[#C4F135] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4F135]"></span>
            </span>
            <span className="font-semibold">AVAILABLE Q2/Q3</span>
          </div>

          {/* CTA Button with Ambient Glow Border */}
          <div className="relative group p-[1.5px] rounded-full overflow-hidden">
            {/* Glow border gradient behind */}
            <div
              className="absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-70 blur-[4px]"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #A855F7, #EC4899)",
              }}
            />
            <a
              href="mailto:saneeedotin@gmail.com?subject=Project%20Inquiry%20via%20saneee.in"
              className="relative px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#0A0A0A] text-[#F6F5F0] text-xs font-mono-tag font-bold flex items-center gap-1.5 transition-transform active:scale-95 hover:bg-[#141414]"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4F135]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

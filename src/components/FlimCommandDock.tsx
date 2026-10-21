"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { Search, Command, ArrowUpRight, X, Sparkles, Filter } from "lucide-react";

export default function FlimCommandDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholders = [
    "Search websites…",
    "Search apps…",
    "Search brand identity…",
    "Search by industry…",
    "Search case studies…",
  ];

  // Cycling Typewriter Placeholder
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [placeholders.length]);

  // Global Keyboard Shortcut: Cmd/Ctrl + K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isOpen && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter projects by query or tag
  const filteredProjects = projects.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.industry.toLowerCase().includes(query.toLowerCase()) ||
      p.service.toLowerCase().includes(query.toLowerCase()) ||
      p.keyImpact.toLowerCase().includes(query.toLowerCase());

    const matchesFilter = selectedFilter
      ? p.service === selectedFilter || p.industry.toLowerCase().includes(selectedFilter.toLowerCase())
      : true;

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      {/* Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0A0A0A]/90 hover:bg-[#0A0A0A] text-[#F6F5F0] border border-white/15 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#C4F135]">
            <Search className="w-3 h-3" />
          </div>
          <span className="text-xs font-mono-tag text-[#7C7C76] group-hover:text-white transition-colors">
            {placeholders[placeholderIndex]}
          </span>
          <div className="flex items-center gap-1 text-[10px] font-mono-tag bg-white/10 px-2 py-0.5 rounded-full text-white/80">
            <span>⌘K</span>
          </div>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0A0A0A] text-[#F6F5F0] border border-white/15 shadow-2xl overflow-hidden">
            
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 p-4 sm:p-5 border-b border-white/10">
              <Search className="w-5 h-5 text-[#C4F135]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search studio projects, services, or industries…"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#7C7C76] focus:outline-none font-body"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#7C7C76] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Filter Pills */}
            <div className="p-4 border-b border-white/10 bg-white/[0.02] flex items-center gap-2 overflow-x-auto text-xs font-mono-tag">
              <span className="text-[#7C7C76] flex items-center gap-1 flex-shrink-0">
                <Filter className="w-3 h-3" />
                FILTER:
              </span>
              <button
                onClick={() => setSelectedFilter(null)}
                className={`px-3 py-1 rounded-full border transition-colors flex-shrink-0 ${
                  selectedFilter === null
                    ? "bg-[#C4F135] text-[#0A0A0A] border-[#C4F135] font-bold"
                    : "bg-white/5 text-[#7C7C76] border-white/10 hover:text-white"
                }`}
              >
                ALL
              </button>
              {["website", "brand-identity", "product-design", "custom-projects"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter === selectedFilter ? null : filter)}
                  className={`px-3 py-1 rounded-full border transition-colors flex-shrink-0 ${
                    selectedFilter === filter
                      ? "bg-[#C4F135] text-[#0A0A0A] border-[#C4F135] font-bold"
                      : "bg-white/5 text-[#7C7C76] border-white/10 hover:text-white"
                  }`}
                >
                  {filter.replace("-", " ").toUpperCase()}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="p-4 max-h-[380px] overflow-y-auto space-y-2">
              <div className="text-[10px] font-mono-tag text-[#7C7C76] px-2 mb-2">
                PROJECT RESULTS ({filteredProjects.length})
              </div>

              {filteredProjects.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono-tag text-[#7C7C76]">
                  NO MATCHING WORK FOUND IN ARCHIVE
                </div>
              ) : (
                filteredProjects.map((proj) => (
                  <a
                    key={proj.slug}
                    href="#works"
                    onClick={() => setIsOpen(false)}
                    className="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                        <Image
                          src={proj.coverImage}
                          alt={proj.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#C4F135] transition-colors flex items-center gap-2">
                          <span>{proj.title}</span>
                          <span className="text-[10px] font-mono-tag text-[#7C7C76]">
                            {proj.year}
                          </span>
                        </div>
                        <div className="text-xs text-[#7C7C76] line-clamp-1">
                          {proj.keyImpact}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono-tag px-2 py-0.5 rounded-full bg-white/10 text-white hidden sm:inline-block">
                        {proj.industry}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#7C7C76] group-hover:text-[#C4F135] transition-colors" />
                    </div>
                  </a>
                ))
              )}
            </div>

            {/* Footer Shortcut Guide */}
            <div className="p-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tag text-[#7C7C76]">
              <span>NAVIGATE WITH ARROWS / ENTER</span>
              <span>PRESS ESC TO CLOSE</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

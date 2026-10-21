"use client";

export default function Marquee() {
  const marks = [
    "STUDIO MEMENTO",
    "VIDHYA TUTORIALS",
    "EMS BURGER",
    "SANEEE.IN BRANDKIT",
    "ARCHIVE 2026",
    "DIGITAL PRESENCE STUDIO",
    "ENGINEERING COLLECTIVE",
    "ZERO TEMPLATE THINKING",
  ];

  return (
    <div className="relative w-full py-8 sm:py-12 overflow-hidden border-y border-[#E2E1DC] bg-white/40">
      {/* Edge Opacity Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#F6F5F0] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#F6F5F0] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-20">
        {[...marks, ...marks].map((mark, index) => (
          <div
            key={index}
            className="flex items-center gap-12 sm:gap-20 flex-shrink-0 cursor-default select-none"
          >
            <span className="font-display font-extrabold text-lg sm:text-2xl text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors tracking-tight">
              {mark}
            </span>
            <span className="text-[#C4F135] text-xs font-mono">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Instagram, Mail, Globe2 } from "lucide-react";

interface ClockInfo {
  city: string;
  tz: string;
  label: string;
}

export default function Footer() {
  const [times, setTimes] = useState<Record<string, string>>({});

  const cities: ClockInfo[] = [
    { city: "Mumbai", tz: "Asia/Kolkata", label: "IST • STUDIO HQ" },
    { city: "London", tz: "Europe/London", label: "GMT • EUROPE" },
    { city: "New York", tz: "America/New_York", label: "EST • AMERICAS" },
    { city: "Dubai", tz: "Asia/Dubai", label: "GST • MIDDLE EAST" },
  ];

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated: Record<string, string> = {};

      cities.forEach(({ city, tz }) => {
        try {
          const timeStr = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }).format(now);
          updated[city] = timeStr;
        } catch {
          updated[city] = "--:--:--";
        }
      });

      setTimes(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative px-4 sm:px-6 max-w-[1280px] mx-auto pb-16 pt-8">
      {/* Floating Dark Section Inside Light Page */}
      <div className="relative rounded-[32px] sm:rounded-[48px] bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 p-6 sm:p-12 md:p-16 shadow-2xl blueprint-grid-dark overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 ambient-glow pointer-events-none" />

        {/* Top Call to Action Block */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4 text-[11px] font-mono-tag text-[#7C7C76]">
              <span className="w-2 h-2 rounded-full bg-[#C4F135]"></span>
              <span>// INITIATE ENGAGEMENT • 2026</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[1.02]">
              LET&apos;S BUILD YOUR <br />
              <span className="text-white">DIGITAL FRONT DOOR</span>
              <span className="text-[#C4F135]">.</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-[#7C7C76] max-w-xl leading-relaxed">
              Transform your business into an unmistakable, high-conversion vanguard presence.
              Direct builder access, zero template thinking, sub-second performance.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end gap-4">
            {/* Primary Action Button with Glow Offset */}
            <div className="relative group p-[2px] rounded-full overflow-hidden w-fit">
              <div
                className="absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-80 blur-[6px]"
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #A855F7, #EC4899)",
                }}
              />
              <a
                href="mailto:saneeedotin@gmail.com?subject=Project%20Inquiry%20via%20saneee.in"
                className="relative px-6 py-4 rounded-full bg-[#0A0A0A] hover:bg-[#141414] text-white text-xs font-mono-tag font-bold flex items-center gap-3 transition-transform active:scale-95 shadow-xl"
              >
                <span>BOOK A CALL / START PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4F135]" />
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:saneeedotin@gmail.com"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tag text-[#E2E1DC] flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C4F135]" />
                <span>saneeedotin@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/saneeedotin/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tag text-[#E2E1DC] flex items-center gap-2 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C4F135]" />
                <span>@saneeedotin</span>
                <ArrowUpRight className="w-3 h-3 text-[#7C7C76]" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Live LCD Clocks */}
        <div className="relative z-10 py-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-[10px] font-mono-tag text-[#7C7C76] mb-6">
            <Clock className="w-3.5 h-3.5 text-[#C4F135]" />
            <span>GLOBAL NETWORK SYNCHRONIZATION [04 ACTIVE HUBS]</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map(({ city, label }) => (
              <div
                key={city}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="text-[10px] font-mono-tag text-[#7C7C76] mb-1">
                  {label}
                </div>
                <div className="font-display font-bold text-base sm:text-lg text-white mb-2">
                  {city}
                </div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#C4F135] tracking-widest bg-black/50 px-2.5 py-1 rounded-lg border border-white/5 w-fit">
                  {times[city] || "LOADING..."}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sitemap & Bottom Metadata */}
        <div className="relative z-10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white p-1.5 flex items-center justify-center">
              <Image
                src="/logo/final_logo-removebg-preview.svg"
                alt="saneee.in logo"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm text-white">
                SANEEE.IN
              </div>
              <div className="text-[10px] font-mono-tag text-[#7C7C76]">
                EST. 2026 • MUMBAI, INDIA
              </div>
            </div>
          </div>

          {/* Sitemap Navigation */}
          <nav className="flex flex-wrap items-center gap-4 text-xs font-mono-tag text-[#7C7C76]">
            <a href="#services" className="hover:text-white transition-colors">
              SERVICES
            </a>
            <a href="#works" className="hover:text-white transition-colors">
              WORKS
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              ABOUT
            </a>
            <a
              href="mailto:saneeedotin@gmail.com"
              className="hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </nav>

          <div className="text-[10px] font-mono-tag text-[#7C7C76]">
            © 2026 SANEEE.IN. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}

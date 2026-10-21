"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { Users, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export default function HomeAbout() {
  const [activeMember, setActiveMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-[1280px] mx-auto">
      
      {/* Container Panel: Floating Dark Section Inside Light Page */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#0A0A0A] text-[#F6F5F0] border border-white/10 overflow-hidden p-6 sm:p-12 md:p-16 shadow-2xl blueprint-grid-dark">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 ambient-glow pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-tag text-[#7C7C76]">
              <span className="w-2 h-2 rounded-full bg-[#C4F135]"></span>
              <span>// 04 • SENIOR COLLECTIVE // HUMAN ORBIT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
              REAL SENIOR <br />
              <span className="text-white">BUILDERS</span>
              <span className="text-[#C4F135]">.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#7C7C76] leading-relaxed">
              saneee.in is powered by real senior builders, not AI agents or junior account managers.
              Founders collaborate directly with the engineers and designers shaping their digital front doors.
            </p>
            {/* The One Approved Location for Tagline #3 */}
            <div className="mt-3 text-xs font-mono-tag text-[#C4F135]">
              &quot;Sanely built. Insanely good.&quot;
            </div>
          </div>
        </div>

        {/* Three Concentric Concentric Orbit Ring System */}
        <div className="relative z-10 py-16 sm:py-24 flex items-center justify-center min-h-[520px] sm:min-h-[640px] overflow-hidden">
          
          {/* Ring 3: Outer (44s) */}
          <div className="absolute w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] rounded-full border border-white/5 animate-[spin_44s_linear_infinite] pointer-events-none flex items-center justify-center">
            {/* Satellite Mark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C4F135]/40" />
          </div>

          {/* Ring 2: Middle (32s reverse) */}
          <div className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-dashed border-white/10 animate-[spin_32s_linear_infinite_reverse] pointer-events-none" />

          {/* Ring 1: Inner (22s) */}
          <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-full border border-white/10 animate-[spin_22s_linear_infinite] pointer-events-none" />

          {/* Center Badge: "A strong team of real humans." */}
          <div className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#111111] border border-[#C4F135]/40 shadow-2xl flex flex-col items-center justify-center text-center p-4">
            <div className="w-8 h-8 rounded-full bg-[#C4F135]/15 flex items-center justify-center mb-2">
              <Users className="w-4 h-4 text-[#C4F135]" />
            </div>
            <div className="text-[10px] font-mono-tag text-[#C4F135] mb-1">ZERO AI INTERNS</div>
            <div className="font-display font-bold text-sm sm:text-base text-white leading-tight">
              A strong team of real humans.
            </div>
            <div className="mt-2 text-[10px] font-mono-tag text-[#7C7C76]">
              MUMBAI HQ • GLOBAL
            </div>
          </div>

          {/* Orbiting Team Avatar Chips */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            
            {/* Param Mehta (Founder & Creative Lead) - Top Left */}
            <div className="absolute -translate-x-36 sm:-translate-x-56 -translate-y-28 sm:-translate-y-40 pointer-events-auto">
              <button
                onClick={() => setActiveMember(teamMembers[0])}
                onMouseEnter={() => setActiveMember(teamMembers[0])}
                className="group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#141414]/90 border border-white/15 hover:border-[#C4F135] transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#C4F135] transition-colors">
                    {teamMembers[0].name}
                  </div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76]">
                    FOUNDER & CREATIVE
                  </div>
                </div>
              </button>
            </div>

            {/* Hardik Solanki (Lead Full-Stack Engineer) - Top Right */}
            <div className="absolute translate-x-36 sm:translate-x-56 -translate-y-28 sm:-translate-y-36 pointer-events-auto">
              <button
                onClick={() => setActiveMember(teamMembers[1])}
                onMouseEnter={() => setActiveMember(teamMembers[1])}
                className="group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#141414]/90 border border-white/15 hover:border-[#3B82F6] transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={teamMembers[1].image}
                    alt={teamMembers[1].name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    {teamMembers[1].name}
                  </div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76]">
                    LEAD FULL-STACK ENG
                  </div>
                </div>
              </button>
            </div>

            {/* Smit Chauhan (Lead UI/UX Designer) - Bottom Left */}
            <div className="absolute -translate-x-32 sm:-translate-x-52 translate-y-32 sm:translate-y-44 pointer-events-auto">
              <button
                onClick={() => setActiveMember(teamMembers[2])}
                onMouseEnter={() => setActiveMember(teamMembers[2])}
                className="group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#141414]/90 border border-white/15 hover:border-[#A855F7] transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={teamMembers[2].image}
                    alt={teamMembers[2].name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#A855F7] transition-colors">
                    {teamMembers[2].name}
                  </div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76]">
                    LEAD UI/UX DESIGNER
                  </div>
                </div>
              </button>
            </div>

            {/* Teesha Wala (Brand & Visual Designer) - Bottom Right */}
            <div className="absolute translate-x-32 sm:translate-x-52 translate-y-32 sm:translate-y-44 pointer-events-auto">
              <button
                onClick={() => setActiveMember(teamMembers[3])}
                onMouseEnter={() => setActiveMember(teamMembers[3])}
                className="group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#141414]/90 border border-white/15 hover:border-[#EC4899] transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={teamMembers[3].image}
                    alt={teamMembers[3].name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#EC4899] transition-colors">
                    {teamMembers[3].name}
                  </div>
                  <div className="text-[9px] font-mono-tag text-[#7C7C76]">
                    BRAND & VISUAL DESIGN
                  </div>
                </div>
              </button>
            </div>

          </div>

        </div>

        {/* Dynamic Detail Card for Active Team Member */}
        <div className="relative z-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {teamMembers.map((member) => {
              const isSelected = activeMember?.id === member.id;
              return (
                <div
                  key={member.id}
                  onClick={() => setActiveMember(member)}
                  className={`p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? "bg-[#141414] border-[#C4F135]/50 shadow-lg"
                      : "bg-white/[0.03] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{member.name}</div>
                      <div className="text-[10px] font-mono-tag text-[#7C7C76]">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#7C7C76] leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

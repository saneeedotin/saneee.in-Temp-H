"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, Maximize2 } from "lucide-react";

export default function HeroMediaPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [credoIndex, setCredoIndex] = useState(0);
  const [glitchText, setGlitchText] = useState("PREMIUM STUDIO.");

  const credos = [
    "PREMIUM STUDIO.",
    "LOCAL FOCUS.",
    "ZERO TEMPLATE THINKING.",
    "WORLD-CLASS DIGITAL FRONT DOOR.",
    "DIRECT SENIOR BUILDER ACCESS."
  ];

  // Glitch / Scramble Effect
  useEffect(() => {
    const chars = "!<>-_\/[]{}—=+*^?#_01";
    let iteration = 0;
    const target = credos[credoIndex];
    
    const interval = setInterval(() => {
      setGlitchText(
        target
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);

    const nextTimeout = setTimeout(() => {
      setCredoIndex((prev) => (prev + 1) % credos.length);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(nextTimeout);
    };
  }, [credoIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative px-4 sm:px-6 max-w-[1280px] mx-auto my-6 sm:my-10">
      {/* Dark Section Panel floating inside paper page */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#09090B] border border-white/10 overflow-hidden min-h-[460px] sm:min-h-[540px] flex flex-col justify-between p-6 sm:p-10 shadow-2xl blueprint-grid-dark">
        
        {/* Background Ambient Radial Glow */}
        <div className="absolute inset-0 ambient-glow pointer-events-none" />

        {/* Top Panel HUD */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-tag text-[#7C7C76] border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#C4F135]" />
            <span className="text-[#F6F5F0]">KINETIC BRAND REEL // 2026 EDITION</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F135] animate-ping"></span>
              <span className="text-[#C4F135] font-semibold">SEAMLESS LOOP</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#C4F135] hover:text-[#0A0A0A] text-[#F6F5F0] text-[10px] font-mono-tag transition-colors flex items-center gap-1.5 cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#C4F135] hover:text-[#0A0A0A] text-[#F6F5F0] transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Center Area: Full Kinetic Reel Video Player */}
        <div className="relative z-10 my-auto py-4 flex items-center justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 aspect-video bg-black shadow-2xl group flex items-center justify-center">
            <video
              ref={videoRef}
              src="/logo/saneee.in animated.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Ambient vignette and overlay HUD */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Video Corner Badges */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono-tag text-[#C4F135] flex items-center gap-2 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F135] animate-pulse"></span>
              <span>SANEEE.IN // MOTION MANIFESTO</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono-tag text-[#F6F5F0] flex items-center gap-2 pointer-events-none">
              <span>60FPS • PRORES ENCODE</span>
            </div>
          </div>
        </div>

        {/* Bottom Glitch Ribbon Cycling Studio Credos */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C4F135] animate-ping" />
            <div className="font-mono-tag text-xs sm:text-sm font-bold text-[#F6F5F0] tracking-widest flex items-center gap-2">
              <span className="text-[#7C7C76]">// CREDO:</span>
              <span className="text-[#C4F135]">{glitchText}</span>
            </div>
          </div>

          <div className="text-[10px] font-mono-tag text-[#7C7C76] flex items-center gap-3">
            <span>COORDINATES: 19.0760° N, 72.8777° E</span>
            <span>•</span>
            <span>MUMBAI STUDIO HQ</span>
          </div>
        </div>

      </div>
    </section>
  );
}

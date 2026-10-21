"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on fine pointer devices (desktops/laptops)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest("[data-cursor='view']");
      const hoverTarget = target.closest("a, button, [role='button'], [data-cursor='hover']");

      if (viewTarget) {
        setCursorType("view");
      } else if (hoverTarget) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => setCursorType("hidden");
    const onMouseEnter = () => setCursorType("default");

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible || cursorType === "hidden") return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {cursorType === "view" ? (
        <div className="bg-[#0A0A0A] text-[#C4F135] border border-[#C4F135]/40 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-2xl scale-110 transition-transform">
          <span>VIEW</span>
          <span className="text-[12px]">↗</span>
        </div>
      ) : cursorType === "hover" ? (
        <div className="w-8 h-8 rounded-full border border-[#C4F135] bg-[#C4F135]/15 backdrop-blur-[2px] transition-all duration-200 animate-pulse" />
      ) : (
        <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] transition-all duration-150" />
      )}
    </div>
  );
}

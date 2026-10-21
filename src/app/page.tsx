import FloatingHeader from "@/components/FloatingHeader";
import HeroWordmark from "@/components/HeroWordmark";
import HeroMediaPanel from "@/components/HeroMediaPanel";
import ScrollManifesto from "@/components/ScrollManifesto";
import HomeWorks from "@/components/HomeWorks";
import HomeAbout from "@/components/HomeAbout";
import HomeWhyUs from "@/components/HomeWhyUs";
import Marquee from "@/components/Marquee";
import CraftDetails from "@/components/CraftDetails";
import Footer from "@/components/Footer";
import FlimCommandDock from "@/components/FlimCommandDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F5F0] text-[#0A0A0A] relative selection:bg-[#C4F135] selection:text-[#0A0A0A]">
      {/* 9.1 Floating Pill Header */}
      <FloatingHeader />

      {/* 9.2 Hero Section (Studio Card + 9-Cell Service Workbench) */}
      <HeroWordmark />

      {/* 9.3 Hero Media Panel (3D Specular Chrome Orb + Credo Ticker) */}
      <HeroMediaPanel />

      {/* Scroll-Driven Typographic Manifesto (Inspired by Onlines) */}
      <ScrollManifesto />

      {/* 9.4 Selected Works (Pinned Stacking Panels + 4 Case Studies) */}
      <HomeWorks />

      {/* 9.5 About — Senior Collective Human Orbit (3 Concentric Rings) */}
      <HomeAbout />

      {/* 9.6 Why Us — Bento Grid (3 Architectural Pillars) */}
      <HomeWhyUs />

      {/* 9.7 Infinite Marquee */}
      <Marquee />

      {/* Craft & Inseparable Disciplines (Design + Engineering Unity) */}
      <CraftDetails />

      {/* 9.9 Footer (4 Live LCD Clocks, Dual-Theme, Contacts & Sitemap) */}
      <Footer />

      {/* 9.8 Command Dock (Cmd+K Modal Filter) */}
      <FlimCommandDock />
    </main>
  );
}

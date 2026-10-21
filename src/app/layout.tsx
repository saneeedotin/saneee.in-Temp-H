import type { Metadata, Viewport } from "next";
import { Syne, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: "saneee.in — Designed to be distinguished.",
  description:
    "Premium digital presence studio in Mumbai. Websites, apps, UI/UX, brand identity, social media marketing, product and graphic design, and AI automations for ambitious businesses.",
  icons: {
    icon: "/logo/final_logo-removebg-preview.svg",
    apple: "/logo/short sane logo.png",
  },
  openGraph: {
    title: "saneee.in — Designed to be distinguished.",
    description:
      "Premium digital presence studio & engineering collective. World-class digital front doors for ambitious businesses.",
    url: "https://saneee.in",
    siteName: "saneee.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased bg-[#F6F5F0] text-[#0A0A0A] font-body selection:bg-[#C4F135] selection:text-[#0A0A0A]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

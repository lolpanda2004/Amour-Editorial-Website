"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  
  return (
    <ThemeProvider>
      <ScrollProgressBar />
      {children}
    </ThemeProvider>
  );
} 
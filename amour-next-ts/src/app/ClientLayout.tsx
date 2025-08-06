"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  
    return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
} 
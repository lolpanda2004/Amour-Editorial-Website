// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo as Navbar } from "@/components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Amour Editorial – Your Story, Perfectly Told",
  description:
    "Craft compelling SOPs, LORs, and personal narratives with Amour Editorial. Trusted by students and professionals globally.",
  keywords: [
    "SOP writing",
    "LOR writing",
    "Study abroad",
    "Admissions help",
    "Amour Editorial",
    "Personal statement",
    "Application writing",
  ],
  authors: [{ name: "Amour Editorial Team" }],
  creator: "Amour Editorial",
  openGraph: {
    title: "Amour Editorial",
    description:
      "SOPs and LORs that resonate with authenticity. Created with care by expert editors.",
    url: "https://your-deployment-url.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amour Editorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amour Editorial",
    description:
      "SOP and LOR editing experts. Helping you tell your story with clarity and emotion.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://your-deployment-url.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body
        className={"font-[Raleway,sans-serif] antialiased"}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

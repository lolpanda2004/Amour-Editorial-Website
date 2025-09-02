import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Crimson_Text,
  Inter,
} from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo as Navbar } from "@/components/Navbar";
import ClientLayout from "./ClientLayout";
import Footer from "@/components/Footer";
import { ThemeScript } from "@/components/theme-script";

// Fonts
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${crimsonText.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}

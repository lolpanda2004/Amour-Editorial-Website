"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SimpleDarkModeToggle } from "@/components/ui/dark-mode-toggle"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Statement of Purpose",
    href: "/services/sop",
    description:
      "Craft compelling statements that showcase your academic journey and future goals.",
  },
  {
    title: "Letter of Recommendation",
    href: "/services/lor",
    description:
      "Professional letters that highlight your strengths and accomplishments.",
  },
  {
    title: "Personal Essays",
    href: "/services/essays",
    description:
      "Tell your unique story with authenticity and impact.",
  },
  {
    title: "Cover Letters",
    href: "/services/cover-letters",
    description: "Professional cover letters that make you stand out to employers.",
  },
  {
    title: "Resume",
    href: "/services/resume",
    description:
      "Modern resumes that highlight your experience and skills effectively.",
  },
  {
    title: "Transcripts",
    href: "/services/transcripts",
    description: "Academic transcript reviews and optimization services.",
  },
]

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsServicesOpen(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background dark:bg-background shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link href="/" onClick={onClose}>
            <h2 className="text-xl font-bold text-foreground">
              Amour <span className="text-primary">Editorial</span>
            </h2>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          <Link href="/" onClick={onClose} className="px-6 py-4 text-foreground hover:bg-muted hover:text-primary font-medium transition-colors border-b border-border">Home</Link>
          <Link href="/about" onClick={onClose} className="px-6 py-4 text-foreground hover:bg-muted hover:text-primary font-medium transition-colors border-b border-border">About</Link>

          <div className="border-b border-border">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full px-6 py-4 text-left text-foreground hover:bg-muted hover:text-primary font-medium transition-colors flex items-center justify-between"
            >
              Services
              {isServicesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {isServicesOpen && (
              <div className="bg-muted/50">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    onClick={onClose}
                    className="block px-8 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    <div className="font-medium">{component.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{component.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={onClose} className="px-6 py-4 text-foreground hover:bg-muted hover:text-primary font-medium transition-colors border-b border-border">Blog</Link>
          <Link href="/success-stories" onClick={onClose} className="px-6 py-4 text-foreground hover:bg-muted hover:text-primary font-medium transition-colors border-b border-border">Success Stories</Link>
          <Link href="/contact" onClick={onClose} className="px-6 py-4 text-foreground hover:bg-muted hover:text-primary font-medium transition-colors border-b border-border">Contact Us</Link>

          <div className="px-6 py-4">
            <Link href="/booking" onClick={onClose} className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export function NavigationMenuDemo({ fontClass = "" }: { fontClass?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`w-full ${fontClass}`}>
        <nav className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-lg py-2 border-b border-border' : 'bg-transparent py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <h1 className={`text-xl font-bold transition-colors text-foreground`}>
                  Amour <span className="text-primary">Editorial</span>
                </h1>
              </Link>

              <div className="hidden lg:flex items-center space-x-4">
                <NavigationMenu>
                  <NavigationMenuList className="space-x-1">
                    <NavigationMenuItem>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-primary`} href="/">Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-primary`} href="/about">About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-muted-foreground hover:text-primary">Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-border backdrop-blur-md">
                          {components.map((component) => (
                            <ListItem key={component.title} title={component.title} href={component.href} className="rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-border hover:border-primary p-3 hover:shadow-md transition-all duration-300 hover:scale-105">
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-primary`} href="/blog">Blog</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-primary`} href="/success-stories">Success Stories</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground hover:text-primary`} href="/contact">Contact Us</NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <SimpleDarkModeToggle />
                <Link href="/booking" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">Book Consultation</Link>
              </div>

              <div className="lg:hidden flex items-center space-x-2">
                <SimpleDarkModeToggle />
                <button onClick={() => setIsMobileMenuOpen(true)} className={`p-2 rounded-lg transition-colors text-foreground hover:bg-muted`} aria-label="Open mobile menu">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

function ListItem({ title, children, href, className, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string; className?: string }) {
  return (
    <li {...props} className={className}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-gray-700 dark:focus:text-white">
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-300">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

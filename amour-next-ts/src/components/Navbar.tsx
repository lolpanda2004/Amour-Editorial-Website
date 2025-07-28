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
    description:
    "Academic transcript reviews and optimization services.",
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link href="/" onClick={onClose}>
            <h2 className="text-xl font-bold text-gray-900">
              Amour <span className="text-amber-600">Editorial</span>
            </h2>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          <Link
            href="/"
            onClick={onClose}
            className="px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
          >
            Home
          </Link>
          
          <Link
            href="/about"
            onClick={onClose}
            className="px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full px-6 py-4 text-left text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors flex items-center justify-between"
            >
              Services
              {isServicesOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {isServicesOpen && (
              <div className="bg-gray-50">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    onClick={onClose}
                    className="block px-8 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  >
                    <div className="font-medium">{component.title}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {component.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            onClick={onClose}
            className="px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
          >
            Blog
          </Link>

          <Link
            href="/success-stories"
            onClick={onClose}
            className="px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
          >
            Success Stories
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-colors border-b border-gray-100"
          >
            Contact Us
          </Link>

          {/* CTA Button */}
          <div className="px-6 py-4">
            <Link
              href="/booking"
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
            >
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
        <nav className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-gray-900'
                }`}>
                  Amour <span className="text-amber-600">Editorial</span>
                </h1>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList className="space-x-1">
                    <NavigationMenuItem>
                      <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} ${
                          isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                        }`} 
                        href="/"
                      >
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} ${
                          isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                        }`}
                        href="/about"
                      >
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className={`${
                        isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                      }`}>
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-xl rounded-lg border border-gray-200">
                          {components.map((component) => (
                            <ListItem
                              className="rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-100 hover:border-amber-200 p-3 hover:shadow-md transition-all duration-300 hover:scale-105"
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} ${
                          isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                        }`}
                        href="/blog"
                      >
                        Blog
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} ${
                          isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                        }`}
                        href="/success-stories"
                      >
                        Success Stories
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} ${
                          isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'
                        }`} 
                        href="/contact"
                      >
                        Contact Us
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {/* CTA Button */}
                <Link
                  href="/booking"
                  className="ml-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-gray-700 hover:bg-white/10'
                }`}
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

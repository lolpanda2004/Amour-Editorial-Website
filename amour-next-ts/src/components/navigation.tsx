"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Sparkles } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#resources", label: "Resources" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Heart className="h-10 w-10 text-primary group-hover:scale-110 transition-all duration-300 animate-pulse-slow" />
              <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1 animate-bounce-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-playfair gradient-text">Amour Editorial</span>
              <span className="text-xs text-gray-500 -mt-1 animate-fade-in">Crafting Your Success Story</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-primary transition-all duration-300 relative group font-medium animate-fade-in stagger-${index + 1}`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 blur-sm transition-all duration-300 group-hover:w-full opacity-70"></span>
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-500/90 transition-all duration-300 button-glow hover-lift animate-gradient text-white font-semibold px-6 py-2 rounded-full"
            >
              <Link href="#booking">
                <Sparkles className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6 animate-scale-in" /> : <Menu className="h-6 w-6 animate-scale-in" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-effect border-t border-white/20 animate-slide-up">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-gray-700 hover:text-primary hover:bg-white/50 rounded-xl transition-all duration-300 font-medium animate-slide-up stagger-${index + 1}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 button-glow rounded-full"
                >
                  <Link href="#booking" onClick={() => setIsOpen(false)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

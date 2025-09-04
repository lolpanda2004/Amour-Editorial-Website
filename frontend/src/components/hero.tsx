"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, FileText, Sparkles, Zap, Award } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroTexts = ["Academic Story", "Success Journey", "Dream Application", "Future Vision"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-400/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/60 rounded-full animate-bounce-slow"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-purple-500/60 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-3 h-3 bg-pink-500/60 rounded-full animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-blue-500/60 rounded-full animate-bounce-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg animate-slide-up">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-gray-700">Trusted by 500+ Students Worldwide</span>
                <Sparkles className="w-4 h-4 text-purple-500 animate-bounce-slow" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight font-playfair">
              <span className="animate-slide-up block">Craft Your Perfect</span>
              <span className="gradient-text block animate-slide-up stagger-2 relative">
                {heroTexts[currentText]}
                <span className="absolute -top-2 -right-2">
                  <Zap className="w-8 h-8 text-yellow-500 animate-bounce-slow" />
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up stagger-3">
              Professional <span className="font-semibold gradient-text-alt">SOP and LOR writing services</span> that
              open doors to your dream university and career opportunities with personalized storytelling.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up stagger-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-500/90 text-lg px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 button-glow animate-gradient text-white font-semibold shadow-2xl hover:shadow-primary/25"
              >
                <Link href="#services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 rounded-full border-2 border-gray-300 hover:border-primary hover:bg-primary/5 transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm font-semibold shadow-lg hover:shadow-xl"
              >
                <Link href="#booking">
                  <Users className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-scale-in stagger-5">
              <div className="text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 group">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Users className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair">500+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
                <div className="text-sm text-gray-500 mt-2">Across 50+ Countries</div>
              </div>

              <div className="text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 group">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Star className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-500 animate-bounce-slow" />
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
                <div className="text-sm text-gray-500 mt-2">Admission Guarantee</div>
              </div>

              <div className="text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 group">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <FileText className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full animate-pulse-slow"></div>
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair">1000+</div>
                <div className="text-gray-600 font-medium">Documents Crafted</div>
                <div className="text-sm text-gray-500 mt-2">With Excellence</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 animate-fade-in stagger-6">
              <p className="text-gray-500 mb-6 font-medium">Trusted by students from top universities</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Harvard</div>
                <div className="text-2xl font-bold text-gray-400">MIT</div>
                <div className="text-2xl font-bold text-gray-400">Stanford</div>
                <div className="text-2xl font-bold text-gray-400">Oxford</div>
                <div className="text-2xl font-bold text-gray-400">Cambridge</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

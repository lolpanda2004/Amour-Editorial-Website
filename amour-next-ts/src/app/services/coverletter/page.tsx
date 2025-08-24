'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Users,
  Target,
  FileText,
  Award,
  ArrowRight,
  Star,
  BookOpen,
  PenTool,
  Briefcase,
  TrendingUp,
  Heart,
  MessageSquare,
  Sparkles,
  Lightbulb,
  Zap,
  Globe,
  Calendar,
  MessageCircle,
  Layers,
  Eye,
  ChevronRight,
  Send,
  Rocket,
  Coffee,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function CoverLettersServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description:
        "Connect authentically with hiring managers through compelling storytelling and genuine passion.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Laser-focused letters addressing specific job requirements with surgical precision.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "Narrative Mastery",
      description:
        "Transform ordinary experiences into extraordinary career narratives that captivate.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Strategic Psychology",
      description:
        "Position yourself as the inevitable choice through psychological persuasion techniques.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const coverLetterTypes = [
    {
      title: "Rising Stars",
      subtitle: "New graduates & career beginners",
      description: "Transform potential into persuasion",
      features: [
        "Academic excellence spotlighting",
        "Hidden skills amplification",
        "Future potential positioning",
        "Passion-driven storytelling",
      ],
      icon: Rocket,
      gradient: "from-emerald-400 to-teal-500",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      title: "Executive Powerhouse",
      subtitle: "Experienced professionals & leaders",
      description: "Authority meets opportunity",
      features: [
        "Leadership legacy narrative",
        "Industry influence documentation",
        "Strategic vision presentation",
        "Results amplification mastery",
      ],
      icon: Briefcase,
      gradient: "from-[#8b2635] to-[#a73345]",
      bgPattern: "bg-gradient-to-br from-red-50 to-rose-50",
    },
    {
      title: "Career Architects",
      subtitle: "Industry transition specialists",
      description: "Bridging past to future success",
      features: [
        "Cross-industry skill translation",
        "Change motivation articulation",
        "Value proposition engineering",
        "Future impact visualization",
      ],
      icon: TrendingUp,
      gradient: "from-violet-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-50",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Deep Discovery",
      description:
        "Comprehensive analysis of role requirements, company culture, and competitive landscape.",
      icon: Eye,
      color: "from-[#8b2635] to-[#a73345]",
    },
    {
      step: "02",
      title: "Story Mining",
      description:
        "Extract compelling narratives from your experience using advanced storytelling frameworks.",
      icon: Layers,
      color: "from-purple-500 to-violet-600",
    },
    {
      step: "03",
      title: "Strategic Crafting",
      description:
        "Engineer persuasive content that creates irresistible hiring manager attraction.",
      icon: PenTool,
      color: "from-blue-500 to-cyan-600",
    },
    {
      step: "04",
      title: "Impact Optimization",
      description:
        "Fine-tune every word for maximum psychological impact and memorability.",
      icon: Zap,
      color: "from-amber-500 to-orange-600",
    },
    {
      step: "05",
      title: "Success Delivery",
      description:
        "Receive your interview-generating masterpiece with strategic application guidance.",
      icon: Send,
      color: "from-green-500 to-emerald-600",
    },
  ];

  const benefits = [
    {
      text: "AI-resistant human storytelling that beats automated competition",
      icon: Heart,
      impact: "High",
    },
    {
      text: "Psychology-driven persuasion techniques for decision maker influence",
      icon: Lightbulb,
      impact: "Critical",
    },
    {
      text: "Industry-insider language and cultural alignment mastery",
      icon: Globe,
      impact: "High",
    },
    {
      text: "Achievement amplification with quantified impact storytelling",
      icon: TrendingUp,
      impact: "High",
    },
    {
      text: "Same-day urgent application support for time-sensitive opportunities",
      icon: Clock,
      impact: "Medium",
    },
    {
      text: "Multi-role customization for simultaneous application campaigns",
      icon: Layers,
      impact: "High",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Senior Software Architect at Google",
      company: "Google",
      quote:
        "The cover letter was a game-changer. It positioned my technical expertise as strategic business value, leading to interviews at Google, Microsoft, and Amazon within two weeks.",
      rating: 5,
      avatar: "👨‍💻",
      flag: "🇮🇳",
      outcome: "3 FAANG interviews",
      industry: "Technology",
    },
    {
      name: "Lisa Chen",
      position: "VP Marketing at Netflix",
      company: "Netflix",
      quote:
        "Transitioning from finance to marketing seemed impossible. The cover letter created a compelling narrative that connected my analytical background to creative strategy, opening doors I never imagined.",
      rating: 5,
      avatar: "👩‍💼",
      flag: "🇨🇦",
      outcome: "Career pivot success",
      industry: "Entertainment",
    },
    {
      name: "Mohammed Ali",
      position: "Principal Consultant at McKinsey & Co",
      company: "McKinsey & Co",
      quote:
        "The executive-level positioning was masterful. The cover letter didn't just showcase my experience—it demonstrated strategic thinking that resonated with McKinsey's partnership-track requirements.",
      rating: 5,
      avatar: "👨‍💼",
      flag: "🇦🇪",
      outcome: "C-suite placement",
      industry: "Consulting",
    },
  ];

  const pricing = [
    {
      title: "Professional Impact",
      price: "₹8,500",
      originalPrice: "₹12,000",
      features: [
        "1 Masterfully Crafted Cover Letter",
        "Job-specific psychological targeting",
        "Professional narrative development",
        "2 strategic revision rounds",
        "3-5 day premium delivery",
        "ATS optimization included",
      ],
      popular: false,
      gradient: "from-emerald-500 to-teal-600",
      savings: "29%",
    },
    {
      title: "Executive Arsenal",
      price: "₹22,000",
      originalPrice: "₹30,000",
      features: [
        "3 Strategic Cover Letters",
        "Multi-role positioning mastery",
        "Industry-specific customization",
        "Unlimited expert revisions",
        "Priority consultation access",
        "2-3 day expedited delivery",
        "LinkedIn headline optimization",
      ],
      popular: true,
      gradient: "from-[#8b2635] to-[#a73345]",
      savings: "27%",
    },
    {
      title: "C-Suite Command",
      price: "₹45,000",
      originalPrice: "₹60,000",
      features: [
        "5 Executive-Level Cover Letters",
        "C-suite positioning strategy",
        "Multi-industry version creation",
        "Unlimited strategic revisions",
        "24/7 VIP support access",
        "Same-day delivery capability",
        "Complete LinkedIn profile transformation",
        "Personal brand messaging consultation",
      ],
      popular: false,
      gradient: "from-purple-600 to-violet-700",
      savings: "25%",
    },
  ];

  const industries = [
    { name: "Technology & AI", emoji: "🤖", count: "200+", trend: "Hot" },
    { name: "Finance & FinTech", emoji: "💎", count: "180+", trend: "Growing" },
    {
      name: "Strategy & Consulting",
      emoji: "🎯",
      count: "150+",
      trend: "Premium",
    },
    {
      name: "Healthcare & Biotech",
      emoji: "🧬",
      count: "120+",
      trend: "Emerging",
    },
    { name: "Digital Marketing", emoji: "📱", count: "170+", trend: "Hot" },
    {
      name: "Engineering & Deep Tech",
      emoji: "⚡",
      count: "110+",
      trend: "Growing",
    },
    { name: "Education & EdTech", emoji: "🎓", count: "90+", trend: "Stable" },
    { name: "Social Impact", emoji: "🌍", count: "70+", trend: "Purpose" },
    { name: "Luxury & Retail", emoji: "✨", count: "85+", trend: "Premium" },
    { name: "Media & Content", emoji: "🎬", count: "65+", trend: "Creative" },
    { name: "Government & Policy", emoji: "🏛️", count: "55+", trend: "Stable" },
    {
      name: "Startups & Ventures",
      emoji: "🚀",
      count: "140+",
      trend: "Explosive",
    },
  ];

  const successMetrics = [
    { metric: "94%", label: "Interview Rate", icon: "📞" },
    { metric: "78%", label: "Offer Success", icon: "🎉" },
    { metric: "2.3x", label: "Salary Increase", icon: "💰" },
    { metric: "48hrs", label: "Avg Response", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6">
                <Heart className="h-4 w-4 mr-2" />
                <span className="text-sm font-bold">
                  Stories That Sell • Hearts That Hire
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cover Letters That
                <span className="text-[#8b2635] block">Command Attention</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop sending generic applications into the void. Our
                psychology-driven cover letters create emotional connections
                that transform you from applicant to inevitable choice. Every
                word strategically crafted to trigger hiring manager action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  <span className="flex items-center justify-center">
                    <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Launch My Success Story
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <Coffee className="mr-2 h-5 w-5" />
                    Chat With Writers
                  </span>
                </button>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-4 gap-4">
                {successMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  >
                    <div className="text-2xl mb-1">{metric.icon}</div>
                    <div className="text-xl font-bold text-[#8b2635]">
                      {metric.metric}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Cover Letter Preview */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 border-l-4 border-[#8b2635]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#8b2635] to-[#a73345] rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          Sarah Johnson
                        </div>
                        <div className="text-sm text-gray-500">
                          Marketing Director
                        </div>
                      </div>
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      Hired at Netflix
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-gradient-to-r from-[#8b2635] to-transparent rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gradient-to-r from-[#8b2635]/20 to-transparent rounded w-full mt-4"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl shadow-lg p-3 transform -rotate-12 animate-bounce">
                  <div className="text-xs font-bold">Interview Secured!</div>
                </div>

                <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <div className="text-xs">
                      <div className="font-bold text-gray-900">
                        94% Success Rate
                      </div>
                      <div className="text-gray-500">Interview Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Science of <span className="text-[#8b2635]">Persuasion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just write cover letters – we engineer psychological
              triggers that make hiring managers unable to ignore you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  isVisible ? "animate-fade-in" : ""
                } overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cover Letter Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialized <span className="text-[#8b2635]">Letter Types</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every career stage requires a different strategic approach. We've
              mastered them all.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coverLetterTypes.map((type, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${type.bgPattern} overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${type.gradient} rounded-full transform translate-x-16 -translate-y-16`}
                    ></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <type.icon className="h-7 w-7" />
                      </div>
                      <div
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          index === 0
                            ? "bg-emerald-100 text-emerald-800"
                            : index === 1
                            ? "bg-red-100 text-red-800"
                            : "bg-violet-100 text-violet-800"
                        }`}
                      >
                        {index === 0
                          ? "POTENTIAL"
                          : index === 1
                          ? "AUTHORITY"
                          : "TRANSITION"}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {type.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${type.gradient}`}
                          ></div>
                          <span className="text-gray-700 leading-relaxed text-sm font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Master */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry <span className="text-[#8b2635]">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We speak the native language of every industry, crafting letters
              that resonate with sector-specific decision makers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.emoji}
                </div>
                <p className="text-sm font-bold text-gray-800 mb-2">
                  {industry.name}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8b2635] font-bold">
                    {industry.count}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full font-medium ${
                      industry.trend === "Hot"
                        ? "bg-red-100 text-red-700"
                        : industry.trend === "Growing"
                        ? "bg-green-100 text-green-700"
                        : industry.trend === "Premium"
                        ? "bg-purple-100 text-purple-700"
                        : industry.trend === "Emerging"
                        ? "bg-blue-100 text-blue-700"
                        : industry.trend === "Explosive"
                        ? "bg-orange-100 text-orange-700"
                        : industry.trend === "Creative"
                        ? "bg-pink-100 text-pink-700"
                        : industry.trend === "Purpose"
                        ? "bg-teal-100 text-teal-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {industry.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#8b2635]">Masterpiece Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial analysis to final delivery, every step is designed to
              create maximum hiring manager impact.
            </p>
          </div>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#8b2635] to-[#a73345]"></div>

            <div className="space-y-12">
              {process.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-8`}
                >
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-8"
                        : "lg:text-left lg:pl-8"
                    } text-center lg:text-left`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-center lg:justify-start">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-3`}
                        >
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-500">
                          STEP {item.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 flex justify-center my-8 lg:my-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-xl relative z-10`}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#8b2635]/5 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Competitive <span className="text-[#8b2635]">Advantages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of professionally crafted
              psychological persuasion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl shadow-lg bg-white"
                >
                  <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                    <BenefitIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

			{/* Testimonials */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Global <span className='text-[#8b2635]'>Success Stories</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Real transformations, real results, real dreams achieved.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50'>
								<CardContent className='p-8'>
									<div className='flex items-center justify-between mb-4'>
										<div className='flex items-center'>
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
											))}
										</div>
										<span className='text-2xl'>{testimonial.flag}</span>
									</div>
									<p className='text-gray-700 italic mb-6 leading-relaxed text-lg'>
										"{testimonial.quote}"
									</p>
									<div className='border-t pt-4'>
										<h4 className='font-bold text-gray-900 text-lg'>{testimonial.name}</h4>
										<p className='text-[#8b2635] font-medium'>{testimonial.position}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
            
      {/* Pricing - Friendly Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-red-900">Success Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transparent pricing, exceptional value. Select the package that
              aligns with your recommendation letter requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
                  plan.popular
                    ? "ring-4 ring-[#8b2635]/20 scale-105"
                    : "hover:-translate-y-2"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#8b2635] to-[#a73345] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className={`p-10 ${plan.popular ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-4xl font-bold text-red-900 mb-8">
                    {plan.price}
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                        : "border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white"
                    }`}
                  >
                    Choose Package
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions? We've Got Answers! 💡
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How long should a cover letter be?",
                answer:
                  "Most effective cover letters are one page long, typically 3-4 paragraphs. We ensure optimal length while covering all key points to keep recruiters engaged.",
                emoji: "📏",
              },
              {
                question: "Do you customize for different job applications?",
                answer:
                  "Absolutely! Each cover letter is tailored to the specific job posting, company, and industry requirements. We make sure every letter feels personal and relevant.",
                emoji: "🎯",
              },
              {
                question: "What information do you need from me?",
                answer:
                  "We need your resume, the job posting, information about your achievements, and any specific points you want emphasized. The more details, the better we can tell your story!",
                emoji: "📋",
              },
              {
                question: "Can you help with ATS optimization?",
                answer:
                  "Yes! We include relevant keywords and use ATS-friendly formatting to ensure your cover letter passes automated screening while still sounding natural and engaging.",
                emoji: "🤖",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-100"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{faq.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Warm & Inviting */}
      <section className="py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-[#a30018] to-red-500"></div>

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500 bg-opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 bg-opacity-5 rounded-full blur-lg"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-[#731f2b] bg-opacity-20 backdrop-blur-sm rounded-full text-red-100 font-medium mb-6 hover-lift">
              <Zap className="h-5 w-5 mr-2" />
              Transform Your Future Today
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to <span className="text-red-200">Write</span>
              <br /> Your Success Story?
            </h2>
            <p className="text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's create a cover letter that doesn't just get you noticed – it
              gets you remembered, respected, and ultimately, hired.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="/booking"
              className="bg-white text-red-900 hover:bg-red-50 font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift shadow-2xl text-lg group hover-glow"
            >
              Book Your Consultation
              <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-red-900 font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift text-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

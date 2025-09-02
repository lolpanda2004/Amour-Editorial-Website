"use client";

import { Card, CardContent } from '@/components/ui/card'
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
    Eye,
    Zap,
    Shield,
    BarChart3,
    Layers,
    Search,
    Sparkles,
    Heart,
    Rocket,
    Coffee,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";

export default function ResumeServicePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: Search,
            title: 'ATS-Optimized',
            description: 'Formatted to pass through Applicant Tracking Systems and reach human recruiters.',
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            icon: Target,
            title: 'Industry-Targeted',
            description: 'Customized content and keywords relevant to your specific industry and role.',
            gradient: "from-green-500 to-emerald-500",
        },
        {
            icon: Sparkles,
            title: 'Impact-Focused',
            description: 'Quantified achievements and results-driven content that demonstrates your value.',
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Award,
            title: 'Modern Design',
            description: 'Professional, clean layouts that make a strong first impression.',
            gradient: "from-amber-500 to-orange-500",
        },
    ]

    const resumeTypes = [
        {
            title: 'Entry-Level Resume',
            description: 'Perfect for new graduates and career starters',
            features: [
                'Education and coursework highlights',
                'Internship and project experience',
                'Skills and certifications focus',
                'Professional formatting'
            ],
            icon: BookOpen,
            gradient: 'from-emerald-400 to-teal-500',
            bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
        },
        {
            title: 'Professional Resume',
            description: 'For experienced professionals seeking advancement',
            features: [
                'Career progression showcase',
                'Achievement quantification',
                'Leadership experience emphasis',
                'Industry-specific keywords'
            ],
            icon: Briefcase,
            gradient: 'from-[#8b2635] to-[#a73345]',
            bgPattern: "bg-gradient-to-br from-red-50 to-rose-50",
        },
        {
            title: 'Executive Resume',
            description: 'For senior leaders and C-level positions',
            features: [
                'Strategic accomplishments focus',
                'Board and leadership roles',
                'Revenue and growth metrics',
                'Executive summary optimization'
            ],
            icon: TrendingUp,
            gradient: 'from-violet-500 to-purple-600',
            bgPattern: "bg-gradient-to-br from-violet-50 to-purple-50",
        },
    ]

    const process = [
        {
            step: '1',
            title: 'Career Analysis',
            description: 'Comprehensive review of your professional journey and target opportunities.',
            icon: Eye,
            color: "from-[#8b2635] to-[#a73345]",
        },
        {
            step: '2',
            title: 'Strategic Planning',
            description: 'Identify key achievements and develop compelling narrative structure.',
            icon: Layers,
            color: "from-purple-500 to-violet-600",
        },
        {
            step: '3',
            title: 'Professional Writing',
            description: 'Craft persuasive content with industry-specific keywords and quantified results.',
            icon: PenTool,
            color: "from-blue-500 to-cyan-600",
        },
        {
            step: '4',
            title: 'Design Excellence',
            description: 'Apply modern, ATS-friendly formatting for maximum visual impact.',
            icon: Zap,
            color: "from-amber-500 to-orange-600",
        },
        {
            step: '5',
            title: 'Quality Assurance',
            description: 'Multiple rounds of editing and optimization to ensure perfection.',
            icon: Shield,
            color: "from-green-500 to-emerald-600",
        },
    ]

    const benefits = [
        {
            icon: Shield,
            text: 'ATS-compliant formatting and strategic optimization',
        },
        {
            icon: Target,
            text: 'Industry-specific keywords and terminology integration',
        },
        {
            icon: BarChart3,
            text: 'Quantified achievements and measurable impact metrics',
        },
        {
            icon: Layers,
            text: 'Professional design with clean, modern layout',
        },
        {
            icon: FileText,
            text: 'Multiple format delivery (PDF, Word, LinkedIn-ready)',
        },
        {
            icon: Users,
            text: 'Ongoing support and strategic career guidance',
        },
    ]

    const testimonials = [
        {
            name: 'Anita Sharma',
            position: 'Senior Data Scientist at Microsoft',
            quote: 'My new resume helped me land interviews at top tech companies. The way they highlighted my ML projects and impact was perfect.',
            rating: 5,
            company: 'Microsoft',
            avatar: "👩‍💻",
            flag: "🇮🇳",
            outcome: "3 Tech Giants",
            industry: "Technology",
        },
        {
            name: 'Carlos Rodriguez',
            position: 'Marketing Director at Unilever',
            quote: 'The resume transformation was incredible. It perfectly showcased my campaign successes and leadership experience.',
            rating: 5,
            company: 'Unilever',
            avatar: "👨‍💼",
            flag: "🇲🇽",
            outcome: "C-suite Ready",
            industry: "Marketing",
        },
        {
            name: 'Dr. Sarah Kim',
            position: 'Research Director at Pfizer',
            quote: 'As a PhD transitioning to industry, they helped me translate my academic experience into industry-relevant achievements.',
            rating: 5,
            company: 'Pfizer',
            avatar: "👩‍🔬",
            flag: "🇰🇷",
            outcome: "Career Pivot",
            industry: "Healthcare",
        },
    ]

    const pricing = [
        {
            title: 'Professional Resume',
            price: '₹8,000',
            originalPrice: "₹11,000",
            features: [
                'Complete resume rewrite',
                'ATS optimization',
                'Professional formatting',
                '2 rounds of revisions',
                'PDF and Word formats',
                '5-7 day delivery',
            ],
            savings: "27%",
        },
        {
            title: 'Career Advancement',
            price: '₹18,000',
            originalPrice: "₹25,000",
            features: [
                'Resume + Cover Letter',
                'LinkedIn profile optimization',
                'Industry keyword research',
                'Unlimited revisions',
                'Priority support',
                '3-5 day delivery',
            ],
            popular: true,
            savings: "28%",
        },
        {
            title: 'Executive Package',
            price: '₹35,000',
            originalPrice: "₹48,000",
            features: [
                'Executive resume + Bio',
                'Cover letter + LinkedIn',
                'Personal branding consultation',
                'Multiple industry versions',
                'Unlimited revisions',
                '24/7 priority support',
                'Same-day delivery available',
            ],
            savings: "27%",
        },
    ]

    const industries = [
        { name: 'Technology & Software', emoji: '💻', count: "300+", trend: "Hot" },
        { name: 'Finance & Investment Banking', emoji: '💰', count: "250+", trend: "Premium" },
        { name: 'Consulting & Strategy', emoji: '📊', count: "200+", trend: "Growing" },
        { name: 'Healthcare & Life Sciences', emoji: '🏥', count: "180+", trend: "Stable" },
        { name: 'Marketing & Digital Media', emoji: '📱', count: "220+", trend: "Hot" },
        { name: 'Engineering & Manufacturing', emoji: '⚙️', count: "160+", trend: "Growing" },
        { name: 'Sales & Business Development', emoji: '📈', count: "190+", trend: "Hot" },
        { name: 'Human Resources', emoji: '👥', count: "120+", trend: "Stable" },
        { name: 'Operations & Supply Chain', emoji: '🚚', count: "110+", trend: "Growing" },
        { name: 'Legal & Compliance', emoji: '⚖️', count: "90+", trend: "Stable" },
        { name: 'Education & Research', emoji: '🎓', count: "100+", trend: "Purpose" },
        { name: 'Non-profit & Government', emoji: '🏛️', count: "80+", trend: "Purpose" }
    ]

    const resumeSections = [
        {
            title: 'Executive Summary',
            description: 'Compelling professional overview that captures attention in seconds',
            icon: FileText
        },
        {
            title: 'Core Competencies',
            description: 'Strategic keyword placement for ATS and human review optimization',
            icon: Target
        },
        {
            title: 'Professional Experience',
            description: 'Achievement-focused narratives with quantified business impact',
            icon: Briefcase
        },
        {
            title: 'Education & Credentials',
            description: 'Relevant qualifications and continuous learning highlights',
            icon: Award
        },
        {
            title: 'Technical Expertise',
            description: 'Industry-specific tools, technologies, and methodologies',
            icon: Zap
        },
        {
            title: 'Additional Value',
            description: 'Publications, projects, leadership roles, and key contributions',
            icon: BarChart3
        }
    ]

    const stats = [
        { number: '95%', label: 'Interview Success Rate', icon: TrendingUp, emoji: "📞" },
        { number: '3.2x', label: 'More Callbacks', icon: Eye, emoji: "⚡" },
        { number: '92%', label: 'ATS Pass Rate', icon: Shield, emoji: "🛡️" },
        { number: '2500+', label: 'Careers Transformed', icon: Users, emoji: "🎉" },
    ]


    return (
        <div className='min-h-screen bg-white pt-16'>
            {/* Hero Section - Matching Cover Letter Style */}
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
                                <Zap className="h-4 w-4 mr-2" />
                                <span className="text-sm font-bold">
                                    Career Excellence • Professional Impact
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Resumes That
                                <span className="text-[#8b2635] block">Command Respect</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Transform your professional story into a compelling narrative that opens doors 
                                to executive opportunities and accelerates your career trajectory. Every word 
                                strategically crafted to position you as the inevitable choice.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button className="group bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                                    <span className="flex items-center justify-center">
                                        <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                                        Start Your Transformation
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button className="group border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300">
                                    <span className="flex items-center justify-center">
                                        <Coffee className="mr-2 h-5 w-5" />
                                        View Success Stories
                                    </span>
                                </button>
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
                                {/* Main Resume Preview */}
                                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 border-l-4 border-[#8b2635]">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-[#8b2635] to-[#a73345] rounded-full flex items-center justify-center">
                                                <FileText className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">
                                                    Alex Chen
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Senior Product Manager
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                            Hired at Google
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
                                    <div className="text-xs font-bold">95% Success Rate!</div>
                                </div>

                                <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-lg p-4 transform rotate-6">
                                    <div className="flex items-center space-x-2">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <div className="text-xs">
                                            <div className="font-bold text-gray-900">
                                                ATS Optimized
                                            </div>
                                            <div className="text-gray-500">Interview Ready</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Overview - Matching Cover Letter Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Professional <span className="text-[#8b2635]">Excellence Standards</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We deliver resumes that meet the demanding standards of Fortune 500 
                            organizations and executive search consultants worldwide.
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

            {/* Resume Types - Matching Cover Letter Style */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Specialized <span className="text-[#8b2635]">Resume Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized resume strategies designed for professionals at every career stage, 
                            from ambitious newcomers to seasoned executives.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {resumeTypes.map((type, index) => (
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
                                                    ? "STARTER"
                                                    : index === 1
                                                    ? "PROFESSIONAL"
                                                    : "EXECUTIVE"}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {type.title}
                                        </h3>
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

            {/* Resume Sections - Dark Theme with Brand Colors */}
            <section className='py-24 bg-gradient-to-br from-gray-900 to-[#8b2635]'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl font-bold text-white mb-6'>
                            Strategic Resume <span className='text-red-200'>Architecture</span>
                        </h2>
                        <p className='text-lg text-red-100 max-w-3xl mx-auto'>
                            Every section meticulously crafted to maximize impact and ensure 
                            your professional story resonates with hiring decision-makers.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {resumeSections.map((section, index) => (
                            <div key={index} className='bg-gray-800/50 backdrop-blur-sm border border-red-200/20 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:border-red-200/40 hover:scale-105'>
                                <section.icon className='h-8 w-8 text-red-200 mb-4' />
                                <h4 className='text-lg font-semibold text-white mb-3'>
                                    {section.title}
                                </h4>
                                <p className='text-red-100 leading-relaxed text-sm'>
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries - Professional Grid with Brand Colors */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Industry <span className="text-[#8b2635]">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Deep sector knowledge ensuring your resume speaks the language 
                            of industry leaders and hiring decision-makers across all domains.
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

            {/* Process Steps - Matching Cover Letter Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Proven <span className="text-[#8b2635]">Methodology</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach refined through thousands of successful 
                            career transformations across global organizations.
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
                            career documentation and strategic positioning.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
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

            {/* Testimonials - Matching Cover Letter Style */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                            Global <span className='text-[#8b2635]'>Success Stories</span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Real transformations from professionals who trusted us with their most important career decisions.
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
                                        <div className="flex items-center justify-between mt-2">
                                            <p className='text-sm text-amber-400 font-medium'>{testimonial.company}</p>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                                {testimonial.outcome}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Matching Cover Letter Style */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 animate-fade-in">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Choose Your <span className="text-[#8b2635]">Success Package</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Transparent pricing, exceptional value. Select the package that
                            aligns with your career advancement requirements.
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
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="text-4xl font-bold text-[#8b2635]">
                                            {plan.price}
                                        </div>
                                        {plan.originalPrice && (
                                            <>
                                                <div className="text-lg text-gray-400 line-through">
                                                    {plan.originalPrice}
                                                </div>
                                                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">
                                                    Save {plan.savings}
                                                </div>
                                            </>
                                        )}
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
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Questions? We've Got Answers! 💡
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                question: "How long does the resume writing process take?",
                                answer:
                                    "Our standard turnaround is 5-7 business days for professional resumes. Executive packages take 3-5 days with priority handling. Same-day delivery is available for urgent requests.",
                                emoji: "⏱️",
                            },
                            {
                                question: "Do you guarantee ATS compatibility?",
                                answer:
                                    "Absolutely! All our resumes are formatted to pass through major ATS systems while maintaining visual appeal. We test compatibility across multiple platforms to ensure maximum reach.",
                                emoji: "🤖",
                            },
                            {
                                question: "What information do you need to get started?",
                                answer:
                                    "We need your current resume, target job descriptions, career achievements, and specific goals. The more details you provide, the more compelling we can make your story!",
                                emoji: "📋",
                            },
                            {
                                question: "How many revisions are included?",
                                answer:
                                    "Professional packages include 2 rounds of revisions, while Career Advancement and Executive packages offer unlimited revisions until you're completely satisfied.",
                                emoji: "🔄",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-red-100"
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

            {/* CTA Section - Matching Cover Letter Style */}
            <section className="py-24 bg-gradient-to-r from-[#8b2635] via-[#a73345] to-[#8b2635] relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-red-500"></div>

                {/* Floating background elements */}
                <div className="absolute top-20 left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500 bg-opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 bg-opacity-5 rounded-full blur-lg"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
                    <div className="mb-8">
                        <div className="inline-flex items-center px-6 py-3 bg-[#731f2b] bg-opacity-20 backdrop-blur-sm rounded-full text-red-100 font-medium mb-6 hover-lift">
                            <Zap className="h-5 w-5 mr-2" />
                            Transform Your Career Today
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to <span className="text-red-200">Accelerate</span>
                            <br /> Your Career Success?
                        </h2>
                        <p className="text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Let's craft a resume that doesn't just showcase your experience – it 
                            positions you as the strategic leader organizations need.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <a
                            href="/booking"
                            className="bg-white text-[#8b2635] hover:bg-red-50 font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift shadow-2xl text-lg group hover-glow"
                        >
                            Book Your Consultation
                            <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#8b2635] font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift text-lg"
                        >
                            Get Free Quote
                        </a>
                    </div>
                </div>
            </section> 
        </div>
    )
}
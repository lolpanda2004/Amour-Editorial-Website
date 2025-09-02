"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, BookOpen, Users, Calendar } from "lucide-react"

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "SOP Template Library",
      description: "Download professionally crafted SOP templates for different fields and programs.",
      type: "Templates",
      items: "15+ Templates",
      action: "Download Free",
    },
    {
      icon: Video,
      title: "Webinar Series",
      description: "Join our expert-led webinars on application strategies and writing techniques.",
      type: "Webinars",
      items: "Weekly Sessions",
      action: "Register Now",
    },
    {
      icon: BookOpen,
      title: "Writing Guides",
      description: "Comprehensive guides covering every aspect of academic and professional writing.",
      type: "Guides",
      items: "20+ Guides",
      action: "Access Library",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other applicants, share experiences, and get peer feedback.",
      type: "Community",
      items: "1000+ Members",
      action: "Join Community",
    },
    {
      icon: Calendar,
      title: "Application Tracker",
      description: "Keep track of deadlines, requirements, and progress across all your applications.",
      type: "Tools",
      items: "Free Tool",
      action: "Start Tracking",
    },
    {
      icon: Download,
      title: "Checklist Collection",
      description: "Downloadable checklists to ensure you never miss important application steps.",
      type: "Checklists",
      items: "10+ Checklists",
      action: "Download All",
    },
  ]

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of free resources to support your application journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{resource.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{resource.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.items}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Access</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter and get access to premium resources, early webinar access, and expert tips
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

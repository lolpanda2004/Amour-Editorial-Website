"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Lightbulb, Users, Shield, Clock } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We believe every story deserves to be told with authenticity and impact.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on helping you achieve your academic and professional aspirations.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every document we craft.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using creative approaches to make your application stand out.",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const achievements = [
    { icon: Users, number: "500+", label: "Students Helped", color: "text-blue-500" },
    { icon: Award, number: "98%", label: "Success Rate", color: "text-green-500" },
    { icon: Clock, number: "7+", label: "Years Experience", color: "text-purple-500" },
    { icon: Shield, number: "100%", label: "Satisfaction", color: "text-orange-500" },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-playfair">
            About <span className="gradient-text">Amour Editorial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded with <span className="font-semibold gradient-text-alt">love for storytelling</span> and a passion
            for helping students achieve their dreams, Amour Editorial specializes in crafting compelling academic
            documents that open doors to opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-right">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 font-playfair">
              Our <span className="gradient-text">Journey</span>
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Amour Editorial, we understand that behind every application is a unique individual with dreams,
                aspirations, and a story worth telling. Our team of{" "}
                <span className="font-semibold text-primary">experienced writers and editors</span> work closely with
                you to bring out your authentic voice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience in academic writing and a deep understanding of what makes applications
                successful, we've helped <span className="font-semibold gradient-text-alt">hundreds of students</span>{" "}
                gain admission to their dream institutions and secure their ideal career opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover-lift animate-scale-in stagger-${index + 1}`}
                  >
                    <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900 font-playfair">{achievement.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-400/30 rounded-3xl transform rotate-6 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl transform -rotate-3 animate-float"></div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our team at work"
                className="relative rounded-3xl shadow-2xl w-full h-auto hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-sm font-semibold text-gray-700">Currently helping 50+ students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-up stagger-${index + 1} group overflow-hidden relative`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-playfair">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-500/10 rounded-3xl p-12 backdrop-blur-sm border border-white/30 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Ready to Start Your <span className="gradient-text">Success Story</span>?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who trusted us with their academic journey. Let's craft your perfect
              application together.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div className="animate-bounce-slow">
                <div className="text-3xl font-bold gradient-text font-playfair">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold gradient-text font-playfair">48h</div>
                <div className="text-gray-600 font-medium">Quick Turnaround</div>
              </div>
              <div className="animate-bounce-slow" style={{ animationDelay: "1s" }}>
                <div className="text-3xl font-bold gradient-text font-playfair">∞</div>
                <div className="text-gray-600 font-medium">Unlimited Revisions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

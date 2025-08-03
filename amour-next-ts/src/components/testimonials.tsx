"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "MBA Student at Harvard",
      content:
        "Amour Editorial transformed my SOP into a compelling narrative that truly reflected my journey. I got accepted into my dream MBA program!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "PhD Candidate at MIT",
      content:
        "The team understood my research background perfectly and crafted an SOP that highlighted my potential. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Medical Student at Johns Hopkins",
      content:
        "Professional, timely, and exceptional quality. They helped me articulate my passion for medicine in a way I never could.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Kim",
      role: "Engineering Graduate at Stanford",
      content:
        "The LOR they wrote for me was outstanding. It perfectly captured my technical skills and leadership potential.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Thompson",
      role: "Law Student at Yale",
      content:
        "Incredible attention to detail and understanding of what admissions committees look for. Worth every penny!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Wilson",
      role: "Business Analyst at Goldman Sachs",
      content: "They helped me transition from academia to industry with a perfectly crafted professional narrative.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Success Stories</h3>
            <p className="text-lg text-gray-600 mb-6">
              Ready to become our next success story? Let us help you craft your perfect application.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Editorial Street", "Writing District, WD 12345", "United States"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@amoureditorial.com", "support@amoureditorial.com"],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Contact Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-playfair">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your journey? Contact us today for a{" "}
            <span className="font-semibold gradient-text-alt">free consultation</span> and let's discuss how we can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl animate-slide-right hover-lift bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 font-playfair flex items-center">
                <Send className="w-8 h-8 mr-3 text-primary" />
                Send us a Message
              </CardTitle>
              <p className="text-gray-600">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-500 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-500/90 transition-all duration-300 py-4 text-lg font-semibold rounded-xl button-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in stagger-${index + 1} group bg-white/80 backdrop-blur-sm overflow-hidden relative`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`p-4 bg-gradient-to-br ${info.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-600 leading-relaxed mb-1 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Interactive Map placeholder with enhanced design */}
            <Card className="border-0 shadow-xl overflow-hidden hover-lift bg-white/80 backdrop-blur-sm">
              <div className="h-80 bg-gradient-to-br from-primary/20 via-purple-400/20 to-pink-400/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-30"></div>
                <div className="text-center relative z-10">
                  <div className="mb-6">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce-slow" />
                    <Sparkles className="h-6 w-6 text-purple-500 absolute top-0 right-1/2 animate-pulse-slow" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">Visit Our Office</h3>
                  <p className="text-gray-600 mb-4">Interactive Map Coming Soon</p>
                  <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm font-medium text-gray-700">We're here to help!</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick contact options */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 py-4 rounded-xl font-semibold hover:scale-105"
              >
                <a href="tel:+15551234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 py-4 rounded-xl font-semibold hover:scale-105 bg-transparent"
              >
                <a href="mailto:info@amoureditorial.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Response time guarantee */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-white/90 via-blue-50/90 to-purple-50/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">
              <span className="gradient-text">Quick Response</span> Guarantee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 font-playfair group-hover:scale-110 transition-transform duration-300">
                  &lt; 2h
                </div>
                <div className="text-gray-600 font-medium">Email Response</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 font-playfair group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text mb-2 font-playfair group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Response Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, FileText, Upload, Sparkles, Star, Award, Zap } from "lucide-react"

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    program: "",
    deadline: "",
    urgency: "",
    details: "",
    files: null as FileList | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    console.log("Booking submitted:", formData)
    setIsSubmitting(false)
    alert("Thank you for your booking! We'll contact you within 24 hours to confirm your consultation.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      files: e.target.files,
    }))
  }

  const services = [
    "Statement of Purpose (SOP)",
    "Letter of Recommendation (LOR)",
    "Personal Statement",
    "Motivation Letter",
    "Essay Writing",
    "Application Review",
    "Consultation Only",
  ]

  const urgencyLevels = ["Standard (5-7 days)", "Priority (3-4 days)", "Rush (24-48 hours)", "Emergency (Same day)"]

  return (
    <section
      id="booking"
      className="py-24 bg-gradient-to-br from-primary/5 via-purple-600/5 to-pink-500/5 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Book Consultation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-playfair">
            Book Your <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ready to get started? Fill out the form below and we&apos;ll schedule a{" "}
            <span className="font-semibold gradient-text-alt">personalized consultation</span> to discuss your needs and
            create your success plan.
          </p>
        </div>

        <Card className="border-0 shadow-2xl animate-slide-up bg-white/90 backdrop-blur-sm hover-lift">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-t-3xl">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">Free Consultation Booking</CardTitle>
            <p className="text-gray-600 text-lg">Get personalized guidance for your application journey</p>
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-600">100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-600">30-45 Minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-600">Expert Advice</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 font-playfair flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    1
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="booking-name" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="booking-email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="booking-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="booking-phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="booking-program" className="block text-sm font-semibold text-gray-700">
                      Target Program/Field
                    </label>
                    <Input
                      id="booking-program"
                      name="program"
                      type="text"
                      value={formData.program}
                      onChange={handleChange}
                      placeholder="e.g., MBA, Computer Science PhD, Medical School"
                      className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 font-playfair flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    2
                  </div>
                  Service Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="booking-service" className="block text-sm font-semibold text-gray-700">
                      Service Needed *
                    </label>
                    <Select onValueChange={(value: string) => setFormData((prev) => ({ ...prev, service: value }))}>
                      <SelectTrigger className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="booking-urgency" className="block text-sm font-semibold text-gray-700">
                      Timeline *
                    </label>
                    <Select onValueChange={(value: string) => setFormData((prev) => ({ ...prev, urgency: value }))}>
                      <SelectTrigger className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="booking-deadline" className="block text-sm font-semibold text-gray-700">
                    Application Deadline
                  </label>
                  <Input
                    id="booking-deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl py-3"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 font-playfair flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    3
                  </div>
                  Project Details
                </h3>
                <div className="space-y-2">
                  <label htmlFor="booking-details" className="block text-sm font-semibold text-gray-700">
                    Tell us about your background and goals *
                  </label>
                  <Textarea
                    id="booking-details"
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please provide details about your background, target programs, specific requirements, and any other relevant information..."
                    className="w-full border-2 border-gray-200 focus:border-primary transition-colors duration-300 rounded-xl"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 font-playfair flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    4
                  </div>
                  Supporting Documents (Optional)
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-primary transition-colors duration-300 bg-gray-50/50">
                  <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Upload your documents</h4>
                  <p className="text-gray-600 mb-4">Upload your resume, transcripts, or other relevant documents</p>
                  <input
                    id="booking-files"
                    name="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("booking-files")?.click()}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl px-6 py-3"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Files
                  </Button>
                  {formData.files && (
                    <p className="text-sm text-primary font-medium mt-3">{formData.files.length} file(s) selected</p>
                  )}
                </div>
              </div>

              {/* Consultation Preferences */}
              <div className="bg-gradient-to-r from-gray-50/80 to-blue-50/80 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-playfair flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-primary" />
                  Consultation Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover-lift group">
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 mb-2">Video Call</h4>
                    <p className="text-sm text-gray-600">30-45 minutes</p>
                  </div>
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover-lift group">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 mb-2">Document Review</h4>
                    <p className="text-sm text-gray-600">Detailed feedback</p>
                  </div>
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover-lift group">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 mb-2">Strategy Session</h4>
                    <p className="text-sm text-gray-600">Application planning</p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-500 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-500/90 transition-all duration-300 py-6 text-xl font-bold rounded-2xl button-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Processing Your Request...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6 mr-3" />
                    Book Free Consultation
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to our terms of service and privacy policy. We&apos;ll contact you within
                24 hours to schedule your consultation. No spam, ever.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">Free Consultation</h3>
            <p className="text-gray-600 leading-relaxed">
              No commitment required. Get expert advice on your application strategy and personalized recommendations.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">Quick Response</h3>
            <p className="text-gray-600 leading-relaxed">
              We&apos;ll get back to you within 24 hours to schedule your session at a time that works for you.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">Personalized Plan</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive a customized roadmap for your application success with actionable next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to complete my SOP or LOR?",
      answer:
        "Our standard turnaround time is 5-7 business days for SOPs and 3-5 business days for LORs. We also offer rush services with 24-48 hour delivery for urgent applications.",
    },
    {
      question: "Do you offer revisions if I'm not satisfied?",
      answer:
        "We offer unlimited revisions within 30 days of delivery to ensure your complete satisfaction. Our goal is to create a document that perfectly represents you.",
    },
    {
      question: "What information do you need from me to get started?",
      answer:
        "We'll need your academic transcripts, resume, program requirements, and a detailed questionnaire about your goals and experiences. We'll guide you through the entire process.",
    },
    {
      question: "Are your writers qualified in my field of study?",
      answer:
        "Yes! Our team includes writers with advanced degrees and professional experience across various fields including business, engineering, medicine, law, and more.",
    },
    {
      question: "How do you ensure originality and avoid plagiarism?",
      answer:
        "Every document is written from scratch based on your unique profile. We use advanced plagiarism detection tools and guarantee 100% original content tailored specifically to you.",
    },
    {
      question: "Can you help with multiple applications?",
      answer:
        "Definitely! We offer package deals for multiple applications and can customize documents for different programs while maintaining consistency in your personal brand.",
    },
    {
      question: "What if I need to make changes after submission?",
      answer:
        "We understand that requirements can change. We offer post-delivery support and can make necessary adjustments based on feedback from admissions committees or new requirements.",
    },
    {
      question: "Do you provide consultation services?",
      answer:
        "Yes! We offer one-on-one consultation sessions to discuss your application strategy, review your profile, and provide personalized guidance throughout the process.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@amoureditorial.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"

const faqData = [
  {
    question: "What services does Amour Editorial offer?",
    answer:
      "We provide expert guidance on SOPs, LORs, resumes, cover letters, and more for academic and career success.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a 30-minute consultation using our integrated Calendly widget on the Booking page.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Refunds are handled on a case-by-case basis. Please contact our support team for assistance.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "We offer a 15-min free intro consultation. Full services are paid based on scope.",
  },
  {
    question: "Can I revise my documents after submission?",
    answer:
      "Yes, we provide up to 2 rounds of revisions on major document submissions.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-orange-300 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 text-left font-semibold bg-orange-100 hover:bg-orange-200 transition"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white text-gray-700 transition-all duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

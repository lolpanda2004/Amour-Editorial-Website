"use client"

import React from "react"

export default function BookingPage() {
  return (
    <div className="min-h-screen py-16 px-6 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
        <p className="text-lg mb-10">
          Choose your slot for personalized editorial support. Let's craft your success story!
        </p>

        {/* Calendly Embed */}
        <div className="w-full h-[700px] rounded-xl shadow-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <iframe
            src="https://calendly.com/vaishnavichopade316/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Booking via Calendly"
            className="rounded-xl"
          />
        </div>

        <p className="text-sm text-black dark:text-gray-400 mt-6">
          Can&apos;t find a suitable time?{" "}
          <a 
            href="/contact" 
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Contact us
          </a> for custom bookings.
        </p>
      </div>
    </div>
  )
}

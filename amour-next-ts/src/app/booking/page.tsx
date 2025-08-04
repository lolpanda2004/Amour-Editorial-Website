"use client"

import React from "react"

export default function BookingPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-orange-100 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Book a Consultation</h1>
        <p className="text-lg text-gray-600 mb-10">
          Choose your slot for personalized editorial support. Let’s craft your success story!
        </p>

        {/* Calendly Embed */}
        <div className="w-full h-[700px] rounded-xl shadow-xl overflow-hidden">
          <iframe
            src="https://calendly.com/vaishnavichopade316/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Booking via Calendly"
          />
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Can&apos;t find a suitable time?{" "}
          <a href="/contact" className="underline text-primary">Contact us</a> for custom bookings.
        </p>
      </div>
    </div>
  )
}

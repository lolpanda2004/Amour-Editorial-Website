import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact <span className="text-amber-600">Us</span></h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have questions or want to work with us? Fill out the form below and our team will get back to you soon.
          </p>
        </div>
        <form className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          </div>
          <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg px-6 py-3 text-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


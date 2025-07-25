"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                data-aos="fade-up"
              >
                Your Story,{" "}
                <span className="text-amber-600" data-aos="fade-up">
                  Perfectly Told
                </span>
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg sm:text-xl text-gray-600 max-w-2xl"
              >
                Craft compelling SOPs, LORs, and personal narratives that open
                doors to the world&#39;s top universities and career
                opportunities.
              </p>
              <div
                data-aos="fade-up"
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/booking"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg px-6 py-3 text-center transition-colors flex items-center justify-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-300 hover:bg-gray-50 font-medium rounded-lg px-6 py-3 text-center transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                data-aos="fade-up"
                src="/hero-image.jpg" // Replace with your actual hero image
                alt="Students celebrating university acceptance"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="py-12 bg-gray-50">
        <p
          data-aos="fade-up"
          className="text-center text-gray-500 mb-8 text-lg font-semibold"
        >
          Trusted by students accepted at
        </p>
      </div>

      {/* Services Preview */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Our{" "}
              <span data-aos="fade-up" className="text-amber-600">
                Services
              </span>
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              We transform your experiences into compelling narratives that
              resonate with admissions committees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Statement of Purpose",
                description:
                  "Craft a powerful SOP that showcases your unique journey and aspirations.",
                icon: "✍️",
              },
              {
                title: "Letters of Recommendation",
                description:
                  "Elevate your recommendations to highlight your strengths effectively.",
                icon: "📜",
              },
              {
                title: "Document Editing",
                description:
                  "Polish your existing documents to perfection with expert feedback.",
                icon: "🔍",
              },
              {
                title: "Application Strategy",
                description:
                  "Develop a winning strategy for your target programs.",
                icon: "🎯",
              },
              {
                title: "Personal Branding",
                description:
                  "Articulate your professional identity for career advancement.",
                icon: "💼",
              },
              {
                title: "Interview Preparation",
                description:
                  "Prepare to impress with mock interviews and feedback.",
                icon: "🗣️",
              },
            ].map((service, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div data-aos="fade-up" className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3
                  data-aos="fade-up"
                  className="text-xl font-semibold text-gray-900 mb-2"
                >
                  {service.title}
                </h3>
                <p data-aos="fade-up" className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium gap-2"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                data-aos="fade-up"
                src="/team-image.jpg" // Replace with your actual team image
                alt="Amour Editorial team"
                fill
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                Our{" "}
                <span data-aos="fade-up" className="text-amber-600">
                  Story
                </span>
              </h2>
              <p data-aos="fade-up" className="text-lg text-gray-600">
                Founded by Akshai and Lathika, alumni of world-renowned
                institutions, Amour Editorial was born from our own journeys
                through competitive admissions processes.
              </p>
              <p data-aos="fade-up" className="text-lg text-gray-600">
                We understand that behind every application is a unique story
                waiting to be told with authenticity and impact.
              </p>
              <div data-aos="fade-up" className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium gap-2"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Success <span className="text-amber-600">Stories</span>
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Hear from students who&#39;ve turned their dreams into reality
              with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Amour Editorial transformed my SOP into a compelling narrative that got me into my dream program at UCLA.",
                name: "Rahul K.",
                program: "MS in Computer Science, UCLA",
              },
              {
                quote:
                  "The LOR they crafted for me highlighted aspects of my work I hadn't even considered. Truly exceptional!",
                name: "Priya M.",
                program: "MBA, Bayes Business School",
              },
              {
                quote:
                  "Their strategic advice helped me present my unconventional background as an asset rather than a liability.",
                name: "Arjun S.",
                program: "MA in Economics, University of Glasgow",
              },
            ].map((testimonial, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-amber-600 text-4xl mb-4">"</div>
                <p data-aos="fade-up" className="text-gray-700 italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p data-aos="fade-up" className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p data-aos="fade-up" className="text-gray-600">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-16">
            <Link
              href="/success-stories"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium gap-2"
            >
              Read more success stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to begin your journey?
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-amber-100 max-w-3xl mx-auto mb-8"
          >
            Let&#39;s craft a narrative that opens doors to your future.
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="bg-white hover:bg-gray-100 text-amber-600 font-medium rounded-lg px-6 py-3 text-center transition-colors flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              data-aos="fade-up"
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-amber-600 font-medium rounded-lg px-6 py-3 text-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
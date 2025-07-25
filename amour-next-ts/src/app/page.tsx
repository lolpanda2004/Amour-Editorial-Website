import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Story, <span className="text-amber-600">Perfectly Told</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Craft compelling SOPs, LORs, and personal narratives that open doors to the world's top universities and career opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
        <p className="text-center text-gray-500 mb-8 text-lg font-semibold">Trusted by students accepted at</p>
        
      </div>

      {/* Services Preview */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We transform your experiences into compelling narratives that resonate with admissions committees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Statement of Purpose",
                description: "Craft a powerful SOP that showcases your unique journey and aspirations.",
                icon: "✍️"
              },
              {
                title: "Letters of Recommendation",
                description: "Elevate your recommendations to highlight your strengths effectively.",
                icon: "📜"
              },
              {
                title: "Document Editing",
                description: "Polish your existing documents to perfection with expert feedback.",
                icon: "🔍"
              },
              {
                title: "Application Strategy",
                description: "Develop a winning strategy for your target programs.",
                icon: "🎯"
              },
              {
                title: "Personal Branding",
                description: "Articulate your professional identity for career advancement.",
                icon: "💼"
              },
              {
                title: "Interview Preparation",
                description: "Prepare to impress with mock interviews and feedback.",
                icon: "🗣️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
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
                src="/team-image.jpg" // Replace with your actual team image
                alt="Amour Editorial team"
                fill
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Our <span className="text-amber-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600">
                Founded by Akshai and Lathika, alumni of world-renowned institutions, Amour Editorial was born from our own journeys through competitive admissions processes.
              </p>
              <p className="text-lg text-gray-600">
                We understand that behind every application is a unique story waiting to be told with authenticity and impact.
              </p>
              <div className="pt-4">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-amber-600">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who've turned their dreams into reality with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Amour Editorial transformed my SOP into a compelling narrative that got me into my dream program at UCLA.",
                name: "Rahul K.",
                program: "MS in Computer Science, UCLA"
              },
              {
                quote: "The LOR they crafted for me highlighted aspects of my work I hadn't even considered. Truly exceptional!",
                name: "Priya M.",
                program: "MBA, Bayes Business School"
              },
              {
                quote: "Their strategic advice helped me present my unconventional background as an asset rather than a liability.",
                name: "Arjun S.",
                program: "MA in Economics, University of Glasgow"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-amber-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium gap-2"
            >
              Read more success stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*FAQ Section*/}

 <section className="py-20 bg-white px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked <span className="text-amber-600">Questions</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Got questions? We’ve got answers. Here are some common queries from students like you.
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          question: "What types of documents do you help with?",
          answer:
            "We assist with Statements of Purpose (SOP), Letters of Recommendation (LOR), personal essays, and other academic and professional documents."
        },
        {
          question: "Can I get a custom SOP tailored to my profile?",
          answer:
            "Absolutely! We specialize in creating personalized SOPs that reflect your unique story, goals, and achievements."
        },
        {
          question: "Do you offer editing for already written documents?",
          answer:
            "Yes, we offer thorough document editing to improve clarity, structure, grammar, and overall impact."
        },
        {
          question: "How do I book a consultation?",
          answer:
            "You can book a consultation through our website by clicking the 'Book a Consultation' button and selecting a suitable slot."
        },
        {
          question: "Are your services only for university admissions?",
          answer:
            "Not at all. We also help with career documents, personal branding, and interview preparation."
        },
        {
          question: "What makes Amour Editorial different from others?",
          answer:
            "We are founded by graduates of top universities and understand the nuances of competitive admissions. We bring strategy and empathy to every story."
        },
        {
          question: "Do you work with students from all countries?",
          answer:
            "Yes, our services are available globally. We have worked with students applying to universities in the US, UK, Canada, Europe, and more."
        }
      ].map((faq, index) => (
        <div key={index} className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to begin your journey?
          </h2>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8">
            Let's craft a narrative that opens doors to your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white hover:bg-gray-100 text-amber-600 font-medium rounded-lg px-6 py-3 text-center transition-colors flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
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

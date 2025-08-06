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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-hero bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1
                className="hero-title text-foreground"
                data-aos="fade-up"
              >
                Your Story,{" "}
                <span className="text-primary" data-aos="fade-up">
                  Perfectly Told
                </span>
              </h1>
              <p
                data-aos="fade-up"
                className="hero-subtitle text-muted-foreground"
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
                  className="btn-primary hover-lift no-underline flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-outline hover-lift no-underline"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                data-aos="fade-up"
                src="/hero-image.png" // Replace with your actual hero image
                alt="Students celebrating university acceptance"
                fill
                className="rounded-xl object-cover shadow-elegant hover-lift"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="section-alt bg-muted">
        <p
          data-aos="fade-up"
          className="text-center text-muted-foreground mb-8 text-lg font-semibold font-ui"
        >
          Trusted by students accepted at
        </p>
      </div>

      {/* Services Preview */}
      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display"
            >
              Our{" "}
              <span data-aos="fade-up" className="text-primary">
                Services
              </span>
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg text-muted-foreground max-w-3xl mx-auto font-body"
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
                className="card-feature hover-lift"
              >
                <div data-aos="fade-up" className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3
                  data-aos="fade-up"
                  className="text-xl font-semibold text-foreground mb-2 font-heading"
                >
                  {service.title}
                </h3>
                <p data-aos="fade-up" className="text-muted-foreground font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium gap-2 no-underline font-ui"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* About Preview */}
      <section className="section-alt bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3]">
          <Image
            data-aos="fade-up"
            src="/team-image.png"
            alt="Amour Editorial team"
            fill
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-foreground"
          >
            Our{" "}
            <span data-aos="fade-up" className="text-primary">
          Story
            </span>
          </h2>
          <p data-aos="fade-up" className="text-lg text-muted-foreground">
            Founded by Akshai and Lathika, alumni of world-renowned
            institutions, Amour Editorial was born from our own journeys
            through competitive admissions processes.
          </p>
          <p data-aos="fade-up" className="text-lg text-muted-foreground">
            We understand that behind every application is a unique story
            waiting to be told with authenticity and impact.
          </p>
          <div data-aos="fade-up" className="pt-4">
            <Link
          href="/about"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium gap-2"
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
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          Success <span className="text-primary">Stories</span>
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
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
            className="bg-background p-8 rounded-xl shadow-sm border border-border"
          >
            <div className="text-primary text-4xl mb-4">&quot;</div>
            <p data-aos="fade-up" className="text-foreground italic mb-6">
          {testimonial.quote}
            </p>
            <div>
          <p data-aos="fade-up" className="font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p data-aos="fade-up" className="text-muted-foreground">
            {testimonial.program}
          </p>
            </div>
          </div>
        ))}
          </div>

          <div data-aos="fade-up" className="text-center mt-16">
        <Link
          href="/success-stories"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium gap-2"
        >
          Read more success stories
          <ArrowRight className="w-4 h-4" />
        </Link>
          </div>
        </div>
      </section>

      {/*FAQ Section*/}

<section className="py-20 bg-background px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Frequently Asked <span className="text-gradient">Questions</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
        <div key={index} className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
          <p className="text-muted-foreground">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="section bg-primary" style={{ background: 'var(--primary)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 font-display"
          >
            Ready to begin your journey?
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-body"
          >
            Let&#39;s craft a narrative that opens doors to your future.
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/booking"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors no-underline flex items-center gap-2 justify-center"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              data-aos="fade-up"
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

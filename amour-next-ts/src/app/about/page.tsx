<<<<<<< HEAD
import { Card, CardContent } from "@/components copy/ui/card"
import { Award, Target, Heart, Lightbulb, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We believe every story deserves to be told with authenticity and impact.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on helping you achieve your academic and professional aspirations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every document we craft.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using creative approaches to make your application stand out.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Lead Editor",
      education: "PhD in English Literature, Harvard University",
      experience: "10+ years in academic writing",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Senior Writing Consultant",
      education: "MBA from Stanford, MS in Engineering",
      experience: "8+ years in admissions consulting",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Applications Specialist",
      education: "MD from Johns Hopkins, MPH",
      experience: "6+ years in medical admissions",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "Business Applications Expert",
      education: "MBA from Wharton, CPA",
      experience: "7+ years in business consulting",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const achievements = [
    { icon: Users, number: "500+", label: "Students Helped" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: Clock, number: "7+", label: "Years Experience" },
    { icon: Shield, number: "100%", label: "Satisfaction" },
  ]

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your background, goals, and target programs.",
    },
    {
      step: "2",
      title: "Document Analysis",
      description: "Our experts analyze your existing materials and identify areas for improvement.",
    },
    {
      step: "3",
      title: "Strategic Planning",
      description: "We develop a customized strategy to highlight your unique strengths and experiences.",
    },
    {
      step: "4",
      title: "Writing & Editing",
      description: "Our skilled writers craft compelling narratives that showcase your potential.",
    },
    {
      step: "5",
      title: "Review & Refinement",
      description: "Multiple rounds of review ensure your documents meet the highest standards.",
    },
    {
      step: "6",
      title: "Final Delivery",
      description: "You receive polished, professional documents ready for submission.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Amour Editorial</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate storytellers dedicated to helping students and professionals achieve their academic and
              career goals through compelling written narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2017, Amour Editorial began with a simple mission: to help students tell their stories in the
                most compelling way possible. What started as a small team of passionate writers has grown into a
                comprehensive academic writing service trusted by hundreds of students worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founder, Dr. Sarah Johnson, recognized the gap between students' incredible potential and their
                ability to articulate it effectively in written form. With her background in English Literature and
                years of experience in academic writing, she assembled a team of experts from various fields to provide
                specialized guidance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to uphold our founding principles: authenticity, excellence, and personalized
                attention to each client's unique journey.
              </p>
            </div>
            <div className="animate-slide-up stagger-1">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our founding story"
                className="rounded-lg shadow-lg w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in academic writing, admissions
              consulting, and professional development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-2 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-2">{member.education}</p>
                  <p className="text-gray-500 text-xs">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven 6-step process to ensure every client receives personalized, high-quality service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`text-center animate-slide-up stagger-${index + 1}`}>
                <div className="bg-white rounded-lg shadow-sm p-8 hover-lift">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <blockquote className="text-xl text-gray-600 leading-relaxed italic mb-8">
            "To empower students and professionals by transforming their unique experiences into compelling narratives
            that open doors to their dream opportunities. We believe that everyone has a story worth telling, and we're
            here to help them tell it beautifully."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Dr. Sarah Johnson" className="w-12 h-12 rounded-full" />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Dr. Sarah Johnson</div>
              <div className="text-sm text-gray-600">Founder & CEO</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
=======
import { FC } from 'react';

const aboutPage: FC = () => {
  return (
    <div>
      <h1>about Page</h1>
      {/* Add content here */}
    </div>
  );
};

export default aboutPage;
>>>>>>> upstream/main

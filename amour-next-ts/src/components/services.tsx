"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Clock, CheckCircle, Sparkles, Zap, Star, Award } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Statement of Purpose (SOP)",
      description:
        "Compelling personal statements that showcase your unique journey, goals, and fit for your chosen program.",
      features: ["Personalized consultation", "Multiple revisions", "Expert feedback", "Deadline guarantee"],
      price: "Starting at $299",
      popular: true,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Users,
      title: "Letter of Recommendation (LOR)",
      description:
        "Professional recommendation letters that highlight your strengths and potential from the right perspective.",
      features: ["Professional tone", "Specific examples", "Industry expertise", "Quick turnaround"],
      price: "Starting at $199",
      popular: false,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: Clock,
      title: "Rush Service",
      description: "Need it fast? Our rush service delivers high-quality documents within 24-48 hours.",
      features: ["24-48 hour delivery", "Priority support", "Same quality standards", "Emergency assistance"],
      price: "+50% of base price",
      popular: false,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

  const additionalServices = [
    { icon: Award, title: "Personal Statement", description: "Undergraduate applications" },
    { icon: Sparkles, title: "Essay Writing", description: "Scholarship & admission essays" },
    { icon: Star, title: "Application Review", description: "Complete application audit" },
  ]

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      <div className="absolute top-40 left-20 w-20 h-20 bg-gradient-to-br from-primary/30 to-purple-400/30 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-red-400/30 rounded-full blur-xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-playfair">
            Professional <span className="gradient-text">Writing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tailored solutions to help you succeed in your{" "}
            <span className="font-semibold gradient-text-alt">academic and professional journey</span> with expert
            guidance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-up stagger-${index + 1} group overflow-hidden ${
                service.popular ? "ring-2 ring-primary/50 ring-offset-2" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg animate-bounce-slow">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardHeader className="text-center pb-6 relative z-10">
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-6 bg-gradient-to-br ${service.color} rounded-3xl shadow-lg group-hover:scale-110 transition-all duration-300 relative`}
                  >
                    <service.icon className="h-12 w-12 text-white" />
                    <div className="absolute -top-2 -right-2">
                      <Zap className="w-6 h-6 text-yellow-400 animate-bounce-slow" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0 relative z-10">
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group/item">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-6 font-playfair">{service.price}</div>
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300 button-glow text-white font-semibold py-3 rounded-full shadow-lg`}
                  >
                    <Link href="#booking">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">
            Additional <span className="gradient-text">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover-lift transition-all duration-300 animate-scale-in stagger-${index + 1} group`}
              >
                <service.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-fade-in">
          <div className="bg-gradient-to-r from-white/80 via-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/30">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
              Why Choose <span className="gradient-text">Our Services</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                  7+
                </div>
                <div className="text-gray-600 font-medium">Years Experience</div>
                <div className="text-sm text-gray-500 mt-1">In Academic Writing</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-gray-600 font-medium">Success Rate</div>
                <div className="text-sm text-gray-500 mt-1">Admission Guarantee</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 font-playfair group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support Available</div>
                <div className="text-sm text-gray-500 mt-1">Always Here for You</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-500/90 transition-all duration-300 button-glow px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Link href="#booking">
                  <Award className="w-5 h-5 mr-2" />
                  Start Your Journey Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles, Award } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Statement of Purpose", href: "#services" },
      { name: "Letter of Recommendation", href: "#services" },
      { name: "Personal Statement", href: "#services" },
      { name: "Essay Writing", href: "#services" },
      { name: "Application Review", href: "#services" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Writing Guides", href: "#resources" },
      { name: "Templates", href: "#resources" },
      { name: "Webinars", href: "#resources" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/amoureditorial", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "https://twitter.com/amoureditorial", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Instagram, href: "https://instagram.com/amoureditorial", label: "Instagram", color: "hover:text-pink-600" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/amoureditorial",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-fade-in">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <Heart className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1 animate-bounce-slow" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-playfair gradient-text">Amour Editorial</span>
                <span className="text-sm text-gray-400 -mt-1">Crafting Your Success Story</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Crafting compelling academic documents that open doors to your dream opportunities. Your success story
              starts here with our expert guidance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  info@amoureditorial.com
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  123 Editorial Street, WD 12345
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-up stagger-1">
            <h3 className="text-xl font-bold mb-8 font-playfair gradient-text">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-slide-up stagger-2">
            <h3 className="text-xl font-bold mb-8 font-playfair gradient-text">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-slide-up stagger-3">
            <h3 className="text-xl font-bold mb-8 font-playfair gradient-text">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-slide-up stagger-4">
            <h3 className="text-xl font-bold mb-8 font-playfair gradient-text">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-16 pt-12 animate-fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-playfair gradient-text">Stay Updated with Success Tips</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Subscribe to our newsletter for exclusive writing tips, application deadlines, success stories, and
              special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 font-semibold hover:scale-105 button-glow">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <div className="flex space-x-8 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10`}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-center md:text-right">
            <p className="text-lg">&copy; {currentYear} Amour Editorial. All rights reserved.</p>
            <p className="text-sm mt-2 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse-slow" /> for your success
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

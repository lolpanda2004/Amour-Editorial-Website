"use client";
import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  User,
  AtSign
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    } ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center space-x-2">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-200 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success' as 'success' | 'error',
    isVisible: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({
        message: 'Please fix the errors in the form',
        type: 'error',
        isVisible: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setToast({
        message: 'Message sent successfully! We\'ll get back to you soon.',
        type: 'success',
        isVisible: true
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setToast({
        message: 'Failed to send message. Please try again.',
        type: 'error',
        isVisible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@amour-editorial.com", "support@amour-editorial.com"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Available 9 AM - 6 PM EST"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Editorial Street", "Writing District, WD 12345"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8"
              data-aos="fade-up"
            >
              Get In{" "}
              <span className="text-amber-600">Touch</span>
            </h1>
            <p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have questions about our services? Ready to start crafting your compelling story? 
              We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-600">We'd love to hear from you</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-amber-500'
                        } bg-gray-50 focus:bg-white`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-amber-500'
                        } bg-gray-50 focus:bg-white`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        errors.subject 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-amber-500'
                      } bg-gray-50 focus:bg-white`}
                      placeholder="How can we help you?"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-amber-500'
                      } bg-gray-50 focus:bg-white resize-none`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
              <div className="bg-white rounded-2xl p-8 border border-amber-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900  mb-6">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Ready to transform your academic journey? Our expert team is here to help you craft 
                  compelling stories that open doors to your dream opportunities.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.title}
                      className="bg-white dark:bg-black rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 100}
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${info.color} mb-4`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600 dark:text-gray-300">{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div 
                className="bg-gradient-to-r from-amber-600 to-orange-600 dark:bg-gradient-to-r dark:from-red-600 dark:to-red-700 rounded-2xl p-8 text-white text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Book a free consultation and let's discuss how we can help you achieve your goals.
                </p>
                <a
                  href="/booking"
                  className="inline-flex items-center space-x-2 bg-white text-amber-600 dark:text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-300"
                >
                  <span>Book Consultation</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


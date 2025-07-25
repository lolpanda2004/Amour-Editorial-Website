"use client";

import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Input validation utilities
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const sanitizeInput = (input: string) => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/[<>]/g, '');
  // Note: Don't trim() here as it removes spaces while user is typing
};

// Sanitize for submission (with trim)
const sanitizeForSubmission = (input: string) => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/[<>]/g, '')
              .trim();
};

// Toast Notification Component
const Toast = ({ 
  message, 
  type, 
  isVisible, 
  onClose 
}: { 
  message: string; 
  type: 'success' | 'error' | 'info'; 
  isVisible: boolean; 
  onClose: () => void;
}) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    info: <AlertCircle className="w-5 h-5 text-blue-600" />
  };

  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800"
  };

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
    <div className={`fixed top-6 right-6 z-50 max-w-md p-4 rounded-lg border shadow-lg transform transition-all duration-300 ${styles[type]}`}>
      <div className="flex items-center gap-3">
        {icons[type]}
        <p className="text-sm font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="ml-auto text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Form field component
const FormField = ({ 
  label, 
  name, 
  type = "text", 
  value, 
  onChange, 
  error,
  required = false,
  placeholder,
  rows
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) => {
  const inputClasses = `w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
    error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
  }`;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({
    isVisible: false,
    message: "",
    type: "info"
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic'
    });
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({
      isVisible: true,
      message,
      type
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Only remove dangerous scripts, but preserve spaces for better UX
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Optional phone validation
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Properly sanitize data for submission (with trimming)
      const sanitizedFormData = {
        name: sanitizeForSubmission(formData.name),
        email: sanitizeForSubmission(formData.email),
        phone: sanitizeForSubmission(formData.phone),
        subject: sanitizeForSubmission(formData.subject),
        message: sanitizeForSubmission(formData.message)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/forms/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedFormData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showToast("Thank you! Your message has been sent successfully. We'll get back to you soon.", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showToast("Sorry, there was an error sending your message. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Editorial Street", "Writing District, WD 12345", "United States"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@amoureditorial.com", "support@amoureditorial.com"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <>
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        <div className="relative z-10 py-20 px-6 sm:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg mb-6">
                <Send className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Contact Us</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get In <span className="text-amber-600 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your journey? Contact us today for a{" "}
                <span className="font-semibold text-amber-600">free consultation</span> and let's discuss how we can help
                you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 p-8" data-aos="slide-right">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <Send className="w-8 h-8 mr-3 text-amber-600" />
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      placeholder="Your full name"
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="+1 (555) 123-4567"
                    />
                    <FormField
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>

                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={6}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl py-4 px-6 text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6" data-aos="slide-left">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} shadow-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 opacity-90">
                    Don't let your dreams wait. Take the first step towards your goals today.
                  </p>
                  <a 
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Explore Our Services
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


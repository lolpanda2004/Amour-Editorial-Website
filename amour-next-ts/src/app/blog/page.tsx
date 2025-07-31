import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  Search,
  Filter,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    title: "The Ultimate Guide to Writing a Compelling Statement of Purpose in 2024",
    excerpt:
      "Learn the latest strategies and techniques that admissions committees are looking for in SOPs. This comprehensive guide covers everything from structure to storytelling.",
    category: "SOP Writing",
    author: "Dr. Sarah Johnson",
    date: "2024-01-20",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  };

  const blogPosts = [
    {
      title: "10 Common SOP Mistakes to Avoid in 2024",
      excerpt:
        "Learn about the most frequent errors students make in their statements of purpose and how to avoid them for a stronger application.",
      category: "SOP Tips",
      author: "Sarah Editorial",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 min read",
      trending: true,
    },
  ];

  const categories = [
    { name: "All Posts", count: 45, active: true },
    { name: "SOP Writing", count: 12, active: false },
    { name: "LOR Guide", count: 8, active: false },
    { name: "MBA", count: 6, active: false },
    { name: "Medical", count: 5, active: false },
    { name: "Engineering", count: 4, active: false },
    { name: "Law", count: 3, active: false },
    { name: "Strategy", count: 7, active: false },
  ];

  const popularTags = [
    "Statement of Purpose",
    "Letter of Recommendation",
    "MBA Applications",
    "Medical School",
    "Graduate School",
    "Application Tips",
    "Writing Guide",
    "Admissions",
    "International Students",
    "Scholarships",
  ];

  return (
    <div className="min-h-screen bg-white pt-16" data-aos="fade-up">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert insights, tips, and strategies to help you succeed in your academic journey. Stay updated with the
              latest trends in application writing.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
        {/* CTA Section */}
        <section className="py-20 bg-gray-50" data-aos="fade-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Personalized Help?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              While our blog provides valuable insights, sometimes you need personalized guidance. Our expert writers are
              here to help you craft the perfect application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

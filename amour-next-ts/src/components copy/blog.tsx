"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Blog() {
  const blogPosts = [
    {
      title: "10 Common SOP Mistakes to Avoid",
      excerpt:
        "Learn about the most frequent errors students make in their statements of purpose and how to avoid them.",
      category: "SOP Tips",
      author: "Sarah Editorial",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 min read",
    },
    {
      title: "How to Choose the Right Recommender",
      excerpt: "A comprehensive guide on selecting the best people to write your letters of recommendation.",
      category: "LOR Guide",
      author: "Michael Writer",
      date: "2024-01-10",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 min read",
    },
    {
      title: "MBA Application Timeline: A Complete Guide",
      excerpt: "Everything you need to know about planning your MBA application process from start to finish.",
      category: "MBA",
      author: "Emily Expert",
      date: "2024-01-05",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "10 min read",
    },
    {
      title: "Crafting Your Personal Brand for Applications",
      excerpt: "How to develop and communicate a consistent personal brand across all your application materials.",
      category: "Strategy",
      author: "David Brand",
      date: "2024-01-01",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 min read",
    },
    {
      title: "The Psychology of Admissions Committees",
      excerpt: "Understanding what admissions officers look for and how to appeal to their decision-making process.",
      category: "Insights",
      author: "Lisa Psychology",
      date: "2023-12-28",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "8 min read",
    },
    {
      title: "International Students: Overcoming Cultural Barriers",
      excerpt: "Tips for international students to effectively communicate their unique perspectives and experiences.",
      category: "International",
      author: "James Global",
      date: "2023-12-25",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "9 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest tips, strategies, and insights to help you succeed in your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-primary font-medium">{post.readTime}</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { BookOpen, Headphones, Star, Calendar, ArrowRight, Download, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Financial <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access our comprehensive collection of financial insights, expert advice, and client success stories 
              to help you make informed decisions for your business and financial future.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our variety of educational and informational resources designed to empower your financial decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Blog Resources */}
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Blog</CardTitle>
                <CardDescription>
                  Expert insights and practical advice on financial management, tax strategies, and business growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Stay updated with the latest trends in finance, accounting best practices, 
                    and strategic business advice from our team of experts.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Recent Topics:</div>
                    <ul className="text-sm space-y-1">
                      <li>• Tax Planning Strategies for 2024</li>
                      <li>• Cash Flow Management Tips</li>
                      <li>• Small Business Growth Tactics</li>
                      <li>• Investment Planning Fundamentals</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/blog">Read Our Blog</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Podcast Resources */}
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Podcasts</CardTitle>
                <CardDescription>
                  Listen to in-depth discussions about financial topics, industry trends, and expert interviews.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our weekly podcast features conversations with industry leaders, 
                    practical financial advice, and real-world case studies.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Podcast Stats:</div>
                    <ul className="text-sm space-y-1">
                      <li>• 45+ Episodes Available</li>
                      <li>• 50K+ Total Downloads</li>
                      <li>• 4.8/5 Average Rating</li>
                      <li>• Weekly New Episodes</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/podcasts">Listen Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Client Testimonials */}
            <Card className="border-2 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Client Success Stories</CardTitle>
                <CardDescription>
                  Real testimonials and case studies from clients who have achieved success with our services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Discover how we've helped businesses and individuals achieve their financial goals 
                    through our proven strategies and dedicated service.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Client Results:</div>
                    <ul className="text-sm space-y-1">
                      <li>• 98% Client Satisfaction Rate</li>
                      <li>• 200+ Success Stories</li>
                      <li>• 4.9/5 Average Rating</li>
                      <li>• Industry Recognition</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/testimonials">Read Testimonials</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss our most popular and impactful content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Featured Blog Post */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 15, 2024</span>
                </div>
                <CardTitle className="text-xl">Complete Guide to Small Business Tax Strategies</CardTitle>
                <CardDescription>
                  Everything you need to know about optimizing your tax strategy for maximum savings and compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This comprehensive guide covers essential tax planning strategies, deduction optimization, 
                  and compliance requirements that every small business owner should understand.
                </p>
                <Button asChild>
                  <Link href="/blog">Read Full Article</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Featured Podcast */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Headphones className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Episode 45 • 42 minutes</span>
                </div>
                <CardTitle className="text-xl">Small Business Financial Planning for Growth</CardTitle>
                <CardDescription>
                  Expert insights on scaling your business finances and preparing for sustainable growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join us as we discuss proven strategies for financial planning that support business growth, 
                  featuring real case studies and expert recommendations.
                </p>
                <Button asChild>
                  <Link href="/podcasts">Listen to Episode</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Stay Updated with Our Latest Resources
              </h2>
              <p className="text-xl opacity-90">
                Subscribe to our newsletter and never miss important financial insights, 
                new podcast episodes, or exclusive content designed to help your business thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6" />
                  <span>Weekly financial insights and tips</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Exclusive content for subscribers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-6 h-6" />
                  <span>Free downloadable resources</span>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Subscribe to Our Newsletter"
                description="Get the latest financial insights delivered to your inbox."
                className="bg-background text-foreground shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Tierney and Ohlms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
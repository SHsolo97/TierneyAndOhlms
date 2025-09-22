import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts - will be replaced with dynamic content later
  const blogPosts = [
    {
      id: 1,
      title: "5 Strategies for Scaling Your Business in 2024",
      excerpt: "Discover proven strategies that successful businesses use to scale effectively while maintaining quality and culture.",
      author: "Nihal Shah",
      date: "December 15, 2024",
      category: "Strategy"
    },
    {
      id: 2,
      title: "The Future of Digital Transformation",
      excerpt: "How emerging technologies are reshaping business operations and what leaders need to know to stay competitive.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      category: "Technology"
    },
    {
      id: 3,
      title: "Financial Planning for Sustainable Growth",
      excerpt: "Essential financial planning strategies that ensure your business growth is sustainable and profitable long-term.",
      author: "Michael Chen",
      date: "December 5, 2024",
      category: "Finance"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay ahead of the curve with expert insights, industry trends, and actionable strategies 
              from our team of business consulting professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-primary cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="flex items-center text-primary hover:text-primary/80 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </CardContent>
                </Card>
              ))}
              
              {/* Coming Soon Message */}
              <Card className="border-dashed border-2">
                <CardContent className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">More Content Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    We're working on publishing more valuable insights and articles. 
                    Subscribe to our newsletter to be notified when new content is available.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Newsletter Signup */}
              <LeadForm 
                title="Stay Updated"
                description="Get the latest business insights delivered to your inbox."
                className="sticky top-8"
              />
              
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Strategy</span>
                    <span className="text-muted-foreground">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finance</span>
                    <span className="text-muted-foreground">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technology</span>
                    <span className="text-muted-foreground">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operations</span>
                    <span className="text-muted-foreground">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leadership</span>
                    <span className="text-muted-foreground">3</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="space-y-2">
                      <h4 className="font-medium hover:text-primary cursor-pointer line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
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
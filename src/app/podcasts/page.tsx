import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Play, Calendar, Clock, Headphones, Download, Share, TrendingUp, Users, Mic } from "lucide-react"

export default function PodcastsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Financial <span className="text-primary">Podcasts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, industry trends, and practical advice delivered through our 
              regular podcast series covering all aspects of financial management and business strategy.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Headphones className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Episode
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss our most recent discussion on current financial trends and strategies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Episode 45: Small Business Tax Strategies for 2024</CardTitle>
                      <CardDescription className="text-lg">
                        Essential tax planning strategies every small business owner should know
                      </CardDescription>
                    </div>
                  </div>
                  <Button size="lg" className="shrink-0">
                    <Play className="w-6 h-6 mr-2" />
                    Play
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>42 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones className="w-5 h-5 text-primary" />
                    <span>15,234 plays</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  In this episode, we dive deep into the latest tax strategies for small businesses, 
                  including deduction optimization, retirement planning benefits, and how to prepare 
                  for the upcoming tax season. Our guests include leading tax experts who share 
                  practical tips you can implement immediately.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Episodes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Catch up on our latest discussions about financial management, business strategy, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Episode 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 44</div>
                </div>
                <CardTitle className="text-lg">Nonprofit Financial Management Best Practices</CardTitle>
                <CardDescription>
                  Essential strategies for managing finances in nonprofit organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>December 8, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>38 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Episode 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 43</div>
                </div>
                <CardTitle className="text-lg">Investment Strategies for Uncertain Times</CardTitle>
                <CardDescription>
                  How to navigate market volatility and build resilient portfolios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>December 1, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>45 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Episode 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 42</div>
                </div>
                <CardTitle className="text-lg">Cash Flow Management for Growing Businesses</CardTitle>
                <CardDescription>
                  Practical tips for maintaining healthy cash flow during expansion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>November 24, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>36 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Episode 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 41</div>
                </div>
                <CardTitle className="text-lg">Digital Transformation in Accounting</CardTitle>
                <CardDescription>
                  How technology is changing the accounting landscape
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>November 17, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>41 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Episode 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 40</div>
                </div>
                <CardTitle className="text-lg">Retirement Planning Fundamentals</CardTitle>
                <CardDescription>
                  Building a secure financial future through strategic planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>November 10, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>39 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Episode 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">Episode 39</div>
                </div>
                <CardTitle className="text-lg">Real Estate Investment Analysis</CardTitle>
                <CardDescription>
                  Evaluating real estate opportunities and maximizing returns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>November 3, 2024</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>44 minutes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Episodes
            </Button>
          </div>
        </div>
      </section>

      {/* Podcast Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Podcast Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our podcast has helped thousands of listeners make better financial decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">45+</div>
              <h3 className="text-xl font-semibold mb-2">Episodes</h3>
              <p className="text-muted-foreground">
                In-depth discussions on financial topics
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">50K+</div>
              <h3 className="text-xl font-semibold mb-2">Total Downloads</h3>
              <p className="text-muted-foreground">
                Listeners have downloaded our content
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">4.8</div>
              <h3 className="text-xl font-semibold mb-2">Average Rating</h3>
              <p className="text-muted-foreground">
                Highly rated by our listeners
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">30+</div>
              <h3 className="text-xl font-semibold mb-2">Expert Guests</h3>
              <p className="text-muted-foreground">
                Industry leaders have shared insights
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Never Miss an Episode
              </h2>
              <p className="text-xl opacity-90">
                Subscribe to our podcast and get notified when new episodes are released. 
                Stay updated with the latest financial insights and strategies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Headphones className="w-6 h-6" />
                  <span>Weekly episodes with expert insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6" />
                  <span>Latest financial trends and strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Interviews with industry leaders</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Subscribe on Apple Podcasts
                </Button>
                <Button size="lg" variant="secondary">
                  Subscribe on Spotify
                </Button>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Get Podcast Updates"
                description="Subscribe to get notified about new episodes and exclusive content."
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
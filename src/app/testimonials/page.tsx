import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Star, Quote, Building, Heart, GraduationCap, Users, TrendingUp, Award, Home, Briefcase } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real stories from real clients who have experienced the difference our financial 
              consulting services make in their business and personal financial success.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our financial consulting services have helped businesses and individuals 
              achieve their goals and build lasting success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>CEO, TechFlow Solutions</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "Working with this team transformed our financial operations. Their strategic 
                  planning helped us scale from a 10-person startup to a 50-employee company 
                  while maintaining healthy cash flow. The ROI on their services has been exceptional."
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Business Consulting, Financial Planning
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>Executive Director, Community Foundation</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "Their expertise in nonprofit financial management has been invaluable. 
                  They helped us streamline our grant reporting, improve our financial transparency, 
                  and implement systems that saved us countless hours of administrative work."
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Nonprofit Services, Grant Management
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Lisa Rodriguez</CardTitle>
                    <CardDescription>Real Estate Developer</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "The financial analysis and investment strategies they provided for our 
                  real estate portfolio were outstanding. Their insights helped us identify 
                  profitable opportunities and avoid costly mistakes. Highly recommend!"
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Investment Analysis, Real Estate Finance
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">David Kim</CardTitle>
                    <CardDescription>CFO, Metro University</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "Their educational institution financial expertise is unmatched. They guided 
                  us through complex budget planning, helped optimize our endowment management, 
                  and provided strategies that improved our financial sustainability."
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Educational Finance, Budget Planning
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Jennifer White</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "As a first-time business owner, I was overwhelmed by the financial aspects. 
                  Their team made everything clear and manageable. The bookkeeping setup and 
                  ongoing support have been exactly what I needed to focus on growing my business."
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Small Business Support, Bookkeeping
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Robert Taylor</CardTitle>
                    <CardDescription>Manufacturing Executive</CardDescription>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "The cost analysis and efficiency improvements they identified saved our 
                  manufacturing operation over $500K annually. Their attention to detail and 
                  industry knowledge made the difference between struggling and thriving."
                </p>
                <div className="text-sm text-muted-foreground">
                  <strong>Services:</strong> Cost Analysis, Business Consulting
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our client testimonials are backed by measurable results and long-term partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">
                Of clients rate our services as excellent
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">85%</div>
              <h3 className="text-xl font-semibold mb-2">Client Retention</h3>
              <p className="text-muted-foreground">
                Clients continue working with us year over year
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">4.9</div>
              <h3 className="text-xl font-semibold mb-2">Average Rating</h3>
              <p className="text-muted-foreground">
                Out of 5 stars across all review platforms
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">24hr</div>
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                Average response time to client inquiries
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has earned recognition from industry organizations and peers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Best Financial Consulting Firm 2024</CardTitle>
                <CardDescription>Regional Business Awards</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for outstanding service and client satisfaction in financial consulting services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Top-Rated CPA Firm</CardTitle>
                <CardDescription>Professional Services Directory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Consistently rated among the top CPA firms for quality of service and client relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Excellence in Client Service</CardTitle>
                <CardDescription>State CPA Society</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Honored for maintaining the highest standards of professional excellence and client care.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Video Testimonial 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <TrendingUp className="w-8 h-8" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">TechFlow Solutions Success Story</CardTitle>
                <CardDescription>How we helped scale a startup to 50 employees</CardDescription>
              </CardHeader>
            </Card>

            {/* Video Testimonial 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <Heart className="w-8 h-8" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Community Foundation Partnership</CardTitle>
                <CardDescription>Transforming nonprofit financial management</CardDescription>
              </CardHeader>
            </Card>

            {/* Video Testimonial 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16">
                  <Building className="w-8 h-8" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Manufacturing Efficiency Gains</CardTitle>
                <CardDescription>$500K annual savings through strategic analysis</CardDescription>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl opacity-90">
                Experience the same level of service and results that our clients rave about. 
                Let's discuss how we can help you achieve your financial goals and become 
                our next success story.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span>Proven track record of client success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Personalized attention and service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Industry-recognized expertise</span>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Start Your Success Story"
                description="Join hundreds of satisfied clients who trust us with their financial success."
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
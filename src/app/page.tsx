import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Check, Star, ArrowRight, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Based on 1.png */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Transform Your Business with 
                  <span className="text-primary"> Expert Consulting</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  We help businesses scale, optimize operations, and achieve sustainable growth through strategic consulting and innovative solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LeadForm 
                title="Start Your Transformation"
                description="Get a free consultation to discuss your business goals."
                className="max-w-md mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Based on 2.png */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine industry expertise with innovative strategies to deliver exceptional results for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Our team of seasoned professionals brings decades of combined experience across various industries.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>
                  Track record of helping businesses achieve 200%+ growth through strategic implementations and optimizations.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Scalable Solutions</CardTitle>
                <CardDescription>
                  Customized strategies that grow with your business, ensuring long-term success and sustainability.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section - Based on 3.png */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business solutions designed to address every aspect of your growth journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      Develop comprehensive business strategies that align with your goals and market opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Operations Optimization</h3>
                    <p className="text-muted-foreground">
                      Streamline processes, reduce costs, and improve efficiency across all business operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Financial Management</h3>
                    <p className="text-muted-foreground">
                      Expert financial planning, budgeting, and analysis to ensure sustainable growth and profitability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-muted-foreground">
                      Modernize your business with cutting-edge technology solutions and digital strategies.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-8" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">Let's Discuss</div>
                  <div className="text-xl text-muted-foreground">Your Business Goals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Based on 4.png */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "The strategic planning session completely transformed our approach to business. We've seen a 300% increase in revenue within 6 months."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Outstanding service and expertise. The team helped us optimize our operations and reduce costs by 40% while improving quality."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Operations Director, Global Manufacturing</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Professional, knowledgeable, and results-driven. They delivered exactly what they promised and exceeded our expectations."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Founder, Digital Solutions Co.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section - Based on 5.png */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures success at every step of your business transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-muted-foreground">
                We analyze your current situation, goals, and challenges to create a tailored strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-muted-foreground">
                Develop a comprehensive plan with clear milestones and measurable objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-muted-foreground">
                Execute the strategy with precision, monitoring progress and making adjustments as needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimization</h3>
              <p className="text-muted-foreground">
                Continuously improve and scale the solution for maximum long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Based on 6.png */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl opacity-90">
                Join hundreds of successful businesses that have achieved remarkable growth with our expert guidance. 
                Schedule your free consultation today and take the first step towards extraordinary results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6" />
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6" />
                  <span>Customized strategy roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6" />
                  <span>No obligation, just expert insights</span>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Book Your Free Consultation"
                description="Take the first step towards business transformation."
                className="bg-background text-foreground shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="font-bold text-xl">Tierney and Ohlms</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses through expert consulting and innovative solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Strategic Planning</div>
                <div>Operations Consulting</div>
                <div>Financial Management</div>
                <div>Digital Transformation</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>About Us</div>
                <div>Our Team</div>
                <div>Case Studies</div>
                <div>Blog</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>info@tierneyandohlms.com</div>
                <div>+1 (555) 123-4567</div>
                <div>123 Business St, Suite 100</div>
                <div>City, State 12345</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Tierney and Ohlms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { CheckCircle, ArrowRight, Building, TrendingUp, Calculator, Users, Lightbulb, FileText } from "lucide-react"
import Link from "next/link"

export default function SmallBusinessSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Small Business <span className="text-primary">Support</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tailored financial solutions to help small businesses establish strong foundations, 
              navigate growth challenges, and achieve sustainable success.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Support for Growing Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our small business support services provide the financial infrastructure and strategic 
                guidance needed to launch, grow, and scale your business successfully in today's 
                competitive marketplace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Startup Financial Setup</h3>
                    <p className="text-muted-foreground">Complete financial infrastructure for new businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Business Plan Development</h3>
                    <p className="text-muted-foreground">Professional business plans for funding and strategic direction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Financial Projections</h3>
                    <p className="text-muted-foreground">Detailed forecasting to support growth planning and investment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                <Building className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Small Business Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete financial support services designed specifically for small businesses and startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card>
              <CardHeader>
                <Calculator className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Startup Financial Setup</CardTitle>
                <CardDescription>
                  Complete financial infrastructure including accounting systems, banking, and compliance setup.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Business Plan Development</CardTitle>
                <CardDescription>
                  Professional business plans for securing funding, partnerships, and strategic planning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Financial Projections</CardTitle>
                <CardDescription>
                  Detailed financial forecasts and projections for business planning and investor presentations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Investor Presentations</CardTitle>
                <CardDescription>
                  Professional financial presentations to attract investors and secure funding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Cash Flow Management</CardTitle>
                <CardDescription>
                  Optimize cash flow to ensure smooth operations and sustainable growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Growth Strategy Planning</CardTitle>
                <CardDescription>
                  Strategic planning to scale your business effectively and sustainably.
                </CardDescription>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Support Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven approach to help small businesses establish strong financial foundations and achieve growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment & Planning</h3>
              <p className="text-muted-foreground">
                We assess your business needs and develop a comprehensive financial strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We implement financial systems, processes, and strategies tailored to your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Continuous support and guidance as your business grows and evolves.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Build Your Business Foundation?
              </h2>
              <p className="text-xl opacity-90">
                Let our experienced team provide the financial support and strategic guidance 
                your small business needs to thrive and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/services">View All Services</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Small Business Support"
                description="Tell us about your small business goals and challenges."
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
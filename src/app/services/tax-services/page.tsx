import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { CheckCircle, ArrowRight, DollarSign, Calculator, Shield, FileText, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function TaxServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tax <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive tax planning and preparation services for individuals and businesses 
              to maximize savings and ensure compliance.
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
                Expert Tax Solutions for Maximum Savings
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive tax services help individuals and businesses navigate complex tax 
                regulations while maximizing deductions and minimizing liabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tax Preparation & Filing</h3>
                    <p className="text-muted-foreground">Accurate preparation and timely filing of all tax returns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Strategic Tax Planning</h3>
                    <p className="text-muted-foreground">Year-round planning to minimize your tax burden legally.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">IRS Representation</h3>
                    <p className="text-muted-foreground">Professional representation during IRS audits and disputes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tax Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete tax solutions for individuals, businesses, and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Tax Preparation & Filing</CardTitle>
                <CardDescription>
                  Professional preparation and filing of federal, state, and local tax returns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calculator className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Tax Planning Strategies</CardTitle>
                <CardDescription>
                  Proactive planning to minimize tax liabilities and maximize deductions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>IRS Representation</CardTitle>
                <CardDescription>
                  Expert representation during audits, appeals, and tax disputes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Tax Compliance</CardTitle>
                <CardDescription>
                  Ensure ongoing compliance with all tax laws and regulations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Business Tax Services</CardTitle>
                <CardDescription>
                  Specialized tax services for corporations, partnerships, and LLCs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Estate & Gift Tax</CardTitle>
                <CardDescription>
                  Planning and preparation for estate and gift tax requirements.
                </CardDescription>
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
                Ready to Optimize Your Tax Strategy?
              </h2>
              <p className="text-xl opacity-90">
                Let our tax experts help you minimize your tax burden while ensuring full compliance 
                with all regulations.
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
                title="Tax Services Consultation"
                description="Get expert advice on your tax situation."
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
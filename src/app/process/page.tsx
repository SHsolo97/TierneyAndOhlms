import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { CheckCircle, ArrowRight, Calendar, FileText, TrendingUp, Users, Phone, MessageSquare, ClipboardCheck, Handshake } from "lucide-react"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Process</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A structured, proven approach to financial consulting that ensures successful outcomes 
              for every client engagement.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work With You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures clarity, transparency, and results at every stage of our partnership.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Initial Consultation</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  We begin with a comprehensive discussion to understand your business, 
                  challenges, and goals. This consultation is completely free and helps 
                  us determine how we can best serve you.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Free 60-minute consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Needs assessment and goal identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">No obligation or commitment required</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Comprehensive Analysis</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Our team conducts a thorough analysis of your current financial situation, 
                  processes, and systems to identify opportunities for improvement and growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Financial health assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Process evaluation and optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Risk identification and mitigation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Custom Strategy Development</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Based on our analysis, we develop a customized strategy tailored to your 
                  specific needs, industry, and growth objectives.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Tailored strategic recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Clear implementation roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Defined success metrics and KPIs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Handshake className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Agreement & Onboarding</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Once you approve our proposed strategy and engagement terms, 
                  we formalize our partnership and begin the onboarding process.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Clear service agreement and terms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Team introduction and role definitions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">System setup and data integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  5
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Implementation & Execution</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  We execute the agreed-upon strategy with regular check-ins, 
                  progress updates, and adjustments as needed to ensure optimal results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Phased implementation approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Regular progress reports and updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Flexible adjustments based on results</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  6
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Ongoing Support & Review</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Our relationship doesn't end with implementation. We provide ongoing support, 
                  regular reviews, and strategic guidance to ensure continued success.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Monthly or quarterly review meetings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Continuous optimization and improvements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Long-term strategic partnership</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Typical Engagement Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While every engagement is unique, here's what you can typically expect for timing and milestones.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Week 1-2</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    Discovery & Analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Data collection and analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Current state assessment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Week 3-4</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    Strategy & Planning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Strategy development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Proposal presentation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Agreement finalization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Ongoing</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    Implementation & Support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Strategy execution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Regular monitoring and reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Continuous optimization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Communication Standards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Communication Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear, consistent communication is fundamental to our process and your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">24-Hour Response</h3>
              <p className="text-muted-foreground">
                We respond to all client communications within 24 hours, 
                often much sooner.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Regular Updates</h3>
              <p className="text-muted-foreground">
                Scheduled progress reports and updates keep you informed 
                throughout our engagement.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Dedicated Contact</h3>
              <p className="text-muted-foreground">
                Each client has a dedicated team member as their primary 
                point of contact.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Meetings</h3>
              <p className="text-muted-foreground">
                We accommodate your schedule with flexible meeting times 
                and multiple communication channels.
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
                Ready to Begin?
              </h2>
              <p className="text-xl opacity-90">
                Our proven process has helped hundreds of clients achieve their financial goals. 
                Let's discuss how we can help you succeed with a personalized strategy 
                designed for your unique situation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Free initial consultation - no commitment required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Customized strategy development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Ongoing support and partnership</span>
                </div>
              </div>
            </div>
            
            <div>
              <LeadForm 
                title="Schedule Your Consultation"
                description="Take the first step toward achieving your financial goals. Schedule your free consultation today."
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
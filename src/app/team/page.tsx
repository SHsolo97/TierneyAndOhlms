import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { Mail, Linkedin, Award, GraduationCap, Briefcase, Users } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-primary">Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our dedicated professionals bring decades of combined experience in financial consulting, 
              accounting, and business strategy to help your organization succeed.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Work With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by experienced professionals who are committed to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Team Member 1 */}
            <Card className="border-2 hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-xl">John Smith, CPA</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Managing Partner & Lead Consultant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-left">
                  With over 15 years of experience in financial consulting and accounting, 
                  John leads our team with expertise in strategic planning, tax optimization, 
                  and business growth strategies.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">MBA Finance, CPA Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm">Specialized in Corporate Finance</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-2 hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-xl">Sarah Johnson, CFA</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Senior Financial Advisor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-left">
                  Sarah specializes in investment planning and portfolio management, 
                  helping clients build and maintain wealth through strategic financial planning 
                  and risk management.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">MS Finance, CFA Charterholder</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">12+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm">Investment & Wealth Management</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border-2 hover:border-primary/50 transition-colors text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-xl">Michael Chen, EA</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  Tax Strategy Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-left">
                  Michael leads our tax services division, providing comprehensive tax planning 
                  and preparation services for individuals and businesses while ensuring 
                  optimal tax efficiency.
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm">BS Accounting, Enrolled Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm">Tax Planning & Compliance</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <Button size="sm" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Supporting Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supporting Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our extended team of specialists provides comprehensive support across all areas of financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">Lisa Rodriguez</CardTitle>
                <CardDescription>Senior Bookkeeper</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manages daily bookkeeping operations and ensures accurate financial records for all clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">David Kim</CardTitle>
                <CardDescription>Business Analyst</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provides detailed business analysis and strategic planning support to help clients grow.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">Jennifer White</CardTitle>
                <CardDescription>Compliance Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ensures all client operations meet regulatory requirements and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">Robert Taylor</CardTitle>
                <CardDescription>Client Relations Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintains strong client relationships and ensures exceptional service delivery.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and shape every client interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service delivery, 
                maintaining the highest professional standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                Honesty and transparency are at the core of our business relationships 
                and professional conduct.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and methodologies to provide 
                cutting-edge solutions for our clients.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Our team is committed to ongoing education and staying current 
                with industry trends and regulations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Communication</h3>
              <p className="text-muted-foreground">
                Clear, timely communication ensures our clients are always 
                informed and confident in our services.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We work as partners with our clients, building long-term 
                relationships based on mutual trust and success.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join Our Growing Team
              </h2>
              <p className="text-xl opacity-90">
                We're always looking for talented professionals who share our commitment 
                to excellence and client service. If you're passionate about financial consulting 
                and want to make a difference, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6" />
                  <span>Competitive compensation and benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6" />
                  <span>Continuing education opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Collaborative and supportive work environment</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                View Open Positions
              </Button>
            </div>
            
            <div>
              <LeadForm 
                title="Connect With Our Team"
                description="Interested in working with us or have questions about our services? Get in touch today."
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
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/asset-path"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [aboutOpen, setAboutOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={getAssetPath("logo.png")}
            alt="Tierney and Ohlms" 
            width={120} 
            height={120} 
            className="object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/clients" className="text-sm font-medium hover:text-primary transition-colors">
            Clients
          </Link>
          
          {/* About with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <div 
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              <Link href="/about" className="flex items-center space-x-1">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
            {aboutOpen && (
              <div 
                className="absolute top-full left-0 w-48 bg-background border rounded-md shadow-lg py-2 z-50"
              >
                <Link href="/team" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors">
                  Our Team
                </Link>
                <Link href="/process" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors">
                  Our Process
                </Link>
              </div>
            )}
          </div>

          {/* Resources with Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <div 
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              <Link href="/resources" className="flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
            {resourcesOpen && (
              <div 
                className="absolute top-full left-0 w-48 bg-background border rounded-md shadow-lg py-2 z-50"
              >
                <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/podcasts" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors">
                  Podcasts
                </Link>
                <Link href="/testimonials" className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="block text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/clients" className="block text-sm font-medium hover:text-primary transition-colors">
              Clients
            </Link>
            
            {/* About Section */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">About</div>
              <div className="ml-4 space-y-2">
                <Link href="/about" className="block text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/team" className="block text-sm hover:text-primary transition-colors">
                  Our Team
                </Link>
                <Link href="/process" className="block text-sm hover:text-primary transition-colors">
                  Our Process
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Resources</div>
              <div className="ml-4 space-y-2">
                <Link href="/blog" className="block text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/podcasts" className="block text-sm hover:text-primary transition-colors">
                  Podcasts
                </Link>
                <Link href="/testimonials" className="block text-sm hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
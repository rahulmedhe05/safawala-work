"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center pt-[15px]">
            {isScrolled ? (
              <img src="/Untitled design.png" alt="Safawala" className="h-14 md:h-16 w-auto" />
            ) : (
              <img src="/safawalalogo.png" alt="Safawala" className="h-14 md:h-20 w-auto" />
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors font-mono ${
                isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors font-mono ${
                isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`transition-colors font-mono ${
                isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors font-mono ${
                isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
              }`}
            >
              Contact
            </button>
            <Button className={`${isScrolled ? "bg-accent hover:bg-secondary" : "bg-primary hover:bg-accent"} text-primary-foreground`} onClick={() => window.open('tel:+919725295692')}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${isScrolled ? "text-white" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t border-border ${isScrolled ? "bg-black/90" : "bg-card"}`}>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left transition-colors font-mono py-2 ${
                  isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left transition-colors font-mono py-2 ${
                  isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`text-left transition-colors font-mono py-2 ${
                  isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left transition-colors font-mono py-2 ${
                  isScrolled ? "text-white hover:text-accent" : "text-white hover:text-secondary"
                }`}
              >
                Contact
              </button>
              <Button className={`${isScrolled ? "bg-accent hover:bg-secondary" : "bg-primary hover:bg-accent"} text-primary-foreground w-full`} onClick={() => window.open('tel:+919725295692')}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle } from "lucide-react"

interface DynamicHeroSliderProps {
  location: string
  state?: string
  tagline?: string
  famousFor?: string
}

export function DynamicHeroSlider({ location, state, tagline, famousFor }: DynamicHeroSliderProps) {
  const slides = [
    {
      id: 1,
      title: `Barati Safa & Wedding Turbans in ${location}`,
      subtitle: `Premium Turban Service ${location}`,
      description: `Safawala ${location}'s traditional safa & pagdi for baraat ceremonies and groom's entourage across all ${location} areas`,
      image: "/1.png",
    },
    {
      id: 2,
      title: `Destination Wedding Safa & Pagdi ${location}`,
      subtitle: `Turban Excellence Anywhere in ${location}`,
      description: `Expert feta, sehra and wedding turban solutions for your dream wedding at any location in ${location}`,
      image: "/2.png",
    },
    {
      id: 3,
      title: `Groom Safa, Pagdi & Sehra ${location}`,
      subtitle: `Your Royal Look in ${location}`,
      description: `Handcrafted premium turban designs exclusively for the groom's grand entrance - ${location}'s best turban tying service`,
      image: "/3.png",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    eventCity: location,
    quantity: "",
    preference: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
🎭 *TURBAN/SAFA ENQUIRY* 🎭

👤 *Name:* ${formData.name}
📅 *Event/Wedding Date:* ${formData.eventDate}
📍 *Event/Destination City:* ${formData.eventCity}
🎪 *No. of Safas/Turbans Required:* ${formData.quantity}
✨ *Design/Colour/Fabric Preference:* ${formData.preference}

---
📱 *Sent via Safawala ${location} Website*
    `.trim()

    const whatsappNumber = "919725295692"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 md:from-primary/90 md:via-primary/50 md:to-transparent z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col md:flex-row md:items-center w-full h-full">
            <div className="w-full h-full md:h-auto flex flex-col md:flex-row">
              <div className="container mx-auto px-4 md:px-6 py-6 md:py-0 w-full flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Left Side - Text Content */}
                <div className="flex-1 md:col-span-3 max-w-2xl space-y-3 md:space-y-6 flex flex-col justify-center pt-6 md:pt-0 mt-8 md:mt-16">
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-mono uppercase tracking-wider">{slide.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-mono leading-relaxed">
                    {slide.description}
                  </p>
                  {famousFor && (
                    <p className="text-xs md:text-sm text-accent font-mono">
                      ✨ Perfect for {famousFor}
                    </p>
                  )}
                </div>

                {/* Right Side - Form */}
                <div className="w-full sm:w-auto md:flex-1 md:col-span-2 bg-card rounded-lg p-4 sm:p-5 md:p-6 shadow-2xl h-fit mb-6 md:mb-0 max-w-sm mx-auto sm:mx-0">
                  <div className="mb-3 pb-3 border-b border-border">
                    <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Quick Response</p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-card-foreground">
                      Professional Safa Tying Service in {location}
                      <br />
                      <em className="text-xs not-italic">— 1 Hour Response Time</em>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Wedding Date <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventCity" className="block text-xs font-mono text-card-foreground mb-1.5">
                        City <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="eventCity"
                        type="text"
                        placeholder={`${location}, nearby areas...`}
                        value={formData.eventCity}
                        onChange={(e) => setFormData({ ...formData, eventCity: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs font-mono text-card-foreground mb-1.5">
                        No. of Safas <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        placeholder="30, 80, 250"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        required
                        className="bg-background border-border text-foreground text-xs h-9 md:h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="preference" className="block text-xs font-mono text-card-foreground mb-1.5">
                        Design / Preference
                      </label>
                      <Textarea
                        id="preference"
                        placeholder="Red & gold, silk fabric"
                        value={formData.preference}
                        onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                        rows={1}
                        className="bg-background border-border text-foreground resize-none text-xs"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-sm font-bold flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Enquiry on WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-accent hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-accent hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-accent" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

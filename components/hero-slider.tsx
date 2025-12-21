"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

const slides = [
  {
    id: 1,
    title: "Barati Safa & Wedding Turbans in Jaipur",
    subtitle: "Premium Turban Service",
    description: "Safawala's traditional safa & pagdi for baraat ceremonies and groom's entourage across Jaipur",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Destination Wedding Safa & Pagdi",
    subtitle: "Turban Excellence Anywhere",
    description: "Expert feta, sehra and wedding turban solutions for your dream wedding at any location",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Groom Safa, Pagdi & Sehra",
    subtitle: "Your Royal Look",
    description: "Handcrafted premium turban designs exclusively for the groom's grand entrance - Jaipur's best turban tying service",
    image: "/3.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    eventCity: "",
    quantity: "",
    preference: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      name: formData.name,
      eventDate: formData.eventDate,
      eventCity: formData.eventCity,
      quantity: formData.quantity,
      preference: formData.preference,
    })

    const message = `
🎭 *TURBAN/SAFA ENQUIRY* 🎭

👤 *Name:* ${formData.name}
📅 *Event/Wedding Date:* ${formData.eventDate}
📍 *Event/Destination City:* ${formData.eventCity}
🎪 *No. of Safas/Turbans Required:* ${formData.quantity}
✨ *Design/Colour/Fabric Preference:* ${formData.preference}

---
📱 *Sent via Safawala Website*
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
  }, [])

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
                </div>

                {/* Right Side - Form */}
                <div className="w-full sm:w-auto md:flex-1 md:col-span-2 bg-card rounded-lg p-4 sm:p-5 md:p-6 shadow-2xl h-fit mb-6 md:mb-0 max-w-sm mx-auto sm:mx-0">
                  <div className="mb-3 pb-3 border-b border-border">
                    <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">Quick Response</p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-card-foreground">
                      Professional Safa Tying Service in Jaipur
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
                        placeholder="Jaipur, Delhi..."
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

                    <Button type="submit" className="w-full bg-accent hover:bg-secondary text-accent-foreground text-xs h-9 md:h-8">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm text-primary-foreground p-2 md:p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm text-primary-foreground p-2 md:p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator - Hidden on Mobile */}
      <div className="hidden md:flex absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-30 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

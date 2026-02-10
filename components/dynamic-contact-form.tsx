"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle } from "lucide-react"
import { addLead } from "@/lib/leads"

interface DynamicContactFormProps {
  location: string
  domain?: string
}

export function DynamicContactForm({ location, domain }: DynamicContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    eventCity: "",
    quantity: "",
    preference: "",
  })

  const brandName = domain ? domain.replace(/\.(com|in)$/, '') : `Safawala ${location}`

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

    // Construct WhatsApp message
    const message = `
🎭 *TURBAN/SAFA ENQUIRY* 🎭

👤 *Name:* ${formData.name}
📅 *Event/Wedding Date:* ${formData.eventDate}
📍 *Event/Destination City:* ${formData.eventCity}
🎪 *No. of Safas/Turbans Required:* ${formData.quantity}
✨ *Design/Colour/Fabric Preference:* ${formData.preference}

---
📱 *Sent via ${brandName} Website*
    `.trim()

    // Replace with your WhatsApp number (include country code without + sign)
    const whatsappNumber = "919725295692"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp
    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Book Your Safa & Pagdi Service</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Premium Wedding Turban Service in {location}</h2>
            <p className="text-xl text-primary-foreground/90 font-mono leading-relaxed max-w-2xl mx-auto">
              {"Safawala's best turban tying service - Expert safa, pagdi, sehra & feta design. Fill the form below and we'll connect with you on WhatsApp instantly"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-card-foreground mb-2">
                    1. Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-mono text-card-foreground mb-2">
                    2. Event / Wedding Date <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="eventCity" className="block text-sm font-mono text-card-foreground mb-2">
                    3. Event / Destination City <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="eventCity"
                    type="text"
                    placeholder={`e.g., ${location}, nearby areas`}
                    value={formData.eventCity}
                    onChange={(e) => setFormData({ ...formData, eventCity: e.target.value })}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-mono text-card-foreground mb-2">
                    4. No. of Safas / Turbans Required <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    placeholder="e.g., 30, 80, 250"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="preference" className="block text-sm font-mono text-card-foreground mb-2">
                    5. Design / Colour / Fabric Preference
                  </label>
                  <Textarea
                    id="preference"
                    placeholder="e.g., Traditional red & gold, silk fabric, royal Rajasthani design"
                    value={formData.preference}
                    onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                    rows={3}
                    className="bg-background border-border text-foreground resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-secondary text-accent-foreground">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Enquiry via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-primary-foreground/80 font-mono mb-2">Available 9 AM - 9 PM</p>
                    <a
                      href="tel:+919725295692"
                      className="text-lg font-mono text-accent hover:text-secondary transition-colors"
                    >
                      +91 97252 95692
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-primary-foreground/80 font-mono mb-2">Quick response guaranteed</p>
                    <a
                      href="https://wa.me/919725295692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-mono text-accent hover:text-secondary transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/20">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Free consultation and design guidance",
                    "Instant quotes on WhatsApp",
                    "Same-day response to all queries",
                    "Flexible appointment scheduling",
                    `On-site service available across ${location}`,
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-primary-foreground/90 font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

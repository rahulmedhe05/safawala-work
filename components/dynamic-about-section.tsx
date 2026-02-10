"use client"

import { Crown, Users, Award, Heart, Play } from "lucide-react"
import { useState } from "react"

interface DynamicAboutSectionProps {
  location: string
  state?: string
  tagline?: string
}

export function DynamicAboutSection({ location, state, tagline }: DynamicAboutSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    {
      icon: Crown,
      title: "40+ Years Legacy",
      description: `Four decades of preserving authentic turban tying traditions with master craftsmanship across ${location}`,
    },
    {
      icon: Users,
      title: "750+ Weddings Yearly",
      description: `Trusted turban service for premium groom styling across ${location}'s most celebrated weddings`,
    },
    {
      icon: Award,
      title: "Expert Master Craftsmen",
      description: "Highly skilled artisans specializing in traditional safa, pagdi, and modern fusion designs",
    },
    {
      icon: Heart,
      title: "Premium Quality Service",
      description: "Handcrafted turbans with finest fabrics, perfect fitting, and impeccable attention to detail",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {location}'s Premier Wedding Turban Specialists
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Safawala {location} is {location}'s leading wedding turban specialist, offering premium safa and pagdi services for grooms and baraatis. With 40+ years of expertise, we combine traditional craftsmanship with contemporary designs to create the perfect turban for your special day across all {location} areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-[320px] mx-auto md:mx-0">
            {!isVideoPlaying ? (
              <div className="relative group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <div className="w-full aspect-[9/16] bg-gradient-to-br from-primary/80 to-primary flex flex-col items-center justify-center text-white">
                  <div className="text-center space-y-4 px-6">
                    <img
                      src="/safawalalogo.png"
                      alt={`Safawala ${location}`}
                      className="h-16 mx-auto opacity-90"
                    />
                    <p className="text-lg font-bold">Safawala {location}</p>
                    <p className="text-sm opacity-90">Premium Wedding Turban Service {location}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="bg-accent rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
                  </div>
                </div>
              </div>
            ) : (
              <video
                src="/main video.mp4"
                autoPlay
                controls
                playsInline
                className="w-full aspect-[9/16] object-contain bg-black"
                onEnded={() => setIsVideoPlaying(false)}
              />
            )}
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose Safawala {location}?</h3>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              Safawala {location} stands as {location}'s most trusted turban service, serving 750+ weddings annually with precision and elegance. Our expert team combines traditional turban-tying techniques with personalized styling to ensure every groom looks absolutely regal on their special day across all {location} areas.
            </p>
            <p className="text-muted-foreground font-mono leading-relaxed text-lg">
              With four decades of heritage, we've perfected the art of creating stunning turbans for weddings, engagements, and special ceremonies. From classic burgundy and gold safas to modern fusion designs, Safawala {location} delivers premium quality, perfect fitting, and exceptional service across all of {state || location}.
            </p>
            <ul className="space-y-3">
              {[
                "Premium silk and cotton safa with gold embroidery",
                "Custom pagdi & feta designs for wedding themes",
                "Professional on-site safa tying service",
                "Groom, baraati & sehra styling packages",
                "Expert turban consultation with samples",
                "Traditional & modern wedding turban designs",
                `Perfect safa styling for any event in ${location}`,
                `Delivery & setup across ${location}`,
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

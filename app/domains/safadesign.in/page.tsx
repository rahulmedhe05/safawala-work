import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safa Design | Custom safa designs | Book Online India",
  description: "Safa Design - Custom safa designs. Premium wedding turban tying service with 40+ years legacy. Expert artisans. Pan-India coverage. Book now!",
  keywords: "safa design, safa-design, wedding safa service, groom turban service, pagdi tying service, turban on rent, safa booking online",
  openGraph: {
    title: "Safa Design | Premium Turban Service",
    description: "Custom safa designs. Expert turban service across India.",
    url: "https://safadesign.in",
    type: "website",
  },
}

const SPECIALTIES = ['Custom Designs', 'Unique Patterns', 'Color Matching', 'Exclusive Collection']

const PACKAGES = [
  { title: "Basic Package", desc: "Single turban tying with basic fabric", price: "₹999", features: ["1 Turban", "Basic Fabric", "On-site Service"] },
  { title: "Premium Package", desc: "Premium fabric with accessories", price: "₹2,499", features: ["1 Turban", "Premium Fabric", "Kalgi Included", "Brooch Set"] },
  { title: "Royal Package", desc: "Designer turban with complete set", price: "₹4,999", features: ["1 Designer Turban", "Sehra Included", "Full Accessory Set", "Photo Session"] },
  { title: "Family Package", desc: "Complete family turban solution", price: "₹9,999+", features: ["Groom Special", "5 Barati Turbans", "Matching Designs", "Priority Service"] },
]

export default function SafaDesignHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Premium Service</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Safa Design
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Custom safa designs. India's trusted turban specialist with 40+ years legacy. 
                Premium quality safa, pagdi, feta & sehra for grooms and families. 
                Expert tying service with pan-India delivery.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  Book on WhatsApp
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">40+</p>
                  <p className="text-xs text-white/80">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">750+</p>
                  <p className="text-xs text-white/80">Weddings/Year</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">Pan</p>
                  <p className="text-xs text-white/80">India</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-xs text-white/80">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="Safa Design" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Safa Design Specialties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALTIES.map((spec, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-bold">{spec}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Safa Design Packages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
                <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/919725295692" className="mt-4 block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:bg-primary/90">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DynamicAboutSection location="Safa Design" state="Pan India" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="Safa Design" state="India" domain="safadesign.in" type="service" />
      <WhatsAppFloat />
    </main>
  )
}

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Sharmaji Safawale | Family of turban masters | Premium Turban Service India",
  description: "Sharmaji Safawale - Family of turban masters. Multiple expert artisans from Sharma family serving your turban needs. Premium wedding safa, pagdi & turban service with 40+ years expertise. Book your turban specialist now!",
  keywords: "sharmaji safawale, sharmaji-safawale, turban specialist, wedding safa, groom turban, pagdi service, professional turban tying",
  openGraph: {
    title: "Sharmaji Safawale | Family of turban masters",
    description: "Multiple expert artisans from Sharma family serving your turban needs. Premium turban service across India.",
    url: "https://sharmajisafawale.com",
    type: "website",
  },
}

const SERVICES = [
  { title: "Groom Turban", desc: "Royal turban for the groom's grand entrance", icon: "👑" },
  { title: "Barati Service", desc: "Matching turbans for all barati members", icon: "👥" },
  { title: "Destination Wedding", desc: "Travel anywhere for your special day", icon: "✈️" },
  { title: "Corporate Events", desc: "Traditional turbans for brand events", icon: "🏢" },
]

const TESTIMONIALS = [
  { name: "Rahul S.", text: "Amazing service by Sharmaji Safawale! Made our wedding memorable.", location: "Delhi" },
  { name: "Priya M.", text: "Best turban service we've ever experienced. Highly recommended!", location: "Gujarat" },
  { name: "Amit K.", text: "Sharmaji Safawale team is professional and skilled. 5 stars!", location: "Rajasthan" },
]

export default function SharmajiSafawaleHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Family of turban masters</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Sharmaji Safawale
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Welcome to Sharmaji Safawale - your trusted partner for premium wedding turbans. 
                Multiple expert artisans from Sharma family serving your turban needs. With 40+ years of expertise, we bring you the finest safa, pagdi, 
                feta & sehra crafted by master artisans.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">40+</p>
                  <p className="text-xs text-white/80">Years Legacy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">10K+</p>
                  <p className="text-xs text-white/80">Happy Families</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-xs text-white/80">Cities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">5⭐</p>
                  <p className="text-xs text-white/80">Rated</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="Sharmaji Safawale" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Sharmaji Safawale Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Clients Say About Sharmaji Safawale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl">
                <p className="text-lg mb-4">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-white/80">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DynamicAboutSection location="Sharmaji Safawale" state="India" tagline="Family of turban masters" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="Sharmaji Safawale" state="India" domain="sharmajisafawale.com" type="brand" />
      <WhatsAppFloat />
    </main>
  )
}

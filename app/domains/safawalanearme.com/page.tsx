import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Your City | Wedding Safa Pagdi Turban Service in Your City | Best Turban Tying",
  description: "Safawala Your City - Premier wedding safa, pagdi, feta & turban service in Your City, Pan India. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Local weddings & celebrations!",
  keywords: "safawala your city, safa in your city, pagdi in your city, turban service your city, wedding turban your city, groom safa your city, barati turban your city, safa on rent your city",
  openGraph: {
    title: "Safawala Your City | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Your City. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalanearme.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const YOUR_CITY_SERVICES = [
  { title: "Groom Safa Your City", desc: "Premium safa designs for the groom's royal entrance in Your City", icon: "👑" },
  { title: "Barati Turban Your City", desc: "Matching turbans for barati and family in Your City", icon: "👥" },
  { title: "Your City Destination Wedding", desc: "Complete turban service for destination weddings across Pan India", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Your City weddings", icon: "🎨" },
]

const YOUR_CITY_AREAS = ['Your Area', 'Nearby Locations', 'City Center', 'Suburbs', 'Wedding Venues', 'Banquet Halls', 'Hotels', 'Resorts']

const YOUR_CITY_FAQ = [
  { 
    q: "What is the cost of safa service in Your City?",
    a: "Safa service in Your City starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Your City?",
    a: "Yes, we provide turban tying service across all areas of Your City including Your Area, Nearby Locations, City Center, Suburbs and more. We also cover nearby cities in Pan India."
  },
  { 
    q: "Can you travel for destination weddings from Your City?",
    a: "Absolutely! We regularly travel from Your City to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Your City?",
    a: "We offer 50+ safa styles in Your City including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function YourCityHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Your City"
        state="Pan India"
        famousFor="Local weddings & celebrations"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Your City</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Your City
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Your City and across Pan India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {YOUR_CITY_SERVICES.map((service, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <DynamicAboutSection location="Your City" state="Pan India" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Your City</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {YOUR_CITY_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Your City Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Your City</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {YOUR_CITY_FAQ.map((faq, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <ContactForm />
      
      {/* Footer */}
      <DynamicFooter 
        location="Your City"
        state="Pan India"
        domain="safawalanearme.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

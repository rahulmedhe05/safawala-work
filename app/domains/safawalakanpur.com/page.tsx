import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Kanpur | Wedding Safa Pagdi Turban Service in Kanpur | Best Turban Tying",
  description: "Safawala Kanpur - Premier wedding safa, pagdi, feta & turban service in Kanpur, Uttar Pradesh. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Industrial city weddings!",
  keywords: "safawala kanpur, safa in kanpur, pagdi in kanpur, turban service kanpur, wedding turban kanpur, groom safa kanpur, barati turban kanpur, safa on rent kanpur",
  openGraph: {
    title: "Safawala Kanpur | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Kanpur. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalakanpur.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const KANPUR_SERVICES = [
  { title: "Groom Safa Kanpur", desc: "Premium safa designs for the groom's royal entrance in Kanpur", icon: "👑" },
  { title: "Barati Turban Kanpur", desc: "Matching turbans for barati and family in Kanpur", icon: "👥" },
  { title: "Kanpur Destination Wedding", desc: "Complete turban service for destination weddings across Uttar Pradesh", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Kanpur weddings", icon: "🎨" },
]

const KANPUR_AREAS = ['Civil Lines', 'Mall Road', 'Kidwai Nagar', 'Swaroop Nagar', 'Kakadeo', 'Govind Nagar', 'Harsh Nagar', 'Arya Nagar']

const KANPUR_FAQ = [
  { 
    q: "What is the cost of safa service in Kanpur?",
    a: "Safa service in Kanpur starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Kanpur?",
    a: "Yes, we provide turban tying service across all areas of Kanpur including Civil Lines, Mall Road, Kidwai Nagar, Swaroop Nagar and more. We also cover nearby cities in Uttar Pradesh."
  },
  { 
    q: "Can you travel for destination weddings from Kanpur?",
    a: "Absolutely! We regularly travel from Kanpur to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Kanpur?",
    a: "We offer 50+ safa styles in Kanpur including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function KanpurHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Kanpur"
        state="Uttar Pradesh"
        famousFor="Industrial city weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Kanpur</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Kanpur
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Kanpur and across Uttar Pradesh.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KANPUR_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Kanpur" state="Uttar Pradesh" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Kanpur</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {KANPUR_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Kanpur Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Kanpur</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {KANPUR_FAQ.map((faq, i) => (
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
        location="Kanpur"
        state="Uttar Pradesh"
        domain="safawalakanpur.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

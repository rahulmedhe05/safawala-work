import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Noida | Wedding Safa Pagdi Turban Service in Noida | Best Turban Tying",
  description: "Safawala Noida - Premier wedding safa, pagdi, feta & turban service in Noida, Uttar Pradesh. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Modern corporate weddings!",
  keywords: "safawala noida, safa in noida, pagdi in noida, turban service noida, wedding turban noida, groom safa noida, barati turban noida, safa on rent noida",
  openGraph: {
    title: "Safawala Noida | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Noida. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalanoida.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const NOIDA_SERVICES = [
  { title: "Groom Safa Noida", desc: "Premium safa designs for the groom's royal entrance in Noida", icon: "👑" },
  { title: "Barati Turban Noida", desc: "Matching turbans for barati and family in Noida", icon: "👥" },
  { title: "Noida Destination Wedding", desc: "Complete turban service for destination weddings across Uttar Pradesh", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Noida weddings", icon: "🎨" },
]

const NOIDA_AREAS = ['Sector 18', 'Sector 62', 'Sector 137', 'Sector 50', 'Greater Noida', 'Noida Extension', 'Sector 44', 'Sector 93']

const NOIDA_FAQ = [
  { 
    q: "What is the cost of safa service in Noida?",
    a: "Safa service in Noida starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Noida?",
    a: "Yes, we provide turban tying service across all areas of Noida including Sector 18, Sector 62, Sector 137, Sector 50 and more. We also cover nearby cities in Uttar Pradesh."
  },
  { 
    q: "Can you travel for destination weddings from Noida?",
    a: "Absolutely! We regularly travel from Noida to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Noida?",
    a: "We offer 50+ safa styles in Noida including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function NoidaHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Noida"
        state="Uttar Pradesh"
        famousFor="Modern corporate weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Noida</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Noida
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Noida and across Uttar Pradesh.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {NOIDA_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Noida" state="Uttar Pradesh" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Noida</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {NOIDA_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Noida Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Noida</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {NOIDA_FAQ.map((faq, i) => (
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
        location="Noida"
        state="Uttar Pradesh"
        domain="safawalanoida.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

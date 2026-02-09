import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Bikaner | Wedding Safa Pagdi Turban Service in Bikaner | Best Turban Tying",
  description: "Safawala Bikaner - Premier wedding safa, pagdi, feta & turban service in Bikaner, Rajasthan. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Desert heritage weddings!",
  keywords: "safawala bikaner, safa in bikaner, pagdi in bikaner, turban service bikaner, wedding turban bikaner, groom safa bikaner, barati turban bikaner, safa on rent bikaner",
  openGraph: {
    title: "Safawala Bikaner | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Bikaner. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalabikaner.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const BIKANER_SERVICES = [
  { title: "Groom Safa Bikaner", desc: "Premium safa designs for the groom's royal entrance in Bikaner", icon: "👑" },
  { title: "Barati Turban Bikaner", desc: "Matching turbans for barati and family in Bikaner", icon: "👥" },
  { title: "Bikaner Destination Wedding", desc: "Complete turban service for destination weddings across Rajasthan", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Bikaner weddings", icon: "🎨" },
]

const BIKANER_AREAS = ['Kote Gate', 'Station Road', 'Rani Bazaar', 'Ganga Shahar', 'Lalgarh', 'Karni Nagar', 'Jassusar Gate', 'Pawan Puri']

const BIKANER_FAQ = [
  { 
    q: "What is the cost of safa service in Bikaner?",
    a: "Safa service in Bikaner starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Bikaner?",
    a: "Yes, we provide turban tying service across all areas of Bikaner including Kote Gate, Station Road, Rani Bazaar, Ganga Shahar and more. We also cover nearby cities in Rajasthan."
  },
  { 
    q: "Can you travel for destination weddings from Bikaner?",
    a: "Absolutely! We regularly travel from Bikaner to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Bikaner?",
    a: "We offer 50+ safa styles in Bikaner including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function BikanerHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Bikaner"
        state="Rajasthan"
        famousFor="Desert heritage weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Bikaner</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Bikaner
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Bikaner and across Rajasthan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BIKANER_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Bikaner" state="Rajasthan" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Bikaner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {BIKANER_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Bikaner Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Bikaner</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {BIKANER_FAQ.map((faq, i) => (
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
        location="Bikaner"
        state="Rajasthan"
        domain="safawalabikaner.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

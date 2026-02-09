import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Kochi | Wedding Safa Pagdi Turban Service in Kochi | Best Turban Tying",
  description: "Safawala Kochi - Premier wedding safa, pagdi, feta & turban service in Kochi, Kerala. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Backwater weddings!",
  keywords: "safawala kochi, safa in kochi, pagdi in kochi, turban service kochi, wedding turban kochi, groom safa kochi, barati turban kochi, safa on rent kochi",
  openGraph: {
    title: "Safawala Kochi | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Kochi. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalakochi.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const KOCHI_SERVICES = [
  { title: "Groom Safa Kochi", desc: "Premium safa designs for the groom's royal entrance in Kochi", icon: "👑" },
  { title: "Barati Turban Kochi", desc: "Matching turbans for barati and family in Kochi", icon: "👥" },
  { title: "Kochi Destination Wedding", desc: "Complete turban service for destination weddings across Kerala", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Kochi weddings", icon: "🎨" },
]

const KOCHI_AREAS = ['Fort Kochi', 'Marine Drive', 'MG Road', 'Edappally', 'Kakkanad', 'Panampilly Nagar', 'Thripunithura', 'Ernakulam']

const KOCHI_FAQ = [
  { 
    q: "What is the cost of safa service in Kochi?",
    a: "Safa service in Kochi starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Kochi?",
    a: "Yes, we provide turban tying service across all areas of Kochi including Fort Kochi, Marine Drive, MG Road, Edappally and more. We also cover nearby cities in Kerala."
  },
  { 
    q: "Can you travel for destination weddings from Kochi?",
    a: "Absolutely! We regularly travel from Kochi to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Kochi?",
    a: "We offer 50+ safa styles in Kochi including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function KochiHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Kochi"
        state="Kerala"
        famousFor="Backwater weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Kochi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Kochi
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Kochi and across Kerala.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KOCHI_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Kochi" state="Kerala" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Kochi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {KOCHI_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Kochi Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Kochi</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {KOCHI_FAQ.map((faq, i) => (
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
        location="Kochi"
        state="Kerala"
        domain="safawalakochi.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

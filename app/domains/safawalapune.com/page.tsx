import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Pune | Wedding Safa Pagdi Turban Service in Pune | Best Turban Tying",
  description: "Safawala Pune - Premier wedding safa, pagdi, feta & turban service in Pune, Maharashtra. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Marathi weddings, IT hub celebrations!",
  keywords: "safawala pune, safa in pune, pagdi in pune, turban service pune, wedding turban pune, groom safa pune, barati turban pune, safa on rent pune",
  openGraph: {
    title: "Safawala Pune | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Pune. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalapune.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const PUNE_SERVICES = [
  { title: "Groom Safa Pune", desc: "Premium safa designs for the groom's royal entrance in Pune", icon: "👑" },
  { title: "Barati Turban Pune", desc: "Matching turbans for barati and family in Pune", icon: "👥" },
  { title: "Pune Destination Wedding", desc: "Complete turban service for destination weddings across Maharashtra", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Pune weddings", icon: "🎨" },
]

const PUNE_AREAS = ['Koregaon Park', 'Hadapsar', 'Kothrud', 'Baner', 'Hinjewadi', 'Aundh', 'Wakad', 'Viman Nagar']

const PUNE_FAQ = [
  { 
    q: "What is the cost of safa service in Pune?",
    a: "Safa service in Pune starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Pune?",
    a: "Yes, we provide turban tying service across all areas of Pune including Koregaon Park, Hadapsar, Kothrud, Baner and more. We also cover nearby cities in Maharashtra."
  },
  { 
    q: "Can you travel for destination weddings from Pune?",
    a: "Absolutely! We regularly travel from Pune to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Pune?",
    a: "We offer 50+ safa styles in Pune including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function PuneHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Pune"
        state="Maharashtra"
        famousFor="Marathi weddings, IT hub celebrations"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Pune</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Pune
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Pune and across Maharashtra.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PUNE_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Pune" state="Maharashtra" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Pune</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {PUNE_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Pune Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Pune</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {PUNE_FAQ.map((faq, i) => (
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
        location="Pune"
        state="Maharashtra"
        domain="safawalapune.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

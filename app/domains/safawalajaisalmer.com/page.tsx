import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Jaisalmer | Wedding Safa Pagdi Turban Service in Jaisalmer | Best Turban Tying",
  description: "Safawala Jaisalmer - Premier wedding safa, pagdi, feta & turban service in Jaisalmer, Rajasthan. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Desert weddings, Golden Fort celebrations!",
  keywords: "safawala jaisalmer, safa in jaisalmer, pagdi in jaisalmer, turban service jaisalmer, wedding turban jaisalmer, groom safa jaisalmer, barati turban jaisalmer, safa on rent jaisalmer",
  openGraph: {
    title: "Safawala Jaisalmer | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Jaisalmer. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalajaisalmer.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const JAISALMER_SERVICES = [
  { title: "Groom Safa Jaisalmer", desc: "Premium safa designs for the groom's royal entrance in Jaisalmer", icon: "👑" },
  { title: "Barati Turban Jaisalmer", desc: "Matching turbans for barati and family in Jaisalmer", icon: "👥" },
  { title: "Jaisalmer Destination Wedding", desc: "Complete turban service for destination weddings across Rajasthan", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Jaisalmer weddings", icon: "🎨" },
]

const JAISALMER_AREAS = ['Fort Area', 'Sam Sand Dunes', 'Gandhi Chowk', 'Gadisar Lake', 'Jethwai Road', 'Near Patwon Ki Haveli', 'Kuldhara Road', 'Khuri']

const JAISALMER_FAQ = [
  { 
    q: "What is the cost of safa service in Jaisalmer?",
    a: "Safa service in Jaisalmer starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Jaisalmer?",
    a: "Yes, we provide turban tying service across all areas of Jaisalmer including Fort Area, Sam Sand Dunes, Gandhi Chowk, Gadisar Lake and more. We also cover nearby cities in Rajasthan."
  },
  { 
    q: "Can you travel for destination weddings from Jaisalmer?",
    a: "Absolutely! We regularly travel from Jaisalmer to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Jaisalmer?",
    a: "We offer 50+ safa styles in Jaisalmer including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function JaisalmerHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Jaisalmer"
        state="Rajasthan"
        famousFor="Desert weddings, Golden Fort celebrations"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Jaisalmer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Jaisalmer
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Jaisalmer and across Rajasthan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JAISALMER_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Jaisalmer" state="Rajasthan" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Jaisalmer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {JAISALMER_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Jaisalmer Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Jaisalmer</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {JAISALMER_FAQ.map((faq, i) => (
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
        location="Jaisalmer"
        state="Rajasthan"
        domain="safawalajaisalmer.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

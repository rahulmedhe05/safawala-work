import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Jim Corbett | Wedding Safa Pagdi Turban Service in Jim Corbett | Best Turban Tying",
  description: "Safawala Jim Corbett - Premier wedding safa, pagdi, feta & turban service in Jim Corbett, Uttarakhand. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Jungle resort destination weddings!",
  keywords: "safawala jim corbett, safa in jim corbett, pagdi in jim corbett, turban service jim corbett, wedding turban jim corbett, groom safa jim corbett, barati turban jim corbett, safa on rent jim corbett",
  openGraph: {
    title: "Safawala Jim Corbett | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Jim Corbett. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalajimcorbett.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const JIM_CORBETT_SERVICES = [
  { title: "Groom Safa Jim Corbett", desc: "Premium safa designs for the groom's royal entrance in Jim Corbett", icon: "👑" },
  { title: "Barati Turban Jim Corbett", desc: "Matching turbans for barati and family in Jim Corbett", icon: "👥" },
  { title: "Jim Corbett Destination Wedding", desc: "Complete turban service for destination weddings across Uttarakhand", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Jim Corbett weddings", icon: "🎨" },
]

const JIM_CORBETT_AREAS = ['Dhikala Zone', 'Bijrani Zone', 'Jhirna Zone', 'Durga Devi Zone', 'Sitabani Zone', 'Ramnagar', 'Garjiya Temple', 'Kosi River']

const JIM_CORBETT_FAQ = [
  { 
    q: "What is the cost of safa service in Jim Corbett?",
    a: "Safa service in Jim Corbett starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Jim Corbett?",
    a: "Yes, we provide turban tying service across all areas of Jim Corbett including Dhikala Zone, Bijrani Zone, Jhirna Zone, Durga Devi Zone and more. We also cover nearby cities in Uttarakhand."
  },
  { 
    q: "Can you travel for destination weddings from Jim Corbett?",
    a: "Absolutely! We regularly travel from Jim Corbett to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Jim Corbett?",
    a: "We offer 50+ safa styles in Jim Corbett including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function JimCorbettHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Jim Corbett"
        state="Uttarakhand"
        famousFor="Jungle resort destination weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Jim Corbett</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Jim Corbett
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Jim Corbett and across Uttarakhand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JIM_CORBETT_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Jim Corbett" state="Uttarakhand" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Jim Corbett</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {JIM_CORBETT_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Jim Corbett Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Jim Corbett</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {JIM_CORBETT_FAQ.map((faq, i) => (
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
        location="Jim Corbett"
        state="Uttarakhand"
        domain="safawalajimcorbett.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

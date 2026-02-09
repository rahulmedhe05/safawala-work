import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Rajkot | Wedding Safa Pagdi Turban Service in Rajkot | Best Turban Tying",
  description: "Safawala Rajkot - Premier wedding safa, pagdi, feta & turban service in Rajkot, Gujarat. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Kathiawadi weddings!",
  keywords: "safawala rajkot, safa in rajkot, pagdi in rajkot, turban service rajkot, wedding turban rajkot, groom safa rajkot, barati turban rajkot, safa on rent rajkot",
  openGraph: {
    title: "Safawala Rajkot | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Rajkot. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalarajkot.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const RAJKOT_SERVICES = [
  { title: "Groom Safa Rajkot", desc: "Premium safa designs for the groom's royal entrance in Rajkot", icon: "👑" },
  { title: "Barati Turban Rajkot", desc: "Matching turbans for barati and family in Rajkot", icon: "👥" },
  { title: "Rajkot Destination Wedding", desc: "Complete turban service for destination weddings across Gujarat", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Rajkot weddings", icon: "🎨" },
]

const RAJKOT_AREAS = ['Yagnik Road', 'Kalawad Road', '150 Feet Ring Road', 'University Road', 'Raiya Road', 'Mavdi', 'Kotecha Chowk', 'Amin Marg']

const RAJKOT_FAQ = [
  { 
    q: "What is the cost of safa service in Rajkot?",
    a: "Safa service in Rajkot starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Rajkot?",
    a: "Yes, we provide turban tying service across all areas of Rajkot including Yagnik Road, Kalawad Road, 150 Feet Ring Road, University Road and more. We also cover nearby cities in Gujarat."
  },
  { 
    q: "Can you travel for destination weddings from Rajkot?",
    a: "Absolutely! We regularly travel from Rajkot to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Rajkot?",
    a: "We offer 50+ safa styles in Rajkot including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function RajkotHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Rajkot"
        state="Gujarat"
        famousFor="Kathiawadi weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Rajkot</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Rajkot
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Rajkot and across Gujarat.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RAJKOT_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Rajkot" state="Gujarat" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Rajkot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {RAJKOT_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Rajkot Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Rajkot</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {RAJKOT_FAQ.map((faq, i) => (
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
        location="Rajkot"
        state="Gujarat"
        domain="safawalarajkot.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Delhi | Wedding Safa Pagdi Turban Service in Delhi | Best Turban Tying",
  description: "Safawala Delhi - Premier wedding safa, pagdi, feta & turban service in Delhi, Delhi NCR. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Royal weddings, Punjabi celebrations!",
  keywords: "safawala delhi, safa in delhi, pagdi in delhi, turban service delhi, wedding turban delhi, groom safa delhi, barati turban delhi, safa on rent delhi",
  openGraph: {
    title: "Safawala Delhi | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Delhi. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawaladelhi.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const DELHI_SERVICES = [
  { title: "Groom Safa Delhi", desc: "Premium safa designs for the groom's royal entrance in Delhi", icon: "👑" },
  { title: "Barati Turban Delhi", desc: "Matching turbans for barati and family in Delhi", icon: "👥" },
  { title: "Delhi Destination Wedding", desc: "Complete turban service for destination weddings across Delhi NCR", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Delhi weddings", icon: "🎨" },
]

const DELHI_AREAS = ['Connaught Place', 'Chandni Chowk', 'South Delhi', 'Dwarka', 'Rohini', 'Karol Bagh', 'Lajpat Nagar', 'Saket']

const DELHI_FAQ = [
  { 
    q: "What is the cost of safa service in Delhi?",
    a: "Safa service in Delhi starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Delhi?",
    a: "Yes, we provide turban tying service across all areas of Delhi including Connaught Place, Chandni Chowk, South Delhi, Dwarka and more. We also cover nearby cities in Delhi NCR."
  },
  { 
    q: "Can you travel for destination weddings from Delhi?",
    a: "Absolutely! We regularly travel from Delhi to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Delhi?",
    a: "We offer 50+ safa styles in Delhi including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function DelhiHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Delhi"
        state="Delhi NCR"
        famousFor="Royal weddings, Punjabi celebrations"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Delhi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Delhi
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Delhi and across Delhi NCR.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DELHI_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Delhi" state="Delhi NCR" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Delhi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {DELHI_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Delhi Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Delhi</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {DELHI_FAQ.map((faq, i) => (
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
        location="Delhi"
        state="Delhi NCR"
        domain="safawaladelhi.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

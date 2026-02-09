import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Safawala Mount Abu | Wedding Safa Pagdi Turban Service in Mount Abu | Best Turban Tying",
  description: "Safawala Mount Abu - Premier wedding safa, pagdi, feta & turban service in Mount Abu, Rajasthan. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for Hill station destination weddings!",
  keywords: "safawala mount abu, safa in mount abu, pagdi in mount abu, turban service mount abu, wedding turban mount abu, groom safa mount abu, barati turban mount abu, safa on rent mount abu",
  openGraph: {
    title: "Safawala Mount Abu | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in Mount Abu. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://safawalamountabu.com",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const MOUNT_ABU_SERVICES = [
  { title: "Groom Safa Mount Abu", desc: "Premium safa designs for the groom's royal entrance in Mount Abu", icon: "👑" },
  { title: "Barati Turban Mount Abu", desc: "Matching turbans for barati and family in Mount Abu", icon: "👥" },
  { title: "Mount Abu Destination Wedding", desc: "Complete turban service for destination weddings across Rajasthan", icon: "✈️" },
  { title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for Mount Abu weddings", icon: "🎨" },
]

const MOUNT_ABU_AREAS = ['Nakki Lake', 'Dilwara Road', 'Abu Road', 'Main Market', 'Sunset Point Road', 'Achalgarh', 'Guru Shikhar', "Trevor's Tank"]

const MOUNT_ABU_FAQ = [
  { 
    q: "What is the cost of safa service in Mount Abu?",
    a: "Safa service in Mount Abu starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  },
  { 
    q: "Do you provide turban service across all areas of Mount Abu?",
    a: "Yes, we provide turban tying service across all areas of Mount Abu including Nakki Lake, Dilwara Road, Abu Road, Main Market and more. We also cover nearby cities in Rajasthan."
  },
  { 
    q: "Can you travel for destination weddings from Mount Abu?",
    a: "Absolutely! We regularly travel from Mount Abu to destination wedding locations across India. Additional travel charges apply based on location."
  },
  { 
    q: "How many types of safa styles are available in Mount Abu?",
    a: "We offer 50+ safa styles in Mount Abu including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  },
]

export default function MountAbuHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero with Form */}
      <DynamicHeroSlider 
        location="Mount Abu"
        state="Rajasthan"
        famousFor="Hill station destination weddings"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in Mount Abu</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in Mount Abu
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in Mount Abu and across Rajasthan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOUNT_ABU_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="Mount Abu" state="Rajasthan" />
      
      {/* Service Areas */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of Mount Abu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {MOUNT_ABU_AREAS.map((area, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All Mount Abu Areas Covered
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - Mount Abu</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {MOUNT_ABU_FAQ.map((faq, i) => (
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
        location="Mount Abu"
        state="Rajasthan"
        domain="safawalamountabu.com"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Rajasthani Pagdi | Premium Rajasthani Pagdi for Weddings | Buy & Rent Online",
  description: "Rajasthani Pagdi - Traditional Rajasthani turban. Premium rajasthani pagdi collection for grooms & weddings. Authentic Rajasthan style turbans. 40+ years expertise. Order online or book service!",
  keywords: "rajasthani pagdi, rajasthani pagdi for wedding, rajasthani pagdi for groom, buy rajasthani pagdi, rajasthani pagdi on rent, rajasthan turban, rajasthani pagdi price",
  openGraph: {
    title: "Rajasthani Pagdi | Premium Wedding Turbans",
    description: "Traditional Rajasthani turban. Authentic Rajasthan style turbans for weddings.",
    url: "https://rajasthanipagdi.in",
    type: "website",
  },
}

const COLORS = ['Saffron', 'Red', 'Pink', 'Yellow', 'Green']
const OCCASIONS = ['Rajasthani Weddings', 'Royal Events', 'Desert Festivals', 'Cultural Programs']

const COLLECTION = [
  { title: "Classic Rajasthani Pagdi", desc: "Traditional design with authentic Rajasthan craftsmanship", price: "₹2,500" },
  { title: "Designer Rajasthani Pagdi", desc: "Modern fusion with premium embroidery work", price: "₹4,500" },
  { title: "Royal Rajasthani Pagdi", desc: "Luxury fabric with kalgi & brooch set included", price: "₹6,500" },
  { title: "Bridal Rajasthani Pagdi Set", desc: "Matching groom & family set for complete coordination", price: "₹8,500" },
]

const FAQ = [
  { q: "What makes Rajasthani Pagdi unique?", a: "Rajasthani Pagdi represents Traditional Rajasthani turban. It features distinctive patterns and colors that are iconic to Rajasthan culture and tradition." },
  { q: "What colors are available in Rajasthani Pagdi?", a: "Our Rajasthani Pagdi collection is available in traditional colors including Saffron, Red, Pink and many more options to match your outfit." },
  { q: "Can I rent Rajasthani Pagdi instead of buying?", a: "Yes! We offer both purchase and rental options for Rajasthani Pagdi. Rental starts from ₹500/day with professional tying service available." },
  { q: "Do you ship Rajasthani Pagdi pan-India?", a: "Absolutely! We deliver Rajasthani Pagdi across India with express shipping options. Turban tying tutorials included with every order." },
]

export default function RajasthaniPagdiHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Authentic Rajasthan Style</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium Rajasthani Pagdi Collection
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Traditional Rajasthani turban. Discover our exclusive collection of authentic Rajasthani Pagdi 
                handcrafted by master artisans with 40+ years of expertise. Perfect for 
                grooms, barati, and special Rajasthan celebrations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  Order on WhatsApp
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">40+</p>
                  <p className="text-xs text-white/80">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-xs text-white/80">Designs</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">Pan</p>
                  <p className="text-xs text-white/80">India</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">5⭐</p>
                  <p className="text-xs text-white/80">Rated</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-safa.webp" alt="Rajasthani Pagdi" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rajasthani Pagdi Designs & Prices
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our exclusive range of rajasthani pagdi in various colors, patterns, and premium fabrics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COLLECTION.map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border hover:shadow-xl transition-all">
                <div className="aspect-square bg-primary/10 rounded-lg mb-4 flex items-center justify-center text-6xl">🎭</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                <p className="text-primary font-bold">Starting {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors & Occasions */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {COLORS.map((color, i) => (
                  <span key={i} className="bg-white/20 px-4 py-2 rounded-full">{color}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
              <div className="flex flex-wrap gap-3">
                {OCCASIONS.map((occ, i) => (
                  <span key={i} className="bg-accent text-accent-foreground px-4 py-2 rounded-full">{occ}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DynamicAboutSection location="Rajasthani Pagdi" state="Rajasthan" />
      <GallerySection />
      
      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Rajasthani Pagdi - Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {FAQ.map((faq, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <DynamicFooter location="Rajasthani Pagdi" state="Rajasthan" domain="rajasthanipagdi.in" type="style" />
      <WhatsAppFloat />
    </main>
  )
}

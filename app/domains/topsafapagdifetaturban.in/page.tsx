import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Top Safa Pagdi Feta Turban | Top-rated turban service in India | India's Premier Wedding Turban",
  description: "Top Safa Pagdi Feta Turban - Top-rated turban service in India. India's most trusted wedding turban specialists. Premium safa, pagdi, feta & turban with 40+ years expertise. Experience the best!",
  keywords: "best safa, best pagdi, best turban, top safa service, premium wedding turban, luxury turban service, best turban india, feta for wedding",
  openGraph: {
    title: "Top Safa Pagdi Feta Turban | Top-rated turban service in India",
    description: "India's premier wedding turban service. Experience the best in safa, pagdi, feta & turban.",
    url: "https://topsafapagdifetaturban.in",
    type: "website",
  },
}

const FEATURES = ['Top 10 Service', '5-Star Reviews', 'Trusted Brand', 'Quality Guaranteed']

const WHY_BEST = [
  { title: "40+ Years Legacy", desc: "Four decades of turban expertise passed through generations" },
  { title: "Master Artisans", desc: "Skilled craftsmen with specialized turban tying techniques" },
  { title: "Premium Materials", desc: "Only the finest fabrics and authentic accessories" },
  { title: "Pan-India Service", desc: "We travel anywhere in India for your special day" },
  { title: "5-Star Reviews", desc: "Consistently rated the best by thousands of happy families" },
  { title: "Celebrity Choice", desc: "Trusted by celebrities and high-profile weddings" },
]

export default function TopSafaPagdiFetaTurbanHomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                🏆 India's #1 Rated
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Top Safa Pagdi Feta Turban
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Top-rated turban service in India. Experience the finest wedding turbans crafted by India's master artisans. 
                Premium safa, pagdi, feta & sehra with 40+ years of expertise. 
                Trusted by 10,000+ families across India.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-6">
                {FEATURES.map((f, i) => (
                  <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ {f}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="Top Safa Pagdi Feta Turban" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Best Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why We're The Best
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_BEST.map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-accent">40+</p>
              <p className="text-white/80">Years Legacy</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent">10K+</p>
              <p className="text-white/80">Happy Families</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent">50+</p>
              <p className="text-white/80">Cities Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent">100%</p>
              <p className="text-white/80">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <DynamicAboutSection location="Top Safa Pagdi Feta Turban" state="India" tagline="Top-rated turban service in India" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="Top Safa Pagdi Feta Turban" state="India" domain="topsafapagdifetaturban.in" type="premium" />
      <WhatsAppFloat />
    </main>
  )
}

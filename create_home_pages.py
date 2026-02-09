#!/usr/bin/env python3
"""
Script to create professional home pages for all domains.
Generates SEO-optimized content for city, style, and generic domains.
"""

import os

base_dir = "/Applications/Safawala ALL/domains"

# Domain categorization with metadata
domain_data = {
    # ============== CITY DOMAINS ==============
    "safawalaahmedabad.com": {"type": "city", "city": "Ahmedabad", "state": "Gujarat", "famous_for": "Navratri, Garba weddings"},
    "safawaladelhi.com": {"type": "city", "city": "Delhi", "state": "Delhi NCR", "famous_for": "Royal weddings, Punjabi celebrations"},
    "safawalapune.com": {"type": "city", "city": "Pune", "state": "Maharashtra", "famous_for": "Marathi weddings, IT hub celebrations"},
    "safawalanagpur.com": {"type": "city", "city": "Nagpur", "state": "Maharashtra", "famous_for": "Orange city weddings"},
    "safawalanashik.com": {"type": "city", "city": "Nashik", "state": "Maharashtra", "famous_for": "Wine capital weddings"},
    "safawalasurat.com": {"type": "city", "city": "Surat", "state": "Gujarat", "famous_for": "Diamond city, Gujarati weddings"},
    "safawalagwalior.com": {"type": "city", "city": "Gwalior", "state": "Madhya Pradesh", "famous_for": "Royal heritage weddings"},
    "safawalabhopal.com": {"type": "city", "city": "Bhopal", "state": "Madhya Pradesh", "famous_for": "Lake city celebrations"},
    "safawalaindore.com": {"type": "city", "city": "Indore", "state": "Madhya Pradesh", "famous_for": "Food capital weddings"},
    "safawalanoida.com": {"type": "city", "city": "Noida", "state": "Uttar Pradesh", "famous_for": "Modern weddings"},
    "safawalakanpur.com": {"type": "city", "city": "Kanpur", "state": "Uttar Pradesh", "famous_for": "Industrial city weddings"},
    "safawalaagra.com": {"type": "city", "city": "Agra", "state": "Uttar Pradesh", "famous_for": "Taj Mahal, Heritage weddings"},
    "safawalarajkot.com": {"type": "city", "city": "Rajkot", "state": "Gujarat", "famous_for": "Kathiawadi weddings"},
    "safawalavaranasi.com": {"type": "city", "city": "Varanasi", "state": "Uttar Pradesh", "famous_for": "Holy city, Traditional weddings"},
    "safawalalucknow.com": {"type": "city", "city": "Lucknow", "state": "Uttar Pradesh", "famous_for": "Nawabi culture, Elegant weddings"},
    "safawalaamritsar.com": {"type": "city", "city": "Amritsar", "state": "Punjab", "famous_for": "Punjabi weddings, Golden Temple"},
    "safawalachandigarh.com": {"type": "city", "city": "Chandigarh", "state": "Punjab/Haryana", "famous_for": "Modern city, Grand weddings"},
    "safawalagurgaon.com": {"type": "city", "city": "Gurgaon", "state": "Haryana", "famous_for": "Corporate weddings, Luxury venues"},
    "safawalamountabu.com": {"type": "city", "city": "Mount Abu", "state": "Rajasthan", "famous_for": "Hill station weddings"},
    "safawalapushkar.com": {"type": "city", "city": "Pushkar", "state": "Rajasthan", "famous_for": "Lake weddings, Spiritual celebrations"},
    "safawalajaisalmer.com": {"type": "city", "city": "Jaisalmer", "state": "Rajasthan", "famous_for": "Desert weddings, Royal celebrations"},
    "safawalaudaipur.com": {"type": "city", "city": "Udaipur", "state": "Rajasthan", "famous_for": "Lake Palace, Royal weddings"},
    "safawalajodhpur.com": {"type": "city", "city": "Jodhpur", "state": "Rajasthan", "famous_for": "Blue city, Mehrangarh weddings"},
    "safawalabikaner.com": {"type": "city", "city": "Bikaner", "state": "Rajasthan", "famous_for": "Desert heritage weddings"},
    "safawalabaroda.com": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "safawalabaroda.in": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "safawalavadodara.com": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "safawavadodara.com": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "barodasafawala.com": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "barodasafawala.in": {"type": "city", "city": "Vadodara", "state": "Gujarat", "famous_for": "Cultural capital, Palace weddings"},
    "safawalapatiala.com": {"type": "city", "city": "Patiala", "state": "Punjab", "famous_for": "Royal Punjabi weddings"},
    "safawalaludhiana.com": {"type": "city", "city": "Ludhiana", "state": "Punjab", "famous_for": "Industrial hub weddings"},
    "safawalamussoorie.com": {"type": "city", "city": "Mussoorie", "state": "Uttarakhand", "famous_for": "Queen of hills weddings"},
    "safawalajimcorbett.com": {"type": "city", "city": "Jim Corbett", "state": "Uttarakhand", "famous_for": "Jungle resort weddings"},
    "safawalakochi.com": {"type": "city", "city": "Kochi", "state": "Kerala", "famous_for": "Backwater weddings"},
    "safawalakerala.com": {"type": "city", "city": "Kerala", "state": "Kerala", "famous_for": "God's own country weddings"},
    "safawalakshadweep.com": {"type": "city", "city": "Lakshadweep", "state": "Lakshadweep", "famous_for": "Island weddings"},
    "safawalashimla.com": {"type": "city", "city": "Shimla", "state": "Himachal Pradesh", "famous_for": "Hill station weddings"},
    "safawaladubai.com": {"type": "city", "city": "Dubai", "state": "UAE", "famous_for": "Luxury destination weddings"},
    "safawalagoa.com": {"type": "city", "city": "Goa", "state": "Goa", "famous_for": "Beach weddings, Destination celebrations"},
    "safawalanearme.com": {"type": "generic", "city": "Near Me", "state": "Pan India", "famous_for": "Local wedding services"},
    
    # ============== STYLE DOMAINS ==============
    "rajputisafa.in": {"type": "style", "style": "Rajputi Safa", "region": "Rajasthan", "desc": "Royal Rajput turban tradition"},
    "rajputisafa.com": {"type": "style", "style": "Rajputi Safa", "region": "Rajasthan", "desc": "Royal Rajput turban tradition"},
    "rajasthanipagdi.com": {"type": "style", "style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Traditional Rajasthani turban"},
    "rajasthanipagdi.in": {"type": "style", "style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Traditional Rajasthani turban"},
    "rajwadisafa.com": {"type": "style", "style": "Rajwadi Safa", "region": "Rajasthan", "desc": "Royal palace style turban"},
    "bandhejsafa.com": {"type": "style", "style": "Bandhej Safa", "region": "Gujarat/Rajasthan", "desc": "Tie-dye pattern turban"},
    "leheriyasafa.com": {"type": "style", "style": "Leheriya Safa", "region": "Rajasthan", "desc": "Wave pattern turban"},
    "pachrangisafa.com": {"type": "style", "style": "Pachrangi Safa", "region": "Rajasthan", "desc": "Five-color turban"},
    "pachrangisafa.in": {"type": "style", "style": "Pachrangi Safa", "region": "Rajasthan", "desc": "Five-color turban"},
    "safajodhpuri.com": {"type": "style", "style": "Jodhpuri Safa", "region": "Jodhpur", "desc": "Jodhpur style turban"},
    "safajodhpuri.in": {"type": "style", "style": "Jodhpuri Safa", "region": "Jodhpur", "desc": "Jodhpur style turban"},
    "pagdirajasthani.com": {"type": "style", "style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Traditional Rajasthani turban"},
    "punjabipagdi.com": {"type": "style", "style": "Punjabi Pagdi", "region": "Punjab", "desc": "Punjabi turban style"},
    "punjabipagdi.in": {"type": "style", "style": "Punjabi Pagdi", "region": "Punjab", "desc": "Punjabi turban style"},
    
    # ============== GENERIC/SERVICE DOMAINS ==============
    "safaforgroom.com": {"type": "service", "service": "Safa for Groom", "desc": "Premium groom turban service"},
    "safaforgroom.in": {"type": "service", "service": "Safa for Groom", "desc": "Premium groom turban service"},
    "safagroom.com": {"type": "service", "service": "Safa Groom", "desc": "Wedding safa for grooms"},
    "safagroom.in": {"type": "service", "service": "Safa Groom", "desc": "Wedding safa for grooms"},
    "pagdiforgroom.com": {"type": "service", "service": "Pagdi for Groom", "desc": "Traditional pagdi service"},
    "pagdiforgroom.in": {"type": "service", "service": "Pagdi for Groom", "desc": "Traditional pagdi service"},
    "pagdiforwedding.com": {"type": "service", "service": "Pagdi for Wedding", "desc": "Wedding pagdi specialist"},
    "groompagri.com": {"type": "service", "service": "Groom Pagri", "desc": "Groom's pagri service"},
    "groompagri.in": {"type": "service", "service": "Groom Pagri", "desc": "Groom's pagri service"},
    "fetaforwedding.com": {"type": "service", "service": "Feta for Wedding", "desc": "Wedding feta specialist"},
    "safapagdi.com": {"type": "service", "service": "Safa Pagdi", "desc": "Safa & Pagdi service"},
    "safapagdi.in": {"type": "service", "service": "Safa Pagdi", "desc": "Safa & Pagdi service"},
    "safadesign.in": {"type": "service", "service": "Safa Design", "desc": "Custom safa designs"},
    "weddingsafa.shop": {"type": "service", "service": "Wedding Safa", "desc": "Wedding safa shop"},
    "weddingturban.in": {"type": "service", "service": "Wedding Turban", "desc": "Wedding turban service"},
    "pagdi.online": {"type": "service", "service": "Pagdi Online", "desc": "Online pagdi booking"},
    "pagri.shop": {"type": "service", "service": "Pagri Shop", "desc": "Pagri online shop"},
    "paghdi.in": {"type": "service", "service": "Paghdi", "desc": "Traditional paghdi service"},
    "saafa.online": {"type": "service", "service": "Saafa Online", "desc": "Online saafa booking"},
    "saffa.in": {"type": "service", "service": "Saffa", "desc": "Premium saffa service"},
    
    # ============== BRAND DOMAINS ==============
    "sharmajisafawala.com": {"type": "brand", "brand": "Sharmaji Safawala", "tagline": "Traditional turban experts"},
    "sharmajisafawala.in": {"type": "brand", "brand": "Sharmaji Safawala", "tagline": "Traditional turban experts"},
    "sharmajisafawale.com": {"type": "brand", "brand": "Sharmaji Safawale", "tagline": "Family of turban masters"},
    "sharmajisafawale.in": {"type": "brand", "brand": "Sharmaji Safawale", "tagline": "Family of turban masters"},
    "mysafawale.com": {"type": "brand", "brand": "My Safawale", "tagline": "Your personal turban service"},
    "bollywoodsafawala.com": {"type": "brand", "brand": "Bollywood Safawala", "tagline": "Celebrity turban styling"},
    "srgrooms.com": {"type": "brand", "brand": "SR Grooms", "tagline": "Complete groom styling"},
    "srgroomscreations.in": {"type": "brand", "brand": "SR Grooms Creations", "tagline": "Creative groom solutions"},
    "wowgrooms.in": {"type": "brand", "brand": "WOW Grooms", "tagline": "Making grooms look WOW"},
    
    # ============== PREMIUM DOMAINS ==============
    "bestsafapagdifetaturban.com": {"type": "premium", "name": "Best Safa Pagdi Feta Turban", "tagline": "The best in wedding turbans"},
    "bestsafapagdifetaturban.in": {"type": "premium", "name": "Best Safa Pagdi Feta Turban", "tagline": "The best in wedding turbans"},
    "topsafapagdifetaturban.com": {"type": "premium", "name": "Top Safa Pagdi Feta Turban", "tagline": "Top-rated turban service"},
    "topsafapagdifetaturban.in": {"type": "premium", "name": "Top Safa Pagdi Feta Turban", "tagline": "Top-rated turban service"},
}

def get_city_home_page(domain, data):
    city = data["city"]
    state = data["state"]
    famous_for = data.get("famous_for", "weddings")
    
    return f'''import type {{ Metadata }} from "next"
import {{ HeroSlider }} from "@/components/hero-slider"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ ServicesSection }} from "@/components/services-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "Safawala {city} | Wedding Safa Pagdi Turban Service in {city} | Best Turban Tying",
  description: "Safawala {city} - Premier wedding safa, pagdi, feta & turban service in {city}, {state}. Expert turban tying for grooms & barati. 40+ years legacy. Book now for {famous_for}!",
  keywords: "safawala {city.lower()}, safa in {city.lower()}, pagdi in {city.lower()}, turban service {city.lower()}, wedding turban {city.lower()}, groom safa {city.lower()}, barati turban {city.lower()}",
  openGraph: {{
    title: "Safawala {city} | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in {city}. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://{domain}",
    type: "website",
    images: ["/og-image.jpg"],
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Welcome to Safawala {city}</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium Wedding Safa & Turban Service in {city}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {city}'s most trusted wedding turban specialist with 40+ years of legacy. 
                Expert safa, pagdi, feta & sehra tying service for grooms, barati and family members. 
                Perfect for {famous_for}.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">40+</p>
                  <p className="text-sm text-white/80">Years Legacy</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">750+</p>
                  <p className="text-sm text-white/80">Weddings/Year</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">100%</p>
                  <p className="text-sm text-white/80">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="Groom with Safa in {city}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Services Section */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in {city}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Wedding Turban Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in {city} and across {state}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{[
              {{ title: "Groom Safa", desc: "Premium safa designs for the groom's grand entrance", icon: "👑" }},
              {{ title: "Barati Turban", desc: "Matching turbans for barati and family members", icon: "👥" }},
              {{ title: "Destination Wedding", desc: "Travel-ready turban service across {state}", icon: "✈️" }},
              {{ title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs", icon: "🎨" }},
            ].map((service, i) => (
              <div key={{i}} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{{service.icon}}</div>
                <h3 className="text-xl font-bold mb-3">{{service.title}}</h3>
                <p className="text-muted-foreground">{{service.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* About Section */}}
      <AboutSection />

      {{/* Why Choose Us */}}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Safawala {city}?
            </h2>
            <p className="text-xl text-white/90">
              {city}'s premier wedding turban specialist trusted by thousands of families
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {{[
              "40+ years of turban tying expertise",
              "Premium quality fabrics & materials",
              "On-location service across {city}",
              "Expert craftsmen & stylists",
              "Wide variety of designs & colors",
              "Affordable packages for all budgets",
            ].map((item, i) => (
              <div key={{i}} className="flex items-center gap-4 bg-white/10 p-6 rounded-xl">
                <span className="text-accent text-2xl">✓</span>
                <span className="text-lg">{{item}}</span>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Gallery */}}
      <GallerySection />

      {{/* Contact Form */}}
      <ContactForm />

      {{/* Areas We Serve */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Areas We Serve in {city}
            </h2>
            <p className="text-muted-foreground">
              Our turban experts provide doorstep service across all areas of {city} and {state}
            </p>
          </div>
          <div className="text-center">
            <a href="/areas" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              View All Service Areas →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def get_style_home_page(domain, data):
    style = data["style"]
    region = data["region"]
    desc = data["desc"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ HeroSlider }} from "@/components/hero-slider"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{style} | Premium {style} for Weddings | Buy & Rent Online",
  description: "{style} - {desc}. Premium {style.lower()} collection for grooms & weddings. Authentic {region} style turbans. 40+ years expertise. Order online or book service!",
  keywords: "{style.lower()}, {style.lower()} for wedding, {style.lower()} for groom, buy {style.lower()}, {style.lower()} on rent, {region.lower()} turban",
  openGraph: {{
    title: "{style} | Premium Wedding Turbans",
    description: "{desc}. Authentic {region} style turbans for weddings.",
    url: "https://{domain}",
    type: "website",
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Authentic {region} Style</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium {style} Collection
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {desc}. Discover our exclusive collection of authentic {style} 
                handcrafted by master artisans with 40+ years of expertise. Perfect for 
                grooms, barati, and special occasions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Order on WhatsApp
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-safa.webp" alt="{style}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Collection Section */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {style} Designs
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our exclusive range of {style.lower()} in various colors, patterns, and fabrics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{[
              {{ title: "Classic {style}", desc: "Traditional design with authentic craftsmanship", price: "₹2,500" }},
              {{ title: "Designer {style}", desc: "Modern fusion with embroidery work", price: "₹4,500" }},
              {{ title: "Royal {style}", desc: "Premium fabric with kalgi & brooch", price: "₹6,500" }},
              {{ title: "Bridal Collection", desc: "Matching groom & bride family set", price: "₹8,500" }},
            ].map((item, i) => (
              <div key={{i}} className="bg-background p-6 rounded-xl border hover:shadow-xl transition-all">
                <div className="aspect-square bg-primary/10 rounded-lg mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{{item.title}}</h3>
                <p className="text-muted-foreground text-sm mb-3">{{item.desc}}</p>
                <p className="text-primary font-bold">Starting {{item.price}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def get_service_home_page(domain, data):
    service = data["service"]
    desc = data["desc"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ HeroSlider }} from "@/components/hero-slider"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{service} | Premium Wedding Turban Service | Buy & Rent Online",
  description: "{service} - {desc}. Premium wedding turban collection for grooms & barati. Expert turban tying service. Pan-India delivery. Book now!",
  keywords: "{service.lower()}, wedding turban, groom safa, wedding pagdi, turban on rent, buy turban online",
  openGraph: {{
    title: "{service} | Premium Wedding Turbans",
    description: "{desc}. Expert turban service for weddings.",
    url: "https://{domain}",
    type: "website",
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Premium Turban Service</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {service}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {desc}. India's trusted wedding turban specialist with 40+ years legacy. 
                Premium quality safa, pagdi, feta & sehra for grooms and families. 
                Expert tying service with pan-India delivery.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">40+</p>
                  <p className="text-sm text-white/80">Years Legacy</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">750+</p>
                  <p className="text-sm text-white/80">Weddings/Year</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">Pan</p>
                  <p className="text-sm text-white/80">India Service</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{service}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Services */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Turban Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{[
              {{ title: "Groom Turban", desc: "Premium safa & pagdi for the groom", icon: "👑" }},
              {{ title: "Barati Package", desc: "Matching turbans for family & guests", icon: "👥" }},
              {{ title: "Rent Service", desc: "Quality turbans on rent", icon: "🔄" }},
              {{ title: "Buy Online", desc: "Purchase with doorstep delivery", icon: "🛒" }},
            ].map((service, i) => (
              <div key={{i}} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{{service.icon}}</div>
                <h3 className="text-xl font-bold mb-3">{{service.title}}</h3>
                <p className="text-muted-foreground">{{service.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def get_brand_home_page(domain, data):
    brand = data["brand"]
    tagline = data["tagline"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ HeroSlider }} from "@/components/hero-slider"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{brand} | {tagline} | Premium Wedding Turban Service",
  description: "{brand} - {tagline}. Premium wedding safa, pagdi, feta & turban service. 40+ years legacy. Expert turban tying for grooms & families. Book now!",
  keywords: "{brand.lower().replace(' ', '-')}, wedding turban, groom safa, wedding pagdi, turban service",
  openGraph: {{
    title: "{brand} | {tagline}",
    description: "{tagline}. Premium wedding turban service.",
    url: "https://{domain}",
    type: "website",
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">{tagline}</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {brand}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Welcome to {brand} - your trusted partner for premium wedding turbans. 
                With 40+ years of expertise, we bring you the finest safa, pagdi, feta & sehra 
                crafted by master artisans. Making every groom look royal on their special day.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{brand}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def get_premium_home_page(domain, data):
    name = data["name"]
    tagline = data["tagline"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ HeroSlider }} from "@/components/hero-slider"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{name} | {tagline} | India's #1 Wedding Turban Service",
  description: "{name} - {tagline}. India's best wedding safa, pagdi, feta & turban service. Premium quality, 40+ years legacy. Expert turban tying. Book now!",
  keywords: "best safa, best pagdi, best turban, top wedding turban, premium safa, luxury turban, wedding turban india",
  openGraph: {{
    title: "{name} | {tagline}",
    description: "{tagline}. India's #1 wedding turban service.",
    url: "https://{domain}",
    type: "website",
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                🏆 India's #1 Rated
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {name}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {tagline}. Experience the finest wedding turbans crafted by India's master artisans. 
                Premium safa, pagdi, feta & sehra with 40+ years of expertise. 
                Trusted by 10,000+ families across India.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">40+</p>
                  <p className="text-xs text-white/80">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">10K+</p>
                  <p className="text-xs text-white/80">Families</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-xs text-white/80">Cities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">5⭐</p>
                  <p className="text-xs text-white/80">Rated</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{name}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def get_generic_home_page(domain):
    """Fallback for domains not in the mapping"""
    name = domain.replace(".com", "").replace(".in", "").replace(".shop", "").replace(".online", "")
    name = name.replace("-", " ").title()
    
    return f'''import type {{ Metadata }} from "next"
import {{ AboutSection }} from "@/components/about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ Footer }} from "@/components/footer"
import {{ Navigation }} from "@/components/navigation"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{name} | Premium Wedding Safa Pagdi Turban Service",
  description: "{name} - Premium wedding safa, pagdi, feta & turban service. Expert turban tying for grooms & families. 40+ years legacy. Book now!",
  keywords: "wedding safa, wedding pagdi, wedding turban, groom turban, turban service",
  openGraph: {{
    title: "{name} | Premium Wedding Turbans",
    description: "Premium wedding turban service.",
    url: "https://{domain}",
    type: "website",
  }},
}}

export default function HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Premium Turban Service</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to {name}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Your trusted partner for premium wedding turbans. 
                Expert safa, pagdi, feta & sehra service with 40+ years legacy. 
                Making every groom look royal on their special day.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Call: +91 97252 95692
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{name}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}}
'''

def main():
    existing_domains = os.listdir(base_dir)
    total_created = 0
    
    for domain in existing_domains:
        domain_path = os.path.join(base_dir, domain)
        if not os.path.isdir(domain_path):
            continue
            
        page_path = os.path.join(domain_path, "page.tsx")
        
        # Get the appropriate template
        if domain in domain_data:
            data = domain_data[domain]
            dtype = data.get("type", "generic")
            
            if dtype == "city":
                content = get_city_home_page(domain, data)
            elif dtype == "style":
                content = get_style_home_page(domain, data)
            elif dtype == "service":
                content = get_service_home_page(domain, data)
            elif dtype == "brand":
                content = get_brand_home_page(domain, data)
            elif dtype == "premium":
                content = get_premium_home_page(domain, data)
            else:
                content = get_generic_home_page(domain)
        else:
            content = get_generic_home_page(domain)
        
        # Write the file
        with open(page_path, 'w') as f:
            f.write(content)
        
        total_created += 1
        print(f"✓ Created: {domain}/page.tsx")
    
    print(f"\n{'='*50}")
    print(f"COMPLETE! Created {total_created} home pages")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()

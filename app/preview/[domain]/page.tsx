'use client'

import { useParams } from 'next/navigation'
import { Navigation } from "@/components/navigation"
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain data for preview
const domainData: Record<string, { type: string; city?: string; style?: string; service?: string; brand?: string; name?: string; state?: string; region?: string; desc?: string; tagline?: string; famous_for?: string }> = {
  // City domains
  "safawaladelhi.com": { type: "city", city: "Delhi", state: "Delhi NCR", famous_for: "Royal weddings, Punjabi celebrations" },
  "safawalapune.com": { type: "city", city: "Pune", state: "Maharashtra", famous_for: "Marathi weddings, IT hub celebrations" },
  "safawalaahmedabad.com": { type: "city", city: "Ahmedabad", state: "Gujarat", famous_for: "Navratri, Garba weddings" },
  "safawalanagpur.com": { type: "city", city: "Nagpur", state: "Maharashtra", famous_for: "Orange city weddings" },
  "safawalanashik.com": { type: "city", city: "Nashik", state: "Maharashtra", famous_for: "Wine capital weddings" },
  "safawalasurat.com": { type: "city", city: "Surat", state: "Gujarat", famous_for: "Diamond city, Gujarati weddings" },
  "safawalagwalior.com": { type: "city", city: "Gwalior", state: "Madhya Pradesh", famous_for: "Royal heritage weddings" },
  "safawalabhopal.com": { type: "city", city: "Bhopal", state: "Madhya Pradesh", famous_for: "Lake city celebrations" },
  "safawalaindore.com": { type: "city", city: "Indore", state: "Madhya Pradesh", famous_for: "Food capital weddings" },
  "safawalanoida.com": { type: "city", city: "Noida", state: "Uttar Pradesh", famous_for: "Modern weddings" },
  "safawalakanpur.com": { type: "city", city: "Kanpur", state: "Uttar Pradesh", famous_for: "Industrial city weddings" },
  "safawalaagra.com": { type: "city", city: "Agra", state: "Uttar Pradesh", famous_for: "Taj Mahal, Heritage weddings" },
  "safawalarajkot.com": { type: "city", city: "Rajkot", state: "Gujarat", famous_for: "Kathiawadi weddings" },
  "safawalavaranasi.com": { type: "city", city: "Varanasi", state: "Uttar Pradesh", famous_for: "Holy city, Traditional weddings" },
  "safawalalucknow.com": { type: "city", city: "Lucknow", state: "Uttar Pradesh", famous_for: "Nawabi culture, Elegant weddings" },
  "safawalaamritsar.com": { type: "city", city: "Amritsar", state: "Punjab", famous_for: "Punjabi weddings, Golden Temple" },
  "safawalachandigarh.com": { type: "city", city: "Chandigarh", state: "Punjab/Haryana", famous_for: "Modern city, Grand weddings" },
  "safawalagurgaon.com": { type: "city", city: "Gurgaon", state: "Haryana", famous_for: "Corporate weddings, Luxury venues" },
  "safawalamountabu.com": { type: "city", city: "Mount Abu", state: "Rajasthan", famous_for: "Hill station weddings" },
  "safawalapushkar.com": { type: "city", city: "Pushkar", state: "Rajasthan", famous_for: "Lake weddings, Spiritual celebrations" },
  "safawalajaisalmer.com": { type: "city", city: "Jaisalmer", state: "Rajasthan", famous_for: "Desert weddings, Royal celebrations" },
  "safawalaudaipur.com": { type: "city", city: "Udaipur", state: "Rajasthan", famous_for: "Lake Palace, Royal weddings" },
  "safawalajodhpur.com": { type: "city", city: "Jodhpur", state: "Rajasthan", famous_for: "Blue city, Mehrangarh weddings" },
  "safawalabikaner.com": { type: "city", city: "Bikaner", state: "Rajasthan", famous_for: "Desert heritage weddings" },
  "safawalabaroda.com": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "safawalabaroda.in": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "safawalavadodara.com": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "safawavadodara.com": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "barodasafawala.com": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "barodasafawala.in": { type: "city", city: "Vadodara", state: "Gujarat", famous_for: "Cultural capital, Palace weddings" },
  "safawalapatiala.com": { type: "city", city: "Patiala", state: "Punjab", famous_for: "Royal Punjabi weddings" },
  "safawalaludhiana.com": { type: "city", city: "Ludhiana", state: "Punjab", famous_for: "Industrial hub weddings" },
  "safawalamussoorie.com": { type: "city", city: "Mussoorie", state: "Uttarakhand", famous_for: "Queen of hills weddings" },
  "safawalajimcorbett.com": { type: "city", city: "Jim Corbett", state: "Uttarakhand", famous_for: "Jungle resort weddings" },
  "safawalakochi.com": { type: "city", city: "Kochi", state: "Kerala", famous_for: "Backwater weddings" },
  "safawalakerala.com": { type: "city", city: "Kerala", state: "Kerala", famous_for: "God's own country weddings" },
  "safawalakshadweep.com": { type: "city", city: "Lakshadweep", state: "Lakshadweep", famous_for: "Island weddings" },
  "safawalashimla.com": { type: "city", city: "Shimla", state: "Himachal Pradesh", famous_for: "Hill station weddings" },
  "safawaladubai.com": { type: "city", city: "Dubai", state: "UAE", famous_for: "Luxury destination weddings" },
  "safawalagoa.com": { type: "city", city: "Goa", state: "Goa", famous_for: "Beach weddings, Destination celebrations" },
  "safawalanearme.com": { type: "city", city: "Your City", state: "India", famous_for: "Local weddings & celebrations" },
  
  // Style domains
  "rajputisafa.com": { type: "style", style: "Rajputi Safa", region: "Rajasthan", desc: "Royal Rajput turban tradition" },
  "rajputisafa.in": { type: "style", style: "Rajputi Safa", region: "Rajasthan", desc: "Royal Rajput turban tradition" },
  "bandhejsafa.com": { type: "style", style: "Bandhej Safa", region: "Gujarat/Rajasthan", desc: "Tie-dye pattern turban" },
  "leheriyasafa.com": { type: "style", style: "Leheriya Safa", region: "Rajasthan", desc: "Wave pattern turban" },
  "punjabipagdi.com": { type: "style", style: "Punjabi Pagdi", region: "Punjab", desc: "Punjabi turban style" },
  "punjabipagdi.in": { type: "style", style: "Punjabi Pagdi", region: "Punjab", desc: "Punjabi turban style" },
  "rajasthanipagdi.com": { type: "style", style: "Rajasthani Pagdi", region: "Rajasthan", desc: "Traditional Rajasthani turban" },
  "rajasthanipagdi.in": { type: "style", style: "Rajasthani Pagdi", region: "Rajasthan", desc: "Traditional Rajasthani turban" },
  "rajwadisafa.com": { type: "style", style: "Rajwadi Safa", region: "Rajasthan", desc: "Royal palace style turban" },
  "pachrangisafa.com": { type: "style", style: "Pachrangi Safa", region: "Rajasthan", desc: "Five-color turban" },
  "pachrangisafa.in": { type: "style", style: "Pachrangi Safa", region: "Rajasthan", desc: "Five-color turban" },
  "safajodhpuri.com": { type: "style", style: "Jodhpuri Safa", region: "Jodhpur", desc: "Jodhpur style turban" },
  "safajodhpuri.in": { type: "style", style: "Jodhpuri Safa", region: "Jodhpur", desc: "Jodhpur style turban" },
  "pagdirajasthani.com": { type: "style", style: "Rajasthani Pagdi", region: "Rajasthan", desc: "Traditional Rajasthani turban" },
  
  // Service domains
  "safaforgroom.com": { type: "service", service: "Safa for Groom", desc: "Premium groom turban service" },
  "safaforgroom.in": { type: "service", service: "Safa for Groom", desc: "Premium groom turban service" },
  "safagroom.com": { type: "service", service: "Safa Groom", desc: "Wedding safa for grooms" },
  "safagroom.in": { type: "service", service: "Safa Groom", desc: "Wedding safa for grooms" },
  "pagdiforgroom.com": { type: "service", service: "Pagdi for Groom", desc: "Traditional pagdi service" },
  "pagdiforgroom.in": { type: "service", service: "Pagdi for Groom", desc: "Traditional pagdi service" },
  "pagdiforwedding.com": { type: "service", service: "Pagdi for Wedding", desc: "Wedding pagdi specialist" },
  "groompagri.com": { type: "service", service: "Groom Pagri", desc: "Groom's pagri service" },
  "groompagri.in": { type: "service", service: "Groom Pagri", desc: "Groom's pagri service" },
  "fetaforwedding.com": { type: "service", service: "Feta for Wedding", desc: "Wedding feta specialist" },
  "safapagdi.com": { type: "service", service: "Safa Pagdi", desc: "Safa & Pagdi service" },
  "safapagdi.in": { type: "service", service: "Safa Pagdi", desc: "Safa & Pagdi service" },
  "safadesign.in": { type: "service", service: "Safa Design", desc: "Custom safa designs" },
  "weddingsafa.shop": { type: "service", service: "Wedding Safa", desc: "Wedding safa shop" },
  "weddingturban.in": { type: "service", service: "Wedding Turban", desc: "Wedding turban service" },
  "pagdi.online": { type: "service", service: "Pagdi Online", desc: "Online pagdi booking" },
  "pagri.shop": { type: "service", service: "Pagri Shop", desc: "Pagri online shop" },
  "paghdi.in": { type: "service", service: "Paghdi", desc: "Traditional paghdi service" },
  "saafa.online": { type: "service", service: "Saafa Online", desc: "Online saafa booking" },
  "saffa.in": { type: "service", service: "Saffa", desc: "Premium saffa service" },
  
  // Brand domains
  "sharmajisafawala.com": { type: "brand", brand: "Sharmaji Safawala", tagline: "Traditional turban experts" },
  "sharmajisafawala.in": { type: "brand", brand: "Sharmaji Safawala", tagline: "Traditional turban experts" },
  "sharmajisafawale.com": { type: "brand", brand: "Sharmaji Safawale", tagline: "Family of turban masters" },
  "sharmajisafawale.in": { type: "brand", brand: "Sharmaji Safawale", tagline: "Family of turban masters" },
  "mysafawale.com": { type: "brand", brand: "My Safawale", tagline: "Your personal turban service" },
  "bollywoodsafawala.com": { type: "brand", brand: "Bollywood Safawala", tagline: "Celebrity turban styling" },
  "srgrooms.com": { type: "brand", brand: "SR Grooms", tagline: "Complete groom styling" },
  "srgroomscreations.in": { type: "brand", brand: "SR Grooms Creations", tagline: "Creative groom solutions" },
  "wowgrooms.in": { type: "brand", brand: "WOW Grooms", tagline: "Making grooms look WOW" },
  
  // Premium domains
  "bestsafapagdifetaturban.com": { type: "premium", name: "Best Safa Pagdi Feta Turban", tagline: "The best in wedding turbans" },
  "bestsafapagdifetaturban.in": { type: "premium", name: "Best Safa Pagdi Feta Turban", tagline: "The best in wedding turbans" },
  "topsafapagdifetaturban.com": { type: "premium", name: "Top Safa Pagdi Feta Turban", tagline: "Top-rated turban service" },
  "topsafapagdifetaturban.in": { type: "premium", name: "Top Safa Pagdi Feta Turban", tagline: "Top-rated turban service" },
}

// Helper to get location info from domain
function getLocationInfo(domain: string): { location: string; state?: string; tagline?: string; famousFor?: string; type: string } {
  const data = domainData[domain]
  if (data) {
    if (data.type === "city") {
      return { location: data.city!, state: data.state, famousFor: data.famous_for, type: "city" }
    }
    if (data.type === "style") {
      return { location: data.style!, state: data.region, tagline: data.desc, type: "style" }
    }
    if (data.type === "service") {
      return { location: data.service!, tagline: data.desc, type: "service" }
    }
    if (data.type === "brand") {
      return { location: data.brand!, tagline: data.tagline, type: "brand" }
    }
    if (data.type === "premium") {
      return { location: data.name!, tagline: data.tagline, type: "premium" }
    }
  }
  // Fallback: extract from domain name
  const extractedName = domain
    .replace('safawala', '')
    .replace('.com', '')
    .replace('.in', '')
    .replace('.shop', '')
    .replace('.online', '')
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim() || 'India'
  return { location: extractedName, type: "city" }
}

export default function DomainPreview() {
  const params = useParams()
  const domain = params.domain as string
  const locationInfo = getLocationInfo(domain)
  
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Dynamic Hero Slider with Form */}
      <DynamicHeroSlider 
        location={locationInfo.location}
        state={locationInfo.state}
        tagline={locationInfo.tagline}
        famousFor={locationInfo.famousFor}
      />
      
      {/* Preview Mode Banner */}
      <div className="bg-yellow-500 text-black py-2 px-4 text-center font-mono text-sm">
        🔍 Preview Mode: {domain} | Location: {locationInfo.location} | Type: {locationInfo.type}
      </div>
      
      {/* Dynamic About Section */}
      <DynamicAboutSection 
        location={locationInfo.location}
        state={locationInfo.state}
        tagline={locationInfo.tagline}
      />
      
      {/* Gallery */}
      <GallerySection />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* Dynamic Footer */}
      <DynamicFooter 
        location={locationInfo.location}
        state={locationInfo.state}
        domain={domain}
        type={locationInfo.type}
      />
      
      <WhatsAppFloat />
    </main>
  )
}

#!/usr/bin/env python3
"""
Generate 100% domain-specific pages for all domains.
Each page is fully focused on its specific domain - no Mumbai, no other cities.
"""

import os

# ============================================
# DOMAIN DATA - ALL 88 DOMAINS
# ============================================

CITY_DOMAINS = {
    "safawaladelhi.com": {"city": "Delhi", "state": "Delhi NCR", "famous": "Royal weddings, Punjabi celebrations", "areas": ["Connaught Place", "Chandni Chowk", "South Delhi", "Dwarka", "Rohini", "Karol Bagh", "Lajpat Nagar", "Saket"]},
    "safawalapune.com": {"city": "Pune", "state": "Maharashtra", "famous": "Marathi weddings, IT hub celebrations", "areas": ["Koregaon Park", "Hadapsar", "Kothrud", "Baner", "Hinjewadi", "Aundh", "Wakad", "Viman Nagar"]},
    "safawalaahmedabad.com": {"city": "Ahmedabad", "state": "Gujarat", "famous": "Navratri, Garba weddings", "areas": ["Navrangpura", "Satellite", "Bodakdev", "Vastrapur", "Maninagar", "C.G. Road", "Prahlad Nagar", "Thaltej"]},
    "safawalanagpur.com": {"city": "Nagpur", "state": "Maharashtra", "famous": "Orange city weddings", "areas": ["Dharampeth", "Sadar", "Civil Lines", "Sitabuldi", "Ramdaspeth", "Dhantoli", "Pratap Nagar", "Manewada"]},
    "safawalanashik.com": {"city": "Nashik", "state": "Maharashtra", "famous": "Wine capital weddings", "areas": ["College Road", "Gangapur Road", "Panchavati", "Cidco", "Satpur", "Indira Nagar", "Deolali", "Pathardi Phata"]},
    "safawalasurat.com": {"city": "Surat", "state": "Gujarat", "famous": "Diamond city, Gujarati weddings", "areas": ["Athwa", "Adajan", "Vesu", "City Light", "Piplod", "Ghod Dod Road", "Ring Road", "Varachha"]},
    "safawalagwalior.com": {"city": "Gwalior", "state": "Madhya Pradesh", "famous": "Royal heritage weddings", "areas": ["City Centre", "Lashkar", "Morar", "Thatipur", "Hazira", "Gwalior Fort Area", "Jayendraganj", "Maharajpur"]},
    "safawalabhopal.com": {"city": "Bhopal", "state": "Madhya Pradesh", "famous": "Lake city celebrations", "areas": ["MP Nagar", "Arera Colony", "New Market", "Habibganj", "Kolar Road", "Shahpura", "Ashoka Garden", "Govindpura"]},
    "safawalaindore.com": {"city": "Indore", "state": "Madhya Pradesh", "famous": "Food capital weddings", "areas": ["Vijay Nagar", "Palasia", "Sapna Sangeeta", "Scheme 78", "Bhawarkuan", "Rau", "LIG Square", "Geeta Bhawan"]},
    "safawalanoida.com": {"city": "Noida", "state": "Uttar Pradesh", "famous": "Modern corporate weddings", "areas": ["Sector 18", "Sector 62", "Sector 137", "Sector 50", "Greater Noida", "Noida Extension", "Sector 44", "Sector 93"]},
    "safawalakanpur.com": {"city": "Kanpur", "state": "Uttar Pradesh", "famous": "Industrial city weddings", "areas": ["Civil Lines", "Mall Road", "Kidwai Nagar", "Swaroop Nagar", "Kakadeo", "Govind Nagar", "Harsh Nagar", "Arya Nagar"]},
    "safawalaagra.com": {"city": "Agra", "state": "Uttar Pradesh", "famous": "Taj Mahal, Heritage weddings", "areas": ["Tajganj", "Sadar Bazaar", "Civil Lines", "Kamla Nagar", "Raja Mandi", "Sikandra", "Dayal Bagh", "Shahganj"]},
    "safawalarajkot.com": {"city": "Rajkot", "state": "Gujarat", "famous": "Kathiawadi weddings", "areas": ["Yagnik Road", "Kalawad Road", "150 Feet Ring Road", "University Road", "Raiya Road", "Mavdi", "Kotecha Chowk", "Amin Marg"]},
    "safawalavaranasi.com": {"city": "Varanasi", "state": "Uttar Pradesh", "famous": "Holy city, Traditional weddings", "areas": ["Assi Ghat", "Dashashwamedh", "Godowlia", "Lanka", "Bhelupur", "Sigra", "Cantonment", "Ramnagar"]},
    "safawalalucknow.com": {"city": "Lucknow", "state": "Uttar Pradesh", "famous": "Nawabi culture, Elegant weddings", "areas": ["Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar", "Alambagh", "Aminabad", "Rajajipuram", "Mahanagar"]},
    "safawalaamritsar.com": {"city": "Amritsar", "state": "Punjab", "famous": "Punjabi weddings, Golden Temple", "areas": ["Hall Bazaar", "Lawrence Road", "Ranjit Avenue", "Model Town", "Green Avenue", "Majitha Road", "GT Road", "Mall Road"]},
    "safawalachandigarh.com": {"city": "Chandigarh", "state": "Punjab/Haryana", "famous": "Modern city, Grand weddings", "areas": ["Sector 17", "Sector 22", "Sector 35", "Industrial Area Phase 1", "Manimajra", "Mohali", "Panchkula", "Zirakpur"]},
    "safawalagurgaon.com": {"city": "Gurgaon", "state": "Haryana", "famous": "Corporate weddings, Luxury venues", "areas": ["DLF Phase 1", "Cyber City", "Golf Course Road", "MG Road", "Sohna Road", "Sector 29", "Sector 56", "Udyog Vihar"]},
    "safawalamountabu.com": {"city": "Mount Abu", "state": "Rajasthan", "famous": "Hill station destination weddings", "areas": ["Nakki Lake", "Dilwara Road", "Abu Road", "Main Market", "Sunset Point Road", "Achalgarh", "Guru Shikhar", "Trevor's Tank"]},
    "safawalapushkar.com": {"city": "Pushkar", "state": "Rajasthan", "famous": "Lake weddings, Spiritual celebrations", "areas": ["Pushkar Lake", "Brahma Temple Road", "Main Bazaar", "Ajmer Road", "Mela Ground", "Varaha Ghat", "Savitri Temple", "Old Rangji Temple"]},
    "safawalajaisalmer.com": {"city": "Jaisalmer", "state": "Rajasthan", "famous": "Desert weddings, Golden Fort celebrations", "areas": ["Fort Area", "Sam Sand Dunes", "Gandhi Chowk", "Gadisar Lake", "Jethwai Road", "Near Patwon Ki Haveli", "Kuldhara Road", "Khuri"]},
    "safawalaudaipur.com": {"city": "Udaipur", "state": "Rajasthan", "famous": "Lake Palace, Royal weddings", "areas": ["City Palace Area", "Lake Pichola", "Fateh Sagar", "Hiran Magri", "Pratap Nagar", "Sukhadia Circle", "Saheli Marg", "Ambamata"]},
    "safawalajodhpur.com": {"city": "Jodhpur", "state": "Rajasthan", "famous": "Blue city, Mehrangarh weddings", "areas": ["Clock Tower", "Ratanada", "Sardarpura", "Paota", "Shastri Nagar", "Pal Road", "Residency Road", "Mandore"]},
    "safawalabikaner.com": {"city": "Bikaner", "state": "Rajasthan", "famous": "Desert heritage weddings", "areas": ["Kote Gate", "Station Road", "Rani Bazaar", "Ganga Shahar", "Lalgarh", "Karni Nagar", "Jassusar Gate", "Pawan Puri"]},
    "safawalabaroda.com": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "safawalabaroda.in": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "safawalavadodara.com": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "safawavadodara.com": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "barodasafawala.com": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "barodasafawala.in": {"city": "Vadodara", "state": "Gujarat", "famous": "Cultural capital, Palace weddings", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota"]},
    "safawalapatiala.com": {"city": "Patiala", "state": "Punjab", "famous": "Royal Punjabi weddings", "areas": ["The Mall", "Model Town", "Leela Bhawan", "Sirhind Road", "Sangrur Road", "Urban Estate", "Rajpura Road", "Sheranwala Gate"]},
    "safawalaludhiana.com": {"city": "Ludhiana", "state": "Punjab", "famous": "Industrial hub weddings", "areas": ["Model Town", "BRS Nagar", "Sarabha Nagar", "Ferozepur Road", "Pakhowal Road", "Civil Lines", "Dugri", "Jamalpur"]},
    "safawalamussoorie.com": {"city": "Mussoorie", "state": "Uttarakhand", "famous": "Queen of hills destination weddings", "areas": ["Mall Road", "Library Chowk", "Picture Palace", "Landour", "Company Bagh", "Kempty Falls Road", "Cloud's End", "Lal Tibba"]},
    "safawalajimcorbett.com": {"city": "Jim Corbett", "state": "Uttarakhand", "famous": "Jungle resort destination weddings", "areas": ["Dhikala Zone", "Bijrani Zone", "Jhirna Zone", "Durga Devi Zone", "Sitabani Zone", "Ramnagar", "Garjiya Temple", "Kosi River"]},
    "safawalakochi.com": {"city": "Kochi", "state": "Kerala", "famous": "Backwater weddings", "areas": ["Fort Kochi", "Marine Drive", "MG Road", "Edappally", "Kakkanad", "Panampilly Nagar", "Thripunithura", "Ernakulam"]},
    "safawalakerala.com": {"city": "Kerala", "state": "Kerala", "famous": "God's own country weddings", "areas": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kumarakom", "Alleppey", "Munnar", "Kovalam"]},
    "safawalakshadweep.com": {"city": "Lakshadweep", "state": "Lakshadweep", "famous": "Island destination weddings", "areas": ["Kavaratti", "Agatti", "Bangaram", "Kadmat", "Kalpeni", "Minicoy", "Andrott", "Amini"]},
    "safawalashimla.com": {"city": "Shimla", "state": "Himachal Pradesh", "famous": "Hill station destination weddings", "areas": ["Mall Road", "The Ridge", "Lakkar Bazaar", "Kufri", "Mashobra", "Sanjauli", "Chhota Shimla", "Summer Hill"]},
    "safawaladubai.com": {"city": "Dubai", "state": "UAE", "famous": "Luxury international weddings", "areas": ["Downtown Dubai", "Dubai Marina", "Palm Jumeirah", "Jumeirah Beach", "Deira", "Business Bay", "JBR", "DIFC"]},
    "safawalagoa.com": {"city": "Goa", "state": "Goa", "famous": "Beach destination weddings", "areas": ["Calangute", "Baga", "Candolim", "Anjuna", "Panjim", "Margao", "Old Goa", "Dona Paula"]},
    "safawalanearme.com": {"city": "Your City", "state": "Pan India", "famous": "Local weddings & celebrations", "areas": ["Your Area", "Nearby Locations", "City Center", "Suburbs", "Wedding Venues", "Banquet Halls", "Hotels", "Resorts"]},
}

STYLE_DOMAINS = {
    "rajputisafa.com": {"style": "Rajputi Safa", "region": "Rajasthan", "desc": "Royal Rajput turban tradition", "colors": ["Kesari (Saffron)", "Red", "Yellow", "Pink", "Maroon"], "occasions": ["Royal Weddings", "Rajput Ceremonies", "Traditional Events", "Cultural Functions"]},
    "rajputisafa.in": {"style": "Rajputi Safa", "region": "Rajasthan", "desc": "Royal Rajput turban tradition", "colors": ["Kesari (Saffron)", "Red", "Yellow", "Pink", "Maroon"], "occasions": ["Royal Weddings", "Rajput Ceremonies", "Traditional Events", "Cultural Functions"]},
    "bandhejsafa.com": {"style": "Bandhej Safa", "region": "Gujarat/Rajasthan", "desc": "Tie-dye pattern turban", "colors": ["Red & Yellow", "Green & Gold", "Blue & White", "Multi-color"], "occasions": ["Gujarati Weddings", "Rajasthani Celebrations", "Festive Events", "Navratri"]},
    "leheriyasafa.com": {"style": "Leheriya Safa", "region": "Rajasthan", "desc": "Wave pattern turban", "colors": ["Yellow & Pink", "Blue & Green", "Orange & Red", "Rainbow"], "occasions": ["Rajasthani Weddings", "Summer Celebrations", "Teej Festival", "Traditional Events"]},
    "punjabipagdi.com": {"style": "Punjabi Pagdi", "region": "Punjab", "desc": "Punjabi turban style", "colors": ["Royal Blue", "Red", "Pink", "Yellow", "Black"], "occasions": ["Punjabi Weddings", "Sikh Ceremonies", "Bhangra Events", "Festival Celebrations"]},
    "punjabipagdi.in": {"style": "Punjabi Pagdi", "region": "Punjab", "desc": "Punjabi turban style", "colors": ["Royal Blue", "Red", "Pink", "Yellow", "Black"], "occasions": ["Punjabi Weddings", "Sikh Ceremonies", "Bhangra Events", "Festival Celebrations"]},
    "rajasthanipagdi.com": {"style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Traditional Rajasthani turban", "colors": ["Saffron", "Red", "Pink", "Yellow", "Green"], "occasions": ["Rajasthani Weddings", "Royal Events", "Desert Festivals", "Cultural Programs"]},
    "rajasthanipagdi.in": {"style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Traditional Rajasthani turban", "colors": ["Saffron", "Red", "Pink", "Yellow", "Green"], "occasions": ["Rajasthani Weddings", "Royal Events", "Desert Festivals", "Cultural Programs"]},
    "rajwadisafa.com": {"style": "Rajwadi Safa", "region": "Rajasthan", "desc": "Royal palace style turban", "colors": ["Gold", "Maroon", "Royal Blue", "Purple", "Emerald"], "occasions": ["Palace Weddings", "Royal Ceremonies", "Heritage Events", "Grand Celebrations"]},
    "pachrangisafa.com": {"style": "Pachrangi Safa", "region": "Rajasthan", "desc": "Five-color traditional turban", "colors": ["Red", "Yellow", "Green", "Blue", "Orange"], "occasions": ["Traditional Weddings", "Festive Celebrations", "Cultural Events", "Holi Festival"]},
    "pachrangisafa.in": {"style": "Pachrangi Safa", "region": "Rajasthan", "desc": "Five-color traditional turban", "colors": ["Red", "Yellow", "Green", "Blue", "Orange"], "occasions": ["Traditional Weddings", "Festive Celebrations", "Cultural Events", "Holi Festival"]},
    "safajodhpuri.com": {"style": "Jodhpuri Safa", "region": "Jodhpur", "desc": "Blue city turban style", "colors": ["Royal Blue", "Indigo", "Sky Blue", "Navy", "Turquoise"], "occasions": ["Jodhpur Weddings", "Mehrangarh Events", "Blue City Celebrations", "Royal Functions"]},
    "safajodhpuri.in": {"style": "Jodhpuri Safa", "region": "Jodhpur", "desc": "Blue city turban style", "colors": ["Royal Blue", "Indigo", "Sky Blue", "Navy", "Turquoise"], "occasions": ["Jodhpur Weddings", "Mehrangarh Events", "Blue City Celebrations", "Royal Functions"]},
    "pagdirajasthani.com": {"style": "Rajasthani Pagdi", "region": "Rajasthan", "desc": "Classic Rajasthani turban", "colors": ["Traditional Red", "Saffron", "Pink", "Yellow", "Multi-color"], "occasions": ["Weddings", "Festivals", "Religious Events", "Cultural Celebrations"]},
}

SERVICE_DOMAINS = {
    "safaforgroom.com": {"service": "Safa for Groom", "desc": "Premium groom turban service", "focus": "groom", "specialties": ["Royal Entrance Safa", "Designer Groom Collection", "Sehra Included", "Kalgi & Brooch Set"]},
    "safaforgroom.in": {"service": "Safa for Groom", "desc": "Premium groom turban service", "focus": "groom", "specialties": ["Royal Entrance Safa", "Designer Groom Collection", "Sehra Included", "Kalgi & Brooch Set"]},
    "safagroom.com": {"service": "Safa Groom", "desc": "Wedding safa for grooms", "focus": "groom", "specialties": ["Groom Turban Tying", "On-site Service", "Matching Accessories", "Photography Ready"]},
    "safagroom.in": {"service": "Safa Groom", "desc": "Wedding safa for grooms", "focus": "groom", "specialties": ["Groom Turban Tying", "On-site Service", "Matching Accessories", "Photography Ready"]},
    "pagdiforgroom.com": {"service": "Pagdi for Groom", "desc": "Traditional pagdi service", "focus": "groom", "specialties": ["Traditional Pagdi Styles", "Modern Fusion", "Expert Tying", "All Occasions"]},
    "pagdiforgroom.in": {"service": "Pagdi for Groom", "desc": "Traditional pagdi service", "focus": "groom", "specialties": ["Traditional Pagdi Styles", "Modern Fusion", "Expert Tying", "All Occasions"]},
    "pagdiforwedding.com": {"service": "Pagdi for Wedding", "desc": "Wedding pagdi specialist", "focus": "wedding", "specialties": ["Complete Wedding Package", "Groom & Barati", "Family Sets", "Destination Service"]},
    "groompagri.com": {"service": "Groom Pagri", "desc": "Groom's pagri service", "focus": "groom", "specialties": ["Pagri Tying Expert", "Style Consultation", "Matching Outfits", "All Fabrics"]},
    "groompagri.in": {"service": "Groom Pagri", "desc": "Groom's pagri service", "focus": "groom", "specialties": ["Pagri Tying Expert", "Style Consultation", "Matching Outfits", "All Fabrics"]},
    "fetaforwedding.com": {"service": "Feta for Wedding", "desc": "Wedding feta specialist", "focus": "wedding", "specialties": ["Marathi Feta", "Maharashtrian Style", "Wedding Pheta", "Traditional & Modern"]},
    "safapagdi.com": {"service": "Safa Pagdi", "desc": "Safa & Pagdi service", "focus": "both", "specialties": ["Safa Collection", "Pagdi Variety", "Mixed Styles", "Custom Orders"]},
    "safapagdi.in": {"service": "Safa Pagdi", "desc": "Safa & Pagdi service", "focus": "both", "specialties": ["Safa Collection", "Pagdi Variety", "Mixed Styles", "Custom Orders"]},
    "safadesign.in": {"service": "Safa Design", "desc": "Custom safa designs", "focus": "design", "specialties": ["Custom Designs", "Unique Patterns", "Color Matching", "Exclusive Collection"]},
    "weddingsafa.shop": {"service": "Wedding Safa", "desc": "Wedding safa shop", "focus": "shopping", "specialties": ["Buy Online", "Rent Available", "All Styles", "Pan India Delivery"]},
    "weddingturban.in": {"service": "Wedding Turban", "desc": "Wedding turban service", "focus": "wedding", "specialties": ["All Turban Styles", "Complete Wedding Solution", "Expert Service", "Premium Quality"]},
    "pagdi.online": {"service": "Pagdi Online", "desc": "Online pagdi booking", "focus": "online", "specialties": ["Easy Online Booking", "Virtual Consultation", "Home Delivery", "24/7 Support"]},
    "pagri.shop": {"service": "Pagri Shop", "desc": "Pagri online shop", "focus": "shopping", "specialties": ["Buy Pagri", "Rent Pagri", "Accessories", "Gift Cards"]},
    "paghdi.in": {"service": "Paghdi", "desc": "Traditional paghdi service", "focus": "traditional", "specialties": ["Traditional Paghdi", "Regional Styles", "Expert Artisans", "Cultural Events"]},
    "saafa.online": {"service": "Saafa Online", "desc": "Online saafa booking", "focus": "online", "specialties": ["Online Booking", "Quick Response", "Pan India", "Best Prices"]},
    "saffa.in": {"service": "Saffa", "desc": "Premium saffa service", "focus": "premium", "specialties": ["Premium Quality", "Luxury Collection", "VIP Service", "Celebrity Choice"]},
}

BRAND_DOMAINS = {
    "sharmajisafawala.com": {"brand": "Sharmaji Safawala", "tagline": "Traditional turban experts since generations", "story": "4th generation turban specialists trusted by thousands of families"},
    "sharmajisafawala.in": {"brand": "Sharmaji Safawala", "tagline": "Traditional turban experts since generations", "story": "4th generation turban specialists trusted by thousands of families"},
    "sharmajisafawale.com": {"brand": "Sharmaji Safawale", "tagline": "Family of turban masters", "story": "Multiple expert artisans from Sharma family serving your turban needs"},
    "sharmajisafawale.in": {"brand": "Sharmaji Safawale", "tagline": "Family of turban masters", "story": "Multiple expert artisans from Sharma family serving your turban needs"},
    "mysafawale.com": {"brand": "My Safawale", "tagline": "Your personal turban service", "story": "Personalized turban service tailored to your unique style and preferences"},
    "bollywoodsafawala.com": {"brand": "Bollywood Safawala", "tagline": "Celebrity turban styling", "story": "Trusted by Bollywood celebrities and film productions for authentic turban looks"},
    "srgrooms.com": {"brand": "SR Grooms", "tagline": "Complete groom styling solutions", "story": "End-to-end groom preparation including safa, sherwani coordination, and styling"},
    "srgroomscreations.in": {"brand": "SR Grooms Creations", "tagline": "Creative groom solutions", "story": "Innovative and creative turban designs for the modern groom"},
    "wowgrooms.in": {"brand": "WOW Grooms", "tagline": "Making grooms look WOW", "story": "Transforming grooms into royal personalities with stunning turban styling"},
}

PREMIUM_DOMAINS = {
    "bestsafapagdifetaturban.com": {"name": "Best Safa Pagdi Feta Turban", "tagline": "The best in wedding turbans", "features": ["#1 Rated Service", "Premium Quality", "Expert Artisans", "Pan India Coverage"]},
    "bestsafapagdifetaturban.in": {"name": "Best Safa Pagdi Feta Turban", "tagline": "The best in wedding turbans", "features": ["#1 Rated Service", "Premium Quality", "Expert Artisans", "Pan India Coverage"]},
    "topsafapagdifetaturban.com": {"name": "Top Safa Pagdi Feta Turban", "tagline": "Top-rated turban service in India", "features": ["Top 10 Service", "5-Star Reviews", "Trusted Brand", "Quality Guaranteed"]},
    "topsafapagdifetaturban.in": {"name": "Top Safa Pagdi Feta Turban", "tagline": "Top-rated turban service in India", "features": ["Top 10 Service", "5-Star Reviews", "Trusted Brand", "Quality Guaranteed"]},
}


def generate_city_page(domain, data):
    """Generate a 100% city-focused page."""
    city = data["city"]
    state = data["state"]
    famous = data["famous"]
    areas = data["areas"]
    areas_str = ", ".join(areas[:4])
    
    return f'''import type {{ Metadata }} from "next"
import {{ Navigation }} from "@/components/navigation"
import {{ DynamicHeroSlider }} from "@/components/dynamic-hero-slider"
import {{ DynamicAboutSection }} from "@/components/dynamic-about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ DynamicFooter }} from "@/components/dynamic-footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "Safawala {city} | Wedding Safa Pagdi Turban Service in {city} | Best Turban Tying",
  description: "Safawala {city} - Premier wedding safa, pagdi, feta & turban service in {city}, {state}. Expert turban tying for grooms & barati. 40+ years legacy. Perfect for {famous}!",
  keywords: "safawala {city.lower()}, safa in {city.lower()}, pagdi in {city.lower()}, turban service {city.lower()}, wedding turban {city.lower()}, groom safa {city.lower()}, barati turban {city.lower()}, safa on rent {city.lower()}",
  openGraph: {{
    title: "Safawala {city} | Wedding Safa Pagdi Turban Service",
    description: "Premier wedding turban service in {city}. Expert safa, pagdi & feta tying for grooms and families.",
    url: "https://{domain}",
    type: "website",
    images: ["/og-image.jpg"],
  }},
}}

const {city.upper().replace(" ", "_")}_SERVICES = [
  {{ title: "Groom Safa {city}", desc: "Premium safa designs for the groom's royal entrance in {city}", icon: "👑" }},
  {{ title: "Barati Turban {city}", desc: "Matching turbans for barati and family in {city}", icon: "👥" }},
  {{ title: "{city} Destination Wedding", desc: "Complete turban service for destination weddings across {state}", icon: "✈️" }},
  {{ title: "Designer Collection", desc: "Exclusive Rajasthani, Jodhpuri & modern designs for {city} weddings", icon: "🎨" }},
]

const {city.upper().replace(" ", "_")}_AREAS = {areas}

const {city.upper().replace(" ", "_")}_FAQ = [
  {{ 
    q: "What is the cost of safa service in {city}?",
    a: "Safa service in {city} starts from ₹500 per person for barati and ₹2500+ for groom's premium safa. Contact us for exact pricing based on your requirements."
  }},
  {{ 
    q: "Do you provide turban service across all areas of {city}?",
    a: "Yes, we provide turban tying service across all areas of {city} including {areas_str} and more. We also cover nearby cities in {state}."
  }},
  {{ 
    q: "Can you travel for destination weddings from {city}?",
    a: "Absolutely! We regularly travel from {city} to destination wedding locations across India. Additional travel charges apply based on location."
  }},
  {{ 
    q: "How many types of safa styles are available in {city}?",
    a: "We offer 50+ safa styles in {city} including Rajasthani, Jodhpuri, Rajwadi, Bandhej, Leheriya, Pachrangi, and modern designer styles."
  }},
]

export default function {city.replace(" ", "")}HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Dynamic Hero with Form */}}
      <DynamicHeroSlider 
        location="{city}"
        state="{state}"
        famousFor="{famous}"
      />
      
      {{/* Services Section */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Services in {city}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Turban Services in {city}
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional safa to modern designer turbans, we offer complete turban solutions for weddings in {city} and across {state}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{{city.upper().replace(" ", "_")}_SERVICES.map((service, i) => (
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
      <DynamicAboutSection location="{city}" state="{state}" />
      
      {{/* Service Areas */}}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We Service All Areas of {city}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {{{city.upper().replace(" ", "_")}_AREAS.map((area, i) => (
              <div key={{i}} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                {{area}}
              </div>
            ))}}
          </div>
          <p className="text-center mt-8 text-accent">
            ✓ Same-Day Service | ✓ On-Site Tying | ✓ All {city} Areas Covered
          </p>
        </div>
      </section>

      {{/* Gallery */}}
      <GallerySection />
      
      {{/* FAQ Section */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions - {city}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {{{city.upper().replace(" ", "_")}_FAQ.map((faq, i) => (
              <div key={{i}} className="bg-background p-6 rounded-xl border">
                <h3 className="text-lg font-bold mb-2">{{faq.q}}</h3>
                <p className="text-muted-foreground">{{faq.a}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>
      
      {{/* Contact */}}
      <ContactForm />
      
      {{/* Footer */}}
      <DynamicFooter 
        location="{city}"
        state="{state}"
        domain="{domain}"
        type="city"
      />
      
      <WhatsAppFloat />
    </main>
  )
}}
'''


def generate_style_page(domain, data):
    """Generate a 100% style-focused page."""
    style = data["style"]
    region = data["region"]
    desc = data["desc"]
    colors = data["colors"]
    occasions = data["occasions"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ Navigation }} from "@/components/navigation"
import {{ DynamicAboutSection }} from "@/components/dynamic-about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ DynamicFooter }} from "@/components/dynamic-footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{style} | Premium {style} for Weddings | Buy & Rent Online",
  description: "{style} - {desc}. Premium {style.lower()} collection for grooms & weddings. Authentic {region} style turbans. 40+ years expertise. Order online or book service!",
  keywords: "{style.lower()}, {style.lower()} for wedding, {style.lower()} for groom, buy {style.lower()}, {style.lower()} on rent, {region.lower()} turban, {style.lower()} price",
  openGraph: {{
    title: "{style} | Premium Wedding Turbans",
    description: "{desc}. Authentic {region} style turbans for weddings.",
    url: "https://{domain}",
    type: "website",
  }},
}}

const COLORS = {colors}
const OCCASIONS = {occasions}

const COLLECTION = [
  {{ title: "Classic {style}", desc: "Traditional design with authentic {region} craftsmanship", price: "₹2,500" }},
  {{ title: "Designer {style}", desc: "Modern fusion with premium embroidery work", price: "₹4,500" }},
  {{ title: "Royal {style}", desc: "Luxury fabric with kalgi & brooch set included", price: "₹6,500" }},
  {{ title: "Bridal {style} Set", desc: "Matching groom & family set for complete coordination", price: "₹8,500" }},
]

const FAQ = [
  {{ q: "What makes {style} unique?", a: "{style} represents {desc}. It features distinctive patterns and colors that are iconic to {region} culture and tradition." }},
  {{ q: "What colors are available in {style}?", a: "Our {style} collection is available in traditional colors including {", ".join(colors[:3])} and many more options to match your outfit." }},
  {{ q: "Can I rent {style} instead of buying?", a: "Yes! We offer both purchase and rental options for {style}. Rental starts from ₹500/day with professional tying service available." }},
  {{ q: "Do you ship {style} pan-India?", a: "Absolutely! We deliver {style} across India with express shipping options. Turban tying tutorials included with every order." }},
]

export default function {style.replace(" ", "")}HomePage() {{
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
                grooms, barati, and special {region} celebrations.
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
              {style} Designs & Prices
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our exclusive range of {style.lower()} in various colors, patterns, and premium fabrics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{COLLECTION.map((item, i) => (
              <div key={{i}} className="bg-background p-6 rounded-xl border hover:shadow-xl transition-all">
                <div className="aspect-square bg-primary/10 rounded-lg mb-4 flex items-center justify-center text-6xl">🎭</div>
                <h3 className="text-lg font-bold mb-2">{{item.title}}</h3>
                <p className="text-muted-foreground text-sm mb-3">{{item.desc}}</p>
                <p className="text-primary font-bold">Starting {{item.price}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Colors & Occasions */}}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {{COLORS.map((color, i) => (
                  <span key={{i}} className="bg-white/20 px-4 py-2 rounded-full">{{color}}</span>
                ))}}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
              <div className="flex flex-wrap gap-3">
                {{OCCASIONS.map((occ, i) => (
                  <span key={{i}} className="bg-accent text-accent-foreground px-4 py-2 rounded-full">{{occ}}</span>
                ))}}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DynamicAboutSection location="{style}" state="{region}" />
      <GallerySection />
      
      {{/* FAQ */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{style} - Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {{FAQ.map((faq, i) => (
              <div key={{i}} className="bg-background p-6 rounded-xl border">
                <h3 className="text-lg font-bold mb-2">{{faq.q}}</h3>
                <p className="text-muted-foreground">{{faq.a}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <DynamicFooter location="{style}" state="{region}" domain="{domain}" type="style" />
      <WhatsAppFloat />
    </main>
  )
}}
'''


def generate_service_page(domain, data):
    """Generate a 100% service-focused page."""
    service = data["service"]
    desc = data["desc"]
    focus = data["focus"]
    specialties = data["specialties"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ Navigation }} from "@/components/navigation"
import {{ DynamicAboutSection }} from "@/components/dynamic-about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ DynamicFooter }} from "@/components/dynamic-footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{service} | {desc} | Book Online India",
  description: "{service} - {desc}. Premium wedding turban tying service with 40+ years legacy. Expert artisans. Pan-India coverage. Book now!",
  keywords: "{service.lower()}, {service.lower().replace(' ', '-')}, wedding safa service, groom turban service, pagdi tying service, turban on rent, safa booking online",
  openGraph: {{
    title: "{service} | Premium Turban Service",
    description: "{desc}. Expert turban service across India.",
    url: "https://{domain}",
    type: "website",
  }},
}}

const SPECIALTIES = {specialties}

const PACKAGES = [
  {{ title: "Basic Package", desc: "Single turban tying with basic fabric", price: "₹999", features: ["1 Turban", "Basic Fabric", "On-site Service"] }},
  {{ title: "Premium Package", desc: "Premium fabric with accessories", price: "₹2,499", features: ["1 Turban", "Premium Fabric", "Kalgi Included", "Brooch Set"] }},
  {{ title: "Royal Package", desc: "Designer turban with complete set", price: "₹4,999", features: ["1 Designer Turban", "Sehra Included", "Full Accessory Set", "Photo Session"] }},
  {{ title: "Family Package", desc: "Complete family turban solution", price: "₹9,999+", features: ["Groom Special", "5 Barati Turbans", "Matching Designs", "Priority Service"] }},
]

export default function {service.replace(" ", "")}HomePage() {{
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {{/* Hero Section */}}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <p className="text-accent font-mono uppercase tracking-wider">Premium Service</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {service}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {desc}. India's trusted turban specialist with 40+ years legacy. 
                Premium quality safa, pagdi, feta & sehra for grooms and families. 
                Expert tying service with pan-India delivery.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  Book on WhatsApp
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
                  <p className="text-3xl font-bold text-accent">750+</p>
                  <p className="text-xs text-white/80">Weddings/Year</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">Pan</p>
                  <p className="text-xs text-white/80">India</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-xs text-white/80">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{service}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Specialties */}}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our {service} Specialties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {{SPECIALTIES.map((spec, i) => (
              <div key={{i}} className="bg-background p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-bold">{{spec}}</h3>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Packages */}}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {service} Packages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{PACKAGES.map((pkg, i) => (
              <div key={{i}} className="bg-card p-6 rounded-xl border hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">{{pkg.title}}</h3>
                <p className="text-muted-foreground text-sm mb-4">{{pkg.desc}}</p>
                <p className="text-3xl font-bold text-primary mb-4">{{pkg.price}}</p>
                <ul className="space-y-2">
                  {{pkg.features.map((f, j) => (
                    <li key={{j}} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span> {{f}}
                    </li>
                  ))}}
                </ul>
                <a href="https://wa.me/919725295692" className="mt-4 block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:bg-primary/90">
                  Book Now
                </a>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <DynamicAboutSection location="{service}" state="Pan India" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="{service}" state="India" domain="{domain}" type="service" />
      <WhatsAppFloat />
    </main>
  )
}}
'''


def generate_brand_page(domain, data):
    """Generate a 100% brand-focused page."""
    brand = data["brand"]
    tagline = data["tagline"]
    story = data["story"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ Navigation }} from "@/components/navigation"
import {{ DynamicAboutSection }} from "@/components/dynamic-about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ DynamicFooter }} from "@/components/dynamic-footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{brand} | {tagline} | Premium Turban Service India",
  description: "{brand} - {tagline}. {story}. Premium wedding safa, pagdi & turban service with 40+ years expertise. Book your turban specialist now!",
  keywords: "{brand.lower()}, {brand.lower().replace(' ', '-')}, turban specialist, wedding safa, groom turban, pagdi service, professional turban tying",
  openGraph: {{
    title: "{brand} | {tagline}",
    description: "{story}. Premium turban service across India.",
    url: "https://{domain}",
    type: "website",
  }},
}}

const SERVICES = [
  {{ title: "Groom Turban", desc: "Royal turban for the groom's grand entrance", icon: "👑" }},
  {{ title: "Barati Service", desc: "Matching turbans for all barati members", icon: "👥" }},
  {{ title: "Destination Wedding", desc: "Travel anywhere for your special day", icon: "✈️" }},
  {{ title: "Corporate Events", desc: "Traditional turbans for brand events", icon: "🏢" }},
]

const TESTIMONIALS = [
  {{ name: "Rahul S.", text: "Amazing service by {brand}! Made our wedding memorable.", location: "Delhi" }},
  {{ name: "Priya M.", text: "Best turban service we've ever experienced. Highly recommended!", location: "Gujarat" }},
  {{ name: "Amit K.", text: "{brand} team is professional and skilled. 5 stars!", location: "Rajasthan" }},
]

export default function {brand.replace(" ", "")}HomePage() {{
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
                {story}. With 40+ years of expertise, we bring you the finest safa, pagdi, 
                feta & sehra crafted by master artisans.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">40+</p>
                  <p className="text-xs text-white/80">Years Legacy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">10K+</p>
                  <p className="text-xs text-white/80">Happy Families</p>
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
              <img src="/hero-groom.webp" alt="{brand}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Services */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{brand} Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {{SERVICES.map((service, i) => (
              <div key={{i}} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{{service.icon}}</div>
                <h3 className="text-xl font-bold mb-3">{{service.title}}</h3>
                <p className="text-muted-foreground">{{service.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Testimonials */}}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Clients Say About {brand}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {{TESTIMONIALS.map((t, i) => (
              <div key={{i}} className="bg-white/10 p-6 rounded-xl">
                <p className="text-lg mb-4">"{{t.text}}"</p>
                <p className="font-bold">{{t.name}}</p>
                <p className="text-sm text-white/80">{{t.location}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      <DynamicAboutSection location="{brand}" state="India" tagline="{tagline}" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="{brand}" state="India" domain="{domain}" type="brand" />
      <WhatsAppFloat />
    </main>
  )
}}
'''


def generate_premium_page(domain, data):
    """Generate a 100% premium-focused page."""
    name = data["name"]
    tagline = data["tagline"]
    features = data["features"]
    
    return f'''import type {{ Metadata }} from "next"
import {{ Navigation }} from "@/components/navigation"
import {{ DynamicAboutSection }} from "@/components/dynamic-about-section"
import {{ ContactForm }} from "@/components/contact-form"
import {{ GallerySection }} from "@/components/gallery-section"
import {{ DynamicFooter }} from "@/components/dynamic-footer"
import {{ WhatsAppFloat }} from "@/components/whatsapp-float"

export const metadata: Metadata = {{
  title: "{name} | {tagline} | India's Premier Wedding Turban",
  description: "{name} - {tagline}. India's most trusted wedding turban specialists. Premium safa, pagdi, feta & turban with 40+ years expertise. Experience the best!",
  keywords: "best safa, best pagdi, best turban, top safa service, premium wedding turban, luxury turban service, best turban india, feta for wedding",
  openGraph: {{
    title: "{name} | {tagline}",
    description: "India's premier wedding turban service. Experience the best in safa, pagdi, feta & turban.",
    url: "https://{domain}",
    type: "website",
  }},
}}

const FEATURES = {features}

const WHY_BEST = [
  {{ title: "40+ Years Legacy", desc: "Four decades of turban expertise passed through generations" }},
  {{ title: "Master Artisans", desc: "Skilled craftsmen with specialized turban tying techniques" }},
  {{ title: "Premium Materials", desc: "Only the finest fabrics and authentic accessories" }},
  {{ title: "Pan-India Service", desc: "We travel anywhere in India for your special day" }},
  {{ title: "5-Star Reviews", desc: "Consistently rated the best by thousands of happy families" }},
  {{ title: "Celebrity Choice", desc: "Trusted by celebrities and high-profile weddings" }},
]

export default function {name.replace(" ", "")}HomePage() {{
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
                <a href="https://wa.me/919725295692" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold">
                  WhatsApp Now
                </a>
                <a href="tel:+919725295692" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold">
                  Call: +91 97252 95692
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-6">
                {{FEATURES.map((f, i) => (
                  <span key={{i}} className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ {{f}}</span>
                ))}}
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/hero-groom.webp" alt="{name}" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {{/* Why Best Section */}}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-mono uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why We're The Best
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {{WHY_BEST.map((item, i) => (
              <div key={{i}} className="bg-background p-8 rounded-xl border hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">{{item.title}}</h3>
                <p className="text-muted-foreground">{{item.desc}}</p>
              </div>
            ))}}
          </div>
        </div>
      </section>

      {{/* Stats */}}
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

      <DynamicAboutSection location="{name}" state="India" tagline="{tagline}" />
      <GallerySection />
      <ContactForm />
      <DynamicFooter location="{name}" state="India" domain="{domain}" type="premium" />
      <WhatsAppFloat />
    </main>
  )
}}
'''


def main():
    """Generate all domain pages."""
    base_path = "/Applications/Safawala ALL/domains"
    
    # Counter for progress
    total = len(CITY_DOMAINS) + len(STYLE_DOMAINS) + len(SERVICE_DOMAINS) + len(BRAND_DOMAINS) + len(PREMIUM_DOMAINS)
    count = 0
    
    print(f"🚀 Generating {total} domain-specific pages...")
    print("=" * 50)
    
    # Generate City Pages
    print(f"\\n📍 Generating {len(CITY_DOMAINS)} City Domain Pages...")
    for domain, data in CITY_DOMAINS.items():
        folder = os.path.join(base_path, domain)
        os.makedirs(folder, exist_ok=True)
        
        page_content = generate_city_page(domain, data)
        page_path = os.path.join(folder, "page.tsx")
        
        with open(page_path, "w") as f:
            f.write(page_content)
        
        count += 1
        print(f"  ✅ [{count}/{total}] {domain} → {data['city']}")
    
    # Generate Style Pages
    print(f"\\n🎨 Generating {len(STYLE_DOMAINS)} Style Domain Pages...")
    for domain, data in STYLE_DOMAINS.items():
        folder = os.path.join(base_path, domain)
        os.makedirs(folder, exist_ok=True)
        
        page_content = generate_style_page(domain, data)
        page_path = os.path.join(folder, "page.tsx")
        
        with open(page_path, "w") as f:
            f.write(page_content)
        
        count += 1
        print(f"  ✅ [{count}/{total}] {domain} → {data['style']}")
    
    # Generate Service Pages
    print(f"\\n🛠️ Generating {len(SERVICE_DOMAINS)} Service Domain Pages...")
    for domain, data in SERVICE_DOMAINS.items():
        folder = os.path.join(base_path, domain)
        os.makedirs(folder, exist_ok=True)
        
        page_content = generate_service_page(domain, data)
        page_path = os.path.join(folder, "page.tsx")
        
        with open(page_path, "w") as f:
            f.write(page_content)
        
        count += 1
        print(f"  ✅ [{count}/{total}] {domain} → {data['service']}")
    
    # Generate Brand Pages
    print(f"\\n🏷️ Generating {len(BRAND_DOMAINS)} Brand Domain Pages...")
    for domain, data in BRAND_DOMAINS.items():
        folder = os.path.join(base_path, domain)
        os.makedirs(folder, exist_ok=True)
        
        page_content = generate_brand_page(domain, data)
        page_path = os.path.join(folder, "page.tsx")
        
        with open(page_path, "w") as f:
            f.write(page_content)
        
        count += 1
        print(f"  ✅ [{count}/{total}] {domain} → {data['brand']}")
    
    # Generate Premium Pages
    print(f"\\n👑 Generating {len(PREMIUM_DOMAINS)} Premium Domain Pages...")
    for domain, data in PREMIUM_DOMAINS.items():
        folder = os.path.join(base_path, domain)
        os.makedirs(folder, exist_ok=True)
        
        page_content = generate_premium_page(domain, data)
        page_path = os.path.join(folder, "page.tsx")
        
        with open(page_path, "w") as f:
            f.write(page_content)
        
        count += 1
        print(f"  ✅ [{count}/{total}] {domain} → {data['name']}")
    
    print("\\n" + "=" * 50)
    print(f"🎉 SUCCESS! Generated {count} domain-specific pages!")
    print("\\nBreakdown:")
    print(f"  📍 City Domains: {len(CITY_DOMAINS)}")
    print(f"  🎨 Style Domains: {len(STYLE_DOMAINS)}")
    print(f"  🛠️ Service Domains: {len(SERVICE_DOMAINS)}")
    print(f"  🏷️ Brand Domains: {len(BRAND_DOMAINS)}")
    print(f"  👑 Premium Domains: {len(PREMIUM_DOMAINS)}")


if __name__ == "__main__":
    main()

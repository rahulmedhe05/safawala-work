#!/usr/bin/env python3
"""
Generate keyword and area pages for all domains.
Each page is 100% focused on that specific domain/city/style.
"""

import os

# ============================================
# DOMAIN DATA
# ============================================

CITY_DOMAINS = {
    "safawaladelhi.com": {"city": "Delhi", "state": "Delhi NCR", "areas": ["Connaught Place", "Chandni Chowk", "South Delhi", "Dwarka", "Rohini", "Karol Bagh", "Lajpat Nagar", "Saket", "Greater Kailash", "Vasant Kunj", "Rajouri Garden", "Pitampura"]},
    "safawalapune.com": {"city": "Pune", "state": "Maharashtra", "areas": ["Koregaon Park", "Hadapsar", "Kothrud", "Baner", "Hinjewadi", "Aundh", "Wakad", "Viman Nagar", "Kalyani Nagar", "Magarpatta", "Shivaji Nagar", "Camp"]},
    "safawalaahmedabad.com": {"city": "Ahmedabad", "state": "Gujarat", "areas": ["Navrangpura", "Satellite", "Bodakdev", "Vastrapur", "Maninagar", "C.G. Road", "Prahlad Nagar", "Thaltej", "SG Highway", "Bopal", "Gota", "Paldi"]},
    "safawalanagpur.com": {"city": "Nagpur", "state": "Maharashtra", "areas": ["Dharampeth", "Sadar", "Civil Lines", "Sitabuldi", "Ramdaspeth", "Dhantoli", "Pratap Nagar", "Manewada", "Wardhaman Nagar", "Itwari", "Nandanvan", "Laxmi Nagar"]},
    "safawalanashik.com": {"city": "Nashik", "state": "Maharashtra", "areas": ["College Road", "Gangapur Road", "Panchavati", "Cidco", "Satpur", "Indira Nagar", "Deolali", "Pathardi Phata", "Mahatma Nagar", "Dwarka", "Mhasrul", "Bytco Point"]},
    "safawalasurat.com": {"city": "Surat", "state": "Gujarat", "areas": ["Athwa", "Adajan", "Vesu", "City Light", "Piplod", "Ghod Dod Road", "Ring Road", "Varachha", "Dumas Road", "Pal", "Udhna", "Katargam"]},
    "safawalagwalior.com": {"city": "Gwalior", "state": "Madhya Pradesh", "areas": ["City Centre", "Lashkar", "Morar", "Thatipur", "Hazira", "Gwalior Fort Area", "Jayendraganj", "Maharajpur", "Padav", "Kampoo", "Tansen Nagar", "Phool Bagh"]},
    "safawalabhopal.com": {"city": "Bhopal", "state": "Madhya Pradesh", "areas": ["MP Nagar", "Arera Colony", "New Market", "Habibganj", "Kolar Road", "Shahpura", "Ashoka Garden", "Govindpura", "TT Nagar", "Hoshangabad Road", "Bairagarh", "Ayodhya Nagar"]},
    "safawalaindore.com": {"city": "Indore", "state": "Madhya Pradesh", "areas": ["Vijay Nagar", "Palasia", "Sapna Sangeeta", "Scheme 78", "Bhawarkuan", "Rau", "LIG Square", "Geeta Bhawan", "Rajwada", "MG Road", "AB Road", "Sudama Nagar"]},
    "safawalanoida.com": {"city": "Noida", "state": "Uttar Pradesh", "areas": ["Sector 18", "Sector 62", "Sector 137", "Sector 50", "Greater Noida", "Noida Extension", "Sector 44", "Sector 93", "Sector 15", "Sector 16", "Film City", "Sector 76"]},
    "safawalakanpur.com": {"city": "Kanpur", "state": "Uttar Pradesh", "areas": ["Civil Lines", "Mall Road", "Kidwai Nagar", "Swaroop Nagar", "Kakadeo", "Govind Nagar", "Harsh Nagar", "Arya Nagar", "Tilak Nagar", "Shastri Nagar", "Kalyanpur", "Panki"]},
    "safawalaagra.com": {"city": "Agra", "state": "Uttar Pradesh", "areas": ["Tajganj", "Sadar Bazaar", "Civil Lines", "Kamla Nagar", "Raja Mandi", "Sikandra", "Dayal Bagh", "Shahganj", "Sanjay Place", "Idgah Colony", "Fatehabad Road", "MG Road"]},
    "safawalarajkot.com": {"city": "Rajkot", "state": "Gujarat", "areas": ["Yagnik Road", "Kalawad Road", "150 Feet Ring Road", "University Road", "Raiya Road", "Mavdi", "Kotecha Chowk", "Amin Marg", "Nana Mava", "Sadhu Vaswani Road", "Pedak Road", "Race Course"]},
    "safawalavaranasi.com": {"city": "Varanasi", "state": "Uttar Pradesh", "areas": ["Assi Ghat", "Dashashwamedh", "Godowlia", "Lanka", "Bhelupur", "Sigra", "Cantonment", "Ramnagar", "Sarnath", "Pandeypur", "Kakarmatta", "Shivpur"]},
    "safawalalucknow.com": {"city": "Lucknow", "state": "Uttar Pradesh", "areas": ["Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar", "Alambagh", "Aminabad", "Rajajipuram", "Mahanagar", "Aashiana", "Vikas Nagar", "Jankipuram", "Chinhat"]},
    "safawalaamritsar.com": {"city": "Amritsar", "state": "Punjab", "areas": ["Hall Bazaar", "Lawrence Road", "Ranjit Avenue", "Model Town", "Green Avenue", "Majitha Road", "GT Road", "Mall Road", "White Avenue", "Court Road", "Queens Road", "Heritage Street"]},
    "safawalachandigarh.com": {"city": "Chandigarh", "state": "Punjab/Haryana", "areas": ["Sector 17", "Sector 22", "Sector 35", "Industrial Area Phase 1", "Manimajra", "Mohali", "Panchkula", "Zirakpur", "Sector 9", "Sector 8", "Sector 43", "IT Park"]},
    "safawalagurgaon.com": {"city": "Gurgaon", "state": "Haryana", "areas": ["DLF Phase 1", "Cyber City", "Golf Course Road", "MG Road", "Sohna Road", "Sector 29", "Sector 56", "Udyog Vihar", "Sector 14", "South City", "Palam Vihar", "Nirvana Country"]},
    "safawalamountabu.com": {"city": "Mount Abu", "state": "Rajasthan", "areas": ["Nakki Lake", "Dilwara Road", "Abu Road", "Main Market", "Sunset Point Road", "Achalgarh", "Guru Shikhar", "Trevor Tank"]},
    "safawalapushkar.com": {"city": "Pushkar", "state": "Rajasthan", "areas": ["Pushkar Lake", "Brahma Temple Road", "Main Bazaar", "Ajmer Road", "Mela Ground", "Varaha Ghat", "Savitri Temple", "Old Rangji Temple"]},
    "safawalajaisalmer.com": {"city": "Jaisalmer", "state": "Rajasthan", "areas": ["Fort Area", "Sam Sand Dunes", "Gandhi Chowk", "Gadisar Lake", "Jethwai Road", "Patwon Ki Haveli", "Kuldhara Road", "Khuri"]},
    "safawalaudaipur.com": {"city": "Udaipur", "state": "Rajasthan", "areas": ["City Palace Area", "Lake Pichola", "Fateh Sagar", "Hiran Magri", "Pratap Nagar", "Sukhadia Circle", "Saheli Marg", "Ambamata", "Chetak Circle", "Bapu Bazaar"]},
    "safawalajodhpur.com": {"city": "Jodhpur", "state": "Rajasthan", "areas": ["Clock Tower", "Ratanada", "Sardarpura", "Paota", "Shastri Nagar", "Pal Road", "Residency Road", "Mandore", "Basni", "Chopasni Road"]},
    "safawalabikaner.com": {"city": "Bikaner", "state": "Rajasthan", "areas": ["Kote Gate", "Station Road", "Rani Bazaar", "Ganga Shahar", "Lalgarh", "Karni Nagar", "Jassusar Gate", "Pawan Puri"]},
    "safawalabaroda.com": {"city": "Vadodara", "state": "Gujarat", "areas": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Vasna", "Akota", "Karelibaug", "Old Padra Road", "Subhanpura", "Nizampura"]},
    "safawalapatiala.com": {"city": "Patiala", "state": "Punjab", "areas": ["The Mall", "Model Town", "Leela Bhawan", "Sirhind Road", "Sangrur Road", "Urban Estate", "Rajpura Road", "Sheranwala Gate"]},
    "safawalaludhiana.com": {"city": "Ludhiana", "state": "Punjab", "areas": ["Model Town", "BRS Nagar", "Sarabha Nagar", "Ferozepur Road", "Pakhowal Road", "Civil Lines", "Dugri", "Jamalpur"]},
    "safawalamussoorie.com": {"city": "Mussoorie", "state": "Uttarakhand", "areas": ["Mall Road", "Library Chowk", "Picture Palace", "Landour", "Company Bagh", "Kempty Falls Road", "Clouds End", "Lal Tibba"]},
    "safawalajimcorbett.com": {"city": "Jim Corbett", "state": "Uttarakhand", "areas": ["Dhikala Zone", "Bijrani Zone", "Jhirna Zone", "Durga Devi Zone", "Sitabani Zone", "Ramnagar", "Garjiya Temple", "Kosi River"]},
    "safawalakochi.com": {"city": "Kochi", "state": "Kerala", "areas": ["Fort Kochi", "Marine Drive", "MG Road", "Edappally", "Kakkanad", "Panampilly Nagar", "Thripunithura", "Ernakulam"]},
    "safawalakerala.com": {"city": "Kerala", "state": "Kerala", "areas": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kumarakom", "Alleppey", "Munnar", "Kovalam"]},
    "safawalakshadweep.com": {"city": "Lakshadweep", "state": "Lakshadweep", "areas": ["Kavaratti", "Agatti", "Bangaram", "Kadmat", "Kalpeni", "Minicoy", "Andrott", "Amini"]},
    "safawalashimla.com": {"city": "Shimla", "state": "Himachal Pradesh", "areas": ["Mall Road", "The Ridge", "Lakkar Bazaar", "Kufri", "Mashobra", "Sanjauli", "Chhota Shimla", "Summer Hill"]},
    "safawaladubai.com": {"city": "Dubai", "state": "UAE", "areas": ["Downtown Dubai", "Dubai Marina", "Palm Jumeirah", "Jumeirah Beach", "Deira", "Business Bay", "JBR", "DIFC"]},
    "safawalagoa.com": {"city": "Goa", "state": "Goa", "areas": ["Calangute", "Baga", "Candolim", "Anjuna", "Panjim", "Margao", "Old Goa", "Dona Paula"]},
}

# Core keywords for city domains
CITY_KEYWORDS = [
    {"slug": "safa-in-{city}", "title": "Safa in {city}", "type": "core"},
    {"slug": "pagdi-in-{city}", "title": "Pagdi in {city}", "type": "core"},
    {"slug": "turban-in-{city}", "title": "Turban in {city}", "type": "core"},
    {"slug": "wedding-safa-in-{city}", "title": "Wedding Safa in {city}", "type": "wedding"},
    {"slug": "wedding-turban-in-{city}", "title": "Wedding Turban in {city}", "type": "wedding"},
    {"slug": "groom-safa-in-{city}", "title": "Groom Safa in {city}", "type": "groom"},
    {"slug": "groom-turban-in-{city}", "title": "Groom Turban in {city}", "type": "groom"},
    {"slug": "dulha-safa-in-{city}", "title": "Dulha Safa in {city}", "type": "groom"},
    {"slug": "barati-safa-in-{city}", "title": "Barati Safa in {city}", "type": "barati"},
    {"slug": "safa-on-rent-in-{city}", "title": "Safa on Rent in {city}", "type": "rental"},
    {"slug": "safa-tying-service-in-{city}", "title": "Safa Tying Service in {city}", "type": "service"},
    {"slug": "rajasthani-safa-in-{city}", "title": "Rajasthani Safa in {city}", "type": "style"},
    {"slug": "jodhpuri-safa-in-{city}", "title": "Jodhpuri Safa in {city}", "type": "style"},
    {"slug": "feta-in-{city}", "title": "Feta in {city}", "type": "style"},
    {"slug": "sehra-in-{city}", "title": "Sehra in {city}", "type": "accessory"},
]


def generate_keyword_page(domain, city, state, keyword_data, areas):
    """Generate a keyword page for a city domain."""
    slug = keyword_data["slug"].replace("{city}", city.lower().replace(" ", "-"))
    title = keyword_data["title"].replace("{city}", city)
    kw_type = keyword_data["type"]
    areas_str = ", ".join(areas[:6])
    
    # Generate type-specific content
    if kw_type == "core":
        content_intro = f"""Looking for premium {title.lower()}? Safawala {city} is your trusted partner for authentic safa and turban service across all {city} areas. Our expert specialists bring 40+ years of heritage to make your special day truly memorable."""
        features = [
            f"Expert {title.lower()} specialists with 40+ years experience",
            f"Authentic traditional tying techniques for {city} weddings",
            f"Customized designs for your wedding theme in {city}",
            f"Quick and professional service on wedding day across {city}",
            f"Perfect fit with maximum comfort guaranteed in {city}",
            f"Affordable pricing for individual or group bookings",
        ]
    elif kw_type == "wedding":
        content_intro = f"""Planning your wedding in {city}? Get the perfect {title.lower()} from Safawala {city}. We specialize in wedding turban services for grooms, barati, and family members across {state}."""
        features = [
            f"Specialized {title.lower()} for {city} weddings",
            f"Complete wedding turban packages for the entire family",
            f"Destination wedding coverage across {state}",
            f"Customized designs to match your wedding theme",
            f"On-site service at all major {city} venues",
            f"Same-day service available for last-minute bookings",
        ]
    elif kw_type == "groom":
        content_intro = f"""Make your entry grand with the perfect {title.lower()}! Safawala {city} creates stunning groom turbans that complement your sherwani perfectly. Premium quality, royal designs for {city} grooms."""
        features = [
            f"Royal {title.lower()} designs for {city} grooms",
            f"Premium fabrics and authentic embellishments",
            f"Expert tying for the perfect fit and comfort",
            f"Photo-ready styling for wedding photography",
            f"Sehra and kalgi accessories included",
            f"Matching options for family coordination",
        ]
    elif kw_type == "barati":
        content_intro = f"""Complete your baraat with impressive {title.lower()}! Safawala {city} provides bulk turban services for all barati members with matching designs and professional on-site tying."""
        features = [
            f"Bulk {title.lower()} for large baraats in {city}",
            f"Matching designs for coordinated look",
            f"Professional on-site tying service",
            f"Quick service for large groups",
            f"Affordable per-person pricing",
            f"All {city} areas covered",
        ]
    elif kw_type == "rental":
        content_intro = f"""Looking for {title.lower()}? Safawala {city} offers premium safa rental with professional tying service. Affordable options for weddings and events across {city}."""
        features = [
            f"Affordable {title.lower()} for weddings",
            f"Wide variety of styles and colors",
            f"Professional tying service included",
            f"Clean, sanitized safas guaranteed",
            f"Pickup and delivery available in {city}",
            f"Bulk discounts for large orders",
        ]
    elif kw_type == "service":
        content_intro = f"""Expert {title.lower()} by Safawala {city}! Our professional turban tying specialists provide on-site service across all {city} areas for weddings, events, and celebrations."""
        features = [
            f"Professional {title.lower()} across {city}",
            f"40+ years of turban tying expertise",
            f"On-site service at your venue",
            f"Quick and efficient tying",
            f"All turban styles available",
            f"Same-day service available",
        ]
    elif kw_type == "style":
        style_name = title.split(" in ")[0]
        content_intro = f"""Discover authentic {title.lower()} from Safawala {city}! We specialize in traditional {style_name} styles with 40+ years of expertise. Perfect for {city} weddings and celebrations."""
        features = [
            f"Authentic {style_name} styles in {city}",
            f"Traditional craftsmanship with modern appeal",
            f"Premium fabrics and materials",
            f"Expert tying by skilled artisans",
            f"Customization available for your outfit",
            f"Pan-{state} delivery and service",
        ]
    elif kw_type == "accessory":
        content_intro = f"""Complete your groom look with premium {title.lower()} from Safawala {city}! We offer authentic sehra and wedding accessories that complement your turban perfectly."""
        features = [
            f"Premium {title.lower()} for {city} weddings",
            f"Matching designs with groom's turban",
            f"Traditional and modern styles",
            f"Quality materials and craftsmanship",
            f"Complete accessory packages",
            f"Expert styling service",
        ]
    else:
        content_intro = f"""Premium {title.lower()} service by Safawala {city}. Expert turban specialists serving {city} and {state} for weddings and celebrations."""
        features = [
            f"Expert {title.lower()} service",
            f"40+ years of experience",
            f"All {city} areas covered",
            f"Professional on-site service",
            f"Premium quality guaranteed",
            f"Affordable pricing",
        ]
    
    return f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

const {city.upper().replace(" ", "_")}_AREAS = {areas}

export const metadata: Metadata = {{
  title: "{title} | Premium {title} Service | Safawala {city}",
  description: "{content_intro[:160]}",
  keywords: "{slug.replace('-', ' ')}, {city.lower()} safa, {city.lower()} turban, wedding safa {city.lower()}, safa service {city.lower()}",
  openGraph: {{
    title: "{title} | Safawala {city}",
    description: "Expert {title.lower()} for weddings, grooms & baraatis in {city}.",
    url: "https://{domain}/{slug}",
    type: "website",
  }},
}}

export default function {slug.replace("-", " ").title().replace(" ", "")}Page() {{
  const pageData = {{
    title: "{title}",
    shortDescription: "{content_intro}",
    description: "Premium {title.lower()} by Safawala {city} - {city}'s most trusted turban specialists.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: {city.upper().replace(" ", "_")}_AREAS,
    keyFeatures: {features},
    seoKeywords: ["{slug.replace('-', ' ')}", "{city.lower()} safa", "{city.lower()} turban service"],
    content: `
<h2>Welcome to Safawala {city} - Your Premier {title} Destination</h2>

<p>{content_intro}</p>

<h2>Why Choose Safawala {city} for {title}?</h2>

<p>When it comes to <strong>{title.lower()}</strong>, Safawala {city} stands apart as the region's most trusted turban service. Here's why {city} families trust us:</p>

<h3>40+ Years of Excellence</h3>
<p>Our <strong>{title.lower()}</strong> expertise comes from four decades of serving weddings across {state}. We understand the cultural significance of every turban and deliver perfection every time.</p>

<h3>Premium Quality Materials</h3>
<p>Every <strong>{title.lower()}</strong> uses premium fabrics - silk, brocade, and designer materials that look stunning and feel comfortable throughout your celebration.</p>

<h3>Expert Turban Specialists</h3>
<p>Our artisans are masters at <strong>{title.lower()}</strong> tying, creating the perfect fit and style for grooms, barati, and family members alike.</p>

<h2>Our {title} Services</h2>

<h3>Groom {title}</h3>
<p>Make your entrance truly royal with our premium groom <strong>{title.lower()}</strong>. Expert tying with designer fabrics and traditional embellishments.</p>

<h3>Barati {title}</h3>
<p>Matching <strong>{title.lower()}</strong> for your baraat - bulk orders with professional on-site tying service across {city}.</p>

<h3>Family Packages</h3>
<p>Coordinated <strong>{title.lower()}</strong> for the entire family. Create a unified, impressive look for your wedding.</p>

<h2>{title} Service Areas in {city}</h2>

<p>We provide <strong>{title.lower()}</strong> across all areas: {areas_str} and more. Our team travels to your venue for on-site service.</p>

<h2>Book Your {title} Now</h2>

<p>Ready to book <strong>{title.lower()}</strong>? Contact Safawala {city} now for premium turban service. WhatsApp: +91 97252 95692</p>
`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''


def generate_area_page(domain, city, state, area, all_areas):
    """Generate an area-specific page for a city domain."""
    area_slug = area.lower().replace(" ", "-").replace(".", "")
    
    return f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

const {city.upper().replace(" ", "_")}_AREAS = {all_areas}

export const metadata: Metadata = {{
  title: "{area} Safa Service | {area} Turban Service | Safawala {city}",
  description: "Professional {area} safa service by Safawala {city}. Expert turban service in {area} and surrounding areas of {city}. Premium safa for weddings. Book today!",
  keywords: "{area_slug} safa service, {area_slug} turban service, safa in {area_slug}, wedding turban {area_slug}, {city.lower()} safa",
  openGraph: {{
    title: "{area} Safa Service | Safawala {city}",
    description: "Professional turban service in {area}, {city}.",
    url: "https://{domain}/{area_slug}-safa-service",
    type: "website",
  }},
}}

export default function {area.replace(" ", "").replace(".", "")}SafaServicePage() {{
  const pageData = {{
    title: "{area} Safa Service",
    shortDescription: "Comprehensive {area} safa service from Safawala {city}. Our {area} turban service covers all of {area} and surrounding areas with professional turban service for weddings, events, and celebrations.",
    description: "Professional {area} safa service by Safawala {city} - turban service for {area} and surrounding areas.",
    mainImage: "/hero-safa.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: {city.upper().replace(" ", "_")}_AREAS,
    keyFeatures: [
      "Comprehensive {area} safa service",
      "Full coverage of {area} area",
      "Professional on-site turban tying",
      "All wedding venues in {area} covered",
      "Quick service across {area}",
      "Premium quality guaranteed",
      "Experienced turban specialists",
      "Affordable {area} safa pricing",
    ],
    seoKeywords: ["{area_slug} safa service", "{area_slug} turban service", "safa in {area_slug}"],
    content: `
<h2>Safawala {city} - Complete {area} Safa Service</h2>

<p>{area} is one of {city}'s most popular wedding destinations. Our <strong>{area} safa service</strong> provides professional turban styling throughout {area} and surrounding areas. <strong>{area} safa service</strong> from Safawala {city} ensures quality turban service reaches every celebration in this vibrant area.</p>

<p>Whether your wedding is at a hotel, banquet hall, or private residence in {area}, our <strong>{area} safa service</strong> delivers consistent quality and professional styling.</p>

<h2>Why Choose Our {area} Safa Service?</h2>

<h3>Local {area} Expertise</h3>
<p>Our <strong>{area} safa service</strong> team knows {area} inside out. We've served weddings at all major venues in {area} and surrounding areas of {city}.</p>

<h3>40+ Years Experience</h3>
<p>Safawala {city}'s <strong>{area} safa service</strong> brings four decades of turban expertise to your special day in {area}.</p>

<h3>On-Time Arrival</h3>
<p>Our <strong>{area} safa service</strong> guarantees punctual arrival at your {area} venue. We understand {city} traffic and plan accordingly.</p>

<h2>{area} Safa Service Options</h2>

<h3>Groom Safa in {area}</h3>
<p><strong>{area} safa service</strong> for grooms - premium designer turbans with expert tying to make your {area} wedding memorable.</p>

<h3>Barati Safa in {area}</h3>
<p>Bulk <strong>{area} safa service</strong> for baraatis - matching turbans for your entire wedding party in {area}.</p>

<h3>Family Packages in {area}</h3>
<p>Complete <strong>{area} safa service</strong> for the family - coordinated looks for everyone at your {area} celebration.</p>

<h2>Popular {area} Wedding Venues We Serve</h2>

<p>Our <strong>{area} safa service</strong> covers all wedding venues in {area} including hotels, banquet halls, farmhouses, and private residences.</p>

<h2>Book {area} Safa Service</h2>

<p>Ready for premium <strong>{area} safa service</strong>? Contact Safawala {city} now. WhatsApp: +91 97252 95692</p>
`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''


def main():
    """Generate all keyword and area pages."""
    base_path = "/Applications/Safawala ALL/domains"
    
    total_pages = 0
    
    print("🚀 Generating keyword and area pages for all domains...")
    print("=" * 60)
    
    # Process each city domain
    for domain, data in CITY_DOMAINS.items():
        city = data["city"]
        state = data["state"]
        areas = data["areas"]
        
        domain_path = os.path.join(base_path, domain)
        os.makedirs(domain_path, exist_ok=True)
        
        print(f"\\n📍 Processing {domain} ({city})...")
        
        # Generate keyword pages
        kw_count = 0
        for kw in CITY_KEYWORDS:
            slug = kw["slug"].replace("{city}", city.lower().replace(" ", "-"))
            page_path = os.path.join(domain_path, slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_keyword_page(domain, city, state, kw, areas)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            kw_count += 1
        
        print(f"   ✅ {kw_count} keyword pages generated")
        total_pages += kw_count
        
        # Generate area pages
        area_count = 0
        for area in areas:
            area_slug = area.lower().replace(" ", "-").replace(".", "") + "-safa-service"
            page_path = os.path.join(domain_path, area_slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_area_page(domain, city, state, area, areas)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            area_count += 1
        
        print(f"   ✅ {area_count} area pages generated")
        total_pages += area_count
    
    print("\\n" + "=" * 60)
    print(f"🎉 SUCCESS! Generated {total_pages} pages across {len(CITY_DOMAINS)} domains!")
    print(f"   • {len(CITY_KEYWORDS)} keyword pages per domain")
    print(f"   • 8-12 area pages per domain")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Generate keyword pages for style, service, brand, and premium domains.
"""

import os

# ============================================
# STYLE DOMAINS - Turban style focused
# ============================================

STYLE_DOMAINS = {
    "jodhpurisafa.com": {"style": "Jodhpuri Safa", "type": "royal", "region": "Rajasthan"},
    "rajasthanisafa.com": {"style": "Rajasthani Safa", "type": "traditional", "region": "Rajasthan"},
    "rajputisafa.com": {"style": "Rajputi Safa", "type": "royal", "region": "Rajasthan"},
    "jaipurisafa.com": {"style": "Jaipuri Safa", "type": "heritage", "region": "Rajasthan"},
    "mewadisafa.com": {"style": "Mewadi Safa", "type": "royal", "region": "Mewar"},
    "marwarisafa.com": {"style": "Marwari Safa", "type": "traditional", "region": "Marwar"},
    "maharajasafa.com": {"style": "Maharaja Safa", "type": "premium", "region": "India"},
    "dulhasafa.com": {"style": "Dulha Safa", "type": "groom", "region": "India"},
    "baratisafa.com": {"style": "Barati Safa", "type": "barati", "region": "India"},
    "sehra.com": {"style": "Sehra", "type": "accessory", "region": "India"},
    "safabandhi.com": {"style": "Safa Bandhi", "type": "service", "region": "India"},
    "fetabinding.com": {"style": "Feta Binding", "type": "service", "region": "Maharashtra"},
    "pagdi.com": {"style": "Pagdi", "type": "traditional", "region": "India"},
    "indianturban.com": {"style": "Indian Turban", "type": "pan-india", "region": "India"},
}

# Keywords for style domains
STYLE_KEYWORDS = [
    {"slug": "wedding-{style_slug}", "title": "Wedding {style}"},
    {"slug": "groom-{style_slug}", "title": "Groom {style}"},
    {"slug": "{style_slug}-for-wedding", "title": "{style} for Wedding"},
    {"slug": "{style_slug}-designs", "title": "{style} Designs"},
    {"slug": "{style_slug}-colors", "title": "{style} Colors"},
    {"slug": "premium-{style_slug}", "title": "Premium {style}"},
    {"slug": "{style_slug}-tying-service", "title": "{style} Tying Service"},
    {"slug": "{style_slug}-rental", "title": "{style} Rental"},
    {"slug": "best-{style_slug}", "title": "Best {style}"},
    {"slug": "{style_slug}-for-barati", "title": "{style} for Barati"},
]

# ============================================
# SERVICE DOMAINS - Service type focused
# ============================================

SERVICE_DOMAINS = {
    "safaservice.com": {"service": "Safa Service", "focus": "general"},
    "safaonrent.com": {"service": "Safa on Rent", "focus": "rental"},
    "safarental.com": {"service": "Safa Rental", "focus": "rental"},
    "safatying.com": {"service": "Safa Tying", "focus": "tying"},
    "turbantying.com": {"service": "Turban Tying", "focus": "tying"},
    "turbanonrent.com": {"service": "Turban on Rent", "focus": "rental"},
    "pagdibinding.com": {"service": "Pagdi Binding", "focus": "tying"},
    "safabandhi.com": {"service": "Safa Bandhi", "focus": "tying"},
    "groomsafa.com": {"service": "Groom Safa", "focus": "groom"},
    "groomturban.com": {"service": "Groom Turban", "focus": "groom"},
    "baratsafa.com": {"service": "Barat Safa", "focus": "barati"},
    "baratturban.com": {"service": "Barat Turban", "focus": "barati"},
    "weddingsafa.com": {"service": "Wedding Safa", "focus": "wedding"},
    "weddingturban.com": {"service": "Wedding Turban", "focus": "wedding"},
    "weddingpagdi.com": {"service": "Wedding Pagdi", "focus": "wedding"},
    "destinationweddingsafa.com": {"service": "Destination Wedding Safa", "focus": "destination"},
    "festivalsafa.com": {"service": "Festival Safa", "focus": "festival"},
    "eventturban.com": {"service": "Event Turban", "focus": "event"},
    "corporateturban.com": {"service": "Corporate Turban", "focus": "corporate"},
    "bulksafa.com": {"service": "Bulk Safa", "focus": "bulk"},
}

SERVICE_KEYWORDS = [
    {"slug": "{service_slug}-in-mumbai", "title": "{service} in Mumbai"},
    {"slug": "{service_slug}-in-delhi", "title": "{service} in Delhi"},
    {"slug": "{service_slug}-in-jaipur", "title": "{service} in Jaipur"},
    {"slug": "{service_slug}-in-ahmedabad", "title": "{service} in Ahmedabad"},
    {"slug": "{service_slug}-in-pune", "title": "{service} in Pune"},
    {"slug": "{service_slug}-in-goa", "title": "{service} in Goa"},
    {"slug": "{service_slug}-in-udaipur", "title": "{service} in Udaipur"},
    {"slug": "premium-{service_slug}", "title": "Premium {service}"},
    {"slug": "best-{service_slug}", "title": "Best {service}"},
    {"slug": "affordable-{service_slug}", "title": "Affordable {service}"},
]

# ============================================
# BRAND DOMAINS - Safawala brand variations
# ============================================

BRAND_DOMAINS = {
    "safawala.com": {"brand": "Safawala", "focus": "main"},
    "safawala.in": {"brand": "Safawala India", "focus": "india"},
    "safawale.com": {"brand": "Safawale", "focus": "alternate"},
    "safewala.com": {"brand": "Safewala", "focus": "alternate"},
    "thesafawala.com": {"brand": "The Safawala", "focus": "premium"},
    "safawalas.com": {"brand": "Safawalas", "focus": "plural"},
    "mysafawala.com": {"brand": "My Safawala", "focus": "personal"},
    "originalsafawala.com": {"brand": "Original Safawala", "focus": "authentic"},
    "safawalaindia.com": {"brand": "Safawala India", "focus": "nation"},
}

BRAND_KEYWORDS = [
    {"slug": "about-{brand_slug}", "title": "About {brand}"},
    {"slug": "{brand_slug}-services", "title": "{brand} Services"},
    {"slug": "{brand_slug}-reviews", "title": "{brand} Reviews"},
    {"slug": "{brand_slug}-mumbai", "title": "{brand} Mumbai"},
    {"slug": "{brand_slug}-delhi", "title": "{brand} Delhi"},
    {"slug": "{brand_slug}-jaipur", "title": "{brand} Jaipur"},
    {"slug": "{brand_slug}-weddings", "title": "{brand} Weddings"},
    {"slug": "contact-{brand_slug}", "title": "Contact {brand}"},
]

# ============================================
# PREMIUM DOMAINS 
# ============================================

PREMIUM_DOMAINS = {
    "royalsafa.com": {"brand": "Royal Safa", "focus": "luxury"},
    "royalturban.com": {"brand": "Royal Turban", "focus": "luxury"},
    "designersafa.com": {"brand": "Designer Safa", "focus": "designer"},
    "luxuryturban.com": {"brand": "Luxury Turban", "focus": "luxury"},
}

PREMIUM_KEYWORDS = [
    {"slug": "wedding-{brand_slug}", "title": "Wedding {brand}"},
    {"slug": "groom-{brand_slug}", "title": "Groom {brand}"},
    {"slug": "{brand_slug}-collection", "title": "{brand} Collection"},
    {"slug": "{brand_slug}-designs", "title": "{brand} Designs"},
    {"slug": "premium-{brand_slug}", "title": "Premium {brand}"},
    {"slug": "{brand_slug}-in-mumbai", "title": "{brand} in Mumbai"},
    {"slug": "{brand_slug}-in-delhi", "title": "{brand} in Delhi"},
    {"slug": "{brand_slug}-in-jaipur", "title": "{brand} in Jaipur"},
]


def generate_style_page(domain, style, kw, region, style_type):
    """Generate keyword page for style domain."""
    style_slug = style.lower().replace(" ", "-")
    slug = kw["slug"].replace("{style_slug}", style_slug)
    title = kw["title"].replace("{style}", style)
    
    if "wedding" in slug.lower():
        intro = f"Looking for {title.lower()} options? Safawala offers premium {style} for weddings with authentic {region} craftsmanship and 40+ years of expertise."
        features = [f"Wedding {style} specialists", f"Authentic {region} designs", "Premium fabric collection", "Expert tying service", "Pan-India delivery", "Customization available"]
    elif "groom" in slug.lower():
        intro = f"Make your entry royal with {title.lower()}! Safawala's {style} for grooms features premium fabrics and traditional {region} tying techniques."
        features = [f"{style} for grooms", "Royal designer collection", f"Traditional {region} patterns", "Perfect fit guarantee", "Sehra & accessories", "Photo-ready styling"]
    elif "barati" in slug.lower():
        intro = f"Complete your baraat with {title.lower()}. Bulk {style} for all barati members with matching designs and professional on-site tying."
        features = [f"Bulk {style} for baraatis", "Matching designs", "On-site tying service", "Affordable pricing", "Quick service", "Pan-India coverage"]
    elif "design" in slug.lower():
        intro = f"Explore our exclusive {title.lower()} - traditional patterns, contemporary styles, and royal designs from {region} heritage."
        features = [f"Traditional {style} designs", "Contemporary patterns", f"{region} heritage styles", "Royal designs", "Custom creations", "Designer collection"]
    elif "color" in slug.lower():
        intro = f"Discover {title.lower()} - from classic reds and golds to pastels and modern shades. Perfect color for your wedding theme."
        features = ["Classic red & maroon", "Royal gold & cream", "Modern pastels", "Custom color matching", "Wedding theme coordination", "Premium fabric colors"]
    elif "rental" in slug.lower():
        intro = f"Affordable {title.lower()} with professional tying service. Premium quality turbans on rent with all accessories included."
        features = [f"{style} on rent", "Affordable pricing", "Premium quality", "Tying service included", "Clean & sanitized", "Delivery available"]
    elif "premium" in slug.lower() or "best" in slug.lower():
        intro = f"Experience the finest {title.lower()} from Safawala - 40+ years of {region} turban expertise with premium fabrics and royal designs."
        features = [f"Premium {style}", "40+ years expertise", "Royal quality", f"{region} craftsmanship", "Exclusive collection", "VIP service"]
    else:
        intro = f"Professional {title.lower()} by Safawala - expert turban service with 40+ years of {region} heritage."
        features = [f"Professional {style}", "Expert tying", f"{region} heritage", "Premium quality", "Reliable service", "Affordable pricing"]
    
    return f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

export const metadata: Metadata = {{
  title: "{title} | Premium {style} | Safawala",
  description: "{intro[:160]}",
  keywords: "{slug.replace('-', ' ')}, {style.lower()}, {style_slug}, wedding turban, groom safa",
  openGraph: {{
    title: "{title} | Safawala",
    description: "{intro[:100]}",
    url: "https://{domain}/{slug}",
  }},
}}

export default function {slug.replace("-", " ").title().replace(" ", "")}Page() {{
  const pageData = {{
    title: "{title}",
    shortDescription: "{intro}",
    description: "Premium {title.lower()} by Safawala - your trusted turban specialist.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: ["Mumbai", "Delhi", "Jaipur", "Pune", "Ahmedabad", "Surat", "Udaipur", "Jodhpur"],
    keyFeatures: {features},
    seoKeywords: ["{slug.replace('-', ' ')}", "{style.lower()}", "wedding turban"],
    content: `
<h2>Welcome to Safawala - Your Premier {title} Destination</h2>

<p>{intro}</p>

<h2>Why Choose Our {title}?</h2>

<p>Safawala brings 40+ years of <strong>{style.lower()}</strong> expertise to make your special day memorable. Our <strong>{title.lower()}</strong> combines traditional {region} craftsmanship with premium quality.</p>

<h3>Authentic {region} Heritage</h3>
<p>Every <strong>{title.lower()}</strong> reflects the rich cultural heritage of {region} with authentic designs and techniques.</p>

<h3>Premium Quality Materials</h3>
<p>We use only the finest fabrics for our <strong>{title.lower()}</strong> - silk, brocade, and designer materials.</p>

<h3>Expert Turban Specialists</h3>
<p>Our <strong>{title.lower()}</strong> experts create the perfect fit and style for your celebration.</p>

<h2>Our {title} Services</h2>

<h3>Groom {style}</h3>
<p>Premium <strong>{title.lower()}</strong> for grooms with royal designs and expert tying.</p>

<h3>Barati {style}</h3>
<p>Bulk <strong>{title.lower()}</strong> for baraat with matching designs and on-site service.</p>

<h3>Family Packages</h3>
<p>Coordinated <strong>{title.lower()}</strong> for the entire wedding party.</p>

<h2>Book Your {title}</h2>

<p>Ready for premium <strong>{title.lower()}</strong>? Contact Safawala now! WhatsApp: +91 97252 95692</p>
`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''


def generate_service_page(domain, service, kw, focus):
    """Generate keyword page for service domain."""
    service_slug = service.lower().replace(" ", "-")
    slug = kw["slug"].replace("{service_slug}", service_slug)
    title = kw["title"].replace("{service}", service)
    
    if "mumbai" in slug.lower():
        city = "Mumbai"
        intro = f"Looking for {title.lower()}? Safawala provides premium {service.lower()} across Mumbai with 40+ years of expertise."
    elif "delhi" in slug.lower():
        city = "Delhi"
        intro = f"Expert {title.lower()} available! Safawala offers professional {service.lower()} across Delhi NCR."
    elif "jaipur" in slug.lower():
        city = "Jaipur"
        intro = f"Discover {title.lower()} - authentic Rajasthani {service.lower()} with traditional craftsmanship."
    elif "ahmedabad" in slug.lower():
        city = "Ahmedabad"
        intro = f"Premium {title.lower()} by Safawala. Professional {service.lower()} across Ahmedabad."
    elif "pune" in slug.lower():
        city = "Pune"
        intro = f"Best {title.lower()} for weddings. Safawala offers quality {service.lower()} in Pune."
    elif "goa" in slug.lower():
        city = "Goa"
        intro = f"Beach wedding {title.lower()}? Safawala provides destination wedding {service.lower()} in Goa."
    elif "udaipur" in slug.lower():
        city = "Udaipur"
        intro = f"Royal {title.lower()} for palace weddings! Premium {service.lower()} in Udaipur."
    elif "premium" in slug.lower():
        city = "Pan-India"
        intro = f"Premium {service.lower()} by Safawala - the finest quality turban service with 40+ years experience."
    elif "best" in slug.lower():
        city = "Pan-India"
        intro = f"Looking for the best {service.lower()}? Safawala is India's most trusted turban specialist."
    elif "affordable" in slug.lower():
        city = "Pan-India"
        intro = f"Affordable {service.lower()} without compromising quality. Safawala offers competitive pricing."
    else:
        city = "Pan-India"
        intro = f"Professional {service.lower()} by Safawala - 40+ years of expertise across India."
    
    features = [
        f"Expert {service.lower()} in {city}",
        "40+ years of experience",
        "Premium quality guaranteed",
        "Professional on-site service",
        "Trained turban specialists",
        "Affordable pricing",
    ]
    
    return f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

export const metadata: Metadata = {{
  title: "{title} | Premium {service} | Safawala",
  description: "{intro[:160]}",
  keywords: "{slug.replace('-', ' ')}, {service.lower()}, safa service, turban service",
  openGraph: {{
    title: "{title} | Safawala",
    description: "{intro[:100]}",
    url: "https://{domain}/{slug}",
  }},
}}

export default function {slug.replace("-", " ").title().replace(" ", "")}Page() {{
  const pageData = {{
    title: "{title}",
    shortDescription: "{intro}",
    description: "Premium {title.lower()} by Safawala.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: ["Mumbai", "Delhi", "Jaipur", "Pune", "Ahmedabad", "Surat", "Udaipur", "Jodhpur"],
    keyFeatures: {features},
    seoKeywords: ["{slug.replace('-', ' ')}", "{service.lower()}", "turban service"],
    content: `
<h2>Welcome to Safawala - Your Premier {title} Provider</h2>

<p>{intro}</p>

<h2>Why Choose Safawala for {title}?</h2>

<p>Safawala has been the trusted name for <strong>{service.lower()}</strong> for over 40 years. Our <strong>{title.lower()}</strong> combines expertise with premium quality.</p>

<h3>40+ Years of Excellence</h3>
<p>Our <strong>{title.lower()}</strong> expertise comes from four decades of experience.</p>

<h3>Premium Quality</h3>
<p>Every <strong>{title.lower()}</strong> uses premium fabrics and materials.</p>

<h3>Expert Team</h3>
<p>Our <strong>{title.lower()}</strong> team consists of skilled artisans.</p>

<h2>Our {title} Options</h2>

<h3>Groom Service</h3>
<p>Premium <strong>{title.lower()}</strong> for grooms with royal designs.</p>

<h3>Barati Service</h3>
<p>Bulk <strong>{title.lower()}</strong> for baraat with matching designs.</p>

<h3>Family Packages</h3>
<p>Complete <strong>{title.lower()}</strong> for the entire wedding party.</p>

<h2>Book {title}</h2>

<p>Ready for premium <strong>{title.lower()}</strong>? Contact Safawala! WhatsApp: +91 97252 95692</p>
`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''


def generate_brand_page(domain, brand, kw, focus):
    """Generate keyword page for brand domain."""
    brand_slug = brand.lower().replace(" ", "-")
    slug = kw["slug"].replace("{brand_slug}", brand_slug)
    title = kw["title"].replace("{brand}", brand)
    
    if "about" in slug.lower():
        intro = f"About {brand} - India's premier turban specialists with 40+ years of heritage. Learn about our journey and commitment to excellence."
    elif "services" in slug.lower():
        intro = f"{brand} offers comprehensive turban services - groom safa, barati turbans, wedding packages, and more."
    elif "reviews" in slug.lower():
        intro = f"Read {brand} customer reviews - thousands of satisfied clients across India trust us for their special occasions."
    elif "mumbai" in slug.lower():
        intro = f"{brand} Mumbai - premium turban service across Mumbai. Expert safa specialists for weddings and events."
    elif "delhi" in slug.lower():
        intro = f"{brand} Delhi - professional turban service in Delhi NCR. Expert tying for weddings and celebrations."
    elif "jaipur" in slug.lower():
        intro = f"{brand} Jaipur - authentic Rajasthani turban service. Traditional expertise for royal weddings."
    elif "weddings" in slug.lower():
        intro = f"{brand} wedding services - complete turban solutions for grooms, baraatis, and family members."
    elif "contact" in slug.lower():
        intro = f"Contact {brand} for premium turban service. WhatsApp, call, or visit us for bookings and inquiries."
    else:
        intro = f"{brand} - India's most trusted turban specialists with 40+ years of experience."
    
    features = [
        f"{brand} expertise",
        "40+ years heritage",
        "Premium quality",
        "Pan-India service",
        "Expert team",
        "Trusted by thousands",
    ]
    
    return f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

export const metadata: Metadata = {{
  title: "{title} | {brand} - India's Premium Turban Specialists",
  description: "{intro[:160]}",
  keywords: "{slug.replace('-', ' ')}, {brand.lower()}, safa service, turban specialists",
  openGraph: {{
    title: "{title} | {brand}",
    description: "{intro[:100]}",
    url: "https://{domain}/{slug}",
  }},
}}

export default function {slug.replace("-", " ").title().replace(" ", "")}Page() {{
  const pageData = {{
    title: "{title}",
    shortDescription: "{intro}",
    description: "{brand} - India's premier turban specialists.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: ["Mumbai", "Delhi", "Jaipur", "Pune", "Ahmedabad", "Surat", "Udaipur", "Jodhpur"],
    keyFeatures: {features},
    seoKeywords: ["{slug.replace('-', ' ')}", "{brand.lower()}", "turban service"],
    content: `
<h2>{title}</h2>

<p>{intro}</p>

<h2>Why Choose {brand}?</h2>

<p><strong>{brand}</strong> has been the trusted name for turban services for over 40 years. Our expertise spans across India with premium quality guaranteed.</p>

<h3>Heritage & Experience</h3>
<p><strong>{brand}</strong> brings four decades of turban expertise to your special day.</p>

<h3>Premium Quality</h3>
<p>Every <strong>{brand}</strong> service uses premium materials and skilled craftsmanship.</p>

<h3>Pan-India Service</h3>
<p><strong>{brand}</strong> provides service across all major cities in India.</p>

<h2>Our Services</h2>

<h3>Groom Turban</h3>
<p><strong>{brand}</strong> groom turban service with royal designs.</p>

<h3>Barati Service</h3>
<p><strong>{brand}</strong> bulk service for baraatis with matching designs.</p>

<h3>Wedding Packages</h3>
<p>Complete <strong>{brand}</strong> packages for the entire wedding party.</p>

<h2>Contact {brand}</h2>

<p>Ready for premium service? Contact <strong>{brand}</strong>! WhatsApp: +91 97252 95692</p>
`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''


def main():
    """Generate all keyword pages for style, service, brand, and premium domains."""
    base_path = "/Applications/Safawala ALL/domains"
    
    total_pages = 0
    
    print("🚀 Generating keyword pages for non-city domains...")
    print("=" * 60)
    
    # Process style domains
    print("\\n📦 Processing Style Domains...")
    for domain, data in STYLE_DOMAINS.items():
        style = data["style"]
        region = data["region"]
        style_type = data["type"]
        
        domain_path = os.path.join(base_path, domain)
        os.makedirs(domain_path, exist_ok=True)
        
        print(f"   📍 {domain} ({style})...")
        kw_count = 0
        for kw in STYLE_KEYWORDS:
            style_slug = style.lower().replace(" ", "-")
            slug = kw["slug"].replace("{style_slug}", style_slug)
            page_path = os.path.join(domain_path, slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_style_page(domain, style, kw, region, style_type)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            kw_count += 1
        
        print(f"      ✅ {kw_count} pages")
        total_pages += kw_count
    
    # Process service domains
    print("\\n📦 Processing Service Domains...")
    for domain, data in SERVICE_DOMAINS.items():
        service = data["service"]
        focus = data["focus"]
        
        domain_path = os.path.join(base_path, domain)
        os.makedirs(domain_path, exist_ok=True)
        
        print(f"   📍 {domain} ({service})...")
        kw_count = 0
        for kw in SERVICE_KEYWORDS:
            service_slug = service.lower().replace(" ", "-")
            slug = kw["slug"].replace("{service_slug}", service_slug)
            page_path = os.path.join(domain_path, slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_service_page(domain, service, kw, focus)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            kw_count += 1
        
        print(f"      ✅ {kw_count} pages")
        total_pages += kw_count
    
    # Process brand domains
    print("\\n📦 Processing Brand Domains...")
    for domain, data in BRAND_DOMAINS.items():
        brand = data["brand"]
        focus = data["focus"]
        
        domain_path = os.path.join(base_path, domain)
        os.makedirs(domain_path, exist_ok=True)
        
        print(f"   📍 {domain} ({brand})...")
        kw_count = 0
        for kw in BRAND_KEYWORDS:
            brand_slug = brand.lower().replace(" ", "-")
            slug = kw["slug"].replace("{brand_slug}", brand_slug)
            page_path = os.path.join(domain_path, slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_brand_page(domain, brand, kw, focus)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            kw_count += 1
        
        print(f"      ✅ {kw_count} pages")
        total_pages += kw_count
    
    # Process premium domains
    print("\\n📦 Processing Premium Domains...")
    for domain, data in PREMIUM_DOMAINS.items():
        brand = data["brand"]
        focus = data["focus"]
        
        domain_path = os.path.join(base_path, domain)
        os.makedirs(domain_path, exist_ok=True)
        
        print(f"   📍 {domain} ({brand})...")
        kw_count = 0
        for kw in PREMIUM_KEYWORDS:
            brand_slug = brand.lower().replace(" ", "-")
            slug = kw["slug"].replace("{brand_slug}", brand_slug)
            page_path = os.path.join(domain_path, slug)
            os.makedirs(page_path, exist_ok=True)
            
            content = generate_brand_page(domain, brand, kw, focus)
            with open(os.path.join(page_path, "page.tsx"), "w") as f:
                f.write(content)
            kw_count += 1
        
        print(f"      ✅ {kw_count} pages")
        total_pages += kw_count
    
    print("\\n" + "=" * 60)
    style_count = len(STYLE_DOMAINS) * len(STYLE_KEYWORDS)
    service_count = len(SERVICE_DOMAINS) * len(SERVICE_KEYWORDS)
    brand_count = len(BRAND_DOMAINS) * len(BRAND_KEYWORDS)
    premium_count = len(PREMIUM_DOMAINS) * len(PREMIUM_KEYWORDS)
    
    print(f"🎉 SUCCESS! Generated {total_pages} pages!")
    print(f"   • Style domains: {len(STYLE_DOMAINS)} domains × {len(STYLE_KEYWORDS)} keywords = {style_count} pages")
    print(f"   • Service domains: {len(SERVICE_DOMAINS)} domains × {len(SERVICE_KEYWORDS)} keywords = {service_count} pages")
    print(f"   • Brand domains: {len(BRAND_DOMAINS)} domains × {len(BRAND_KEYWORDS)} keywords = {brand_count} pages")
    print(f"   • Premium domains: {len(PREMIUM_DOMAINS)} domains × {len(PREMIUM_KEYWORDS)} keywords = {premium_count} pages")


if __name__ == "__main__":
    main()

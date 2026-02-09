#!/usr/bin/env python3
"""
Batch Content Generator for Safawala Domains
Generates unique SEO-optimized content for all 10,775+ pages across 133 domains
"""

import os
import re
import json
import random
from typing import Dict, List, Tuple

# Configuration
DOMAINS_DIR = "/Applications/Safawala ALL/app/domains"
BATCH_SIZE = 500  # Process 500 pages at a time

# ========== CONTENT DATA ==========

# Service Types and their descriptions
SERVICE_TYPES = {
    "safa": {
        "name": "Safa",
        "description": "traditional Indian wedding turban",
        "synonyms": ["turban", "pagdi", "headpiece"],
        "uses": ["groom wear", "barati attire", "wedding ceremonies", "family functions"],
    },
    "pagdi": {
        "name": "Pagdi",
        "description": "elegant ceremonial headwear",
        "synonyms": ["turban", "safa", "pagri"],
        "uses": ["wedding ceremonies", "groom attire", "traditional events"],
    },
    "turban": {
        "name": "Turban",
        "description": "royal wedding headgear",
        "synonyms": ["safa", "pagdi", "pagri"],
        "uses": ["groom styling", "wedding parties", "cultural celebrations"],
    },
    "feta": {
        "name": "Feta",
        "description": "Maharashtrian ceremonial headwear",
        "synonyms": ["pheta", "mandil", "turban"],
        "uses": ["Marathi weddings", "traditional ceremonies", "groom attire"],
    },
    "sehra": {
        "name": "Sehra",
        "description": "bridal veil for grooms",
        "synonyms": ["face veil", "groom veil", "wedding sehra"],
        "uses": ["baraat procession", "wedding entrance", "groom styling"],
    },
    "pagri": {
        "name": "Pagri",
        "description": "traditional ceremonial turban",
        "synonyms": ["pagdi", "turban", "safa"],
        "uses": ["wedding ceremonies", "groom wear", "family functions"],
    },
}

# Style Types
STYLE_TYPES = {
    "rajasthani": {
        "region": "Rajasthan",
        "features": ["vibrant colors", "traditional patterns", "royal designs"],
        "description": "authentic Rajasthani turban with vibrant colors and traditional patterns",
    },
    "jodhpuri": {
        "region": "Jodhpur",
        "features": ["elegant pleats", "royal heritage", "sophisticated design"],
        "description": "classic Jodhpuri style with elegant pleats and sophisticated craftsmanship",
    },
    "marwadi": {
        "region": "Marwar",
        "features": ["desert heritage", "intricate work", "colorful patterns"],
        "description": "authentic Marwadi style reflecting the rich desert heritage",
    },
    "gujarati": {
        "region": "Gujarat",
        "features": ["vibrant hues", "festive patterns", "comfortable fit"],
        "description": "traditional Gujarati design with vibrant festive patterns",
    },
    "punjabi": {
        "region": "Punjab",
        "features": ["bold colors", "majestic style", "sturdy construction"],
        "description": "majestic Punjabi turban with bold colors and sturdy construction",
    },
    "rajput": {
        "region": "Rajputana",
        "features": ["warrior heritage", "regal design", "prestigious look"],
        "description": "prestigious Rajput turban reflecting warrior heritage and royalty",
    },
    "rajwadi": {
        "region": "Royal courts",
        "features": ["royal craftsmanship", "premium materials", "heritage design"],
        "description": "royal court-inspired design with premium materials and heritage craftsmanship",
    },
    "maharaja": {
        "region": "Royal palaces",
        "features": ["ultimate luxury", "precious embellishments", "king-worthy design"],
        "description": "king-worthy turban with ultimate luxury and precious embellishments",
    },
    "mewadi": {
        "region": "Mewar",
        "features": ["Mewar heritage", "artistic patterns", "traditional elegance"],
        "description": "artistic Mewadi style reflecting Mewar's rich cultural heritage",
    },
    "bandhej": {
        "region": "Rajasthan/Gujarat",
        "features": ["tie-dye technique", "colorful patterns", "traditional craft"],
        "description": "beautiful tie-dye bandhej pattern creating unique colorful designs",
    },
    "leheriya": {
        "region": "Jaipur",
        "features": ["wave patterns", "vibrant stripes", "festive look"],
        "description": "distinctive wave-pattern leheriya style with vibrant diagonal stripes",
    },
}

# Target audiences
AUDIENCES = {
    "groom": {
        "title": "Groom",
        "description": "the main star of the wedding",
        "needs": ["perfect fit", "stunning design", "all-day comfort", "photo-ready look"],
    },
    "dulha": {
        "title": "Dulha (Groom)",
        "description": "the bridegroom",
        "needs": ["royal appearance", "traditional styling", "premium comfort"],
    },
    "barati": {
        "title": "Barati",
        "description": "wedding procession members",
        "needs": ["coordinated look", "bulk availability", "quick tying service"],
    },
    "barat": {
        "title": "Baraat Party",
        "description": "groom's wedding party",
        "needs": ["group coordination", "multiple styles", "efficient service"],
    },
    "family": {
        "title": "Family Members",
        "description": "relatives and family",
        "needs": ["matching styles", "comfortable fit", "elegant appearance"],
    },
}

# Service modifiers
MODIFIERS = {
    "wedding": {"focus": "wedding ceremonies", "quality": "premium wedding-grade"},
    "designer": {"focus": "custom designs", "quality": "designer crafted"},
    "premium": {"focus": "luxury experience", "quality": "highest premium quality"},
    "luxury": {"focus": "ultimate elegance", "quality": "luxurious materials"},
    "royal": {"focus": "royal heritage", "quality": "regal quality"},
    "traditional": {"focus": "authentic traditions", "quality": "time-honored techniques"},
    "custom": {"focus": "personalized design", "quality": "customized to preference"},
    "destination": {"focus": "outstation weddings", "quality": "travel-ready service"},
    "rent": {"focus": "rental options", "quality": "well-maintained rental collection"},
    "rental": {"focus": "hiring service", "quality": "pristine rental pieces"},
}

# City data with unique characteristics
CITY_DATA = {
    "delhi": {"state": "Delhi NCR", "culture": "North Indian", "weddings": "grand Punjabi-style celebrations"},
    "mumbai": {"state": "Maharashtra", "culture": "Coastal", "weddings": "glamorous metropolitan functions"},
    "pune": {"state": "Maharashtra", "culture": "Marathi", "weddings": "traditional Maharashtrian ceremonies"},
    "ahmedabad": {"state": "Gujarat", "culture": "Gujarati", "weddings": "colorful Gujarati festivities"},
    "nagpur": {"state": "Maharashtra", "culture": "Vidarbha", "weddings": "blend of Marathi and Central Indian traditions"},
    "nashik": {"state": "Maharashtra", "culture": "Marathi", "weddings": "traditional ceremonies with modern touch"},
    "surat": {"state": "Gujarat", "culture": "Gujarati", "weddings": "vibrant diamond city celebrations"},
    "vadodara": {"state": "Gujarat", "culture": "Gujarati", "weddings": "royal Baroda-style functions"},
    "baroda": {"state": "Gujarat", "culture": "Gujarati", "weddings": "majestic Gaekwad heritage ceremonies"},
    "jaipur": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "pink city royal weddings"},
    "jodhpur": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "blue city heritage celebrations"},
    "udaipur": {"state": "Rajasthan", "culture": "Mewari", "weddings": "lake city destination weddings"},
    "bikaner": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "traditional desert weddings"},
    "jaisalmer": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "golden city desert ceremonies"},
    "pushkar": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "holy city spiritual unions"},
    "gwalior": {"state": "Madhya Pradesh", "culture": "Bundelkhandi", "weddings": "historic fort city celebrations"},
    "bhopal": {"state": "Madhya Pradesh", "culture": "Central Indian", "weddings": "city of lakes ceremonies"},
    "indore": {"state": "Madhya Pradesh", "culture": "Malwa", "weddings": "commercial capital celebrations"},
    "lucknow": {"state": "Uttar Pradesh", "culture": "Awadhi", "weddings": "nawabi style elegant functions"},
    "kanpur": {"state": "Uttar Pradesh", "culture": "North Indian", "weddings": "industrial city ceremonies"},
    "agra": {"state": "Uttar Pradesh", "culture": "North Indian", "weddings": "Taj city romantic weddings"},
    "varanasi": {"state": "Uttar Pradesh", "culture": "Banarasi", "weddings": "holy city traditional ceremonies"},
    "noida": {"state": "Uttar Pradesh", "culture": "North Indian", "weddings": "modern NCR celebrations"},
    "gurgaon": {"state": "Haryana", "culture": "North Indian", "weddings": "millennium city functions"},
    "chandigarh": {"state": "Punjab/Haryana", "culture": "Punjabi", "weddings": "city beautiful celebrations"},
    "amritsar": {"state": "Punjab", "culture": "Punjabi", "weddings": "holy city grand celebrations"},
    "ludhiana": {"state": "Punjab", "culture": "Punjabi", "weddings": "industrial hub weddings"},
    "patiala": {"state": "Punjab", "culture": "Punjabi", "weddings": "royal Patiala-style functions"},
    "rajkot": {"state": "Gujarat", "culture": "Saurashtra", "weddings": "Kathiawadi celebrations"},
    "kochi": {"state": "Kerala", "culture": "Kerala", "weddings": "coastal Kerala ceremonies"},
    "kerala": {"state": "Kerala", "culture": "South Indian", "weddings": "God's own country celebrations"},
    "goa": {"state": "Goa", "culture": "Konkani", "weddings": "beach destination weddings"},
    "shimla": {"state": "Himachal Pradesh", "culture": "Pahari", "weddings": "hill station celebrations"},
    "mussoorie": {"state": "Uttarakhand", "culture": "Pahari", "weddings": "queen of hills ceremonies"},
    "mount abu": {"state": "Rajasthan", "culture": "Rajasthani", "weddings": "hill station weddings"},
    "jim corbett": {"state": "Uttarakhand", "culture": "North Indian", "weddings": "jungle resort weddings"},
    "dubai": {"state": "UAE", "culture": "NRI", "weddings": "international destination weddings"},
    "lakshadweep": {"state": "Lakshadweep", "culture": "Island", "weddings": "exotic island ceremonies"},
}

# FAQ templates
FAQ_TEMPLATES = [
    {
        "q": "What is the price of {service} in {location}?",
        "a": "Our {service} prices in {location} start from ₹500 for basic options and go up to ₹5000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
    },
    {
        "q": "Do you provide on-site {service} tying service in {location}?",
        "a": "Yes, we provide professional on-site {service} tying service across all {location} areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
    },
    {
        "q": "How early should I book {service} for my {location} wedding?",
        "a": "We recommend booking your {service} at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
    },
    {
        "q": "Can I see {service} designs before booking in {location}?",
        "a": "Absolutely! We can share our complete {service} catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
    },
    {
        "q": "Do you offer {service} for destination weddings outside {location}?",
        "a": "Yes, we provide {service} services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside {location}."
    },
    {
        "q": "What materials are used in your {service} collection?",
        "a": "Our {service} collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
    },
    {
        "q": "How long does {service} tying take?",
        "a": "Professional {service} tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's {service} receives extra attention for the perfect look."
    },
    {
        "q": "Do you provide matching {service} for barati in {location}?",
        "a": "Yes, we specialize in coordinated {service} for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
    },
]

# Content sections
def generate_intro(service: str, location: str, city_info: dict) -> str:
    intros = [
        f"Welcome to Safawala {location} - your premier destination for {service} services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.",
        f"Looking for the finest {service} in {location}? Safawala {location} is the trusted choice of thousands of families for authentic, premium turban services. Experience our 40+ years legacy of excellence.",
        f"Safawala {location} presents the most exquisite {service} collection in the region. Our master craftsmen specialize in creating the perfect turban experience for {city_info.get('weddings', 'traditional weddings')}.",
        f"Discover the art of {service} with Safawala {location}. We combine traditional expertise with contemporary elegance to create stunning turbans that make you the center of attraction.",
    ]
    return random.choice(intros)

def generate_why_choose(service: str, location: str) -> str:
    return f"""
<h2>Why Choose Safawala {location} for {service}?</h2>

<p>When it comes to <strong>{service.lower()}</strong> in {location}, Safawala stands apart as the region's most trusted turban specialists. Here's why families across {location} choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our {service.lower()} expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in {location}.</p>

<h3>Premium Quality Materials</h3>
<p>Every {service.lower()} features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary {service.lower()} tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-{location} Service Coverage</h3>
<p>We provide on-site {service.lower()} services across all {location} areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>
"""

def generate_services_section(service: str, location: str, service_type: dict) -> str:
    return f"""
<h2>Our {service} Services in {location}</h2>

<h3>Groom {service} Specialist</h3>
<p>Make your entrance truly royal with our premium groom {service.lower()}. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati {service} Packages</h3>
<p>Coordinate your baraat with our bulk {service.lower()} packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family {service} Service</h3>
<p>Complete {service.lower()} styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental {service} Options</h3>
<p>Premium {service.lower()} available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer {service}</h3>
<p>Want something unique? Our designer {service.lower()} service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>
"""

def generate_area_section(location: str, areas: List[str]) -> str:
    if not areas:
        return ""
    
    areas_text = ", ".join(areas[:10])
    remaining = len(areas) - 10 if len(areas) > 10 else 0
    
    section = f"""
<h2>Service Areas in {location}</h2>

<p>We provide professional turban services across all {location} areas including {areas_text}"""
    
    if remaining > 0:
        section += f" and {remaining} more localities"
    
    section += f""".</p>

<p>Our {location} team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>
"""
    return section

def generate_booking_section(service: str, location: str) -> str:
    return f"""
<h2>Book Your {service} in {location}</h2>

<p>Ready to experience the finest {service.lower()} service in {location}? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our {location} team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in {location}</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>
"""

def generate_features(service: str, location: str) -> List[str]:
    base_features = [
        f"Expert {service.lower()} specialists with 40+ years experience in {location}",
        f"Authentic traditional tying techniques perfected over generations",
        f"Premium materials - silk, brocade, velvet, and designer fabrics",
        f"Customized designs matching your wedding theme and outfit",
        f"On-site professional service at your {location} venue",
        f"Perfect fit with maximum comfort guaranteed all day",
        f"Competitive pricing for individual and bulk orders",
        f"Complete barati packages with matching coordination",
        f"Emergency last-minute service available in {location}",
        f"Free consultation and design preview via WhatsApp",
    ]
    return random.sample(base_features, min(6, len(base_features)))

def generate_faqs(service: str, location: str) -> List[Dict[str, str]]:
    faqs = []
    selected_templates = random.sample(FAQ_TEMPLATES, min(5, len(FAQ_TEMPLATES)))
    for template in selected_templates:
        faqs.append({
            "question": template["q"].format(service=service, location=location),
            "answer": template["a"].format(service=service, location=location)
        })
    return faqs


def parse_page_slug(slug: str) -> Dict:
    """Parse page slug to extract service type, style, audience, and location"""
    result = {
        "service_type": "safa",
        "style": None,
        "audience": None,
        "modifier": None,
        "location": None,
        "area": None,
        "is_area_page": False,
    }
    
    slug_lower = slug.lower()
    
    # Check for area pages (end with -safa-service or -turban-safa-feta-pagdi-on-rent)
    if slug_lower.endswith("-safa-service") or "-turban-safa-feta-pagdi-on-rent" in slug_lower:
        result["is_area_page"] = True
        # Extract area name
        area = slug_lower.replace("-wedding-turban-safa-feta-pagdi-on-rent", "").replace("-safa-service", "")
        result["area"] = area.replace("-", " ").title()
        return result
    
    # Detect service type
    for svc in ["feta", "sehra", "pagri", "pagdi", "turban", "safa"]:
        if svc in slug_lower:
            result["service_type"] = svc
            break
    
    # Detect style
    for style in STYLE_TYPES.keys():
        if style in slug_lower:
            result["style"] = style
            break
    
    # Detect audience
    for aud in AUDIENCES.keys():
        if aud in slug_lower:
            result["audience"] = aud
            break
    
    # Detect modifiers
    for mod in MODIFIERS.keys():
        if mod in slug_lower:
            result["modifier"] = mod
            break
    
    # Detect location (city name at the end after "-in-")
    if "-in-" in slug_lower:
        location = slug_lower.split("-in-")[-1]
        result["location"] = location.replace("-", " ").title()
    
    return result


def get_city_for_domain(domain: str) -> str:
    """Extract city name from domain"""
    domain_lower = domain.lower()
    
    # City domains (safawala*.com)
    if domain_lower.startswith("safawala"):
        city = domain_lower.replace("safawala", "").replace(".com", "").replace(".in", "")
        if city in ["s", "india", "nearme", ""]:
            return "India"
        return city.title() if city else "India"
    
    # Style/brand domains - return India or specific region
    return "India"


def get_areas_for_city(city: str) -> List[str]:
    """Get area list for a city"""
    # Match with CITY_DATA
    city_lower = city.lower().replace(" ", "")
    
    AREA_MAP = {
        "delhi": ["Connaught Place", "Chandni Chowk", "South Delhi", "Dwarka", "Rohini", "Karol Bagh", "Lajpat Nagar", "Saket", "Greater Kailash", "Vasant Kunj"],
        "mumbai": ["Andheri", "Bandra", "Borivali", "Dadar", "Ghatkopar", "Goregaon", "Juhu", "Kandivali", "Malad", "Powai", "Thane", "Worli"],
        "pune": ["Koregaon Park", "Hadapsar", "Kothrud", "Baner", "Hinjewadi", "Aundh", "Wakad", "Viman Nagar", "Shivaji Nagar", "Camp"],
        "ahmedabad": ["Navrangpura", "Satellite", "Bodakdev", "Vastrapur", "Maninagar", "C.G. Road", "Prahlad Nagar", "Thaltej", "SG Highway", "Bopal"],
        "nagpur": ["Dharampeth", "Sadar", "Civil Lines", "Sitabuldi", "Ramdaspeth", "Dhantoli", "Pratap Nagar", "Manewada"],
        "surat": ["Athwa", "Adajan", "Vesu", "City Light", "Piplod", "Ghod Dod Road", "Ring Road", "Varachha"],
        "vadodara": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Akota", "Karelibaug"],
        "baroda": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Akota", "Karelibaug"],
        "jaipur": ["C-Scheme", "MI Road", "Vaishali Nagar", "Malviya Nagar", "Tonk Road", "Mansarovar", "Raja Park"],
        "jodhpur": ["Ratanada", "Sardarpura", "Paota", "Shastri Nagar", "Clock Tower", "Mandore"],
        "udaipur": ["City Palace Area", "Lake Pichola", "Fateh Sagar", "Hiran Magri", "Pratap Nagar"],
        "lucknow": ["Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar", "Alambagh", "Aminabad"],
        "noida": ["Sector 18", "Sector 62", "Sector 137", "Greater Noida", "Sector 44"],
        "gurgaon": ["DLF Phase 1", "Cyber City", "Golf Course Road", "MG Road", "Sohna Road"],
        "chandigarh": ["Sector 17", "Sector 22", "Sector 35", "Mohali", "Panchkula"],
    }
    
    return AREA_MAP.get(city_lower, ["City Center", "Main Market", "Old Town", "New Town"])


def generate_page_content(domain: str, slug: str) -> Dict:
    """Generate complete page content for a given domain and slug"""
    
    parsed = parse_page_slug(slug)
    city = get_city_for_domain(domain)
    city_info = CITY_DATA.get(city.lower(), {"state": "India", "culture": "Indian", "weddings": "traditional ceremonies"})
    areas = get_areas_for_city(city)
    
    # Build title
    if parsed["is_area_page"]:
        area = parsed["area"]
        title = f"{area} Wedding Turban Safa Feta Pagdi Service"
        service_name = "Wedding Turban"
        location = f"{area}, {city}"
    else:
        service_type = SERVICE_TYPES.get(parsed["service_type"], SERVICE_TYPES["safa"])
        service_name = service_type["name"]
        location = parsed["location"] or city
        
        # Build title with components
        title_parts = []
        if parsed["modifier"]:
            title_parts.append(MODIFIERS[parsed["modifier"]]["quality"].title())
        if parsed["style"]:
            title_parts.append(STYLE_TYPES[parsed["style"]]["region"])
        if parsed["audience"]:
            title_parts.append(AUDIENCES[parsed["audience"]]["title"])
        title_parts.append(service_name)
        title_parts.append(f"in {location}")
        title = " ".join(title_parts)
    
    # Generate content sections
    intro = generate_intro(service_name, location, city_info)
    why_choose = generate_why_choose(service_name, location)
    services = generate_services_section(service_name, location, SERVICE_TYPES.get(parsed["service_type"], SERVICE_TYPES["safa"]))
    area_section = generate_area_section(city, areas) if not parsed["is_area_page"] else ""
    booking = generate_booking_section(service_name, location)
    
    # Short description
    short_desc = f"Looking for premium {service_name.lower()} in {location}? Safawala {city} is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable."
    
    # Full content
    content = f"""
<h2>Welcome to Safawala {city} - Your Premier {title} Destination</h2>

<p>{intro}</p>

{why_choose}

{services}

{area_section}

{booking}

<h2>Our Commitment to Excellence</h2>

<p>At Safawala {city}, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each {service_name.lower()} reflects the joy and grandeur of {city_info.get('weddings', 'your wedding')}.</p>

<p>Contact us today to experience why Safawala is {city}'s most trusted name in wedding turbans.</p>
"""
    
    features = generate_features(service_name, location)
    faqs = generate_faqs(service_name, location)
    
    # SEO keywords
    keywords = [
        f"{slug.replace('-', ' ')}",
        f"{service_name.lower()} {location}",
        f"wedding {service_name.lower()} {location}",
        f"{service_name.lower()} service {location}",
    ]
    
    return {
        "title": title,
        "shortDescription": short_desc,
        "description": f"Premium {service_name.lower()} service in {location} by Safawala {city}.",
        "content": content,
        "keyFeatures": features,
        "faqs": faqs,
        "seoKeywords": keywords,
        "areas": areas,
        "location": location,
        "city": city,
    }


def generate_page_tsx(domain: str, slug: str, page_data: Dict) -> str:
    """Generate the complete page.tsx content"""
    
    city = page_data["city"]
    areas_str = str(page_data["areas"]).replace("'", '"')
    features_str = str(page_data["keyFeatures"]).replace("'", '"')
    faqs_str = json.dumps(page_data["faqs"], indent=2)
    keywords_str = str(page_data["seoKeywords"]).replace("'", '"')
    
    # Escape content for template literal
    content_escaped = page_data["content"].replace("`", "\\`").replace("${", "\\${")
    
    # Create component name from slug
    component_name = "".join(word.capitalize() for word in slug.replace("-", " ").split()) + "Page"
    
    tsx_content = f'''import {{ ServicePageTemplate }} from "@/components/service-page-template"
import type {{ Metadata }} from "next"

const {city.upper().replace(" ", "_").replace("-", "_")}_AREAS = {areas_str}

export const metadata: Metadata = {{
  title: "{page_data['title']} | Safawala {city}",
  description: "{page_data['shortDescription'][:155]}...",
  keywords: "{', '.join(page_data['seoKeywords'])}",
  openGraph: {{
    title: "{page_data['title']} | Safawala {city}",
    description: "{page_data['description']}",
    url: "https://{domain}/{slug}",
    type: "website",
  }},
}}

export default function {component_name}() {{
  const pageData = {{
    title: "{page_data['title']}",
    shortDescription: "{page_data['shortDescription']}",
    description: "{page_data['description']}",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: {city.upper().replace(" ", "_").replace("-", "_")}_AREAS,
    keyFeatures: {features_str},
    seoKeywords: {keywords_str},
    faqs: {faqs_str},
    content: `{content_escaped}`,
  }}

  return <ServicePageTemplate {{...pageData}} />
}}
'''
    return tsx_content


def process_batch(domains: List[str], batch_num: int, progress_callback=None) -> Tuple[int, int]:
    """Process a batch of domains and generate content for all their pages"""
    
    success_count = 0
    error_count = 0
    
    for domain in domains:
        domain_path = os.path.join(DOMAINS_DIR, domain)
        if not os.path.isdir(domain_path):
            continue
        
        # Get all page folders in this domain
        for page_folder in os.listdir(domain_path):
            page_path = os.path.join(domain_path, page_folder)
            
            # Skip non-directories and home page
            if not os.path.isdir(page_path) or page_folder == "page.tsx":
                continue
            
            page_tsx_path = os.path.join(page_path, "page.tsx")
            
            try:
                # Generate content
                page_data = generate_page_content(domain, page_folder)
                tsx_content = generate_page_tsx(domain, page_folder, page_data)
                
                # Write file
                with open(page_tsx_path, "w", encoding="utf-8") as f:
                    f.write(tsx_content)
                
                success_count += 1
                
                if progress_callback and success_count % 100 == 0:
                    progress_callback(f"Processed {success_count} pages...")
                    
            except Exception as e:
                error_count += 1
                print(f"Error processing {domain}/{page_folder}: {e}")
    
    return success_count, error_count


def main():
    """Main function to process all domains in batches"""
    
    # Get all domains
    all_domains = sorted([d for d in os.listdir(DOMAINS_DIR) if os.path.isdir(os.path.join(DOMAINS_DIR, d))])
    
    total_domains = len(all_domains)
    print(f"Found {total_domains} domains to process")
    
    # Process all domains
    total_success = 0
    total_errors = 0
    
    # Split into batches
    batches = [all_domains[i:i+20] for i in range(0, len(all_domains), 20)]
    
    for batch_num, batch in enumerate(batches, 1):
        print(f"\n=== Processing Batch {batch_num}/{len(batches)} ({len(batch)} domains) ===")
        
        success, errors = process_batch(batch, batch_num, lambda msg: print(f"  {msg}"))
        
        total_success += success
        total_errors += errors
        
        print(f"Batch {batch_num} complete: {success} pages, {errors} errors")
    
    print(f"\n=== COMPLETE ===")
    print(f"Total pages updated: {total_success}")
    print(f"Total errors: {total_errors}")


if __name__ == "__main__":
    main()

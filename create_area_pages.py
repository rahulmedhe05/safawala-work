#!/usr/bin/env python3
"""
Script to create area-wise pages for all city domains.
Each city domain will get pages for all areas in that city.
Format: {area}-wedding-turban-safa-feta-pagdi-on-rent/page.tsx
"""

import os

# Base directory for domains
base_dir = "/Applications/Safawala ALL/domains"

# City to domain mapping
city_domain_mapping = {
    "mumbai": ["safawalamumbai.com"],  # If exists
    "navi-mumbai": [],  # Will check if domain exists
    "delhi": ["safawaladelhi.com"],
    "noida": ["safawalanoida.com"],
    "gurgaon": ["safawalagurgaon.com"],
    "surat": ["safawalasurat.com"],
    "vadodara": ["safawalavadodara.com", "safawavadodara.com", "safawalabaroda.com", "safawalabaroda.in", "barodasafawala.com", "barodasafawala.in"],
    "pune": ["safawalapune.com"],
    "nagpur": ["safawalanagpur.com"],
    "nashik": ["safawalanashik.com"],
    "rajkot": ["safawalarajkot.com"],
    "ahmedabad": ["safawalaahmedabad.com"],
    "indore": ["safawalaindore.com"],
    "bhopal": ["safawalabhopal.com"],
    "lucknow": ["safawalalucknow.com"],
    "kanpur": ["safawalakanpur.com"],
    "agra": ["safawalaagra.com"],
    "varanasi": ["safawalavaranasi.com"],
    "amritsar": ["safawalaamritsar.com"],
    "chandigarh": ["safawalachandigarh.com"],
    "jodhpur": ["safawalajodhpur.com"],
    "jaipur": [],  # Add if domain exists
    "udaipur": ["safawalaudaipur.com"],
    "bikaner": ["safawalabikaner.com"],
    "jaisalmer": ["safawalajaisalmer.com"],
    "pushkar": ["safawalapushkar.com"],
    "mount-abu": ["safawalamountabu.com"],
    "gwalior": ["safawalagwalior.com"],
    "hyderabad": [],  # Add if domain exists
    "bangalore": [],  # Add if domain exists  
    "chennai": [],  # Add if domain exists
    "kolkata": [],  # Add if domain exists
}

# Areas for each city
city_areas = {
    "mumbai": [
        "andheri", "bandra", "borivali", "chembur", "dadar", "goregaon", "juhu",
        "kandivali", "kurla", "malad", "mulund", "powai", "thane", "worli",
        "santacruz", "vile-parle", "khar", "ghatkopar", "vikhroli", "andheri-east",
        "andheri-west", "bandra-east", "bandra-west", "lower-parel", "colaba"
    ],
    "navi-mumbai": [
        "vashi", "nerul", "kharghar", "panvel", "belapur", "airoli", "kopar-khairane",
        "sanpada", "turbhe", "ghansoli", "seawoods", "ulwe", "kamothe", "taloja", "kalamboli"
    ],
    "delhi": [
        "chandni-chowk", "connaught-place", "dwarka", "karol-bagh", "lajpat-nagar",
        "rohini", "south-delhi", "pitampura", "janakpuri", "rajouri-garden", "saket",
        "greater-kailash", "defence-colony", "vasant-kunj", "hauz-khas", "green-park",
        "malviya-nagar", "nehru-place", "preet-vihar", "shahdara", "uttam-nagar",
        "tilak-nagar", "paschim-vihar", "punjabi-bagh", "model-town", "civil-lines",
        "mayur-vihar", "east-of-kailash", "kalkaji", "safdarjung"
    ],
    "noida": [
        "sector-18", "sector-62", "sector-63", "sector-15", "sector-16", "sector-50",
        "sector-104", "sector-137", "sector-76", "sector-78", "sector-93", "sector-100",
        "sector-120", "sector-121", "sector-122", "sector-128", "sector-135",
        "sector-142", "sector-143", "greater-noida"
    ],
    "gurgaon": [
        "mg-road", "dlf-phase-1", "dlf-phase-2", "dlf-phase-3", "dlf-phase-4",
        "dlf-phase-5", "sohna-road", "golf-course-road", "sector-14", "sector-15-gurgaon",
        "sector-17-gurgaon", "sector-29", "sector-43", "sector-44", "sector-45",
        "sector-49", "sector-56", "sector-57", "palam-vihar", "udyog-vihar"
    ],
    "surat": [
        "adajan", "althan", "amroli", "athwa", "bamroli", "bhatar", "bhestan", "bil",
        "canal-road", "chhani", "city-light", "dandia-bazaar", "dumas", "ghod-dod-road",
        "godadara", "hazira", "jahangirpura", "kadodara", "kamrej", "kapodra",
        "katargam", "kosad", "laxmipura", "limbayat", "magdalla", "majura-gate",
        "nanpura", "new-vip-road", "olpad", "pal", "palsana", "pandesara", "panigate",
        "piplod", "rander", "ring-road", "sachin", "salabatpura", "sarthana",
        "textile-market", "udhna", "utran", "varachha", "vesu", "vip-road"
    ],
    "vadodara": [
        "akota", "alkapuri", "atladara", "bajwa", "bhayli", "dabhoi", "diwalipura",
        "ellora-park", "fatehgunj", "gorwa", "gotri", "halol", "harni", "jetalpur",
        "kalali", "karelibaug", "karjan", "karodia", "makarpura", "maneja", "manjalpur",
        "mandvi", "nandesari", "nizampura", "old-padra-road", "padra", "parle-point",
        "pratapnagar", "productivity-road", "race-course", "raopura", "sama", "savli",
        "sayajigunj", "sevasi", "sindhrot", "subhanpura", "tandalja", "tarsali", "waghodia"
    ],
    "pune": [
        "akurdi", "aundh", "balewadi", "baner", "bavdhan", "bhosari", "bibwewadi",
        "camp", "chakan", "deccan", "dhanori", "erandwane", "fc-road", "hadapsar",
        "hinjewadi", "kalyani-nagar", "katraj", "kharadi", "kondhwa", "koregaon-park",
        "kothrud", "magarpatta", "manjri", "mundhwa", "nibm", "nigdi", "pashan",
        "paud-road", "pimple-saudagar", "pimpri-chinchwad", "pune-station", "ravet",
        "sadashiv-peth", "shivaji-nagar", "sinhagad-road", "swargate", "viman-nagar",
        "wagholi", "wakad", "yerwada"
    ],
    "nagpur": [
        "dharampeth", "sitabuldi", "sadar", "civil-lines-nagpur", "lakadganj",
        "ganeshpeth", "itwari", "mahal", "ramdaspeth", "pratap-nagar-nagpur",
        "manewada", "hingna", "wadi-nagpur", "nandanvan", "mankapur", "jaripatka",
        "wardhaman-nagar", "khamla", "byramji-town", "hanuman-nagar", "gokulpeth",
        "laxmi-nagar", "ajni", "sakkardara", "reshimbagh"
    ],
    "nashik": [
        "gangapur-road", "college-road", "panchavati", "nashik-road", "dwarka-nashik",
        "cidco", "satpur", "ambad", "indira-nagar-nashik", "pathardi-phata", "mhasrul",
        "deolali", "ashok-stambh", "sharanpur", "jail-road", "canada-corner", "shalimar",
        "mahatma-nagar", "govind-nagar", "tidke-colony"
    ],
    "rajkot": [
        "race-course-rajkot", "kalawad-road", "university-road", "yagnik-road",
        "150-feet-ring-road", "astron-chowk", "bhaktinagar", "jubilee-garden",
        "gondal-road", "kothariya-road", "mavdi", "pedak-road", "raiya-road",
        "sadhu-vaswani-road", "trikon-baug", "rajkot-junction", "aji-dam-garden",
        "sorathiyawadi", "nana-mava-road", "kalavad-road"
    ],
    "ahmedabad": [
        "cg-road", "ashram-road", "sg-highway", "prahlad-nagar", "satellite",
        "bodakdev", "vastrapur", "navrangpura", "ellis-bridge", "paldi", "maninagar",
        "ghatlodia", "thaltej", "chandkheda", "bopal", "science-city", "nikol",
        "naroda", "vastral", "odhav", "naranpura", "shahibaug", "usmanpura",
        "ambawadi", "sabarmati", "memnagar", "gurukul", "drive-in-road",
        "jodhpur-ahmedabad", "vejalpur"
    ],
    "indore": [
        "vijay-nagar", "palasia", "rajwada", "mg-road-indore", "sapna-sangeeta",
        "new-palasia", "ab-road", "rau", "mhow", "pithampur", "bhawarkua",
        "sarafa-bazaar", "bhanwar-kuwa", "sudama-nagar", "annapurna", "scheme-no-54",
        "scheme-no-78", "silicon-city", "nipania", "tilak-nagar-indore"
    ],
    "bhopal": [
        "mp-nagar", "arera-colony", "tt-nagar", "new-market", "kolar-road",
        "hoshangabad-road", "bairagarh", "habibganj", "misrod", "ayodhya-nagar",
        "shahpura", "bittan-market", "malviya-nagar-bhopal", "govindpura",
        "ashoka-garden", "trilanga", "danish-kunj", "katara-hills", "koh-e-fiza",
        "bag-mughaliya"
    ],
    "lucknow": [
        "hazratganj", "gomti-nagar", "aliganj", "indira-nagar", "mahanagar",
        "aminabad", "charbagh", "alambagh", "rajajipuram", "vikas-nagar", "ashiyana",
        "jankipuram", "faizabad-road", "sitapur-road", "kanpur-road", "lda-colony",
        "sushant-golf-city", "vrindavan-yojna", "triveni-nagar", "husainabad",
        "chowk", "naka", "saadatganj", "kaiserbagh", "aashiana"
    ],
    "kanpur": [
        "civil-lines-kanpur", "swaroop-nagar", "kakadeo", "kidwai-nagar", "harsh-nagar",
        "shastri-nagar-kanpur", "govind-nagar-kanpur", "arya-nagar", "kalyanpur",
        "panki", "nawabganj", "mall-road-kanpur", "meston-road", "collectorganj",
        "generalganj", "birhana-road", "the-mall", "tilak-nagar-kanpur",
        "yashoda-nagar", "azad-nagar"
    ],
    "agra": [
        "taj-ganj", "sadar-bazaar", "kamla-nagar", "shahganj", "dayalbagh", "sikandra",
        "fatehabad-road", "bye-pass-road", "rakabganj", "belanganj", "sanjay-place",
        "raja-ki-mandi", "idgah", "bodla", "khandari", "shastripuram", "nehru-nagar",
        "vaishali-nagar-agra", "crossing-republik", "trans-yamuna"
    ],
    "varanasi": [
        "godowlia", "assi-ghat", "dashashwamedh", "lanka", "bhelupur", "shivpur",
        "pandeypur", "cantonment", "bhu", "sigra", "mahmoorganj", "kabir-chaura",
        "ramnagar", "sarnath", "maldahiya", "nadesar", "gurubagh", "durgakund",
        "ravindrapuri", "shivala"
    ],
    "amritsar": [
        "hall-bazaar", "lawrence-road", "ranjit-avenue", "majitha-road",
        "mall-road-amritsar", "golden-temple", "white-avenue", "queen-road",
        "crystal-chowk", "green-avenue", "katra-jaimal-singh", "model-town-amritsar",
        "rani-ka-bagh", "sultanwind", "batala-road"
    ],
    "chandigarh": [
        "sector-17-chandigarh", "sector-22", "sector-35", "sector-43-chandigarh",
        "sector-44-chandigarh", "sector-8", "sector-9", "sector-10", "sector-11",
        "sector-15-chandigarh", "sector-19", "sector-20", "sector-26", "sector-27",
        "sector-32", "sector-34", "manimajra", "panchkula", "mohali", "zirakpur"
    ],
    "jodhpur": [
        "paota", "sardarpura", "ratanada", "shastri-nagar-jodhpur", "chopasni-road",
        "residency-road", "pal-road", "airport-road", "basni", "pali-road", "mandore",
        "kaylana", "pratap-nagar-jodhpur", "shyam-nagar", "nai-sarak", "sojati-gate",
        "jalori-gate", "ghantaghar", "tripolia-bazaar", "clock-tower"
    ],
    "jaipur": [
        "malviya-nagar-jaipur", "vaishali-nagar-jaipur", "mansarovar", "raja-park",
        "c-scheme", "mi-road", "tonk-road", "ajmer-road", "jhotwara", "sanganer",
        "sitapura", "sodala", "civil-lines-jaipur", "bani-park", "tilak-nagar-jaipur",
        "vidhyadhar-nagar", "murlipura", "jagatpura", "nirman-nagar",
        "shyam-nagar-jaipur", "bapu-nagar", "gopalpura", "durgapura",
        "pratap-nagar-jaipur", "lal-kothi", "adarsh-nagar", "hasanpura",
        "johari-bazaar", "tripolia-bazaar-jaipur", "hawa-mahal"
    ],
    "udaipur": [
        "fateh-sagar", "sukhadia-circle", "hiran-magri", "pratap-nagar-udaipur",
        "chetak-circle", "saheli-marg", "ashok-nagar-udaipur", "madhuban",
        "sector-14-udaipur", "sector-11-udaipur", "shobhagpura", "bhuwana",
        "goverdhan-vilas", "ambamata", "bedla"
    ],
    "bikaner": [
        "station-road", "rani-bazar", "kote-gate", "ganga-shahar-road", "pawan-puri",
        "jai-narayan-vyas-colony", "sagar-road", "karni-nagar", "lalgarh", "sujangarh",
        "nokha-road", "gangashahar"
    ],
    "jaisalmer": [
        "fort-area", "hanuman-circle", "gadisar-road", "sam-road", "bada-bagh",
        "amar-sagar", "patwon-ki-haveli", "gandhi-chowk", "jethwai-road", "barmer-road"
    ],
    "pushkar": [
        "main-bazaar", "varaha-ghat", "brahma-temple", "pushkar-lake",
        "ajmer-road-pushkar", "ganahera", "budha-pushkar", "motisar"
    ],
    "mount-abu": [
        "nakki-lake", "main-market", "dilwara-road", "sunset-point", "guru-shikhar",
        "polo-ground", "mall-road-mountabu", "achalgarh"
    ],
    "gwalior": [
        "city-center", "lashkar", "morar", "thatipur", "gola-ka-mandir", "jayendraganj",
        "bahodapur", "hazira-gwalior", "phool-bagh", "birla-nagar", "naya-bazar",
        "daulatganj", "maharaj-bada", "padav", "kampoo"
    ],
    "hyderabad": [
        "banjara-hills", "jubilee-hills", "madhapur", "hitech-city", "gachibowli",
        "kondapur", "kukatpally", "ameerpet", "begumpet", "secunderabad", "abids",
        "dilsukhnagar", "lb-nagar", "uppal", "miyapur", "manikonda", "kompally",
        "attapur", "shamshabad", "mehdipatnam", "tolichowki", "somajiguda",
        "panjagutta", "sr-nagar", "nampally"
    ],
    "bangalore": [
        "koramangala", "indiranagar", "jayanagar", "whitefield", "electronic-city",
        "marathahalli", "hsr-layout", "btm-layout", "mg-road-bangalore", "brigade-road",
        "church-street", "malleshwaram", "rajajinagar", "basavanagudi", "jp-nagar",
        "bannerghatta-road", "hebbal", "yelahanka", "kr-puram", "sarjapur-road",
        "bellandur", "domlur", "richmond-town", "frazer-town", "rt-nagar"
    ],
    "chennai": [
        "t-nagar", "adyar", "velachery", "anna-nagar", "egmore", "nungambakkam",
        "mylapore", "besant-nagar", "guindy", "porur", "vadapalani", "ambattur",
        "chromepet", "tambaram", "sholinganallur", "omr", "ecr", "kilpauk",
        "kodambakkam", "ashok-nagar-chennai"
    ],
    "kolkata": [
        "park-street", "salt-lake", "new-town", "ballygunge", "gariahat", "south-city",
        "alipore", "behala", "howrah", "dumdum", "lake-town", "jadavpur", "garia",
        "barasat", "newmarket", "esplanade", "sealdah", "rajarhat", "bidhannagar",
        "tollygunge"
    ],
}

# Page template
area_page_template = '''export default function Page() {{
  return (
    <div>
      <h1>{area_title} Wedding Turban Safa Feta Pagdi on Rent in {city_name}</h1>
      {{/* Content coming soon */}}
    </div>
  )
}}
'''

def format_area_title(area):
    """Convert area slug to title case"""
    return area.replace("-", " ").title()

def get_city_name_from_domain(domain):
    """Extract city name from domain"""
    # Remove common prefixes/suffixes
    name = domain.replace("safawala", "").replace(".com", "").replace(".in", "")
    name = name.replace("baroda", "vadodara")  # Normalize baroda to vadodara
    return name.title()

def main():
    total_pages = 0
    domains_processed = 0
    
    # Get all existing domain folders
    existing_domains = set(os.listdir(base_dir))
    
    for city, domains in city_domain_mapping.items():
        city_name = city.replace("-", " ").title()
        areas = city_areas.get(city, [])
        
        if not areas:
            print(f"No areas defined for {city}, skipping...")
            continue
        
        for domain in domains:
            if domain not in existing_domains:
                print(f"Domain folder {domain} does not exist, skipping...")
                continue
            
            domain_path = os.path.join(base_dir, domain)
            domains_processed += 1
            
            print(f"\nProcessing: {domain} ({len(areas)} areas)")
            
            for area in areas:
                # Create area folder with format: {area}-wedding-turban-safa-feta-pagdi-on-rent
                area_folder = f"{area}-wedding-turban-safa-feta-pagdi-on-rent"
                area_path = os.path.join(domain_path, area_folder)
                
                # Create directory if it doesn't exist
                os.makedirs(area_path, exist_ok=True)
                
                # Create page.tsx
                page_path = os.path.join(area_path, "page.tsx")
                area_title = format_area_title(area)
                
                with open(page_path, 'w') as f:
                    f.write(area_page_template.format(
                        area_title=area_title,
                        city_name=city_name
                    ))
                
                total_pages += 1
    
    print(f"\n{'='*50}")
    print(f"COMPLETE!")
    print(f"Domains processed: {domains_processed}")
    print(f"Total area pages created: {total_pages}")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()

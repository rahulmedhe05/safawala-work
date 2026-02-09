#!/usr/bin/env python3
import os

keywords = [
    "safa", "turban", "pagdi", "safa-for-groom", "safa-pagdi", "pagadi",
    "pagdi-for-wedding", "pagri", "wedding-safa", "pagdi-for-groom",
    "safa-for-men", "wedding-pagri", "safa-design", "wedding-turban",
    "wedding-turban-for-groom", "wedding-turban-for-barati", "mens-wedding-turban",
    "wedding-turban-for-groom-online", "jodhpuri-safa", "safa-garments",
    "dulha-pagdi", "safa-for-barati", "dulha-safa", "dulhe-ki-pagdi",
    "jodhpuri-pagdi", "marriage-pagdi", "rajput-pagdi", "groom-turban",
    "jodhpuri-safa-for-groom", "paghdi", "groom-feta", "jodhpuri-pagri",
    "jodhpuri-safa-design", "rajputi-safa-design", "ready-made-turban",
    "rajwadi-pagdi", "rajwadi-safa", "rajasthani-safa", "rajasthani-wedding-safa",
    "wedding-safa-for-barati", "jodhpuri-safa-for-wedding", "wedding-safa-for-groom",
    "safa-design-for-barati", "barati-safa-on-rent", "barati-safa-online",
    "safa-on-rent-near-me", "safa-on-rent", "wedding-safa-on-rent",
    "safa-tying-service", "vadodara-groom-pagdi", "indian-dulha-turban",
    "marathi-pheta", "groom-safa", "pagdi-for-marriage", "sehra-rental",
    "royal-wedding-turban-for-groom", "hand-tied-safa-rental-near-me",
    "customized-sehra-for-baraat", "premium-pagdi-with-kalgi",
    "heritage-feta-turban-hire", "buy-wedding-safa", "wedding-safa-for-rent",
    "safa-shop", "wedding-pagdi-shop", "groom-turban-shop", "wedding-safa-bandhej",
    "pagdi-bandhne-wala", "professional-safa-tying", "groom-safa-bandhej",
    "royal-wedding-safa", "designer-wedding-safa", "luxury-wedding-turban",
    "traditional-wedding-safa", "custom-wedding-safa", "rajputi-safa",
    "marwadi-safa", "gujarati-pagdi", "punjabi-turban", "maharaja-safa",
    "dulha-pagri", "groom-pagdi", "groom-pagri", "wedding-pagdi", "wedding-feta",
    "sehra", "groom-sehra", "dulhe-ka-sehra", "sehra-for-groom", "dulha-sehra",
    "sehra-dulha", "feta-for-groom", "sehrabandi", "wedding-turban-draping",
    "wedding-safa-draping", "luxury-wedding-turban-for-groom",
    "designer-wedding-turban", "royal-groom-turban-for-destination-wedding",
    "destination-wedding-turban", "hand-tied-turban-for-international-wedding",
    "traditional-indian-wedding-turban-for-groom",
    "premium-wedding-safa-for-international-groom",
    "custom-wedding-turban-for-overseas-weddings",
    "wedding-pagdi-for-destination-wedding",
    "barati-safa-tying-for-international-wedding"
]

base_dir = "/Applications/Safawala ALL/domains"

home_template = '''export default function HomePage() {{
  return (
    <div>
      <h1>Welcome to {domain}</h1>
      {{/* Content coming soon */}}
    </div>
  )
}}
'''

keyword_template = '''export default function Page() {{
  return (
    <div>
      <h1>{keyword}</h1>
      {{/* Content coming soon */}}
    </div>
  )
}}
'''

# Get all domain folders
domains = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]

total_pages = 0
for domain in domains:
    domain_path = os.path.join(base_dir, domain)
    print(f"Processing: {domain}")
    
    # Create home page
    home_page_path = os.path.join(domain_path, "page.tsx")
    with open(home_page_path, 'w') as f:
        f.write(home_template.format(domain=domain))
    total_pages += 1
    
    # Create keyword pages
    for keyword in keywords:
        keyword_dir = os.path.join(domain_path, keyword)
        os.makedirs(keyword_dir, exist_ok=True)
        
        keyword_page_path = os.path.join(keyword_dir, "page.tsx")
        with open(keyword_page_path, 'w') as f:
            f.write(keyword_template.format(keyword=keyword))
        total_pages += 1

print(f"\nDone! Created {total_pages} pages across {len(domains)} domains.")
print(f"Each domain has 1 home page + {len(keywords)} keyword pages = {1 + len(keywords)} pages")

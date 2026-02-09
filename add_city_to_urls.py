#!/usr/bin/env python3
import os
import shutil
import re

# City extraction patterns from domain names
city_patterns = {
    'safawalaahmedabad': 'ahmedabad',
    'safawaladelhi': 'delhi',
    'safawalapune': 'pune',
    'safawalanagpur': 'nagpur',
    'safawalanashik': 'nashik',
    'safawalasurat': 'surat',
    'safawalagwalior': 'gwalior',
    'safawalabhopal': 'bhopal',
    'safawalaindore': 'indore',
    'safawalanoida': 'noida',
    'safawalakanpur': 'kanpur',
    'safawalaagra': 'agra',
    'safawalarajkot': 'rajkot',
    'safawalavaranasi': 'varanasi',
    'safawalalucknow': 'lucknow',
    'safawalaamritsar': 'amritsar',
    'safawalachandigarh': 'chandigarh',
    'safawalagurgaon': 'gurgaon',
    'safawalamountabu': 'mount-abu',
    'safawalapushkar': 'pushkar',
    'safawalajaisalmer': 'jaisalmer',
    'safawalaudaipur': 'udaipur',
    'safawalajodhpur': 'jodhpur',
    'safawalabikaner': 'bikaner',
    'safawalabaroda': 'baroda',
    'safawalavadodara': 'vadodara',
    'safawavadodara': 'vadodara',
    'barodasafawala': 'baroda',
    'safawalapatiala': 'patiala',
    'safawalaludhiana': 'ludhiana',
    'safawalamussoorie': 'mussoorie',
    'safawalajimcorbett': 'jim-corbett',
    'safawalakochi': 'kochi',
    'safawalakerala': 'kerala',
    'safawalakshadweep': 'lakshadweep',
    'safawalashimla': 'shimla',
    'safawaladubai': 'dubai',
    'safawalagoa': 'goa',
}

# Generic domains without city - will use "india" or domain-specific region
generic_domains = {
    'rajputisafa': 'rajasthan',
    'punjabipagdi': 'punjab',
    'rajasthanipagdi': 'rajasthan',
    'gujaratipagdi': 'gujarat',
    'maharajasafa': 'india',
    'weddingturban': 'india',
    'weddingsafa': 'india',
    'saafa': 'india',
    'saffa': 'india',
    'paghdi': 'india',
    'pagri': 'india',
    'pagdi': 'india',
    'bollywoodsafawala': 'india',
    'topsafapagdifetaturban': 'india',
    'srgrooms': 'india',
    'sharmajisafawala': 'india',
    'sharmajisafawale': 'india',
    'safapagdi': 'india',
    'safagroom': 'india',
    'rajwadisafa': 'rajasthan',
    'pagdiforgroom': 'india',
    'pachrangisafa': 'rajasthan',
    'groompagri': 'india',
    'bandhejsafa': 'rajasthan',
    'mysafawale': 'india',
    'srgroomscreations': 'india',
    'wowgrooms': 'india',
    'safadesign': 'india',
    'bestsafapagdifetaturban': 'india',
    'leheriyasafa': 'rajasthan',
    'pagdirajasthani': 'rajasthan',
    'fetaforwedding': 'india',
    'safajodhpuri': 'jodhpur',
    'safaforgroom': 'india',
    'safawalanearme': 'india',
}

def extract_city_from_domain(domain):
    """Extract city/region from domain name"""
    # Remove TLD
    domain_base = domain.rsplit('.', 1)[0]
    
    # Check city patterns first
    for pattern, city in city_patterns.items():
        if pattern in domain_base:
            return city
    
    # Check generic patterns
    for pattern, region in generic_domains.items():
        if pattern in domain_base:
            return region
    
    # Default fallback
    return 'india'

def rename_keyword_folders_with_city(base_dir):
    """Rename all keyword folders to include city suffix"""
    domains = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]
    
    total_renamed = 0
    
    for domain in sorted(domains):
        domain_path = os.path.join(base_dir, domain)
        city = extract_city_from_domain(domain)
        
        print(f"\nProcessing: {domain} → city: {city}")
        
        # Get all subdirectories (keyword folders)
        items = os.listdir(domain_path)
        keyword_folders = [f for f in items if os.path.isdir(os.path.join(domain_path, f))]
        
        for folder in keyword_folders:
            old_path = os.path.join(domain_path, folder)
            
            # Skip if already has city suffix
            if folder.endswith(f'-in-{city}'):
                continue
            
            new_folder = f"{folder}-in-{city}"
            new_path = os.path.join(domain_path, new_folder)
            
            # Rename folder
            shutil.move(old_path, new_path)
            
            # Update page.tsx content
            page_path = os.path.join(new_path, 'page.tsx')
            if os.path.exists(page_path):
                with open(page_path, 'r') as f:
                    content = f.read()
                
                # Update h1 tag
                updated_content = content.replace(
                    f'<h1>{folder}</h1>',
                    f'<h1>{new_folder}</h1>'
                )
                
                with open(page_path, 'w') as f:
                    f.write(updated_content)
            
            total_renamed += 1
    
    print(f"\n\nDone! Renamed {total_renamed} keyword folders with city suffixes.")

if __name__ == "__main__":
    base_dir = "/Applications/Safawala ALL/domains"
    rename_keyword_folders_with_city(base_dir)

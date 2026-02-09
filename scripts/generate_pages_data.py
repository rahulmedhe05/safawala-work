#!/usr/bin/env python3
"""
Generate TypeScript data file mapping all domains to their pages
"""
import os
import json

domains_dir = "/Applications/Safawala ALL/app/domains"
output = {}

for domain in sorted(os.listdir(domains_dir)):
    domain_path = os.path.join(domains_dir, domain)
    if os.path.isdir(domain_path):
        pages = []
        for item in sorted(os.listdir(domain_path)):
            item_path = os.path.join(domain_path, item)
            if os.path.isdir(item_path) and item != "page.tsx":
                pages.append(item)
        output[domain] = pages

# Generate TypeScript file
ts_content = '''// Auto-generated file mapping all domains to their pages
// Total domains: {} 
// Total pages: {}

export const DOMAIN_PAGES: Record<string, string[]> = {}
'''.format(
    len(output),
    sum(len(pages) for pages in output.values()),
    json.dumps(output, indent=2)
)

with open("/Applications/Safawala ALL/lib/domain-pages-data.ts", "w") as f:
    f.write(ts_content)

print(f"Generated domain pages data: {len(output)} domains, {sum(len(pages) for pages in output.values())} total pages")

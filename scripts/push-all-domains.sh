#!/bin/bash

# Automated script to push each domain as separate project
# Each domain gets pushed to its own repo under mysafawale-ai

SOURCE_DIR="/Applications/Safawala ALL"
OUTPUT_DIR="/Applications/Safawala-Projects"
DOMAINS_DIR="$SOURCE_DIR/app/domains"
LOG_FILE="$SOURCE_DIR/push-log.txt"

echo "Starting push automation at $(date)" > "$LOG_FILE"

# Create output directory
mkdir -p "$OUTPUT_DIR"

count=0
total=$(ls -1 "$DOMAINS_DIR" | grep -v ".DS_Store" | wc -l | tr -d ' ')

for domain in $(ls -1 "$DOMAINS_DIR" | grep -v ".DS_Store"); do
    count=$((count + 1))
    
    # Convert domain.com to domain-com format for repo name
    repo_name=$(echo "$domain" | sed 's/\./-/g')
    project_dir="$OUTPUT_DIR/$domain"
    
    echo ""
    echo "=========================================="
    echo "[$count/$total] Processing: $domain"
    echo "=========================================="
    
    # Skip if already pushed (check for .git/PUSHED marker)
    if [ -f "$project_dir/.pushed" ]; then
        echo "⏭ Already pushed, skipping..."
        echo "⏭ Skipped (already pushed): $domain" >> "$LOG_FILE"
        continue
    fi
    
    # Create project directory
    echo "📁 Creating project folder..."
    rm -rf "$project_dir"
    mkdir -p "$project_dir"
    
    # Copy package.json and config files
    echo "📄 Copying config files..."
    cp "$SOURCE_DIR/package.json" "$project_dir/"
    cp "$SOURCE_DIR/next.config.mjs" "$project_dir/"
    cp "$SOURCE_DIR/tsconfig.json" "$project_dir/"
    cp "$SOURCE_DIR/postcss.config.mjs" "$project_dir/"
    cp "$SOURCE_DIR/next-env.d.ts" "$project_dir/"
    cp "$SOURCE_DIR/components.json" "$project_dir/" 2>/dev/null
    cp "$SOURCE_DIR/vercel.json" "$project_dir/" 2>/dev/null
    cp "$SOURCE_DIR/.gitignore" "$project_dir/" 2>/dev/null
    
    # Copy components folder
    echo "📦 Copying components..."
    cp -r "$SOURCE_DIR/components" "$project_dir/"
    
    # Copy lib folder
    echo "📚 Copying lib..."
    cp -r "$SOURCE_DIR/lib" "$project_dir/"
    
    # Copy hooks folder
    echo "🪝 Copying hooks..."
    cp -r "$SOURCE_DIR/hooks" "$project_dir/" 2>/dev/null
    
    # Copy public folder (excluding large videos)
    echo "🖼 Copying public assets (excluding videos)..."
    mkdir -p "$project_dir/public"
    # Copy all files except .mp4 videos
    find "$SOURCE_DIR/public" -maxdepth 1 -type f ! -name "*.mp4" -exec cp {} "$project_dir/public/" \;
    
    # Copy styles folder
    echo "🎨 Copying styles..."
    cp -r "$SOURCE_DIR/styles" "$project_dir/" 2>/dev/null
    
    # Create app directory structure
    echo "📱 Setting up app directory..."
    mkdir -p "$project_dir/app"
    
    # Copy main app files
    cp "$SOURCE_DIR/app/globals.css" "$project_dir/app/"
    cp "$SOURCE_DIR/app/layout.tsx" "$project_dir/app/"
    cp "$SOURCE_DIR/app/robots.ts" "$project_dir/app/" 2>/dev/null
    cp "$SOURCE_DIR/app/sitemap.ts" "$project_dir/app/" 2>/dev/null
    
    # Generate domain-specific content
    echo "🏠 Creating custom home page for $domain..."
    
    # Extract location from domain name
    location="India"
    brand_name="Safawala"
    domain_type="service"
    
    # City-based domains
    case "$domain" in
        safawala*.com|safawala*.in)
            city=$(echo "$domain" | sed 's/safawala//;s/\.com//;s/\.in//')
            if [ -n "$city" ] && [ "$city" != "" ]; then
                location=$(echo "$city" | sed 's/.*/\u&/')  # Capitalize first letter
                brand_name="Safawala $location"
                domain_type="city"
            fi
            ;;
        *delhi*) location="Delhi"; brand_name="Safawala Delhi"; domain_type="city";;
        *mumbai*) location="Mumbai"; brand_name="Safawala Mumbai"; domain_type="city";;
        *jaipur*) location="Jaipur"; brand_name="Safawala Jaipur"; domain_type="city";;
        *jodhpur*) location="Jodhpur"; brand_name="Safawala Jodhpur"; domain_type="city";;
        *udaipur*) location="Udaipur"; brand_name="Safawala Udaipur"; domain_type="city";;
        *ahmedabad*) location="Ahmedabad"; brand_name="Safawala Ahmedabad"; domain_type="city";;
        *pune*) location="Pune"; brand_name="Safawala Pune"; domain_type="city";;
        *goa*) location="Goa"; brand_name="Safawala Goa"; domain_type="city";;
        *surat*) location="Surat"; brand_name="Safawala Surat"; domain_type="city";;
        *baroda*|*vadodara*) location="Vadodara"; brand_name="Safawala Vadodara"; domain_type="city";;
        *bandhej*) location="Rajasthan"; brand_name="Bandhej Safa"; domain_type="product";;
        *jodhpuri*) location="Jodhpur"; brand_name="Jodhpuri Safa"; domain_type="product";;
        *rajasthani*|*rajputi*|*rajwadi*) location="Rajasthan"; brand_name="Rajasthani Safa"; domain_type="product";;
        *marwari*|*mewadi*) location="Rajasthan"; brand_name="Marwari Safa"; domain_type="product";;
        *punjabi*) location="Punjab"; brand_name="Punjabi Pagdi"; domain_type="product";;
        *leheriya*) location="Rajasthan"; brand_name="Leheriya Safa"; domain_type="product";;
        *pachrangi*) location="Rajasthan"; brand_name="Pachrangi Safa"; domain_type="product";;
        *groom*) location="India"; brand_name="Groom Safa"; domain_type="product";;
        *dulha*) location="India"; brand_name="Dulha Safa"; domain_type="product";;
        *wedding*) location="India"; brand_name="Wedding Safa"; domain_type="product";;
        *barati*|*barat*) location="India"; brand_name="Barati Safa"; domain_type="product";;
        *destination*) location="India"; brand_name="Destination Wedding Safa"; domain_type="service";;
        *corporate*|*event*) location="India"; brand_name="Event Turban"; domain_type="service";;
        *pagdi*|*pagri*|*paghdi*) location="India"; brand_name="Pagdi"; domain_type="product";;
        *turban*) location="India"; brand_name="Turban"; domain_type="product";;
        *sehra*) location="India"; brand_name="Sehra"; domain_type="product";;
        *feta*) location="India"; brand_name="Feta"; domain_type="product";;
        *rental*|*rent*) location="India"; brand_name="Safa Rental"; domain_type="service";;
        *tying*|*binding*|*bandhi*) location="India"; brand_name="Safa Tying Service"; domain_type="service";;
        *royal*|*luxury*|*maharaja*) location="India"; brand_name="Royal Safa"; domain_type="product";;
        *designer*) location="India"; brand_name="Designer Safa"; domain_type="product";;
    esac
    
    # Create custom page.tsx with domain prop for footer
    cat > "$project_dir/app/page.tsx" << PAGEEOF
import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: $domain
// Brand: $brand_name
// Location: $location

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="$location" />
      <DynamicAboutSection location="$location" />
      <DynamicContactForm location="$location" domain="$domain" />
      <GallerySection />
      <DynamicServicesSection location="$location" domain="$domain" />
      <DynamicFooter location="$location" domain="$domain" />
      <WhatsAppFloat />
    </main>
  )
}
PAGEEOF

    # Copy only this domain's pages
    echo "🌐 Copying domain pages for $domain..."
    mkdir -p "$project_dir/app/domains"
    cp -r "$DOMAINS_DIR/$domain" "$project_dir/app/domains/"
    
    # Update domain-pages-data.ts to only include this domain
    echo "⚙️ Creating domain-specific pages data..."
    
    # Use Python for reliable JSON-like extraction
    python3 << PYEOF > "$project_dir/lib/domain-pages-data.ts"
import re

domain = "$domain"
source_file = "$SOURCE_DIR/lib/domain-pages-data.ts"

# Read the original file
with open(source_file, 'r') as f:
    content = f.read()

# Find the pages array for this domain
pattern = r'"' + re.escape(domain) + r'":\s*\[([\s\S]*?)\]'
match = re.search(pattern, content)

if match:
    pages_content = match.group(1).strip()
    # Clean up the pages content
    pages = []
    for line in pages_content.split('\n'):
        line = line.strip().strip(',')
        if line.startswith('"') and line.endswith('"'):
            pages.append(line)
    
    print("// Domain-specific pages data for " + domain)
    print("// Auto-generated for single-domain deployment")
    print("// Total pages: " + str(len(pages)))
    print()
    print("export const DOMAIN_PAGES: Record<string, string[]> = {")
    print('  "' + domain + '": [')
    for page in pages:
        print("    " + page + ",")
    print("  ],")
    print("};")
else:
    print("// No pages found for " + domain)
    print("export const DOMAIN_PAGES: Record<string, string[]> = {")
    print('  "' + domain + '": [],')
    print("};")
PYEOF
    
    # Generate custom layout.tsx with domain-specific SEO
    echo "📝 Creating custom layout.tsx..."
    cat > "$project_dir/app/layout.tsx" << 'LAYOUTEOF'
import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
LAYOUTEOF

    # Add dynamic metadata
    cat >> "$project_dir/app/layout.tsx" << METAEOF
  title: "Premium Wedding Turbans in $location | Safawala $location Safa & Pagdi Services",
  description:
    "Safawala $location - $location's most trusted wedding turban specialists. Expert safa, pagdi, feta & sehra tying. Master specialists, same-day service. Free consultation. Book now: +91-9725295692",
  keywords:
    "wedding turban $location, safa $location, pagdi tying service $location, groom turban $location, wedding safa $location, turban tying $location, best turban service $location, safa tying service $location, pagdi design $location, feta tying $location, sehra service $location",
  authors: [{ name: "Safawala $location" }],
  creator: "Safawala $location",
  publisher: "Safawala $location",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  metadataBase: new URL("https://$domain"),
  alternates: {
    canonical: "https://$domain",
  },
  openGraph: {
    title: "Premium Wedding Turbans in $location | Safawala $location",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Master specialists, same-day service.",
    url: "https://$domain",
    siteName: "Safawala $location",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala $location - Wedding Turbans | Expert Safa & Pagdi Service",
    description: "40+ years of heritage. Master specialists, same-day service, premium quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Wedding Services",
}
METAEOF

    # Add layout component
    cat >> "$project_dir/app/layout.tsx" << 'LAYOUTENDEOF'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/image.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png?v=1" />
        <meta name="theme-color" content="#8b1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
LAYOUTENDEOF
    
    # Create README
    cat > "$project_dir/README.md" << READMEEOF
# $domain

Safa & Turban Services Website

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Deployment

Deploy on Vercel with domain: $domain
READMEEOF

    # Initialize git and push
    echo "🚀 Initializing git and pushing..."
    cd "$project_dir"
    git init
    git add .
    git commit -m "Initial commit for $domain"
    git branch -M main
    git remote add origin "https://github.com/mysafawale-ai/$repo_name.git"
    
    if git push -u origin main --force; then
        echo "✓ Successfully pushed: $domain" | tee -a "$LOG_FILE"
        touch "$project_dir/.pushed"
    else
        echo "✗ Failed to push: $domain" | tee -a "$LOG_FILE"
    fi
    
    cd "$SOURCE_DIR"
    
    echo "Completed $domain"
    
done

echo ""
echo "=========================================="
echo "Completed at $(date)" | tee -a "$LOG_FILE"
echo "Total domains processed: $count"
echo "Log saved to: $LOG_FILE"
echo "Projects saved to: $OUTPUT_DIR"
echo "=========================================="

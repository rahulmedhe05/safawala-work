#!/usr/bin/env node

/**
 * Project Generator Script
 * Generates 73 separate project folders for each domain
 * Run: node scripts/generate-projects.js
 */

const fs = require('fs');
const path = require('path');
const { DOMAINS } = require('./domain-config');

const SOURCE_DIR = process.cwd();
const OUTPUT_DIR = path.join(path.dirname(SOURCE_DIR), 'SAFAWALA_PROJECTS');

// Files/folders to copy from source
const COPY_ITEMS = [
  'app',
  'components',
  'hooks',
  'lib',
  'public',
  'styles',
  'next.config.mjs',
  'package.json',
  'postcss.config.mjs',
  'tsconfig.json',
  'components.json',
  'next-env.d.ts',
];

// Files/folders to exclude
const EXCLUDE_ITEMS = [
  'node_modules',
  '.git',
  '.next',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  '.vercel',
];

function copyRecursiveSync(src, dest, excludeList = []) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (!exists) return;
  
  const basename = path.basename(src);
  if (excludeList.includes(basename)) return;
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        excludeList
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function generateLayoutFile(domain) {
  const { domain: domainName, brand, type, city, state, focus, country = 'India' } = domain;
  const isCity = type === 'city';
  
  const title = isCity 
    ? `${brand} | Premium Wedding Safa & Turban in ${city}`
    : `${brand} | Premium Wedding Safa & Turban Services`;
  
  const description = isCity
    ? `${brand} - ${city}'s finest wedding safa specialists. Authentic Rajasthani safa designs, traditional pagdi, expert tying service in ${city}, ${state}. Premium quality. Book now: +91-9725295692`
    : `${brand} - India's finest ${focus || 'wedding safa'} specialists. Authentic designs, traditional craftsmanship, expert service. Premium quality, Pan-India delivery. Book now: +91-9725295692`;
  
  const keywords = isCity
    ? `safa ${city}, pagdi ${city}, turban ${city}, wedding safa ${city}, ${city} safa, ${city} pagdi, safawala ${city}, safa rental ${city}, safa tying ${city}, groom safa ${city}, ${state} safa, wedding turban ${city}`
    : `${focus}, ${brand.toLowerCase()}, wedding safa, wedding turban, rajasthani safa, traditional pagdi, groom safa, safa rental, safa tying, premium safa, designer safa`;

  return `import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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

// Local Business Schema
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "${brand}",
  "description": "${description.replace(/"/g, '\\"')}",
  "url": "https://${domainName}",
  "telephone": "+91-9725295692",
  "email": "info@${domainName}",
  "address": {
    "@type": "PostalAddress",
    ${isCity ? `"addressLocality": "${city}",
    "addressRegion": "${state}",` : ''}
    "addressCountry": "${country}"
  },
  "geo": {
    "@type": "GeoCoordinates"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "priceRange": "₹₹₹",
  "servesCuisine": "Wedding Services",
  "sameAs": [
    "https://www.facebook.com/safawala",
    "https://www.instagram.com/safawala",
    "https://www.youtube.com/@safawala"
  ]
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${brand}",
  "url": "https://${domainName}",
  "logo": "https://${domainName}/SAFAWALA%20LOGO.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9725295692",
    "contactType": "customer service"
  }
};

export const metadata: Metadata = {
  title: "${title}",
  description: "${description.replace(/"/g, '\\"')}",
  keywords: "${keywords}",
  authors: [{ name: "${brand}" }],
  creator: "${brand}",
  publisher: "${brand}",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://${domainName}"),
  alternates: {
    canonical: "https://${domainName}",
  },
  openGraph: {
    title: "${title}",
    description: "${description.replace(/"/g, '\\"')}",
    url: "https://${domainName}",
    siteName: "${brand}",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://${domainName}/SAFAWALA%20LOGO.png",
        width: 1200,
        height: 630,
        alt: "${brand} - Premium Wedding Safa & Turban",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description.replace(/"/g, '\\"')}",
    images: ["https://${domainName}/SAFAWALA%20LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Wedding Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </head>
      <body className={\`\${playfairDisplay.variable} \${inter.variable} antialiased\`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
`;
}

function generatePageFile(domain) {
  const { brand, type, city, state, focus } = domain;
  const isCity = type === 'city';
  
  const heroTitle = isCity 
    ? `Premium Wedding Safa &amp; Turban in ${city}`
    : `Premium ${focus ? focus.charAt(0).toUpperCase() + focus.slice(1) : 'Wedding Safa'} Services`;
  
  const heroSubtitle = isCity
    ? `${city}'s most trusted safa specialists for royal weddings`
    : `India's finest ${focus || 'wedding safa'} specialists`;

  return `import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider 
        customTitle="${heroTitle}"
        customSubtitle="${heroSubtitle}"
      />
      <AboutSection />
      <ContactForm />
      <GallerySection />
      <ServicesSection />
      <Footer hideMainNavigation={true} />
      <WhatsAppFloat />
    </main>
  )
}
`;
}

function generateRobotsFile(domain) {
  return `import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://${domain.domain}/sitemap.xml",
    host: "https://${domain.domain}",
  }
}
`;
}

function generateSitemapFile(domain) {
  return `import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://${domain.domain}"
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
`;
}

function generateVercelJson(domain) {
  return JSON.stringify({
    "regions": ["bom1"],
    "framework": "nextjs"
  }, null, 2);
}

function generatePackageJson(domain, originalPackageJson) {
  const pkg = JSON.parse(originalPackageJson);
  const folderName = domain.domain.replace(/\./g, '-');
  pkg.name = folderName;
  return JSON.stringify(pkg, null, 2);
}

function generateProject(domain, index) {
  const folderName = domain.domain.replace(/\./g, '-');
  const projectDir = path.join(OUTPUT_DIR, folderName);
  
  console.log(`[${index + 1}/${DOMAINS.length}] Generating: ${folderName}`);
  
  // Create project directory
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  
  // Copy base files
  COPY_ITEMS.forEach(item => {
    const srcPath = path.join(SOURCE_DIR, item);
    const destPath = path.join(projectDir, item);
    
    if (fs.existsSync(srcPath)) {
      copyRecursiveSync(srcPath, destPath, EXCLUDE_ITEMS);
    }
  });
  
  // Generate custom layout.tsx
  const layoutPath = path.join(projectDir, 'app', 'layout.tsx');
  fs.writeFileSync(layoutPath, generateLayoutFile(domain));
  
  // Generate custom page.tsx  
  const pagePath = path.join(projectDir, 'app', 'page.tsx');
  fs.writeFileSync(pagePath, generatePageFile(domain));
  
  // Generate robots.ts
  const robotsPath = path.join(projectDir, 'app', 'robots.ts');
  fs.writeFileSync(robotsPath, generateRobotsFile(domain));
  
  // Generate sitemap.ts
  const sitemapPath = path.join(projectDir, 'app', 'sitemap.ts');
  fs.writeFileSync(sitemapPath, generateSitemapFile(domain));
  
  // Generate vercel.json
  const vercelPath = path.join(projectDir, 'vercel.json');
  fs.writeFileSync(vercelPath, generateVercelJson(domain));
  
  // Update package.json with new name
  const packageJsonPath = path.join(projectDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const originalPkg = fs.readFileSync(packageJsonPath, 'utf8');
    fs.writeFileSync(packageJsonPath, generatePackageJson(domain, originalPkg));
  }
  
  // Remove city-specific subfolders (they're for main site SEO, not needed per domain)
  const appDir = path.join(projectDir, 'app');
  const dirsToRemove = fs.readdirSync(appDir)
    .filter(item => {
      const fullPath = path.join(appDir, item);
      return fs.statSync(fullPath).isDirectory() && 
             (item.startsWith('rajputi-safa-in-') || item.startsWith('rajputi-safa-design-in-'));
    });
  
  dirsToRemove.forEach(dir => {
    const dirPath = path.join(appDir, dir);
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`  Removed: ${dir}`);
  });
  
  return folderName;
}

function main() {
  console.log('='.repeat(60));
  console.log('SAFAWALA PROJECT GENERATOR');
  console.log('='.repeat(60));
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Domains: ${DOMAINS.length}`);
  console.log('='.repeat(60));
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const generated = [];
  
  DOMAINS.forEach((domain, index) => {
    try {
      const folderName = generateProject(domain, index);
      generated.push({ domain: domain.domain, folder: folderName, status: 'success' });
    } catch (error) {
      console.error(`  ERROR: ${error.message}`);
      generated.push({ domain: domain.domain, folder: null, status: 'error', error: error.message });
    }
  });
  
  // Generate summary
  console.log('\n' + '='.repeat(60));
  console.log('GENERATION COMPLETE');
  console.log('='.repeat(60));
  
  const successful = generated.filter(g => g.status === 'success');
  const failed = generated.filter(g => g.status === 'error');
  
  console.log(`✓ Successful: ${successful.length}`);
  console.log(`✗ Failed: ${failed.length}`);
  console.log(`\nProjects created in: ${OUTPUT_DIR}`);
  
  if (failed.length > 0) {
    console.log('\nFailed domains:');
    failed.forEach(f => console.log(`  - ${f.domain}: ${f.error}`));
  }
  
  // Create index file with all domains
  const indexContent = `# Safawala Projects Index
Generated: ${new Date().toISOString()}

## Total Projects: ${successful.length}

| # | Domain | Folder |
|---|--------|--------|
${successful.map((g, i) => `| ${i + 1} | ${g.domain} | ${g.folder} |`).join('\n')}
`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'INDEX.md'), indexContent);
  console.log('\nIndex file created: INDEX.md');
}

main();

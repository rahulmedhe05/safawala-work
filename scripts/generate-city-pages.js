#!/usr/bin/env node

/**
 * Multi-City Page Generator for Safawala Domains
 * 
 * This script generates all the service pages for a given city.
 * Usage: node scripts/generate-city-pages.js <city-slug>
 * Example: node scripts/generate-city-pages.js delhi
 */

const fs = require('fs');
const path = require('path');

// City Configurations
const CITY_CONFIGS = {
  delhi: {
    cityName: "Delhi",
    citySlug: "delhi",
    domain: "safawaladelhi.com",
    phone: "+91-9725295692",
    email: "info@safawaladelhi.com",
    address: "Shop No. 12, Chandni Chowk, Near Red Fort, Delhi - 110006",
    state: "Delhi",
    country: "India",
    areas: [
      "Connaught Place", "Chandni Chowk", "Karol Bagh", "Lajpat Nagar", "South Extension",
      "Greater Kailash", "Hauz Khas", "Vasant Kunj", "Dwarka", "Rohini",
      "Pitampura", "Janakpuri", "Rajouri Garden", "Punjabi Bagh", "Model Town",
      "Defence Colony", "Nehru Place", "Saket", "Green Park", "Safdarjung",
      "Chanakyapuri", "Civil Lines", "Paharganj", "Daryaganj", "Kashmere Gate",
      "Shahdara", "Preet Vihar", "Mayur Vihar", "Noida", "Gurgaon"
    ],
  },
  jaipur: {
    cityName: "Jaipur",
    citySlug: "jaipur", 
    domain: "safawalajaipur.com",
    phone: "+91-9725295692",
    email: "info@safawalajaipur.com",
    address: "Shop No. 8, Johari Bazaar, Near Hawa Mahal, Jaipur - 302001",
    state: "Rajasthan",
    country: "India",
    areas: [
      "Johari Bazaar", "MI Road", "C-Scheme", "Malviya Nagar", "Vaishali Nagar",
      "Mansarovar", "Raja Park", "Tonk Road", "Ajmer Road", "Sirsi Road",
      "Sanganer", "Jagatpura", "Pratap Nagar", "Jhotwara", "Vidyadhar Nagar",
      "Bani Park", "Adarsh Nagar", "Shyam Nagar", "Sodala", "Civil Lines"
    ],
  },
  ahmedabad: {
    cityName: "Ahmedabad",
    citySlug: "ahmedabad",
    domain: "safawalaahmedabad.com",
    phone: "+91-9725295692",
    email: "info@safawalaahmedabad.com",
    address: "Shop No. 22, Law Garden Road, Navrangpura, Ahmedabad - 380009",
    state: "Gujarat",
    country: "India",
    areas: [
      "Navrangpura", "CG Road", "Satellite", "Prahlad Nagar", "SG Highway",
      "Bodakdev", "Vastrapur", "Thaltej", "Ambawadi", "Paldi",
      "Ellis Bridge", "Ashram Road", "Maninagar", "Ghatlodia", "Chandkheda",
      "Bopal", "South Bopal", "Shilaj", "Gurukul", "Drive In Road"
    ],
  },
  dubai: {
    cityName: "Dubai",
    citySlug: "dubai",
    domain: "safawaladubai.com",
    phone: "+971-50-1234567",
    email: "info@safawaladubai.com",
    address: "Shop No. 25, Meena Bazaar, Bur Dubai, Dubai, UAE",
    state: "Dubai",
    country: "UAE",
    areas: [
      "Bur Dubai", "Deira", "Karama", "Downtown Dubai", "Dubai Marina",
      "JBR", "Palm Jumeirah", "Business Bay", "DIFC", "JLT",
      "Al Barsha", "Silicon Oasis", "Sports City", "Motor City", "Discovery Gardens",
      "International City", "Al Qusais", "Mirdif", "Al Nahda", "Jumeirah"
    ],
  },
};

// Service Keywords to generate pages for
const SERVICE_KEYWORDS = [
  { slug: "safa", title: "Safa" },
  { slug: "pagdi", title: "Pagdi" },
  { slug: "pagri", title: "Pagri" },
  { slug: "turban", title: "Turban" },
  { slug: "feta", title: "Feta" },
  { slug: "sehra", title: "Sehra" },
  { slug: "dulha-safa", title: "Dulha Safa" },
  { slug: "dulha-pagdi", title: "Dulha Pagdi" },
  { slug: "dulha-sehra", title: "Dulha Sehra" },
  { slug: "groom-turban", title: "Groom Turban" },
  { slug: "groom-safa", title: "Groom Safa" },
  { slug: "wedding-safa", title: "Wedding Safa" },
  { slug: "wedding-turban", title: "Wedding Turban" },
  { slug: "wedding-pagdi", title: "Wedding Pagdi" },
  { slug: "barati-safa", title: "Barati Safa" },
  { slug: "baarat-safa", title: "Baarat Safa" },
  { slug: "rajasthani-safa", title: "Rajasthani Safa" },
  { slug: "jodhpuri-safa", title: "Jodhpuri Safa" },
  { slug: "marwari-safa", title: "Marwari Safa" },
  { slug: "rajputi-safa", title: "Rajputi Safa" },
  { slug: "designer-safa", title: "Designer Safa" },
  { slug: "safa-on-rent", title: "Safa on Rent" },
  { slug: "turban-on-rent", title: "Turban on Rent" },
  { slug: "red-safa", title: "Red Safa" },
  { slug: "golden-safa", title: "Golden Safa" },
  { slug: "silk-safa", title: "Silk Safa" },
  { slug: "bandhej-safa", title: "Bandhej Safa" },
];

function generatePageContent(keyword, cityConfig) {
  const { cityName, citySlug, domain, phone, email, address, areas } = cityConfig;
  const pageTitle = `${keyword.title} in ${cityName}`;
  const pageSlug = `${keyword.slug}-in-${citySlug}`;
  
  const areasString = areas.map(a => `"${a}"`).join(', ');
  
  return `import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const ${citySlug.toUpperCase().replace(/-/g, '_')}_AREAS = [
  ${areasString}
]

export const metadata: Metadata = {
  title: "${pageTitle} | ${keyword.title} Service | Safawala ${cityName}",
  description: "Best ${keyword.title.toLowerCase()} in ${cityName} by Safawala ${cityName}. Premium ${keyword.title.toLowerCase()} with 20+ years experience. Traditional ${keyword.title.toLowerCase()} service. Book now!",
  keywords: "${keyword.slug}-in-${citySlug}, ${keyword.slug} ${citySlug}, ${keyword.title.toLowerCase()} ${citySlug}, ${keyword.title.toLowerCase()} service ${citySlug}",
  openGraph: {
    title: "${pageTitle} | ${keyword.title} Service | Safawala ${cityName}",
    description: "Premium ${keyword.title.toLowerCase()} in ${cityName} for weddings. 20+ years experience. All ${cityName} areas covered.",
    url: "https://${domain}/${pageSlug}",
    type: "website",
  },
}

export default function ${keyword.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}In${cityName.replace(/\s/g, '')}() {
  const pageData = {
    title: "${pageTitle}",
    shortDescription: "Looking for the perfect ${keyword.title.toLowerCase()} in ${cityName}? Safawala ${cityName} specializes in premium ${keyword.title.toLowerCase()} services with 20+ years of expertise. Our master craftsmen provide stunning ${keyword.title.toLowerCase()} that adds elegance to your wedding across all ${cityName} areas.",
    description: "Premium ${keyword.title.toLowerCase()} in ${cityName} service by Safawala ${cityName} - ${cityName}'s most trusted ${keyword.title.toLowerCase()} specialists.",
    mainImage: "/1.png",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp", "/14-3.webp"],
    areas: ${citySlug.toUpperCase().replace(/-/g, '_')}_AREAS,
    keyFeatures: [
      "Premium ${keyword.title.toLowerCase()} in ${cityName}",
      "Traditional ${keyword.title.toLowerCase()} designs",
      "Designer ${keyword.title.toLowerCase()} collection",
      "Professional tying service",
      "Perfect ${keyword.title.toLowerCase()} styling",
      "Affordable ${keyword.title.toLowerCase()} packages",
      "On-site ${keyword.title.toLowerCase()} service",
      "Wide variety of ${keyword.title.toLowerCase()} styles",
    ],
    seoKeywords: ["${keyword.slug} in ${citySlug}", "${keyword.slug} ${citySlug}", "${keyword.title.toLowerCase()} ${citySlug}", "${keyword.title.toLowerCase()} service ${citySlug}"],
    content: \`
<h2>Safawala ${cityName} - Your Premier ${pageTitle} Specialists</h2>

<p>Searching for the perfect <strong>${keyword.title.toLowerCase()} in ${cityName}</strong>? Safawala ${cityName} is your ultimate destination for premium ${keyword.title.toLowerCase()} services. With over 20+ years of expertise in traditional turban artistry, we've adorned thousands of clients with magnificent <strong>${keyword.title.toLowerCase()}</strong> across ${cityName}. Our designs honor tradition while embracing elegance.</p>

<p>A <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> is an essential accessory for the complete wedding look. At Safawala ${cityName}, we understand the significance of ${keyword.title.toLowerCase()} in Indian ceremonies. Every <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> we provide reflects dignity, tradition, and celebration.</p>

<h2>The Significance of ${keyword.title}</h2>

<p>The <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> carries deep cultural significance in Indian weddings. It symbolizes honor, respect, and the joy of celebration. In ${cityName}'s diverse wedding traditions, <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> remains an essential element of wedding attire.</p>

<h3>Why ${keyword.title} is Essential</h3>

<ul>
<li>Traditional ceremonial significance</li>
<li>Creates distinguished appearance</li>
<li>Photography-perfect accessory</li>
<li>Completes wedding attire</li>
<li>Honors cultural traditions</li>
</ul>

<h2>Our ${keyword.title} Services</h2>

<h3>${keyword.title} Collection</h3>

<ul>
<li>Traditional ${keyword.title.toLowerCase()} designs</li>
<li>Premium silk ${keyword.title.toLowerCase()}</li>
<li>Designer embroidered ${keyword.title.toLowerCase()}</li>
<li>Contemporary ${keyword.title.toLowerCase()}</li>
<li>Custom ${keyword.title.toLowerCase()} creations</li>
</ul>

<h3>${keyword.title} Styles</h3>

<ul>
<li><strong>Traditional ${keyword.title}:</strong> Classic elegance</li>
<li><strong>Rajasthani ${keyword.title}:</strong> Royal styling</li>
<li><strong>Designer ${keyword.title}:</strong> Modern aesthetics</li>
<li><strong>Premium ${keyword.title}:</strong> Luxury options</li>
<li><strong>Custom ${keyword.title}:</strong> Personalized designs</li>
</ul>

<h2>Why Choose Us for ${keyword.title}?</h2>

<ul>
<li><strong>20+ Years Expertise:</strong> Decades of artistry</li>
<li><strong>Premium Collection:</strong> Finest ${keyword.title.toLowerCase()}</li>
<li><strong>Quality Materials:</strong> Premium fabrics</li>
<li><strong>All ${cityName} Coverage:</strong> Service everywhere</li>
<li><strong>Expert Styling:</strong> Professional tying</li>
<li><strong>Value Packages:</strong> Competitive pricing</li>
<li><strong>Reliability:</strong> Punctual service</li>
</ul>

<h2>Book Your ${keyword.title}</h2>

<p>Make your wedding day perfect with Safawala ${cityName}'s premium <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> service:</p>

<p><strong>Phone:</strong> ${phone}<br/>
<strong>Email:</strong> ${email}<br/>
<strong>Visit:</strong> ${address}</p>

<p>Choose Safawala ${cityName} for the <strong>${keyword.title.toLowerCase()} in ${cityName}</strong> that honors your wedding celebration!</p>
    \`,
    faqs: [
      {
        question: "What is the cost of ${keyword.title.toLowerCase()} in ${cityName}?",
        answer: "${keyword.title} in ${cityName} starts from ₹800 for standard options and goes up to ₹5,000+ for premium designer options.",
      },
      {
        question: "What ${keyword.title.toLowerCase()} styles do you offer?",
        answer: "We offer traditional, Rajasthani, designer, premium, and custom ${keyword.title.toLowerCase()} styles.",
      },
      {
        question: "Is tying service included?",
        answer: "Yes, professional tying is included with ${keyword.title.toLowerCase()} in ${cityName} service.",
      },
      {
        question: "Can you match with my outfit?",
        answer: "Yes, we ensure perfect coordination of ${keyword.title.toLowerCase()} with your wedding attire.",
      },
      {
        question: "Do you offer rental?",
        answer: "Yes, we offer both purchase and rental for ${keyword.title.toLowerCase()} in ${cityName}.",
      },
      {
        question: "How early should I book?",
        answer: "Book ${keyword.title.toLowerCase()} in ${cityName} at least 2-3 weeks in advance.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
`;
}

function generateHomePage(cityConfig) {
  const { cityName, citySlug, domain, phone, email, address, areas } = cityConfig;
  const areasString = areas.map(a => `"${a}"`).join(', ');
  
  return `import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const ${citySlug.toUpperCase().replace(/-/g, '_')}_AREAS = [
  ${areasString}
]

export const metadata: Metadata = {
  title: "Safawala ${cityName} | Premium Safa & Turban Services | Wedding Safa in ${cityName}",
  description: "Best safa and turban services in ${cityName} by Safawala ${cityName}. Premium wedding safa, dulha safa, barati turban with 20+ years experience. All ${cityName} areas covered. Book now!",
  keywords: "safa ${citySlug}, turban ${citySlug}, wedding safa ${citySlug}, dulha safa ${citySlug}, pagdi ${citySlug}, safawala ${citySlug}",
  openGraph: {
    title: "Safawala ${cityName} | Premium Safa & Turban Services",
    description: "Premium safa and turban services in ${cityName} for weddings. 20+ years experience. All ${cityName} areas covered.",
    url: "https://${domain}",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <AboutSection cityName="${cityName}" />
      <ServicesSection cityName="${cityName}" areas={${citySlug.toUpperCase().replace(/-/g, '_')}_AREAS} />
      <GallerySection />
      <ContactForm 
        phone="${phone}"
        email="${email}"
        address="${address}"
      />
      <Footer cityName="${cityName}" />
    </main>
  )
}
`;
}

// Main execution
const citySlug = process.argv[2];

if (!citySlug) {
  console.log('Usage: node generate-city-pages.js <city-slug>');
  console.log('Available cities:', Object.keys(CITY_CONFIGS).join(', '));
  process.exit(1);
}

const cityConfig = CITY_CONFIGS[citySlug];

if (!cityConfig) {
  console.log(`City "${citySlug}" not found.`);
  console.log('Available cities:', Object.keys(CITY_CONFIGS).join(', '));
  process.exit(1);
}

console.log(`Generating pages for ${cityConfig.cityName}...`);

// Create output directory
const outputDir = path.join(__dirname, '..', 'generated', citySlug);
fs.mkdirSync(outputDir, { recursive: true });

// Generate home page
const homePagePath = path.join(outputDir, 'page.tsx');
fs.writeFileSync(homePagePath, generateHomePage(cityConfig));
console.log(`Created: ${homePagePath}`);

// Generate service pages
SERVICE_KEYWORDS.forEach(keyword => {
  const pageSlug = `${keyword.slug}-in-${citySlug}`;
  const pageDir = path.join(outputDir, pageSlug);
  fs.mkdirSync(pageDir, { recursive: true });
  
  const pagePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(pagePath, generatePageContent(keyword, cityConfig));
  console.log(`Created: ${pagePath}`);
});

console.log(`\\nDone! Generated ${SERVICE_KEYWORDS.length + 1} pages for ${cityConfig.cityName}.`);
console.log(`Output directory: ${outputDir}`);
`;

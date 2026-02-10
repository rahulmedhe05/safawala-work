"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ChevronDown, ChevronUp } from "lucide-react"
import { DOMAIN_PAGES } from "@/lib/domain-pages-data"
import { useState } from "react"

interface DynamicFooterProps {
  location: string
  state?: string
  domain?: string
  type?: string // city, style, service, brand, premium
  areas?: string[] // Area names for city domains
}

// Helper function to format page slug into readable title
function formatPageTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Helper function to categorize pages
function categorizePages(pages: string[]): Record<string, string[]> {
  const categories: Record<string, string[]> = {
    'Groom Services': [],
    'Wedding Safa': [],
    'Turban Services': [],
    'Traditional Styles': [],
    'Area Services': [],
    'Rental Services': [],
    'Premium Services': [],
    'Other Services': []
  }

  for (const page of pages) {
    const lower = page.toLowerCase()
    
    if (lower.includes('groom') || lower.includes('dulha') || lower.includes('dulhe')) {
      categories['Groom Services'].push(page)
    } else if (lower.includes('wedding-safa') || lower.includes('safa-for-wedding') || lower.includes('wedding-pagdi')) {
      categories['Wedding Safa'].push(page)
    } else if (lower.includes('turban') || lower.includes('pagdi') || lower.includes('pagri') || lower.includes('pheta') || lower.includes('feta')) {
      categories['Turban Services'].push(page)
    } else if (lower.includes('rajasthani') || lower.includes('jodhpuri') || lower.includes('marwadi') || lower.includes('gujarati') || lower.includes('punjabi') || lower.includes('rajput') || lower.includes('rajwadi') || lower.includes('maharaja') || lower.includes('mewadi')) {
      categories['Traditional Styles'].push(page)
    } else if (lower.includes('-safa-service') || lower.includes('-turban-safa-feta-pagdi-on-rent')) {
      categories['Area Services'].push(page)
    } else if (lower.includes('rent') || lower.includes('rental') || lower.includes('hire')) {
      categories['Rental Services'].push(page)
    } else if (lower.includes('premium') || lower.includes('luxury') || lower.includes('royal') || lower.includes('designer') || lower.includes('destination')) {
      categories['Premium Services'].push(page)
    } else {
      categories['Other Services'].push(page)
    }
  }

  // Remove empty categories
  return Object.fromEntries(
    Object.entries(categories).filter(([_, pages]) => pages.length > 0)
  )
}

export function DynamicFooter({ location, state, domain, type = "city", areas }: DynamicFooterProps) {
  const currentYear = new Date().getFullYear()
  const email = domain ? `info@${domain}` : `info@safawala${location.toLowerCase().replace(/\s+/g, '')}.com`
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  
  // Base URL for links - use relative paths for standalone deployments
  // This works for both local dev and production on the actual domain
  const baseUrl = ''
  
  // Get all pages for this domain from the data file
  const allPages = domain ? (DOMAIN_PAGES[domain] || []) : []
  const categorizedPages = categorizePages(allPages)
  
  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-accent">
              Safawala {location}
            </h2>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6">
              {location}'s most trusted wedding turban specialists. Bringing royal elegance to your special day with 40+ years of legacy.
              {state && ` Serving ${state} and nearby areas.`}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/safawalamumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/safawalamumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href={`${baseUrl}/`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                  Home
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#about`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                  About Us
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#gallery`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                  Gallery
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#contact`} className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Wedding Turban Tying Service</li>
              <li>Safa & Pagdi Tying</li>
              <li>Groom Turban & Sehra</li>
              <li>Feta & Wedding Turban Design</li>
              <li>Barati Safa Service</li>
              <li>Destination Wedding Turbans</li>
              <li>Corporate Event Turbans</li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    {location}{state ? `, ${state}` : ''}, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919725295692"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 97252 95692
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="text-primary-foreground/80 font-mono">
                  <p>Mon - Sat: 9 AM - 9 PM</p>
                  <p>Sunday: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* All Pages by Category for SEO */}
        {allPages.length > 0 && (
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <h4 className="text-2xl font-bold mb-8 text-center text-accent">
              All Our Services in {location} ({allPages.length} Pages)
            </h4>
            
            {Object.entries(categorizedPages).map(([category, pages]) => (
              <div key={category} className="mb-6">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                >
                  <span className="text-lg font-bold">{category} ({pages.length})</span>
                  {expandedCategory === category ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                
                {expandedCategory === category && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4">
                    {pages.map((page) => (
                      <a
                        key={page}
                        href={`${baseUrl}/${page}`}
                        className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-sm py-1 truncate"
                        title={formatPageTitle(page)}
                      >
                        → {formatPageTitle(page)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* All Links Expanded Grid - for SEO crawlers */}
            <details className="mt-8">
              <summary className="cursor-pointer text-accent font-bold mb-4 hover:underline">
                View All {allPages.length} Service Pages (Expanded)
              </summary>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-4 max-h-[600px] overflow-y-auto p-4 bg-primary-foreground/5 rounded-lg">
                {allPages.map((page) => (
                  <a
                    key={page}
                    href={`${baseUrl}/${page}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-xs py-1 truncate block"
                    title={formatPageTitle(page)}
                  >
                    → {formatPageTitle(page)}
                  </a>
                ))}
              </div>
            </details>
          </div>
        )}

        {/* Service Info */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-accent font-mono text-sm">
            ✓ {location} Local Service | ✓ Destination Wedding Coverage | ✓ On-site Safa & Pagdi Tying | ✓ 40+ Years Legacy
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © {currentYear} Safawala {location}. All rights reserved. | {location}'s Premier Wedding Turban Service
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href={`${baseUrl}/privacy-policy`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href={`${baseUrl}/terms-of-service`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        {allPages.map(page => formatPageTitle(page)).join(', ')}
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { ArrowRight, Crown, Users, Zap, Award } from "lucide-react"
import { DOMAIN_PAGES } from "@/lib/domain-pages-data"

interface DynamicServicesSectionProps {
  location: string
  domain?: string
}

export function DynamicServicesSection({ location, domain }: DynamicServicesSectionProps) {
  // Get pages for this domain to create relevant service links
  const domainPages = domain ? (DOMAIN_PAGES[domain] || []) : []
  
  // Find relevant service pages from domain
  const findServicePage = (keywords: string[]): string => {
    for (const keyword of keywords) {
      const found = domainPages.find(p => p.toLowerCase().includes(keyword))
      if (found) return `/${found}`
    }
    return "#contact"
  }

  const services = [
    {
      title: "Wedding Safa Tying",
      description: `Professional traditional safa tying for grooms and wedding guests in ${location}`,
      href: findServicePage(['wedding-safa', 'safa-for-wedding', 'bridal-safa']),
      icon: Crown,
      seoTitle: `Expert Wedding Safa Tying Service in ${location}`,
    },
    {
      title: "Groom Styling",
      description: `Complete groom appearance with pagdi, sehra, and feta coordination in ${location}`,
      href: findServicePage(['groom-safa', 'groom-turban', 'dulha-safa', 'groom-pagdi']),
      icon: Award,
      seoTitle: `Professional Groom Pagdi Tying Service in ${location}`,
    },
    {
      title: "Group Services",
      description: `Professional turban service for barati and guest groups in ${location}`,
      href: findServicePage(['barati-safa', 'group-safa', 'baarat-safa']),
      icon: Users,
      seoTitle: `Barati Safa Pagdi Service for Groups in ${location}`,
    },
    {
      title: "Designer Safas",
      description: `Bespoke custom turban designs for trend-setting grooms in ${location}`,
      href: findServicePage(['designer-safa', 'designer-turban', 'custom-safa', 'luxury-safa']),
      icon: Zap,
      seoTitle: `Designer Wedding Safa Service in ${location}`,
    },
  ]

  // Structured data for service listings - use relative paths for standalone deployment
  const serviceListingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.description,
    })),
  }

  return (
    <>
      <Script
        id="service-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListingSchema) }}
      />
      <section className="py-20 bg-gradient-to-b from-white to-secondary/10" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4">
          {/* Section Header with Enhanced SEO */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4" itemProp="name">
              Premium Wedding Turban Services in {location}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Safawala {location} offers a comprehensive range of professional turban tying services for all your wedding needs across {location}. 
              From traditional Rajasthani designs to contemporary styles, our master specialists provide expert safa, pagdi, feta & sehra tying. 
              Same-day service available across all major areas of {location}.
            </p>
            <meta itemProp="areaServed" content={`${location}, India`} />
            <meta itemProp="serviceType" content="Wedding Turban Tying Service" />
            <meta itemProp="telephone" content="+91-9725295692" />
          </div>

          {/* Services Grid with Local SEO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href}>
                  <article 
                    className="h-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2"
                    itemScope 
                    itemType="https://schema.org/Service"
                  >
                    <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-2" itemProp="name">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed" itemProp="description">
                      {service.description}
                    </p>
                    <meta itemProp="areaServed" content={location} />
                    <div className="flex items-center text-accent font-semibold group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>

          {/* Content Section with Enhanced Local SEO */}
          <div className="bg-secondary/10 rounded-lg p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">{location}'s Most Trusted Turban Specialists - Since 2004</h2>

              <div className="prose prose-lg text-gray-700 space-y-4 mb-8">
                <p>
                  At <strong>Safawala {location}</strong>, we believe that every wedding is a celebration of love, tradition, and heritage. Your turban is not just a piece of clothing—it's a representation of your cultural pride, your status, and your identity. For over <strong>20 years, we have been {location}'s most trusted partner</strong> in creating perfect turban moments that last a lifetime.
                </p>

                <p>
                  Our journey began in <strong>2004</strong> with a simple mission: to preserve the authentic art of traditional turban tying while providing the highest quality service to every client. Over the years, we've evolved into a full-service turban styling company, serving <strong>grooms, families, and guests across {location} and beyond</strong>. Our success is measured not just in numbers, but in the smiling faces of satisfied customers and the countless positive reviews we receive.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Why Choose Safawala {location} for Turban Services?</h3>

                <p>
                  <strong>Expert Master Specialists:</strong> Our team consists of master turban specialists with 15-25 years of individual experience. They have perfected traditional turban tying techniques and understand the nuances of different regional styles. Whether you want a Rajasthani pagdi, a Marathi pheta, a Gujarati safa, or a modern fusion design, our experts can create it perfectly. All our specialists are available across all major {location} areas.
                </p>

                <p>
                  <strong>Comprehensive Service Range:</strong> We don't just serve grooms. Our comprehensive services include styling for entire wedding parties, guest turban coordination, barati (wedding procession) services, pre-wedding event styling, and everything in between. We can handle everything from single-person styling to complete wedding party coordination with same-day service availability.
                </p>

                <p>
                  <strong>Premium Quality & Customization:</strong> We work with premium fabrics including silk, designer brocades, and hand-embroidered materials. Every turban is customized to match your preferences, wedding theme, and personal style. We offer unlimited consultations to ensure perfect satisfaction. Our pricing is competitive, ranging from ₹500-₹5000 depending on complexity.
                </p>

                <p>
                  <strong>Professional & Punctual:</strong> Your wedding schedule is tight, and we respect that. Our specialists arrive on time, work efficiently, and ensure you're ready when you need to be. We're known in the {location} wedding industry for our reliability and professional conduct. Same-day service is available across all {location} neighborhoods.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Our Service Philosophy</h3>

                <p>
                  We believe in three core principles: <strong>Excellence in every turban, respect for your traditions, and commitment to your complete satisfaction</strong>. Before we tie any turban, we take time to understand your vision, preferences, and wedding theme. We offer detailed consultations, design recommendations, and multiple fittings to ensure perfect results.
                </p>

                <p>
                  Every client receives personalized attention. Whether you're getting a simple traditional turban or an elaborate designer creation, you receive the same high level of expertise and care. We adjust our approach based on your needs—some clients want classical authenticity, others want modern innovation, and some want a beautiful blend of both.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">Serving All Areas of {location}</h3>

                <p>
                  Our professional turban service is available across all major areas of {location}. We also serve <strong>destination weddings</strong> across India. No matter where your celebration is, Safawala {location} is ready to serve you with the same quality and professionalism.
                </p>

                <p>
                  Contact us today to book your perfect turban experience. Whether you're planning a grand wedding or a small family celebration, <strong>Safawala {location} is your trusted partner</strong> in creating beautiful, memorable moments. Call us at <strong>+91-9725295692</strong>, WhatsApp us, or visit us in person—our team is always ready to help you look your absolute best!
                </p>
              </div>

              <div className="flex gap-4 flex-wrap justify-center mt-8">
                <a href="#contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                </a>
                <a href="https://wa.me/919725295692" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

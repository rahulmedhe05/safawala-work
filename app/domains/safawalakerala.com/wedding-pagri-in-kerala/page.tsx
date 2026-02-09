import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const KERALA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Premium Wedding-Grade Pagri in Kerala | Safawala Kerala",
  description: "Looking for premium pagri in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of herita...",
  keywords: "wedding pagri in kerala, pagri Kerala, wedding pagri Kerala, pagri service Kerala",
  openGraph: {
    title: "Premium Wedding-Grade Pagri in Kerala | Safawala Kerala",
    description: "Premium pagri service in Kerala by Safawala Kerala.",
    url: "https://safawalakerala.com/wedding-pagri-in-kerala",
    type: "website",
  },
}

export default function WeddingPagriInKeralaPage() {
  const pageData = {
    title: "Premium Wedding-Grade Pagri in Kerala",
    shortDescription: "Looking for premium pagri in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium pagri service in Kerala by Safawala Kerala.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: KERALA_AREAS,
    keyFeatures: ["Premium materials - silk, brocade, velvet, and designer fabrics", "Customized designs matching your wedding theme and outfit", "Complete barati packages with matching coordination", "On-site professional service at your Kerala venue", "Free consultation and design preview via WhatsApp", "Authentic traditional tying techniques perfected over generations"],
    seoKeywords: ["wedding pagri in kerala", "pagri Kerala", "wedding pagri Kerala", "pagri service Kerala"],
    faqs: [
  {
    "question": "How early should I book Pagri for my Kerala wedding?",
    "answer": "We recommend booking your Pagri at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Do you provide on-site Pagri tying service in Kerala?",
    "answer": "Yes, we provide professional on-site Pagri tying service across all Kerala areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "Do you offer Pagri for destination weddings outside Kerala?",
    "answer": "Yes, we provide Pagri services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Kerala."
  },
  {
    "question": "How long does Pagri tying take?",
    "answer": "Professional Pagri tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's Pagri receives extra attention for the perfect look."
  },
  {
    "question": "What materials are used in your Pagri collection?",
    "answer": "Our Pagri collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  }
],
    content: `
<h2>Welcome to Safawala Kerala - Your Premier Premium Wedding-Grade Pagri in Kerala Destination</h2>

<p>Welcome to Safawala Kerala - your premier destination for Pagri services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala Kerala for Pagri?</h2>

<p>When it comes to <strong>pagri</strong> in Kerala, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Kerala choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our pagri expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Kerala.</p>

<h3>Premium Quality Materials</h3>
<p>Every pagri features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary pagri tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Kerala Service Coverage</h3>
<p>We provide on-site pagri services across all Kerala areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Pagri Services in Kerala</h2>

<h3>Groom Pagri Specialist</h3>
<p>Make your entrance truly royal with our premium groom pagri. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati Pagri Packages</h3>
<p>Coordinate your baraat with our bulk pagri packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family Pagri Service</h3>
<p>Complete pagri styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental Pagri Options</h3>
<p>Premium pagri available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer Pagri</h3>
<p>Want something unique? Our designer pagri service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>



<h2>Service Areas in Kerala</h2>

<p>We provide professional turban services across all Kerala areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our Kerala team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Pagri in Kerala</h2>

<p>Ready to experience the finest pagri service in Kerala? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Kerala team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Kerala</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Kerala, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each pagri reflects the joy and grandeur of God's own country celebrations.</p>

<p>Contact us today to experience why Safawala is Kerala's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

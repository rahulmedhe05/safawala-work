import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const SURAT_AREAS = ["Athwa", "Adajan", "Vesu", "City Light", "Piplod", "Ghod Dod Road", "Ring Road", "Varachha"]

export const metadata: Metadata = {
  title: "Jodhpur Pagri in Surat | Safawala Surat",
  description: "Looking for premium pagri in Surat? Safawala Surat is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage...",
  keywords: "jodhpuri pagri in surat, pagri Surat, wedding pagri Surat, pagri service Surat",
  openGraph: {
    title: "Jodhpur Pagri in Surat | Safawala Surat",
    description: "Premium pagri service in Surat by Safawala Surat.",
    url: "https://safawalasurat.com/jodhpuri-pagri-in-surat",
    type: "website",
  },
}

export default function JodhpuriPagriInSuratPage() {
  const pageData = {
    title: "Jodhpur Pagri in Surat",
    shortDescription: "Looking for premium pagri in Surat? Safawala Surat is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium pagri service in Surat by Safawala Surat.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: SURAT_AREAS,
    keyFeatures: ["Premium materials - silk, brocade, velvet, and designer fabrics", "Authentic traditional tying techniques perfected over generations", "Customized designs matching your wedding theme and outfit", "On-site professional service at your Surat venue", "Perfect fit with maximum comfort guaranteed all day", "Complete barati packages with matching coordination"],
    seoKeywords: ["jodhpuri pagri in surat", "pagri Surat", "wedding pagri Surat", "pagri service Surat"],
    faqs: [
  {
    "question": "Do you provide matching Pagri for barati in Surat?",
    "answer": "Yes, we specialize in coordinated Pagri for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "Do you offer Pagri for destination weddings outside Surat?",
    "answer": "Yes, we provide Pagri services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Surat."
  },
  {
    "question": "What materials are used in your Pagri collection?",
    "answer": "Our Pagri collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "Do you provide on-site Pagri tying service in Surat?",
    "answer": "Yes, we provide professional on-site Pagri tying service across all Surat areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "What is the price of Pagri in Surat?",
    "answer": "Our Pagri prices in Surat start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  }
],
    content: `
<h2>Welcome to Safawala Surat - Your Premier Jodhpur Pagri in Surat Destination</h2>

<p>Discover the art of Pagri with Safawala Surat. We combine traditional expertise with contemporary elegance to create stunning turbans that make you the center of attraction.</p>


<h2>Why Choose Safawala Surat for Pagri?</h2>

<p>When it comes to <strong>pagri</strong> in Surat, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Surat choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our pagri expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Surat.</p>

<h3>Premium Quality Materials</h3>
<p>Every pagri features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary pagri tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Surat Service Coverage</h3>
<p>We provide on-site pagri services across all Surat areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Pagri Services in Surat</h2>

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



<h2>Service Areas in Surat</h2>

<p>We provide professional turban services across all Surat areas including Athwa, Adajan, Vesu, City Light, Piplod, Ghod Dod Road, Ring Road, Varachha.</p>

<p>Our Surat team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Pagri in Surat</h2>

<p>Ready to experience the finest pagri service in Surat? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Surat team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Surat</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Surat, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each pagri reflects the joy and grandeur of vibrant diamond city celebrations.</p>

<p>Contact us today to experience why Safawala is Surat's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

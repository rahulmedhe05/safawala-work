import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const KERALA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Barati Safa in Kerala | Safawala Kerala",
  description: "Looking for premium safa in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritag...",
  keywords: "barati safa in kerala, safa Kerala, wedding safa Kerala, safa service Kerala",
  openGraph: {
    title: "Barati Safa in Kerala | Safawala Kerala",
    description: "Premium safa service in Kerala by Safawala Kerala.",
    url: "https://safawalakerala.com/barati-safa-in-kerala",
    type: "website",
  },
}

export default function BaratiSafaInKeralaPage() {
  const pageData = {
    title: "Barati Safa in Kerala",
    shortDescription: "Looking for premium safa in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium safa service in Kerala by Safawala Kerala.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: KERALA_AREAS,
    keyFeatures: ["Premium materials - silk, brocade, velvet, and designer fabrics", "On-site professional service at your Kerala venue", "Perfect fit with maximum comfort guaranteed all day", "Complete barati packages with matching coordination", "Customized designs matching your wedding theme and outfit", "Free consultation and design preview via WhatsApp"],
    seoKeywords: ["barati safa in kerala", "safa Kerala", "wedding safa Kerala", "safa service Kerala"],
    faqs: [
  {
    "question": "Do you provide on-site Safa tying service in Kerala?",
    "answer": "Yes, we provide professional on-site Safa tying service across all Kerala areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "Do you provide matching Safa for barati in Kerala?",
    "answer": "Yes, we specialize in coordinated Safa for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "What materials are used in your Safa collection?",
    "answer": "Our Safa collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "What is the price of Safa in Kerala?",
    "answer": "Our Safa prices in Kerala start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "How early should I book Safa for my Kerala wedding?",
    "answer": "We recommend booking your Safa at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  }
],
    content: `
<h2>Welcome to Safawala Kerala - Your Premier Barati Safa in Kerala Destination</h2>

<p>Safawala Kerala presents the most exquisite Safa collection in the region. Our master craftsmen specialize in creating the perfect turban experience for God's own country celebrations.</p>


<h2>Why Choose Safawala Kerala for Safa?</h2>

<p>When it comes to <strong>safa</strong> in Kerala, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Kerala choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our safa expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Kerala.</p>

<h3>Premium Quality Materials</h3>
<p>Every safa features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary safa tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Kerala Service Coverage</h3>
<p>We provide on-site safa services across all Kerala areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Safa Services in Kerala</h2>

<h3>Groom Safa Specialist</h3>
<p>Make your entrance truly royal with our premium groom safa. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati Safa Packages</h3>
<p>Coordinate your baraat with our bulk safa packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family Safa Service</h3>
<p>Complete safa styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental Safa Options</h3>
<p>Premium safa available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer Safa</h3>
<p>Want something unique? Our designer safa service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>



<h2>Service Areas in Kerala</h2>

<p>We provide professional turban services across all Kerala areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our Kerala team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Safa in Kerala</h2>

<p>Ready to experience the finest safa service in Kerala? Booking is simple:</p>

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

<p>At Safawala Kerala, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each safa reflects the joy and grandeur of God's own country celebrations.</p>

<p>Contact us today to experience why Safawala is Kerala's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

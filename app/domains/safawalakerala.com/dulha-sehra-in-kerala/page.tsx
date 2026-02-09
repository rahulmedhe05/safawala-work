import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const KERALA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Dulha (Groom) Sehra in Kerala | Safawala Kerala",
  description: "Looking for premium sehra in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of herita...",
  keywords: "dulha sehra in kerala, sehra Kerala, wedding sehra Kerala, sehra service Kerala",
  openGraph: {
    title: "Dulha (Groom) Sehra in Kerala | Safawala Kerala",
    description: "Premium sehra service in Kerala by Safawala Kerala.",
    url: "https://safawalakerala.com/dulha-sehra-in-kerala",
    type: "website",
  },
}

export default function DulhaSehraInKeralaPage() {
  const pageData = {
    title: "Dulha (Groom) Sehra in Kerala",
    shortDescription: "Looking for premium sehra in Kerala? Safawala Kerala is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium sehra service in Kerala by Safawala Kerala.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: KERALA_AREAS,
    keyFeatures: ["Expert sehra specialists with 40+ years experience in Kerala", "Emergency last-minute service available in Kerala", "Customized designs matching your wedding theme and outfit", "Authentic traditional tying techniques perfected over generations", "Complete barati packages with matching coordination", "Premium materials - silk, brocade, velvet, and designer fabrics"],
    seoKeywords: ["dulha sehra in kerala", "sehra Kerala", "wedding sehra Kerala", "sehra service Kerala"],
    faqs: [
  {
    "question": "Do you provide on-site Sehra tying service in Kerala?",
    "answer": "Yes, we provide professional on-site Sehra tying service across all Kerala areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "Can I see Sehra designs before booking in Kerala?",
    "answer": "Absolutely! We can share our complete Sehra catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "Do you offer Sehra for destination weddings outside Kerala?",
    "answer": "Yes, we provide Sehra services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Kerala."
  },
  {
    "question": "What materials are used in your Sehra collection?",
    "answer": "Our Sehra collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "What is the price of Sehra in Kerala?",
    "answer": "Our Sehra prices in Kerala start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  }
],
    content: `
<h2>Welcome to Safawala Kerala - Your Premier Dulha (Groom) Sehra in Kerala Destination</h2>

<p>Welcome to Safawala Kerala - your premier destination for Sehra services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala Kerala for Sehra?</h2>

<p>When it comes to <strong>sehra</strong> in Kerala, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Kerala choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our sehra expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Kerala.</p>

<h3>Premium Quality Materials</h3>
<p>Every sehra features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary sehra tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Kerala Service Coverage</h3>
<p>We provide on-site sehra services across all Kerala areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Sehra Services in Kerala</h2>

<h3>Groom Sehra Specialist</h3>
<p>Make your entrance truly royal with our premium groom sehra. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati Sehra Packages</h3>
<p>Coordinate your baraat with our bulk sehra packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family Sehra Service</h3>
<p>Complete sehra styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental Sehra Options</h3>
<p>Premium sehra available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer Sehra</h3>
<p>Want something unique? Our designer sehra service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>



<h2>Service Areas in Kerala</h2>

<p>We provide professional turban services across all Kerala areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our Kerala team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Sehra in Kerala</h2>

<p>Ready to experience the finest sehra service in Kerala? Booking is simple:</p>

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

<p>At Safawala Kerala, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each sehra reflects the joy and grandeur of God's own country celebrations.</p>

<p>Contact us today to experience why Safawala is Kerala's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

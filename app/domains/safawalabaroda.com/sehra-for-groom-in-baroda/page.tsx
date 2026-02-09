import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const BARODA_AREAS = ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Akota", "Karelibaug"]

export const metadata: Metadata = {
  title: "Groom Sehra in Baroda | Safawala Baroda",
  description: "Looking for premium sehra in Baroda? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of herita...",
  keywords: "sehra for groom in baroda, sehra Baroda, wedding sehra Baroda, sehra service Baroda",
  openGraph: {
    title: "Groom Sehra in Baroda | Safawala Baroda",
    description: "Premium sehra service in Baroda by Safawala Baroda.",
    url: "https://safawalabaroda.com/sehra-for-groom-in-baroda",
    type: "website",
  },
}

export default function SehraForGroomInBarodaPage() {
  const pageData = {
    title: "Groom Sehra in Baroda",
    shortDescription: "Looking for premium sehra in Baroda? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium sehra service in Baroda by Safawala Baroda.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: BARODA_AREAS,
    keyFeatures: ["On-site professional service at your Baroda venue", "Expert sehra specialists with 40+ years experience in Baroda", "Emergency last-minute service available in Baroda", "Premium materials - silk, brocade, velvet, and designer fabrics", "Authentic traditional tying techniques perfected over generations", "Free consultation and design preview via WhatsApp"],
    seoKeywords: ["sehra for groom in baroda", "sehra Baroda", "wedding sehra Baroda", "sehra service Baroda"],
    faqs: [
  {
    "question": "Do you offer Sehra for destination weddings outside Baroda?",
    "answer": "Yes, we provide Sehra services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Baroda."
  },
  {
    "question": "Do you provide on-site Sehra tying service in Baroda?",
    "answer": "Yes, we provide professional on-site Sehra tying service across all Baroda areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "What materials are used in your Sehra collection?",
    "answer": "Our Sehra collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "Do you provide matching Sehra for barati in Baroda?",
    "answer": "Yes, we specialize in coordinated Sehra for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "Can I see Sehra designs before booking in Baroda?",
    "answer": "Absolutely! We can share our complete Sehra catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  }
],
    content: `
<h2>Welcome to Safawala Baroda - Your Premier Groom Sehra in Baroda Destination</h2>

<p>Looking for the finest Sehra in Baroda? Safawala Baroda is the trusted choice of thousands of families for authentic, premium turban services. Experience our 40+ years legacy of excellence.</p>


<h2>Why Choose Safawala Baroda for Sehra?</h2>

<p>When it comes to <strong>sehra</strong> in Baroda, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Baroda choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our sehra expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Baroda.</p>

<h3>Premium Quality Materials</h3>
<p>Every sehra features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary sehra tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Baroda Service Coverage</h3>
<p>We provide on-site sehra services across all Baroda areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Sehra Services in Baroda</h2>

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



<h2>Service Areas in Baroda</h2>

<p>We provide professional turban services across all Baroda areas including Alkapuri, Fatehgunj, Sayajigunj, Race Course, Manjalpur, Gotri, Akota, Karelibaug.</p>

<p>Our Baroda team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Sehra in Baroda</h2>

<p>Ready to experience the finest sehra service in Baroda? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Baroda team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Baroda</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Baroda, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each sehra reflects the joy and grandeur of majestic Gaekwad heritage ceremonies.</p>

<p>Contact us today to experience why Safawala is Baroda's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

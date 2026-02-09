import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const PUNE_AREAS = ["Koregaon Park", "Hadapsar", "Kothrud", "Baner", "Hinjewadi", "Aundh", "Wakad", "Viman Nagar", "Shivaji Nagar", "Camp"]

export const metadata: Metadata = {
  title: "Sehra in Pune | Safawala Pune",
  description: "Looking for premium sehra in Pune? Safawala Pune is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage t...",
  keywords: "sehra in pune, sehra Pune, wedding sehra Pune, sehra service Pune",
  openGraph: {
    title: "Sehra in Pune | Safawala Pune",
    description: "Premium sehra service in Pune by Safawala Pune.",
    url: "https://safawalapune.com/sehra-in-pune",
    type: "website",
  },
}

export default function SehraInPunePage() {
  const pageData = {
    title: "Sehra in Pune",
    shortDescription: "Looking for premium sehra in Pune? Safawala Pune is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium sehra service in Pune by Safawala Pune.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: PUNE_AREAS,
    keyFeatures: ["Customized designs matching your wedding theme and outfit", "Authentic traditional tying techniques perfected over generations", "Premium materials - silk, brocade, velvet, and designer fabrics", "Complete barati packages with matching coordination", "On-site professional service at your Pune venue", "Free consultation and design preview via WhatsApp"],
    seoKeywords: ["sehra in pune", "sehra Pune", "wedding sehra Pune", "sehra service Pune"],
    faqs: [
  {
    "question": "What materials are used in your Sehra collection?",
    "answer": "Our Sehra collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "How long does Sehra tying take?",
    "answer": "Professional Sehra tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's Sehra receives extra attention for the perfect look."
  },
  {
    "question": "What is the price of Sehra in Pune?",
    "answer": "Our Sehra prices in Pune start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "Do you provide matching Sehra for barati in Pune?",
    "answer": "Yes, we specialize in coordinated Sehra for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "Do you provide on-site Sehra tying service in Pune?",
    "answer": "Yes, we provide professional on-site Sehra tying service across all Pune areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  }
],
    content: `
<h2>Welcome to Safawala Pune - Your Premier Sehra in Pune Destination</h2>

<p>Discover the art of Sehra with Safawala Pune. We combine traditional expertise with contemporary elegance to create stunning turbans that make you the center of attraction.</p>


<h2>Why Choose Safawala Pune for Sehra?</h2>

<p>When it comes to <strong>sehra</strong> in Pune, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Pune choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our sehra expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Pune.</p>

<h3>Premium Quality Materials</h3>
<p>Every sehra features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary sehra tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Pune Service Coverage</h3>
<p>We provide on-site sehra services across all Pune areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Sehra Services in Pune</h2>

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



<h2>Service Areas in Pune</h2>

<p>We provide professional turban services across all Pune areas including Koregaon Park, Hadapsar, Kothrud, Baner, Hinjewadi, Aundh, Wakad, Viman Nagar, Shivaji Nagar, Camp.</p>

<p>Our Pune team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Sehra in Pune</h2>

<p>Ready to experience the finest sehra service in Pune? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Pune team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Pune</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Pune, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each sehra reflects the joy and grandeur of traditional Maharashtrian ceremonies.</p>

<p>Contact us today to experience why Safawala is Pune's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

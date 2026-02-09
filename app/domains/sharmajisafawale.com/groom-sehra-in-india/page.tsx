import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const INDIA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Groom Sehra in India | Safawala India",
  description: "Looking for premium sehra in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage...",
  keywords: "groom sehra in india, sehra India, wedding sehra India, sehra service India",
  openGraph: {
    title: "Groom Sehra in India | Safawala India",
    description: "Premium sehra service in India by Safawala India.",
    url: "https://sharmajisafawale.com/groom-sehra-in-india",
    type: "website",
  },
}

export default function GroomSehraInIndiaPage() {
  const pageData = {
    title: "Groom Sehra in India",
    shortDescription: "Looking for premium sehra in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium sehra service in India by Safawala India.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: INDIA_AREAS,
    keyFeatures: ["Emergency last-minute service available in India", "Customized designs matching your wedding theme and outfit", "Authentic traditional tying techniques perfected over generations", "Perfect fit with maximum comfort guaranteed all day", "On-site professional service at your India venue", "Premium materials - silk, brocade, velvet, and designer fabrics"],
    seoKeywords: ["groom sehra in india", "sehra India", "wedding sehra India", "sehra service India"],
    faqs: [
  {
    "question": "How long does Sehra tying take?",
    "answer": "Professional Sehra tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's Sehra receives extra attention for the perfect look."
  },
  {
    "question": "Do you offer Sehra for destination weddings outside India?",
    "answer": "Yes, we provide Sehra services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside India."
  },
  {
    "question": "How early should I book Sehra for my India wedding?",
    "answer": "We recommend booking your Sehra at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Do you provide matching Sehra for barati in India?",
    "answer": "Yes, we specialize in coordinated Sehra for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "What materials are used in your Sehra collection?",
    "answer": "Our Sehra collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  }
],
    content: `
<h2>Welcome to Safawala India - Your Premier Groom Sehra in India Destination</h2>

<p>Welcome to Safawala India - your premier destination for Sehra services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala India for Sehra?</h2>

<p>When it comes to <strong>sehra</strong> in India, Safawala stands apart as the region's most trusted turban specialists. Here's why families across India choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our sehra expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in India.</p>

<h3>Premium Quality Materials</h3>
<p>Every sehra features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary sehra tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-India Service Coverage</h3>
<p>We provide on-site sehra services across all India areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Sehra Services in India</h2>

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



<h2>Service Areas in India</h2>

<p>We provide professional turban services across all India areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our India team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Sehra in India</h2>

<p>Ready to experience the finest sehra service in India? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our India team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in India</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala India, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each sehra reflects the joy and grandeur of traditional ceremonies.</p>

<p>Contact us today to experience why Safawala is India's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

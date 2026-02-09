import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const PUNE_AREAS = ["Koregaon Park", "Hadapsar", "Kothrud", "Baner", "Hinjewadi", "Aundh", "Wakad", "Viman Nagar", "Shivaji Nagar", "Camp"]

export const metadata: Metadata = {
  title: "Dulha (Groom) Sehra in Pune | Safawala Pune",
  description: "Looking for premium sehra in Pune? Safawala Pune is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage t...",
  keywords: "dulha sehra in pune, sehra Pune, wedding sehra Pune, sehra service Pune",
  openGraph: {
    title: "Dulha (Groom) Sehra in Pune | Safawala Pune",
    description: "Premium sehra service in Pune by Safawala Pune.",
    url: "https://safawalapune.com/dulha-sehra-in-pune",
    type: "website",
  },
}

export default function DulhaSehraInPunePage() {
  const pageData = {
    title: "Dulha (Groom) Sehra in Pune",
    shortDescription: "Looking for premium sehra in Pune? Safawala Pune is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium sehra service in Pune by Safawala Pune.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: PUNE_AREAS,
    keyFeatures: ["Expert sehra specialists with 40+ years experience in Pune", "On-site professional service at your Pune venue", "Free consultation and design preview via WhatsApp", "Premium materials - silk, brocade, velvet, and designer fabrics", "Competitive pricing for individual and bulk orders", "Emergency last-minute service available in Pune"],
    seoKeywords: ["dulha sehra in pune", "sehra Pune", "wedding sehra Pune", "sehra service Pune"],
    faqs: [
  {
    "question": "What is the price of Sehra in Pune?",
    "answer": "Our Sehra prices in Pune start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "How early should I book Sehra for my Pune wedding?",
    "answer": "We recommend booking your Sehra at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Do you offer Sehra for destination weddings outside Pune?",
    "answer": "Yes, we provide Sehra services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Pune."
  },
  {
    "question": "Can I see Sehra designs before booking in Pune?",
    "answer": "Absolutely! We can share our complete Sehra catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "Do you provide on-site Sehra tying service in Pune?",
    "answer": "Yes, we provide professional on-site Sehra tying service across all Pune areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  }
],
    content: `
<h2>Welcome to Safawala Pune - Your Premier Dulha (Groom) Sehra in Pune Destination</h2>

<p>Safawala Pune presents the most exquisite Sehra collection in the region. Our master craftsmen specialize in creating the perfect turban experience for traditional Maharashtrian ceremonies.</p>


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

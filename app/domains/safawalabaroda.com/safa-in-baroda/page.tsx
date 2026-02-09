import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const BARODA_AREAS = ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Akota", "Karelibaug"]

export const metadata: Metadata = {
  title: "Safa in Baroda | Safawala Baroda",
  description: "Looking for premium safa in Baroda? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritag...",
  keywords: "safa in baroda, safa Baroda, wedding safa Baroda, safa service Baroda",
  openGraph: {
    title: "Safa in Baroda | Safawala Baroda",
    description: "Premium safa service in Baroda by Safawala Baroda.",
    url: "https://safawalabaroda.com/safa-in-baroda",
    type: "website",
  },
}

export default function SafaInBarodaPage() {
  const pageData = {
    title: "Safa in Baroda",
    shortDescription: "Looking for premium safa in Baroda? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium safa service in Baroda by Safawala Baroda.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: BARODA_AREAS,
    keyFeatures: ["On-site professional service at your Baroda venue", "Perfect fit with maximum comfort guaranteed all day", "Customized designs matching your wedding theme and outfit", "Authentic traditional tying techniques perfected over generations", "Free consultation and design preview via WhatsApp", "Competitive pricing for individual and bulk orders"],
    seoKeywords: ["safa in baroda", "safa Baroda", "wedding safa Baroda", "safa service Baroda"],
    faqs: [
  {
    "question": "Can I see Safa designs before booking in Baroda?",
    "answer": "Absolutely! We can share our complete Safa catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "How early should I book Safa for my Baroda wedding?",
    "answer": "We recommend booking your Safa at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Do you provide matching Safa for barati in Baroda?",
    "answer": "Yes, we specialize in coordinated Safa for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "What is the price of Safa in Baroda?",
    "answer": "Our Safa prices in Baroda start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "Do you provide on-site Safa tying service in Baroda?",
    "answer": "Yes, we provide professional on-site Safa tying service across all Baroda areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  }
],
    content: `
<h2>Welcome to Safawala Baroda - Your Premier Safa in Baroda Destination</h2>

<p>Safawala Baroda presents the most exquisite Safa collection in the region. Our master craftsmen specialize in creating the perfect turban experience for majestic Gaekwad heritage ceremonies.</p>


<h2>Why Choose Safawala Baroda for Safa?</h2>

<p>When it comes to <strong>safa</strong> in Baroda, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Baroda choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our safa expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Baroda.</p>

<h3>Premium Quality Materials</h3>
<p>Every safa features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary safa tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Baroda Service Coverage</h3>
<p>We provide on-site safa services across all Baroda areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Safa Services in Baroda</h2>

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



<h2>Service Areas in Baroda</h2>

<p>We provide professional turban services across all Baroda areas including Alkapuri, Fatehgunj, Sayajigunj, Race Course, Manjalpur, Gotri, Akota, Karelibaug.</p>

<p>Our Baroda team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Safa in Baroda</h2>

<p>Ready to experience the finest safa service in Baroda? Booking is simple:</p>

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

<p>At Safawala Baroda, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each safa reflects the joy and grandeur of majestic Gaekwad heritage ceremonies.</p>

<p>Contact us today to experience why Safawala is Baroda's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

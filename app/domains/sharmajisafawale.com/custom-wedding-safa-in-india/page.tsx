import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const INDIA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Premium Wedding-Grade Safa in India | Safawala India",
  description: "Looking for premium safa in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage ...",
  keywords: "custom wedding safa in india, safa India, wedding safa India, safa service India",
  openGraph: {
    title: "Premium Wedding-Grade Safa in India | Safawala India",
    description: "Premium safa service in India by Safawala India.",
    url: "https://sharmajisafawale.com/custom-wedding-safa-in-india",
    type: "website",
  },
}

export default function CustomWeddingSafaInIndiaPage() {
  const pageData = {
    title: "Premium Wedding-Grade Safa in India",
    shortDescription: "Looking for premium safa in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium safa service in India by Safawala India.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: INDIA_AREAS,
    keyFeatures: ["Competitive pricing for individual and bulk orders", "Emergency last-minute service available in India", "Premium materials - silk, brocade, velvet, and designer fabrics", "Customized designs matching your wedding theme and outfit", "Authentic traditional tying techniques perfected over generations", "Expert safa specialists with 40+ years experience in India"],
    seoKeywords: ["custom wedding safa in india", "safa India", "wedding safa India", "safa service India"],
    faqs: [
  {
    "question": "Do you provide on-site Safa tying service in India?",
    "answer": "Yes, we provide professional on-site Safa tying service across all India areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  },
  {
    "question": "Can I see Safa designs before booking in India?",
    "answer": "Absolutely! We can share our complete Safa catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "What is the price of Safa in India?",
    "answer": "Our Safa prices in India start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "Do you provide matching Safa for barati in India?",
    "answer": "Yes, we specialize in coordinated Safa for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "How early should I book Safa for my India wedding?",
    "answer": "We recommend booking your Safa at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  }
],
    content: `
<h2>Welcome to Safawala India - Your Premier Premium Wedding-Grade Safa in India Destination</h2>

<p>Welcome to Safawala India - your premier destination for Safa services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala India for Safa?</h2>

<p>When it comes to <strong>safa</strong> in India, Safawala stands apart as the region's most trusted turban specialists. Here's why families across India choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our safa expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in India.</p>

<h3>Premium Quality Materials</h3>
<p>Every safa features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary safa tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-India Service Coverage</h3>
<p>We provide on-site safa services across all India areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Safa Services in India</h2>

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



<h2>Service Areas in India</h2>

<p>We provide professional turban services across all India areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our India team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Safa in India</h2>

<p>Ready to experience the finest safa service in India? Booking is simple:</p>

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

<p>At Safawala India, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each safa reflects the joy and grandeur of traditional ceremonies.</p>

<p>Contact us today to experience why Safawala is India's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

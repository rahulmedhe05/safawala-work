import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const INDIA_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Pagri in India | Safawala India",
  description: "Looking for premium pagri in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage...",
  keywords: "pagri in india, pagri India, wedding pagri India, pagri service India",
  openGraph: {
    title: "Pagri in India | Safawala India",
    description: "Premium pagri service in India by Safawala India.",
    url: "https://sharmajisafawale.com/pagri-in-india",
    type: "website",
  },
}

export default function PagriInIndiaPage() {
  const pageData = {
    title: "Pagri in India",
    shortDescription: "Looking for premium pagri in India? Safawala India is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium pagri service in India by Safawala India.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: INDIA_AREAS,
    keyFeatures: ["On-site professional service at your India venue", "Authentic traditional tying techniques perfected over generations", "Free consultation and design preview via WhatsApp", "Expert pagri specialists with 40+ years experience in India", "Premium materials - silk, brocade, velvet, and designer fabrics", "Perfect fit with maximum comfort guaranteed all day"],
    seoKeywords: ["pagri in india", "pagri India", "wedding pagri India", "pagri service India"],
    faqs: [
  {
    "question": "How long does Pagri tying take?",
    "answer": "Professional Pagri tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's Pagri receives extra attention for the perfect look."
  },
  {
    "question": "Do you offer Pagri for destination weddings outside India?",
    "answer": "Yes, we provide Pagri services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside India."
  },
  {
    "question": "What is the price of Pagri in India?",
    "answer": "Our Pagri prices in India start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "How early should I book Pagri for my India wedding?",
    "answer": "We recommend booking your Pagri at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Can I see Pagri designs before booking in India?",
    "answer": "Absolutely! We can share our complete Pagri catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  }
],
    content: `
<h2>Welcome to Safawala India - Your Premier Pagri in India Destination</h2>

<p>Welcome to Safawala India - your premier destination for Pagri services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala India for Pagri?</h2>

<p>When it comes to <strong>pagri</strong> in India, Safawala stands apart as the region's most trusted turban specialists. Here's why families across India choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our pagri expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in India.</p>

<h3>Premium Quality Materials</h3>
<p>Every pagri features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary pagri tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-India Service Coverage</h3>
<p>We provide on-site pagri services across all India areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Pagri Services in India</h2>

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



<h2>Service Areas in India</h2>

<p>We provide professional turban services across all India areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our India team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Pagri in India</h2>

<p>Ready to experience the finest pagri service in India? Booking is simple:</p>

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

<p>At Safawala India, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each pagri reflects the joy and grandeur of traditional ceremonies.</p>

<p>Contact us today to experience why Safawala is India's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

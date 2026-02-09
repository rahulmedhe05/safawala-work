import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const GURGAON_AREAS = ["DLF Phase 1", "Cyber City", "Golf Course Road", "MG Road", "Sohna Road"]

export const metadata: Metadata = {
  title: "Pagri in Gurgaon | Safawala Gurgaon",
  description: "Looking for premium pagri in Gurgaon? Safawala Gurgaon is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heri...",
  keywords: "pagri in gurgaon, pagri Gurgaon, wedding pagri Gurgaon, pagri service Gurgaon",
  openGraph: {
    title: "Pagri in Gurgaon | Safawala Gurgaon",
    description: "Premium pagri service in Gurgaon by Safawala Gurgaon.",
    url: "https://safawalagurgaon.com/pagri-in-gurgaon",
    type: "website",
  },
}

export default function PagriInGurgaonPage() {
  const pageData = {
    title: "Pagri in Gurgaon",
    shortDescription: "Looking for premium pagri in Gurgaon? Safawala Gurgaon is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium pagri service in Gurgaon by Safawala Gurgaon.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: GURGAON_AREAS,
    keyFeatures: ["Customized designs matching your wedding theme and outfit", "Competitive pricing for individual and bulk orders", "Complete barati packages with matching coordination", "Perfect fit with maximum comfort guaranteed all day", "Authentic traditional tying techniques perfected over generations", "Premium materials - silk, brocade, velvet, and designer fabrics"],
    seoKeywords: ["pagri in gurgaon", "pagri Gurgaon", "wedding pagri Gurgaon", "pagri service Gurgaon"],
    faqs: [
  {
    "question": "Can I see Pagri designs before booking in Gurgaon?",
    "answer": "Absolutely! We can share our complete Pagri catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "Do you provide matching Pagri for barati in Gurgaon?",
    "answer": "Yes, we specialize in coordinated Pagri for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "Do you offer Pagri for destination weddings outside Gurgaon?",
    "answer": "Yes, we provide Pagri services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Gurgaon."
  },
  {
    "question": "What is the price of Pagri in Gurgaon?",
    "answer": "Our Pagri prices in Gurgaon start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "How early should I book Pagri for my Gurgaon wedding?",
    "answer": "We recommend booking your Pagri at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  }
],
    content: `
<h2>Welcome to Safawala Gurgaon - Your Premier Pagri in Gurgaon Destination</h2>

<p>Discover the art of Pagri with Safawala Gurgaon. We combine traditional expertise with contemporary elegance to create stunning turbans that make you the center of attraction.</p>


<h2>Why Choose Safawala Gurgaon for Pagri?</h2>

<p>When it comes to <strong>pagri</strong> in Gurgaon, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Gurgaon choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our pagri expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Gurgaon.</p>

<h3>Premium Quality Materials</h3>
<p>Every pagri features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary pagri tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Gurgaon Service Coverage</h3>
<p>We provide on-site pagri services across all Gurgaon areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Pagri Services in Gurgaon</h2>

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



<h2>Service Areas in Gurgaon</h2>

<p>We provide professional turban services across all Gurgaon areas including DLF Phase 1, Cyber City, Golf Course Road, MG Road, Sohna Road.</p>

<p>Our Gurgaon team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Pagri in Gurgaon</h2>

<p>Ready to experience the finest pagri service in Gurgaon? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Gurgaon team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Gurgaon</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Gurgaon, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each pagri reflects the joy and grandeur of millennium city functions.</p>

<p>Contact us today to experience why Safawala is Gurgaon's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

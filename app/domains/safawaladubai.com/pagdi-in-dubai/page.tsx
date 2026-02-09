import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const DUBAI_AREAS = ["City Center", "Main Market", "Old Town", "New Town"]

export const metadata: Metadata = {
  title: "Pagdi in Dubai | Safawala Dubai",
  description: "Looking for premium pagdi in Dubai? Safawala Dubai is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage...",
  keywords: "pagdi in dubai, pagdi Dubai, wedding pagdi Dubai, pagdi service Dubai",
  openGraph: {
    title: "Pagdi in Dubai | Safawala Dubai",
    description: "Premium pagdi service in Dubai by Safawala Dubai.",
    url: "https://safawaladubai.com/pagdi-in-dubai",
    type: "website",
  },
}

export default function PagdiInDubaiPage() {
  const pageData = {
    title: "Pagdi in Dubai",
    shortDescription: "Looking for premium pagdi in Dubai? Safawala Dubai is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium pagdi service in Dubai by Safawala Dubai.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: DUBAI_AREAS,
    keyFeatures: ["Perfect fit with maximum comfort guaranteed all day", "Competitive pricing for individual and bulk orders", "Emergency last-minute service available in Dubai", "On-site professional service at your Dubai venue", "Premium materials - silk, brocade, velvet, and designer fabrics", "Free consultation and design preview via WhatsApp"],
    seoKeywords: ["pagdi in dubai", "pagdi Dubai", "wedding pagdi Dubai", "pagdi service Dubai"],
    faqs: [
  {
    "question": "What materials are used in your Pagdi collection?",
    "answer": "Our Pagdi collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "What is the price of Pagdi in Dubai?",
    "answer": "Our Pagdi prices in Dubai start from \u20b9500 for basic options and go up to \u20b95000+ for premium designer pieces. We offer packages for individuals and bulk orders for barati. Contact us for a customized quote based on your specific requirements."
  },
  {
    "question": "How early should I book Pagdi for my Dubai wedding?",
    "answer": "We recommend booking your Pagdi at least 2-3 weeks before your wedding date, especially during peak wedding season. For last-minute bookings, contact us directly as we try to accommodate urgent requests whenever possible."
  },
  {
    "question": "Can I see Pagdi designs before booking in Dubai?",
    "answer": "Absolutely! We can share our complete Pagdi catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "Do you provide on-site Pagdi tying service in Dubai?",
    "answer": "Yes, we provide professional on-site Pagdi tying service across all Dubai areas. Our expert turban specialists will come to your venue fully equipped to ensure perfect styling for the groom and barati."
  }
],
    content: `
<h2>Welcome to Safawala Dubai - Your Premier Pagdi in Dubai Destination</h2>

<p>Welcome to Safawala Dubai - your premier destination for Pagdi services. With over 40 years of expertise in traditional turban craftsmanship, we bring royal elegance to your special day.</p>


<h2>Why Choose Safawala Dubai for Pagdi?</h2>

<p>When it comes to <strong>pagdi</strong> in Dubai, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Dubai choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our pagdi expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Dubai.</p>

<h3>Premium Quality Materials</h3>
<p>Every pagdi features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary pagdi tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Dubai Service Coverage</h3>
<p>We provide on-site pagdi services across all Dubai areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Pagdi Services in Dubai</h2>

<h3>Groom Pagdi Specialist</h3>
<p>Make your entrance truly royal with our premium groom pagdi. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati Pagdi Packages</h3>
<p>Coordinate your baraat with our bulk pagdi packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family Pagdi Service</h3>
<p>Complete pagdi styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental Pagdi Options</h3>
<p>Premium pagdi available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer Pagdi</h3>
<p>Want something unique? Our designer pagdi service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>



<h2>Service Areas in Dubai</h2>

<p>We provide professional turban services across all Dubai areas including City Center, Main Market, Old Town, New Town.</p>

<p>Our Dubai team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Pagdi in Dubai</h2>

<p>Ready to experience the finest pagdi service in Dubai? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Dubai team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Dubai</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Dubai, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each pagdi reflects the joy and grandeur of international destination weddings.</p>

<p>Contact us today to experience why Safawala is Dubai's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

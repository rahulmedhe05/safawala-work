import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const BARODA_AREAS = ["Alkapuri", "Fatehgunj", "Sayajigunj", "Race Course", "Manjalpur", "Gotri", "Akota", "Karelibaug"]

export const metadata: Metadata = {
  title: "Feta in Vadodara | Safawala Baroda",
  description: "Looking for premium feta in Vadodara? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of herit...",
  keywords: "feta in vadodara, feta Vadodara, wedding feta Vadodara, feta service Vadodara",
  openGraph: {
    title: "Feta in Vadodara | Safawala Baroda",
    description: "Premium feta service in Vadodara by Safawala Baroda.",
    url: "https://safawalabaroda.com/feta-in-vadodara",
    type: "website",
  },
}

export default function FetaInVadodaraPage() {
  const pageData = {
    title: "Feta in Vadodara",
    shortDescription: "Looking for premium feta in Vadodara? Safawala Baroda is your trusted partner for authentic turban service. Our expert specialists bring 40+ years of heritage to make your special day truly memorable.",
    description: "Premium feta service in Vadodara by Safawala Baroda.",
    mainImage: "/hero-groom.webp",
    videos: ["/main-video.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png"],
    areas: BARODA_AREAS,
    keyFeatures: ["Complete barati packages with matching coordination", "Customized designs matching your wedding theme and outfit", "Premium materials - silk, brocade, velvet, and designer fabrics", "Perfect fit with maximum comfort guaranteed all day", "Expert feta specialists with 40+ years experience in Vadodara", "Free consultation and design preview via WhatsApp"],
    seoKeywords: ["feta in vadodara", "feta Vadodara", "wedding feta Vadodara", "feta service Vadodara"],
    faqs: [
  {
    "question": "Can I see Feta designs before booking in Vadodara?",
    "answer": "Absolutely! We can share our complete Feta catalog via WhatsApp. You can also visit our collection to see the designs in person. We have hundreds of options including traditional and contemporary styles."
  },
  {
    "question": "Do you provide matching Feta for barati in Vadodara?",
    "answer": "Yes, we specialize in coordinated Feta for the entire baraat. We offer bulk packages with matching or complementary designs, ensuring the wedding party looks impressive and unified."
  },
  {
    "question": "What materials are used in your Feta collection?",
    "answer": "Our Feta collection features premium materials including pure silk, brocade, velvet, raw silk, and designer fabrics. We source the finest materials from Jaipur, Varanasi, and other traditional textile hubs."
  },
  {
    "question": "Do you offer Feta for destination weddings outside Vadodara?",
    "answer": "Yes, we provide Feta services for destination weddings across India and internationally. Our team regularly travels to provide services at luxury hotels, resorts, and wedding venues outside Vadodara."
  },
  {
    "question": "How long does Feta tying take?",
    "answer": "Professional Feta tying takes approximately 5-10 minutes per person. For groups, we deploy multiple specialists to ensure timely completion. Groom's Feta receives extra attention for the perfect look."
  }
],
    content: `
<h2>Welcome to Safawala Baroda - Your Premier Feta in Vadodara Destination</h2>

<p>Discover the art of Feta with Safawala Vadodara. We combine traditional expertise with contemporary elegance to create stunning turbans that make you the center of attraction.</p>


<h2>Why Choose Safawala Vadodara for Feta?</h2>

<p>When it comes to <strong>feta</strong> in Vadodara, Safawala stands apart as the region's most trusted turban specialists. Here's why families across Vadodara choose us:</p>

<h3>40+ Years of Turban Excellence</h3>
<p>Our feta expertise comes from four generations of dedicated craftsmanship. We understand the cultural significance of every turban and deliver perfection for your special occasions in Vadodara.</p>

<h3>Premium Quality Materials</h3>
<p>Every feta features premium fabrics - pure silk, rich brocade, luxurious velvet, and designer materials sourced from the finest textile houses. Your turban will look stunning from morning to night.</p>

<h3>Expert Turban Artists</h3>
<p>Our master artisans are specialists in traditional and contemporary feta tying techniques. They create the perfect fit, drape, and style customized to your face shape and wedding outfit.</p>

<h3>Pan-Vadodara Service Coverage</h3>
<p>We provide on-site feta services across all Vadodara areas. Our team arrives fully prepared with complete collections, professional equipment, and backup options.</p>



<h2>Our Feta Services in Vadodara</h2>

<h3>Groom Feta Specialist</h3>
<p>Make your entrance truly royal with our premium groom feta. Our specialists ensure the perfect style that complements your sherwani and wedding theme. Includes kalgi placement, sehra attachment, and finishing touches.</p>

<h3>Barati Feta Packages</h3>
<p>Coordinate your baraat with our bulk feta packages. We offer attractive group rates for 10, 25, 50, or 100+ pieces with professional on-site tying service. Multiple style options available.</p>

<h3>Family Feta Service</h3>
<p>Complete feta styling for father of the groom, brothers, uncles, and family members. Matching or complementary designs that create an impressive, unified appearance.</p>

<h3>Rental Feta Options</h3>
<p>Premium feta available on rent for budget-conscious families. Well-maintained collection in various sizes and styles. Includes tying service and cleaning.</p>

<h3>Custom Designer Feta</h3>
<p>Want something unique? Our designer feta service creates custom turbans matching your specific color, fabric, and style preferences. Perfect for themed weddings.</p>



<h2>Service Areas in Baroda</h2>

<p>We provide professional turban services across all Baroda areas including Alkapuri, Fatehgunj, Sayajigunj, Race Course, Manjalpur, Gotri, Akota, Karelibaug.</p>

<p>Our Baroda team travels to any venue - hotels, banquet halls, farmhouses, or home locations. We arrive fully equipped and ready to serve, ensuring no delay in your wedding schedule.</p>



<h2>Book Your Feta in Vadodara</h2>

<p>Ready to experience the finest feta service in Vadodara? Booking is simple:</p>

<ul>
<li><strong>WhatsApp:</strong> Send us your requirements at +91 97252 95692</li>
<li><strong>Call:</strong> Speak directly with our Vadodara team</li>
<li><strong>Schedule:</strong> Book a consultation to see our collection</li>
</ul>

<p>We recommend booking 2-3 weeks in advance during wedding season. Last-minute requests? We'll try our best to accommodate you!</p>

<h3>What to Share When Booking</h3>
<ul>
<li>Wedding date and venue location in Vadodara</li>
<li>Number of turbans required (groom + barati count)</li>
<li>Color preferences or wedding theme</li>
<li>Budget range</li>
<li>Any specific style preferences</li>
</ul>


<h2>Our Commitment to Excellence</h2>

<p>At Safawala Baroda, every turban tells a story of tradition, craftsmanship, and celebration. We take pride in being part of your special moments, ensuring each feta reflects the joy and grandeur of majestic Gaekwad heritage ceremonies.</p>

<p>Contact us today to experience why Safawala is Baroda's most trusted name in wedding turbans.</p>
`,
  }

  return <ServicePageTemplate {...pageData} />
}

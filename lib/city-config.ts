 // City Configuration for Multi-Domain Safa/Turban Services
// This file contains all city-specific data for generating domain pages

export interface CityConfig {
  cityName: string;
  citySlug: string;
  domain: string;
  phone: string;
  email: string;
  address: string;
  areas: string[];
  metaTitle: string;
  state: string;
  country: string;
}

// ============================================
// INDIAN CITIES
// ============================================

export const DELHI_CONFIG: CityConfig = {
  cityName: "Delhi",
  citySlug: "delhi",
  domain: "safawaladelhi.com",
  phone: "+91-9725295692",
  email: "info@safawaladelhi.com",
  address: "Shop No. 12, Chandni Chowk, Near Red Fort, Delhi - 110006",
  state: "Delhi",
  country: "India",
  areas: [
    "Connaught Place", "Chandni Chowk", "Karol Bagh", "Lajpat Nagar", "South Extension",
    "Greater Kailash", "Hauz Khas", "Vasant Kunj", "Dwarka", "Rohini",
    "Pitampura", "Janakpuri", "Rajouri Garden", "Punjabi Bagh", "Model Town",
    "Defence Colony", "Nehru Place", "Saket", "Green Park", "Safdarjung",
    "Chanakyapuri", "Civil Lines", "Paharganj", "Daryaganj", "Kashmere Gate",
    "Shahdara", "Preet Vihar", "Mayur Vihar", "Noida Sector", "Gurgaon"
  ],
  metaTitle: "Safawala Delhi"
};

export const JAIPUR_CONFIG: CityConfig = {
  cityName: "Jaipur",
  citySlug: "jaipur",
  domain: "safawalajaipur.com",
  phone: "+91-9725295692",
  email: "info@safawalajaipur.com",
  address: "Shop No. 8, Johari Bazaar, Near Hawa Mahal, Jaipur - 302001",
  state: "Rajasthan",
  country: "India",
  areas: [
    "Johari Bazaar", "MI Road", "C-Scheme", "Malviya Nagar", "Vaishali Nagar",
    "Mansarovar", "Raja Park", "Tonk Road", "Ajmer Road", "Sirsi Road",
    "Sanganer", "Jagatpura", "Pratap Nagar", "Jhotwara", "Vidyadhar Nagar",
    "Bani Park", "Adarsh Nagar", "Shyam Nagar", "Sodala", "Civil Lines",
    "Chandpole", "Tripolia Bazaar", "Bapu Bazaar", "Nehru Bazaar", "Gopalbari"
  ],
  metaTitle: "Safawala Jaipur"
};

export const AHMEDABAD_CONFIG: CityConfig = {
  cityName: "Ahmedabad",
  citySlug: "ahmedabad",
  domain: "safawalaahmedabad.com",
  phone: "+91-9725295692",
  email: "info@safawalaahmedabad.com",
  address: "Shop No. 22, Law Garden Road, Navrangpura, Ahmedabad - 380009",
  state: "Gujarat",
  country: "India",
  areas: [
    "Navrangpura", "CG Road", "Satellite", "Prahlad Nagar", "SG Highway",
    "Bodakdev", "Vastrapur", "Thaltej", "Ambawadi", "Paldi",
    "Ellis Bridge", "Ashram Road", "Maninagar", "Ghatlodia", "Chandkheda",
    "Bopal", "South Bopal", "Shilaj", "Gurukul", "Drive In Road",
    "Shivranjani", "Memnagar", "Naranpura", "Sabarmati", "Gandhinagar"
  ],
  metaTitle: "Safawala Ahmedabad"
};

export const SURAT_CONFIG: CityConfig = {
  cityName: "Surat",
  citySlug: "surat",
  domain: "safawalasurat.com",
  phone: "+91-9725295692",
  email: "info@safawalasurat.com",
  address: "Shop No. 5, Ring Road, Adajan, Surat - 395009",
  state: "Gujarat",
  country: "India",
  areas: [
    "Adajan", "Vesu", "Athwa", "City Light", "Piplod",
    "Althan", "Pal", "Ghod Dod Road", "Ring Road", "Dumas Road",
    "Katargam", "Varachha", "Udhna", "Pandesara", "Sachin",
    "Rander", "Magdalla", "Jahangirpura", "Sagrampura", "Majura Gate"
  ],
  metaTitle: "Safawala Surat"
};

export const PUNE_CONFIG: CityConfig = {
  cityName: "Pune",
  citySlug: "pune",
  domain: "safawalapune.com",
  phone: "+91-9725295692",
  email: "info@safawalapune.com",
  address: "Shop No. 18, FC Road, Shivajinagar, Pune - 411004",
  state: "Maharashtra",
  country: "India",
  areas: [
    "Shivajinagar", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Kharadi",
    "Hinjewadi", "Baner", "Aundh", "Kothrud", "Deccan",
    "Camp", "MG Road", "JM Road", "FC Road", "Swargate",
    "Hadapsar", "Magarpatta", "Pimpri", "Chinchwad", "Wakad",
    "Pimple Saudagar", "Balewadi", "Pashan", "Bavdhan", "Warje"
  ],
  metaTitle: "Safawala Pune"
};

export const BANGALORE_CONFIG: CityConfig = {
  cityName: "Bangalore",
  citySlug: "bangalore",
  domain: "safawalabangalore.com",
  phone: "+91-9725295692",
  email: "info@safawalabangalore.com",
  address: "Shop No. 25, Commercial Street, Bangalore - 560001",
  state: "Karnataka",
  country: "India",
  areas: [
    "MG Road", "Brigade Road", "Commercial Street", "Indiranagar", "Koramangala",
    "HSR Layout", "BTM Layout", "Whitefield", "Electronic City", "Marathahalli",
    "Jayanagar", "JP Nagar", "Bannerghatta Road", "Sarjapur Road", "Hebbal",
    "Malleshwaram", "Rajajinagar", "Basavanagudi", "Sadashivanagar", "RT Nagar",
    "Yelahanka", "Hennur", "Kalyan Nagar", "Bellandur", "Brookefield"
  ],
  metaTitle: "Safawala Bangalore"
};

export const HYDERABAD_CONFIG: CityConfig = {
  cityName: "Hyderabad",
  citySlug: "hyderabad",
  domain: "safawalahyderabad.com",
  phone: "+91-9725295692",
  email: "info@safawalahyderabad.com",
  address: "Shop No. 10, Begumpet, Hyderabad - 500016",
  state: "Telangana",
  country: "India",
  areas: [
    "Banjara Hills", "Jubilee Hills", "Madhapur", "Gachibowli", "Kondapur",
    "Kukatpally", "HITEC City", "Begumpet", "Secunderabad", "Ameerpet",
    "Somajiguda", "Himayatnagar", "Abids", "Nampally", "Charminar",
    "Tolichowki", "Mehdipatnam", "LB Nagar", "Dilsukhnagar", "Miyapur",
    "Manikonda", "Nallagandla", "Attapur", "Shamshabad", "Kompally"
  ],
  metaTitle: "Safawala Hyderabad"
};

export const CHENNAI_CONFIG: CityConfig = {
  cityName: "Chennai",
  citySlug: "chennai",
  domain: "safawalashennai.com",
  phone: "+91-9725295692",
  email: "info@safawalashennai.com",
  address: "Shop No. 15, T Nagar, Chennai - 600017",
  state: "Tamil Nadu",
  country: "India",
  areas: [
    "T Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR",
    "Nungambakkam", "Mylapore", "Alwarpet", "Besant Nagar", "Thiruvanmiyur",
    "Porur", "Vadapalani", "Ashok Nagar", "KK Nagar", "Kodambakkam",
    "Egmore", "Kilpauk", "Chetpet", "Royapettah", "Guindy",
    "Sholinganallur", "Perungudi", "Pallavaram", "Tambaram", "Chromepet"
  ],
  metaTitle: "Safawala Chennai"
};

export const KOLKATA_CONFIG: CityConfig = {
  cityName: "Kolkata",
  citySlug: "kolkata",
  domain: "safawalakolkata.com",
  phone: "+91-9725295692",
  email: "info@safawalakolkata.com",
  address: "Shop No. 8, Park Street, Kolkata - 700016",
  state: "West Bengal",
  country: "India",
  areas: [
    "Park Street", "Salt Lake", "New Town", "Ballygunge", "Alipore",
    "Gariahat", "Lake Town", "Behala", "Tollygunge", "Golf Green",
    "EM Bypass", "Jadavpur", "Garia", "Barasat", "Dum Dum",
    "Howrah", "Sealdah", "Esplanade", "College Street", "Shyambazar",
    "Ultadanga", "VIP Road", "Rajarhat", "Newtown Action Area", "Kasba"
  ],
  metaTitle: "Safawala Kolkata"
};

export const LUCKNOW_CONFIG: CityConfig = {
  cityName: "Lucknow",
  citySlug: "lucknow",
  domain: "safawalaucknow.com",
  phone: "+91-9725295692",
  email: "info@safawalaucknow.com",
  address: "Shop No. 12, Hazratganj, Lucknow - 226001",
  state: "Uttar Pradesh",
  country: "India",
  areas: [
    "Hazratganj", "Gomti Nagar", "Aliganj", "Indira Nagar", "Rajajipuram",
    "Alambagh", "Aminabad", "Chowk", "Kaiserbagh", "Mahanagar",
    "Vikas Nagar", "Jankipuram", "Aashiana", "Chinhat", "Telibagh",
    "Cantt", "Naka Hindola", "Nishatganj", "Husainabad", "Daliganj"
  ],
  metaTitle: "Safawala Lucknow"
};

export const JODHPUR_CONFIG: CityConfig = {
  cityName: "Jodhpur",
  citySlug: "jodhpur",
  domain: "safawalajodhpur.com",
  phone: "+91-9725295692",
  email: "info@safawalajodhpur.com",
  address: "Shop No. 5, Clock Tower, Jodhpur - 342001",
  state: "Rajasthan",
  country: "India",
  areas: [
    "Clock Tower", "Sardarpura", "Ratanada", "Shastri Nagar", "Paota",
    "Chopasni Road", "Residency Road", "High Court Colony", "Pal Road", "Mandore Road",
    "Basni", "Pratap Nagar", "Kamla Nehru Nagar", "Jodhpur Cantt", "Civil Lines",
    "Soorsagar", "Nai Sarak", "Station Road", "Loco Area", "Sangariya"
  ],
  metaTitle: "Safawala Jodhpur"
};

export const UDAIPUR_CONFIG: CityConfig = {
  cityName: "Udaipur",
  citySlug: "udaipur",
  domain: "safawalaudaipur.com",
  phone: "+91-9725295692",
  email: "info@safawalaudaipur.com",
  address: "Shop No. 8, Hathi Pol, Udaipur - 313001",
  state: "Rajasthan",
  country: "India",
  areas: [
    "Hathi Pol", "City Palace Area", "Lake Pichola", "Fateh Sagar", "Sukhadia Circle",
    "Chetak Circle", "Saheli Marg", "Bhatt Ji Ki Bari", "Ambamata", "Sector 14",
    "Sector 11", "University Road", "Goverdhan Vilas", "Madhuban", "Shobhagpura",
    "Pratap Nagar", "Ashok Nagar", "Bedla", "Hiran Magri", "Rani Road"
  ],
  metaTitle: "Safawala Udaipur"
};

// ============================================
// INTERNATIONAL CITIES
// ============================================

export const DUBAI_CONFIG: CityConfig = {
  cityName: "Dubai",
  citySlug: "dubai",
  domain: "safawaladubai.com",
  phone: "+971-50-1234567",
  email: "info@safawaladubai.com",
  address: "Shop No. 25, Meena Bazaar, Bur Dubai, Dubai, UAE",
  state: "Dubai",
  country: "UAE",
  areas: [
    "Bur Dubai", "Deira", "Karama", "Downtown Dubai", "Dubai Marina",
    "JBR", "Palm Jumeirah", "Business Bay", "DIFC", "JLT",
    "Al Barsha", "Silicon Oasis", "Sports City", "Motor City", "Discovery Gardens",
    "International City", "Al Qusais", "Mirdif", "Al Nahda", "Jumeirah",
    "Umm Suqeim", "Al Mankhool", "Al Satwa", "Al Rigga", "Oud Metha"
  ],
  metaTitle: "Safawala Dubai"
};

export const ABU_DHABI_CONFIG: CityConfig = {
  cityName: "Abu Dhabi",
  citySlug: "abu-dhabi",
  domain: "safawalaabudhabi.com",
  phone: "+971-50-1234568",
  email: "info@safawalaabudhabi.com",
  address: "Shop No. 12, Hamdan Street, Abu Dhabi, UAE",
  state: "Abu Dhabi",
  country: "UAE",
  areas: [
    "Hamdan Street", "Corniche", "Al Khalidiyah", "Tourist Club Area", "Al Maryah Island",
    "Al Reem Island", "Yas Island", "Saadiyat Island", "Al Mushrif", "Al Nahyan",
    "Al Bateen", "Al Manaseer", "Khalifa City", "Mohammed Bin Zayed City", "Al Shamkha",
    "Mussafah", "Al Reef", "Al Raha Beach", "Al Marina", "Eastern Mangroves"
  ],
  metaTitle: "Safawala Abu Dhabi"
};

export const SHARJAH_CONFIG: CityConfig = {
  cityName: "Sharjah",
  citySlug: "sharjah",
  domain: "safawalasharjah.com",
  phone: "+971-50-1234569",
  email: "info@safawalasharjah.com",
  address: "Shop No. 8, Al Majaz, Sharjah, UAE",
  state: "Sharjah",
  country: "UAE",
  areas: [
    "Al Majaz", "Al Nahda", "Al Qasimia", "Al Khan", "Bu Tina",
    "Al Taawun", "Muwaileh", "Al Gharayen", "Sharjah Industrial Area", "Al Yarmook"
  ],
  metaTitle: "Safawala Sharjah"
};

export const LONDON_CONFIG: CityConfig = {
  cityName: "London",
  citySlug: "london",
  domain: "safawalalodnon.com",
  phone: "+44-20-12345678",
  email: "info@safawalalodnon.com",
  address: "Shop No. 15, Southall Broadway, London, UK",
  state: "Greater London",
  country: "UK",
  areas: [
    "Southall", "Wembley", "Harrow", "Hounslow", "Ilford",
    "East Ham", "Newham", "Tower Hamlets", "Tooting", "Croydon",
    "Ealing", "Brent", "Barking", "Redbridge", "Leyton",
    "Stratford", "Green Street", "Upton Park", "Whitechapel", "Brick Lane"
  ],
  metaTitle: "Safawala London"
};

export const NEW_YORK_CONFIG: CityConfig = {
  cityName: "New York",
  citySlug: "new-york",
  domain: "safawalanewyork.com",
  phone: "+1-212-1234567",
  email: "info@safawalanewyork.com",
  address: "Jackson Heights, Queens, New York, NY 10001, USA",
  state: "New York",
  country: "USA",
  areas: [
    "Jackson Heights", "Flushing", "Jamaica", "Richmond Hill", "Ozone Park",
    "Edison NJ", "Jersey City", "Iselin", "Hicksville", "Long Island",
    "Brooklyn", "Manhattan", "Queens", "Bronx", "Staten Island"
  ],
  metaTitle: "Safawala New York"
};

export const TORONTO_CONFIG: CityConfig = {
  cityName: "Toronto",
  citySlug: "toronto",
  domain: "safawalatoronto.com",
  phone: "+1-416-1234567",
  email: "info@safawalatoronto.com",
  address: "Gerrard India Bazaar, Toronto, ON, Canada",
  state: "Ontario",
  country: "Canada",
  areas: [
    "Gerrard India Bazaar", "Brampton", "Mississauga", "Scarborough", "Markham",
    "North York", "Etobicoke", "Richmond Hill", "Vaughan", "Ajax",
    "Pickering", "Milton", "Oakville", "Burlington", "Hamilton"
  ],
  metaTitle: "Safawala Toronto"
};

export const SYDNEY_CONFIG: CityConfig = {
  cityName: "Sydney",
  citySlug: "sydney",
  domain: "safawalasydney.com",
  phone: "+61-2-12345678",
  email: "info@safawalasydney.com",
  address: "Harris Park, Sydney, NSW, Australia",
  state: "New South Wales",
  country: "Australia",
  areas: [
    "Harris Park", "Parramatta", "Westmead", "Blacktown", "Liverpool",
    "Penrith", "Campbelltown", "Bankstown", "Auburn", "Strathfield",
    "Chatswood", "Hurstville", "Kogarah", "Rockdale", "Burwood"
  ],
  metaTitle: "Safawala Sydney"
};

export const SINGAPORE_CONFIG: CityConfig = {
  cityName: "Singapore",
  citySlug: "singapore",
  domain: "safawalasingapore.com",
  phone: "+65-1234-5678",
  email: "info@safawalasingapore.com",
  address: "Little India, Serangoon Road, Singapore",
  state: "Singapore",
  country: "Singapore",
  areas: [
    "Little India", "Serangoon", "Jurong", "Tampines", "Bedok",
    "Woodlands", "Yishun", "Ang Mo Kio", "Toa Payoh", "Clementi",
    "Bukit Timah", "Orchard", "Marina Bay", "Sentosa", "Changi"
  ],
  metaTitle: "Safawala Singapore"
};

// ============================================
// ALL CITY CONFIGS
// ============================================

export const ALL_CITY_CONFIGS: CityConfig[] = [
  // India
  DELHI_CONFIG,
  JAIPUR_CONFIG,
  AHMEDABAD_CONFIG,
  SURAT_CONFIG,
  PUNE_CONFIG,
  BANGALORE_CONFIG,
  HYDERABAD_CONFIG,
  CHENNAI_CONFIG,
  KOLKATA_CONFIG,
  LUCKNOW_CONFIG,
  JODHPUR_CONFIG,
  UDAIPUR_CONFIG,
  // International
  DUBAI_CONFIG,
  ABU_DHABI_CONFIG,
  SHARJAH_CONFIG,
  LONDON_CONFIG,
  NEW_YORK_CONFIG,
  TORONTO_CONFIG,
  SYDNEY_CONFIG,
  SINGAPORE_CONFIG,
];

// ============================================
// SERVICE KEYWORDS
// ============================================

export const SERVICE_KEYWORDS = [
  // Core Services
  { slug: "safa", title: "Safa", description: "traditional safa" },
  { slug: "pagdi", title: "Pagdi", description: "traditional pagdi" },
  { slug: "pagri", title: "Pagri", description: "traditional pagri" },
  { slug: "turban", title: "Turban", description: "wedding turban" },
  { slug: "feta", title: "Feta", description: "traditional feta" },
  { slug: "sehra", title: "Sehra", description: "groom sehra" },
  
  // Groom Specific
  { slug: "dulha-safa", title: "Dulha Safa", description: "groom safa" },
  { slug: "dulha-pagdi", title: "Dulha Pagdi", description: "groom pagdi" },
  { slug: "dulha-pagri", title: "Dulha Pagri", description: "groom pagri" },
  { slug: "dulha-sehra", title: "Dulha Sehra", description: "groom sehra" },
  { slug: "groom-turban", title: "Groom Turban", description: "groom turban" },
  { slug: "groom-safa", title: "Groom Safa", description: "groom safa" },
  { slug: "groom-pagdi", title: "Groom Pagdi", description: "groom pagdi" },
  { slug: "groom-sehra", title: "Groom Sehra", description: "groom sehra" },
  { slug: "groom-feta", title: "Groom Feta", description: "groom feta" },
  
  // Wedding Specific
  { slug: "wedding-safa", title: "Wedding Safa", description: "wedding safa" },
  { slug: "wedding-turban", title: "Wedding Turban", description: "wedding turban" },
  { slug: "wedding-pagdi", title: "Wedding Pagdi", description: "wedding pagdi" },
  { slug: "wedding-pagri", title: "Wedding Pagri", description: "wedding pagri" },
  { slug: "wedding-feta", title: "Wedding Feta", description: "wedding feta" },
  
  // Barati
  { slug: "barati-safa", title: "Barati Safa", description: "barati safa" },
  { slug: "barati-turban", title: "Barati Turban", description: "barati turban" },
  { slug: "baarat-safa", title: "Baarat Safa", description: "baraat safa" },
  
  // Regional Styles
  { slug: "rajasthani-safa", title: "Rajasthani Safa", description: "Rajasthani style safa" },
  { slug: "jodhpuri-safa", title: "Jodhpuri Safa", description: "Jodhpuri style safa" },
  { slug: "marwari-safa", title: "Marwari Safa", description: "Marwari style safa" },
  { slug: "rajputi-safa", title: "Rajputi Safa", description: "Rajputi style safa" },
  { slug: "rajwadi-safa", title: "Rajwadi Safa", description: "royal Rajwadi safa" },
  { slug: "maharaja-safa", title: "Maharaja Safa", description: "royal Maharaja safa" },
  
  // Designer/Premium
  { slug: "designer-safa", title: "Designer Safa", description: "designer safa" },
  { slug: "designer-turban", title: "Designer Turban", description: "designer turban" },
  { slug: "premium-safa", title: "Premium Safa", description: "premium safa" },
  { slug: "royal-safa", title: "Royal Safa", description: "royal safa" },
  
  // Rental Services
  { slug: "safa-on-rent", title: "Safa on Rent", description: "safa rental" },
  { slug: "turban-on-rent", title: "Turban on Rent", description: "turban rental" },
  { slug: "pagdi-on-rent", title: "Pagdi on Rent", description: "pagdi rental" },
  
  // Colors
  { slug: "red-safa", title: "Red Safa", description: "red color safa" },
  { slug: "golden-safa", title: "Golden Safa", description: "golden safa" },
  { slug: "maroon-safa", title: "Maroon Safa", description: "maroon safa" },
  { slug: "pink-safa", title: "Pink Safa", description: "pink safa" },
  { slug: "white-safa", title: "White Safa", description: "white safa" },
  
  // Fabric Types
  { slug: "silk-safa", title: "Silk Safa", description: "silk safa" },
  { slug: "bandhej-safa", title: "Bandhej Safa", description: "bandhej safa" },
  { slug: "velvet-safa", title: "Velvet Safa", description: "velvet safa" },
  { slug: "brocade-safa", title: "Brocade Safa", description: "brocade safa" },
  
  // Events
  { slug: "engagement-safa", title: "Engagement Safa", description: "engagement safa" },
  { slug: "sangeet-safa", title: "Sangeet Safa", description: "sangeet safa" },
  { slug: "mehendi-safa", title: "Mehendi Safa", description: "mehendi safa" },
  { slug: "reception-turban", title: "Reception Turban", description: "reception turban" },
  
  // Special Categories
  { slug: "destination-wedding-safa", title: "Destination Wedding Safa", description: "destination wedding safa" },
  { slug: "beach-wedding-safa", title: "Beach Wedding Safa", description: "beach wedding safa" },
  { slug: "safa-tying-service", title: "Safa Tying Service", description: "safa tying service" },
  { slug: "turban-tying-service", title: "Turban Tying Service", description: "turban tying service" },
];

// Helper function to get city config by slug
export function getCityConfig(citySlug: string): CityConfig | undefined {
  return ALL_CITY_CONFIGS.find(config => config.citySlug === citySlug);
}

// Helper function to generate page slug for a keyword in a city
export function generatePageSlug(keywordSlug: string, citySlug: string): string {
  return `${keywordSlug}-in-${citySlug}`;
}

// Domain-specific configuration for all 133 domains
// Each domain has customized home page content

export interface DomainConfig {
  domain: string;
  brandName: string;
  location: string;
  tagline: string;
  heroSlides: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  phone: string;
  email: string;
  metaTitle: string;
  metaDescription: string;
}

// Helper to generate domain config
function generateDomainConfig(
  domain: string,
  type: 'city' | 'product' | 'service',
  name: string,
  location: string = 'India'
): DomainConfig {
  const brandName = name.charAt(0).toUpperCase() + name.slice(1);
  
  const citySlides = [
    {
      title: `Premium Safa & Turban Service in ${location}`,
      subtitle: `${brandName} - Your Trusted Partner`,
      description: `Professional safa, pagdi & turban tying services for weddings, baraats and special occasions across ${location}`,
    },
    {
      title: `Wedding Turban & Pagdi in ${location}`,
      subtitle: `Expert Turban Tying Service`,
      description: `Handcrafted premium turbans for grooms, baratis and family members at your destination in ${location}`,
    },
    {
      title: `Groom Safa & Sehra in ${location}`,
      subtitle: `Royal Look for Your Special Day`,
      description: `Traditional and designer safa collections with professional tying service in ${location}`,
    },
  ];

  const productSlides = [
    {
      title: `Premium ${brandName} Collection`,
      subtitle: `Authentic Traditional Turbans`,
      description: `Explore our exclusive ${brandName.toLowerCase()} designs for weddings, festivals and special occasions across India`,
    },
    {
      title: `${brandName} for Groom & Baratis`,
      subtitle: `Handcrafted Excellence`,
      description: `Traditional ${brandName.toLowerCase()} with expert tying service for your perfect wedding look`,
    },
    {
      title: `Designer ${brandName} Styles`,
      subtitle: `Premium Quality Fabrics`,
      description: `Custom ${brandName.toLowerCase()} designs in various colors, patterns and fabrics for every occasion`,
    },
  ];

  const serviceSlides = [
    {
      title: `Professional ${brandName} Service`,
      subtitle: `Expert Turban Solutions`,
      description: `Complete ${brandName.toLowerCase()} services for weddings, corporate events and special occasions`,
    },
    {
      title: `${brandName} for All Occasions`,
      subtitle: `Trusted by Thousands`,
      description: `From intimate ceremonies to grand weddings - professional ${brandName.toLowerCase()} service across India`,
    },
    {
      title: `Custom ${brandName} Solutions`,
      subtitle: `Tailored to Your Needs`,
      description: `Personalized ${brandName.toLowerCase()} matching your wedding theme, colors and preferences`,
    },
  ];

  return {
    domain,
    brandName,
    location,
    tagline: type === 'city' 
      ? `Premium Safa & Turban Service in ${location}`
      : `Premium ${brandName} Collection`,
    heroSlides: type === 'city' ? citySlides : (type === 'product' ? productSlides : serviceSlides),
    phone: '+91-9725295692',
    email: `info@${domain}`,
    metaTitle: type === 'city'
      ? `Safawala ${location} - Premium Safa, Pagdi & Turban Service`
      : `${brandName} - Premium Safa & Turban Collection`,
    metaDescription: type === 'city'
      ? `Best safa, pagdi, turban & sehra tying service in ${location}. Professional turban experts for weddings, baraat & special occasions.`
      : `Premium ${brandName.toLowerCase()} collection for weddings & special occasions. Expert turban tying service across India.`,
  };
}

// All 133 domain configurations
export const DOMAIN_CONFIGS: Record<string, DomainConfig> = {
  // Product/Style Based Domains
  'bandhejsafa.com': generateDomainConfig('bandhejsafa.com', 'product', 'Bandhej Safa', 'Rajasthan'),
  'baratisafa.com': generateDomainConfig('baratisafa.com', 'product', 'Barati Safa', 'India'),
  'baratsafa.com': generateDomainConfig('baratsafa.com', 'product', 'Barat Safa', 'India'),
  'baratturban.com': generateDomainConfig('baratturban.com', 'product', 'Barat Turban', 'India'),
  'barodasafawala.com': generateDomainConfig('barodasafawala.com', 'city', 'Safawala Baroda', 'Baroda'),
  'barodasafawala.in': generateDomainConfig('barodasafawala.in', 'city', 'Safawala Baroda', 'Baroda'),
  'bestsafapagdifetaturban.com': generateDomainConfig('bestsafapagdifetaturban.com', 'product', 'Best Safa Pagdi Feta Turban', 'India'),
  'bestsafapagdifetaturban.in': generateDomainConfig('bestsafapagdifetaturban.in', 'product', 'Best Safa Pagdi Feta Turban', 'India'),
  'bollywoodsafawala.com': generateDomainConfig('bollywoodsafawala.com', 'product', 'Bollywood Safa', 'Mumbai'),
  'bulksafa.com': generateDomainConfig('bulksafa.com', 'service', 'Bulk Safa', 'India'),
  'corporateturban.com': generateDomainConfig('corporateturban.com', 'service', 'Corporate Turban', 'India'),
  'designersafa.com': generateDomainConfig('designersafa.com', 'product', 'Designer Safa', 'India'),
  'destinationweddingsafa.com': generateDomainConfig('destinationweddingsafa.com', 'service', 'Destination Wedding Safa', 'India'),
  'dulhasafa.com': generateDomainConfig('dulhasafa.com', 'product', 'Dulha Safa', 'India'),
  'eventturban.com': generateDomainConfig('eventturban.com', 'service', 'Event Turban', 'India'),
  'festivalsafa.com': generateDomainConfig('festivalsafa.com', 'product', 'Festival Safa', 'India'),
  'fetabinding.com': generateDomainConfig('fetabinding.com', 'service', 'Feta Binding', 'India'),
  'fetaforwedding.com': generateDomainConfig('fetaforwedding.com', 'product', 'Feta for Wedding', 'India'),
  'groompagri.com': generateDomainConfig('groompagri.com', 'product', 'Groom Pagri', 'India'),
  'groompagri.in': generateDomainConfig('groompagri.in', 'product', 'Groom Pagri', 'India'),
  'groomsafa.com': generateDomainConfig('groomsafa.com', 'product', 'Groom Safa', 'India'),
  'groomturban.com': generateDomainConfig('groomturban.com', 'product', 'Groom Turban', 'India'),
  'indianturban.com': generateDomainConfig('indianturban.com', 'product', 'Indian Turban', 'India'),
  'jaipurisafa.com': generateDomainConfig('jaipurisafa.com', 'product', 'Jaipuri Safa', 'Jaipur'),
  'jodhpurisafa.com': generateDomainConfig('jodhpurisafa.com', 'product', 'Jodhpuri Safa', 'Jodhpur'),
  'leheriyasafa.com': generateDomainConfig('leheriyasafa.com', 'product', 'Leheriya Safa', 'Rajasthan'),
  'luxuryturban.com': generateDomainConfig('luxuryturban.com', 'product', 'Luxury Turban', 'India'),
  'maharajasafa.com': generateDomainConfig('maharajasafa.com', 'product', 'Maharaja Safa', 'India'),
  'marwarisafa.com': generateDomainConfig('marwarisafa.com', 'product', 'Marwari Safa', 'Rajasthan'),
  'mewadisafa.com': generateDomainConfig('mewadisafa.com', 'product', 'Mewadi Safa', 'Mewar'),
  'mysafawala.com': generateDomainConfig('mysafawala.com', 'service', 'My Safawala', 'India'),
  'mysafawale.com': generateDomainConfig('mysafawale.com', 'service', 'My Safawale', 'India'),
  'originalsafawala.com': generateDomainConfig('originalsafawala.com', 'service', 'Original Safawala', 'India'),
  'pachrangisafa.com': generateDomainConfig('pachrangisafa.com', 'product', 'Pachrangi Safa', 'Rajasthan'),
  'pachrangisafa.in': generateDomainConfig('pachrangisafa.in', 'product', 'Pachrangi Safa', 'Rajasthan'),
  'pagdi.com': generateDomainConfig('pagdi.com', 'product', 'Pagdi', 'India'),
  'pagdi.online': generateDomainConfig('pagdi.online', 'product', 'Pagdi', 'India'),
  'pagdibinding.com': generateDomainConfig('pagdibinding.com', 'service', 'Pagdi Binding', 'India'),
  'pagdiforgroom.com': generateDomainConfig('pagdiforgroom.com', 'product', 'Pagdi for Groom', 'India'),
  'pagdiforgroom.in': generateDomainConfig('pagdiforgroom.in', 'product', 'Pagdi for Groom', 'India'),
  'pagdiforwedding.com': generateDomainConfig('pagdiforwedding.com', 'product', 'Pagdi for Wedding', 'India'),
  'pagdirajasthani.com': generateDomainConfig('pagdirajasthani.com', 'product', 'Rajasthani Pagdi', 'Rajasthan'),
  'paghdi.in': generateDomainConfig('paghdi.in', 'product', 'Paghdi', 'India'),
  'pagri.shop': generateDomainConfig('pagri.shop', 'product', 'Pagri', 'India'),
  'punjabipagdi.com': generateDomainConfig('punjabipagdi.com', 'product', 'Punjabi Pagdi', 'Punjab'),
  'punjabipagdi.in': generateDomainConfig('punjabipagdi.in', 'product', 'Punjabi Pagdi', 'Punjab'),
  'rajasthanipagdi.com': generateDomainConfig('rajasthanipagdi.com', 'product', 'Rajasthani Pagdi', 'Rajasthan'),
  'rajasthanipagdi.in': generateDomainConfig('rajasthanipagdi.in', 'product', 'Rajasthani Pagdi', 'Rajasthan'),
  'rajasthanisafa.com': generateDomainConfig('rajasthanisafa.com', 'product', 'Rajasthani Safa', 'Rajasthan'),
  'rajputisafa.com': generateDomainConfig('rajputisafa.com', 'product', 'Rajputi Safa', 'Rajasthan'),
  'rajputisafa.in': generateDomainConfig('rajputisafa.in', 'product', 'Rajputi Safa', 'Rajasthan'),
  'rajwadisafa.com': generateDomainConfig('rajwadisafa.com', 'product', 'Rajwadi Safa', 'Rajasthan'),
  'royalsafa.com': generateDomainConfig('royalsafa.com', 'product', 'Royal Safa', 'India'),
  'royalturban.com': generateDomainConfig('royalturban.com', 'product', 'Royal Turban', 'India'),
  'saafa.online': generateDomainConfig('saafa.online', 'product', 'Saafa', 'India'),
  'safabandhi.com': generateDomainConfig('safabandhi.com', 'service', 'Safa Bandhi', 'India'),
  'safadesign.in': generateDomainConfig('safadesign.in', 'product', 'Safa Design', 'India'),
  'safaforgroom.com': generateDomainConfig('safaforgroom.com', 'product', 'Safa for Groom', 'India'),
  'safaforgroom.in': generateDomainConfig('safaforgroom.in', 'product', 'Safa for Groom', 'India'),
  'safagroom.com': generateDomainConfig('safagroom.com', 'product', 'Safa Groom', 'India'),
  'safagroom.in': generateDomainConfig('safagroom.in', 'product', 'Safa Groom', 'India'),
  'safajodhpuri.com': generateDomainConfig('safajodhpuri.com', 'product', 'Jodhpuri Safa', 'Jodhpur'),
  'safajodhpuri.in': generateDomainConfig('safajodhpuri.in', 'product', 'Jodhpuri Safa', 'Jodhpur'),
  'safaonrent.com': generateDomainConfig('safaonrent.com', 'service', 'Safa on Rent', 'India'),
  'safapagdi.com': generateDomainConfig('safapagdi.com', 'product', 'Safa Pagdi', 'India'),
  'safapagdi.in': generateDomainConfig('safapagdi.in', 'product', 'Safa Pagdi', 'India'),
  'safarental.com': generateDomainConfig('safarental.com', 'service', 'Safa Rental', 'India'),
  'safaservice.com': generateDomainConfig('safaservice.com', 'service', 'Safa Service', 'India'),
  'safatying.com': generateDomainConfig('safatying.com', 'service', 'Safa Tying', 'India'),
  
  // City-based Safawala domains
  'safawala.com': generateDomainConfig('safawala.com', 'service', 'Safawala', 'India'),
  'safawala.in': generateDomainConfig('safawala.in', 'service', 'Safawala', 'India'),
  'safawalaagra.com': generateDomainConfig('safawalaagra.com', 'city', 'Safawala Agra', 'Agra'),
  'safawalaahmedabad.com': generateDomainConfig('safawalaahmedabad.com', 'city', 'Safawala Ahmedabad', 'Ahmedabad'),
  'safawalaamritsar.com': generateDomainConfig('safawalaamritsar.com', 'city', 'Safawala Amritsar', 'Amritsar'),
  'safawalabaroda.com': generateDomainConfig('safawalabaroda.com', 'city', 'Safawala Baroda', 'Baroda'),
  'safawalabaroda.in': generateDomainConfig('safawalabaroda.in', 'city', 'Safawala Baroda', 'Baroda'),
  'safawalabhopal.com': generateDomainConfig('safawalabhopal.com', 'city', 'Safawala Bhopal', 'Bhopal'),
  'safawalabikaner.com': generateDomainConfig('safawalabikaner.com', 'city', 'Safawala Bikaner', 'Bikaner'),
  'safawalachandigarh.com': generateDomainConfig('safawalachandigarh.com', 'city', 'Safawala Chandigarh', 'Chandigarh'),
  'safawaladelhi.com': generateDomainConfig('safawaladelhi.com', 'city', 'Safawala Delhi', 'Delhi'),
  'safawaladubai.com': generateDomainConfig('safawaladubai.com', 'city', 'Safawala Dubai', 'Dubai'),
  'safawalagoa.com': generateDomainConfig('safawalagoa.com', 'city', 'Safawala Goa', 'Goa'),
  'safawalagurgaon.com': generateDomainConfig('safawalagurgaon.com', 'city', 'Safawala Gurgaon', 'Gurgaon'),
  'safawalagwalior.com': generateDomainConfig('safawalagwalior.com', 'city', 'Safawala Gwalior', 'Gwalior'),
  'safawalaindia.com': generateDomainConfig('safawalaindia.com', 'service', 'Safawala India', 'India'),
  'safawalaindore.com': generateDomainConfig('safawalaindore.com', 'city', 'Safawala Indore', 'Indore'),
  'safawalajaisalmer.com': generateDomainConfig('safawalajaisalmer.com', 'city', 'Safawala Jaisalmer', 'Jaisalmer'),
  'safawalajimcorbett.com': generateDomainConfig('safawalajimcorbett.com', 'city', 'Safawala Jim Corbett', 'Jim Corbett'),
  'safawalajodhpur.com': generateDomainConfig('safawalajodhpur.com', 'city', 'Safawala Jodhpur', 'Jodhpur'),
  'safawalakanpur.com': generateDomainConfig('safawalakanpur.com', 'city', 'Safawala Kanpur', 'Kanpur'),
  'safawalakerala.com': generateDomainConfig('safawalakerala.com', 'city', 'Safawala Kerala', 'Kerala'),
  'safawalakochi.com': generateDomainConfig('safawalakochi.com', 'city', 'Safawala Kochi', 'Kochi'),
  'safawalakshadweep.com': generateDomainConfig('safawalakshadweep.com', 'city', 'Safawala Lakshadweep', 'Lakshadweep'),
  'safawalalucknow.com': generateDomainConfig('safawalalucknow.com', 'city', 'Safawala Lucknow', 'Lucknow'),
  'safawalaludhiana.com': generateDomainConfig('safawalaludhiana.com', 'city', 'Safawala Ludhiana', 'Ludhiana'),
  'safawalamountabu.com': generateDomainConfig('safawalamountabu.com', 'city', 'Safawala Mount Abu', 'Mount Abu'),
  'safawalamussoorie.com': generateDomainConfig('safawalamussoorie.com', 'city', 'Safawala Mussoorie', 'Mussoorie'),
  'safawalanagpur.com': generateDomainConfig('safawalanagpur.com', 'city', 'Safawala Nagpur', 'Nagpur'),
  'safawalanashik.com': generateDomainConfig('safawalanashik.com', 'city', 'Safawala Nashik', 'Nashik'),
  'safawalanearme.com': generateDomainConfig('safawalanearme.com', 'service', 'Safawala Near Me', 'India'),
  'safawalanoida.com': generateDomainConfig('safawalanoida.com', 'city', 'Safawala Noida', 'Noida'),
  'safawalapatiala.com': generateDomainConfig('safawalapatiala.com', 'city', 'Safawala Patiala', 'Patiala'),
  'safawalapune.com': generateDomainConfig('safawalapune.com', 'city', 'Safawala Pune', 'Pune'),
  'safawalapushkar.com': generateDomainConfig('safawalapushkar.com', 'city', 'Safawala Pushkar', 'Pushkar'),
  'safawalarajkot.com': generateDomainConfig('safawalarajkot.com', 'city', 'Safawala Rajkot', 'Rajkot'),
  'safawalas.com': generateDomainConfig('safawalas.com', 'service', 'Safawalas', 'India'),
  'safawalashimla.com': generateDomainConfig('safawalashimla.com', 'city', 'Safawala Shimla', 'Shimla'),
  'safawalasurat.com': generateDomainConfig('safawalasurat.com', 'city', 'Safawala Surat', 'Surat'),
  'safawalaudaipur.com': generateDomainConfig('safawalaudaipur.com', 'city', 'Safawala Udaipur', 'Udaipur'),
  'safawalavadodara.com': generateDomainConfig('safawalavadodara.com', 'city', 'Safawala Vadodara', 'Vadodara'),
  'safawalavaranasi.com': generateDomainConfig('safawalavaranasi.com', 'city', 'Safawala Varanasi', 'Varanasi'),
  'safawale.com': generateDomainConfig('safawale.com', 'service', 'Safawale', 'India'),
  'safawavadodara.com': generateDomainConfig('safawavadodara.com', 'city', 'Safawa Vadodara', 'Vadodara'),
  'safewala.com': generateDomainConfig('safewala.com', 'service', 'Safewala', 'India'),
  'saffa.in': generateDomainConfig('saffa.in', 'product', 'Saffa', 'India'),
  'sehra.com': generateDomainConfig('sehra.com', 'product', 'Sehra', 'India'),
  'sharmajisafawala.com': generateDomainConfig('sharmajisafawala.com', 'service', 'Sharmaji Safawala', 'India'),
  'sharmajisafawala.in': generateDomainConfig('sharmajisafawala.in', 'service', 'Sharmaji Safawala', 'India'),
  'sharmajisafawale.com': generateDomainConfig('sharmajisafawale.com', 'service', 'Sharmaji Safawale', 'India'),
  'sharmajisafawale.in': generateDomainConfig('sharmajisafawale.in', 'service', 'Sharmaji Safawale', 'India'),
  'srgrooms.com': generateDomainConfig('srgrooms.com', 'service', 'SR Grooms', 'India'),
  'srgroomscreations.in': generateDomainConfig('srgroomscreations.in', 'service', 'SR Grooms Creations', 'India'),
  'thesafawala.com': generateDomainConfig('thesafawala.com', 'service', 'The Safawala', 'India'),
  'topsafapagdifetaturban.com': generateDomainConfig('topsafapagdifetaturban.com', 'product', 'Top Safa Pagdi Feta Turban', 'India'),
  'topsafapagdifetaturban.in': generateDomainConfig('topsafapagdifetaturban.in', 'product', 'Top Safa Pagdi Feta Turban', 'India'),
  'turbanonrent.com': generateDomainConfig('turbanonrent.com', 'service', 'Turban on Rent', 'India'),
  'turbantying.com': generateDomainConfig('turbantying.com', 'service', 'Turban Tying', 'India'),
  'weddingpagdi.com': generateDomainConfig('weddingpagdi.com', 'product', 'Wedding Pagdi', 'India'),
  'weddingsafa.com': generateDomainConfig('weddingsafa.com', 'product', 'Wedding Safa', 'India'),
  'weddingsafa.shop': generateDomainConfig('weddingsafa.shop', 'product', 'Wedding Safa', 'India'),
  'weddingturban.com': generateDomainConfig('weddingturban.com', 'product', 'Wedding Turban', 'India'),
  'weddingturban.in': generateDomainConfig('weddingturban.in', 'product', 'Wedding Turban', 'India'),
  'wowgrooms.in': generateDomainConfig('wowgrooms.in', 'service', 'Wow Grooms', 'India'),
};

// Get config for a domain (returns default if not found)
export function getDomainConfig(domain: string): DomainConfig {
  const cleanDomain = domain.replace('www.', '').split(':')[0];
  return DOMAIN_CONFIGS[cleanDomain] || DOMAIN_CONFIGS['safawala.com'];
}

// Export current domain for static generation
export const CURRENT_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'safawala.com';

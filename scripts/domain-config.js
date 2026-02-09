// Domain Configuration for 73 Separate Projects
// This file contains all domain-specific data for generating project folders

const DOMAINS = [
  // ===== RAJPUTI SAFA BRAND =====
  { domain: "rajputisafa.in", brand: "Rajputi Safa", type: "brand", focus: "rajputi safa" },
  { domain: "rajputisafa.com", brand: "Rajputi Safa", type: "brand", focus: "rajputi safa" },
  
  // ===== PUNJABI PAGDI BRAND =====
  { domain: "punjabipagdi.in", brand: "Punjabi Pagdi", type: "brand", focus: "punjabi pagdi" },
  { domain: "punjabipagdi.com", brand: "Punjabi Pagdi", type: "brand", focus: "punjabi pagdi" },
  
  // ===== WEDDING FOCUSED =====
  { domain: "weddingturban.in", brand: "Wedding Turban", type: "brand", focus: "wedding turban" },
  { domain: "weddingsafa.shop", brand: "Wedding Safa", type: "brand", focus: "wedding safa" },
  { domain: "fetaforwedding.com", brand: "Feta For Wedding", type: "brand", focus: "wedding feta" },
  { domain: "pagdiforwedding.com", brand: "Pagdi For Wedding", type: "brand", focus: "wedding pagdi" },
  
  // ===== GROOM FOCUSED =====
  { domain: "safagroom.in", brand: "Safa Groom", type: "brand", focus: "groom safa" },
  { domain: "safagroom.com", brand: "Safa Groom", type: "brand", focus: "groom safa" },
  { domain: "safaforgroom.com", brand: "Safa For Groom", type: "brand", focus: "groom safa" },
  { domain: "safaforgroom.in", brand: "Safa For Groom", type: "brand", focus: "groom safa" },
  { domain: "groompagri.in", brand: "Groom Pagri", type: "brand", focus: "groom pagri" },
  { domain: "groompagri.com", brand: "Groom Pagri", type: "brand", focus: "groom pagri" },
  { domain: "pagdiforgroom.com", brand: "Pagdi For Groom", type: "brand", focus: "groom pagdi" },
  { domain: "pagdiforgroom.in", brand: "Pagdi For Groom", type: "brand", focus: "groom pagdi" },
  { domain: "srgrooms.com", brand: "SR Grooms", type: "brand", focus: "groom services" },
  { domain: "srgroomscreations.in", brand: "SR Grooms Creations", type: "brand", focus: "groom creations" },
  { domain: "wowgrooms.in", brand: "Wow Grooms", type: "brand", focus: "groom styling" },
  
  // ===== GENERIC SAFA/PAGDI NAMES =====
  { domain: "saafa.online", brand: "Saafa Online", type: "brand", focus: "safa online" },
  { domain: "saffa.in", brand: "Saffa", type: "brand", focus: "safa" },
  { domain: "paghdi.in", brand: "Paghdi", type: "brand", focus: "paghdi" },
  { domain: "pagri.shop", brand: "Pagri Shop", type: "brand", focus: "pagri" },
  { domain: "pagdi.online", brand: "Pagdi Online", type: "brand", focus: "pagdi" },
  { domain: "safapagdi.com", brand: "Safa Pagdi", type: "brand", focus: "safa pagdi" },
  { domain: "safapagdi.in", brand: "Safa Pagdi", type: "brand", focus: "safa pagdi" },
  { domain: "safadesign.in", brand: "Safa Design", type: "brand", focus: "safa design" },
  
  // ===== RAJASTHANI BRANDS =====
  { domain: "rajasthanipagdi.in", brand: "Rajasthani Pagdi", type: "brand", focus: "rajasthani pagdi" },
  { domain: "rajasthanipagdi.com", brand: "Rajasthani Pagdi", type: "brand", focus: "rajasthani pagdi" },
  { domain: "pagdirajasthani.com", brand: "Pagdi Rajasthani", type: "brand", focus: "rajasthani pagdi" },
  { domain: "rajwadisafa.com", brand: "Rajwadi Safa", type: "brand", focus: "rajwadi safa" },
  { domain: "safajodhpuri.com", brand: "Safa Jodhpuri", type: "brand", focus: "jodhpuri safa" },
  { domain: "safajodhpuri.in", brand: "Safa Jodhpuri", type: "brand", focus: "jodhpuri safa" },
  
  // ===== STYLE-BASED BRANDS =====
  { domain: "bandhejsafa.com", brand: "Bandhej Safa", type: "brand", focus: "bandhej safa" },
  { domain: "leheriyasafa.com", brand: "Leheriya Safa", type: "brand", focus: "leheriya safa" },
  { domain: "pachrangisafa.com", brand: "Pachrangi Safa", type: "brand", focus: "pachrangi safa" },
  { domain: "pachrangisafa.in", brand: "Pachrangi Safa", type: "brand", focus: "pachrangi safa" },
  
  // ===== SPECIALTY BRANDS =====
  { domain: "bollywoodsafawala.com", brand: "Bollywood Safawala", type: "brand", focus: "bollywood style safa" },
  { domain: "topsafapagdifetaturban.com", brand: "Top Safa Pagdi Feta Turban", type: "brand", focus: "premium turbans" },
  { domain: "topsafapagdifetaturban.in", brand: "Top Safa Pagdi Feta Turban", type: "brand", focus: "premium turbans" },
  { domain: "bestsafapagdifetaturban.com", brand: "Best Safa Pagdi Feta Turban", type: "brand", focus: "best turbans" },
  { domain: "bestsafapagdifetaturban.in", brand: "Best Safa Pagdi Feta Turban", type: "brand", focus: "best turbans" },
  { domain: "mysafawale.com", brand: "My Safawale", type: "brand", focus: "safa services" },
  
  // ===== SHARMA JI BRAND =====
  { domain: "sharmajisafawala.in", brand: "Sharma Ji Safawala", type: "brand", focus: "traditional safa" },
  { domain: "sharmajisafawala.com", brand: "Sharma Ji Safawala", type: "brand", focus: "traditional safa" },
  { domain: "sharmajisafawale.in", brand: "Sharma Ji Safawale", type: "brand", focus: "traditional safa" },
  { domain: "sharmajisafawale.com", brand: "Sharma Ji Safawale", type: "brand", focus: "traditional safa" },
  
  // ===== CITY-BASED SAFAWALA - GUJARAT =====
  { domain: "safawalaahmedabad.com", brand: "Safawala Ahmedabad", type: "city", city: "Ahmedabad", state: "Gujarat" },
  { domain: "safawalasurat.com", brand: "Safawala Surat", type: "city", city: "Surat", state: "Gujarat" },
  { domain: "safawalarajkot.com", brand: "Safawala Rajkot", type: "city", city: "Rajkot", state: "Gujarat" },
  { domain: "safawalavadodara.com", brand: "Safawala Vadodara", type: "city", city: "Vadodara", state: "Gujarat" },
  { domain: "safawavadodara.com", brand: "Safawa Vadodara", type: "city", city: "Vadodara", state: "Gujarat" },
  { domain: "safawalabaroda.com", brand: "Safawala Baroda", type: "city", city: "Vadodara", state: "Gujarat" },
  { domain: "safawalabaroda.in", brand: "Safawala Baroda", type: "city", city: "Vadodara", state: "Gujarat" },
  { domain: "barodasafawala.com", brand: "Baroda Safawala", type: "city", city: "Vadodara", state: "Gujarat" },
  { domain: "barodasafawala.in", brand: "Baroda Safawala", type: "city", city: "Vadodara", state: "Gujarat" },
  
  // ===== CITY-BASED SAFAWALA - RAJASTHAN =====
  { domain: "safawalajodhpur.com", brand: "Safawala Jodhpur", type: "city", city: "Jodhpur", state: "Rajasthan" },
  { domain: "safawalaudaipur.com", brand: "Safawala Udaipur", type: "city", city: "Udaipur", state: "Rajasthan" },
  { domain: "safawalajaisalmer.com", brand: "Safawala Jaisalmer", type: "city", city: "Jaisalmer", state: "Rajasthan" },
  { domain: "safawalabikaner.com", brand: "Safawala Bikaner", type: "city", city: "Bikaner", state: "Rajasthan" },
  { domain: "safawalapushkar.com", brand: "Safawala Pushkar", type: "city", city: "Pushkar", state: "Rajasthan" },
  { domain: "safawalamountabu.com", brand: "Safawala Mount Abu", type: "city", city: "Mount Abu", state: "Rajasthan" },
  
  // ===== CITY-BASED SAFAWALA - NORTH INDIA =====
  { domain: "safawaladelhi.com", brand: "Safawala Delhi", type: "city", city: "Delhi", state: "Delhi" },
  { domain: "safawalanoida.com", brand: "Safawala Noida", type: "city", city: "Noida", state: "Uttar Pradesh" },
  { domain: "safawalagurgaon.com", brand: "Safawala Gurgaon", type: "city", city: "Gurgaon", state: "Haryana" },
  { domain: "safawalachandigarh.com", brand: "Safawala Chandigarh", type: "city", city: "Chandigarh", state: "Chandigarh" },
  { domain: "safawalaamritsar.com", brand: "Safawala Amritsar", type: "city", city: "Amritsar", state: "Punjab" },
  { domain: "safawalapatiala.com", brand: "Safawala Patiala", type: "city", city: "Patiala", state: "Punjab" },
  { domain: "safawalaludhiana.com", brand: "Safawala Ludhiana", type: "city", city: "Ludhiana", state: "Punjab" },
  { domain: "safawalalucknow.com", brand: "Safawala Lucknow", type: "city", city: "Lucknow", state: "Uttar Pradesh" },
  { domain: "safawalakanpur.com", brand: "Safawala Kanpur", type: "city", city: "Kanpur", state: "Uttar Pradesh" },
  { domain: "safawalaagra.com", brand: "Safawala Agra", type: "city", city: "Agra", state: "Uttar Pradesh" },
  { domain: "safawalavaranasi.com", brand: "Safawala Varanasi", type: "city", city: "Varanasi", state: "Uttar Pradesh" },
  
  // ===== CITY-BASED SAFAWALA - CENTRAL INDIA =====
  { domain: "safawalabhopal.com", brand: "Safawala Bhopal", type: "city", city: "Bhopal", state: "Madhya Pradesh" },
  { domain: "safawalaindore.com", brand: "Safawala Indore", type: "city", city: "Indore", state: "Madhya Pradesh" },
  { domain: "safawalagwalior.com", brand: "Safawala Gwalior", type: "city", city: "Gwalior", state: "Madhya Pradesh" },
  
  // ===== CITY-BASED SAFAWALA - MAHARASHTRA =====
  { domain: "safawalapune.com", brand: "Safawala Pune", type: "city", city: "Pune", state: "Maharashtra" },
  { domain: "safawalanagpur.com", brand: "Safawala Nagpur", type: "city", city: "Nagpur", state: "Maharashtra" },
  { domain: "safawalanashik.com", brand: "Safawala Nashik", type: "city", city: "Nashik", state: "Maharashtra" },
  
  // ===== CITY-BASED SAFAWALA - SOUTH INDIA =====
  { domain: "safawalagoa.com", brand: "Safawala Goa", type: "city", city: "Goa", state: "Goa" },
  { domain: "safawalakochi.com", brand: "Safawala Kochi", type: "city", city: "Kochi", state: "Kerala" },
  { domain: "safawalakerala.com", brand: "Safawala Kerala", type: "city", city: "Kerala", state: "Kerala" },
  
  // ===== CITY-BASED SAFAWALA - HILL STATIONS =====
  { domain: "safawalashimla.com", brand: "Safawala Shimla", type: "city", city: "Shimla", state: "Himachal Pradesh" },
  { domain: "safawalamussoorie.com", brand: "Safawala Mussoorie", type: "city", city: "Mussoorie", state: "Uttarakhand" },
  { domain: "safawalajimcorbett.com", brand: "Safawala Jim Corbett", type: "city", city: "Jim Corbett", state: "Uttarakhand" },
  
  // ===== SPECIAL LOCATIONS =====
  { domain: "safawalalakshadweep.com", brand: "Safawala Lakshadweep", type: "city", city: "Lakshadweep", state: "Lakshadweep" },
  { domain: "safawaladubai.com", brand: "Safawala Dubai", type: "city", city: "Dubai", state: "UAE", country: "UAE" },
  
  // ===== GENERIC SAFAWALA =====
  { domain: "safawalanearme.com", brand: "Safawala Near Me", type: "brand", focus: "local safa services" },
];

module.exports = { DOMAINS };

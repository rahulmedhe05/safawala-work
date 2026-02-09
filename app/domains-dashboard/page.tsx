'use client'

import { useState } from 'react'

const domains = [
  // City-based Safawala domains
  { name: 'safawalaahmedabad.com', city: 'Ahmedabad', category: 'city' },
  { name: 'safawaladelhi.com', city: 'Delhi', category: 'city' },
  { name: 'safawalapune.com', city: 'Pune', category: 'city' },
  { name: 'safawalanagpur.com', city: 'Nagpur', category: 'city' },
  { name: 'safawalanashik.com', city: 'Nashik', category: 'city' },
  { name: 'safawalasurat.com', city: 'Surat', category: 'city' },
  { name: 'safawalagwalior.com', city: 'Gwalior', category: 'city' },
  { name: 'safawalabhopal.com', city: 'Bhopal', category: 'city' },
  { name: 'safawalaindore.com', city: 'Indore', category: 'city' },
  { name: 'safawalanoida.com', city: 'Noida', category: 'city' },
  { name: 'safawalakanpur.com', city: 'Kanpur', category: 'city' },
  { name: 'safawalaagra.com', city: 'Agra', category: 'city' },
  { name: 'safawalarajkot.com', city: 'Rajkot', category: 'city' },
  { name: 'safawalavaranasi.com', city: 'Varanasi', category: 'city' },
  { name: 'safawalalucknow.com', city: 'Lucknow', category: 'city' },
  { name: 'safawalaamritsar.com', city: 'Amritsar', category: 'city' },
  { name: 'safawalachandigarh.com', city: 'Chandigarh', category: 'city' },
  { name: 'safawalagurgaon.com', city: 'Gurgaon', category: 'city' },
  { name: 'safawalamountabu.com', city: 'Mount Abu', category: 'city' },
  { name: 'safawalapushkar.com', city: 'Pushkar', category: 'city' },
  { name: 'safawalajaisalmer.com', city: 'Jaisalmer', category: 'city' },
  { name: 'safawalaudaipur.com', city: 'Udaipur', category: 'city' },
  { name: 'safawalajodhpur.com', city: 'Jodhpur', category: 'city' },
  { name: 'safawalabikaner.com', city: 'Bikaner', category: 'city' },
  { name: 'safawalabaroda.com', city: 'Baroda', category: 'city' },
  { name: 'safawalabaroda.in', city: 'Baroda', category: 'city' },
  { name: 'safawalavadodara.com', city: 'Vadodara', category: 'city' },
  { name: 'safawavadodara.com', city: 'Vadodara', category: 'city' },
  { name: 'barodasafawala.com', city: 'Baroda', category: 'city' },
  { name: 'barodasafawala.in', city: 'Baroda', category: 'city' },
  { name: 'safawalapatiala.com', city: 'Patiala', category: 'city' },
  { name: 'safawalaludhiana.com', city: 'Ludhiana', category: 'city' },
  { name: 'safawalamussoorie.com', city: 'Mussoorie', category: 'city' },
  { name: 'safawalajimcorbett.com', city: 'Jim Corbett', category: 'city' },
  { name: 'safawalakochi.com', city: 'Kochi', category: 'city' },
  { name: 'safawalakerala.com', city: 'Kerala', category: 'city' },
  { name: 'safawalakshadweep.com', city: 'Lakshadweep', category: 'city' },
  { name: 'safawalashimla.com', city: 'Shimla', category: 'city' },
  { name: 'safawaladubai.com', city: 'Dubai', category: 'city' },
  { name: 'safawalagoa.com', city: 'Goa', category: 'city' },
  { name: 'safawalanearme.com', city: 'Near Me', category: 'city' },
  
  // Regional/Style domains
  { name: 'rajputisafa.in', city: 'Rajasthan', category: 'regional' },
  { name: 'rajputisafa.com', city: 'Rajasthan', category: 'regional' },
  { name: 'punjabipagdi.in', city: 'Punjab', category: 'regional' },
  { name: 'punjabipagdi.com', city: 'Punjab', category: 'regional' },
  { name: 'rajasthanipagdi.in', city: 'Rajasthan', category: 'regional' },
  { name: 'rajasthanipagdi.com', city: 'Rajasthan', category: 'regional' },
  { name: 'rajwadisafa.com', city: 'Rajasthan', category: 'regional' },
  { name: 'bandhejsafa.com', city: 'Rajasthan', category: 'regional' },
  { name: 'leheriyasafa.com', city: 'Rajasthan', category: 'regional' },
  { name: 'pachrangisafa.com', city: 'Rajasthan', category: 'regional' },
  { name: 'pachrangisafa.in', city: 'Rajasthan', category: 'regional' },
  { name: 'pagdirajasthani.com', city: 'Rajasthan', category: 'regional' },
  { name: 'safajodhpuri.com', city: 'Jodhpur', category: 'regional' },
  { name: 'safajodhpuri.in', city: 'Jodhpur', category: 'regional' },
  
  // Generic/Brand domains
  { name: 'weddingturban.in', city: 'India', category: 'brand' },
  { name: 'weddingsafa.shop', city: 'India', category: 'brand' },
  { name: 'saafa.online', city: 'India', category: 'brand' },
  { name: 'saffa.in', city: 'India', category: 'brand' },
  { name: 'paghdi.in', city: 'India', category: 'brand' },
  { name: 'pagri.shop', city: 'India', category: 'brand' },
  { name: 'pagdi.online', city: 'India', category: 'brand' },
  { name: 'bollywoodsafawala.com', city: 'India', category: 'brand' },
  { name: 'topsafapagdifetaturban.com', city: 'India', category: 'brand' },
  { name: 'topsafapagdifetaturban.in', city: 'India', category: 'brand' },
  { name: 'bestsafapagdifetaturban.com', city: 'India', category: 'brand' },
  { name: 'bestsafapagdifetaturban.in', city: 'India', category: 'brand' },
  { name: 'srgrooms.com', city: 'India', category: 'brand' },
  { name: 'srgroomscreations.in', city: 'India', category: 'brand' },
  { name: 'sharmajisafawala.in', city: 'India', category: 'brand' },
  { name: 'sharmajisafawala.com', city: 'India', category: 'brand' },
  { name: 'sharmajisafawale.in', city: 'India', category: 'brand' },
  { name: 'sharmajisafawale.com', city: 'India', category: 'brand' },
  { name: 'safapagdi.com', city: 'India', category: 'brand' },
  { name: 'safapagdi.in', city: 'India', category: 'brand' },
  { name: 'safagroom.in', city: 'India', category: 'brand' },
  { name: 'safagroom.com', city: 'India', category: 'brand' },
  { name: 'pagdiforgroom.com', city: 'India', category: 'brand' },
  { name: 'pagdiforgroom.in', city: 'India', category: 'brand' },
  { name: 'pagdiforwedding.com', city: 'India', category: 'brand' },
  { name: 'fetaforwedding.com', city: 'India', category: 'brand' },
  { name: 'groompagri.in', city: 'India', category: 'brand' },
  { name: 'groompagri.com', city: 'India', category: 'brand' },
  { name: 'mysafawale.com', city: 'India', category: 'brand' },
  { name: 'wowgrooms.in', city: 'India', category: 'brand' },
  { name: 'safadesign.in', city: 'India', category: 'brand' },
  { name: 'safaforgroom.com', city: 'India', category: 'brand' },
  { name: 'safaforgroom.in', city: 'India', category: 'brand' },
]

const categories = {
  all: 'All Domains',
  city: 'City-based',
  regional: 'Regional/Style',
  brand: 'Brand/Generic',
}

export default function DomainsDashboard() {
  const [filter, setFilter] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filteredDomains = domains.filter((domain) => {
    const matchesCategory = filter === 'all' || domain.category === filter
    const matchesSearch = 
      domain.name.toLowerCase().includes(search.toLowerCase()) ||
      domain.city.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'city': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'regional': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'brand': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Safawala Domains Dashboard</h1>
          <p className="text-orange-100 text-lg">
            Manage all {domains.length} domain websites from one place
          </p>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {domains.filter(d => d.category === 'city').length}
              </div>
              <div className="text-sm text-blue-700">City Domains</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
              <div className="text-3xl font-bold text-amber-600">
                {domains.filter(d => d.category === 'regional').length}
              </div>
              <div className="text-sm text-amber-700">Regional Domains</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {domains.filter(d => d.category === 'brand').length}
              </div>
              <div className="text-sm text-purple-700">Brand Domains</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {domains.length * 105}
              </div>
              <div className="text-sm text-green-700">Total Pages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search domains or cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === key
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 mt-4">
          Showing {filteredDomains.length} of {domains.length} domains
        </p>
      </div>

      {/* Domain Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDomains.map((domain) => (
            <div
              key={domain.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b">
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(domain.category)}`}>
                    {domain.category}
                  </span>
                  <span className="text-xs text-gray-500">105 pages</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition">
                  {domain.name}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {domain.city}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-4 pb-4 space-y-2">
                <div className="flex gap-2">
                  <a
                    href={`/preview/${domain.name}`}
                    target="_blank"
                    className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
                  >
                    👁️ Preview
                  </a>
                  <a
                    href={`https://${domain.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition"
                  >
                    🌐 Live
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`vscode://file/Applications/Safawala%20ALL/app/domains/${domain.name}/page.tsx`}
                    className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    ✏️ Edit
                  </a>
                  <a
                    href={`vscode://file/Applications/Safawala%20ALL/app/domains/${domain.name}`}
                    className="flex-1 text-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                  >
                    📁 Folder
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Home Pages List */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">�️ Preview All Home Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {domains.map((domain) => (
              <a
                key={`link-${domain.name}`}
                href={`/preview/${domain.name}`}
                target="_blank"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition hover:shadow-md hover:scale-105 ${getCategoryColor(domain.category)}`}
              >
                {domain.name.replace('.com', '').replace('.in', '').replace('.shop', '').replace('.online', '')}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Safawala Domain Management Dashboard | {domains.length} Domains | {domains.length * 105} Total Pages
          </p>
        </div>
      </footer>
    </div>
  )
}

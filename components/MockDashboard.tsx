export function MockDashboard() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dashboard Background */}
        <rect width="400" height="500" rx="24" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
        
        {/* Header */}
        <rect x="24" y="24" width="352" height="60" rx="12" fill="white" stroke="#e2e8f0"/>
        <circle cx="56" cy="54" r="16" fill="#6C5CE7"/>
        <rect x="88" y="44" width="120" height="8" rx="4" fill="#1f2937"/>
        <rect x="88" y="56" width="80" height="6" rx="3" fill="#6b7280"/>
        
        {/* Birthday Card */}
        <rect x="24" y="100" width="352" height="100" rx="16" fill="white" stroke="#e2e8f0"/>
        <circle cx="60" cy="130" r="20" fill="#fef3c7"/>
        <text x="60" y="138" textAnchor="middle" className="text-lg">🎂</text>
        <rect x="92" y="120" width="140" height="8" rx="4" fill="#1f2937"/>
        <rect x="92" y="135" width="200" height="6" rx="3" fill="#6b7280"/>
        <rect x="92" y="148" width="160" height="6" rx="3" fill="#6b7280"/>
        <rect x="300" y="120" width="60" height="24" rx="12" fill="#6C5CE7"/>
        <text x="330" y="135" textAnchor="middle" className="text-xs fill-white">Order</text>
        
        {/* Lunch Poll Card */}
        <rect x="24" y="220" width="352" height="100" rx="16" fill="white" stroke="#e2e8f0"/>
        <circle cx="60" cy="250" r="20" fill="#dcfce7"/>
        <text x="60" y="258" textAnchor="middle" className="text-lg">🍕</text>
        <rect x="92" y="240" width="120" height="8" rx="4" fill="#1f2937"/>
        <rect x="92" y="255" width="180" height="6" rx="3" fill="#6b7280"/>
        
        {/* Poll Options */}
        <rect x="92" y="275" width="100" height="20" rx="10" fill="#f3f4f6" stroke="#d1d5db"/>
        <circle cx="102" cy="285" r="4" fill="#6C5CE7"/>
        <text x="114" y="289" className="text-xs fill-gray-700">Pizza Truck</text>
        
        <rect x="202" y="275" width="80" height="20" rx="10" fill="#f3f4f6" stroke="#d1d5db"/>
        <circle cx="212" cy="285" r="4" fill="#e5e7eb"/>
        <text x="224" y="289" className="text-xs fill-gray-700">Tacos</text>
        
        {/* Perk Card */}
        <rect x="24" y="340" width="352" height="100" rx="16" fill="white" stroke="#e2e8f0"/>
        <circle cx="60" cy="370" r="20" fill="#fce7f3"/>
        <text x="60" y="378" textAnchor="middle" className="text-lg">🎁</text>
        <rect x="92" y="360" width="160" height="8" rx="4" fill="#1f2937"/>
        <rect x="92" y="375" width="220" height="6" rx="3" fill="#6b7280"/>
        <rect x="92" y="388" width="180" height="6" rx="3" fill="#6b7280"/>
        <rect x="300" y="365" width="60" height="20" rx="10" fill="#10b981"/>
        <text x="330" y="378" textAnchor="middle" className="text-xs fill-white">20% Off</text>
      </svg>
    </div>
  )
}
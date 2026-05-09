'use client'
import { MapPin, Phone, Zap, Umbrella } from 'lucide-react'

const items = [
  { Icon: MapPin, label: 'Based in West Palm Beach' },
  { Icon: Phone, label: 'Real Agent Every Time You Call' },
  { Icon: Zap, label: 'Fast Quotes Without the Hassle' },
  { Icon: Umbrella, label: 'Home · Auto · Business · Health' },
]

export default function TrustBar() {
  return (
    <section className="bg-ink" aria-label="Key features">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-[10px] bg-green-soft/20 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-green-soft" aria-hidden />
              </span>
              <span className="text-[13px] font-medium text-white/90 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

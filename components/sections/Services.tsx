'use client'
import { useState } from 'react'
import { Home, Car, Heart, PawPrint, Bike, Anchor, Caravan, Umbrella,
         Shield, HardHat, Truck, Store, Building2, MessageCircle, ArrowRight, Users, Briefcase } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const personal = [
  { Icon: Home, t: 'Home Insurance', d: 'Hurricane, flood, contents.' },
  { Icon: Car, t: 'Auto Insurance', d: 'Florida-savvy auto coverage.' },
  { Icon: Heart, t: 'Health Insurance', d: 'Individuals & families.' },
  { Icon: PawPrint, t: 'Pet Insurance', d: 'Vet bills & accidents.' },
  { Icon: Bike, t: 'Motorcycle', d: 'Cruiser, sport, touring.' },
  { Icon: Anchor, t: 'Boat Insurance', d: 'Hull, liability, towing.' },
  { Icon: Caravan, t: 'RV Insurance', d: 'Road & storage.' },
  { Icon: Umbrella, t: 'Property & Casualty', d: 'Umbrella & bundles.' },
]
const business = [
  { Icon: Shield, t: 'General Liability', d: 'Third-party claims.' },
  { Icon: HardHat, t: 'Workers Comp', d: 'Required FL coverage.' },
  { Icon: Truck, t: 'Commercial Auto', d: 'Fleet & single vehicle.' },
  { Icon: Store, t: 'Small Business', d: 'Tailored BOP packages.' },
  { Icon: Building2, t: 'Commercial Property', d: 'Building & contents.' },
]

interface ServicesProps { onOpenQuiz: () => void }

export default function Services({ onOpenQuiz }: ServicesProps) {
  const [tab, setTab] = useState<'personal' | 'business'>('personal')
  const ref = useReveal()
  const items = tab === 'personal' ? personal : business

  return (
    <section id="coverage" className="py-24" style={{ background: 'linear-gradient(180deg,#eaf5ec 0%,#fff 100%)' }}
      ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="kicker">What we cover</div>
          <h2 className="h1 mt-3">Insurance That <span className="swoosh">Fits Real Life</span></h2>
          <p className="lede mt-4">Whether protecting your family, home, or business — we make it simple.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-8 reveal d1">
          <div className="flex p-1 rounded-full bg-white border border-line shadow-sm gap-1">
            {([['personal','Families & Individuals',Users],['business','Businesses',Briefcase]] as const).map(([k,l,Icon]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                aria-pressed={tab === k}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${tab === k ? 'bg-ink text-white' : 'text-ink-3 hover:text-ink'}`}
              >
                <Icon size={15} aria-hidden /> {l}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 reveal d2">
          {items.map(({ Icon, t, d }) => (
            <div key={t} className="card card-lg hover-lift p-5 relative overflow-hidden cursor-pointer
                                    before:absolute before:inset-0 before:rounded-[inherit]
                                    before:bg-gradient-to-br before:from-green-tint before:to-transparent
                                    before:opacity-0 hover:before:opacity-100 before:transition-opacity">
              <span className="w-11 h-11 rounded-[11px] bg-green-tint flex items-center justify-center relative z-10">
                <Icon size={22} className="text-green-700" aria-hidden />
              </span>
              <div className="font-bold text-sm mt-3 relative z-10">{t}</div>
              <div className="text-ink-3 text-xs mt-1 relative z-10">{d}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA card */}
        <div className="card card-lg mt-6 p-6 sm:p-7 flex flex-wrap gap-5 items-center reveal d3">
          <div className="w-14 h-14 rounded-[14px] bg-green flex items-center justify-center flex-shrink-0">
            <MessageCircle size={26} className="text-white" aria-hidden />
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="font-bold text-base">Not sure what coverage you actually need?</div>
            <div className="text-ink-3 text-sm mt-1">We'll walk you through it — no pressure, ever.</div>
          </div>
          <button onClick={onOpenQuiz} className="btn-cta btn-cta-sm w-full sm:w-auto">
            Talk to a Local Agent <ArrowRight size={15} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  )
}

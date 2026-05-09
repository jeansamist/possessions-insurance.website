'use client'
import { useState } from 'react'
import { MapPin, Shield, ArrowRight, Phone, Check } from 'lucide-react'

const TRUST = ['No obligation','No spam calls','Real licensed agents','Same-day quotes']

interface HeroProps { onOpenQuiz: () => void }

export default function Hero({ onOpenQuiz }: HeroProps) {
  const [zip, setZip] = useState('')
  const [coverage, setCoverage] = useState('')

  return (
    <section className="relative overflow-hidden text-white text-center"
      style={{ background: 'linear-gradient(180deg,#33A64D 0%,#2b8d41 100%)', paddingTop: 88, paddingBottom: 96 }}>
      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 60%)' }} />
      <div aria-hidden="true" className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(0,0,0,.18),transparent 65%)' }} />
      <div aria-hidden className="dotgrid-light absolute inset-0 opacity-45 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Eyebrow */}
        <div className="eyebrow mb-6 inline-flex animate-[fadeDown_0.65s_cubic-bezier(.22,1,.36,1)_.05s_both]">
          <MapPin size={13} aria-hidden /> Proudly serving West Palm Beach &amp; South Florida
        </div>

        {/* Headline */}
        <h1 className="h-display text-white max-w-[1000px] mx-auto animate-[fadeDown_0.65s_cubic-bezier(.22,1,.36,1)_.2s_both]">
          Local Insurance. Real People.<br />
          <span className="swoosh">Zero Runaround.</span>
        </h1>

        <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mt-6 animate-[fadeDown_0.65s_cubic-bezier(.22,1,.36,1)_.35s_both]">
          We help South Florida families and businesses find better coverage, better rates, and real support — without the call centers, confusing policies, or pressure.
        </p>

        {/* Quote form */}
        <div className="animate-[fadeDown_0.65s_cubic-bezier(.22,1,.36,1)_.5s_both]">
          <div className="bg-white text-ink rounded-full max-w-2xl mx-auto mt-8 flex items-center px-5 py-1.5 gap-0
                          shadow-[0_16px_40px_rgba(14,15,17,.18),0_4px_10px_rgba(14,15,17,.08)]
                          flex-col sm:flex-row rounded-2xl sm:rounded-full p-4 sm:p-1.5 sm:px-5">
            <label className="flex items-center gap-2.5 w-full sm:w-auto flex-shrink-0 py-2 sm:py-0">
              <MapPin size={17} className="text-green-700 flex-shrink-0" aria-hidden />
              <input
                className="border-0 bg-transparent font-sans text-sm font-semibold text-ink outline-none w-24 placeholder:text-ink-4"
                placeholder="ZIP code" value={zip} onChange={e => setZip(e.target.value)} maxLength={5}
                aria-label="ZIP code"
              />
            </label>
            <span className="hidden sm:block h-6 w-px bg-line flex-shrink-0 mx-2" aria-hidden />
            <label className="flex items-center gap-2.5 flex-1 py-2 sm:py-0 w-full">
              <Shield size={17} className="text-green-700 flex-shrink-0" aria-hidden />
              <select
                className="border-0 bg-transparent font-sans text-sm text-ink-4 outline-none flex-1 cursor-pointer"
                value={coverage} onChange={e => setCoverage(e.target.value)}
                aria-label="Coverage type"
              >
                <option value="">What do you need to insure?</option>
                <option>Home</option><option>Auto</option><option>Home + Auto bundle</option>
                <option>Health</option><option>Business</option><option>Not sure — help me</option>
              </select>
            </label>
            <button onClick={onOpenQuiz} className="btn-cta w-full sm:w-auto mt-2 sm:mt-0 flex-shrink-0" aria-label="Start coverage check">
              Get My Check <ArrowRight size={16} strokeWidth={2.4} />
            </button>
          </div>

          <div className="mt-4">
            <button onClick={onOpenQuiz} className="btn-ghost btn-cta-sm inline-flex items-center gap-2" aria-label="Talk to a local agent">
              <Phone size={15} aria-hidden /> Talk to a Local Agent
            </button>
          </div>
        </div>

        {/* Trust pills */}
        <ul className="flex flex-wrap gap-4 justify-center mt-7 list-none
                        animate-[fadeDown_0.6s_cubic-bezier(.22,1,.36,1)_.65s_both]">
          {TRUST.map(t => (
            <li key={t} className="flex items-center gap-2 text-[13px] text-white/90">
              <span className="w-[20px] h-[20px] rounded-full bg-white/16 border border-white/30 flex items-center justify-center flex-shrink-0">
                <Check size={11} strokeWidth={3} aria-hidden />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

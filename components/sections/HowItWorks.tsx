'use client'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const steps = [
  { n: '1', t: 'Tell Us What You Need', d: 'Quick call or short form. Takes less than 5 minutes.' },
  { n: '2', t: 'We Compare Your Options', d: 'We shop multiple carriers and explain everything in plain English.' },
  { n: '3', t: 'Choose With Confidence', d: 'No pressure. No confusion. Just the protection that makes sense for you.' },
]

interface Props { onOpenQuiz: () => void }

export default function HowItWorks({ onOpenQuiz }: Props) {
  const ref = useReveal()
  return (
    <section className="py-24 bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="kicker">How it works</div>
          <h2 className="h1 mt-3">Covered in <span className="swoosh swoosh-green">3 simple steps.</span></h2>
        </div>

        <div className="relative">
          {/* Dashed connector – desktop only */}
          <div aria-hidden className="hidden md:block absolute top-[43px] left-[16.66%] right-[16.66%] h-0.5"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg,#33A64D 0 8px,transparent 8px 16px)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
            {steps.map(({ n, t, d }, i) => (
              <div key={n} className={`text-center reveal d${i + 1}`}>
                <div className="w-[88px] h-[88px] rounded-full bg-green text-white mx-auto flex items-center justify-center
                                font-serif font-semibold text-[44px] border-4 border-white
                                shadow-[0_8px_24px_rgba(51,166,77,.32),inset_0_-3px_0_rgba(0,0,0,.10)]">
                  {n}
                </div>
                <h3 className="h2 mt-5 text-[clamp(18px,1.6vw,24px)]">{t}</h3>
                <p className="text-ink-3 text-base mt-2 max-w-[240px] mx-auto leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 reveal d3">
          <button onClick={onOpenQuiz} className="btn-cta btn-cta-lg">
            Start My Free Coverage Check <ArrowRight size={17} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  )
}

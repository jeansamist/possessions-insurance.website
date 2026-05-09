'use client'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const checks = [
  'Find hidden coverage gaps',
  'Compare rates from multiple carriers',
  'Make sure you\'re not overpaying',
  'Get advice from a real local agent',
]

interface CheckupProps { onOpenQuiz: () => void }

export default function Checkup({ onOpenQuiz }: CheckupProps) {
  const ref = useReveal()
  return (
    <section className="py-28 bg-ink text-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="kicker text-green-soft reveal">Free coverage checkup</div>
        <h2 className="h1 text-white mt-3 reveal d1">
          You may be <span className="swoosh">overpaying</span> — or underinsured.
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mt-5 max-w-xl mx-auto reveal d1">
          Many South Florida families discover coverage gaps only after something goes wrong.
          We help you review your current policy before problems happen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mt-8">
          {checks.map((c, i) => (
            <div key={c} className={`flex items-center gap-3 p-4 rounded-xl border border-white/12 bg-white/3
                                      hover:bg-white/7 hover:border-green-soft/40 transition-all duration-200 reveal d${i % 2 + 1}`}>
              <CheckCircle size={22} className="text-green-soft flex-shrink-0" aria-hidden />
              <span className="text-[15px] font-medium">{c}</span>
            </div>
          ))}
        </div>

        <button onClick={onOpenQuiz} className="btn-cta btn-cta-lg mt-8 reveal d3">
          Start My Free Coverage Check <ArrowRight size={17} strokeWidth={2.4} />
        </button>
        <p className="mt-3 text-white/45 text-sm reveal d3">Takes less than 5 minutes · No obligation</p>
      </div>
    </section>
  )
}

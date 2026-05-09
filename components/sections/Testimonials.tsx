'use client'
import { useState } from 'react'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { useReveal } from '@/lib/useReveal'

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const ref = useReveal()
  const r = TESTIMONIALS[cur]
  const go = (d: number) => setCur((cur + d + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section id="reviews" className="py-24 bg-green-tint" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="kicker">Reader letters</div>
          <h2 className="h1 mt-3">Trusted by families across <span className="swoosh">South Florida.</span></h2>
        </div>

        <div className="grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-center max-w-4xl mx-auto reveal d1">
          <button onClick={() => go(-1)} aria-label="Previous review"
            className="w-12 h-12 rounded-full bg-white border border-line flex items-center justify-center hover:shadow-md transition-all">
            <ArrowRight size={20} className="rotate-180" aria-hidden />
          </button>

          <div className="card card-lg p-7 sm:p-11 relative overflow-hidden">
            <div aria-hidden className="absolute top-4 left-6 font-serif text-[110px] leading-none text-green-tint2 font-semibold pointer-events-none select-none">&ldquo;</div>
            <div className="relative">
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => <Star key={i} size={17} fill="#FFB400" className="text-[#FFB400]" aria-hidden />)}
              </div>
              <blockquote className="font-serif text-[clamp(18px,2.2vw,26px)] font-medium leading-snug mt-4 text-ink">
                &ldquo;{r.q}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className={`av ${r.av}`} aria-hidden>{r.init}</span>
                  <div>
                    <div className="font-bold text-[15px]">{r.name}</div>
                    <div className="text-ink-3 text-sm flex items-center gap-1.5">
                      <MapPin size={12} className="text-green-700" aria-hidden />{r.city}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button key={i} onClick={() => setCur(i)} aria-label={`Review ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-200 ${i === cur ? 'w-7 bg-ink' : 'w-2.5 bg-green-tint2'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => go(1)} aria-label="Next review"
            className="w-12 h-12 rounded-full bg-ink flex items-center justify-center hover:shadow-md transition-all">
            <ArrowRight size={20} className="text-white" aria-hidden />
          </button>
        </div>

        <div className="flex justify-center mt-8 reveal d2">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="btn-outline gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.9 15 .8 12 .8 7.4.8 3.5 3.4 1.6 7.2l3.9 3C6.4 7.4 8.9 5.4 12 5.4z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.5h6.5c-.3 1.6-1.2 2.9-2.5 3.8l3.9 3c2.3-2.1 3.6-5.2 3.6-9z"/>
              <path fill="#FBBC05" d="M5.5 14.2a7 7 0 0 1 0-4.4l-3.9-3a11.6 11.6 0 0 0 0 10.4l3.9-3z"/>
              <path fill="#34A853" d="M12 23.2c3 0 5.5-1 7.4-2.7l-3.9-3c-1.1.7-2.4 1.1-3.5 1.1-3.1 0-5.6-2-6.5-4.8l-3.9 3C3.5 20.6 7.4 23.2 12 23.2z"/>
            </svg>
            See Our Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}

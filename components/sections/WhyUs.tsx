'use client'
import { Users, MapPin, Target } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

const cards = [
  {
    Icon: Users, num: '01',
    title: '🤝 A Real Person Actually Answers',
    body1: 'No call centers. No endless transfers. No chasing agents for answers.',
    body2: 'When you call us, you speak with someone who knows your name, understands your coverage, and actually takes the time to help.',
  },
  {
    Icon: MapPin, num: '02',
    title: '📍 We Know South Florida',
    body1: 'Most people stay overinsured, underinsured, or overpaying simply because nobody reviews their policy.',
    body2: 'We compare multiple carriers and help you find coverage that actually fits your life and budget.',
  },
  {
    Icon: Target, num: '03',
    title: '🎯 We Shop Rates For You',
    body1: 'South Florida insurance is different.',
    body2: 'From hurricanes and flood risks to growing businesses and rising home costs, we help you make smart coverage decisions based on where you actually live and work.',
  },
]

export default function WhyUs() {
  const ref = useReveal()
  return (
    <section id="about" className="py-24 bg-warm" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="kicker reveal">Why people switch</div>

        <div className="grid lg:grid-cols-2 gap-16 mt-4">
          {/* Left */}
          <div className="lg:sticky lg:top-28 self-start">
            <h2 className="h1 mt-3 reveal d1">
              Tired of Feeling Like Just Another{' '}
              <span className="swoosh swoosh-green">Policy Number?</span>
            </h2>
            <p className="lede mt-5 reveal d1">Most people do not switch insurance agencies because they love shopping for insurance.</p>
            <p className="lede mt-3 reveal d1">They switch because they are frustrated.</p>
            <p className="text-ink-3 text-[17px] leading-relaxed mt-4 reveal d1">
              Rates keep rising. Questions go unanswered. Support feels impossible to reach. And when something important happens, they realize nobody is really looking out for them.
            </p>
            <div className="card card-lg mt-6 p-5 border-l-4 border-l-green rounded-l-none reveal d2">
              <p className="font-serif text-[18px] font-medium leading-snug text-ink-2 italic">
                "That is why families and businesses across South Florida move to Possessions Insurance."
              </p>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="flex flex-col gap-4">
            {cards.map(({ Icon, num, title, body1, body2 }, i) => (
              <article key={num} className={`card card-lg hover-lift p-6 sm:p-7 grid grid-cols-[auto_1fr] gap-5 reveal d${i + 1}`}>
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-[14px] bg-green-tint flex items-center justify-center">
                    <Icon size={26} className="text-green-700" aria-hidden />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-line font-serif font-bold text-[11px] text-green-700 flex items-center justify-center">{num}</span>
                </div>
                <div>
                  <h3 className="h2 text-[clamp(18px,1.6vw,24px)]">{title}</h3>
                  <p className="mt-2.5 text-ink-3 text-base leading-relaxed">{body1}</p>
                  <p className="mt-2 text-ink-3 text-base leading-relaxed">{body2}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

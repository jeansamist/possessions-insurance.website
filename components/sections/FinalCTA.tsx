import { ArrowRight, Phone } from 'lucide-react'

interface Props { onOpenQuiz: () => void }

export default function FinalCTA({ onOpenQuiz }: Props) {
  return (
    <section className="relative overflow-hidden py-28 text-white text-center"
      style={{ background: 'linear-gradient(180deg,#33A64D 0%,#2b8d41 100%)' }}>
      <div className="dotgrid-light absolute inset-0 opacity-45 pointer-events-none" aria-hidden />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
        <h2 className="h-display text-white">
          Insurance doesn&apos;t have to be<br /><span className="swoosh">complicated.</span>
        </h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          Get honest guidance, real support, and coverage that actually fits your life. No bots. No pressure. No corporate runaround. Just local agents helping local people protect what matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button onClick={onOpenQuiz} className="btn-cta btn-cta-lg">
            Get My Free Coverage Check <ArrowRight size={17} strokeWidth={2.4} />
          </button>
          <a href="tel:5615550148" className="btn-ghost btn-cta-lg">
            <Phone size={17} aria-hidden /> Call Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}

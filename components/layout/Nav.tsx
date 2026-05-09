'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/constants'

interface NavProps { onOpenQuiz: () => void }

export default function Nav({ onOpenQuiz }: NavProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/80'} backdrop-blur-md border-b border-line`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="/" className="flex flex-col leading-none" aria-label={SITE.name}>
            <span className="font-serif font-semibold text-[17px] text-green-700 tracking-tight">{SITE.name}</span>
            <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-ink-4 mt-0.5">{SITE.tagline}</span>
          </a>

          <nav className="hidden md:flex gap-7 text-sm font-medium text-ink-2" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="hover:text-green transition-colors duration-150">{l.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={onOpenQuiz} className="btn-cta btn-cta-sm" aria-label="Start free coverage check">
              Free Coverage Check <ArrowRight size={14} strokeWidth={2.4} />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-warm transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-line px-5 pb-6 pt-4">
          <nav className="flex flex-col gap-4 text-base font-medium mb-5" aria-label="Mobile navigation">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-ink-2 hover:text-green transition-colors">{l.label}</a>
            ))}
          </nav>
          <button onClick={() => { setOpen(false); onOpenQuiz() }} className="btn-cta w-full justify-center">
            Free Coverage Check <ArrowRight size={16} strokeWidth={2.4} />
          </button>
        </div>
      )}
    </header>
  )
}

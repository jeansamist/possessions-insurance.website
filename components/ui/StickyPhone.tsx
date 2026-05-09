import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export default function StickyPhone() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call us at ${SITE.phone}`}
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-orange text-white font-bold text-sm
                 shadow-[0_12px_28px_rgba(255,92,0,.36)] hover:bg-orange-600 transition-colors
                 animate-[stickyIn_.7s_cubic-bezier(.34,1.56,.64,1)_1.5s_both]"
    >
      <Phone size={17} aria-hidden />
      <span className="hidden sm:inline">Call now</span>
    </a>
  )
}

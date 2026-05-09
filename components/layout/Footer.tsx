import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'

const coverage = ['Home','Auto','Health','Business','Motorcycle','Boat','RV','Pet']
const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Accessibility', href: '/accessibility' },
]

interface FooterProps { onOpenContact: () => void; onOpenQuiz: () => void }

export default function Footer({ onOpenContact, onOpenQuiz }: FooterProps) {
  return (
    <footer id="contact" className="bg-ink text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-serif font-semibold text-lg text-white tracking-tight">{SITE.name}</div>
            <div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-white/40 mt-0.5 mb-4">{SITE.tagline}</div>
            <p className="text-white/65 text-sm leading-relaxed max-w-[240px]">
              No bots. No pressure. Just local agents protecting what matters most.
            </p>
            <button onClick={onOpenQuiz} className="btn-cta btn-cta-sm mt-5">
              Get My Free Coverage Check <ArrowRight size={13} strokeWidth={2.4} />
            </button>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.13em] uppercase text-white/40 mb-3">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="flex gap-2.5 items-start"><MapPin size={14} className="text-green-soft mt-0.5 flex-shrink-0" />{SITE.address}, {SITE.city}</li>
              <li className="flex gap-2.5 items-center"><Phone size={14} className="text-green-soft flex-shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-white transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex gap-2.5 items-center"><Mail size={14} className="text-green-soft flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors text-xs sm:text-sm break-all">{SITE.email}</a>
              </li>
            </ul>
            <div className="mt-5">
              <div className="text-[10px] font-semibold tracking-[0.13em] uppercase text-white/40 mb-2">Hours</div>
              <ul className="text-sm text-white/75 space-y-1">
                <li className="flex items-center gap-2"><Clock size={13} className="text-green-soft" />Mon–Fri · 9am–6pm</li>
                <li className="pl-5">Sat · 10am–2pm</li>
                <li className="pl-5">Sun · By appointment</li>
              </ul>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.13em] uppercase text-white/40 mb-3">Coverage</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {coverage.map(c => (
                <a key={c} href="#coverage" className="text-sm text-white/75 hover:text-white transition-colors">{c}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-[10px] font-semibold tracking-[0.13em] uppercase text-white/40 mb-3">Company</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><button onClick={onOpenContact} className="hover:text-white transition-colors text-left">Contact Us</button></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social + Legal bar */}
        <div className="border-t border-white/10 mt-12 pt-6">
          {/* Social */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/40">Follow us</span>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center hover:bg-blue-600/35 hover:border-blue-400/60 transition-all duration-150">
            {/* Facebook */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center hover:bg-pink-600/35 hover:border-pink-400/60 transition-all duration-150">
              {/* Instagram */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/></svg>
            </a>
          </div>

          {/* Legal row */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-white/45 text-xs">© 2026 {SITE.name} · Licensed Independent Insurance Agency · {SITE.city.split(',')[0]}, FL</p>
            <nav aria-label="Legal links" className="flex flex-wrap gap-4">
              {legal.map(l => (
                <a key={l.label} href={l.href} className="text-white/45 text-xs hover:text-white transition-colors">{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-white/25 text-[11px] leading-relaxed max-w-4xl">
            Possessions Insurance is a licensed independent insurance agency in the State of Florida. License #{SITE.license}.
            We are not affiliated with or endorsed by any insurance carrier. Coverage availability, eligibility, and premiums vary by carrier and individual circumstances.
            Information on this site is for general informational purposes only and does not constitute insurance advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

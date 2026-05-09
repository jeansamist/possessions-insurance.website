import type { Metadata } from 'next'
import { ArrowLeft, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Possessions Insurance in West Palm Beach, FL. Real agents answer every call. Get your free coverage check today.',
  alternates: { canonical: 'https://possessionsinsurance.com/contact' },
}

const info = [
  { Icon: MapPin, label: 'Office', value: `${SITE.address}, ${SITE.city}`, href: 'https://maps.google.com' },
  { Icon: Phone, label: 'Phone', value: SITE.phone, href: SITE.phoneHref },
  { Icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { Icon: Clock, label: 'Hours', value: 'Mon–Fri 9am–6pm · Sat 10am–2pm · Sun by appt', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-3 hover:text-ink mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden /> Back to Home
        </a>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-tint border border-green-tint2 text-[11px] font-bold uppercase tracking-wider text-green-700 mb-4">
              Talk to a real person
            </div>
            <h1 className="font-serif font-semibold text-4xl sm:text-5xl text-ink leading-tight">
              We&apos;re Right Here.<br /><span className="text-green">Let&apos;s Talk.</span>
            </h1>
            <p className="text-ink-3 text-lg leading-relaxed mt-4">
              No bots. No hold music. No callbacks that never happen. Reach out any way that works for you.
            </p>

            <div className="space-y-3 mt-8">
              {info.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-2xl border border-line hover:border-green-tint2 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 rounded-xl bg-green-tint flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-green-700" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink-4 mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-ink hover:text-green-700 transition-colors leading-relaxed">{value}</a>
                    ) : (
                      <div className="text-sm text-ink leading-relaxed">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-6">Send us a message</h2>
            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="first" className="text-sm font-semibold text-ink-2">First name <span className="text-orange">*</span></label>
                  <input id="first" name="first" type="text" required placeholder="Maria"
                    className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all placeholder:text-ink-4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="last" className="text-sm font-semibold text-ink-2">Last name <span className="text-orange">*</span></label>
                  <input id="last" name="last" type="text" required placeholder="Garcia"
                    className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all placeholder:text-ink-4" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-ink-2">Email <span className="text-orange">*</span></label>
                <input id="email" name="email" type="email" required placeholder="maria@email.com"
                  className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all placeholder:text-ink-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-ink-2">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(561) 000-0000"
                  className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all placeholder:text-ink-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="topic" className="text-sm font-semibold text-ink-2">Topic <span className="text-orange">*</span></label>
                <select id="topic" name="topic" required
                  className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all bg-white">
                  <option value="">Select a topic…</option>
                  <option>Get a new quote</option>
                  <option>Review my existing policy</option>
                  <option>File a claim</option>
                  <option>Compare carriers</option>
                  <option>Business insurance</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="msg" className="text-sm font-semibold text-ink-2">Message <span className="text-orange">*</span></label>
                <textarea id="msg" name="msg" required rows={4} placeholder="Tell us a bit about what you're looking for…"
                  className="border border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all placeholder:text-ink-4 resize-y" />
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-green-tint rounded-xl border border-green-tint2">
                <svg className="w-4 h-4 text-green-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-xs text-green-700 font-medium">Your information is never sold or shared with third parties.</span>
              </div>
              <button type="submit" className="btn-cta w-full justify-center btn-cta-lg">
                Send My Message <ArrowRight size={17} strokeWidth={2.4} aria-hidden />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { ArrowLeft, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Possessions Insurance privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://possessionsinsurance.com/privacy' },
}

const sections = [
  ['1. Information We Collect', 'We may collect identifying information (name, address, date of birth, driver\'s license), contact information (email, phone), financial information required for premium processing, insurance-related information (current coverage, claims history, property details), and technical data (IP address, browser type, pages visited via cookies).'],
  ['2. How We Use Your Information', 'We use your information to provide our services, obtain quotes from licensed carriers on your behalf, communicate about policies and renewals, comply with Florida legal requirements, and respond to inquiries.'],
  ['3. Sharing Your Information', 'We do not sell your personal information. We share only with: insurance carriers and underwriters to obtain coverage, third-party service providers under confidentiality agreements, and regulatory authorities when required by law.'],
  ['4. Cookies & Tracking', 'Our website uses cookies to enhance your browsing experience and analyze site traffic. You may disable cookies through your browser settings; some features may not function properly.'],
  ['5. Data Security', 'We implement industry-standard administrative, technical, and physical safeguards. No method of internet transmission is 100% secure; we cannot guarantee absolute security.'],
  ['6. Your Rights (Florida Residents)', 'You may request access to, correction of, or deletion of your personal information subject to applicable legal requirements. Contact: privacy@possessionsinsurance.com'],
  ['7. Changes to This Policy', 'We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date above.'],
  ['8. Contact Us', 'Possessions Insurance · 123 Clematis Street, Suite 400, West Palm Beach, FL 33401 · privacy@possessionsinsurance.com · (561) 555-0148'],
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-3 hover:text-ink mb-8 transition-colors">
          <ArrowLeft size={16} aria-hidden /> Back to Home
        </a>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-tint border border-green-tint2 text-[11px] font-bold uppercase tracking-wider text-green-700 mb-4">
          <Lock size={12} aria-hidden /> Legal
        </div>
        <h1 className="font-serif font-semibold text-4xl sm:text-5xl text-ink leading-tight mb-2">Privacy Policy</h1>
        <p className="text-ink-4 text-sm mb-10">Effective: January 1, 2026 · Last Updated: May 1, 2026</p>
        <p className="text-ink-3 text-base leading-relaxed mb-8">
          Possessions Insurance ("we," "our," or "us") is committed to protecting the privacy of our clients and website visitors.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <div className="space-y-8">
          {sections.map(([h, b]) => (
            <section key={h}>
              <h2 className="font-serif font-semibold text-xl text-ink mb-3">{h}</h2>
              <p className="text-ink-3 text-base leading-relaxed">{b}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

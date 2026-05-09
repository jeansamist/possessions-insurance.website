'use client'
import { useState, useCallback, useEffect } from 'react'
import { X, ArrowRight, ArrowLeft, Home, Car, Heart, Shield, Briefcase, PackageCheck,
         Anchor, HelpCircle, TrendingDown, ShieldCheck, ArrowLeftRight, PlusCircle,
         Search, Mail, Phone, Check } from 'lucide-react'
import { CATEGORIES, INTENTS, PROVIDERS } from '@/lib/constants'

const CAT_ICONS: Record<string, React.ElementType> = {
  home: Home, auto: Car, health: Heart, life: Shield,
  business: Briefcase, bundle: PackageCheck, boat: Anchor, notsure: HelpCircle,
}
const INTENT_ICONS: Record<string, React.ElementType> = {
  lower: TrendingDown, gaps: ShieldCheck, switch: ArrowLeftRight,
  new: PlusCircle, review: Search,
}

interface QuizState {
  step: number
  category: string | null
  provider: string | null
  intent: string | null
  contactMethod: 'email' | 'phone' | null
  contactValue: string
  name: string
  callTime: string
}

interface QuizProps { isOpen: boolean; onClose: () => void }

const STEPS = ['Insurance Type','Your Provider','Your Goal','Contact']

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [q, setQ] = useState<QuizState>({
    step: 0, category: null, provider: null, intent: null,
    contactMethod: null, contactValue: '', name: '', callTime: '',
  })
  const [customProvider, setCustomProvider] = useState('')
  const [done, setDone] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  const reset = useCallback(() => {
    setQ({ step: 0, category: null, provider: null, intent: null,
           contactMethod: null, contactValue: '', name: '', callTime: '' })
    setCustomProvider('')
    setDone(false)
    setAnimKey(k => k + 1)
  }, [])

  useEffect(() => {
    if (isOpen) { reset(); document.body.style.overflow = 'hidden' }
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen, reset])

  // Keyboard close
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  const goStep = useCallback((d: number) => {
    setQ(prev => ({ ...prev, step: Math.max(0, Math.min(3, prev.step + d)) }))
    setAnimKey(k => k + 1)
  }, [])

  const step4Valid = q.name.trim().length > 0 && q.contactMethod && q.contactValue.length > 3

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-start justify-center px-4 py-5 overflow-y-auto"
      style={{ background: 'rgba(14,15,17,.55)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog" aria-modal="true" aria-label="Free Coverage Check"
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl my-auto shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-0">
          <div className="flex items-center justify-between mb-3">
            {done ? (
              <span className="text-sm font-semibold text-ink-3">All done!</span>
            ) : (
              <span className="text-sm font-semibold text-ink-3">
                Step {q.step + 1} of 4 — {STEPS[q.step]}
              </span>
            )}
            <button onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:bg-warm transition-colors">
              <X size={16} className="text-ink-3" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-line rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: done ? '100%' : `${(q.step / 4) * 100}%`,
                background: 'linear-gradient(90deg,#33A64D,#83C993)',
              }} />
          </div>

          {/* Step dots */}
          {!done && (
            <div className="flex items-center gap-0 mt-3 mb-1">
              {STEPS.map((label, i) => (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0
                    ${i < q.step ? 'bg-green text-white' : i === q.step ? 'border-2 border-green text-green' : 'border-2 border-line text-ink-4'}`}>
                    {i < q.step ? <Check size={13} strokeWidth={3} /> : i + 1}
                  </div>
                  {i < 3 && (
                    <div className={`flex-1 h-0.5 mx-1 transition-all duration-500 ${i < q.step ? 'bg-green' : 'bg-line'}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div key={animKey} className="px-6 sm:px-8 py-6 animate-[fadeDown_0.28s_cubic-bezier(.22,1,.36,1)_both]">
          {done ? (
            <DoneScreen q={q} onClose={onClose} />
          ) : q.step === 0 ? (
            <Step1 q={q} setQ={setQ} onNext={() => goStep(1)} />
          ) : q.step === 1 ? (
            <Step2 q={q} setQ={setQ} customProvider={customProvider} setCustomProvider={setCustomProvider}
                   onNext={() => goStep(1)} onBack={() => goStep(-1)} />
          ) : q.step === 2 ? (
            <Step3 q={q} setQ={setQ} onNext={() => goStep(1)} onBack={() => goStep(-1)} />
          ) : (
            <Step4 q={q} setQ={setQ} onBack={() => goStep(-1)} onSubmit={() => setDone(true)} valid={!!step4Valid} />
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Step 1: Category ── */
function Step1({ q, setQ, onNext }: { q: QuizState; setQ: React.Dispatch<React.SetStateAction<QuizState>>; onNext: () => void }) {
  return (
    <>
      <div className="mb-5">
        <div className="kicker mb-1">Step 1 of 4</div>
        <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight">What do you need to protect?</h2>
        <p className="text-ink-3 text-sm mt-1.5">Pick the coverage type that fits best — you can always refine later.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {CATEGORIES.map(c => {
          const Icon = CAT_ICONS[c.id]
          const sel = q.category === c.id
          return (
            <button key={c.id} onClick={() => setQ(p => ({ ...p, category: c.id }))}
              aria-pressed={sel}
              className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border-[1.5px] transition-all duration-200 text-center
                ${sel ? 'border-green bg-green-tint shadow-[0_0_0_3px_rgba(51,166,77,.14)]' : 'border-line hover:border-green hover:bg-green-tint/50'}`}>
              <span className={`w-12 h-12 rounded-[13px] flex items-center justify-center transition-all duration-200
                ${sel ? 'bg-green text-white' : 'bg-green-tint text-green-700'}`}>
                <Icon size={24} aria-hidden />
              </span>
              <span className={`text-xs font-semibold leading-tight ${sel ? 'text-green-700' : 'text-ink-2'}`}>{c.label}</span>
            </button>
          )
        })}
      </div>
      <div className="flex justify-end pt-5 mt-5 border-t border-line">
        <button onClick={onNext} disabled={!q.category} data-quiz-btn="1"
          className="btn-cta disabled:opacity-40 disabled:cursor-not-allowed">
          Continue <ArrowRight size={16} strokeWidth={2.4} />
        </button>
      </div>
    </>
  )
}

/* ── Step 2: Provider ── */
function Step2({ q, setQ, customProvider, setCustomProvider, onNext, onBack }:
  { q: QuizState; setQ: React.Dispatch<React.SetStateAction<QuizState>>; customProvider: string; setCustomProvider: (v: string) => void; onNext: () => void; onBack: () => void }) {
  return (
    <>
      <div className="mb-5">
        <div className="kicker mb-1">Step 2 of 4</div>
        <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight">Who is your current provider?</h2>
        <p className="text-ink-3 text-sm mt-1.5">This gives your agent competitive context to find you a better deal.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PROVIDERS.map(p => {
          const sel = q.provider === p
          return (
            <button key={p} onClick={() => { setQ(prev => ({ ...prev, provider: p })); setCustomProvider('') }}
              aria-pressed={sel}
              className={`px-3 py-2.5 rounded-xl border-[1.5px] text-sm font-medium text-left transition-all duration-150
                ${sel ? 'border-green bg-green-tint text-green-700 font-bold' : 'border-line hover:border-green hover:bg-green-tint/50 text-ink-2'}`}>
              {p}
            </button>
          )
        })}
      </div>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-line" /></div>
        <div className="relative flex justify-center"><span className="px-3 bg-white text-xs text-ink-4">or type yours below</span></div>
      </div>
      <input
        className="w-full border-[1.5px] border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(51,166,77,.12)] transition-all placeholder:text-ink-4"
        placeholder="Enter provider name…"
        value={customProvider}
        onChange={e => { setCustomProvider(e.target.value); setQ(p => ({ ...p, provider: e.target.value.trim() || null })) }}
        aria-label="Custom provider name"
      />
      <div className="flex items-center justify-between pt-5 mt-5 border-t border-line">
        <button onClick={onBack} data-quiz-btn="1" className="flex items-center gap-1.5 text-sm font-semibold text-ink-3 hover:text-ink transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onNext} disabled={!q.provider} data-quiz-btn="1"
          className="btn-cta disabled:opacity-40 disabled:cursor-not-allowed">
          Continue <ArrowRight size={16} strokeWidth={2.4} />
        </button>
      </div>
    </>
  )
}

/* ── Step 3: Intent ── */
function Step3({ q, setQ, onNext, onBack }:
  { q: QuizState; setQ: React.Dispatch<React.SetStateAction<QuizState>>; onNext: () => void; onBack: () => void }) {
  const select = (id: string) => {
    setQ(p => ({ ...p, intent: id }))
    setTimeout(onNext, 340)
  }
  return (
    <>
      <div className="mb-5">
        <div className="kicker mb-1">Step 3 of 4</div>
        <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight">What is your main goal?</h2>
        <p className="text-ink-3 text-sm mt-1.5">We'll make sure your agent focuses on exactly what matters to you.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {INTENTS.map(intent => {
          const Icon = INTENT_ICONS[intent.id]
          const sel = q.intent === intent.id
          return (
            <button key={intent.id} onClick={() => select(intent.id)} aria-pressed={sel}
              className={`flex items-center gap-4 p-4 rounded-2xl border-[1.5px] text-left transition-all duration-200 w-full
                ${sel ? 'border-green bg-green-tint' : 'border-line hover:border-green hover:bg-green-tint/50'}`}>
              <span className={`w-11 h-11 rounded-[11px] flex items-center justify-center flex-shrink-0 transition-all duration-200
                ${sel ? 'bg-green text-white' : 'bg-green-tint text-green-700'}`}>
                <Icon size={21} aria-hidden />
              </span>
              <span className="flex-1 min-w-0">
                <span className={`block text-[15px] font-bold ${sel ? 'text-green-700' : 'text-ink'}`}>{intent.label}</span>
                <span className="block text-xs text-ink-3 mt-0.5">{intent.desc}</span>
              </span>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
                ${sel ? 'bg-green' : 'border border-line'}`}>
                {sel && <Check size={13} className="text-white" strokeWidth={3} />}
              </span>
            </button>
          )
        })}
      </div>
      <div className="flex items-center justify-between pt-5 mt-5 border-t border-line">
        <button onClick={onBack} data-quiz-btn="1" className="flex items-center gap-1.5 text-sm font-semibold text-ink-3 hover:text-ink transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onNext} disabled={!q.intent} data-quiz-btn="1"
          className="btn-cta disabled:opacity-40 disabled:cursor-not-allowed">
          Continue <ArrowRight size={16} strokeWidth={2.4} />
        </button>
      </div>
    </>
  )
}

/* ── Step 4: Contact ── */
function Step4({ q, setQ, onBack, onSubmit, valid }:
  { q: QuizState; setQ: React.Dispatch<React.SetStateAction<QuizState>>; onBack: () => void; onSubmit: () => void; valid: boolean }) {
  return (
    <>
      <div className="mb-5">
        <div className="kicker mb-1">Step 4 of 4 — Almost there!</div>
        <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight">How should we reach you?</h2>
        <p className="text-ink-3 text-sm mt-1.5">A real local agent — not a bot — will follow up within one business day.</p>
      </div>

      <div className="max-w-md space-y-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qz-name" className="text-sm font-semibold text-ink-2">Your first name <span className="text-orange">*</span></label>
          <input id="qz-name" type="text" placeholder="Maria"
            value={q.name} onChange={e => setQ(p => ({ ...p, name: e.target.value }))}
            className="w-full border-[1.5px] border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(51,166,77,.12)] transition-all placeholder:text-ink-4"
            aria-required="true" />
        </div>

        {/* Contact method */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-ink-2">Best way to reach you <span className="text-orange">*</span></span>
          <div className="flex gap-3">
            {(['email','phone'] as const).map(m => (
              <button key={m} onClick={() => setQ(p => ({ ...p, contactMethod: m, contactValue: '' }))}
                data-quiz-btn="1"
                aria-pressed={q.contactMethod === m}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-[1.5px] text-sm font-semibold transition-all duration-200
                  ${q.contactMethod === m ? 'border-green bg-green-tint text-green-700' : 'border-line hover:border-green hover:bg-green-tint/50 text-ink-2'}`}>
                {m === 'email' ? <Mail size={17} aria-hidden /> : <Phone size={17} aria-hidden />}
                {m === 'email' ? 'Email' : 'Phone'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic contact field */}
        {q.contactMethod && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="qz-contact" className="text-sm font-semibold text-ink-2">
              {q.contactMethod === 'phone' ? 'Your phone number' : 'Your email address'} <span className="text-orange">*</span>
            </label>
            <input
              id="qz-contact"
              type={q.contactMethod === 'phone' ? 'tel' : 'email'}
              placeholder={q.contactMethod === 'phone' ? '(561) 000‑0000' : 'you@email.com'}
              value={q.contactValue}
              onChange={e => setQ(p => ({ ...p, contactValue: e.target.value }))}
              className="w-full border-[1.5px] border-line rounded-xl px-4 py-3 text-base font-sans text-ink outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(51,166,77,.12)] transition-all placeholder:text-ink-4"
              aria-required="true"
            />
          </div>
        )}

        {/* Best call time (phone only) */}
        {q.contactMethod === 'phone' && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-ink-2">Best time to call</span>
            <div className="flex flex-wrap gap-2">
              {['Morning (9–12)', 'Afternoon (12–5)', 'Evening (5–7)'].map(t => (
                <button key={t} onClick={() => setQ(p => ({ ...p, callTime: t }))}
                  data-quiz-btn="1"
                  aria-pressed={q.callTime === t}
                  className={`px-4 py-2 rounded-full border-[1.5px] text-xs font-semibold transition-all duration-150
                    ${q.callTime === t ? 'bg-green border-green text-white' : 'border-line text-ink-3 hover:border-green hover:text-green-700'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Trust */}
        <div className="flex items-center gap-2.5 p-3 bg-green-tint rounded-xl border border-green-tint2">
          <ShieldCheck size={17} className="text-green-700 flex-shrink-0" aria-hidden />
          <span className="text-[13px] text-green-700 font-medium">We never sell your info. No spam — ever.</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-5 mt-5 border-t border-line">
        <button onClick={onBack} data-quiz-btn="1" className="flex items-center gap-1.5 text-sm font-semibold text-ink-3 hover:text-ink transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onSubmit} disabled={!valid} data-quiz-btn="1"
          className="btn-cta btn-cta-lg disabled:opacity-40 disabled:cursor-not-allowed">
          Get My Free Coverage Check <ArrowRight size={17} strokeWidth={2.4} />
        </button>
      </div>
    </>
  )
}

/* ── Done screen ── */
function DoneScreen({ q, onClose }: { q: QuizState; onClose: () => void }) {
  const catLabel = CATEGORIES.find(c => c.id === q.category)?.label ?? q.category
  const intentLabel = INTENTS.find(i => i.id === q.intent)?.label ?? q.intent

  return (
    <div className="text-center py-4">
      <div className="w-[88px] h-[88px] rounded-full mx-auto flex items-center justify-center animate-[donePop_.55s_cubic-bezier(.34,1.56,.64,1)_both]"
        style={{ background: 'linear-gradient(135deg,#33A64D,#2b8d41)', boxShadow: '0 12px 32px rgba(51,166,77,.36)' }}>
        <Check size={40} className="text-white" strokeWidth={2.5} aria-hidden />
      </div>
      <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-6">
        You&apos;re all set, {q.name}!
      </h2>
      <p className="text-ink-3 text-base leading-relaxed mt-3 max-w-md mx-auto">
        A real local agent will reach out via <strong>{q.contactMethod}</strong> within{' '}
        <strong>one business day</strong> — usually same day.
      </p>

      {/* Summary card */}
      <div className="bg-warm rounded-2xl border border-line p-5 mt-6 text-left space-y-3">
        {[
          ['Coverage', catLabel],
          ['Current provider', q.provider],
          ['Your goal', intentLabel],
          ['Contact via', `${q.contactMethod === 'phone' ? '📞' : '✉️'} ${q.contactValue}${q.callTime ? ` (${q.callTime})` : ''}`],
        ].map(([label, val]) => (
          <div key={label as string} className="flex justify-between items-center gap-4 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-4">{label}</span>
            <span className="text-sm font-semibold text-ink">{val}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
        <button onClick={onClose} data-quiz-btn="1" className="btn-cta btn-cta-lg">Back to Home</button>
      </div>
      <p className="mt-5 text-sm text-ink-4">
        Questions? Call us at{' '}
        <a href="tel:5615550148" className="text-green-700 font-semibold hover:underline">(561) 555‑0148</a>
      </p>
    </div>
  )
}

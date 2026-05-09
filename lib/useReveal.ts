'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref as React.RefObject<HTMLElement>
}

export function useStepReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.step-reveal')
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-[stepPop_.55s_cubic-bezier(.34,1.56,.64,1)_both]', 'opacity-100')
            e.target.classList.remove('opacity-0')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref as React.RefObject<HTMLElement>
}

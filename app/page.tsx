'use client'
import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import Checkup from '@/components/sections/Checkup'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'
import FinalCTA from '@/components/sections/FinalCTA'
import StickyPhone from '@/components/ui/StickyPhone'
import Quiz from '@/components/quiz/Quiz'

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <>
      <Nav onOpenQuiz={() => setQuizOpen(true)} />
      <main>
        <Hero onOpenQuiz={() => setQuizOpen(true)} />
        <TrustBar />
        <WhyUs />
        <Services onOpenQuiz={() => setQuizOpen(true)} />
        <Checkup onOpenQuiz={() => setQuizOpen(true)} />
        <HowItWorks onOpenQuiz={() => setQuizOpen(true)} />
        <Testimonials />
        <Blog />
        <FinalCTA onOpenQuiz={() => setQuizOpen(true)} />
      </main>
      <Footer onOpenQuiz={() => setQuizOpen(true)} onOpenContact={() => {}} />
      <StickyPhone />
      <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  )
}

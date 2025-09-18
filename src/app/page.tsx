import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Testimonials } from '@/components/sections/testimonials'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}

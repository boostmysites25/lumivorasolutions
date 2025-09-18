import { AppHero } from '@/components/sections/app-hero'
import { AppFeatures } from '@/components/sections/app-features'
import { AppTestimonials } from '@/components/sections/app-testimonials'
import { AppHowItWorks } from '@/components/sections/app-how-it-works'
import { AppPricing } from '@/components/sections/app-pricing'
import { AppFAQ } from '@/components/sections/app-faq'
import { AppFinalCTA } from '@/components/sections/app-final-cta'
import { ContactForm } from '@/components/ui/contact-form'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export default function AppDevelopmentPage() {
  return (
    <>
      <AppHero />
      <AppFeatures />
      <AppTestimonials />
      <AppHowItWorks />
      <AppPricing />
      <AppFAQ />
      
      {/* Contact Form Section */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-6">
              Ready to Start Your
              <span className="text-primary"> App Project?</span>
            </h2>
            <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
              Get a free consultation and detailed quote for your mobile app development project. 
              Our team is ready to bring your ideas to life.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
      
      <AppFinalCTA />
    </>
  )
}

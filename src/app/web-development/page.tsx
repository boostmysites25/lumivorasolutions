import { WebHero } from '@/components/sections/web-hero'
import { WebFeatures } from '@/components/sections/web-features'
import { WebTestimonials } from '@/components/sections/web-testimonials'
import { WebHowItWorks } from '@/components/sections/web-how-it-works'
import { WebPricing } from '@/components/sections/web-pricing'
import { WebFAQ } from '@/components/sections/web-faq'
import { WebFinalCTA } from '@/components/sections/web-final-cta'
import { ContactForm } from '@/components/ui/contact-form'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export default function WebDevelopmentPage() {
  return (
    <>
      <WebHero />
      <WebFeatures />
      <WebTestimonials />
      <WebHowItWorks />
      <WebPricing />
      <WebFAQ />
      
      {/* Contact Form Section */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-6">
              Ready to Start Your
              <span className="text-primary"> Web Project?</span>
            </h2>
            <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
              Get a free consultation and detailed quote for your website development project. 
              Our team is ready to create something amazing for you.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
      
      <WebFinalCTA />
    </>
  )
}

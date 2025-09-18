'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'

const faqs = [
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'The development timeline depends on the complexity of your app. A simple app typically takes 2-3 months, while a complex enterprise app can take 6-12 months. We provide detailed timelines during the planning phase.'
  },
  {
    question: 'Do you develop for both iOS and Android?',
    answer: 'Yes, we develop for both platforms. We can create native apps for each platform or use cross-platform frameworks like React Native and Flutter to build apps that work on both iOS and Android with a single codebase.'
  },
  {
    question: 'What technologies do you use for app development?',
    answer: 'We use modern technologies including React Native, Flutter, Swift (iOS), Kotlin (Android), Node.js for backend, and various cloud services. We choose the best technology stack based on your specific requirements.'
  },
  {
    question: 'How much does mobile app development cost?',
    answer: 'App development costs vary based on complexity, features, and platform. Basic apps start from $5,000, while complex enterprise apps can range from $35,000 to $100,000+. We provide detailed quotes after understanding your requirements.'
  },
  {
    question: 'Do you provide app maintenance and support?',
    answer: 'Yes, we offer comprehensive maintenance and support services including bug fixes, updates, performance optimization, and new feature additions. Support packages are available for 3, 6, or 12 months after launch.'
  },
  {
    question: 'Will my app be published on app stores?',
    answer: 'Absolutely! We handle the entire app store submission process for both Google Play Store and Apple App Store. This includes preparing store listings, screenshots, descriptions, and managing the approval process.'
  },
  {
    question: 'Can you integrate third-party services?',
    answer: 'Yes, we can integrate various third-party services including payment gateways, social media APIs, analytics tools, push notification services, and other APIs your app needs to function properly.'
  },
  {
    question: 'What happens after the app is launched?',
    answer: 'After launch, we provide ongoing support, monitor app performance, handle user feedback, implement updates, and ensure your app continues to meet your business goals. We also provide analytics reports to track app performance.'
  }
]

export function AppFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper background="default" padding="lg">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-6">
            Frequently Asked
            <span className="text-primary"> Questions</span>
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our mobile app development services. 
            Can't find what you're looking for? Contact us for more information.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help. Contact us for personalized answers to your 
              mobile app development questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

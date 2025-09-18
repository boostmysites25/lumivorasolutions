'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Website development timelines vary based on complexity. A simple website typically takes 2-4 weeks, while a complex web application can take 2-6 months. We provide detailed timelines during the planning phase.'
  },
  {
    question: 'Do you build responsive websites?',
    answer: 'Yes, all our websites are fully responsive and optimized for all devices including desktop, tablet, and mobile. We ensure your website looks and functions perfectly across all screen sizes.'
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern technologies including React, Next.js, Vue.js, Node.js, TypeScript, and various databases. We choose the best technology stack based on your specific requirements and goals.'
  },
  {
    question: 'How much does website development cost?',
    answer: 'Website costs vary based on complexity and features. Basic websites start from $2,500, while complex web applications can range from $20,000 to $100,000+. We provide detailed quotes after understanding your requirements.'
  },
  {
    question: 'Do you provide website maintenance and support?',
    answer: 'Yes, we offer comprehensive maintenance services including updates, security patches, performance optimization, and content updates. Support packages are available for 3, 6, or 12 months after launch.'
  },
  {
    question: 'Will my website be SEO optimized?',
    answer: 'Absolutely! We implement SEO best practices including meta tags, structured data, fast loading times, mobile optimization, and clean code structure to help your website rank better in search engines.'
  },
  {
    question: 'Can you integrate with third-party services?',
    answer: 'Yes, we can integrate various third-party services including payment gateways, CRM systems, email marketing tools, analytics platforms, and other APIs your website needs to function properly.'
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'We can help you set up hosting and domain services, or work with your existing hosting provider. We recommend reliable hosting solutions that ensure fast loading times and high uptime.'
  }
]

export function WebFAQ() {
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
            Get answers to common questions about our web development services. 
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
              web development questions.
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

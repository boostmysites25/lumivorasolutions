'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern technologies including React, Next.js, Node.js, Python, and various databases. Our tech stack is chosen based on your specific requirements and project goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical support. Support duration varies by plan, from 3 months to 12 months.',
  },
  {
    question: 'Can you help with existing projects or only new ones?',
    answer: 'We work with both new and existing projects. We can audit, improve, or completely rebuild existing applications to meet modern standards and requirements.',
  },
  {
    question: 'What is your development process?',
    answer: 'Our process includes consultation, planning, design, development, testing, and deployment. We maintain regular communication and provide progress updates throughout the project.',
  },
  {
    question: 'Do you offer mobile app development?',
    answer: 'Yes, we develop both native and cross-platform mobile applications for iOS and Android. We use technologies like React Native, Flutter, and native development tools.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper background="secondary">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="sub-heading max-w-2xl mx-auto">
            Find answers to common questions about our services, 
            process, and what you can expect when working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-800/50 transition-colors duration-200"
                  >
                    <span className="font-medium text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-foreground/60 transition-transform duration-200",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <p className="text-foreground/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-6">
            Still have questions? We're here to help!
          </p>
          <Button>
            Contact Us
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

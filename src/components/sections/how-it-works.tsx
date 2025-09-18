'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { MessageCircle, Search, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'We start with a detailed consultation to understand your business needs, goals, and challenges.',
  },
  {
    icon: Search,
    title: 'Analysis & Planning',
    description: 'Our team analyzes your requirements and creates a comprehensive project plan with timelines.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build your solution using cutting-edge technologies and best practices for optimal performance.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support to ensure continued success and growth.',
  },
]

export function HowItWorks() {
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
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="sub-heading max-w-2xl mx-auto">
            Our proven process ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full text-center group hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

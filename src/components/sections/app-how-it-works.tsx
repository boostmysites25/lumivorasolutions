'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Palette, 
  Code, 
  Rocket,
  ArrowRight
} from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, target audience, and app requirements through detailed consultation.',
    details: [
      'Business requirements analysis',
      'Target audience research',
      'Competitor analysis',
      'Technical feasibility study'
    ]
  },
  {
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'Our design team creates intuitive user interfaces and experiences that align with your brand and user needs.',
    details: [
      'UI/UX design',
      'Wireframing & prototyping',
      'User journey mapping',
      'Design system creation'
    ]
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'We build your app using the latest technologies and frameworks, with rigorous testing at every stage.',
    details: [
      'Frontend development',
      'Backend integration',
      'API development',
      'Quality assurance testing'
    ]
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your app to app stores and provide ongoing maintenance and support to ensure optimal performance.',
    details: [
      'App store submission',
      'Performance monitoring',
      'Regular updates',
      '24/7 technical support'
    ]
  }
]

export function AppHowItWorks() {
  return (
    <SectionWrapper background="gradient" padding="lg">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-6">
            How We Build Your
            <span className="text-primary"> Mobile App</span>
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step process ensures your mobile app is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-white mb-4">Project Timeline</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Typical app development timeline from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Discovery', duration: '1-2 weeks', color: 'bg-blue-500' },
              { phase: 'Design', duration: '2-3 weeks', color: 'bg-green-500' },
              { phase: 'Development', duration: '6-12 weeks', color: 'bg-yellow-500' },
              { phase: 'Launch', duration: '1-2 weeks', color: 'bg-purple-500' }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-4 h-4 ${phase.color} rounded-full mx-auto mb-3`}></div>
                <h4 className="text-lg font-semibold text-white mb-2">{phase.phase}</h4>
                <p className="text-gray-400 text-sm">{phase.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

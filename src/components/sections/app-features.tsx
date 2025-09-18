'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  Smartphone as Mobile,
  Database,
  Cloud
} from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Smartphone,
    title: 'Native iOS & Android',
    description: 'High-performance native apps built with Swift, Kotlin, and React Native for optimal user experience.',
    color: 'text-blue-400'
  },
  {
    icon: Code,
    title: 'Cross-Platform Development',
    description: 'Single codebase solutions using Flutter and React Native to reach both iOS and Android users.',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Optimized apps with smooth animations, fast loading times, and efficient memory usage.',
    color: 'text-yellow-400'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption, secure authentication, and compliance with industry standards.',
    color: 'text-red-400'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Intuitive interfaces designed with user experience principles and accessibility in mind.',
    color: 'text-purple-400'
  },
  {
    icon: BarChart3,
    title: 'Analytics Integration',
    description: 'Built-in analytics and tracking to help you understand user behavior and app performance.',
    color: 'text-cyan-400'
  },
  {
    icon: Database,
    title: 'Backend Integration',
    description: 'Seamless integration with APIs, databases, and cloud services for full-stack functionality.',
    color: 'text-orange-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Scalable cloud infrastructure with automatic updates and real-time synchronization.',
    color: 'text-indigo-400'
  }
]

export function AppFeatures() {
  return (
    <SectionWrapper background="secondary" padding="lg">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-6">
            Why Choose Our
            <span className="text-primary"> App Development</span>
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with user-centered design to create mobile 
            applications that stand out in the competitive app market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center p-6">
                  <div className={`w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* App Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-white mb-4">Our App Development Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From concept to launch, we follow a proven methodology to deliver exceptional mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design & Prototyping', desc: 'Creating intuitive user interfaces and experiences' },
              { step: '03', title: 'Development & Testing', desc: 'Building and rigorously testing your application' },
              { step: '04', title: 'Launch & Support', desc: 'Deploying to app stores and ongoing maintenance' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

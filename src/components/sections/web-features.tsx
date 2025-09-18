'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Code2, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  Search,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Globe,
    title: 'Responsive Web Design',
    description: 'Beautiful, responsive websites that work perfectly on all devices - desktop, tablet, and mobile.',
    color: 'text-blue-400'
  },
  {
    icon: Code2,
    title: 'Modern Technologies',
    description: 'Built with cutting-edge frameworks like React, Next.js, and Vue.js for optimal performance.',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Loading',
    description: 'Optimized for speed with lazy loading, image optimization, and efficient code splitting.',
    color: 'text-yellow-400'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL certificates, secure authentication, and regular backups.',
    color: 'text-red-400'
  },
  {
    icon: Users,
    title: 'User Experience Focus',
    description: 'Intuitive navigation and user-friendly interfaces designed to convert visitors into customers.',
    color: 'text-purple-400'
  },
  {
    icon: BarChart3,
    title: 'SEO Optimized',
    description: 'Search engine optimized websites that rank higher and attract more organic traffic.',
    color: 'text-cyan-400'
  },
  {
    icon: Search,
    title: 'Analytics Integration',
    description: 'Built-in Google Analytics and tracking tools to monitor performance and user behavior.',
    color: 'text-orange-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Hosting',
    description: 'Scalable cloud infrastructure with 99.9% uptime and automatic scaling capabilities.',
    color: 'text-indigo-400'
  }
]

export function WebFeatures() {
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
            <span className="text-primary"> Web Development</span>
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            We create modern, responsive websites that not only look great but also perform 
            exceptionally well across all devices and platforms.
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

        {/* Web Development Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-white mb-4">Technologies We Use</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest web technologies and frameworks to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', color: 'text-blue-400' },
              { name: 'Next.js', color: 'text-gray-300' },
              { name: 'Vue.js', color: 'text-green-400' },
              { name: 'TypeScript', color: 'text-blue-500' },
              { name: 'Tailwind CSS', color: 'text-cyan-400' },
              { name: 'Node.js', color: 'text-green-500' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="min-w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-primary/10 transition-colors">
                  <span className={`font-bold text-lg ${tech.color}`}>{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

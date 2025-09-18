'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const plans = [
  {
    name: 'Basic Website',
    price: '$2,500',
    period: 'Starting from',
    description: 'Perfect for small businesses and personal websites',
    features: [
      'Responsive design',
      'Up to 5 pages',
      'Basic SEO optimization',
      'Contact form',
      '3 months support',
      'Basic analytics',
      'Mobile-friendly'
    ],
    popular: false,
    color: 'border-gray-700'
  },
  {
    name: 'Business Website',
    price: '$7,500',
    period: 'Starting from',
    description: 'Ideal for growing businesses with advanced features',
    features: [
      'Custom responsive design',
      'Up to 15 pages',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce functionality',
      '6 months support',
      'Advanced analytics',
      'SSL certificate',
      'Performance optimization'
    ],
    popular: true,
    color: 'border-primary'
  },
  {
    name: 'Enterprise Website',
    price: '$20,000',
    period: 'Starting from',
    description: 'Comprehensive solution for large organizations',
    features: [
      'Custom web application',
      'Unlimited pages',
      'Enterprise SEO',
      'Custom CMS',
      'Advanced e-commerce',
      '12 months support',
      'Custom analytics dashboard',
      'Security features',
      'API integrations',
      'Scalable infrastructure'
    ],
    popular: false,
    color: 'border-gray-700'
  }
]

export function WebPricing() {
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
            Web Development
            <span className="text-primary"> Pricing</span>
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your website development needs. 
            All plans include our standard features with flexible customization options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${plan.color} ${plan.popular ? 'ring-2 ring-primary' : ''} relative overflow-hidden`}>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-700 hover:bg-gray-600'}`}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Contact us for a personalized quote based on your specific 
              requirements, timeline, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

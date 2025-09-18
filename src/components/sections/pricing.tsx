'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive Website Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '3 Months Support',
      'Mobile Optimization',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$5,999',
    description: 'Ideal for growing businesses',
    features: [
      'Custom Web Application',
      'Advanced SEO & Analytics',
      'Database Integration',
      '6 Months Support',
      'Performance Optimization',
      'Security Implementation',
      'API Integration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full-Stack Development',
      'AI/ML Integration',
      'Cloud Infrastructure',
      '12 Months Support',
      'Dedicated Project Manager',
      'Custom Integrations',
      '24/7 Monitoring',
      'Scalable Architecture',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <SectionWrapper>
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Pricing Plans</h2>
          <p className="sub-heading max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. 
            All plans include our commitment to quality and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card 
                className={`h-full ${
                  plan.popular 
                    ? 'border-primary shadow-primary/20 scale-105' 
                    : 'hover:shadow-primary/10'
                } transition-all duration-300`}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-foreground/60 ml-2">/project</span>
                    )}
                  </div>
                  <p className="text-foreground/70 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'primary' : 'outline'}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-6">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <Button variant="outline">
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

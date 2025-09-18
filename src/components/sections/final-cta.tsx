'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-img.webp"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Ready to Transform Your Business?</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/90 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Join us on a journey into the future of business—where innovation 
            meets responsibility and success is built on a foundation of trust. 
            Together, let's unlock the potential of AI and transform your vision into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="accent"
                className="group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            {[
              { number: '24/7', label: 'Support Available' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <div className="text-white/80 text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

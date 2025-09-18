'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, MessageCircle } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function WebFinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/80" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg" />

      <div className="relative z-10 wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8"
          >
            <Globe className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-6"
          >
            Ready to Launch Your
            <span className="text-accent"> Perfect Website?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="sub-heading text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of satisfied clients who have transformed their online presence 
            with stunning, high-performing websites. Let's build something amazing together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group" 
              asChild
            >
              <Link href="/contact">
                Start Your Web Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>Free consultation available</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5" />
              <span>48hr response guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

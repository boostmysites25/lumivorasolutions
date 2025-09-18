'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import Image from 'next/image'
import Link from 'next/link'

export function WebHero() {
  return (
    <SectionWrapper className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landingpage/web-dev-about.webp"
          alt="Web Development Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Web Development</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-1 text-white mb-6"
          >
            Build Stunning Websites That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {' '}Convert & Scale
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sub-heading text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            From responsive websites to complex web applications - we create digital 
            experiences that engage users and drive business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Start Your Web Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services/web-development">
                View Web Services
                <Code2 className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-400">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">99%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">48hr</div>
              <div className="text-gray-400">Response Time</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

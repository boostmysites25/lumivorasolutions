'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { allServices } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export function Features() {
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
          <h2 className="heading-2 mb-4">Our Services</h2>
          <p className="sub-heading max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
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
            Don't see what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

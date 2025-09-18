'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { testimonials } from '@/lib/constants'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export function Testimonials() {
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
          <h2 className="heading-2 mb-4">What Our Clients Say</h2>
          <p className="sub-heading max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.desc}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

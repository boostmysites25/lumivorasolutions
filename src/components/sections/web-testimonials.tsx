'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const testimonials = [
  {
    name: 'David Wilson',
    role: 'CEO, Digital Marketing Pro',
    content: 'Our new website has transformed our online presence. The design is stunning and the performance is incredible. Our conversion rate increased by 250%.',
    rating: 5,
    image: '/images/testimonial1.png'
  },
  {
    name: 'Lisa Thompson',
    role: 'Founder, E-commerce Plus',
    content: 'The web development team delivered an amazing e-commerce platform. The user experience is seamless and our sales have skyrocketed since launch.',
    rating: 5,
    image: '/images/testimonial2.png'
  },
  {
    name: 'James Anderson',
    role: 'Marketing Director, TechCorp',
    content: 'Professional, fast, and reliable. Our corporate website now ranks on the first page of Google and generates qualified leads consistently.',
    rating: 5,
    image: '/images/testimonial3.png'
  }
]

export function WebTestimonials() {
  return (
    <SectionWrapper background="default" padding="lg">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-6">
            What Our
            <span className="text-primary"> Web Clients</span> Say
          </h2>
          <p className="sub-heading text-gray-300 max-w-3xl mx-auto">
            Our web development projects speak for themselves. Here's what our clients 
            have to say about their website development experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative overflow-hidden group">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <div className="p-6 relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-400">Websites Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">48hr</div>
            <div className="text-gray-400">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

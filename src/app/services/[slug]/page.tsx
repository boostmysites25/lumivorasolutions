'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  Star,
  Phone,
  MessageCircle
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Service data - in a real app, this would come from a CMS or API
const servicesData = {
  'chatbot-development': {
    title: 'Chatbot Development',
    description: 'Intelligent AI-powered chatbots for customer support, sales, and automation.',
    longDescription: 'In an era where instant communication is key, chatbots have emerged as a powerful tool for businesses to enhance customer service, automate routine tasks, and drive sales. At Lumivora Solutions, we specialize in developing intelligent, AI-powered chatbots tailored to your specific business needs. Our chatbots are designed to provide 24/7 support, answer frequently asked questions, guide users through processes, and even qualify leads, freeing up your human agents to focus on more complex issues.',
    features: [
      '24/7 Customer Support',
      'Lead Generation',
      'Automated Workflows',
      'Multi-platform Integration',
      'Natural Language Processing',
      'Custom Conversation Flows',
      'Analytics & Reporting',
      'Seamless Human Handoff'
    ],
    technologies: ['Dialogflow', 'Rasa', 'Azure Bot Service', 'Python', 'Node.js', 'OpenAI'],
    pricing: 'Starting at $3,499',
    duration: '6-12 weeks',
    team: '2-3 developers',
    image: '/images/landingpage/web-dev-about.webp',
    process: [
      {
        step: 'Discovery & Analysis',
        description: 'We analyze your business needs and identify chatbot opportunities'
      },
      {
        step: 'Design & Planning',
        description: 'We design conversation flows and create the chatbot architecture'
      },
      {
        step: 'Development & Training',
        description: 'We build and train your chatbot with AI and machine learning'
      },
      {
        step: 'Testing & Deployment',
        description: 'We test thoroughly and deploy your chatbot across platforms'
      }
    ],
    benefits: [
      'Improved customer satisfaction',
      'Reduced operational costs',
      'Increased lead conversion',
      'Enhanced user engagement',
      'Consistent brand voice',
      'Scalable support infrastructure'
    ]
  },
  'ai-development': {
    title: 'AI Development',
    description: 'Artificial intelligence solutions and machine learning models.',
    longDescription: 'At the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks.',
    features: [
      'Custom AI Models',
      'Data Analysis',
      'Predictive Analytics',
      'Chatbots',
      'Computer Vision',
      'Natural Language Processing',
      'Recommendation Systems',
      'Automation'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS AI', 'Google AI'],
    pricing: 'Starting at $5,999',
    duration: '8-16 weeks',
    team: '4-6 specialists',
    image: '/images/ai-circuit-board.webp.jpeg',
    process: [
      {
        step: 'Data Analysis',
        description: 'We analyze your data and identify AI opportunities'
      },
      {
        step: 'Model Development',
        description: 'We develop and train custom AI models for your needs'
      },
      {
        step: 'Integration',
        description: 'We integrate AI solutions into your existing systems'
      },
      {
        step: 'Training & Support',
        description: 'We provide training and ongoing support for your AI solutions'
      }
    ],
    benefits: [
      'Automated processes',
      'Better decision making',
      'Cost reduction',
      'Improved efficiency',
      'Predictive insights',
      'Competitive advantage'
    ]
  },
  'data-analytics': {
    title: 'Data Analytics',
    description: 'Business intelligence and data visualization solutions.',
    longDescription: 'Data analytics is the process of examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. Our data analytics services help businesses unlock the value hidden in their data.',
    features: [
      'Real-time Dashboards',
      'Custom Reports',
      'Data Visualization',
      'KPI Tracking',
      'Predictive Analytics',
      'Data Mining',
      'Statistical Analysis',
      'Business Intelligence'
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Hadoop'],
    pricing: 'Starting at $2,499',
    duration: '3-6 weeks',
    team: '2-3 data analysts',
    image: '/images/aboutus-img2.webp',
    process: [
      {
        step: 'Data Discovery',
        description: 'We identify and catalog all available data sources and their quality'
      },
      {
        step: 'Data Preparation',
        description: 'We clean, transform, and prepare data for analysis'
      },
      {
        step: 'Analysis & Modeling',
        description: 'We perform statistical analysis and create predictive models'
      },
      {
        step: 'Visualization & Reporting',
        description: 'We create interactive dashboards and comprehensive reports'
      }
    ],
    benefits: [
      'Data-driven decisions',
      'Improved efficiency',
      'Better customer insights',
      'Competitive advantage',
      'Cost reduction',
      'Risk mitigation'
    ]
  }
}

interface ServiceDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link href="/services" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-1 text-white mb-6">
                  {service.title}
                </h1>
                <p className="sub-heading text-gray-300 mb-8">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5 text-indigo-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>{service.team}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span>Secure & Reliable</span>
                  </div>
                </div>

                <div className="text-3xl font-bold text-indigo-400 mb-8">
                  {service.pricing}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Quote
                  </Button>
                  <Button variant="secondary" size="lg" className="flex-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Discuss Project
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-white mb-6">What's Included</h2>
            <p className="sub-heading text-gray-300">
              Comprehensive features and technologies for your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold">{feature}</h3>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="heading-3 text-white mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-800">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-white mb-6">Our Process</h2>
            <p className="sub-heading text-gray-300">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-600 -z-10"></div>
                  )}
                </div>
                <h3 className="heading-3 text-white mb-3">{step.step}</h3>
                <p className="desc text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-white mb-6">Why Choose Our {service.title}?</h2>
              <p className="desc text-gray-300 mb-8">
                {service.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-cyan-600">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-2 text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="sub-heading text-white/90 mb-8">
              Let's discuss your {service.title.toLowerCase()} project and bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </SectionWrapper>
      </section>
    </div>
  )
}

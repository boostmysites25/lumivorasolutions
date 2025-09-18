import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Bot, 
  BarChart3,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-green-400" />,
      title: "Chatbot Development",
      description: "Intelligent AI-powered chatbots for customer support, sales, and automation.",
      features: ["24/7 Customer Support", "Lead Generation", "Automated Workflows", "Multi-platform Integration"],
      image: "/images/landingpage/web-dev-about.webp",
      price: "Starting at $3,499"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "AI Development",
      description: "Artificial intelligence solutions and machine learning models.",
      features: ["Custom AI Models", "Data Analysis", "Predictive Analytics", "Chatbots"],
      image: "/images/ai-circuit-board.webp.jpeg",
      price: "Starting at $5,999"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-400" />,
      title: "Data Analytics",
      description: "Business intelligence and data visualization solutions.",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization", "KPI Tracking"],
      image: "/images/aboutus-img2.webp",
      price: "Starting at $2,499"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SectionWrapper>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 text-white mb-6">
              Our <span className="text-indigo-400">Services</span>
            </h1>
            <p className="sub-heading text-gray-300 mb-8">
              Comprehensive technology solutions to help your business grow and succeed in the digital world.
            </p>
          </div>
        </SectionWrapper>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col h-full">
                    {/* Service Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-3 text-white mb-2">{service.title}</h3>
                        <p className="desc text-gray-300 mb-4">{service.description}</p>
                        <div className="text-indigo-400 font-semibold text-lg">
                          {service.price}
                        </div>
                      </div>
                    </div>

                    {/* Service Image */}
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                            <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-800">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">Our Process</h2>
            <p className="sub-heading text-gray-300">
              How we deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your requirements and goals"
              },
              {
                step: "02", 
                title: "Planning",
                description: "We create a detailed project roadmap"
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution with regular updates"
              },
              {
                step: "04",
                title: "Launch",
                description: "We deploy and provide ongoing support"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-600 -z-10"></div>
                  )}
                </div>
                <h3 className="heading-3 text-white mb-3">{step.title}</h3>
                <p className="desc text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-cyan-600">
        <SectionWrapper>
          <div className="text-center">
            <h2 className="heading-2 text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="sub-heading text-white/90 mb-8">
              Let's discuss your project and find the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  )
}

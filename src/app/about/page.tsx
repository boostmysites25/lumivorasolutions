import { SectionWrapper } from '@/components/ui/section-wrapper'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Target, Award, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SectionWrapper>
          <div
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 text-white mb-6">
              About <span className="text-indigo-400">Lumivora Solutions</span>
            </h1>
            <p className="sub-heading text-gray-300 mb-8">
              We are a leading technology company dedicated to delivering innovative solutions 
              that transform businesses and drive digital success.
            </p>
          </div>
        </SectionWrapper>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
            >
              <h2 className="heading-2 text-white mb-6">Our Mission</h2>
              <p className="desc text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe in creating digital experiences that 
                make a real difference.
              </p>
              <h2 className="heading-2 text-white mb-6">Our Vision</h2>
              <p className="desc text-gray-300">
                To be the global leader in technology solutions, recognized for our innovation, 
                reliability, and commitment to client success.
              </p>
            </div>
            
            <div
              className="relative"
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/aboutus-img1.webp"
                  alt="About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-800">
        <SectionWrapper>
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-white mb-6">Our Core Values</h2>
            <p className="sub-heading text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-indigo-400" />,
                title: "Innovation",
                description: "We constantly push boundaries to deliver cutting-edge solutions."
              },
              {
                icon: <Heart className="w-8 h-8 text-cyan-400" />,
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency."
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-400" />,
                title: "Excellence",
                description: "We strive for perfection in every project we undertake."
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                title: "Collaboration",
                description: "We work closely with our clients as trusted partners."
              }
            ].map((value, index) => (
              <div
                key={index}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="heading-3 text-white mb-3">{value.title}</h3>
                  <p className="desc text-gray-300">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <SectionWrapper>
          <div
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-white mb-6">Meet Our Team</h2>
            <p className="sub-heading text-gray-300">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/team1.jpeg",
                name: "John Smith",
                role: "CEO & Founder",
                description: "Visionary leader with 15+ years in technology."
              },
              {
                image: "/images/team2.jpeg",
                name: "Sarah Johnson",
                role: "CTO",
                description: "Technical expert passionate about innovation."
              },
              {
                image: "/images/team3.jpeg",
                name: "Mike Chen",
                role: "Lead Developer",
                description: "Full-stack developer with expertise in modern technologies."
              }
            ].map((member, index) => (
              <div
                key={index}
              >
                <Card className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="heading-3 text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="desc text-gray-300">{member.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-cyan-600">
        <SectionWrapper>
          <div
            className="text-center"
          >
            <h2 className="heading-2 text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="sub-heading text-white/90 mb-8">
              Let's discuss how we can help transform your business
            </p>
            <Button variant="secondary" size="lg">
              Get In Touch
            </Button>
          </div>
        </SectionWrapper>
      </section>
    </div>
  )
}

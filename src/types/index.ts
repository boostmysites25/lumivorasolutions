export interface CompanyDetails {
  phone: string
  whatsapp: string
  address: string
  email: string
  linkedin: string
  instagram: string
  twitter: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  detailContent?: string
}

export interface Testimonial {
  id: number
  name: string
  position: string
  img: string
  desc: string
}

export interface PortfolioItem {
  id: number
  img: string
  title: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary'
}

export interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'secondary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
}

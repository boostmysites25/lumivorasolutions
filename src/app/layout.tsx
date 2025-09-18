import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Lumivora Solutions - AI & Technology Services',
  description: 'Empowering businesses with cutting-edge AI solutions, web development, mobile apps, and cloud services. Trust, innovation, and excellence in every project.',
  keywords: 'AI development, web development, mobile app development, cloud services, data science, IT consulting',
  authors: [{ name: 'Lumivora Solutions' }],
  creator: 'Lumivora Solutions',
  publisher: 'Lumivora Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lumivora-solutions.vercel.app'),
  openGraph: {
    title: 'Lumivora Solutions - AI & Technology Services',
    description: 'Empowering businesses with cutting-edge AI solutions, web development, mobile apps, and cloud services.',
    url: 'https://lumivora-solutions.vercel.app',
    siteName: 'Lumivora Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumivora Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumivora Solutions - AI & Technology Services',
    description: 'Empowering businesses with cutting-edge AI solutions, web development, mobile apps, and cloud services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppIcon />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#F9FAFB',
              border: '1px solid #374151',
            },
            success: {
              iconTheme: {
                primary: '#4F46E5',
                secondary: '#F9FAFB',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#F9FAFB',
              },
            },
          }}
        />
      </body>
    </html>
  )
}

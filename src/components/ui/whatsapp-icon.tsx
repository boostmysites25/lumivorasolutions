'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { companyDetails } from '@/lib/constants'

export function WhatsAppIcon() {
  const handleClick = () => {
    const phoneNumber = companyDetails.whatsapp.replace(/\s/g, '')
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-900"></div>
      </div>
    </motion.button>
  )
}

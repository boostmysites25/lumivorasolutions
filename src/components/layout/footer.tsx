"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { companyDetails } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "AI Development", href: "/services/ai-development" },
      { name: "Chatbot Development", href: "/services/chatbot-development" },
      { name: "Data Analytics", href: "/services/data-analytics" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: companyDetails.instagram, icon: Instagram },
    { name: "Twitter", href: companyDetails.twitter, icon: Twitter },
    { name: "LinkedIn", href: companyDetails.linkedin, icon: Linkedin },
  ];

  return (
    <footer className="bg-background-secondary border-t border-neutral-800">
      <div className="wrapper section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Lumivora Solutions"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Lumivora Solutions
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions, web
              development, mobile apps, and cloud services. Trust, innovation,
              and excellence in every project.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70 text-sm leading-relaxed">
                  {companyDetails.address}
                </span>
              </li>
              <li>
                <Link
                  href={`mailto:${companyDetails.email}`}
                  className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{companyDetails.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{companyDetails.phone}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${companyDetails.whatsapp}`}
                  target="_blank"
                  className="flex items-center space-x-3 text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>{companyDetails.whatsapp}</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Lumivora Solutions. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

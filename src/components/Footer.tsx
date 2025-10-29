'use client'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Landing Pages', href: '#services' },
      { name: 'Hosting Premium', href: '#services' },
      { name: 'Soporte Mensual', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Portafolio', href: '#portfolio' },
      { name: 'FAQ', href: '#faq' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#terms' },
      { name: 'Política de Privacidad', href: '#privacy' },
    ],
    contact: [
      { icon: <Mail size={16} />, text: 'miguel@kanarianlabs.com', href: 'mailto:miguel@kanarianlabs.com' },
      { icon: <Phone size={16} />, text: '+51 999 999 999', href: 'tel:+51999999999' },
      { icon: <MapPin size={16} />, text: 'Lima, Perú', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-primary-cyan/10 pt-16 pb-8">
      <div className="section-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/KanarianLabsLogoSinFondo.png"
                  alt="KanarianLabs Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold gradient-text">KanarianLabs</span>
              </div>
              <p className="text-gray-400 mb-6">
                Desarrollo Web Profesional en Perú. Transformamos ideas en presencia digital que convierte.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-400 hover:text-primary-cyan hover:border-primary-cyan/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-cyan transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-cyan transition-colors duration-300 text-sm flex items-center gap-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Contacto</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary-cyan transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    {item.icon}
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-primary-cyan/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} KanarianLabs - Miguel Angel Ybañez. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Hecho con</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span className="text-gray-400">en Lima, Perú</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
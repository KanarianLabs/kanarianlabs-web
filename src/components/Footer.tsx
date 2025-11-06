'use client'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

// TikTok Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

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
      { icon: <Phone size={16} />, text: '+51 976 999 009', href: 'tel:+51976999009' },
      { icon: <MapPin size={16} />, text: 'Lima, Perú', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: <TikTokIcon size={20} />, href: 'https://tiktok.com/@kanarianlabs', label: 'TikTok' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/kanarianlabs', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com/@kanarianlabs', label: 'YouTube' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-primary-cyan/10 pt-16 pb-8">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
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
                  src="/logo.png"
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
              <MapPin className="text-primary-cyan" size={16} />
              <span className="text-gray-400">Lima, Perú</span>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  )
}
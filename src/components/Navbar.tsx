'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [bannerClosed, setBannerClosed] = useState(false)

  useEffect(() => {
    // Check if banner is closed on mount
    if (typeof window !== 'undefined') {
      const isClosed = localStorage.getItem('promoBannerClosed')
      setBannerClosed(isClosed === 'true')
    }

    // Listen for banner close event
    const handleBannerClose = () => {
      setBannerClosed(true)
    }

    window.addEventListener('promoBannerClosed', handleBannerClose)
    return () => window.removeEventListener('promoBannerClosed', handleBannerClose)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = ['hero', 'services', 'portfolio', 'pricing', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Servicios', href: '#services', id: 'services' },
    { name: 'Portafolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Precios', href: '#pricing', id: 'pricing' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        bannerClosed ? 'top-0' : 'top-[52px]'
      } ${isScrolled ? 'glass-effect py-4' : 'py-6'}`}
    >
      <div className="section-padding w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <img
              src="/logo.png"
              alt="KanarianLabs Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold gradient-text">KanarianLabs</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="relative"
              >
                <a
                  href={item.href}
                  className={`text-gray-300 hover:text-primary-cyan transition-colors duration-300 ${
                    activeSection === item.id ? 'text-primary-cyan' : ''
                  }`}
                >
                  {item.name}
                </a>
                {/* Animated underline with blur */}
                <AnimatePresence>
                  {activeSection === item.id && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-cyan origin-center"
                      style={{
                        boxShadow: '0 0 8px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.4)'
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="btn-primary"
            >
              Cotizar Ahora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-cyan"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-primary-cyan/20"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-gray-300 hover:text-primary-cyan transition-colors duration-300 ${
                    activeSection === item.id ? 'text-primary-cyan' : ''
                  }`}
                >
                  {item.name}
                </a>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="mobile-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-cyan"
                    style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8), 0 0 16px rgba(34, 211, 238, 0.4)'
                    }}
                  />
                )}
              </div>
            ))}
            <a href="#contact" className="btn-primary w-full mt-4 text-center">
              Cotizar Ahora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
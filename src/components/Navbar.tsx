'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Inicio', href: '/#hero', id: 'hero' },
  { name: 'Servicios', href: '/#services', id: 'services' },
  { name: 'Automatización', href: '/automatizacion', id: 'automations', external: false },
  { name: 'Precios', href: '/#pricing', id: 'pricing' },
  { name: 'FAQ', href: '/#faq', id: 'faq' },
  { name: 'Contacto', href: '/#contact', id: 'contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [bannerClosed, setBannerClosed] = useState(true)
  const pathname = usePathname()
  const isSubRoute = pathname !== '/'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isClosed = localStorage.getItem('promoBannerClosed')
      setBannerClosed(isClosed === 'true' || isSubRoute)
    }
    const handleBannerClose = () => setBannerClosed(true)
    window.addEventListener('promoBannerClosed', handleBannerClose)
    return () => window.removeEventListener('promoBannerClosed', handleBannerClose)
  }, [isSubRoute])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (isSubRoute) return

      const sections = ['hero', 'services', 'automations', 'pricing', 'faq', 'contact']
      const scrollPosition = window.scrollY + 120
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSubRoute])

  const isActive = (item: typeof menuItems[number]) => {
    if (item.href === '/automatizacion') return pathname === '/automatizacion'
    if (isSubRoute) return false
    return activeSection === item.id
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      aria-label="Navegación principal"
      className={`fixed w-full z-50 transition-all duration-300 ${
        bannerClosed ? 'top-0' : 'top-[38px] sm:top-[44px]'
      } ${isScrolled ? 'glass-effect py-3' : 'py-5'}`}
    >
      <div className="section-padding w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group" aria-label="KanarianLabs — ir al inicio">
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-9 w-9 md:h-10 md:w-10"
            />
            <span className="text-lg md:text-xl font-bold gradient-text">KanarianLabs</span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item) ? 'text-primary-cyan' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
                {isActive(item) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary-cyan"
                    style={{ boxShadow: '0 0 8px rgba(0,191,231,0.8)' }}
                  />
                )}
              </div>
            ))}
            <Link href="/#contact" className="btn-primary text-sm">
              Cotizar Ahora
            </Link>
          </div>

          <button
            className="lg:hidden text-primary-cyan p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden -mx-4 md:-mx-8 mt-3 bg-dark-bg/98 backdrop-blur-xl border-t border-primary-cyan/20 shadow-2xl"
            >
              <div className="px-4 md:px-8 py-4 divide-y divide-primary-cyan/10">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3.5 text-base font-medium transition-colors duration-200 ${
                      isActive(item) ? 'text-primary-cyan' : 'text-gray-200 hover:text-primary-cyan'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    Cotizar Ahora
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

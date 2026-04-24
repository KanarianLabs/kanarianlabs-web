'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 23, minutes: 48, seconds: 25 })

  const handleClose = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('promoBannerClosed', 'true')
      window.dispatchEvent(new Event('promoBannerClosed'))
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isClosed = localStorage.getItem('promoBannerClosed')
      if (isClosed === 'true') setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="region"
          aria-label="Oferta de lanzamiento"
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary-cyan via-primary-yellow to-primary-cyan bg-[length:200%_100%] animate-[gradient_4s_ease_infinite]"
        >
          <div className="max-w-7xl mx-auto pl-3 pr-2 sm:px-4 py-2 sm:py-2.5">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Mobile: compact. Desktop: expanded */}
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Sparkles className="text-dark-bg flex-shrink-0 animate-pulse" size={18} aria-hidden="true" />
                <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                  <span className="text-dark-bg font-extrabold text-xs sm:text-sm whitespace-nowrap">
                    50% OFF
                  </span>
                  <span className="hidden sm:inline text-dark-bg/80 text-sm">
                    · Oferta de lanzamiento — precios especiales
                  </span>
                  <span className="sm:hidden text-dark-bg/80 text-xs truncate">
                    · Lanzamiento
                  </span>
                </div>
              </div>

              {/* Compact countdown — mobile-friendly */}
              <div
                className="flex items-center gap-1 font-code text-dark-bg flex-shrink-0"
                aria-label={`Termina en ${timeLeft.days} días, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos`}
              >
                <span className="bg-dark-bg text-primary-yellow font-bold px-1.5 py-0.5 rounded text-[11px] sm:text-xs tabular-nums">
                  {pad(timeLeft.days)}
                  <span className="text-primary-cyan/80 text-[9px] ml-0.5">d</span>
                </span>
                <span className="bg-dark-bg text-primary-yellow font-bold px-1.5 py-0.5 rounded text-[11px] sm:text-xs tabular-nums">
                  {pad(timeLeft.hours)}
                  <span className="text-primary-cyan/80 text-[9px] ml-0.5">h</span>
                </span>
                <span className="bg-dark-bg text-primary-yellow font-bold px-1.5 py-0.5 rounded text-[11px] sm:text-xs tabular-nums">
                  {pad(timeLeft.minutes)}
                  <span className="text-primary-cyan/80 text-[9px] ml-0.5">m</span>
                </span>
                <span className="hidden sm:inline bg-dark-bg text-primary-yellow font-bold px-1.5 py-0.5 rounded text-xs tabular-nums">
                  {pad(timeLeft.seconds)}
                  <span className="text-primary-cyan/80 text-[9px] ml-0.5">s</span>
                </span>
              </div>

              <button
                onClick={handleClose}
                className="text-dark-bg hover:bg-dark-bg/15 p-1 rounded transition-colors flex-shrink-0"
                aria-label="Cerrar banner de oferta"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

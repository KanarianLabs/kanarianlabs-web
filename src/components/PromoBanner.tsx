'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, X, Sparkles } from 'lucide-react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 48,
    seconds: 25
  })

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
      if (isClosed === 'true') {
        setIsVisible(false)
      }
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary-cyan via-primary-yellow to-primary-cyan bg-[length:200%_100%] animate-gradient"
          style={{
            animation: 'gradient 3s ease infinite'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Texto principal */}
              <div className="flex items-center gap-3 flex-1">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="text-dark-bg" size={24} />
                </motion.div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-dark-bg font-bold text-sm sm:text-base">
                    50% OFF - Oferta por Lanzamiento
                  </span>
                  <span className="text-dark-bg/80 text-xs sm:text-sm">
                    Aprovecha precios especiales en tu landing page
                  </span>
                </div>
              </div>

              {/* Contador */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="text-dark-bg hidden sm:block" size={20} />
                <div className="flex gap-1 sm:gap-2">
                  {[
                    { value: timeLeft.days, label: 'd' },
                    { value: timeLeft.hours, label: 'h' },
                    { value: timeLeft.minutes, label: 'm' },
                    { value: timeLeft.seconds, label: 's' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-baseline gap-0.5">
                      <div className="bg-dark-bg/90 text-primary-yellow font-bold rounded px-1.5 py-1 text-xs sm:text-sm min-w-[28px] sm:min-w-[32px] text-center">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <span className="text-dark-bg text-[10px] sm:text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={handleClose}
                className="text-dark-bg hover:bg-dark-bg/10 p-1 rounded transition-colors ml-2"
                aria-label="Cerrar banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

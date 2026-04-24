'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/51976999009?text=Hola%20Miguel,%20tengo%20una%20consulta%20r%C3%A1pida%20sobre%20mi%20proyecto'

export default function WhatsAppBubble() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const alreadyDismissed = localStorage.getItem('waTooltipDismissed') === 'true'
    if (alreadyDismissed) return

    const t = setTimeout(() => setShowTooltip(true), 6000)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    setShowTooltip(false)
    setDismissed(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem('waTooltipDismissed', 'true')
    }
  }

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-2"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            role="dialog"
            aria-label="Mensaje de WhatsApp"
            className="relative max-w-[240px] bg-dark-secondary/95 backdrop-blur-md border border-primary-cyan/30 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,191,231,0.4)] px-4 py-3 mb-1"
          >
            <button
              onClick={dismiss}
              aria-label="Cerrar mensaje"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-bg border border-primary-cyan/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-cyan transition-colors"
            >
              <X size={12} />
            </button>
            <p className="text-sm font-semibold text-white leading-snug">
              ¿Dudas sobre tu proyecto?
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Respondo en minutos por WhatsApp.
            </p>
            <span
              className="absolute -bottom-1.5 right-5 w-3 h-3 bg-dark-secondary border-r border-b border-primary-cyan/30 rotate-45"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Conversar por WhatsApp"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-4px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        {/* Pulse rings */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          style={{ animationDuration: '2.2s' }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
        {/* WhatsApp icon — real brand glyph */}
        <svg
          className="relative z-10"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  )
}

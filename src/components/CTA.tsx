'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, MessageCircle, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0">
        <div className="blur-circle w-96 h-96 bg-primary-cyan top-0 left-0"></div>
        <div className="blur-circle w-96 h-96 bg-primary-yellow bottom-0 right-0"></div>
      </div>

      <div className="section-padding mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-block"
          >
            <img
              src="/KanarianLabsLogoSinFondo.png"
              alt="KanarianLabs"
              className="w-32 h-auto animate-float"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Listo para llevar tu negocio al{' '}
            <span className="gradient-text">siguiente nivel</span>?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contáctame hoy y recibe <span className="text-primary-yellow font-bold">50% de descuento</span> por ser uno de mis primeros clientes
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="https://wa.me/51999999999?text=Hola%20Miguel,%20quiero%20una%20landing%20page%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
            <a
              href="mailto:miguel@kanarianlabs.com"
              className="btn-secondary text-lg flex items-center gap-2 justify-center"
            >
              <Mail size={20} />
              Enviar Email
            </a>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-6 inline-block"
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Clock className="text-primary-yellow" size={24} />
              <span className="text-lg font-semibold">Oferta válida por tiempo limitado</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'Días' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Seg' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-primary text-dark-bg text-2xl font-bold rounded-lg p-3 mb-1">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
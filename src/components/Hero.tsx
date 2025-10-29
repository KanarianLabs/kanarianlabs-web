'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Check, Sparkles, Monitor, Code2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 code-pattern opacity-5"></div>

      {/* Blur Circles */}
      <motion.div
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="blur-circle w-96 h-96 bg-primary-cyan top-0 left-0"
      />
      <motion.div
        animate={{
          x: -mousePosition.x + 50,
          y: -mousePosition.y + 50,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="blur-circle w-96 h-96 bg-primary-yellow bottom-0 right-0"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-1 h-1 bg-primary-cyan rounded-full opacity-50"
          />
        ))}
      </div>

      {/* Content */}
      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Monitor className="text-primary-cyan" size={72} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="block">Transformamos Ideas en</span>
            <span className="gradient-text">Presencia Digital Profesional</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Landing pages que convierten visitas en clientes.
            Diseño web profesional para emprendimientos peruanos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="btn-primary text-lg">
              Ver Servicios
            </button>
            <button className="btn-secondary text-lg">
              Hablar con Miguel
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <Check className="text-primary-cyan" size={20} />
              <span>Desde S/250</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <Check className="text-primary-cyan" size={20} />
              <span>Entrega 15 días</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
              <Sparkles className="text-primary-yellow" size={20} />
              <span className="font-bold text-primary-yellow">50% OFF</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-primary-cyan" size={32} />
        </motion.div>
      </div>

      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-20 right-10 select-none opacity-10"
      >
        <img
          src="/KanarianLabsLogoSinFondo.png"
          alt="KanarianLabs"
          className="w-64 h-auto animate-float"
        />
      </motion.div>
    </section>
  )
}
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Check, Sparkles, Monitor, Zap, TrendingUp, Award, ShoppingBag, Globe, Palette, ArrowRight, Users } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Memorize particles configuration to prevent re-rendering
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 1920,
      initialY: Math.random() * 1080,
      animateX: Math.random() * 1920,
      animateY: Math.random() * 1080,
      duration: Math.random() * 20 + 10,
    }))
  }, [])

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
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
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-1 h-1 bg-primary-cyan rounded-full opacity-50"
          />
        ))}
      </div>

      {/* Content - Two Column Layout */}
      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column - Content (F-Pattern) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight pb-2">
              <span className="block text-gray-100">Transformamos Ideas en</span>
              <span className="block bg-gradient-to-r from-primary-cyan via-primary-yellow to-green-400 bg-clip-text text-transparent">
                Realidad Digital
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              Landing pages que convierten visitas en clientes. Diseño web profesional para emprendimientos.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-dark-800 bg-gradient-to-br from-primary-cyan to-primary-yellow flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-gray-300 flex items-center gap-1">
                  <Users size={16} className="text-primary-cyan" />
                  <span className="font-bold text-white">+50 Proyectos Entregados</span>
                </p>
                <p className="text-gray-400 text-xs">Clientes satisfechos</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg group inline-flex items-center justify-center"
              >
                Explorar Servicios
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block ml-2"
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>
              <motion.a
                href="https://wa.me/51976999009?text=Hola%20Miguel,%20estoy%20interesado%20en%20una%20landing%20page%20profesional"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg inline-flex items-center justify-center"
              >
                Hablar con Miguel
              </motion.a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Check className="text-primary-cyan" size={18} />
                <span>Desde S/250</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Check className="text-primary-cyan" size={18} />
                <span>Entrega 15 días</span>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-primary-yellow/30"
              >
                <Sparkles className="text-primary-yellow" size={18} />
                <span className="font-bold bg-gradient-to-r from-primary-yellow to-orange-400 bg-clip-text text-transparent">
                  50% OFF - Oferta Limitada
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Browser Mockup */}
            <div className="glass-effect rounded-xl overflow-hidden border border-primary-cyan/20 relative">
              {/* Browser Header */}
              <div className="bg-dark-900/80 border-b border-primary-cyan/10 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 bg-dark-800/50 rounded px-3 py-1 text-xs text-gray-400 flex items-center gap-2">
                  <Globe size={12} className="text-primary-cyan" />
                  <span>kanarianlabs.com/projects</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">

                {/* Projects Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: ShoppingBag, title: 'E-commerce', color: 'from-primary-cyan to-blue-500' },
                    { icon: Globe, title: 'Landing Page', color: 'from-primary-yellow to-orange-400' },
                    { icon: Palette, title: 'Portfolio', color: 'from-green-400 to-emerald-500' },
                    { icon: Monitor, title: 'Corporate', color: 'from-purple-400 to-pink-500' },
                  ].map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect p-4 rounded-lg border border-primary-cyan/10 cursor-pointer group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                        <project.icon size={20} className="text-white" />
                      </div>
                      <p className="text-xs font-medium text-gray-300">{project.title}</p>
                      <p className="text-[10px] text-gray-500">Completado</p>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="glass-effect p-4 rounded-lg border border-primary-cyan/10 space-y-3"
                >
                  <p className="text-xs font-bold text-gray-300 flex items-center gap-2">
                    <TrendingUp size={14} className="text-primary-cyan" />
                    Métricas de Rendimiento
                  </p>

                  {[
                    { label: 'Rendimiento', value: 98, color: 'bg-green-500' },
                    { label: 'SEO', value: 95, color: 'bg-primary-cyan' },
                    { label: 'Velocidad', value: 92, color: 'bg-primary-yellow' },
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                        <span>{metric.label}</span>
                        <span className="font-bold text-white">{metric.value}%</span>
                      </div>
                      <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ delay: 1 + idx * 0.2, duration: 1, ease: "easeOut" }}
                          className={`h-full ${metric.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 1.2,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="absolute -top-4 -right-4 glass-effect px-4 py-3 rounded-xl border border-green-400/30 shadow-lg"
            >
              <div className="flex items-center gap-2">
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
                  <Award className="text-green-400" size={24} />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-green-400">Proyecto</p>
                  <p className="text-xs text-gray-300">Completado</p>
                </div>
              </div>
            </motion.div>

            {/* Speed Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-4 -left-4 glass-effect px-4 py-3 rounded-xl border border-primary-cyan/30"
            >
              <div className="flex items-center gap-2">
                <Zap className="text-primary-cyan" size={20} />
                <div>
                  <p className="text-xs font-bold text-primary-cyan">Velocidad A+</p>
                  <p className="text-[10px] text-gray-400">Optimizado</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-primary-cyan" size={32} />
        </motion.div>
      </div>
    </section>
  )
}

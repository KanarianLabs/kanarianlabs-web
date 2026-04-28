'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Check, Sparkles, Zap, ArrowRight, Users, Workflow, Globe2, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      <div className="absolute inset-0 code-pattern opacity-[0.04]" aria-hidden="true"></div>

      <div className="blur-circle w-[28rem] h-[28rem] bg-primary-cyan -top-20 -left-20" aria-hidden="true" />
      <div className="blur-circle w-[28rem] h-[28rem] bg-primary-yellow -bottom-20 -right-20" aria-hidden="true" />

      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-effect px-4 py-1.5 rounded-full mb-6 text-xs md:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
              </span>
              <span className="text-gray-300">Aceptando proyectos · Respuesta en 24h</span>
            </motion.div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight text-balance"
            >
              <span className="block text-white">Sitios web que venden.</span>
              <span className="block bg-gradient-to-r from-primary-cyan via-teal-300 to-primary-yellow bg-clip-text text-transparent">
                Automatizaciones que trabajan por ti.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-xl text-balance"
            >
              Landings, e-commerce y aplicaciones web a medida.{' '}
              <span className="text-primary-cyan font-semibold">Diseño exclusivo</span>{' '}
              que carga rápido y vende. Entregamos en 15 días o menos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
            >
              <a
                href="#contact"
                className="btn-primary text-base md:text-lg inline-flex items-center justify-center group"
                aria-label="Ir al formulario de cotización"
              >
                Cotizar mi proyecto
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/51976999009?text=Hola%20Miguel,%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base md:text-lg inline-flex items-center justify-center"
                aria-label="Hablar por WhatsApp con Miguel"
              >
                Hablar por WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex -space-x-3" aria-hidden="true">
                {['M', 'J', 'A', 'K'].map((letter) => (
                  <div
                    key={letter}
                    className="w-9 h-9 rounded-full border-2 border-dark-bg bg-gradient-to-br from-primary-cyan to-primary-yellow flex items-center justify-center text-xs font-bold text-dark-bg"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-gray-300 flex items-center gap-1">
                  <Users size={16} className="text-primary-cyan" aria-hidden="true" />
                  <span className="font-bold text-white">+50 proyectos entregados</span>
                </p>
                <p className="text-gray-500 text-xs">Perú · LatAm · España</p>
                <p className="text-primary-yellow text-xs mt-1 font-semibold flex items-center gap-1">
                  <Zap size={12} aria-hidden="true" />
                  Web rápida · Sin mantenimiento mensual
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm"
            >
              <span className="flex items-center gap-1.5 glass-effect px-3 py-1.5 rounded-full">
                <Check className="text-primary-cyan" size={14} aria-hidden="true" />
                Desde S/350
              </span>
              <span className="flex items-center gap-1.5 glass-effect px-3 py-1.5 rounded-full">
                <Check className="text-primary-cyan" size={14} aria-hidden="true" />
                Entrega en 15 días
              </span>
              <span className="flex items-center gap-1.5 glass-effect px-3 py-1.5 rounded-full border border-primary-yellow/40">
                <Sparkles className="text-primary-yellow" size={14} aria-hidden="true" />
                <span className="font-semibold text-primary-yellow">50% OFF lanzamiento</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mt-4 lg:mt-0"
            aria-hidden="true"
          >
            <div className="glass-effect rounded-2xl overflow-hidden border border-primary-cyan/20 shadow-[0_20px_60px_-20px_rgba(0,191,231,0.25)]">
              <div className="bg-dark-bg/60 border-b border-primary-cyan/10 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex-1 bg-dark-secondary/60 rounded px-3 py-1 text-[10px] md:text-xs text-gray-400 flex items-center gap-2 font-code">
                  <Workflow size={12} className="text-primary-cyan" />
                  <span>n8n · workflow/lead-capture</span>
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3 font-code text-xs md:text-sm">
                {[
                  { icon: Globe2, label: 'Form · kanarianlabs.com/contact', status: 'trigger', color: 'text-primary-cyan' },
                  { icon: Cpu, label: 'IA · Califica lead (GPT-4)', status: 'running', color: 'text-primary-yellow' },
                  { icon: Workflow, label: 'CRM · Crea contacto + tag', status: 'success', color: 'text-status-success' },
                  { icon: Zap, label: 'WhatsApp · Notifica a Miguel', status: 'success', color: 'text-status-success' },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.12 }}
                    className="flex items-center gap-3 glass-effect rounded-lg p-3 border border-primary-cyan/10"
                  >
                    <step.icon size={18} className={step.color} />
                    <span className="text-gray-200 flex-1 truncate">{step.label}</span>
                    <span className={`text-[10px] uppercase tracking-wider ${step.color}`}>
                      {step.status}
                    </span>
                  </motion.div>
                ))}

                <div className="pt-2 flex items-center justify-between text-[10px] text-gray-500 border-t border-primary-cyan/10">
                  <span>Ejecutado en 1.2s · sin errores</span>
                  <span className="flex items-center gap-1 text-status-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse"></span>
                    live
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -top-3 -right-3 glass-effect px-3 py-2 rounded-xl border border-primary-yellow/40 hidden sm:flex items-center gap-2"
            >
              <Sparkles className="text-primary-yellow" size={18} />
              <div>
                <p className="text-[10px] font-bold text-primary-yellow leading-none">AUTOMATIZADO</p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">24/7 sin pausa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-cyan/70 hover:text-primary-cyan transition-colors"
          aria-label="Ver servicios"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}

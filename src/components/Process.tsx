'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, FileText, Code, Rocket, ClipboardList } from 'lucide-react'

export default function Process() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const steps = [
    {
      number: "01",
      icon: <MessageCircle size={32} />,
      title: "Contacto Gratis",
      description: "Conversamos sobre tu proyecto y defines qué necesitas. Sin compromiso.",
      timeline: "Día 0"
    },
    {
      number: "02",
      icon: <FileText size={32} />,
      title: "Cotización",
      description: "Recibes propuesta detallada con precio y plazos claros. Adelanto 20%.",
      timeline: "24-48h"
    },
    {
      number: "03",
      icon: <Code size={32} />,
      title: "Desarrollo",
      description: "Subes tu contenido a Drive. Diseño y programación con revisiones incluidas.",
      timeline: "7-10 días"
    },
    {
      number: "04",
      icon: <Rocket size={32} />,
      title: "Entrega Final",
      description: "Revisión final, pago restante (80%). ¡Tu web está online!",
      timeline: "Día 15"
    }
  ]

  return (
    <section className="py-20 relative bg-dark-secondary/30">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ClipboardList className="text-primary-cyan mb-4 inline-block" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proceso Simple en <span className="gradient-text">4 Pasos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            De la idea a la realidad en solo 15 días
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan to-primary-yellow opacity-20 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 text-center hover-glow group h-full min-h-[280px] flex flex-col">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-dark-bg w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4 text-primary-cyan group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 flex-grow">
                    {step.description}
                  </p>

                  {/* Timeline */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-cyan/10 rounded-full">
                      <div className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-primary-cyan">
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-cyan opacity-50">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
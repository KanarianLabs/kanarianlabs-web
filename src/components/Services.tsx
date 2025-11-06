'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Rocket, Bot, Check, Lock, Zap } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <Globe size={48} />,
      title: "Sitios Web & Ecommerce",
      description: "Páginas web, WordPress y tiendas online para tu negocio",
      features: [
        "Landing pages personalizadas",
        "Sitios WordPress profesionales",
        "Tiendas online (ecommerce)",
        "Responsivo en todos los dispositivos",
        "Formularios y optimización SEO"
      ],
      price: "Desde S/250",
      buttonText: "Ver más",
      available: true,
    },
    {
      icon: <Rocket size={48} />,
      title: "Hosting & Soporte Mensual",
      description: "Tu sitio siempre online y actualizado",
      features: [
        "Hosting rápido y seguro",
        "Cambios ilimitados",
        "SSL incluido",
        "Soporte 24/7"
      ],
      price: "S/20/mes",
      buttonText: "Conocer planes",
      available: true,
    },
    {
      icon: <Bot size={48} />,
      title: "Automatizaciones Web",
      description: "Optimiza procesos con n8n",
      features: [
        "Automatización de tareas",
        "Integración con APIs",
        "Flujos personalizados",
        "Mayor productividad"
      ],
      price: "Próximamente",
      buttonText: "Avisarme",
      available: false,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Rocket className="text-primary-cyan mb-4 inline-block" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios que <span className="gradient-text">Ofrecemos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-primary-cyan/20 hover:border-primary-cyan/50 transition-all duration-300 flex flex-col">
                {!service.available && (
                  <div className="absolute -top-3 -right-3 bg-gradient-primary text-dark-bg px-4 py-1 rounded-full text-sm font-bold">
                    Próximamente
                  </div>
                )}

                <div className="mb-6 text-primary-cyan group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-primary-cyan mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-primary-yellow">
                    {service.price}
                  </span>
                  {service.available ? (
                    <a
                      href="#pricing"
                      className="btn-secondary text-sm"
                    >
                      <span>{service.buttonText}</span>
                    </a>
                  ) : (
                    <button
                      className="btn-secondary text-sm opacity-50 cursor-not-allowed"
                      disabled={true}
                    >
                      <span className="flex items-center gap-2">
                        <Lock size={16} />
                        {service.buttonText}
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}
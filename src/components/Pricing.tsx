'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Zap, DollarSign } from 'lucide-react'

export default function Pricing() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const plans = [
    {
      name: "BÁSICO",
      originalPrice: "S/500",
      price: "S/250",
      description: "Ideal para empezar tu presencia online",
      subtitle: "Landing Page de 1 página",
      features: [
        "3-4 bloques de contenido",
        "Diseño responsive",
        "2 revisiones incluidas",
        "Entrega en 10 días",
        "Formulario de contacto",
        "Optimización SEO básica"
      ],
      popular: false
    },
    {
      name: "ESTÁNDAR",
      originalPrice: "S/800",
      price: "S/400",
      description: "La opción más elegida por nuestros clientes",
      subtitle: "Sitio web multi-página",
      features: [
        "5-6 páginas principales",
        "Diseño responsive",
        "2 revisiones incluidas",
        "Entrega en 15 días",
        "Formulario avanzado",
        "Optimización SEO completa",
        "Integración WhatsApp",
        "Blog integrado",
        "Código fuente incluido"
      ],
      popular: true
    },
    {
      name: "PREMIUM",
      originalPrice: "S/1200+",
      price: "S/600+",
      description: "Para proyectos más complejos y personalizados",
      subtitle: "Sitio completo con sub-páginas",
      features: [
        "Múltiples páginas + sub-páginas",
        "Diseño 100% personalizado",
        "3 revisiones incluidas",
        "Entrega según estimación",
        "Múltiples formularios",
        "SEO avanzado",
        "Blog integrado",
        "Google Analytics",
        "Multi-idioma",
        "Código fuente incluido"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 relative">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <DollarSign className="text-primary-cyan mb-4 inline-block" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planes y <span className="gradient-text">Precios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Transparencia total. Sin costos ocultos.
          </p>

          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-primary text-dark-bg px-6 py-3 rounded-full font-bold"
          >
            <Zap size={20} />
            <span>50% OFF primeros clientes</span>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-dark-bg px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={16} />
                    Más Popular
                  </div>
                </div>
              )}

              <div className={`glass-effect rounded-2xl p-8 h-full flex flex-col ${
                plan.popular ? 'border-2 border-primary-cyan' : 'border border-primary-cyan/20'
              } hover:border-primary-cyan transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-2">
                  {plan.name}
                </h3>

                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-primary-cyan font-semibold mb-3">
                  {plan.subtitle}
                </p>

                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-primary-cyan mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={plan.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}>
                  Cotizar Ahora
                </a>
              </div>

              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 blur-2xl -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note about pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            * Precios aplicables para landing pages y sitios web informativos
          </p>
        </motion.div>

        {/* CTA for complex projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 glass-effect rounded-2xl p-8 text-center border border-primary-yellow/30"
        >
          <h3 className="text-2xl font-bold mb-3 gradient-text">
            ¿Necesitas algo más complejo?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Tiendas online (WooCommerce), aplicaciones web personalizadas, sistemas a medida y más.
            <br />
            <span className="text-primary-yellow font-semibold">Cotiza tu proyecto sin compromiso</span>
          </p>
          <a
            href="#contact"
            className="btn-primary inline-block text-center"
          >
            Cotizar Proyecto Personalizado
          </a>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 glass-effect rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Servicios Adicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Hosting Premium</span>
              <span className="font-bold text-primary-yellow">Desde S/20/mes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Soporte Mensual</span>
              <span className="font-bold text-primary-yellow">Desde S/20/mes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Cambios adicionales</span>
              <span className="font-bold text-primary-yellow">S/20 c/u</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Código fuente (proyectos complejos)*</span>
              <span className="font-bold text-primary-yellow">Variable</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-4">
            * Para ecommerce, aplicaciones web y sistemas personalizados. Landing pages incluyen código fuente en planes Estándar y Premium.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
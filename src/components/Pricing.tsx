'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Zap, Server, LifeBuoy, Crown, ShoppingBag } from 'lucide-react'

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const plans = [
    {
      name: 'BÁSICO',
      originalPrice: 'S/750',
      price: 'S/350',
      description: 'Para emprender con pie derecho en internet.',
      subtitle: 'Landing Page de 1 página',
      features: [
        '3–4 bloques de contenido',
        'Diseño responsive y moderno',
        '2 revisiones incluidas',
        'Entrega en 10 días',
        'Formulario de contacto',
        'SEO básico on-page',
      ],
      popular: false,
      isEcommerce: false,
    },
    {
      name: 'ESTÁNDAR',
      originalPrice: 'S/1,200',
      price: 'S/500',
      description: 'La opción que eligen 7 de cada 10 clientes.',
      subtitle: 'Sitio web multi-página',
      features: [
        '5–6 páginas principales',
        'Diseño responsive',
        '2 rondas de revisión',
        'Entrega en 15 días',
        'Formulario avanzado',
        'SEO completo + schema',
        'Integración WhatsApp',
        'Blog integrado',
        'Código fuente incluido',
      ],
      popular: true,
      isEcommerce: false,
    },
    {
      name: 'E-COMMERCE',
      originalPrice: 'S/2,500',
      price: 'Desde S/900',
      description: 'Para marcas que venden online en serio.',
      subtitle: 'Tienda online a medida',
      features: [
        'Catálogo de productos ilimitado',
        'Pasarela de pago (Mercado Pago, Culqi, Niubiz)',
        'Carrito + checkout optimizado',
        'Panel admin para gestionar inventario',
        'Integración WhatsApp Business',
        'SEO técnico + Google Shopping',
        'Multi-idioma (ES/EN)',
        'Diseño 100% a medida y exclusivo',
        'Hosting + dominio primer mes',
        'Código fuente entregado',
      ],
      popular: false,
      isEcommerce: true,
    },
  ]

  const hostingPlans = [
    {
      icon: Server,
      name: 'Hosting Kanarian',
      price: 'S/25',
      suffix: '/mes',
      description: 'Tu web online, rápida y segura.',
      features: [
        'Hosting SSD rápido',
        'Certificado SSL incluido',
        'Backups semanales',
        '99.9% uptime garantizado',
      ],
      note: 'Dominio aparte · Solo alojamiento',
    },
    {
      icon: LifeBuoy,
      name: 'Soporte Light',
      price: '+S/35',
      suffix: '/mes',
      description: 'Cambios pequeños sin dolor.',
      features: [
        'Todo lo del Hosting',
        '30 min de cambios al mes',
        'Respuesta en 48h',
        'Backups diarios',
      ],
      note: 'Ideal para landings activas',
      recommended: true,
    },
    {
      icon: Crown,
      name: 'Soporte Pro',
      price: '+S/99',
      suffix: '/mes',
      description: 'Tu sitio como un activo comercial.',
      features: [
        'Todo lo del Soporte Light',
        '2 horas de cambios al mes',
        'Respuesta prioritaria WhatsApp',
        'Revisión SEO trimestral',
        'Reporte de métricas mensual',
      ],
      note: 'Para negocios que venden por la web',
    },
  ]

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 md:py-28 relative">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-primary-cyan uppercase mb-3">
              Planes claros · Sin sorpresas
            </span>
            <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Precios honestos. <span className="gradient-text">Resultados reales.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              Lo que ves es lo que pagas. El dominio se cotiza aparte (~S/40/año según extensión).
            </p>

            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-dark-bg px-5 py-2.5 rounded-full font-bold text-sm"
            >
              <Zap size={16} />
              <span>50% OFF primeros clientes · Oferta activa</span>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-primary text-dark-bg px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star size={14} fill="currentColor" />
                      MÁS POPULAR
                    </div>
                  </div>
                )}

                {plan.isEcommerce && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-primary-yellow text-dark-bg px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <ShoppingBag size={14} />
                      NUEVO · E-COMMERCE
                    </div>
                  </div>
                )}

                <div
                  className={`glass-effect rounded-2xl p-6 md:p-7 h-full flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? 'border-2 border-primary-cyan shadow-[0_20px_60px_-20px_rgba(0,191,231,0.4)]'
                      : plan.isEcommerce
                        ? 'border-2 border-primary-yellow/70 shadow-[0_20px_60px_-20px_rgba(255,200,0,0.3)]'
                        : 'border border-primary-cyan/20 hover:border-primary-cyan/50'
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">{plan.name}</h3>
                  <p className="text-sm text-primary-cyan font-semibold mb-4">{plan.subtitle}</p>

                  <div className="mb-2 flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl md:text-4xl font-extrabold gradient-text">{plan.price}</span>
                    <span className="text-base text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-2.5 mb-7 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="text-primary-cyan mt-0.5 flex-shrink-0" size={16} aria-hidden="true" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full text-center ${plan.popular || plan.isEcommerce ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.isEcommerce ? 'Cotizar mi tienda' : 'Cotizar Ahora'}
                  </a>
                </div>

                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10 blur-2xl -z-10" aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>

          {/* CTA for complex projects (PREMIUM, dashboards, n8n) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 glass-effect rounded-2xl p-8 md:p-10 text-center border border-primary-yellow/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              ¿Web Premium, dashboard interno o{' '}
              <span className="gradient-text">automatización con n8n</span>?
            </h3>
            <p className="text-gray-300 mb-2 max-w-2xl mx-auto">
              Web completa con sub-páginas, multi-idioma, aplicaciones a medida o flujos n8n.
            </p>
            <p className="text-gray-400 mb-6 text-sm max-w-2xl mx-auto">
              <span className="text-primary-yellow font-semibold">Desde S/750+</span> · Cotizamos según alcance. Sin plantillas, sin sorpresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Cotizar proyecto a medida
              </a>
              <a href="/automatizacion" className="btn-secondary inline-flex items-center justify-center">
                Ver automatizaciones n8n
              </a>
            </div>
          </motion.div>

          {/* Hosting & Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-primary-cyan uppercase mb-3">
                Planes mensuales
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
                Hosting + soporte: <span className="gradient-text">olvídate del mantenimiento.</span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                Hosting puro o con horas de cambios incluidas. Elige según cuánto necesites mover tu web.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {hostingPlans.map((plan) => {
                const Icon = plan.icon
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl p-6 md:p-7 border transition-all duration-300 flex flex-col h-full ${
                      plan.recommended
                        ? 'bg-gradient-to-br from-primary-cyan/10 via-dark-secondary/60 to-dark-secondary/40 border-primary-cyan/50 hover:border-primary-cyan/80'
                        : 'glass-effect border-primary-cyan/15 hover:border-primary-cyan/40'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="absolute -top-2.5 left-5 bg-gradient-primary text-dark-bg px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                        RECOMENDADO
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-cyan/10 flex items-center justify-center text-primary-cyan">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    </div>

                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-extrabold gradient-text">{plan.price}</span>
                      <span className="text-gray-400">{plan.suffix}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-5">{plan.description}</p>

                    <ul className="space-y-2 mb-5 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="text-primary-cyan mt-0.5 flex-shrink-0" size={14} aria-hidden="true" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-500 italic">{plan.note}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span>
                Cambios extra:{' '}
                <strong className="text-primary-yellow">S/25 c/u</strong>
              </span>
              <span>·</span>
              <span>
                Dominio .com / .pe:{' '}
                <strong className="text-primary-yellow">S/40–50/año</strong>{' '}
                (no incluido)
              </span>
              <span>·</span>
              <span>
                Migración desde otro hosting:{' '}
                <strong className="text-primary-yellow">gratis</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

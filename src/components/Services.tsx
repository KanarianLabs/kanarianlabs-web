'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Rocket, Bot, Check, Code2 } from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const services = [
    {
      icon: Globe,
      title: 'Sitios Web & Ecommerce',
      description: 'Landing pages, sitios corporativos y tiendas online que convierten.',
      features: [
        'Diseño exclusivo (sin plantillas)',
        'Carga en menos de 2 segundos',
        'Tiendas online con pasarelas de pago',
        'SEO técnico desde el primer día',
        'Hosting opcional incluido',
      ],
      price: 'Desde S/350',
      href: '#pricing',
      cta: 'Ver planes',
      highlight: false,
    },
    {
      icon: Bot,
      title: 'Automatizaciones con n8n',
      description: 'Conectamos tus herramientas y automatizamos lo repetitivo.',
      features: [
        'Captura de leads → CRM → WhatsApp',
        'Integración con Sheets, Gmail, Notion',
        'Flujos con IA (GPT-4, Claude)',
        'Notificaciones y reportes automáticos',
        'Self-hosted o en la nube',
      ],
      price: 'Cotización',
      href: '/automatizacion',
      cta: 'Ver ejemplos',
      highlight: true,
    },
    {
      icon: Code2,
      title: 'Aplicaciones Web a Medida',
      description: 'Dashboards, portales y apps internas que escalan tu operación.',
      features: [
        'Diseño UX profesional',
        'Login, usuarios y roles',
        'Base de datos a medida',
        'Integración con APIs externas',
        'Deploy y mantenimiento',
      ],
      price: 'Desde S/750',
      href: '#contact',
      cta: 'Conversemos',
      highlight: false,
    },
    {
      icon: Rocket,
      title: 'Hosting y Soporte',
      description: 'Tu sitio siempre online y al día, sin dolores de cabeza.',
      features: [
        'Hosting rápido con SSL',
        'Cambios ilimitados de contenido',
        'Backups automáticos',
        'Soporte por WhatsApp',
      ],
      price: 'S/20/mes',
      href: '#contact',
      cta: 'Contratar',
      highlight: false,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 md:py-28 relative">
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-primary-cyan uppercase mb-3">
              Qué hacemos
            </span>
            <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Dos caminos. <span className="gradient-text">Un solo resultado:</span> que tu negocio venda más.
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto text-balance">
              Diseñamos tu presencia digital y automatizamos lo que no debería costarte tiempo.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={service.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className={`relative group rounded-2xl p-6 md:p-7 h-full border transition-all duration-300 flex flex-col ${
                    service.highlight
                      ? 'bg-gradient-to-br from-primary-cyan/10 via-dark-secondary/60 to-dark-secondary/40 border-primary-cyan/40 hover:border-primary-cyan/70'
                      : 'glass-effect border-primary-cyan/15 hover:border-primary-cyan/40'
                  }`}
                >
                  {service.highlight && (
                    <span className="absolute -top-2.5 left-6 bg-gradient-primary text-dark-bg px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase">
                      Nuevo
                    </span>
                  )}

                  <div className="mb-5 text-primary-cyan">
                    <Icon size={36} strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-5">{service.description}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="text-primary-cyan mt-0.5 flex-shrink-0" size={15} aria-hidden="true" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-cyan/10">
                    <span className="text-lg font-bold text-primary-yellow">{service.price}</span>
                    <a
                      href={service.href}
                      className="text-sm font-semibold text-primary-cyan hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {service.cta} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, FileSpreadsheet, Mail, ShoppingCart, Brain, Database, Zap, ArrowRight } from 'lucide-react'

// TODO (Miguel): reemplaza estos ejemplos con casos reales que ya hayas hecho.
// Los actuales sirven como defaults que se leen "profesionales" incluso sin casos propios.
const useCases = [
  {
    icon: MessageSquare,
    title: 'Leads → WhatsApp en 30s',
    description: 'El formulario de tu web dispara un flujo que califica al lead con IA y te avisa por WhatsApp con el resumen.',
    tags: ['Forms', 'OpenAI', 'WhatsApp Business'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Reportes automáticos en Sheets',
    description: 'Cada lunes, n8n recopila ventas, métricas y tickets de soporte y arma tu dashboard semanal.',
    tags: ['Google Sheets', 'Stripe', 'Cron'],
  },
  {
    icon: Mail,
    title: 'Respuesta de emails con IA',
    description: 'Gmail + GPT-4 clasifica mensajes, redacta borradores y deriva al humano sólo cuando hace falta.',
    tags: ['Gmail', 'GPT-4', 'Notion'],
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce sin trabajo manual',
    description: 'Nueva orden en Shopify → factura electrónica → WhatsApp al cliente → actualización de inventario.',
    tags: ['Shopify', 'SUNAT', 'WhatsApp'],
  },
  {
    icon: Brain,
    title: 'Asistente IA con tus datos',
    description: 'Bot que contesta por WhatsApp usando tus PDFs, precios y catálogo — con memoria y hand-off a humano.',
    tags: ['RAG', 'Pinecone', 'Claude'],
  },
  {
    icon: Database,
    title: 'Sincronización entre sistemas',
    description: 'Mantén HubSpot, tu CRM y tu base de datos en sincronía sin CSVs ni copy-paste.',
    tags: ['HubSpot', 'Postgres', 'APIs'],
  },
]

export default function Automations() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="automations"
      aria-labelledby="automations-heading"
      className="py-20 md:py-28 relative bg-dark-secondary/30"
    >
      <div className="section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-end mb-14"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest text-primary-cyan uppercase mb-3">
                <Zap size={14} /> Automatización con n8n
              </span>
              <h2
                id="automations-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight"
              >
                Tu negocio no necesita más gente.{' '}
                <span className="gradient-text">Necesita mejores flujos.</span>
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-400 text-balance">
              Usamos <span className="text-primary-cyan font-semibold">n8n</span>, la alternativa open-source a Zapier, para conectar tus apps y hacer que trabajen entre sí. Si haces algo repetitivo más de 3 veces por semana, probablemente pueda automatizarse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon
              return (
                <motion.article
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-effect rounded-xl p-6 border border-primary-cyan/15 hover:border-primary-cyan/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary-cyan/20 to-primary-yellow/20 flex items-center justify-center mb-4 text-primary-cyan group-hover:scale-110 transition-transform">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-code px-2 py-0.5 rounded bg-dark-bg/60 text-primary-cyan/80 border border-primary-cyan/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="/automatizacion"
              className="btn-primary inline-flex items-center gap-2 text-base md:text-lg"
            >
              Ver todos los casos y cotizar
              <ArrowRight size={18} />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              ¿No sabes si tu flujo se puede automatizar? Cuéntanoslo y te decimos gratis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

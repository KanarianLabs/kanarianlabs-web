'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const faqs = [
    {
      question: "¿Qué incluye una landing page?",
      answer: "Una landing page incluye diseño personalizado, desarrollo responsive para todos los dispositivos, formularios de contacto, optimización SEO básica, integración con redes sociales, y hosting por el primer mes. Todo el contenido que proporciones será implementado de manera profesional."
    },
    {
      question: "¿Cuánto tiempo tarda el desarrollo?",
      answer: "El tiempo estándar es de 10 a 15 días hábiles desde que recibimos todo tu contenido (textos, imágenes, logos). Para proyectos más complejos puede extenderse a 20 días. Te mantendremos informado del progreso en todo momento."
    },
    {
      question: "¿Necesito tener hosting propio?",
      answer: "No es necesario. Ofrecemos hosting profesional por S/20 mensuales que incluye SSL, backups automáticos y soporte técnico. Si prefieres usar tu propio hosting, configuramos todo sin costo adicional."
    },
    {
      question: "¿Qué pasa después de la entrega?",
      answer: "Tienes 15 días de garantía para corrección de errores técnicos. Después puedes contratar nuestro plan de soporte mensual por S/20 que incluye cambios ilimitados de texto e imágenes. También ofrecemos capacitación básica para que puedas hacer pequeños cambios."
    },
    {
      question: "¿Puedo hacer cambios después?",
      answer: "¡Por supuesto! Durante el desarrollo incluimos 2 rondas de revisiones. Después de la entrega, con el plan de soporte mensual puedes hacer cambios ilimitados de contenido. Para cambios estructurales mayores, te cotizamos por separado."
    },
    {
      question: "¿Trabajas con clientes fuera de Perú?",
      answer: "Sí, trabajo con clientes de toda Latinoamérica y España. Los pagos internacionales se realizan vía PayPal (+5% de comisión). La comunicación es por WhatsApp, email o videollamadas según prefieras."
    },
    {
      question: "¿Qué necesitas de mí para empezar?",
      answer: "Necesito: 1) Todos tus textos definitivos, 2) Imágenes en alta calidad, 3) Logo (si tienes), 4) Colores corporativos (opcional), 5) Referencias de sitios que te gusten. Todo esto lo subes a una carpeta de Google Drive que compartiremos."
    },
    {
      question: "¿Qué métodos de pago aceptas?",
      answer: "En Perú: Transferencia BCP, Yape, Plin. Internacional: PayPal (+5% comisión). El pago es 20% de adelanto para reservar tu espacio y 80% al entregar el proyecto terminado."
    }
  ]

  return (
    <section className="py-20 relative bg-dark-secondary/30">
      <div className="section-padding mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HelpCircle className="text-primary-cyan mb-4 inline-block" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary-cyan/5 transition-colors duration-300"
              >
                <h3 className="font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-primary-cyan"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
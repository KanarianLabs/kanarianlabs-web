'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Mail } from 'lucide-react'
import { useState, useEffect, FormEvent } from 'react'

export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', type: '', message: '' })
        // Reset after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        const data = await response.json()
        setFormStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute inset-0">
        <div className="blur-circle w-96 h-96 bg-primary-cyan top-0 left-0"></div>
        <div className="blur-circle w-96 h-96 bg-primary-yellow bottom-0 right-0"></div>
      </div>

      <div className="section-padding w-full relative z-10">
        <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-block"
          >
            <img
              src="/logo.png"
              alt="KanarianLabs"
              className="w-32 h-auto animate-float"
            />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Listo para llevar tu negocio al{' '}
            <span className="gradient-text">siguiente nivel</span>?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contáctame hoy y recibe <span className="text-primary-yellow font-bold">50% de descuento</span> por ser uno de mis primeros clientes
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="https://wa.me/51976999009?text=Hola%20Miguel,%20quiero%20una%20landing%20page%20profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-effect rounded-2xl p-8 border border-primary-cyan/20">
              <h3 className="text-2xl font-bold mb-2 text-center">O envía tu consulta</h3>
              <p className="text-gray-400 text-center mb-6">Te responderemos en menos de 24 horas</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-primary-cyan/30 rounded-lg focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 transition-all text-white placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-900/30"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-primary-cyan/30 rounded-lg focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 transition-all text-white placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-900/30"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={formStatus === 'loading'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-primary-cyan/30 rounded-lg focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 transition-all text-white placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-900/30"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                      Tipo de cliente *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'loading'}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-primary-cyan/30 rounded-lg focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 transition-all text-white disabled:opacity-50 disabled:bg-gray-900/30 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2322d3ee' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="" className="bg-gray-900 text-white">Selecciona una opción</option>
                      <option value="emprendedor" className="bg-gray-900 text-white">Emprendedor</option>
                      <option value="empresa" className="bg-gray-900 text-white">Empresa</option>
                      <option value="agencia" className="bg-gray-900 text-white">Agencia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={formStatus === 'loading'}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-primary-cyan/30 rounded-lg focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 transition-all text-white placeholder:text-gray-400 resize-none disabled:opacity-50 disabled:bg-gray-900/30"
                    placeholder="Describe brevemente qué necesitas..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                    ✅ ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                    ❌ {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="btn-primary w-full text-lg flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail size={20} />
                  {formStatus === 'loading' ? 'Enviando...' : 'Enviar Consulta'}
                </button>
              </form>
            </div>
          </motion.div>

        </motion.div>
        </div>
      </div>
    </section>
  )
}
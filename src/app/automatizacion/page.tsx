import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Automations from '@/components/Automations'
import CTA from '@/components/CTA'
import WhatsAppBubble from '@/components/WhatsAppBubble'

const URL = 'https://kanarianlabs.com/automatizacion'
const TITLE = 'Automatizaciones con n8n en Perú | KanarianLabs'
const DESCRIPTION = 'Automatizamos tu negocio con n8n: captura de leads, WhatsApp, Sheets, CRMs, IA y APIs. Desde procesos simples hasta flujos con agentes. Lima, Perú.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/automatizacion' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'KanarianLabs',
    locale: 'es_PE',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  keywords: [
    'n8n peru',
    'automatizaciones n8n',
    'automatizar whatsapp',
    'integrar crm',
    'automatizar negocio peru',
    'flujos con IA',
    'alternativa a zapier',
    'automatización gmail sheets',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Automatizaciones con n8n',
  serviceType: 'Automatización de procesos de negocio',
  provider: { '@id': 'https://kanarianlabs.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'Peru' },
    { '@type': 'Country', name: 'Mexico' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Spain' },
  ],
  description: DESCRIPTION,
  url: URL,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'PEN',
    availability: 'https://schema.org/InStock',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://kanarianlabs.com' },
    { '@type': 'ListItem', position: 2, name: 'Automatizaciones', item: URL },
  ],
}

export default function AutomatizacionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content" className="relative pt-24">
        <section className="section-padding py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <nav aria-label="Migas de pan" className="text-xs md:text-sm text-gray-500 mb-6">
              <a href="/" className="hover:text-primary-cyan">Inicio</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-gray-300">Automatizaciones</span>
            </nav>
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-primary-cyan uppercase mb-4">
              n8n · integraciones · IA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
              Deja de hacer lo mismo todos los días.{' '}
              <span className="gradient-text">Automatízalo.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance mb-8">
              Diseñamos flujos con <strong className="text-primary-cyan">n8n</strong> — la plataforma open-source líder — para conectar tus herramientas, eliminar el trabajo manual y hacer que tu negocio trabaje 24/7 sin contratar a nadie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Cotizar automatización
              </a>
              <a
                href="https://wa.me/51976999009?text=Hola%20Miguel,%20quiero%20automatizar%20un%20proceso%20con%20n8n"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contar mi caso por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Automations />
        <CTA />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  )
}

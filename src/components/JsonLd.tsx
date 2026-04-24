const SITE_URL = 'https://kanarianlabs.com'

export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'KanarianLabs',
    alternateName: 'Kanarian Labs',
    description: 'Estudio de desarrollo web y automatizaciones con n8n en Lima, Perú. Sitios web, aplicaciones web y flujos automatizados.',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 1024,
      height: 1024,
    },
    image: `${SITE_URL}/og-image.png`,
    telephone: '+51-976-999-009',
    email: 'miguel@kanarianlabs.com',
    priceRange: 'S/250 - S/1200+',
    founder: {
      '@type': 'Person',
      name: 'Miguel Angel Ybañez Esquerre',
      jobTitle: 'Fundador y Desarrollador Principal',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressRegion: 'Lima',
      addressCountry: 'PE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+51-976-999-009',
        contactType: 'customer service',
        email: 'miguel@kanarianlabs.com',
        availableLanguage: ['Spanish', 'English'],
        areaServed: ['PE', 'MX', 'CO', 'CL', 'AR', 'ES'],
      },
    ],
    sameAs: [
      'https://tiktok.com/@kanarianlabs',
      'https://instagram.com/kanarianlabs',
      'https://youtube.com/@kanarianlabs',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Spain' },
    ],
    knowsAbout: [
      'Desarrollo Web',
      'Landing Pages',
      'Aplicaciones Web',
      'Automatización con n8n',
      'Integración de APIs',
      'SEO',
      'WordPress',
      'Next.js',
      'React',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios KanarianLabs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Profesional',
            description: 'Landing page responsive con diseño personalizado, formulario y SEO básico.',
          },
          price: '250',
          priceCurrency: 'PEN',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sitio Web Corporativo',
            description: 'Sitio multi-página (5-6 secciones) con blog, SEO completo y formulario avanzado.',
          },
          price: '400',
          priceCurrency: 'PEN',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Premium / Aplicación Web',
            description: 'Sitio o aplicación web a medida con múltiples páginas, 3D, multi-idioma y Analytics.',
          },
          price: '600',
          priceCurrency: 'PEN',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatizaciones con n8n',
            description: 'Automatización de procesos de negocio con n8n: integración de APIs, CRM, WhatsApp, Google Sheets y más.',
          },
          priceCurrency: 'PEN',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hosting y Soporte Mensual',
            description: 'Hosting profesional con SSL, backups y cambios ilimitados.',
          },
          price: '20',
          priceCurrency: 'PEN',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '20',
            priceCurrency: 'PEN',
            unitText: 'MONTH',
          },
        },
      ],
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'KanarianLabs',
    inLanguage: 'es-PE',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué incluye una landing page?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una landing page incluye diseño personalizado, desarrollo responsive para todos los dispositivos, formularios de contacto, optimización SEO básica, integración con redes sociales y hosting por el primer mes.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda el desarrollo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo estándar es de 10 a 15 días hábiles desde que recibimos todo tu contenido. Para proyectos más complejos puede extenderse a 20 días.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué automatizaciones con n8n ofrecen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Integramos WhatsApp, Gmail, Google Sheets, CRMs, pasarelas de pago y APIs personalizadas. Automatizamos captura de leads, notificaciones, reportes y flujos internos para que tu negocio trabaje en automático.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Necesito tener hosting propio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Ofrecemos hosting profesional por S/20 mensuales que incluye SSL, backups automáticos y soporte técnico.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con clientes fuera de Perú?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Trabajamos con clientes de toda Latinoamérica y España. Los pagos internacionales se realizan vía PayPal.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué métodos de pago aceptan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Perú: Transferencia BCP, Yape, Plin. Internacional: PayPal. El pago es 20% de adelanto y 80% al entregar el proyecto.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}

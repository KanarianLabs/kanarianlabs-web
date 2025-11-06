export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KanarianLabs',
    description: 'Desarrollo web profesional en Lima, Perú. Landing pages, sitios corporativos y tiendas online.',
    url: 'https://kanarianlabs.com',
    logo: 'https://kanarianlabs.com/logo.png',
    image: 'https://kanarianlabs.com/og-image.png',
    founder: {
      '@type': 'Person',
      name: 'Miguel Angel Ybañez Esquerre',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51-976-999-009',
      contactType: 'customer service',
      email: 'miguel@kanarianlabs.com',
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      'https://tiktok.com/@kanarianlabs',
      'https://instagram.com/kanarianlabs',
      'https://youtube.com/@kanarianlabs',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Peru',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '50',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'PEN',
      lowPrice: '250',
      highPrice: '1200',
      offerCount: '3',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
